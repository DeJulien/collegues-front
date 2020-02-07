import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Collegue } from '../models/Collegue';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../environments/environment';


const url = environment.backendUrl;

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private httpClient: HttpClient) { }

  rechercherMatriculeParNom(nom: string): Observable<string[]> {

    return this.httpClient.get<string[]>(url + '?nom=' + nom);

  }

  ajouterCollegue(newCollegue: Collegue): Observable<void> {
    return this.httpClient.post<void>(url, newCollegue);
  }
}
