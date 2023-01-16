const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

let app = express();
let port = process.env.PORT || 8080;
let bodyParser = require("body-parser");
let mongoose = require("mongoose");

let apiRoutes = require("./routes");

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(bodyParser.json());

const dbPath = process.env.DB || "mongodb://localhost/kansan";
const options = { useNewUrlParser: true, useUnifiedTopology: true };

app.get("/", (req, res) => res.send("Welcome to Express"));

app.use("/api", apiRoutes);

mongoose.set("strictQuery", true);
mongoose.connect(dbPath, options).then(
    () => {
        app.listen(port, function () {
            console.log("🚀 Database connected & Server running on " + port);
        });
    },
    (error) => {
        console.log(error, "error");
    }
);
