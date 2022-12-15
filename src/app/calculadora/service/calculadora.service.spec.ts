import { inject, TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve garantir que 1 + 4 = 5', inject([CalculadoraService], (service: CalculadoraService) => {
    let soma = service.calcular(1, 4, CalculadoraService.SOMA);
    expect(soma).toEqual(5);
  }));

  it('deve garantir que 1 - 5 = -4', inject([CalculadoraService], (service: CalculadoraService) => {
    let subtracao = service.calcular(1, 5, CalculadoraService.SUBTRAÇÃO);
    expect(subtracao).toEqual(-4);
  }));

  it('deve garantir que 10 / 4 = 2.5',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let divisao = service.calcular(10, 4, CalculadoraService.DIVISAO);
      expect(divisao).toEqual(2.5);
    })
  );

  it('deve garantir que 5 * 3 = 15', inject([CalculadoraService], (service: CalculadoraService) => {
    let multiplicacao = service.calcular(5, 3, CalculadoraService.MULTIPLICACAO);
    expect(multiplicacao).toEqual(15);
  }));

  it('deve retornar 0 no caso de operação invalida',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let operacaoInvalida = service.calcular(5, 5, '//');
      expect(operacaoInvalida).toEqual(0);
    })
  );
});
