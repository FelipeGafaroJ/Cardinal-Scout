import routerx from 'express-promise-router';
import personaRouter from './persona';

const router=routerx();

router.use('/persona',personaRouter);
export default router;