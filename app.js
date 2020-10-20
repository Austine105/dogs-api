const express = require("express");
const bodyparser = require("body-parser");
const port = process.env.PORT || 5000;
const dogRoute = require("./routes/dog.route");

const app = express();
// const router = app.router();
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use('/dog', dogRoute);

app.listen(port, () => console.log(`Express Server started on ${port}`));
