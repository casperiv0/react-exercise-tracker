const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose")
const port = process.env.PORT || 3001;
require("dotenv").config()

const exercises = require("./routes/exercises")
const users = require("./routes/users")


app.use(cors());
app.use(express.json());

app.use("/exercises", exercises)
app.use("/users", users)


mongoose.connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


app.listen(port, () => {
    console.log("Running on %s", port);
})