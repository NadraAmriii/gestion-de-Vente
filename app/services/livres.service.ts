import { Injectable } from '@angular/core';
import { DesLivres } from '../shared/models/des-livres';
import { Livres } from '../shared/models/livres';

@Injectable({
  providedIn: 'root'
})
export class LivresService {
  DesLivres : Livres []= DesLivres;
  constructor() { }
  getlivre() : Livres[]
  {
  return this.DesLivres;
  }
  ajoutLivre (l)
  {
  this.DesLivres.push(l);
  }
  getlivreParId (id :  number) : Livres
{
  for (let i=0;i< this.DesLivres.length; i++)
    if (this.DesLivres[i].id == id)
      return this.DesLivres[i];
}
getLivreParId (id :  number) : Livres
{
  for (let i=0;i< this.DesLivres.length; i++)
    if (this.DesLivres[i].id == id)
      return this.DesLivres[i];
}

supprimerLivre(l: Livres) {
  let DesLivres = this.getlivre();
  let i = DesLivres.indexOf(l);
  if (i !== -1) {
    DesLivres.splice(i,1);
  }
}


modifierLivre (id : number,n : string,a : string ,d : string,p : number) {

      
  let DesLivres = this.getlivre();
  for (let i=0;i< DesLivres.length; i++)
    if (DesLivres[i].id == id)
        {DesLivres[i].nomLivre=n;
          DesLivres[i].cheminImgLivre=a;
        DesLivres[i].descriptionLivre=d;
        DesLivres[i].prix=p;
        }




  
}}
