const router = require("express").Router();
const Users = require("../models/Users");

router.get("/", (req, res) => {
  Users.find()
    .then((exercises) => res.json(exercises))
    .catch((err) => res.send(err));
});

router.post("/", async (req, res) => {
  const { username } = req.body;

  const user = await Users.findOne({ username });

  if (user) {
    res.send("Username Already exists");
  } else {
    const newUser = new Users({ username });

    newUser.save();
    res.sendStatus(200);
  }
});

module.exports = router;
