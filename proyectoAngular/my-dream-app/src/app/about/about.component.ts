import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-about',
    standalone: true,
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css'],
    imports: [CommonModule]
})
export class AboutComponent implements OnInit {
	constructor() { }

	ngOnInit(): void{
	}
}