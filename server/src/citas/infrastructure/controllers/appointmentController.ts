// src/citas/infrastructure/controllers/appointmentController.ts
import { Request, Response } from 'express';
import { GetAppointmentsUseCase } from '../../application/useCases/getAppointmentsUseCase';
import { CreateAppointmentUseCase } from '../../application/useCases/createAppointmentUseCase';
import { UpdateAppointmentUseCase } from '../../application/useCases/updateAppointmentUseCase';
import { DeleteAppointmentUseCase } from '../../application/useCases/deleteAppointmentUseCase';
import { MongoAppointmentRepository } from '../repositories/MongoAppointmentRepository';
import { MongoUserRepository } from '../../../usuarios/infraestructure/repositories/MongoUserRepository';

const appointmentRepository = new MongoAppointmentRepository();
const userRepository = new MongoUserRepository();
const createAppointmentUseCase = new CreateAppointmentUseCase(appointmentRepository);
const getAppointmentsUseCase = new GetAppointmentsUseCase(appointmentRepository);
const updateAppointmentUseCase = new UpdateAppointmentUseCase(appointmentRepository);
const deleteAppointmentUseCase = new DeleteAppointmentUseCase(appointmentRepository);

export const createAppointment = async (req: Request, res: Response) => {
    const { date, time } = req.body;
    const userId = req.userId; // Extraído del token

    try {
        await createAppointmentUseCase.execute(date, time, userId!);
        res.status(201).json({ message: 'Appointment created successfully' });
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const getAppointments = async (req: Request, res: Response) => {
    const userId = req.userId!; // Extraído del token

    try {
        // Obtener el rol del usuario desde la base de datos
        const user = await userRepository.getById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const userRole = user.role;

        // Recuperar citas basadas en el rol del usuario
        const appointments = userRole === 'admin'
            ? await getAppointmentsUseCase.execute() // Obtener todas las citas si es admin
            : await getAppointmentsUseCase.execute(userId); // Obtener citas para el usuario específico

        res.status(200).json({ appointments });
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const updateAppointment = async (req: Request, res: Response) => {
    const { id, date, time } = req.body;

    try {
        const existingAppointment = await appointmentRepository.getById(id);
        if (!existingAppointment) {
            return res.status(404).json({ error: 'Appointment not found' });
        }

        const updatedAppointment = { id, date, time, userId: existingAppointment.userId };
        await updateAppointmentUseCase.execute(updatedAppointment);
        res.status(200).json({ message: 'Appointment updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const deleteAppointment = async (req: Request, res: Response) => {
    const { id } = req.body;

    try {
        const existingAppointment = await appointmentRepository.getById(id);
        if (!existingAppointment) {
            return res.status(404).json({ error: 'Appointment not found' });
        }

        await deleteAppointmentUseCase.execute(id);
        res.status(200).json({ message: 'Appointment deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error });
    }
};
