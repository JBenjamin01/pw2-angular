import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { UserComponent } from './user/user.component' 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HelloWorldComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  @ViewChild('newUser') newUserInput!: ElementRef;

  users = ['ryan', 'joe', 'cameron', 'john', 'jhonatan', 'rodolfo'];
  activated = false;
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
  sayHello() {
		alert("Hola desde app.component");
	}
  addUser(newUser: any){
		this.users.push(newUser.value);
    newUser.value = '';
    this.newUserInput.nativeElement.focus();
    return false;
	}
  deleteUser(user:any) {
		for(let i = 0; i < this.users.length; i++){
			if(user == this.users[i]){
				this.users.splice(i, 1);
			}
		}
	}
}
