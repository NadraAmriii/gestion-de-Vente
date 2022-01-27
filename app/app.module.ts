import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivreComponent } from './livre/livre.component';
import { AjoutLivreComponent } from './ajout-livre/ajout-livre.component';
import { NavMenuComponent } from './shared/nav-menu/nav-menu.component';
import { LivresService } from './services/livres.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetailsLivreComponent } from './details-livre/details-livre.component';
import { ModifierLivreComponent } from './modifier-livre/modifier-livre.component';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AjouterPanierComponent } from './ajouter-panier/ajouter-panier.component';
import { AjouterPanierService } from './services/ajouter-panier.service';

@NgModule({
  declarations: [
    AppComponent,
    LivreComponent,
    AjoutLivreComponent,
    NavMenuComponent,
    DetailsLivreComponent,
    ModifierLivreComponent,
    AuthComponent,
    AccueilComponent,
    AjouterPanierComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [LivresService ,AjouterPanierService],

  bootstrap: [AppComponent]
})
export class AppModule { }
