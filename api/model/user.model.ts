import { model, Schema, Model, Document } from 'mongoose';

export interface IUser extends Document {
    firstName: string;
    lastName: string;
    emailId: string;
    createDate: Date,
    updatedDate: Date;
}

const UserSchema: Schema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    emailId: { type: String, required: true },
    createDate: { type: Date, default: Date.now },
    updatedDate: { type: Date, default: Date.now }
}, {
    versionKey: false, // Here You have to add.
});

export const UserModel: Model<IUser> = model<IUser>('users', UserSchema);