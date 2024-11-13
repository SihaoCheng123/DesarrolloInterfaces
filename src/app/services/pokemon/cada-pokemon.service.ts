import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PokemonDetailService} from './pokemon-detail.service';
import { PokemonDetailComponent } from '../../pokemon-detail/pokemon-detail.component';

@Injectable({
  providedIn: 'root'
})
export class CadaPokemonService {

  url: string = "https://pokeapi.co/api/v2/pokemon/"
  nombrePokemon: string|null = ""

  constructor(
    private http: HttpClient,
    private pokemonDetailComponent: PokemonDetailComponent
  ) { }
 
  getPokemon(): Observable<any>{
    return this.http.get(this.url + this.pokemonDetailComponent.nombrePokemon);
  }

}
