import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GruposerviceService {

  

  constructor() { }

  agrupar(miembros:string[], tamañoGrupo:number) {
    miembros = miembros.sort(() => Math.random() - 0.5);
    let aux: any = {};
    let group: any[] = [];
    let nombreGrupo: string;
    let contadorGrupo: number = 0;

    miembros.forEach(miembro => {
      nombreGrupo = "Grupo " + contadorGrupo;
      group.push(miembro);
      if(group.length == tamañoGrupo) {
        aux[nombreGrupo] = group;
        group = [];
        contadorGrupo++;
      }
    });

    let contador: number = 0;
    nombreGrupo = "Grupo " + contador;

    while(group.length != 0) {
      aux[nombreGrupo].push(group.pop());
      contador++;
      nombreGrupo = "Grupo " + contador;
    }

    return aux;

  }


}
