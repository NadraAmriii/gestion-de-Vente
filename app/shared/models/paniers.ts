export class Paniers {
    id?:number;
    nom? :string;
    prix? :number;
    image? : string;
    quantity? : number;
    constructor(args : Paniers = {}){
        this.id=args.id;
        this.nom = args.nom;
        this.prix =args.prix;
        this.image=args.image;
        this.quantity= args.quantity;


    }
}
