const express = require('express');
const router = express.Router();

/* GET travel view */
router.get('/', (req, res) => {
    res.render('travel', { title: 'Travlr Getaways' });
});

module.exports = router;
