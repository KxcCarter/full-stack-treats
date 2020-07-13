const router = require('express').Router();
const pool = require('../modules/pool');

// GET /treats

router.get('/', (req, res) => {
    const query = ``;

    pool
        .query(query)
        .then((dbRes) => {})
        .catch((err) => {
            console.log('', err);
            res.sendStatus(500);
        });
});

// POST /treats
router.post('/', (req, res) => {
    const query = ``;

    pool
        .query(query)
        .then((dbRes) => {})
        .catch((err) => {
            console.log('', err);
            res.sendStatus(500);
        });
});

// PUT /treats/<id>
router.put('/', (req, res) => {
    const query = ``;

    pool
        .query(query)
        .then((dbRes) => {})
        .catch((err) => {
            console.log('', err);
            res.sendStatus(500);
        });
});

// DELETE /treats/<id>
router.delete('/', (req, res) => {
    const query = ``;

    pool
        .query(query)
        .then((dbRes) => {})
        .catch((err) => {
            console.log('', err);
            res.sendStatus(500);
        });
});

module.exports = router;