
    const express = require("express");
    const bodyParser = require("body-parser");
    const app = express();
    // parse requests of contenttype: application/json
    app.use(bodyParser.json());
    // parse requests of contenttype: application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: true
    }));
    // simple route
    app.get("/", (req, res) => {
    res.json({ message: "Welcome to web course example application." });
    });
    // set port, listen for requests
    app.listen(3000, () => {
    console.log("Server is running on port 3000.");
    });
