/**
 * Created by psk on 10/02/2016.
 */
export class User {
    userName: string;
    name: string;
    surname: string;
    balance: number;

    constructor(user: User)
    {
        this.userName = user.userName;
        this.name= user.name;
        this.surname = user.surname;
        this.balance = user.balance;
    }
}
