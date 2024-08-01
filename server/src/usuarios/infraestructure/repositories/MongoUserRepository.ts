// src/infrastructure/repositories/MongoUserRepository.ts
import mongoose from 'mongoose';
import { IUserRepository } from '../../domain/IUserRepository';
import { User } from '../../domain/User';

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    role: { type: String, required: true }
}, {
    timestamps: true,
});

const UserModel = mongoose.model('User', UserSchema);

export class MongoUserRepository implements IUserRepository {
    async add(user: User): Promise<void> {
        const userModel = new UserModel(user);
        await userModel.save();
    }

    async getByEmail(email: string): Promise<User | null> {
        return await UserModel.findOne({ email }).lean();
    }

    async getById(id: string): Promise<User | null> {
        return await UserModel.findById(id).lean();
    }
}
