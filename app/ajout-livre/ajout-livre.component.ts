import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LivresService } from '../services/livres.service';
import { Livres } from '../shared/models/livres';

@Component({
  selector: 'app-ajout-livre',
  templateUrl: './ajout-livre.component.html',
  styleUrls: ['./ajout-livre.component.css']
})
export class AjoutLivreComponent implements OnInit {

  constructor(private livresService : LivresService ,
    private router : Router
    ) { }

  ngOnInit(): void {
  }
  ajoutLivre(nom,lien,desc,pr){
    var x = new Livres ();
    x.nomLivre=nom;
    x.cheminImgLivre=lien;
    x.descriptionLivre=desc;
    x.prix=pr;
    x.descvisible=false;
    this.livresService.ajoutLivre(x);
    alert ("Votre livre est ajouté");
    this.router.navigate(["livre"]);

  }

}
