import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatMenuModule,
  MatExpansionModule,
  MatInputModule,
  MatFormFieldModule} from '@angular/material';
  import { MatIconModule } from "@angular/material/icon";
  import { RouterModule } from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoursComponent } from './cours/cours.component';
import { CompteComponent } from './compte/compte.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { NotfoundComponent } from './notfound/notfound.component';


@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    HeaderComponent,
    FooterComponent,
    CoursComponent,
    CompteComponent,
    ConnexionComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    RouterModule,
    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
