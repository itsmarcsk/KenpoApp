export class Mensaje {
    autorId: number;
    contenido: string;
    timestamp: Date;
  
    constructor(autorId: number, contenido: string, timestamp: Date) {
      this.autorId = autorId;
      this.contenido = contenido;
      this.timestamp = timestamp;
    }
  }
  