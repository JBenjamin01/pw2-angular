import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { UserComponent } from './user/user.component' 
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
            HelloWorldComponent,
            UserComponent,
            FormsModule,
            HttpClientModule
          ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [DataService]
})

export class AppComponent {
  name : string = "Jhonatan B. Mamani Céspedes";
  age : number = 18;

  constructor(private dataService: DataService) {
    this.dataService.getData().subscribe(data => {
      console.log(data);
    });
  }
}
