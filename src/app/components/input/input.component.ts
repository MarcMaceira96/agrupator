import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor() { }

  grupos: number;
  numeroMiembros: number;
  miembrosPorGrupo: number;
  remainder: number;


  ngOnInit() {
  }

  actualizarMiembrosGrupo() {
    this.miembrosPorGrupo = Math.floor(this.numeroMiembros / this.grupos);
    this.remainder = this.numeroMiembros % this.grupos;
  }

  actualizarGrupos() {
    this.grupos = Math.floor(this.numeroMiembros / this.miembrosPorGrupo);
    this.remainder = this.numeroMiembros % this.grupos;
  }

  calcularGrupos() {
    
  }

}
