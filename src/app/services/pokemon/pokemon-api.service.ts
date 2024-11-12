import { Injectable } from '@angular/core';
import { BehaviorSubject , Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonApiService {

  url: string = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"

  constructor(
    private http: HttpClient
    ) { }

  getAllPokemon(): Observable<any>{
    return this.http.get(this.url);

  }

}
