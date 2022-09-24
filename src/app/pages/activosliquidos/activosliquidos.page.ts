import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activosliquidos',
  templateUrl: './activosliquidos.page.html',
  styleUrls: ['./activosliquidos.page.scss'],
})
export class ActivosliquidosPage implements OnInit {

  card1= {
    inversionesNegociables: '',
    inversinesDisponibles: '',
    participacionFondos:''
  }
  arrayInput1: any[] =[
    {
      inversionesNegociables: '',
    }
  ]
  arrayInput2: any[] =[
    {
      inversinesDisponibles: '',
    }
  ]
  arrayInput3: any[] =[
    {
      participacionFondos: '',
    }
  ]
  

  datosi2: any[] = [
    {
      description: 'Inversiones negociables en títulos de deuda(120400)*',
      content: 'Inversiones disponibles para la venta en títulos de deuda(121300)*',
      content1: 'Participación en fondos de inversión colectiva abiertos sin pacto de permanencia(123016)*'
    },
    {
      description: 'FONDO DE LIQUIDEZ - Cuentas corrientes(112001)*',

    },
    {
      description: '',
    }

  ];





  

constructor() { }

ngOnInit() {
}

  onSubmit(){
    console.log('submit')
  }
  

}
