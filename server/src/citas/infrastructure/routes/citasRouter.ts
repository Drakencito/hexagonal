import express from 'express';
import { addAppointment } from '../controllers/AddAppointmentController';
import { deleteAppointment } from '../controllers/DeleteAppointmentController';
import { getAllAppointments } from '../controllers/GetAllAppointmentsController';
import { getAppointmentById } from '../controllers/GetAppointmentByIdController';
import { updateAppointment } from '../controllers/UpdateAppointmentController';
import { authMiddleware } from '../../../usuarios/infraestructure/middleware/authMiddleware';

export const appointmentRouter = express.Router();

//appointmentRouter.use(authMiddleware);

appointmentRouter.post('/appointments', addAppointment);
appointmentRouter.delete('/appointments/:id', deleteAppointment);
appointmentRouter.get('/appointments', getAllAppointments);
appointmentRouter.get('/appointments/:id', getAppointmentById);
appointmentRouter.put('/appointments/:id', updateAppointment);
