import { Router } from 'express';
import { callProcedure } from '../db';
import authormaster from '../master/authors';

let router = Router();

router.get('/', authormaster.all)
router.get('/:id', authormaster.make)
router.post('/', authormaster.create)
router.put('/', authormaster.update)
router.delete('/:id', authormaster.demolish);

export default router;