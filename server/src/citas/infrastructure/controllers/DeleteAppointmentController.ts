import { Request, Response } from 'express';
import { DeleteAppointmentUseCase } from '../../application/useCases/DeleteAppointmentUseCase';
import { MongoAppointmentRepository } from '../repositories/MongoAppointmentRepository';

const repository = new MongoAppointmentRepository();
const deleteAppointmentUseCase = new DeleteAppointmentUseCase(repository);

export const deleteAppointment = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        await deleteAppointmentUseCase.execute(id);
        res.status(200).json({ message: 'Appointment deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error});
    }
};
