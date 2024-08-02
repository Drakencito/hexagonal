
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { MongoUserRepository } from '../repositories/MongoUserRepository';

const userRepository = new MongoUserRepository();

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    if (decoded)
    req.body.userToken = decoded;

    const user = await userRepository.getById(req.body.userToken.userId);
    if (!user) {
      return res.status(401).json({ message: 'Invalid token.' });
    }

    next();
  } catch (error) {
    res.status(400).json({ message: 'Invalid token.' });
  }
};
