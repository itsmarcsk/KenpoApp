
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core'; 
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },  // Redirige a login por defecto
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



