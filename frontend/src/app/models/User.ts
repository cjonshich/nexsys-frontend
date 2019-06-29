export class User {
    public email: string;
    public password: string;

    constructor() {
    }

    public isValidEmail(): boolean {
        return this.email != null && this.email !== undefined && this.email.trim() !== '';
    }

    public isValidPassword(): boolean {
        return this.password != null && this.password !== undefined && this.password.trim() !== '';
    }

}
