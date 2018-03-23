'use strict';
//notes
Object.defineProperty(exports, "__esModule", {
    value: true
});

var _authors = require('./authors');

var _authors2 = _interopRequireDefault(_authors);

var _books = require('./books');

var _books2 = _interopRequireDefault(_books);

var _express = require('express');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.use('/books', _books2.default).use('/authors', _authors2.default);

exports.default = router;