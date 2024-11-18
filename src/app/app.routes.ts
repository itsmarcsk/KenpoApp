import { Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { PaginanoencontradaComponent } from './paginanoencontrada/paginanoencontrada.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component';
import { IndexComponent } from './index/index.component';
import { InicioComponent } from './inicio/inicio.component';

import { TiendaComponent } from './tienda/tienda.component';
import { EventosComponent } from './eventos/eventos.component';
import { PerfilComponent } from './perfil/perfil.component';
import { CestaComponent } from './cesta/cesta.component';

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
        component: HomeComponent,
        children:[
            {
                path:'inicio',
                component: InicioComponent
            },{
                path: 'tienda',
                component: TiendaComponent
            },{
                path: 'cesta',
                component: CestaComponent
            },{
                path:'eventos',
                component: EventosComponent
            },{
                path: 'perfil',
                component: PerfilComponent
            }
        ]
    },{
        path:'',
        redirectTo:'index/login',
        pathMatch:'full'
    },{
        path:'home',
        redirectTo:'home/inicio',
        pathMatch:'full'
    },{
        path:'**',
        component: PaginanoencontradaComponent
    }
];
