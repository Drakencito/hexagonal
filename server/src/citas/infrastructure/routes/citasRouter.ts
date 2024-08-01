// src/routes/appointmentRouter.ts
import express from 'express';
import { createAppointment, getAppointments, updateAppointment, deleteAppointment } from '../controllers/appointmentController';
import { authMiddleware } from '../../../usuarios/infraestructure/middleware/authMiddleware';

export const appointmentRouter = express.Router();

appointmentRouter.post('/create', authMiddleware, createAppointment);
appointmentRouter.get('/list', authMiddleware, getAppointments);
appointmentRouter.put('/update/:id', authMiddleware, updateAppointment);
appointmentRouter.delete('/delete/:id', authMiddleware, deleteAppointment);
