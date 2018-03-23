import { Router } from 'express';
import { callProcedure } from '../db';
import authormaster from '../master/authors';

let router = Router();

router
    .get('/', authormaster.all)
    .get('/:id', authormaster.make)
    .post('/', authormaster.create)
    .put('/', authormaster.update)
    .delete('/:id', authormaster.demolish);

export default router;