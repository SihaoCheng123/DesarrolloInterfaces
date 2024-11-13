import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PokemonDetailService} from './pokemon-detail.service';

@Injectable({
  providedIn: 'root'
})
export class CadaPokemonService {

  url: string = "https://pokeapi.co/api/v2/pokemon/"
  nombrePokemon: string|null = ""

  constructor(
    private http: HttpClient,
    private pokemonDetailService: PokemonDetailService
  ) { }
  ngOnInit(){
    this.pokemonDetailService.detail$.subscribe(detail =>{
      this.nombrePokemon = detail;
    })
  }
  getPokemon(nombrePokemon: string|null): Observable<any>{
    return this.http.get(this.url + nombrePokemon);
  }

}
