import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../../domain/User';
import { IUserRepository } from '../../domain/IUserRepository';

const secret = 'your_jwt_secret'; // Use a secure secret in production

export class LoginUserUseCase {
    constructor(private repository: IUserRepository) {}

    async execute(email: string, password: string): Promise<string> {
        const user = await this.repository.getByEmail(email);
        if (!user) throw new Error('User not found');

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) throw new Error('Invalid password');

        const token = jwt.sign({ id: user.id, email: user.email, role: user.role, number: user.phoneNumber }, secret, { expiresIn: '1h' });

        return token;
    }
}
