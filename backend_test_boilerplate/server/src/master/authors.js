import authorProcedures from '../procedures/authors';

function all(req, res, next) {

    authorProcedures.all()

        .then((authors) => {
            
            res.json(authors);
        });
}

function make(req, res, next) {
    let author = {

        firstname: req.body.firstname,

        lastname: req.body.lastname

    };

    authorProcedures.make(author.firstname, author.lastname)
        .then((id) => {

            res.json(id);
            
        });
}

function read(req, res, next) {
    let id = +req.params.id;

    authorProcedures.read(id)
        .then((author) => {
            res.json(author);
        });
}

function update(req, res, next) {
    let author = {
        id: req.body.id,

        firstname: req.body.firstname,

        lastname: req.body.lastname
    };

    authorProcedures.update(author.id, author.firstname, author.lastname)
        .then(() => {
            res.sendStatus(201);
        });
}

function demolish(req, res, next) {
    authorProcedures.demolish(req.params.id)

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