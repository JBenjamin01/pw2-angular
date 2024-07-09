import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-dream-app';
	name : string;
	email;
	webpage : string;
	hobbies : string[];
  showHobbies : boolean;

  constructor() {
    console.log("Constructor working...");
    this.name = "Jhonatan Benjamin Mamani Céspedes";
    this.email = "jmamanices@unsa.edu.pe";
    this.webpage = "http://www.unsa.edu.pe";
    this.hobbies = ["Futbol","Programacion","Leer","Editar y modelar (3D)"];
    this.showHobbies = false;
  }
  toggleHobbies() {
		this.showHobbies = !this.showHobbies;
	}
  newHobby(hobby:any) {
		this.hobbies.push(hobby.value);
		hobby.value = "";
		return false;
	}
}
