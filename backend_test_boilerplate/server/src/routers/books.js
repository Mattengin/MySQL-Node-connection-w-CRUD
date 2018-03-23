import { Router } from 'express';
import { callProcedure } from '../db';
import bookmaster from '../master/books';

let router = Router();

router.get('/', bookmaster.all)
router.get('/:id', bookmaster.make)
router.post('/', bookmaster.create)
router.put('/', bookmaster.update)
router.delete('/:id', bookmaster.demolish);

export default router;