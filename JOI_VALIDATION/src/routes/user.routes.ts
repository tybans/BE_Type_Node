import express from 'express';
import { registerUser } from '../controllers/user.controller';
import { validateBody } from '../middlewares/validate';
import { registerSchema } from '../validations/user.validation';


const router = express.Router();


router.post('/register', validateBody(registerSchema), registerUser);



export default router;
