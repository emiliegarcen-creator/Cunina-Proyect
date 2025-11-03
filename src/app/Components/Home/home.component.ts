import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

import { HeaderComponent } from '../Header/header.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FormsModule],
})
export class HomeComponent implements OnInit {
  usuario: any = null;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.usuario = this.auth.getUsuarioActivo();
  }

  logout() {
    this.auth.logout();
    window.location.reload();
  }
}
