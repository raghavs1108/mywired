import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';
import { TutorialPage } from '../tutorial/tutorial';
import { HomePage } from '../home/home';
import { UserData } from '../../providers/user-data';
import { AuthService } from '../../providers/auth.service';


@Component({
  templateUrl: 'build/pages/login/login.html',
  providers: [AuthService]
})
export class LoginPage {
  login: {username?: string, password?: string, credentialsValid?: boolean} = {};
  submitted = false;

  constructor(public navCtrl: NavController, public userData: UserData, public authService: AuthService) {
     this.login.credentialsValid = true;
  }

  onLogin (form) {
    this.submitted = true;
    this.authService.authenticate(this.login.username, this.login.password);
    if (this.authService.authenticated()) {
      this.login.credentialsValid = true;
      this.userData.login(this.login.username);
      this.navCtrl.push(TutorialPage);
      // this.navCtrl.push(HomePage);
    } else {
      this.login.credentialsValid = false;
      console.log('show invalid credentials message');
    }
  }

  onSignup () {
    this.navCtrl.push(SignupPage);
  }
}
