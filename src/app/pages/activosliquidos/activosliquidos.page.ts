import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activosliquidos',
  templateUrl: './activosliquidos.page.html',
  styleUrls: ['./activosliquidos.page.scss'],
})
export class ActivosliquidosPage implements OnInit {

  card1 = {
    inversionesNegociables: '',
    inversinesDisponibles: '',
    participacionFondos:''
  }
  arrayInput1: any[] =[]
  arrayInput2: any[] =[]
  arrayInput3: any[] =[]
  arrayInput5: any[] =[] 
  arrayInput6: any[] =[] 
  arrayInput7: any[] =[] 
  arrayInput8: any[] =[] 
  arrayInput9: any[] =[] 
  arrayInput10: any[] =[] 
  arrayInput11: any[] =[] 
  arrayInput12: any[] =[] 
  

  datosi2: any[] = [
    {
      description: 'Caja(110500)',
      content: 'Bancos y otras entidades con actividad financiera(111000) ',
      content1: 'Equivalentes al efectivo(compromiso de pago)(111500)',
      title: 'Disponible'
    },
    {
      description: 'Inversiones negociables en títulos de deuda(120400)',
      content: 'Inversiones disponibles para la venta en títulos de deuda(121300)',
      content1: 'Participación en fondos de inversión colectiva abiertos sin pacto de permanencia(123016)',
      title: 'Inversiones'
    },
    {
      description: 'Cuentas corrientes',
      content: 'Fondos de inversión colectiva administrados por sociedades fiduciari',
      content1: 'Cuentas de ahorro',
      content2: 'Fondos de inversión colectiva administrados por sociedades comisionistas de bolsa(112006)',
      content3: 'Certificado de depósito a término(112007)',
      content4: 'Certificados de ahorro a término(112008)',
      content5: 'Títulos emitidos avalados, aceptados o garantizados por instituciones vigiladas por la superintendencia financiera(120305)',
      content6: '¿Certificados de ahorro a término ¿ cdat(120310)',
      content7: 'Fondos de inversión colectiva administrados por sociedades fiduciarias(120315)',
      content8:'Fondos de inversión colectiva administrados por sociedades comisionistas de bolsa2(120320)',
      content9: 'Patrimonio autónomo administrado por sociedades fiduciarias(120325)',
      content10:'Bonos ordinarios(120330)',
      title: 'Fondo de liquídez'
    },


  ];





  

constructor() { }

ngOnInit() {
}

  onSubmit(){
    console.log('submit')
  }
  

}
