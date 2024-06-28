import { Request, Response } from 'express';
import { DeletePatientUseCase } from '../../application/useCases/DeletePatientUseCase';
import { MongoPatientRepository } from '../repositories/MongoPatientRepository';

const repository = new MongoPatientRepository();
const deletePatientUseCase = new DeletePatientUseCase(repository);

export const deletePatient = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        await deletePatientUseCase.execute(id);
        res.status(200).json({ message: 'Patient deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error});
    }
};
