import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.router.navigate(['votacion'])
  }
}
