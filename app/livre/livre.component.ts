import { Component, OnInit } from '@angular/core';
import { AjouterPanierService } from '../services/ajouter-panier.service';
import { LivresService } from '../services/livres.service';
import { DesLivres } from '../shared/models/des-livres';
import { Livres } from '../shared/models/livres';
import { Paniers } from '../shared/models/paniers';

@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css']
})
export class LivreComponent implements OnInit {

  tabLivres : Livres [] = null;
  tabPaniers : Paniers[] =null;
  constructor(private livresService : LivresService ,private panier : AjouterPanierService) { }

  ngOnInit(): void {
    this.tabLivres=this.livresService.getlivre();
    this.tabPaniers= this.panier.getLivre();
  }
  afficheDesc(x)
  {
    x.descVisible = true;
  }

  cacherDesc(x)
  {
    x.descVisible = false;
  }
  supprimerLivre(l)
  {
    this.livresService.supprimerLivre(l);
  }
  ajouterLivreToPannier = (x) => {
    this.panier.ajouterLivreToPannier(x);
  }



}
