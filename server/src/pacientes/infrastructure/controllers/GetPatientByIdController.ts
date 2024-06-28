import { Request, Response } from 'express';
import { GetPatientByIdUseCase } from '../../application/useCases/GetPatientByIdUseCase';
import { MongoPatientRepository } from '../repositories/MongoPatientRepository';

const repository = new MongoPatientRepository();
const getPatientByIdUseCase = new GetPatientByIdUseCase(repository);

export const getPatientById = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const patient = await getPatientByIdUseCase.execute(id);
        if (!patient) {
            return res.status(404).json({ error: 'Patient not found' });
        }
        res.status(200).json(patient);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};
