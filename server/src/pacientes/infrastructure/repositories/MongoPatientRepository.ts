import mongoose from 'mongoose';
import { Patient } from '../../domain/Patient';
import { IPatientRepository } from '../../domain/IPatientRepository';


const PatientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    medicalHistory: { type: String, required: true }
}, {
    timestamps: true,
});

const PatientModel = mongoose.model('Patient', PatientSchema);

export class MongoPatientRepository implements IPatientRepository {
    async add(patient: Patient): Promise<void> {
        const patientModel = new PatientModel(patient);
        await patientModel.save();
    }

    async delete(id: string): Promise<void> {
        await PatientModel.findByIdAndDelete(id);
    }

    async getAll(): Promise<Patient[]> {
        return await PatientModel.find().lean();
    }

    async getById(id: string): Promise<Patient | null> {
        return await PatientModel.findById(id).lean();
    }

    async update(patient: Patient): Promise<void> {
        await PatientModel.findByIdAndUpdate(patient.id, patient);
    }
}
