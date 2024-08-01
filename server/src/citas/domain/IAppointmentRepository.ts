import { Appointment } from './Appointment';

export interface IAppointmentRepository {
    add(appointment: Appointment): Promise<void>;
    delete(id: string): Promise<void>;
    getAll(): Promise<Appointment[]>;
    getById(id: string): Promise<Appointment | null>;
    update(appointment: Appointment): Promise<void>;
}
