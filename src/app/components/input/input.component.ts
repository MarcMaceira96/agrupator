import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GruposerviceService } from 'src/app/services/gruposervice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @ViewChild('myInput', {static: false}) myInput: ElementRef;

  constructor(private grupoService: GruposerviceService,
              private router: Router) { }

  numeroMiembros: number;
  miembrosPorGrupo: number;
  miembros: string[] = [];
  generatedGroups: any;
  nombre: string;
  groupsKeys:string[] = [];

  ngOnInit() {
  }

  addMiembro() {
    if(this.nombre) {
      this.miembros.push(this.nombre);
      this.nombre = "";
    } 
    this.myInput.nativeElement.focus();
  }

  generarGrupos() {
    this.generatedGroups = this.grupoService.agrupar(this.miembros,this.miembrosPorGrupo);
    console.log(this.generatedGroups);
    this.groupsKeys = Object.keys(this.generatedGroups);
    console.log(this.groupsKeys);

    
    this.router.navigate(['/result'], {state: {data: this.generatedGroups}});
  }


}
