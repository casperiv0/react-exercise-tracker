const router = require("express").Router();
const Exercise = require("../models/Exercise");


router.get("/", (req, res) => {
    Exercise.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.send(err));
});


router.post("/add-exercise", (req, res) => {
    const exercise = req.body.exercise;
    const duration = req.body.duration;
    const date = req.body.date;
    const description = req.body.description

    const newExercise = new Exercise({ exercise, duration, date, description });

    newExercise.save()
        .then(() => res.sendStatus(200))
        .catch(err => res.send(err))
});

module.exports = router;