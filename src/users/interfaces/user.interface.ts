import { Document } from 'mongoose';

export interface UserDocument extends Document {
    readonly firstName: string;
    readonly lastName: string;
    readonly email: string;
    readonly phone: string;
    readonly password: string;
}