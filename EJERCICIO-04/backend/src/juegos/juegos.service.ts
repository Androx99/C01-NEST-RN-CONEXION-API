import { Injectable } from '@nestjs/common';

@Injectable()
export class JuegosService {
    private juegos = [
    { id: 1, titulo: 'The Witcher 3', genero: 'RPG' },
    { id: 2, titulo: 'FIFA 23', genero: 'Deportes' },
    { id: 3, titulo: 'Final Fantasy VII', genero: 'RPG' },
    { id: 4, titulo: 'Call of Duty: Modern Warfare', genero: 'FPS' },
  ];


findAll() {
    return this.juegos;
  }

findAllByGender(genero: string) {
  if (genero) {
    return this.juegos.filter(juego => juego.genero.toLowerCase() === genero.toLowerCase());
  }
}
} 
