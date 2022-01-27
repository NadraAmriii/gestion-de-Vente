import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AjouterPanierService {
  panier = [];
  totalPrix;

  constructor( private router : Router ) { }
  ajouterLivreToPannier = (livre) => {
    let disponible = false;
    for (let i in this.panier) {
      if (this.panier[i].id === livre.id) {
        this.panier[i].quantity++;
        disponible = true;
        this.getTotalPrix();
        break;
      }
    }
    if (!disponible) {
      this.panier.push({
        id: livre.id,
        nom: livre.nom,
        prix: livre.prix,
        image : livre.image,
        
      });
    }
    this.getTotalPrix();
  }
  getTotalPrix() {
    if (this.panier) {
      this.totalPrix = 0;
      this.panier.forEach((item) => {
        this.totalPrix+= (item.quantity * item.prix );
      });
      return {
        totalAmount: this.totalPrix
      };
    }
  }

  getLivre = () => {
    return this.panier;
  }
  getPanierCount = () => {
    if (this.panier) {
      let countLivre = 0;
      this.panier.forEach((item) => {
        countLivre += item.quantity;
      });
      return countLivre;
    }
  }
  clearPanier = () => {
    this.panier = [];
    this.router.navigate(['']);
  }
  supprimerPanier = (livre) => {
    this.panier = this.panier.filter((item) => item.id !== livre.id);
    if (this.panier.length === 0) {
      this.router.navigate(['']);
    }
    this.getTotalPrix();
  }
  decrementerDePanier = (livre) => {
    for (let i in this.panier) {
      if (this.panier[i].id === livre.id) {
        if (this.panier[i].quantity === 0) {
          this.supprimerPanier(livre);
        } else {
          this.panier[i].quantity--;
        }
        this.getTotalPrix();
        break;
      }
    }
    this.getTotalPrix();
  }
}