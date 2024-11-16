import { Component } from '@angular/core';
import { TiendaService } from '../services/tienda.service';
import { MultimediaService } from '../services/multimedia.service';

@Component({
  selector: 'app-tienda',
  standalone: true,
  imports: [],
  templateUrl: './tienda.component.html',
  styleUrl: './tienda.component.css'
})
export class TiendaComponent {
  materiales: any[] = [];
  imagenes: Map<string, string> = new Map();  // Mapa para almacenar las imágenes de los materiales por ID

  constructor(
    private materialesService: TiendaService,
    private multimediaService: MultimediaService
  ) { }

  ngOnInit(): void {
    this.getmateriales();
    this.getmateriales2();
  }

  private getmateriales() {
    this.materialesService.getMateriales().subscribe((data) => {
      // Verificar si 'data.materiales' es un array
      if (Array.isArray(data.materiales)) {
        const div = document.createElement('div');
        div.classList.add('row');
        this.materiales = data.materiales; // Asignamos el array de materiales
        this.materiales.forEach((material) => {
          // Llamar al servicio para obtener la imagen
          //this.getImagen(material.id_imagen);
          console.log(material);
          console.log(material._id);
          // Crear el div
          
          const div1 = document.createElement('div');
          
          div1.classList.add('col-lg-6', 'col-sm-6', 'mb-4');
          div1.style.maxWidth = '400px'; // Establecer el ancho máximo
          div1.style.margin = '0 auto'; // Centrar horizontalmente
          div.appendChild(div1);

          const divCard = document.createElement('div');
          divCard.classList.add('card', 'shadow-sm', 'border-1', 'rounded');
          divCard.style.height = '600px'; // Altura fija
          divCard.style.display = 'flex'; // Configurar como contenedor flexible
          divCard.style.flexDirection = 'column'; // Alinear elementos en columna
          div1.appendChild(divCard);
          const img = document.createElement('img');
          img.classList.add('card-img-top')
          img.style.objectFit = 'cover';
          img.style.height = '300px';
          img.alt = "Imagen del material: " + material.nombre;
          this.multimediaService.getImagen(material.id_imagen).subscribe((blob: Blob) => {
            // Convertir el Blob a una URL de imagen
            const imageUrl = URL.createObjectURL(blob);
            img.src = imageUrl;
          });
          divCard.appendChild(img);
          const divTextos = document.createElement('div');
          divTextos.classList.add('card-body');
          divTextos.style.flexGrow = "1";
          divTextos.style.display = "flex";
          divTextos.style.flexDirection = "column";
          divTextos.style.padding = "20px";
          divCard.appendChild(divTextos);
          const h5 = document.createElement('h5');
          h5.textContent = material.nombre;
          h5.classList.add('card-text');
          
          const p = document.createElement('p');
          p.textContent = material.descripcion;
          p.classList.add('card-text', 'text-muted');
          p.style.flexGrow = "1";
          
          const pPrecio = document.createElement('p');
          pPrecio.classList.add('card-text', 'font-weight-bold');
          pPrecio.textContent = `${material.precio} €`;
        
          const btnCesta = document.createElement('button');
          btnCesta.textContent = 'Añadir a la cesta';
          btnCesta.classList.add('btn', 'btn-primary', 'w-100', 'mt-auto');

          btnCesta.addEventListener('click', () => this.anadirACesta(material._id));
          divTextos.append(h5, p, pPrecio, btnCesta);
          
        });
        document.body.appendChild(div);
      } else {
        console.error('La propiedad "materiales" no es un array:', data.materiales);
      }
    }, (error) => {
      console.error('Error al obtener materiales:', error);
    });
  }

  // Obtener materiales desde el servicio de materiales
  getmateriales2(): void {
    this.materialesService.getMateriales().subscribe((data: any[]) => {
      this.materiales = data;
      console.log(this.materiales);
    });
  }

  //FIXME metodo para añadir objetos a la cesta
  anadirACesta(id : string){
    console.log("hola " + id);
  }
}