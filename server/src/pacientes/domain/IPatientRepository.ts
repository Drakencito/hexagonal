import { Patient } from './Patient';

export interface IPatientRepository {
    add(patient: Patient): Promise<void>;
    delete(id: string): Promise<void>;
    getAll(): Promise<Patient[]>;
    getById(id: string): Promise<Patient | null>;
    update(patient: Patient): Promise<void>;
}
