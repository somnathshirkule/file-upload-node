import { uploadFile } from "../services/file-upload-service.js";

export const addFileController = (router) => {
    router.post('/api/upload', (req, res) => {
        try {
            let uploadResponse = uploadFile(req.files.file);
            res.send({message: uploadResponse})
        } catch (error) {
            res.status(500).send(error);
        }
    });
}