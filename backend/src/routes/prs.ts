import {Router} from 'express' ;
import { prsRouteCRUDHandler  } from '../controllers/prs';


const router = Router();


/* Defining our routes for this tiny app */
router.post('/' , prsRouteCRUDHandler.postHandler);
router.get('/' , prsRouteCRUDHandler.getHandler);


export default router
