import { Component, OnInit } from '@angular/core';
import { resultadosCV } from 'src/app/interfaces/models';

@Component({
  selector: 'app-consumoventanilla',
  templateUrl: './consumoventanilla.page.html',
  styleUrls: ['./consumoventanilla.page.scss'],
})
export class ConsumoventanillaPage implements OnInit {



  

  alturaCuota: number;
  amortizacion: number;
  tasaInteresEfectiva: number;
  valorPrestamo: number;
  valorCuotaFija: number;
  saldoCapital: number;
  resultadoTasaInteresAplicada: number;
  resultadoNumerodeCuotas: any;
  resultadoC1: number;
  primeraBandaR: number;
  segundaBandaR: number;
  terceraBandaR: number;
  cuartaBandaR: number;
  nroCredito1: number;
  
  arrayCalculos : resultadosCV[];
  arrayGuardarResultadosNumerodeCuotas: any[];
  arrayGuardarResultadosBandas: any[];




  primeraBanda(alturaCuota: number, amortizacion: number, valorCuotafija: number, numeroCuotas: number):number {

    if ( numeroCuotas - alturaCuota < 1) { return 0 }
    if (amortizacion > 30) { return 0 }
    if (amortizacion = 30) { return valorCuotafija / 2 }
    return valorCuotafija

  }

  NPER(rate, pmt, pv, fv, type) {
    type = type === undefined ? 0 : type;
    fv = fv === undefined ? 0 : fv;

    rate = Number(rate);
    console.log('rate', rate);
    pmt = parseInt(pmt);
    console.log('pmt', pmt);
    pv = parseInt(pv);
    console.log('pv', pv);
    fv = parseInt(fv);
    type = parseInt(type);

    if (rate === 0) {
      return -(pv + fv) / pmt;
    } else {
      const num = pmt * (1 + rate * type) - fv * rate;
      const den = pv * rate + pmt * (1 + rate * type);

      return Math.log(num / den) / Math.log(1 + rate);
    }
  }
  convertirPositivoNegativo(numero){
    return -Math.abs(numero)
  }

   onOperation(): void {    

    //let planet = new Object;
    let operacion: resultadosCV = null;
    let rate = 0.019499999;
    let pmt = this.valorCuotaFija
    let pv = this.valorPrestamo
    this.resultadoTasaInteresAplicada = ((1 + this.tasaInteresEfectiva / 100) ** (this.amortizacion / 360) - 1)*100;
    console.log(this.resultadoTasaInteresAplicada)
    console.log(this.valorCuotaFija)
    console.log(this.valorPrestamo)
    this.resultadoNumerodeCuotas = Math.round(this.NPER(rate, this.convertirPositivoNegativo(pmt), pv, 0 , 0))
    this.primeraBandaR = this.primeraBanda(this.alturaCuota, this.amortizacion, this.valorCuotaFija, this.resultadoNumerodeCuotas)
    
    console.log(Math.round(this.resultadoNumerodeCuotas))
    console.log(this.valorPrestamo)
    operacion.nroCredito = this.nroCredito1;
    operacion.tasaInteresAplicada = this.resultadoTasaInteresAplicada;
    operacion.numeroDeCuotas = this.resultadoNumerodeCuotas;
    operacion.bandas = this.primeraBandaR;
    

    this.arrayCalculos.push(operacion)
    console.log(this.arrayCalculos);
  }
  



  constructor() {


  }

  ngOnInit() {

  }
}

