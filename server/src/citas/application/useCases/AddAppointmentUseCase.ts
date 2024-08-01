import { Appointment } from '../../domain/Appointment';
import { IAppointmentRepository } from '../../domain/IAppointmentRepository';

export class AddAppointmentUseCase {
    constructor(private repository: IAppointmentRepository) {}

    async execute(data: Omit<Appointment, 'id'>): Promise<void> {
        const newAppointment = new Appointment('', data.patientName, data.date, data.time);
        await this.repository.add(newAppointment);
    }
}
