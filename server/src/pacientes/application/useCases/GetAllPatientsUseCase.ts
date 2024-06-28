import { Patient } from '../../domain/Patient';
import { IPatientRepository } from '../../domain/IPatientRepository';

export class GetAllPatientsUseCase {
    constructor(private repository: IPatientRepository) {}

    async execute(): Promise<Patient[]> {
        return await this.repository.getAll();
    }
}
