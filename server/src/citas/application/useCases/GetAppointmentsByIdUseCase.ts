import { Appointment } from '../../domain/Appointment';
import { IAppointmentRepository } from '../../domain/IAppointmentRepository';

export class GetAppointmentByIdUseCase {
    constructor(private repository: IAppointmentRepository) {}

    async execute(id: string): Promise<Appointment | null> {
        return await this.repository.getById(id);
    }
}