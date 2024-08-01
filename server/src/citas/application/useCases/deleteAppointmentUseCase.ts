import { IAppointmentRepository } from '../../domain/IAppointmentRepository';

export class DeleteAppointmentUseCase {
    constructor(private repository: IAppointmentRepository) {}

    async execute(id: string): Promise<void> {
        await this.repository.delete(id);
    }
}
