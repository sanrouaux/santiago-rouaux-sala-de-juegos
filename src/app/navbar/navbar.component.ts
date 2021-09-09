import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private routes:Router, private firebaseService : FirebaseService) { }

  ngOnInit(): void {
  }

  async handleLogout() {
    await this.firebaseService.logout();
    if(this.firebaseService.isLoggedIn == false) {
      this.routes.navigate(['login']);
      console.log('Usuario des-logueado');
    }
  }

}
