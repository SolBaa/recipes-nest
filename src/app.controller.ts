import { Controller, Get } from '@nestjs/common'; // Importación de los decoradores y la clase Controller
import { AppService } from './app.service'; // Importación de la clase AppService

@Controller() // Decorador que define la ruta base para los endpoints del controlador
export class AppController {
  constructor(private readonly appService: AppService) {} // Inyección de dependencias de AppService

  @Get('health')
  health(): string {
    return this.appService.health();
  }
}
