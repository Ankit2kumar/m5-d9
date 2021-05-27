import express from 'express';
import { pipeline } from 'stream';
import { Transform } from 'json2csv';

const authorsRouter = express.Router();
authorsRouter.post('/pdfDownload', async (req, res, next) => {
	try {
		const source = generatePDFStream();
	} catch (error) {
		next(error);
	}
});

export default authorsRouter;
