import { Component, OnInit } from '@angular/core';
import {FormControl } from '@angular/forms';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-creation-collegue',
  templateUrl: './creation-collegue.component.html',
  styleUrls: ['./creation-collegue.component.css']
})
export class CreationCollegueComponent implements OnInit {

  creaCollegue: Collegue = new Collegue();

  messageErreur:string;
  messageOk:string;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.creaCollegue.photoUrl = 'https://www.w3schools.com/bootstrap/img_avatar2.png';
  }

  creerCollegue(etatForm: FormControl) {
    this.messageErreur = null;
    this.messageOk = null;

    this.dataService.ajouterCollegue(this.creaCollegue)
    .subscribe(
      () => {
        this.messageOk = 'Super !';
        // this.creaCollegue = new Collegue();
        // this.creaCollegue.photoUrl = 'https://www.w3schools.com/bootstrap/img_avatar2.png';
        etatForm.reset();
      },
      error => {
        this.messageErreur = `Le collègue n'a pu être créé, DSL :-( Veuillez saisir correctement, je pars du principe de c'est de votre faute !`
      }
    );
  }

}
