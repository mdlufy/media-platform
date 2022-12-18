import * as mongoose from 'mongoose'
import { Document } from 'mongoose';

export const UserSchema = new mongoose.Schema({
    fullname: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    createdDate: { type: String, default: Date.now },
});

export const User = mongoose.model('User', UserSchema);


export interface IUser extends Document {
    fullname: string;
    email: string;
    password: string;
    createdDate: Date;
}
