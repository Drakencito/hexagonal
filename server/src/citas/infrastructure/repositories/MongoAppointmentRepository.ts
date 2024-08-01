// src/infrastructure/repositories/MongoAppointmentRepository.ts
import mongoose from 'mongoose';
import { IAppointmentRepository } from '../../domain/IAppointmentRepository';
import { Appointment } from '../../domain/Appointment';

const AppointmentSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    time: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
}, {
    timestamps: true,
});

const AppointmentModel = mongoose.model('Appointment', AppointmentSchema);

export class MongoAppointmentRepository implements IAppointmentRepository {
    async add(appointment: Appointment): Promise<void> {
        const appointmentModel = new AppointmentModel(appointment);
        await appointmentModel.save();
    }

    async getById(id: string): Promise<Appointment | null> {
        return await AppointmentModel.findById(id).populate('userId').lean();
    }

    async getAllByUserId(userId: string): Promise<Appointment[]> {
        return await AppointmentModel.find({ userId }).sort({ date: 1, time: 1 }).populate('userId').lean();
    }

    async getAll(): Promise<Appointment[]> {
        return await AppointmentModel.find().sort({ date: 1, time: 1 }).populate('userId').lean();
    }

    async delete(id: string): Promise<void> {
        await AppointmentModel.findByIdAndDelete(id);
    }

    async update(appointment: Appointment): Promise<void> {
        await AppointmentModel.findByIdAndUpdate(appointment.id, appointment);
    }
}
