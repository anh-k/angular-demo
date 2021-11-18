import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterListModule } from './components/characterlist.module';
import { AddCharacterComponent } from './components/add-character/add-character.component';


@NgModule({
  declarations: [
    AppComponent,
    AddCharacterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    CharacterListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
