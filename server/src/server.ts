// server.ts

import express, { Application } from 'express';
import { connectDB } from './config/database'; 
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { patientRouter } from './pacientes/infrastructure/routes/PatientRoutes';
import { authRouter } from "./usuarios/infraestructure/routes/authRoutes";
import { appointmentRouter } from "./citas/infrastructure/routes/citasRouter";
import dotenv from 'dotenv';

// Cargar variables de entorno desde el archivo .env
dotenv.config();

// Crear una instancia de Express
const app: Application = express();
const port: number = parseInt(process.env.PORT as string, 10) || 3001;

// Conectar a la base de datos
connectDB(); 

// Configurar middleware de CORS para permitir solicitudes desde el frontend
app.use(cors({
    origin: 'http://localhost:3001', // Cambia esto según el origen de tu frontend
    credentials: true
}));

// Configurar middleware para registrar solicitudes HTTP
app.use(morgan('dev'));

// Configurar middleware para parsear JSON y cookies
app.use(express.json());
app.use(cookieParser());

// Registrar rutas
app.use('/v1/pacientes', patientRouter);
app.use('/v1/usuarios',authRouter);
app.use('/v1/citas',appointmentRouter);

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
