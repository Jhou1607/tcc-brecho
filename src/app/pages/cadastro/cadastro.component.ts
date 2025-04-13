import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-cadastro',
  imports: [
    CommonModule,
    FormsModule,
    NzInputModule,
    NzSelectModule,
    NzCheckboxModule,
    NzButtonModule
  ],
  templateUrl: './cadastro.component.html',
  standalone: true,
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {
  nome = '';
  email = '';
  senha = '';
  dia: number | null = null;
  mes: string | null = null;
  ano: number | null = null;
  sexo: string = '';

  selecionarSexo(valor: string) {
    this.sexo = valor;
  }

  dias = Array.from({ length: 31 }, (_, i) => i + 1);
  meses = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];
  anos = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);
}
