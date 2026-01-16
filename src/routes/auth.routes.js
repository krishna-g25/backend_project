import {Router} from 'express';
import {registerUser} from '../controllers/Auth.controllers.js'; 
const router = Router();
router.route('/register').post(registerUser);

export default router;