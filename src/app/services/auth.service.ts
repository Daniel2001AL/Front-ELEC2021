import { Injectable } from '@angular/core';
import {UserI} from '../models/user.interface';
import {AngularFireAuth} from '@angular/fire/auth';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userData;
  constructor(public afAuth: AngularFireAuth) {
    this.userData = afAuth.authState;
   }

   async sendEmailVerification(){
     return(await this.afAuth.currentUser)?.sendEmailVerification();
   }

   async crearUser(email: string, clave: string){
      return this.afAuth.createUserWithEmailAndPassword(email, clave).
      then(res =>{
        this.sendEmailVerification();
        console.log('x', res);
      })
      .catch(err => console.log('y', err));
   }

   async login(email: string, clave: string){
     try {
       const result = await this.afAuth.signInWithEmailAndPassword(email, clave);
       return result;
     } catch (error) {
       return console.log(error);
     }
   }
  logOut(){
    this.afAuth.signOut();
  }
}
