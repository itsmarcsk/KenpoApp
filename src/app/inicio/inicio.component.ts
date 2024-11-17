import { Component } from '@angular/core';
import { KatasTecnicasService } from '../services/katas-tecnicas.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  katas: any[] = [];
  tecnicas: any[] = [];
  constructor(private katasTecnicasService: KatasTecnicasService) {}

  ngOnInit(): void {
    this.getCosas();
  }
  getCosas() {
    this.katasTecnicasService.getKatas().subscribe(cosas => {
      console.log(cosas);
    })
    this.katasTecnicasService.getTecnicas().subscribe(tecnicas => {
      console.log(tecnicas);
    })
  }
}
