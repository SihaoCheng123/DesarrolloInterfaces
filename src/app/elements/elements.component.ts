import { Component, OnInit } from '@angular/core';
import {Pokemon, PokemonApi} from '../services/interfaces/pokemon';
import {InformacionService} from '../services/modales/informacion.service';
import {EnviarPokemonService} from '../services/pokemon/enviar-pokemon.service';
import {PokemonApiService} from '../services/pokemon/pokemon-api.service';
import {PokemonDetailService} from '../services/pokemon/pokemon-detail.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrl: './elements.component.scss'
})
export class ElementsComponent implements OnInit{

  mostrarModal: boolean = false;

  pokemonsApi: PokemonApi[] = []

  constructor(
    private informacionService: InformacionService,
    private enviarPokemonService: EnviarPokemonService,
    private pokemonApiService: PokemonApiService,
    private router: Router,
    private pokemonDetailService: PokemonDetailService
    ){}

  ngOnInit(){
    this.informacionService.modal$.subscribe(modal => {
      this.mostrarModal = modal;
      })
    this.pokemonApiService.getAllPokemon().subscribe({
      //Obligatorios: next, error
      //Opcional: complete
      //si contacta con el servicio y va todo bien
      next: data => {
//         console.log(data.results);
        this.pokemonsApi = data.results;
//         console.log(this.pokemonApiService)
      },
      //si da error a la hora de comunicarse con la api o problemas del servicio, info del error
      error: error =>{
        console.log(error);
      },
      //algo que se va a ejecutar esté bien o mal
      complete: ()=>{
        console.log("Comunicación finalizada");
      }
    })
  }

  toggleModal(pk: Pokemon){
    this.enviarPokemonService.updatePokemon(pk);
    this.informacionService.toggleModal(true);
  }

   pokemons: Pokemon[] = [
    {id: 1, name:"Pikachu", description: "Tipo eléctrico", image_url: "https://www.mundodeportivo.com/alfabeta/hero/2024/10/captura.1727847866.2861.jpg?width=1200&aspect_ratio=16:9"},
    {id: 2, name:"Charmander", description: "Tipo fuego", image_url: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2022/04/pokemon-charmander-2674695.jpg?tf=1200x"},
    {id: 3, name:"Squirtle", description: "Tipo agua", image_url: "https://www.mundodeportivo.com/alfabeta/hero/2023/06/squirtle-pokemon-famoso.jpeg?width=1200&aspect_ratio=16:9"},
    {id: 4, name:"Bulbasaur", description: "Tipo tierra", image_url: "https://www.mundodeportivo.com/alfabeta/hero/2020/03/bulbasaur-pok%C3%A9mon.png?width=1200&aspect_ratio=16:9"}
  ]

  detallesPokemon(nombre: string){
    this.pokemonDetailService.showDetail(nombre);
    this.router.navigate(['detalles']);

  }

}

