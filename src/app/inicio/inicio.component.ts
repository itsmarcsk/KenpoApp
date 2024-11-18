import { Component } from '@angular/core';
import { KatasTecnicasService } from '../services/katas-tecnicas.service';
import { MultimediaService } from '../services/multimedia.service';

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
  constructor(
    private katasTecnicasService: KatasTecnicasService,
    private multimediaService: MultimediaService) { }

  ngOnInit(): void {
    this.getCosas();
  }
  getCosas() {
    const contenedorTecnicas = document.getElementById('carouselTecnicas');
    const contenedorKatas = document.getElementById('carouselKata');
    this.katasTecnicasService.getKatas().subscribe((response) => {
      console.log(response);
      if(response && response.katas){
        this.katas = response.katas;
        console.log(this.katas);
        let count = 0;
        this.katas.forEach((kata) => {
          if (count === 0) {
            // Crear los elementos de la estructura del carrusel
            const carouselItem = document.createElement('div');
            carouselItem.classList.add('carousel-item', 'active');

            // Crear el elemento de video
            const iframe = document.createElement('iframe');
            iframe.classList.add('d-block', 'mx-auto', 'mt-4');
            iframe.style.width = '400px'; 
            iframe.style.height = '400px';
            iframe.removeAttribute("autoplay");
            
            this.multimediaService.getVideo(kata.id_video).subscribe((video: Blob) => {
              console.log(video);
              const url = URL.createObjectURL(video);
              console.log(url);
              iframe.setAttribute('src', url);
              iframe.setAttribute('frameborder', '0');
              iframe.setAttribute('allowfullscreen', '');
              iframe.setAttribute('autoplay', '0');
              iframe.setAttribute('controls', '');
              iframe.setAttribute('autoplay', 'false');
              iframe.setAttribute('autoplay', '0');
              console.log(iframe);
            })

            

            // Crear el título h5
            const h5 = document.createElement('h5');
            h5.classList.add('mx-3', 'mt-4', 'mb-5', 'text-center');
            h5.style.color = 'white';
            h5.textContent = kata.nombre;

            // Añadir el video y el título h5 al item del carrusel
            carouselItem.appendChild(iframe);
            carouselItem.appendChild(h5);


            if (contenedorKatas) {
              contenedorKatas.appendChild(carouselItem);
            }
          }else{
            // Crear los elementos de la estructura del carrusel
            const carouselItem = document.createElement('div');
            carouselItem.classList.add('carousel-item');

            // Crear el elemento de video
            const iframe = document.createElement('iframe');
            iframe.classList.add('d-block', 'mx-auto', 'mt-4');
            iframe.style.width = '400px'; 
            iframe.style.height = '400px';
  
            
            this.multimediaService.getVideo(kata.id_video).subscribe((video: Blob) => {
              console.log(video);
              const url = URL.createObjectURL(video);
              iframe.setAttribute('src', url);
              iframe.setAttribute('frameborder', '0');
              iframe.setAttribute('allowfullscreen', '');
            })

            // Crear el título h5
            const h5 = document.createElement('h5');
            h5.classList.add('mx-3', 'mt-4', 'mb-5', 'text-center');
            h5.style.color = 'white';
            h5.textContent = kata.nombre ;

            // Añadir el video y el título h5 al item del carrusel
            carouselItem.appendChild(iframe);
            carouselItem.appendChild(h5);

            if (contenedorKatas) {
              contenedorKatas.appendChild(carouselItem);
            }
          }
          count++;
        })
      }

    })
    this.katasTecnicasService.getTecnicas().subscribe(
      (response) => {
        // Asegúrate de que la propiedad 'tecnicas' está presente en el JSON
        if (response && response.tecnicas) {
          this.tecnicas = response.tecnicas; // Asigna a una variable para usar en el componente
          console.log(this.tecnicas); // Muestra las técnicas en la consolav
          let count = 0;
          this.tecnicas.forEach((tecnica) => {

            if (count === 0) {
              const carouselItem = document.createElement('div');
              carouselItem.classList.add('carousel-item', 'active');
              // Crear el elemento de imagen
              const img = document.createElement('img');
              img.classList.add('d-block', 'mx-auto', 'mt-4');
              img.alt = tecnica.nombre;
              img.style.width = '400px';
              img.style.height = '400px';

              // Crear el título h5
              const h5 = document.createElement('h5');
              h5.classList.add('mx-3', 'mt-4', 'mb-5', 'text-center');
              h5.textContent = tecnica.nombre;
              h5.style.color = 'white';
              this.multimediaService.getImagen(tecnica.id_imagen).subscribe((blob: Blob) => {
                // Convertir el Blob a una URL de imagen
                const imageUrl = URL.createObjectURL(blob);
                img.src = imageUrl;
              });
              // Añadir la imagen y el título h5 al item del carrusel
              carouselItem.appendChild(img);
              carouselItem.appendChild(h5);

              if (contenedorTecnicas) {
                contenedorTecnicas.appendChild(carouselItem);
              }

            }else{
              const carouselItem = document.createElement('div');
              carouselItem.classList.add('carousel-item');
              // Crear el elemento de imagen
              const img = document.createElement('img');
              img.classList.add('d-block', 'mx-auto');
              img.alt = tecnica.nombre;
              img.style.width = '400px';
              img.style.height = '400px';
  
              // Crear el título h5
              const h5 = document.createElement('h5');
              h5.classList.add('mx-3', 'mt-4', 'mb-5', 'text-center');
              h5.textContent = tecnica.nombre;
              h5.style.color = 'white';
              this.multimediaService.getImagen(tecnica.id_imagen).subscribe((blob: Blob) => {
                // Convertir el Blob a una URL de imagen
                const imageUrl = URL.createObjectURL(blob);
                img.src = imageUrl;
              });
              // Añadir la imagen y el título h5 al item del carrusel
              carouselItem.appendChild(img);
              carouselItem.appendChild(h5);
  
              if (contenedorTecnicas) {
                contenedorTecnicas.appendChild(carouselItem);
              }
            }
            
            count++;
          })
        } else {
          console.warn('La respuesta no contiene la propiedad "tecnicas".');
        }
      },
      (error) => {
        console.error('Error al obtener las técnicas:', error);
      });



  }
}
