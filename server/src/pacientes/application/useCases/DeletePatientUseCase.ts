import { IPatientRepository } from '../../domain/IPatientRepository';

export class DeletePatientUseCase {
    constructor(private repository: IPatientRepository) {}

    async execute(id: string): Promise<void> {
        await this.repository.delete(id);
    }
}
