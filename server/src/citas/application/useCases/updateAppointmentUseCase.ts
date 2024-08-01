// src/application/useCases/UpdateAppointmentUseCase.ts
import { IAppointmentRepository } from '../../domain/IAppointmentRepository';
import { Appointment } from '../../domain/Appointment';

export class UpdateAppointmentUseCase {
    constructor(private repository: IAppointmentRepository) {}

    async execute(appointment: Appointment): Promise<void> {
        await this.repository.update(appointment);
    }
}
