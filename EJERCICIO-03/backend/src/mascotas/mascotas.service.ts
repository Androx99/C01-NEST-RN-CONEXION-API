import { Injectable } from '@nestjs/common';

@Injectable()
export class MascotasService {
  private readonly mascotas = [
    { id: 1, nombre: 'Luna', tipo: 'Perro' },
    { id: 2, nombre: 'Milo', tipo: 'Gato' },
    { id: 3, nombre: 'Nina', tipo: 'Conejo' },
  ];

  findOne(id: number|string) {
    const mascotaId = Number(id);
    return this.mascotas.find((mascota) => mascota.id === mascotaId);
  }
}
