import { uploadFile } from "../services/file-upload-service.js";

export const addFileController = (router) => {
    router.post('/api/upload', (req, res) => {
        try {
            uploadFile(req.files.file);
            res.send({message: 'uploaded successfully.'})
        } catch (error) {
            res.status(500).send(error);
        }
    });
}