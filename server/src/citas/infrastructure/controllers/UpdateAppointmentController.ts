import { Request, Response } from 'express';
import { UpdateAppointmentUseCase } from '../../application/useCases/UpdateAppointmentUseCase';
import { MongoAppointmentRepository } from '../repositories/MongoAppointmentRepository';

const repository = new MongoAppointmentRepository();
const updateAppointmentUseCase = new UpdateAppointmentUseCase(repository);

export const updateAppointment = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { patientName, date, time } = req.body;

    try {
        await updateAppointmentUseCase.execute({ id, patientName, date, time });
        res.status(200).json({ message: 'Appointment updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error});
    }
};
