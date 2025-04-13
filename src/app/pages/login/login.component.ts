import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, NzInputModule, NzButtonModule, NzIconModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = '';
  senha = '';

  onSubmit(): void {
    console.log('Login com email e senha');
    console.log('Email:', this.email);
    console.log('Senha:', this.senha);
  }

  onForgotPassword(): void {
    alert('Vamos te ajudar a recuperar sua senha!');
    // Aqui você pode redirecionar ou abrir um modal
  }

  loginWithGoogle(): void {
    alert('Futuramente, aqui vai entrar a integração com o Google!');
    // Aqui vai a lógica de autenticação com Firebase ou OAuth no futuro
  }
}
