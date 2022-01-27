export class Livres {
    id? : number;
    nomLivre? : string;
    cheminImgLivre? : any ;
    descriptionLivre? : String;
    prix? : number;
    descvisible? : boolean;
  
    constructor (args: Livres = {}){
        this.id=args.id;
        this.nomLivre = args.nomLivre;
        this.cheminImgLivre=args.cheminImgLivre;
        this.prix=args.prix;
        this.descriptionLivre=args.descriptionLivre;
        this.descvisible = args.descvisible;
 
    }
     
 }
 