import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../service';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  private numero1: string;
  private numero2: string;
  private resultado: number;
  private operacao: string;

  constructor(private calculadoraService: CalculadoraService) { }

  ngOnInit(): void {
    this.limpar();
  }

  /**
   * Inicializa a calculado todos os operadores e operandos para os valores padrão
   *
   * @returns void
   */
  limpar(): void {
    this.numero1 = '0';
    this.numero2 = null;
    this.resultado = null;
    this.operacao = null;
  }

  limparAtual(): void {
    this.numero2 === null ? this.numero1 = '0' : this.numero2 = null;
  }

  corrigir(): void {
    if (this.numero2 === null) {
      this.numero1 = this.numero1.slice(0, -1);
    } else {
      this.numero2 = this.numero2.slice(0, -1);
    }
  }

  /**
   * Adiciona o numero selecionado para ser cálculado posteriormente
   *
   * @param numero string
   * @returns void
   */
  adicionaNumero(numero: string): void {
    if (this.operacao === null) {
      this.numero1 = this.concatenanumero(this.numero1, numero);
    } else {
      this.numero2 = this.concatenanumero(this.numero2, numero);
    }
  }

  /**
   * Retorn o calor concatenado, trata o separador decimal.
   * @param numAtual string
   * @param numConcat string
   * @returns string
   */
  concatenanumero(numAtual: string, numConcat: string): string {
    // caso contenha apenas '0' ou null, reinicia o valor
    if (numAtual === '0' || numAtual === null) numAtual = '';

    // caso o primeiro digito seja '.', concatena '0' antes do ponto
    if (numConcat === '.' && numAtual === '') return '0.';

    // caso seja digitado '.' e já contenha um ponto(.), apenas retorna
    if (numConcat === '.' && numAtual.indexOf('.') > -1) return numAtual;

    return numAtual + numConcat;
  }

  /**
   * Define a operação a ser executada.
   * Caso existam dois parametros e uma operação na memória,
   * executa a operação anterior antes de definir a nova operação.
   * Caso exista apenas um parametro e uma operação, troca a operação para a atual
   *
   * @param operacao string, aceita como valores os simbolos + , -, /, *
   * @returns
   */
  definirOperacao(operacao: string): void {
    // caso não exista operação definida apenas define a operação
    if (this.operacao === null) {
      this.operacao = operacao;
      return
    }

    // caso exista operacao e o segundo operando definidos efetua o calculo
    if (this.numero2 !== null) {
      this.resultado = this.calculadoraService.calcular(
        parseFloat(this.numero1),
        parseFloat(this.numero2),
        this.operacao);
      this.operacao = operacao;
      this.numero1 = this.resultado.toString();
      this.numero2 = null;
      this.resultado = null;
    }

    // caso exista uma operação mas não exista o segundo operando a operação será substituida
    if (this.numero2 === null && this.operacao !== null) {
      this.operacao = operacao;
      return
    }
  }

  /**
   * Efetua o calculo de uma operação
   *
   * @returns viod
   */
  calcular(): void {
    if (this.numero2 === null) return;

    this.resultado = this.calculadoraService.calcular(
      parseFloat(this.numero1),
      parseFloat(this.numero2),
      this.operacao);
  }

  /**
   * Retorna o valor a ser exibido na tela da calculadora.
   *
   * @returns string
   */
  get display(): string[] {
    if (this.resultado !== null) return [
      this.resultado.toString(),
      `${this.numero1} ${this.operacao} ${this.numero2}`
    ];

    if (this.numero2 !== null) return [this.numero2, `${this.numero1} ${this.operacao}`];

    if (this.operacao !== null) return ['', `${this.numero1} ${this.operacao}`];

    return [this.numero1, '']
  }
}
