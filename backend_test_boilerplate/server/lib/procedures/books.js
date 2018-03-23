import { row, rows, empty } from '../db';

function all() {
    return rows('spGBooks');
}

function make(name, authorid, cover) {
    return row('spIBook', [name, authorid, cover]);
}

function read(id) {
    return row('spGBook', [id]);
}

function update(id, authorid, cover) {
    return empty('spUBook', [id, authorid, cover]);
}

function demolish(id) {
    return empty('spDBook', [id]);
}

export default {
    all,
    make,
    read,
    update,
    demolish
};