import { Component } from '@angular/core';
import { CestaService } from '../services/cesta.service';
import { ArtistaMarcialService } from '../services/artista-marcial.service';
import { CestaItem } from '../models/cesta-item.model';
import { MultimediaService } from '../services/multimedia.service';
import { TiendaService } from '../services/tienda.service';


@Component({
  selector: 'app-cesta',
  standalone: true,
  imports: [],
  templateUrl: './cesta.component.html',
  styleUrl: './cesta.component.css'
})
export class CestaComponent {
  cesta: any[] = [];
  imagenes: Map<string, string> = new Map();  // Mapa para almacenar las imágenes de los materiales por ID
  cantidadTotal: number = 0;  // Definir la propiedad cantidadTotal
  constructor(
    private cestaService: CestaService,
    private multimediaService: MultimediaService,
    private materialService: TiendaService,
    private artistaMarcialService: ArtistaMarcialService
  ) {}

  ngOnInit(): void {
    const dni = this.artistaMarcialService.getDni();
    if (dni) {
      this.getCestaData(dni);
    }
  }

  getCestaData(artistaMarcialId: string): void {
    const contenedor = document.getElementById('contenedor');
    
    const h1 = document.createElement('h1');
    h1.textContent = 'MI CESTA';
    // Agregar clases de Bootstrap mediante classList.add()
    // Agregar clases de Bootstrap mediante classList.add()
    h1.classList.add('text-center', 'display-3', 'fw-semibold', 'bg-light', 'text-dark', 'py-3', 'rounded', 'shadow-lg');
    // Agregar el fondo con el gradiente actualizado
    h1.style.background = 'linear-gradient(95deg, rgba(251,255,0,1) 0%, rgba(255,106,71,1) 34%, rgba(226,244,27,1) 91%, rgba(255,169,0,1) 100%)';

    // Establecer el color del texto y borde personalizado
    h1.style.color = '#fff';  // Texto blanco para que contraste con el fondo
    h1.style.border = '2px solid #ca5555';  // Borde rojo para resaltar el título
    
    const divMaterial = document.createElement('div');
    divMaterial.style.marginTop= '30px';
    // Insertar el nuevo elemento dentro del contenedor
    if(contenedor){
      contenedor.append(h1,divMaterial);
    }
    
  
    this.cestaService.getCestaByArtistaMarcialId(artistaMarcialId).subscribe(
      (data: CestaItem | null) => {
        console.log('Datos de la cesta:', data);
        if(Array.isArray(data?.materiales)){
          this.cesta = data.materiales;
          
          this.cesta.forEach((material) => {
            this.materialService.getMaterialById(material.material_id).subscribe((data) => {
              this.cantidadTotal += data.precio * material.cantidad;
              sessionStorage.setItem('cantidadTotal', this.cantidadTotal.toString());
              console.log(`Total acumulado: $${this.cantidadTotal}`);
              console.log(data.id_imagen + " hola");
              const divFila = document.createElement('div');
              divFila.classList.add('row', 'align-items-center', 'mb-4', 'shadow', 'p-3', 'bg-white', 'rounded', 'position-relative');
              if(contenedor){
                divMaterial.appendChild(divFila);
              }
              const divImagen = document.createElement('div');
              divImagen.classList.add('w-auto','h-auto');
              const img = document.createElement('img');
              img.style.height = '100px';
              img.style.width = '100px';
              img.alt = "Imagen del material: " + data.nombre;
              this.multimediaService.getImagen(data.id_imagen).subscribe((blob: Blob) => {
                // Convertir el Blob a una URL de imagen
                const imageUrl = URL.createObjectURL(blob);
                img.src = imageUrl;
              });
              const divDetalles = document.createElement('div');
              divDetalles.classList.add('col-md-6','d-flex', 'flex-column', 'justify-content-center', 'text-center');
              const h4 = document.createElement('h4');
              h4.classList.add('font-weight-bold', 'mb-2');
              h4.textContent = data.nombre;

              const  divBotones = document.createElement('div');
              divBotones.classList.add('d-flex', 'justify-content-center', 'align-items-center');
              
              const btnNegative = document.createElement('button');
              btnNegative.textContent = '-';
              btnNegative.classList.add('btn', 'btn-outline-sencondary', 'd-flex', 'align-items-center', 'justify-content-center');
              btnNegative.style.width = '35px';
              btnNegative.style.height = '35px';
              btnNegative.style.padding = '0';
              btnNegative.addEventListener('click', () => this.restarCantidad(data.id));

              const input = document.createElement('input');

              // Establecer los atributos del input
              input.type = 'text';
              input.classList.add('form-control', 'text-center', 'mx-2');
              input.value = material.cantidad;
              input.style.width = '50px';
              input.readOnly = true; // Establecer el atributo readonly


              const btnPositive = document.createElement('button');
              btnPositive.textContent = '+';
              btnPositive.classList.add('btn', 'btn-outline-sencondary', 'd-flex', 'align-items-center', 'justify-content-center');
              btnPositive.style.width = '35px';
              btnPositive.style.height = '35px';
              btnPositive.style.padding = '0';
              console.log(data.id + " Hola");
              btnPositive.addEventListener('click', () => this.anadirACesta(data.id));

              const divPrecio = document.createElement('div');
              divPrecio.classList.add('col-md-2', 'd-flex', 'justify-content-end');

              const spanPrecio = document.createElement('span');
              spanPrecio.classList.add('text-success', 'font-weight-bold');
              spanPrecio.textContent = `$${data.precio}`;

              const divEliminar = document.createElement('div');
              divEliminar.classList.add('col-md-1', 'd-flex', 'justify-content-end');

              const btnEliminar = document.createElement('button');
              btnEliminar.textContent = 'x';
              btnEliminar.classList.add('btn', 'btn-danger', 'd-flex', 'align-items-center', 'justify-content-center');
              btnEliminar.style.width = '35px';
              btnEliminar.style.height = '35px';
              btnEliminar.style.padding = '0';
              btnEliminar.addEventListener('click', () => this.eliminarProducto(data.id));

              divEliminar.appendChild(btnEliminar);
              divPrecio.appendChild(spanPrecio);
              divBotones.append(btnNegative, input ,btnPositive);
              divDetalles.append(h4, divBotones);
              divImagen.appendChild(img);
              divFila.append(divImagen, divDetalles, divPrecio, divEliminar);
            });
           
          });
        }
      },
      (error) => {
        const avisoCestaVacia = document.createElement('p');
        avisoCestaVacia.textContent = 'Tu cesta está vacía.';
        avisoCestaVacia.classList.add('alert', 'alert-warning', 'text-center', 'mt-4');
        divMaterial.appendChild(avisoCestaVacia);
      }
    );

    const divBotones = document.createElement('div');
    divBotones.classList.add('row', 'mt-4');
    
    
    const divBotones2 = document.createElement('div');
    divBotones2.classList.add('col-12', 'text-center');
    divBotones.appendChild(divBotones2);
    
    const btnCompras = document.createElement('button');
    btnCompras.classList.add('btn', 'btn-success');
    btnCompras.textContent = 'Comprar';
    btnCompras.addEventListener('click', () => this.resetCesta());


    const btnReset = document.createElement('button');
    btnReset.classList.add('btn', 'btn-danger');
    btnReset.textContent = 'Eliminar cesta';
    btnReset.style.marginInlineStart='10px';
    btnReset.addEventListener('click', () => this.resetCesta());

    divBotones2.append(btnCompras, btnReset);

    
    const pPrecioTotal = document.createElement('p');

    const divPrecioTotal = document.createElement('div');
    divPrecioTotal.appendChild(pPrecioTotal);
    // Mostramos el precio con dos decimales
    pPrecioTotal.classList.add('text-center', 'font-weight-bold', 'mt-4');
    pPrecioTotal.style.border = '2px solid #000000';  // Establecemos el borde
    pPrecioTotal.style.padding = '10px';  // Añadimos algo de espacio alrededor del texto
    pPrecioTotal.style.borderRadius = '5px';  // Redondeamos las esquinas del borde
    let cantidadTotalRecuperada = sessionStorage.getItem('cantidadTotal');
    
    // Verificar si es null y asignar un valor predeterminado si es necesario
    let cantidadTotal = cantidadTotalRecuperada ? parseFloat(cantidadTotalRecuperada) : 0;
    console.log(sessionStorage.getItem('cantidadTotal') + '');
    pPrecioTotal.textContent = `Precio Total: $${cantidadTotal.toFixed(2)}`;
    if(contenedor){
      contenedor.append(divPrecioTotal);
    
    if (contenedor) {
      contenedor.append(divBotones);
    }

  }
 
  }
  resetCesta() {
    const artistaMarcialId = this.artistaMarcialService.getDni();
  
    if (!artistaMarcialId) {
      console.error('No se pudo obtener el ID del artista marcial');
      return;
    }
    this.cestaService.deleteMaterialByArtistaMarcial(artistaMarcialId).subscribe(data => {
      window.location.reload();
    })
  }
  eliminarProducto(material_id: string) {
    const artistaMarcialId = this.artistaMarcialService.getDni();
  
    if (!artistaMarcialId) {
      console.error('No se pudo obtener el ID del artista marcial');
      return;
    }
    this.cestaService.deleteMaterialFromList(artistaMarcialId, material_id).subscribe(response => {
      window.location.reload();
    }, error =>{

    })
  }
  restarCantidad(material_id: string) {
    const artistaMarcialId = this.artistaMarcialService.getDni();
  
    if (!artistaMarcialId) {
      console.error('No se pudo obtener el ID del artista marcial');
      return;
    }
    this.cestaService.deleteMaterialQuantity(artistaMarcialId, material_id).subscribe(response => {
      window.location.reload();
      window.location.reload();
    }, error =>{

    })
  }
  anadirACesta(materialId: string) {
    // Obtener el DNI del artista marcial
    const artistaMarcialId = this.artistaMarcialService.getDni();
  
    if (!artistaMarcialId) {
      console.error('No se pudo obtener el ID del artista marcial');
      return;
    }
    // Crear un objeto `CestaItem` inicial
    const item: CestaItem = {
      artista_marcial_id: artistaMarcialId,
      materiales: [
        {
          material_id: materialId,
          cantidad: 1
        }
      ]
    };
    this.cestaService.addMaterialToCesta(artistaMarcialId, materialId).subscribe(
      response =>{
        window.location.reload();
        window.location.reload();
      },
      error =>{
        
      }
    )
  }
}