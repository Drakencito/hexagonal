import { Request, Response } from 'express';
import { UpdatePatientUseCase } from '../../application/useCases/UpdatePatientUseCase';
import { MongoPatientRepository } from '../repositories/MongoPatientRepository';

const repository = new MongoPatientRepository();
const updatePatientUseCase = new UpdatePatientUseCase(repository);

export const updatePatient = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, dateOfBirth, medicalHistory } = req.body;

    try {
        await updatePatientUseCase.execute({ id, name, dateOfBirth, medicalHistory });
        res.status(200).json({ message: 'Patient updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error});
    }
};
