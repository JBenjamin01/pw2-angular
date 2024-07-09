import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, RouterOutlet]
})

export class AppComponent {
  name : string = "Jhonatan B. Mamani Céspedes";
  age : number = 18;
  email: string = "jmamanices@unsa.edu.pe";
  title : string = "my-dream-app";
  hobbies = ["Futbol","Programacion","Leer","Editar y modelar (3D)"];
  showHobbies = false;

  toggleHobbies() {
		this.showHobbies = !this.showHobbies;
	}
}
