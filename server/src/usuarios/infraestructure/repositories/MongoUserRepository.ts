import mongoose from 'mongoose';
import { User } from '../../domain/User';
import { IUserRepository } from '../../domain/IUserRepository';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    
  },
  email: {
      type: String,
      required: true,
      unique: true,
  },
  password: {
      type: String,
      required: true,
  },
  number: {
      type: Number,
      required: true,
  },
  role:{
      type: String
  }
  }, {
    timestamps: true,
  })

  const UserModel = mongoose.model('User', UserSchema);

export class MongoUserRepository implements IUserRepository {
  async register(user: User): Promise<void> {
      const userModel = new UserModel(user);
      await userModel.save();
  }
  async login(email: string, password: string): Promise<User | null> {
      
  }
  async findByEmail(email: string): Promise<User | null> {
      
  }
  
}
