import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursComponent } from './cours/cours.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { CompteComponent } from './compte/compte.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path: 'cours', component: CoursComponent},
  {path: 'acceuil', component: AcceuilComponent},
  {path: 'compte', component: CompteComponent},
  {path: 'connexion', component: ConnexionComponent},
  {path: 'notfound', component: NotfoundComponent},
  {path: '', redirectTo: '/acceuil', pathMatch: 'full'},
  {path: '**', component: AcceuilComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
