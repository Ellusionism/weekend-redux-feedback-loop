const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.post("/", (req, res) => {
  const feedback = {
    feeling: req.body.feeling,
    understanding: req.body.understanding,
    support: req.body.support,
    comments: req.body.comments,
  };
  sqlQuery = `
    INSERT INTO feedback ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4)
    `
  sqlValues = [feedback.feeling, feedback.understanding, feedback.support, feedback.comments];
  pool.query(sqlQuery, sqlValues)
  .then((resp) => {
    res.sendStatus(201);
  }).catch((err) => {
    console.error(`Error in feedbackRouter POST: ${err}`)
    res.sendStatus(500);
  });
});

module.exports = router;