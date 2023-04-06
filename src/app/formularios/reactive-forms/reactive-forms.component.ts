import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {

  registerForm: FormGroup;

  constructor(public formBuilder: FormBuilder) {

    this.registerForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(6)]],
      apellido: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      localizacion: this.formBuilder.group({
        ciudad: ['', [Validators.required]],
        direccion_1: ['', [Validators.required]],
        direccion_2: ['', [Validators.required]],
        provincia: [''],
        zip: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      }),
    });
  }

  //Validacion nombre
  get nombreControl(): AbstractControl | null {
    return this.registerForm.get('nombre');
  }
  get nombreControlIsInvalid(): boolean {
    return !!(this.nombreControl?.invalid && this.nombreControl.touched);
  }

  //Validacion apellido
  get apellidoControl(): AbstractControl | null {
    return this.registerForm.get('apellido');
  }
  get apellidoControlIsInvalid(): boolean {
    return !!(this.apellidoControl?.invalid && this.apellidoControl.touched);
  }

  //Validacion correo
  get emailControl(): AbstractControl | null {
    return this.registerForm.get('email');
  }
  get emailControlIsInvalid(): boolean {
    return !!(this.emailControl?.invalid && this.emailControl.touched);
  }

  //Validacion direccion 1
  get direccion_1Control(): AbstractControl | null {
    return this.registerForm.get('localizacion.direccion_1');
  }
  get direccion_1ControlIsInvalid(): boolean {
    return !!(this.direccion_1Control?.invalid && this.direccion_1Control.touched);
  }

  //Validacion direccion 2
  get direccion_2Control(): AbstractControl | null {
    return this.registerForm.get('localizacion.direccion_2');
  }
  get direccion_2ControlIsInvalid(): boolean {
    return !!(this.direccion_2Control?.invalid && this.direccion_2Control.touched);
  }

  //Validacion ciudad
  get ciudadControl(): AbstractControl | null {
    return this.registerForm.get('localizacion.ciudad');
  }
  get ciudadControlIsInvalid(): boolean {
    return !!(this.ciudadControl?.invalid && this.ciudadControl.touched);
  }

  //Validacion zip
  get zipControl(): AbstractControl | null {
    return this.registerForm.get('localizacion.zip');
  }
  get zipControlIsInvalid(): boolean {
    return !!(this.zipControl?.invalid && this.zipControl.touched);
  }


  onSubmit(): void {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
    } else {
      alert('El formulario no es valido');
    }
  }
}
