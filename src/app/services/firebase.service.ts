import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  isLoggedIn = false;

  constructor(private FirebaseAuth : AngularFireAuth) {

  }

  async signin(email:string, password:string) {
    await this.FirebaseAuth.signInWithEmailAndPassword(email, password)
    .then(res =>{
      this.isLoggedIn = true;
      localStorage.setItem('user',JSON.stringify(res.user));
    })
  }

  async signup(email:string, password:string) {
    await this.FirebaseAuth.createUserWithEmailAndPassword(email, password)
    .then(res =>{
      this.isLoggedIn = true;
      localStorage.setItem('user',JSON.stringify(res.user));
    })
  }

  logout() {
    this.FirebaseAuth.signOut();
    localStorage.removeItem('user');
  }

}
