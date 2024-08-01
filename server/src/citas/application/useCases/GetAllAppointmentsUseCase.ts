import { Appointment } from '../../domain/Appointment';
import { IAppointmentRepository } from '../../domain/IAppointmentRepository';

export class GetAllAppointmentsUseCase {
    constructor(private repository: IAppointmentRepository) {}

    async execute(): Promise<Appointment[]> {
        return await this.repository.getAll();
    }
}
