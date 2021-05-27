import express from 'express';
import { sendEmail } from '../lib/email/index.js';

const router = express.Router();

router.post('/', async (req, res, next) => {
	try {
		await sendEmail('ankitlucky.kumar99@gmail.com');
		res.send('Email sent!');
	} catch (error) {
		next(error);
	}
});

export default router;
