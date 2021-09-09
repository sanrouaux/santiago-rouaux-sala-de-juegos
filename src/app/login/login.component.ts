import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private routes:Router, private firebaseService : FirebaseService) { }

  ngOnInit(): void {
    if(localStorage.getItem('user') != null) {
      this.routes.navigate(['home']);
    }
  }

  async onLogin(email:string, password:string) {
    await this.firebaseService.login(email, password);
    if(this.firebaseService.isLoggedIn == true) {
      this.routes.navigate(['home']);
      console.log('Usuario logueado');
    }
  }
  
}
