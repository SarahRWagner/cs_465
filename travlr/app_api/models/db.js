const mongoose = require('mongoose');
const readLine = require('readline');

const host = process.env.DB_HOST || '127.0.0.1:27017';
const dbURI = `mongodb://${host}/travlr`;

// ✅ Immediate and proper connection
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


// Connection event listeners
mongoose.connection.on('connected', () => {
  console.log(`✅ Mongoose connected to ${dbURI}`);
});

mongoose.connection.on('error', err => {
  console.error('❌ Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('🔌 Mongoose disconnected');
});

// Windows-specific SIGINT handler
if (process.platform === 'win32') {
  const r1 = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  r1.on('SIGINT', () => {
    process.emit('SIGINT');
  });
}

// Graceful shutdown
const gracefulShutdown = (msg) => {
  mongoose.connection.close(() => {
    console.log(`🔒 Mongoose disconnected through ${msg}`);
  });
};

process.once('SIGUSR2', () => {
  gracefulShutdown('nodemon restart');
  process.kill(process.pid, 'SIGUSR2');
});
process.on('SIGINT', () => {
  gracefulShutdown('app termination');
  process.exit(0);
});
process.on('SIGTERM', () => {
  gracefulShutdown('app shutdown');
  process.exit(0);
});

// Register the schema
require('./travlr');

module.exports = mongoose;
