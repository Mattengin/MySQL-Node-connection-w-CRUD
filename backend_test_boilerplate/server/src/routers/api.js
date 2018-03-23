import authorRouter from './authors';
import bookRouter from './books';
import { Router } from 'express';

let router = Router();

router.use('/books', bookRouter)
router.use('/authors', authorRouter);

export default router;
