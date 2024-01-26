const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  const id = req.params.id;
  const pictureData = req.body;
  
  console.log(`Update To Do: ${pictureData}`);
  
  const queryText = `UPDATE "gallery" SET "likes" = $1 WHERE "id" = $2;`;
  
  pool
  .query(queryText, [pictureData.likes, id])
  .then((result) => {
    res.sendStatus(200);
  })
  .catch((err) => {
    console.log('ERROR:', err);
    res.sendStatus(500);
  });
  
});

// GET /gallery
router.get('/', (req, res) => {
  const dbQuery = 'SELECT * FROM "gallery" ORDER BY id;';

  pool
  .query(dbQuery)
  .then((result) => {
    console.log('Return Pictures', result);
    res.send(result.rows);
  })
  .catch((err) => {
    console.log('ERROR:', err);

    res.sendStatus(500);
  });
});

module.exports = router;
