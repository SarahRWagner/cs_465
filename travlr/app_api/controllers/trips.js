const Trip = require('../models/travlr');

const tripsList = async (req, res) => {
  try {
    const trips = await Trip.find({});
    if (!trips.length) {
      return res.status(404).json({ message: 'No trips found' });
    }
    res.status(200).json(trips);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const tripsFindByCode = async (req, res) => {
  try {
    const trip = await Trip.findOne({ code: req.params.tripCode });
    if (!trip) {
      return res.status(404).json({ message: 'Trip not found' });
    }
    res.status(200).json(trip);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


module.exports = {
  tripsList,
  tripsFindByCode
};
