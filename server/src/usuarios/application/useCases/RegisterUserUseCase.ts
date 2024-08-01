import bcrypt from 'bcrypt';
import { User } from '../../domain/User';
import { IUserRepository } from '../../domain/IUserRepository';

export class RegisterUserUseCase {
    constructor(private repository: IUserRepository) {}

    async execute(data: Omit<User, 'id'>): Promise<void> {
        const hashedPassword = await bcrypt.hash(data.password, 10);
        const newUser = new User('', data.name, data.email, hashedPassword, data.phoneNumber, data.role);
        await this.repository.add(newUser);
    }
}
