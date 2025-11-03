import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../Header/header.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  styleUrls: ['./login.component.scss'],
  imports: [CommonModule, FormsModule, HeaderComponent, RouterLink],
})
export class LoginComponent {
  ci = '';
  password = '';
  error = false;

  constructor(private auth: AuthService, private router: Router) {}

  onSubmit(form: any) {

    const ok = this.auth.login(this.ci, this.password);

    if (ok) {
      this.router.navigate(['/']);
    } else {
      this.error = true;
    }
  }
}
