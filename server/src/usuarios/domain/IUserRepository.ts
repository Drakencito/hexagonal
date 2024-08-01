import { User } from './User';

export interface IUserRepository {
  add(user: User): Promise<void>;
  getByEmail(email: string): Promise<User | null>;
  getById(id: string): Promise<User | null>;
}
