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
  pokemon: PokemonDetail = {name: this.nombrePokemon,abilities: "", base_experience:0, height: 0};
  constructor(
    private pokemonDetailService: PokemonDetailService,
    private cadaPokemonService: CadaPokemonService
    ){}

  ngOnInit(){
    this.pokemonDetailService.detail$.subscribe(detail =>{
      this.nombrePokemon = detail;
      })
    this.cadaPokemonService.getPokemon(this.nombrePokemon).subscribe({
      error: error =>{
        console.log(error);
      },
      complete: ()=>{
        console.log("Comunicación finalizada");
      },
      //algo que se va a ejecutar esté bien o mal
      next: data =>{
        this.pokemon.abilities = data.abilities.ability,
        this.pokemon.base_experience = data.abilities.base_experience,
          this.pokemon.height = data.abilities.height
      }

    })
    }
}
