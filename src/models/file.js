import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const FileSchema = new Schema({
    fileName: String,
    fileLocation: String
});