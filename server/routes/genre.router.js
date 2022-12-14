const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Add query to get all genres

  console.log('!!!!!!!REQ', req.query.id)

    const query = `SELECT "genres".name
    FROM "genres"
    JOIN "movies_genres" ON "movies_genres".genre_id = "genres".id
    JOIN "movies" ON "movies".id = "movies_genres".movie_id
    WHERE "movies".id = ${req.query.id};`;
  
    pool.query(query)
      .then( result => {
        res.send(result.rows);
      })
      .catch(err => {
        console.log('ERROR: Get all movies', err);
        res.sendStatus(500)
      })
  
});

module.exports = router;