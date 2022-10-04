import { Component, OnInit } from '@angular/core';

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'american-football-outline',
      name: 'IRL',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'logo-apple-appstore',
      name: 'IRL Estrés',
      redirectTo: '/alert'
    },
    {
      icon: 'beaker-outline',
      name: 'Activos Liquidos',
      redirectTo: '/activosliquidos'
    },
    {
      icon: 'beaker-outline',
      name: 'Indice Promedio de Morosidad',
      redirectTo: '/indicepromdemorosidad'
    },
    {
      icon: 'beaker-outline',
      name: 'Indice Promedio de Morosidad Pa',
      redirectTo: '/indicepromdemorosidadpa'
    },
    {
      icon: 'beaker-outline',
      name: 'Indice recaudo de aportes',
      redirectTo: '/indicerecaudodeaportes'
    },
    {
      icon: 'cog-outline',
      name: 'R.Cartera',
      redirectTo: '/tabs/consumoventanilla'
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
