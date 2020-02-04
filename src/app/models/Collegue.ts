export class Collegue {
    constructor(
      private _matricule: string ,
      private _nom: string ,
      private _prenom: string ,
      private _email: string ,
      private _dateDeNaissance: Date ,
      private _photoUrl: string ) {
    }
    get nom(){
        return this._nom;
    }
    get matricule(){
      return this._matricule;
    }
    get prenom(){
      return this._prenom;
    }
    get email(){
      return this._email;
    }
    get dateDeNaissance(){
      return this._dateDeNaissance;
    }
    get photoUrl(){
      return this._photoUrl;
    }

}
