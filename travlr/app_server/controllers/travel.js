const express = require('express');
const router = express.Router();

var fs = require('fs');
var trips = JSON.parse(fs.readFileSync('.data/trips.json','utf8'));

/* GET travel view */
router.get('/', (req, res) => {
    res.render('travel', { title: 'Travlr Getaways' });
});

module.exports = router;
