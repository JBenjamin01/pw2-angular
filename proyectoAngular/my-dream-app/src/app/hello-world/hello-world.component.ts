import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
    selector: 'app-hello-world',
    standalone: true,
    templateUrl: './hello-world.component.html',
    styleUrls: ['./hello-world.component.css'],
    imports: [CommonModule]
})
export class HelloWorldComponent implements OnInit {
	constructor() { }

	ngOnInit(): void{
	}
}