import { row, rows, empty } from '../db';

function all() {
    return rows('spGAuthors');
}

function make(firstname, lastname) {
    return row('spIAuthor', [firstname, lastname]);
}

function read(id) {
    return row('spGAuthor', [id]);
}

function update(id, firstname, lastname) {
    return empty('spUAuthor', [id, firstname, lastname]);
}

function demolish(id) {
    return empty('spDAuthor', [id]);
}

export default {
    all,
    make,
    read,
    update,
    demolish
};