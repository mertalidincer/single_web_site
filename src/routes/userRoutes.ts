import express from 'express';
import { postCreateUser, getUsers } from '../controllers/userController';

const router = express.Router();

router.post('/create', postCreateUser);
router.get('/', getUsers);

export default router;