import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HerosComponent } from './heros/heros.component';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactUsComponent } from './contactUs/contactUs.component';
import { HeroComponent } from './hero/hero.component';
@NgModule({
  declarations: [		
    AppComponent,
      HerosComponent,
      NavComponent,
      ContactUsComponent,
      HeroComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
