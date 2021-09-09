import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  showLogin:boolean = true;
  showRegister:boolean = true;
  showLogout:boolean = false;
  user:string = '';

  constructor(private routes:Router, private firebaseService : FirebaseService) { }

  ngOnInit(): void {
    if(localStorage.getItem('user') != null) {
      this.showLogin = false;
      this.showRegister = false;
      this.showLogout = true;
      this.user = JSON.parse(localStorage.getItem('user') || '{}').email;
    }
    else {
      this.showLogin = true;
      this.showRegister = true;
      this.showLogout = false;
      this.user = '';
    }
  }

  async handleLogout() {
    await this.firebaseService.logout();
    if(this.firebaseService.isLoggedIn == false) {
      location.reload();
    }
  }

}
