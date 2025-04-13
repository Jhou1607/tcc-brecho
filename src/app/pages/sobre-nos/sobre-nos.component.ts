import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sobre-nos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sobre-nos.component.html',
  styleUrls: ['./sobre-nos.component.scss']
})

export class SobreNosComponent {
  menuAtivo = false;

  constructor(private router: Router) {}

  toggleMenu() {
    this.menuAtivo = !this.menuAtivo;
  }

  fecharMenu() {
    this.menuAtivo = false;
  }

  irParaPerfil() {
    this.router.navigate(['/perfil']);
  }
}
