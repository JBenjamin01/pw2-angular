import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { AboutComponent } from './about/about.component';

const routes: Route[] =[
    { path: '', component: AppComponent },
    { path: 'hello', component: HelloWorldComponent },
    { path: 'about', component: AboutComponent }
];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(routes),
    ],

    bootstrap: [],
})

export class AppModule { }