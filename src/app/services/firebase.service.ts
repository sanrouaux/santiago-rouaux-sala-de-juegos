import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  isLoggedIn = false;

  constructor(private FirebaseAuth : AngularFireAuth) {

  }

  async login(email:string, password:string) {
    await this.FirebaseAuth.signInWithEmailAndPassword(email, password)
    .then(res =>{
      this.isLoggedIn = true;
      localStorage.setItem('user',JSON.stringify(res.user));
    })
    .catch(res=> {
      console.log('Error');
    })
  }

  async register(email:string, password:string) {
    await this.FirebaseAuth.createUserWithEmailAndPassword(email, password)
    .then(res =>{
      this.isLoggedIn = true;
      localStorage.setItem('user',JSON.stringify(res.user));
    })
    .catch(res=> {
      alert(res);
    })
  }

  async logout() {
    await this.FirebaseAuth.signOut()
    .then(res=> {
      this.isLoggedIn = false;
      localStorage.removeItem('user');
    })
  }

}
