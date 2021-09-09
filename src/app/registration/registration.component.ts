import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private routes:Router, private firebaseService : FirebaseService) { }

  ngOnInit(): void {
    if(localStorage.getItem('user') != null) {
      this.routes.navigate(['home']);
    }
  }

  async onRegistration(email:string, password:string) {
    await this.firebaseService.register(email, password);
    if(this.firebaseService.isLoggedIn == true) {
      this.routes.navigate(['home']);
      console.log('Usuario logueado');
    }
  }

}
