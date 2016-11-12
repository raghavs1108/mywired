import { Injectable } from '@angular/core';

@Injectable()

export class AuthService {
    username: string;
    password: string;

    authenticate (username: string, password: string) {
        this.username = username;
        this.password = password;

        console.log(username + ' ' + password);
    }

    authenticated () {
// stub
        if (this.username === this.password) {
            return true;
        } else {
            return false;
        }
    }
}
