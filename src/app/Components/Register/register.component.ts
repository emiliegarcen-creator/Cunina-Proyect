import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HeaderComponent } from '../Header/header.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent, RouterLink],
})
export class RegisterComponent {
  usuario = {
    nombre: '',
    apellido: '',
    ci: '',
    telefono: '',
    email: '',
    password: '',
  };
  exito = false;

  constructor(private auth: AuthService, private router: Router) {}

  onSubmit(form: NgForm) {
    // Marcar todos los campos si hay errores
    if (form.invalid) {
      Object.values(form.controls).forEach((control) => {
        control.markAsTouched();
      });
      alert('Por favor, completá todos los campos correctamente.');
      return;
    }

    // Validar que el correo termine en @gmail.com
    if (!this.usuario.email.toLowerCase().endsWith('@gmail.com')) {
      alert('El correo debe ser una dirección válida de Gmail (terminar en @gmail.com).');
      return;
    }

    // Si todo está correcto, registrar al usuario
    this.auth.register(this.usuario);
    this.exito = true;

    // Redirigir al login tras 2 segundos
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 2000);
  }
}
