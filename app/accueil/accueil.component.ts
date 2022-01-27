import { Component, OnInit } from '@angular/core';
import { LivresService } from '../services/livres.service';
import { Livres } from '../shared/models/livres';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  tabLivres : Livres [] = null;
  constructor(private livresService : LivresService) { }

  ngOnInit(): void {
    this.tabLivres=this.livresService.getlivre();
  }
  afficheDesc(x)
  {
    x.descVisible = true;
  }

  cacherDesc(x)
  {
    x.descVisible = false;
  }

}
