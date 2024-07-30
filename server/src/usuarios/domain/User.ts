export class User{
    constructor(
        readonly id : String,
	    readonly phone: String ,
	    readonly email: String,
	    readonly password: String ,
	    readonly role: String

    ){}
}


export interface IUser{
    id : String,
	phone: String ,
	email: String,
	password: String ,
	role: String
}