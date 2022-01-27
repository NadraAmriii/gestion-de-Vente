import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { AccueilComponent } from './accueil/accueil.component';
import { AjoutLivreComponent } from './ajout-livre/ajout-livre.component';
import { AjouterPanierComponent } from './ajouter-panier/ajouter-panier.component';
import { AuthComponent } from './auth/auth.component';
import { DetailsLivreComponent } from './details-livre/details-livre.component';
import { LivreComponent } from './livre/livre.component';
import { ModifierLivreComponent } from './modifier-livre/modifier-livre.component';
import { GardeAuthGuard } from './services/garde-auth.guard';

const routes: Routes = [
  {path:'home',component:AccueilComponent},
{ path: '', component: AuthComponent },
{ path: 'livre', canActivate: [GardeAuthGuard],component: LivreComponent },
{ path: 'ajout-livre', canActivate: [GardeAuthGuard], component: AjoutLivreComponent },
{ path: 'home/:id', canActivate: [GardeAuthGuard], component: DetailsLivreComponent },
{ path: 'home/edit/:id', canActivate: [GardeAuthGuard], component: ModifierLivreComponent },
{path :'ajouter-panier',canActivate: [GardeAuthGuard],component : AjouterPanierComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
