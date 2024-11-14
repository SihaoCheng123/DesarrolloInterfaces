import {Component, OnInit} from '@angular/core';
import {PokemonDetailService} from '../services/pokemon/pokemon-detail.service';
import {CadaPokemonService} from '../services/pokemon/cada-pokemon.service';
import {PokemonDetail} from '../services/interfaces/pokemon';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.scss'
})
export class PokemonDetailComponent implements OnInit {

  nombrePokemon: string | null = ""
  pokemon: PokemonDetail = {name: this.nombrePokemon, abilities: [], base_experience: 0, height: 0};

  constructor(
    private pokemonDetailService: PokemonDetailService,
    private cadaPokemonService: CadaPokemonService
  ) {
  }

  ngOnInit() {
    this.pokemonDetailService.detail$.subscribe(detail => {
      this.nombrePokemon = detail;
    })

    if (this.nombrePokemon != null) {
      this.cadaPokemonService.getPokemon(this.nombrePokemon).subscribe({
        next: data => {

          for (let i = 0; i < data.abilities.length; i++) {
            this.pokemon.abilities.push(data.abilities[i].ability.name)
          }

          this.pokemon.base_experience = data.base_experience;
            this.pokemon.height = data.height

        },

        error: error => {
          console.log(error);
        },
      })
    }
  }


}
