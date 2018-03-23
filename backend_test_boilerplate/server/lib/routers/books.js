'use strict';
//notes
Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _db = require('../db');

var _books = require('../master/books');

var _books2 = _interopRequireDefault(_books);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get('/', _books2.default.all).get('/:id', _books2.default.read).post('/', _books2.default.create).put('/', _books2.default.update).delete('/:id', _books2.default.destroy);

exports.default = router;