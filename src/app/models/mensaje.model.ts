export class Mensaje {
  autor_id: number;
    contenido: string;
    timestamp: Date;
  
    constructor(autor_id: number, contenido: string, timestamp: Date) {
      this.autor_id = autor_id;
      this.contenido = contenido;
      this.timestamp = timestamp;
    }
  }
  