import { Request, Response } from 'express';
import { AddAppointmentUseCase } from '../../application/useCases/AddAppointmentUseCase';
import { MongoAppointmentRepository } from '../repositories/MongoAppointmentRepository';
import axios from 'axios';

const repository = new MongoAppointmentRepository();
const addAppointmentUseCase = new AddAppointmentUseCase(repository);



export const addAppointment = async (req: Request, res: Response) => {
    const { patientName, date, time } = req.body;
    
    try {
        await addAppointmentUseCase.execute({ patientName, date, time });
        
        res.status(201).json({ message: 'Appointment added successfully' });
    } catch (error) {
        res.status(500).json({ error: error });
    }
};
