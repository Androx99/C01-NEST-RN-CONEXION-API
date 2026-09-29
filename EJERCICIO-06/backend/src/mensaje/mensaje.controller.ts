import { Controller, Get } from '@nestjs/common';
import { AppService } from '../app.service';

@Controller('mensaje')
export class MensajeController {
    constructor(private readonly appService: AppService) {}
    @Get()
  obtenerMensaje() {
    return {
      texto: '¡Conexión conseguida!',
    };     
    } 
}
