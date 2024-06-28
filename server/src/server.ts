import express, { Application, Request, Response } from 'express';
import { connectDB } from './config/database'; 
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import {patientRouter} from "./pacientes/infrastructure/routes/PatientRoutes";

const app: Application = express();
const port: number = parseInt(process.env.PORT as string, 10) || 3000;

connectDB(); 
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use('/v1', patientRouter

);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
