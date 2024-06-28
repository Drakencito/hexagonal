import express from 'express';
import { addPatient } from '../controllers/AddPatientController';
import { deletePatient } from '../controllers/DeletePatientController';
import { getAllPatients } from '../controllers/GetAllPatientsController';
import { getPatientById } from '../controllers/GetPatientByIdController';
import { updatePatient } from '../controllers/UpdatePatientController';

export const patientRouter = express.Router();

patientRouter.post('/patients', addPatient);
patientRouter.delete('/patients/:id', deletePatient);
patientRouter.get('/patients', getAllPatients);
patientRouter.get('/patients/:id', getPatientById);
patientRouter.put('/patients/:id', updatePatient);


