/**
 * Serviço responsavel por executal as operações da calculadora
 *
 * @author Gean C. B. Gonçalves <https://github.com/gean634n>
 * @since 1.0.0
 */

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

  /**
   * Método que calcula uma operação matemética dado dois numeros
   * As operações suportadas são soma, subtração, divisão e multiplicação
   * @param num1 number
   * @param num2 number
   * @param operacao string Operação a ser executada
   * @returns number Resultado da operação
   */
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
    }

    return result;
  }
}
