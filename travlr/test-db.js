const mongoose = require('mongoose');
const Trip = require('./app_api/models/travlr');

mongoose.connect('mongodb://127.0.0.1:27017/travlr')
  .then(async () => {
    const trips = await Trip.find({});
    console.log('✅ Queried trips:', trips);
    process.exit(0);
  })
  .catch(err => {
    console.error('❌ Failed:', err.message);
    process.exit(1);
  });
