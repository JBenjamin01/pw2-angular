import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'hello', component: HelloWorldComponent },
    { path: 'about', component: AboutComponent }
];