import { Request, Response } from 'express';
import { RegisterUserUseCase } from '../../application/useCases/RegisterUserUseCase';
import { LoginUserUseCase } from '../../application/useCases/LoginUserUseCase';
import { MongoUserRepository } from '../repositories/MongoUserRepository';

const repository = new MongoUserRepository();
const registerUserUseCase = new RegisterUserUseCase(repository);
const loginUserUseCase = new LoginUserUseCase(repository);

export const registerUser = async (req: Request, res: Response) => {
    const { name, email, password, phoneNumber } = req.body;
    const role = "patient"
    try {
        
        await registerUserUseCase.execute({ name, email, password, phoneNumber, role });
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const loginUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        const token = await loginUserUseCase.execute(email, password);
        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        res.status(500).json({ error: error });
    }
};
