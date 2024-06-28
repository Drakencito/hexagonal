import { Patient } from '../../domain/Patient';
import { IPatientRepository } from '../../domain/IPatientRepository';

export class UpdatePatientUseCase {
    constructor(private repository: IPatientRepository) {}

    async execute(data: Patient): Promise<void> {
        await this.repository.update(data);
    }
}
