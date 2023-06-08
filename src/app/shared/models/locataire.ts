export class Locataire {
  id!:BigInteger;
  logement_id?:bigint;
  nom!:string;
  email!:string;
  age!:number;
  date_e!:Date;
  date_s!:Date;
  reference_prec?:string;
  created_at!:Date;
  updated_at!:Date;
}
