const express = require("express");
const path = require("path");
const pages = require("./pages.js");

const server = express();

server
    .use(express.static("public"))
    .set("views", path.join(__dirname, "views"))
    .set("view engine", "hbs")
    .get("/", pages.index)
    .get("/create-orphanage", pages.createOrphanage)
    .get("/orphanage", pages.orphanage)
    .get("/orphanages", pages.orphanages);

server.listen(5500);
