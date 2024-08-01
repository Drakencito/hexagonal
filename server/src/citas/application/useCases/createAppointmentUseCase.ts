// src/application/useCases/CreateAppointmentUseCase.ts
import { IAppointmentRepository } from '../../domain/IAppointmentRepository';
import { Appointment } from '../../domain/Appointment';

export class CreateAppointmentUseCase {
    constructor(private repository: IAppointmentRepository) {}

    async execute(date: Date, time: string, userId: string): Promise<void> {
        const newAppointment = new Appointment('', date, time, userId);
        await this.repository.add(newAppointment);
    }
}
