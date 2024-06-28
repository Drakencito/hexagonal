import { Patient } from '../../domain/Patient';
import { IPatientRepository } from '../../domain/IPatientRepository';

export class GetPatientByIdUseCase {
    constructor(private repository: IPatientRepository) {}

    async execute(id: string): Promise<Patient | null> {
        return await this.repository.getById(id);
    }
}
