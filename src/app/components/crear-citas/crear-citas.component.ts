import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-crear-citas',
  templateUrl: './crear-citas.component.html',
  styleUrls: ['./crear-citas.component.css'],

})
export class CrearCitasComponent {
  //mytime: Date = new Date();
  name: string = '';
  fecha: string = '';
  hora: string = '';
  sintomas: string = '';
  formularioIncorrecto: boolean = false;

  @Output() nuevaCita = new EventEmitter<any>;

  agregarCita() {

    if (this.name == '' || this.fecha == '' || this.hora == '' || this.sintomas == '') {
      this.formularioIncorrecto = true;
      return;
    } else {
      this.formularioIncorrecto = false;
    }
    //Crear objeto para enviarselo al padre
    const CITA = {
      name: this.name,
      fecha: this.fecha,
      hora: this.hora,
      sintomas: this.sintomas
    }
    console.log(CITA);
    this.nuevaCita.emit(CITA);
    this.resetCampos();
  }

  resetCampos() {
    this.name = '';
    this.fecha = '';
    this.hora = '';
    this.sintomas = '';
  }

}
