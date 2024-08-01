// src/domain/IAppointmentRepository.ts
import { Appointment } from './Appointment';

export interface IAppointmentRepository {
    add(appointment: Appointment): Promise<void>;
    getById(id: string): Promise<Appointment | null>;
    getAllByUserId(userId: string): Promise<Appointment[]>; // Obtener citas por userId
    getAll(): Promise<Appointment[]>; // Obtener todas las citas
    delete(id: string): Promise<void>;
    update(appointment: Appointment): Promise<void>;
}
