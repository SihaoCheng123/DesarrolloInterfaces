import { Injectable } from '@angular/core';
import { BehaviorSubject , Observable} from 'rxjs';
import {PokemonApi} from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonDetailService {

  pokemon: BehaviorSubject<string|null> = new BehaviorSubject<string|null>(null);
  detail$: Observable<string|null> = this.pokemon.asObservable();

  constructor() { }

  showDetail(nombre: string){
    this.pokemon.next(nombre);
    }
}
