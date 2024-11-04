import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { 
  title = 'kenpo-app';
  message: string = '';
  private apiUrl1 = 'http://pythoncontainer/';  // Nombre del contenedor de la API
  private apiUrl1_1 = 'http://pythoncontainer:80/';
  private apiUrl1_2 = 'http://pythoncontainer/8000';

  private apiUrl2 = 'http://localhost/'; // EL bueno

  private apiUrl2_1 = 'http://localhost:80/';
  private apiUrl2_2 = 'http://localhost:8000/';
  private apiUrl3 = 'http://172.18.0.4/';
  private apiUrl3_1 = 'http://172.18.0.4:80/';
  private apiUrl3_2 = 'http://172.18.0.4/8000';
  

  private http = inject(HttpClient);

  ngOnInit() {
    this.getWorld();
    this.getWorld1();
    this.getWorld2();
    this.getWorld3();
    this.getWorld4();
    this.getWorld5();
    this.getWorld6();
  }

  getWorld() {
    this.http.get<{ message: string }>(this.apiUrl1).subscribe(
      (response) => {
        this.message = response.message; 
        console.log(this.message + "1"); 
      },
      (error) => {
        console.error('Error al obtener el mensaje:', error);
      }
    );
  }

  getWorld1() {
    this.http.get<{ message: string }>(this.apiUrl1_1).subscribe(
      (response) => {
        this.message = response.message; 
        console.log(this.message + "1_1"); 
      },
      (error) => {
        console.error('Error al obtener el mensaje:', error);
      }
    );
  }
  getWorld2() {
    this.http.get<{ message: string }>(this.apiUrl1_2).subscribe(
      (response) => {
        this.message = response.message; 
        console.log(this.message + "1_2"); 
      },
      (error) => {
        console.error('Error al obtener el mensaje:', error);
      }
    );
  }

  /* ESTE FUNCIONA
  *
  *
  * *
  */
  getWorld3() {
    this.http.get<{ message: string }>(this.apiUrl2).subscribe(
      (response) => {
        this.message = response.message; 
        console.log(this.message + "2"); 
      },
      (error) => {
        console.error('Error al obtener el mensaje:', error);
      }
    );
  }




  
  getWorld4() {
    this.http.get<{ message: string }>(this.apiUrl3).subscribe(
      (response) => {
        this.message = response.message; 
        console.log(this.message + "3"); 
      },
      (error) => {
        console.error('Error al obtener el mensaje:', error);
      }
    );
  }
  getWorld5() {
    this.http.get<{ message: string }>(this.apiUrl3_1).subscribe(
      (response) => {
        this.message = response.message; 
        console.log(this.message + "3_1"); 
      },
      (error) => {
        console.error('Error al obtener el mensaje:', error);
      }
    );
  }
  getWorld6() {
    this.http.get<{ message: string }>(this.apiUrl3_2).subscribe(
      (response) => {
        this.message = response.message; 
        console.log(this.message + "3_2"); 
      },
      (error) => {
        console.error('Error al obtener el mensaje:', error);
      }
    );
  }

  getWorld7() {
    this.http.get<{ message: string }>(this.apiUrl2_1).subscribe(
      (response) => {
        this.message = response.message; 
        console.log(this.message + "2_1"); 
      },
      (error) => {
        console.error('Error al obtener el mensaje:', error);
      }
    );
  }
  getWorld8() {
    this.http.get<{ message: string }>(this.apiUrl2_2).subscribe(
      (response) => {
        this.message = response.message; 
        console.log(this.message + "2_2"); 
      },
      (error) => {
        console.error('Error al obtener el mensaje:', error);
      }
    );
  }
}
