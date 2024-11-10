import { Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { PaginanoencontradaComponent } from './paginanoencontrada/paginanoencontrada.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component';
import { IndexComponent } from './index/index.component';

export const routes: Routes = [
    {
        path: 'index',
        component: IndexComponent,
        children:[
            {
                path:'login',
                component: LoginComponent
            },{
                path:'register',
                component: RegisterComponent
            },{
                path: 'updatepassword',
                component: UpdatepasswordComponent
            }
        ]
    },{
        path:'home',
        component: HomeComponent
    },{
        path:'',
        redirectTo:'index/login',
        pathMatch:'full'
    },{
        path:'**',
        component: PaginanoencontradaComponent
    }
];
