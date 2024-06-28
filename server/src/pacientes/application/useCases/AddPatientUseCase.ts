import { Patient } from '../../domain/Patient';
import { IPatientRepository } from '../../domain/IPatientRepository';

export class AddPatientUseCase {
    constructor(private repository: IPatientRepository) {}

    async execute(data: Omit<Patient, 'id'>): Promise<void> {
        const newPatient = new Patient('', data.name, data.dateOfBirth, data.medicalHistory);
        await this.repository.add(newPatient);
    }
}
