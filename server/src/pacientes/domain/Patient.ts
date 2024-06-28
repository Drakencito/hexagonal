export class Patient {
    constructor(
        readonly id: string,
        readonly name: string, 
        readonly dateOfBirth: Date, 
        readonly medicalHistory: string
    ) {}
}

export interface IPatient {
    id: string;
    name: string;
    dateOfBirth: Date;
    medicalHistory: string;
}
