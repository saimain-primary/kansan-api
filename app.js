const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const path = require("path");

let app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use("/assets", express.static("assets"));

let port = process.env.PORT || 8080;
let bodyParser = require("body-parser");
let mongoose = require("mongoose");

let webRoutes = require("./routes/web");
let apiRoutes = require("./routes/api");

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(bodyParser.json());

const dbPath = process.env.DB || "mongodb://localhost/kansan";
const options = { useNewUrlParser: true, useUnifiedTopology: true };

app.use("/", webRoutes);
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
