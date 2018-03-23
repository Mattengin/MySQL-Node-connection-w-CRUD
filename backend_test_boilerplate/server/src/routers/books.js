import { Router } from 'express';
import { callProcedure } from '../db';
import bookmaster from '../master/books';

let router = Router();

router
    .get('/', bookmaster.all)
    .get('/:id', bookmaster.make)
    .post('/', bookmaster.create)
    .put('/', bookmaster.update)
    .delete('/:id', bookmaster.demolish);

export default router;