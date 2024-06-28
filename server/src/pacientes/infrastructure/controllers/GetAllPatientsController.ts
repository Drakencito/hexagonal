import { Request, Response } from 'express';
import { GetAllPatientsUseCase } from '../../application/useCases/GetAllPatientsUseCase';
import { MongoPatientRepository } from '../repositories/MongoPatientRepository';

const repository = new MongoPatientRepository();
const getAllPatientsUseCase = new GetAllPatientsUseCase(repository);

export const getAllPatients = async (req: Request, res: Response) => {
    try {
        const patients = await getAllPatientsUseCase.execute();
        res.status(200).json(patients);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};
