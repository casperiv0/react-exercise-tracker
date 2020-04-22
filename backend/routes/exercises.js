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


router.get("/edit/:id", (req, res) => {
    Exercise.findById(req.params.id)
        .then(exercise => res.json(exercise))
        .catch(err => res.send(err));
});

router.post('/edit/:id', async (req, res) => {
    const exercise = await Exercise.findById(req.params.id);

    exercise.exercise = req.body.exercise;
    exercise.duration = Number(req.body.duration);
    exercise.date = req.body.date;
    exercise.description = req.body.description
    exercise.save()
        .then(() => res.sendStatus(200))
        .catch(err => res.send(err));
});


router.get("/delete/:id", async (req, res) => {
    const exercise = await Exercise.findByIdAndDelete(req.params.id)
        .then(() => res.redirect("http://localhost:3000"))
        .catch(err => res.send(err));
})


module.exports = router;