import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from "@angular/fire/compat";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { QuienSoyComponent } from './quien-soy/quien-soy.component';
import { FirebaseService } from './services/firebase.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    QuienSoyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAFiM9ZiHjnhDYLkctaH4V4JYB03fwd5QQ",
      authDomain: "santiago-rouaux-sala-de-juegos.firebaseapp.com",
      projectId: "santiago-rouaux-sala-de-juegos",
      storageBucket: "santiago-rouaux-sala-de-juegos.appspot.com",
      messagingSenderId: "905050707701",
      appId: "1:905050707701:web:21331b5bc46f667f02d7bc"
    })
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
