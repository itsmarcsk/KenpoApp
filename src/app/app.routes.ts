import { Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { PaginanoencontradaComponent } from './paginanoencontrada/paginanoencontrada.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component';

export const routes: Routes = [
    {
        path:'login',
        component: LoginComponent
    },{
        path:'register',
        component: RegisterComponent
    },{
        path:'home',
        component: HomeComponent
    },{
        path: 'updatepassword',
        component: UpdatepasswordComponent
    },{
        path:'**',
        component: PaginanoencontradaComponent
    }
];
