// src/domain/Appointment.ts
export class Appointment {
    constructor(
        readonly id: string,
        readonly date: Date,
        readonly time: string,
        readonly userId: string // Updated to use userId
    ) {}
}
