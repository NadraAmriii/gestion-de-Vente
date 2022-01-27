import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { AjouterPanierService } from '../services/ajouter-panier.service';

@Component({
  selector: 'app-ajouter-panier',
  templateUrl: './ajouter-panier.component.html',
  styleUrls: ['./ajouter-panier.component.css']
})
export class AjouterPanierComponent implements OnInit {
  panier =[];
  cartTotalValue;
  livres;
  

  constructor( private panierService : AjouterPanierService,route : ActivatedRoute)  {
    this.panier= this.panierService.getLivre();
    this.livres = this.panierService.getPanierCount();
  }

  ngOnInit(): void {
   
  
    setInterval(() => {
      this.livres = this.panierService.getPanierCount();
      console.log("nombre produits dans le panier : ",this.panierService);
    }, 200);
  }

  supprimerDuPanier= (livre) => {
    this.panierService.supprimerPanier(livre);
    this.panier= this.panierService.getLivre();
    this.cartTotalValue =  this.panierService.getTotalPrix();
  }

  Incrementer = (livre) => {
    this.panierService.ajouterLivreToPannier(livre);
    this.panier = this.panierService.getLivre();
    this.cartTotalValue =  this.panierService.getTotalPrix();
  }

  Decrimenter = (livre) => {
    this.panierService.decrementerDePanier (livre);
    this.panier = this.panierService.getLivre();
    this.cartTotalValue =  this.panierService.getTotalPrix();
  }

}
