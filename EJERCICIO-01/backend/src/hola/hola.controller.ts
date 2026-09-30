import { Controller, Get } from '@nestjs/common';
import {AppService} from "../app.service";

@Controller('hola')
export class HolaController {
  constructor(private readonly appService: AppService) {}
@Get()
    saludar() {
     return { mensaje: '¡Hola desde el curso DAM! 🚀' };
    }
}
