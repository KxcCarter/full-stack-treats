const router = require('express').Router();
const pool = require('../modules/pool');

// GET /treats

router.get('/', (req, res) => {
    const query = `SELECT * FROM treats`;

    pool
        .query(query)
        .then((dbRes) => {
            res.send(dbRes.rows);
        })
        .catch((err) => {
            console.log('GET error:', err);
            res.sendStatus(500);
        });
});

// POST /treats
router.post('/', (req, res) => {
    const query = `INSERT INTO treats (name, description, pic)
                    VALUES ($1, $2, $3);`;
    console.log(req.body);

    pool
        .query(query, [req.body.name, req.body.description, req.body.pic])
        .then((dbRes) => {
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log('POST error:', err);
            res.sendStatus(500);
        });
});

// PUT /treats/<id>
router.put('/:id', (req, res) => {
    const query = `UPDATE treats SET description = $1 WHERE id = $2;`;

    pool
        .query(query, [req.body.description, req.params.id])
        .then((dbRes) => {
            res.sendStatus(200);
        })
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