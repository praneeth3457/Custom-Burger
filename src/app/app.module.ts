import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ConstantService } from './services/constant.service';
import { BuildComponent } from './build/build.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'build', component: BuildComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ConstantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
