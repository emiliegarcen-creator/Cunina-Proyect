import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private usuariosKey = 'usuarios';
  private usuarioActivoKey = 'usuarioActivo';

  register(usuario: any) {
    const usuarios = JSON.parse(localStorage.getItem(this.usuariosKey) || '[]');
    usuarios.push(usuario);
    localStorage.setItem(this.usuariosKey, JSON.stringify(usuarios));
  }

  login(ci: string, password: string): boolean {
    const usuarios = JSON.parse(localStorage.getItem(this.usuariosKey) || '[]');

    const usuario = usuarios.find(
      (u: any) =>
        u.ci.toString().trim() === ci.toString().trim() &&
        u.password.trim() === password.trim()
    );

    if (usuario) {
      localStorage.setItem(this.usuarioActivoKey, JSON.stringify(usuario));
      return true;
    }

    return false;
  }

  logout() {
    localStorage.removeItem(this.usuarioActivoKey);
  }

  getUsuarioActivo() {
    const usuario = localStorage.getItem(this.usuarioActivoKey);
    return usuario ? JSON.parse(usuario) : null;
  }
}
