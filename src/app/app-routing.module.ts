import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ValidationComponent } from './components/validation/validation.component';
import { VotarComponent } from './components/votar/votar.component';

const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'validation', component: ValidationComponent},
    {path: 'votacion', component: VotarComponent},
    {path: '**', redirectTo: '/'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
