import { User } from './User';

export interface IUserRepository {
  register(user: User): Promise<void>;
  login(email: string, password: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
}
