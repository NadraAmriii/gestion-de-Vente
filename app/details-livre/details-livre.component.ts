import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AjouterPanierService } from '../services/ajouter-panier.service';
import { LivresService } from '../services/livres.service';

@Component({
  selector: 'app-details-livre',
  templateUrl: './details-livre.component.html',
  styleUrls: ['./details-livre.component.css']
})
export class DetailsLivreComponent implements OnInit {
  nomLivre : string ='Affiche le nom du livre';
  descLivre : String ='Affiche la description du film';
  prix: number ;
  panier =0;
  constructor(private route: ActivatedRoute, private livresService : LivresService,private panierService :AjouterPanierService) { 
    this.panier = this.panierService.getPanierCount();
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

    this.nomLivre = this.livresService.getlivreParId(+id).nomLivre;
    this.descLivre = this.livresService.getlivreParId(+id).descriptionLivre;
    this.prix = this.livresService.getLivreParId(+id).prix;
    setInterval(() => {
      this.panier = this.panierService.getPanierCount();
    }, 200);

  }
 
 // void acheter(nomLivre){
    //console.log

 // }


}