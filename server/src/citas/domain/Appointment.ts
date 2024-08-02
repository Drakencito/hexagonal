export class Appointment {
    constructor(
        readonly id: string,
        readonly patientName: string,
        readonly date: Date,
        readonly time: string,
      
    ) {}
}

export interface IAppointment {
    id: string;
    patientName: string;
    date: Date;
    time: string;
  
}
