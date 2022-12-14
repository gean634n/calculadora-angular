import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  // Define as constantes utilizadas para identificar as operações de cálculo
  static readonly SOMA: string = '+';
  static readonly SUBTRAÇÃO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';

  constructor() { }

  // Método que faz o calculo das operações matemáticas
  calcular(num1: number, num2: number, operacao: string): number {
    let result: number; // armazena o resultado da operação

    switch (operacao) {
      case CalculadoraService.SOMA:
        result = num1 + num2;
        break;
      case CalculadoraService.SUBTRAÇÃO:
        result = num1 - num2;
        break;
      case CalculadoraService.DIVISAO:
        result = num1 / num2;
        break;
      case CalculadoraService.MULTIPLICACAO:
        result = num1 * num2;
        break;
      default:
        result = 0;
        break;
    }

    return result;
  }
}
