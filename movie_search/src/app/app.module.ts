import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsideComponent } from './components/aside/aside.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LeftAsideComponent } from './components/left-aside/left-aside.component';
import { SearcherComponent } from './partials/searcher/searcher.component';

@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    NavbarComponent,
    FooterComponent,
    LeftAsideComponent,
    SearcherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
