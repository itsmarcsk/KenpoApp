import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';  // Asegúrate de importar RouterModule
import { FormsModule } from '@angular/forms';    // Para ngModel

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { routes } from './app.routing';  // Asegúrate de importar las rutas correctamente

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),  // Usa RouterModule.forRoot con las rutas
    FormsModule  // Importa FormsModule para poder usar ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


