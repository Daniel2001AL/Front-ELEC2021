import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {AngularFireAuth} from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { async } from '@angular/core/testing';


@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css'],
  providers: [AuthService],
})
export class ValidationComponent implements OnInit {
  public user$: Observable<any> = this.authSvc.afAuth.user;
  constructor(private router: Router, private authSvc: AuthService) { }
  ngOnInit(): void {
  }

  login(){
    this.router.navigate(['votacion'])
  }
  resend(){
    this.authSvc.sendEmailVerification();
  }
}
