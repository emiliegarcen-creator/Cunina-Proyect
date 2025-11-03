import { Component, OnInit } from '@angular/core';
import { Guarderia, GuarderiasService } from '../../services/guarderias.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../Header/header.component';

@Component({
  selector: 'app-guarderias',
  templateUrl: './guarderias.component.html',
  standalone: true,
  styleUrls: ['./guarderias.component.scss'],
  imports: [CommonModule, FormsModule, HeaderComponent],
})
export class GuarderiasComponent implements OnInit {
  guarderias: Guarderia[] = [];
  guarderiaSeleccionada: Guarderia | null = null;
  nuevoComentario = '';
  nuevaCalificacion: number | null = null;

  constructor(private guarderiasService: GuarderiasService) {}

  ngOnInit() {
    this.guarderias = this.guarderiasService.getGuarderias();
  }

  seleccionar(g: Guarderia) {
    this.guarderiaSeleccionada = g;
  }

  agregarComentario() {
    if (this.guarderiaSeleccionada && this.nuevoComentario && this.nuevaCalificacion) {
      this.guarderiaSeleccionada.comentarios.push({
        texto: this.nuevoComentario,
        calificacion: this.nuevaCalificacion,
      });
      this.nuevoComentario = '';
      this.nuevaCalificacion = null;
    }
  }
}
