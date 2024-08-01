import { Request, Response } from 'express';
import { GetAllAppointmentsUseCase } from '../../application/useCases/GetAllAppointmentsUseCase';
import { MongoAppointmentRepository } from '../repositories/MongoAppointmentRepository';

const repository = new MongoAppointmentRepository();
const getAllAppointmentsUseCase = new GetAllAppointmentsUseCase(repository);

export const getAllAppointments = async (req: Request, res: Response) => {
    try {
        const appointments = await getAllAppointmentsUseCase.execute();
        res.status(200).json(appointments);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};
