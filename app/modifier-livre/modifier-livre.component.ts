import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LivresService } from '../services/livres.service';

@Component({
  selector: 'app-modifier-livre',
  templateUrl: './modifier-livre.component.html',
  styleUrls: ['./modifier-livre.component.css']
})
export class ModifierLivreComponent implements OnInit {
  id : string;
  nomLivre: string;
  cheminImgLivre: string;
  prix : number;
  descriptionLivre: String;
  

  constructor(private router: Router, private route: ActivatedRoute, private livresService : LivresService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.nomLivre = this.livresService.getLivreParId(+id).nomLivre;
    this.cheminImgLivre = this.livresService.getlivreParId(+id).cheminImgLivre;
    this.descriptionLivre = this.livresService.getLivreParId(+id).descriptionLivre;
    this.prix=this.livresService.getLivreParId(+id).prix;
  }
  soumettre(l:NgForm)
  {
    
   
    const n = l.value['nom'];
    const a = l.value['img'];
    const d = l.value['desc'];
    const p = l.value['pr'];
    const id = this.route.snapshot.params['id'];

    this.livresService.modifierLivre(+id,n,a,d,p);

    alert ("Votre livre a été modifié");
    this.router.navigate(['/home']) ;

  }

}
