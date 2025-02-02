import { Appointment } from '../../domain/Appointment';
import { IAppointmentRepository } from '../../domain/IAppointmentRepository';

export class UpdateAppointmentUseCase {
    constructor(private repository: IAppointmentRepository) {}

    async execute(data: Appointment): Promise<void> {
        await this.repository.update(data);
    }
}
