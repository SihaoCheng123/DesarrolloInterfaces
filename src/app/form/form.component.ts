import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    ){
      this.formulario = this.formBuilder.group({
        name: ["", [Validators.required, Validators.minLength(2)]],
        category : ["", [Validators.required]]
        })
      }

  enviar(){
    alert("Formulario enviado");
  }
}
