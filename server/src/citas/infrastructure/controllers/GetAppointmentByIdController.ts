import { Request, Response } from 'express';
import { GetAppointmentByIdUseCase } from '../../application/useCases/GetAppointmentsByIdUseCase';
import { MongoAppointmentRepository } from '../repositories/MongoAppointmentRepository';

const repository = new MongoAppointmentRepository();
const getAppointmentByIdUseCase = new GetAppointmentByIdUseCase(repository);

export const getAppointmentById = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const appointment = await getAppointmentByIdUseCase.execute(id);
        if (!appointment) {
            return res.status(404).json({ error: 'Appointment not found' });
        }
        res.status(200).json(appointment);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};
