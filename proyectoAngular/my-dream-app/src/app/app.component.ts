import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-dream-app';
	name : string;
	email;
	webpage : string;
	hobbies : string[];

  constructor() {
    console.log("Constructor working...");
    this.name = "Jhonatan Benjamin Mamani Céspedes";
    this.email = "jmamanices@unsa.edu.pe";
    this.webpage = "http://www.unsa.edu.pe";
    this.hobbies = ["Futbol","Programacion","Leer","Editar y modelar (3D)"];
  }
}
