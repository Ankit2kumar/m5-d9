import fs from 'fs-extra';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const { readJSON } = fs;

const dataFolderPath = join(dirname(fileURLToPath(import.meta.url)), '../data');

export const getBooks = async () =>
	await readJSON(join(dataFolderPath, 'authors.json'));

export const getBooksReadStream = () =>
	fs.createReadStream(join(dataFolderPath, 'authors.json'));

export const getCurrentFolderPath = (currentFile) =>
	dirname(fileURLToPath(currentFile));
