import bookProcedures from '../procedures/books';
//notes
function all(req, res, next) {
    bookProcedures.all()
        .then((books) => {
            res.json(books);
        });
}

function make(req, res, next) {
    let book = {
        name: req.body.name,
        authorid: req.body.authorid,
        cover: req.body.cover
    };

    bookProcedures.make(book.name, book.authorid, book.cover)
        .then((id) => {
            res.json(id);
        });
}

function read(req, res, next) {
    let id = +req.params.id;

    bookProcedures.read(id)
        .then((book) => {
            res.json(book);
        });
}

function update(req, res, next) {

    let book = {
        id: req.body.id,
        name: req.body.name,
        authorid: req.body.authorid,
        cover: req.body.cover
    };

    bookProcedures.update(book.id, book.name, book.authorid, book.cover)
        .then(() => {
            res.sendStatus(201);
        });
}

function demolish(req, res, next) {
    
    bookProcedures.demolish(req.params.id)
        .then(() => {
            res.sendStatus(204);
        });
}

export default {
    all,
    make,
    read,
    update,
    demolish
};