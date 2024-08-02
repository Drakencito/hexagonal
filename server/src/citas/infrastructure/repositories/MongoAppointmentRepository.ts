import mongoose from 'mongoose';
import { Appointment } from '../../domain/Appointment';
import { IAppointmentRepository } from '../../domain/IAppointmentRepository';

const AppointmentSchema = new mongoose.Schema({
    patientName: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true }

}, {
    timestamps: true,
});

const AppointmentModel = mongoose.model('Appointment', AppointmentSchema);

export class MongoAppointmentRepository implements IAppointmentRepository {
    async add(appointment: Appointment): Promise<void> {
        const appointmentModel = new AppointmentModel(appointment);
        await appointmentModel.save();
    }

    async delete(id: string): Promise<void> {
        await AppointmentModel.findByIdAndDelete(id);
    }

    async getAll(): Promise<Appointment[]> {
        return await AppointmentModel.find().lean();
    }

    async getById(id: string): Promise<Appointment | null> {
        return await AppointmentModel.findById(id).lean();
    }

    async update(appointment: Appointment): Promise<void> {
        await AppointmentModel.findByIdAndUpdate(appointment.id, appointment);
    }
}
