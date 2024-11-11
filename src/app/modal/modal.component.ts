import { Component, OnInit} from '@angular/core';
import {InformacionService} from '../services/modales/informacion.service';
import {EnviarPokemonService} from '../services/pokemon/enviar-pokemon.service';
import {Pokemon} from '../services/interfaces/pokemon';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent implements OnInit {
//   mostrarModal: boolean = true;

    pokemon: Pokemon | null = {
      id: -1,
      name: "",
      description: "",
      image_url: ""
    }
    constructor(
      private informacionService: InformacionService,
      private enviarPokemonService: EnviarPokemonService
      ){}

    ngOnInit(){
      this.enviarPokemonService.info$.subscribe(pokemon =>{
        this.pokemon = pokemon;
        })
    }

    toggleModal(){
      this.enviarPokemonService.updatePokemon(null);
      this.informacionService.toggleModal(false);
    }
}