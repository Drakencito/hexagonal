import { Request, Response } from 'express';
import { AddAppointmentUseCase } from '../../application/useCases/AddAppointmentUseCase';
import { MongoAppointmentRepository } from '../repositories/MongoAppointmentRepository';
import axios from 'axios';

const repository = new MongoAppointmentRepository();
const addAppointmentUseCase = new AddAppointmentUseCase(repository);

const DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1252772073936519258/FN0w9P8f1o85AryOLVmytNCPghR2QkuJN__g7zRGJs2waOQnXUcG7dpSMQE1dF6YOTZ4'; // Reemplaza con tu URL del webhook

const sendDiscordNotification = async (patientName: string, date: string, time: string) => {
    try {
        await axios.post(DISCORD_WEBHOOK_URL, {
            content: `New appointment scheduled!\n\n**Patient Name:** ${patientName}\n**Date:** ${date}\n**Time:** ${time}`
        });
    } catch (error) {
        console.error('Error sending Discord notification:', error);
    }
};

export const addAppointment = async (req: Request, res: Response) => {
    const { patientName, date, time } = req.body;
    
    try {
        await addAppointmentUseCase.execute({ patientName, date, time });
        await sendDiscordNotification(patientName, date, time);
        res.status(201).json({ message: 'Appointment added successfully' });
    } catch (error) {
        res.status(500).json({ error: error });
    }
};
