import express from 'express';
import listEndpoints from 'express-list-endpoints';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import YAML from 'yamljs';
import swaggerUI from 'swagger-ui-express';
import authorsRouter from './authors/index.js';

const port = 3001;

const server = express();
server.use('/authors', authorsRouter);
server.use(cors());
server.use(express.json());

console.table(listEndpoints(server));

server.listen(port, () => {
	console.log(`Server Started ${port}`);
});
