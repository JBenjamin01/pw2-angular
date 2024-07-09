import { Routes } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    { path: 'hello', component: HelloWorldComponent },
    { path: 'about', component: AboutComponent }
];