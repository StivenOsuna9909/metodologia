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
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
