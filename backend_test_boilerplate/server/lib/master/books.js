'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _books = require('../procedures/books');

var _books2 = _interopRequireDefault(_books);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function all(req, res, next) {
    _books2.default.all().then(function (books) {
        res.json(books);
    });
}

function make(req, res, next) {
    var book = {
        name: req.body.name,
        authorid: req.body.authorid,
        cover: req.body.cover
    };

    _books2.default.make(book.name, book.authorid, book.cover).then(function (id) {
        res.json(id);
    });
}

function read(req, res, next) {
    var id = +req.params.id;

    _books2.default.read(id).then(function (book) {
        res.json(book);
    });
}

function update(req, res, next) {
    var book = {
        id: req.body.id,
        name: req.body.name,
        authorid: req.body.authorid,
        cover: req.body.cover
    };

    _books2.default.update(book.id, book.name, book.authorid, book.cover).then(function () {
        res.sendStatus(201);
    });
}

function demolish(req, res, next) {
    _books2.default.demolish(req.params.id).then(function () {
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