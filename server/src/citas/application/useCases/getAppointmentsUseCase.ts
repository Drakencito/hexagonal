// src/application/useCases/GetAppointmentsUseCase.ts
import { IAppointmentRepository } from '../../domain/IAppointmentRepository';
import { Appointment } from '../../domain/Appointment';

export class GetAppointmentsUseCase {
    constructor(private repository: IAppointmentRepository) {}

    async execute(userId?: string): Promise<Appointment[]> {
        if (userId) {
            return await this.repository.getAllByUserId(userId);
        } else {
            return await this.repository.getAll(); // Obtener todas las citas si el usuario no es específico
        }
    }
}
