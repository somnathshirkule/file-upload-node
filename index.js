import express from 'express';
import bodyParser from 'body-parser';
import { addFileController } from './src/controllers/file-upload-controller.js';
import fileUpload from 'express-fileupload';
import mongoose from 'mongoose';
import { validateAuthToken } from './src/filters/authFilter.js';

const CONTEXT_PATH = '/file-upload';
const UPLOADED_ALIAS = '/files';
const PORT = 8080;
const MONGO_STR = 'mongodb://localhost:27017/files';
const router = express.Router();
const app = express();

mongoose.Promise = global.Promise;;

mongoose.connect(MONGO_STR);
app.use(CONTEXT_PATH + UPLOADED_ALIAS, validateAuthToken, express.static('uploads'));

app.use(fileUpload());
app.use(bodyParser.json());
app.use(CONTEXT_PATH, router);

addFileController(router);

router.get('/', (req, res) => res.send('app running on context path ' + CONTEXT_PATH))

app.listen(PORT, () => {
    console.log('express app started on port => ' + PORT);
});