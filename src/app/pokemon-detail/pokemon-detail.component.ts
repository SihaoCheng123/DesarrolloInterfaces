import { Component, OnInit } from '@angular/core';
import {PokemonDetailService} from '../services/pokemon/pokemon-detail.service';
import {CadaPokemonService} from '../services/pokemon/cada-pokemon.service';
import {PokemonDetail} from '../services/interfaces/pokemon';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.scss'
})
export class PokemonDetailComponent {

  nombrePokemon: string|null = ""
  pokemon: PokemonDetail = {name: this.nombrePokemon, abilities: "", base_experience:0, height: 0};
  constructor(
    private pokemonDetailService: PokemonDetailService,
    private cadaPokemonService: CadaPokemonService
    ){}

  ngOnInit(){
    this.pokemonDetailService.detail$.subscribe(detail =>{
      this.nombrePokemon = detail;
      })

      this.cadaPokemonService.getPokemon().subscribe({
        next: data => {

          this.pokemon.abilities = data.abilities;
          this.pokemon.base_experience = data.base_experience,
          this.pokemon.height  = data.height
          //         console.log(this.pokemonApiService)
          },
               
          error: error =>{
          console.log(error);
          },
      })
    }


}
