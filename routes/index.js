import routerx from 'express-promise-router';
import personaRouter from './persona';
import ramaRouter from './rama';

const router=routerx();

router.use('/persona',personaRouter);
router.use('/rama',ramaRouter);
export default router;