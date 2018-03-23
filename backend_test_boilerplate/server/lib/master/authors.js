'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _authors = require('../procedures/authors');

var _authors2 = _interopRequireDefault(_authors);

function _interopRequireDefault(obj) { 
    return obj && obj.__esModule ? obj : { default: obj }; 
}

function all(req, res, next) {

    _authors2.default.all().then(function (authors) {
        res.json(authors);
    });
}

function make(req, res, next) {

    var author = {
        firstname: req.body.firstname,
        lastname: req.body.lastname
    };

    _authors2.default.make(author.firstname, author.lastname).then(function (id) {
        res.json(id);
    });
}

function read(req, res, next) {

    var id = +req.params.id;

    _authors2.default.read(id).then(function (author) {
        res.json(author);
    });
}

function update(req, res, next) {

    var author = {
        id: req.body.id,
        firstname: req.body.firstname,
        lastname: req.body.lastname
    };

    _authors2.default.update(author.id,author.firstname,author.lastname).then(function () {

        res.sendStatus(201);
    });
}

function demolish(req, res, next) {

    _authors2.default.demolish(req.params.id).then(function () {
        res.sendStatus(204);
    });
}

exports.default = {
    all: all,
    make: make,
    read: read,
    update: update,
    demolish: demolish
};