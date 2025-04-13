import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent {
  user = {
    name: 'Teste Bacana',
    email: 'email@bacana.com',
    photoUrl: 'https://brainrotanimal.com/images/TrippiTroppi.webp',
    birthdate: '01/01/1990',
    gender: 'Masculino',
    bio: 'Trippi troppi, troppa trippa, tre topi trotterellano tra tromboni tritati. Triplicando trottoline tropicali. E chi troppo vuole, nulla trippa!'
  };


  editPhoto() {
    console.log('Alterar foto clicado');
  }

  editProfile() {
    console.log('Alterar dados clicado');
  }

  logout() {
    console.log('Logout clicado');
  }
}
