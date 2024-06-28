import { Request, Response } from 'express';
import { AddPatientUseCase } from '../../application/useCases/AddPatientUseCase';
import { MongoPatientRepository } from '../repositories/MongoPatientRepository';

const repository = new MongoPatientRepository();
const addPatientUseCase = new AddPatientUseCase(repository);

export const addPatient = async (req: Request, res: Response) => {
    console.log("holi")
    const { name, dateOfBirth, medicalHistory } = req.body;

    try {
        await addPatientUseCase.execute({ name, dateOfBirth, medicalHistory });
        res.status(201).json({ message: 'Patient added successfully' });
    } catch (error) {
        res.status(500).json({ error: error });
    }
};
