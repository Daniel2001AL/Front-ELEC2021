import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {UserI} from '../../models/user.interface';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  mensajeError = 'error';
  error = false;

  constructor(private router: Router, private authSvc: AuthService,   private _formBuilder:FormBuilder,) { }

  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      email : ['', Validators.required],
      clave :['', Validators.required],
    })
  }

  login(){
    const data = this.loginForm.value;
    if(data.email == '' || data.clave == ''){
      this.mensajeError = 'Favor de Completar Todos los Campos'
      this.error = true;
      setTimeout(() =>{
        this.error = false;
      }, 4000);
    }
    else{
      this.authSvc.crearUser(data.email, data.clave);
      this.router.navigate(['validation'])
    }
    
  }


}
