
import express, { Application } from 'express';
import { connectDB } from './config/database'; 
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { patientRouter } from './pacientes/infrastructure/routes/PatientRoutes';
import { authRouter } from "./usuarios/infraestructure/routes/authRoutes";
import { appointmentRouter } from "./citas/infrastructure/routes/citasRouter";
import dotenv from 'dotenv';


dotenv.config();


const app: Application = express();
const port: number = parseInt(process.env.PORT as string, 10) || 3001;


connectDB(); 

app.use(cors({
    origin: 'http://localhost:3001', 
    credentials: true
}));

app.use(morgan('dev'));


app.use(express.json());
app.use(cookieParser());


app.use('/v1/pacientes', patientRouter);
app.use('/v1/usuarios',authRouter);
app.use('/v1/citas',appointmentRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
