const express = require("express");
const connectDB = require('./database');
const { json } = require("express");
const routes = require("./routes/todoRoutes");
// var bodyParser = require('body-parser')

connectDB();

const app = express();

// create application/json parser
// var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
// var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(json());

app.use("/", routes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

