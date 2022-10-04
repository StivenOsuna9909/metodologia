import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indicerecaudodeaportes',
  templateUrl: './indicerecaudodeaportes.page.html',
  styleUrls: ['./indicerecaudodeaportes.page.scss'],
})
export class IndicerecaudodeaportesPage implements OnInit {
  operandoA1: number;
  operandoA2: number;
  operandoA3: number;
  operandoA4: number;
  operandoA5: number;
  operandoA6: number;
  operandoA7: number;
  operandoA8: number;
  operandoA9: number;
  operandoA10: number;
  operandoA11: number;
  operandoA12: number;
  operandoA13: number;
  operandoA14: number;
  operandoA15: number;
  operandoA16: number;
  operandoA17: number;
  operandoA18: number;
  operandoA19: number;
  operandoB1: number;
  operandoB2: number;
  operandoB3: number;
  operandoB4: number;
  operandoB5: number;
  operandoB6: number;
  operandoB7: number;
  operandoB8: number;
  operandoB9: number;
  operandoB10: number;
  operandoB11: number;
  operandoB12: number;
  operandoB13: number;
  operandoB14: number;
  operandoB15: number;
  operandoB16: number;
  operandoB17: number;
  operandoB18: number;
  operandoB19: number;
  operandoC1: number;
  operandoC2: number;
  operandoC3: number;
  operandoC4: number;
  operandoC5: number;
  operandoC6: number;
  operandoC7: number;
  operandoC8: number;
  operandoC9: number;
  operandoC10: number;
  operandoC11: number;
  operandoC12: number;
  operandoC13: number;
  operandoC14: number;
  operandoC15: number;
  operandoC16: number;
  operandoC17: number;
  operandoC18: number;
  operandoC19: number;
  resultadoA1: number;
  resultadoA2: number;
  resultadoA3: number;
  resultadoA4: number;
  resultadoA5: number;
  resultadoA6: number;
  resultadoA7: number;
  resultadoA8: number;
  resultadoA9: number;
  resultadoA10: number;
  resultadoA11: number;
  resultadoA12: number;
  resultadoA13: number;
  resultadoA14: number;
  resultadoA15: number;
  resultadoA16: number;
  resultadoA17: number;
  resultadoA18: number;
  resultadoA19: number;
  resultadoB1: number;
  resultadoB2: number;
  resultadoB3: number;
  resultadoB4: number;
  resultadoB5: number;
  resultadoB6: number;
  resultadoB7: number;


  onindiMensual():void{
    this.resultadoA1 = this.operandoA1 / this.operandoB1;
    this.resultadoA2 = this.operandoA2 / this.operandoB2;
    this.resultadoA3 = this.operandoA3 / this.operandoB3;
    this.resultadoA4 = this.operandoA4 / this.operandoB4;
    this.resultadoA5 = this.operandoA5 / this.operandoB5;
    this.resultadoA6 = this.operandoA6 / this.operandoB6;
    this.resultadoA7 = this.operandoA6 / this.operandoB7;
    this.resultadoA8 = this.operandoA6 / this.operandoB8;
    this.resultadoA9 = this.operandoA6 / this.operandoB9;
    this.resultadoA10 = this.operandoA6 / this.operandoB10;
    this.resultadoA11 = this.operandoA6 / this.operandoB11;
    this.resultadoA12 = this.operandoA6 / this.operandoB12;
    this.resultadoA13 = this.operandoA6 / this.operandoB13;
    this.resultadoA14 = this.operandoA6 / this.operandoB14;
    this.resultadoA15 = this.operandoA6 / this.operandoB15;
    this.resultadoA16 = this.operandoA6 / this.operandoB16;
    this.resultadoA17 = this.operandoA6 / this.operandoB17;
    this.resultadoA18 = this.operandoA6 / this.operandoB18;
    this.resultadoA19 = this.operandoA6 / this.operandoB19;
    this.resultadoB1 = (this.resultadoA1 + this.resultadoA2 + this.resultadoA3 + this.resultadoA4 + this.resultadoA5 + this.resultadoA6 + this.resultadoA7 + this.resultadoA8 + this.resultadoA9 + this.resultadoA10 + this.resultadoA11 + this.resultadoA12) / 12;
    this.resultadoB2 = (this.resultadoA2 + this.resultadoA3 + this.resultadoA4 + this.resultadoA5 + this.resultadoA6 + this.resultadoA7 + this.resultadoA8 + this.resultadoA9 + this.resultadoA10 + this.resultadoA11 + this.resultadoA12 + this.resultadoA13) / 12;
    this.resultadoB3 = (this.resultadoA3 + this.resultadoA4 + this.resultadoA5 + this.resultadoA6 + this.resultadoA7 + this.resultadoA8 + this.resultadoA9 + this.resultadoA10 + this.resultadoA11 + this.resultadoA12 + this.resultadoA13 + this.resultadoA14) / 12;
    this.resultadoB4 = (this.resultadoA4 + this.resultadoA5 + this.resultadoA6 + this.resultadoA7 + this.resultadoA8 + this.resultadoA9 + this.resultadoA10 + this.resultadoA11 + this.resultadoA12 + this.resultadoA13 + this.resultadoA14 + this.resultadoA15) / 12;
    this.resultadoB5 = (this.resultadoA5 + this.resultadoA6 + this.resultadoA7 + this.resultadoA8 + this.resultadoA9 + this.resultadoA10 + this.resultadoA11 + this.resultadoA12 + this.resultadoA13 + this.resultadoA14 + this.resultadoA15 + this.resultadoA16) / 12;
    this.resultadoB6 = (this.resultadoA6 + this.resultadoA7 + this.resultadoA8 + this.resultadoA9 + this.resultadoA10 + this.resultadoA11 + this.resultadoA12 + this.resultadoA13 + this.resultadoA14 + this.resultadoA15 + this.resultadoA16 + this.resultadoA17 ) / 12;
    this.resultadoB7 = (this.resultadoA7 + this.resultadoA8 + this.resultadoA9 + this.resultadoA10 + this.resultadoA11 + this.resultadoA12 + this.resultadoA13 + this.resultadoA14 + this.resultadoA15 + this.resultadoA16 + this.resultadoA17+ this.resultadoA18 ) / 12;
  }

  constructor() { }

  ngOnInit() {
  }

}
