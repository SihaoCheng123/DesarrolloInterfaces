import { Component } from '@angular/core';
import{Elementos} from "../services/interfaces/elementos";
@Component({
  selector: 'app-repaso',
  templateUrl: './repaso.component.html',
  styleUrl: './repaso.component.scss'
})
export class RepasoComponent {

  nombre: string = "Sihao"
  edad: number = 22
  alumnos: string[] = []
  curso: number | null = 1
  grupo: string | undefined = undefined
  cambioColor: boolean = false;
  visible: boolean = false;

  elementos: string[] = ["elemento 1", "elemento 2", "elemento 3", "elemento 4"]

  elementos2: Elementos[] = [
    {id: 1, nombre: "Elemento 1"},
    {id: 2, nombre: "Elemento 2"},
    {id: 3, nombre: "Elemento 3"},
    {id: 4, nombre: "Elemento 4"},
    {id: 5, nombre: "Elemento 5"},
    ]

  constructor(
    //     private nombreServicio: TipoDeServicio
    ){}

toggleColor(): void{
  this.cambioColor = !this.cambioColor;
  }

desaparecer(): void{
 this.visible = !this.visible;
  }
}


