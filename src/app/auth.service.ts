import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Simulação de autenticação - você pode substituir por algo real (como uma requisição HTTP para um servidor)
  private authenticated: boolean = false;

  constructor() { }

  // Método para simular a verificação de autenticação
  isAuthenticated(): boolean {
    return this.authenticated;
  }

  // Método para simular o login (definindo o estado de autenticado)
  login() {
    this.authenticated = true;
  }

  // Método para simular o logout (removendo o estado de autenticação)
  logout() {
    this.authenticated = false;
  }
}
