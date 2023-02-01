import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  formularioLogin: FormGroup;

  constructor() {
    let regexEmail: string = '^[a-z]+@[a-z]+\\.[a-z]{2,3}$'
    let controles: any = {
      nombre: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.pattern(regexEmail)]),
      password: new FormControl("", [Validators.required, Validators.minLength(8)]),
      recordar: new FormControl(false)
    }
    this.formularioLogin = new FormGroup(controles);
  }

login() {
  console.log(this.formularioLogin);
}
}
