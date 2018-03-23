'use strict';
//notes
Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _db = require('../db');

var _authors = require('../master/authors');

var _authors2 = _interopRequireDefault(_authors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get('/', _authors2.default.all).get('/:id', _authors2.default.read).post('/', _authors2.default.create).put('/', _authors2.default.update).delete('/:id', _authors2.default.destroy);

exports.default = router;