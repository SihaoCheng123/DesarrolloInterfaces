import { Component } from '@angular/core';
import {Pokemon} from '../services/interfaces/pokemon'

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrl: './elements.component.scss'
})
export class ElementsComponent {
  pokemons: Pokemon[] = [
    {id: 1, name:"Pikachu", description: "Tipo eléctrico", image_url: "https://fotografias-neox.atresmedia.com/clipping/cmsimages01/2015/11/26/CF444504-29E2-4906-BAF6-490E09C1C98E/98.jpg?crop=899,506,x0,y37&width=1900&height=1069&optimize=high&format=webply"},
    {id: 2, name:"Charmander", description: "Tipo fuego", image_url: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2022/04/pokemon-charmander-2674695.jpg?tf=1200x"},
    {id: 3, name:"Squirtle", description: "Tipo agua", image_url: "https://www.mundodeportivo.com/alfabeta/hero/2023/06/squirtle-pokemon-famoso.jpeg?width=1200&aspect_ratio=16:9"},
    {id: 4, name:"Bulbasaur", description: "Tipo tierra", image_url: "https://www.mundodeportivo.com/alfabeta/hero/2020/03/bulbasaur-pok%C3%A9mon.png?width=1200&aspect_ratio=16:9"}
  ]

}

