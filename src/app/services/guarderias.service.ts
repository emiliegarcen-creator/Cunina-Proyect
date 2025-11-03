import { Injectable } from '@angular/core';

export interface Guarderia {
  id: number;
  nombre: string;
  descripcion: string;
  direccion: string;
  telefono: string;
  horario: string;
  comentarios: { texto: string; calificacion: number }[];
}

@Injectable({ providedIn: 'root' })
export class GuarderiasService {
  private guarderias: Guarderia[] = [
    {
      id: 1,
      nombre: 'Cantaro Fresco',
      descripcion: 'Centro socio-educativo que ofrece atención diaria con horario flexible para niños y niñas de 3 meses a 3 años y 11 meses, mediante actividades educativas, de cuidado ,recreativas, comunitaria y acompañamiento familiar',
      direccion: 'Joanico 3679, Montevideo',
      telefono: '25088339',
      horario: ' De 8 a 16 hs',
      comentarios: [],
    },
    {
      id: 2,
      nombre: ' Jardín de AEBU',
      descripcion: 'Es una institución abierta que recibe a familiares directos de trabajadores activos o pasivos del sistema financiero, así como a público en general.Ese centro cuenta con la autorización de la Dirección General de Educación Inicial y Primaria y está inscripto en el Registro Nacional de Educación en la Primera Infancia del MEC.Un lugar donde acompañan desde el juego, la exploración y la expresión, el desarrollo integral de niños y niñas, concibiéndolos como protagonistas de sus aprendizajes.',
      direccion: 'Juan Carlos Gómez 1265. Ciudad Vieja, Montevideo.',
      telefono: ' 29155818',
      horario: 'Turno matutino: 8.30 h a 13.00 h – 17.00 a 17.30 h // Turno intermedio: de 12.00 a 17.00 h',
      comentarios: [],
    },
    {
      id: 3,
      nombre: '<Cadi>',
      descripcion: 'Para niños de 0 a 1 año, se implementa el "Programa de Experiencias Oportunas", enfocado en el desarrollo integral y el fortalecimiento del vínculo con los adultos referentes.Para niños de 2 y 3 años, se realiza una propuesta pedagógica basada en las orientaciones del Ministerio de Educación y Cultura (MEC) y el Consejo de Educación Inicial y Primaria (CEIP) de la Administración Nacional de Educación Pública (ANEP)',
      direccion: ' 20 de Febrero 2525 Esq. Cabrera, La Unión, Montevideo',
      telefono: '2508 8079 ',
      horario: 'Matutino-Doble Horario',
      comentarios: [],
    },
  ];

  getGuarderias() {
    return this.guarderias;
  }
}
