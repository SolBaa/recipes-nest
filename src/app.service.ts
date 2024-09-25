import { Injectable } from '@nestjs/common'; // Importación de la clase Injectable

@Injectable() // Decorador que marca la clase como un proveedor de servicios
export class AppService {

  health(): string {
    return 'ok';
  }
}
