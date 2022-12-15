import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CalculadoraComponent } from './calculadora.component';

describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculadoraComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve garantir que 3 + 2 = 5 validando a operação de soma', () => {
    let
      btn3 = fixture.debugElement.query(By.css('#btn3')),
      btn2 = fixture.debugElement.query(By.css('#btn2')),
      btnAdd = fixture.debugElement.query(By.css('#add-btn')),
      equal = fixture.debugElement.query(By.css('#equal-btn')),
      display = fixture.debugElement.query(By.css('#current-operation'));

    btn3.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnAdd.triggerEventHandler('click', null);
    fixture.detectChanges();

    btn2.triggerEventHandler('click', null);
    fixture.detectChanges();

    equal.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(display.nativeElement.innerText).toEqual('5');
  });

  it('deve garantir que 3 - 2 = 1 validando a operação de subtração', () => {
    let
      btn3 = fixture.debugElement.query(By.css('#btn3')),
      btn2 = fixture.debugElement.query(By.css('#btn2')),
      btnSub = fixture.debugElement.query(By.css('#sub-btn')),
      equal = fixture.debugElement.query(By.css('#equal-btn')),
      display = fixture.debugElement.query(By.css('#current-operation'));

    btn3.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnSub.triggerEventHandler('click', null);
    fixture.detectChanges();

    btn2.triggerEventHandler('click', null);
    fixture.detectChanges();

    equal.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(display.nativeElement.innerText).toEqual('1');
  });

  it('deve garantir que 3 / 2 = 1.5 validando a operação de divisão', () => {
    let
      btn3 = fixture.debugElement.query(By.css('#btn3')),
      btn2 = fixture.debugElement.query(By.css('#btn2')),
      btnDiv = fixture.debugElement.query(By.css('#div-btn')),
      equal = fixture.debugElement.query(By.css('#equal-btn')),
      display = fixture.debugElement.query(By.css('#current-operation'));

    btn3.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnDiv.triggerEventHandler('click', null);
    fixture.detectChanges();

    btn2.triggerEventHandler('click', null);
    fixture.detectChanges();

    equal.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(display.nativeElement.innerText).toEqual('1.5');
  });

  it('deve garantir que 3 * 2 = 6 validando a operação de multiplicação', () => {
    let
      btn3 = fixture.debugElement.query(By.css('#btn3')),
      btn2 = fixture.debugElement.query(By.css('#btn2')),
      btnMult = fixture.debugElement.query(By.css('#mult-btn')),
      equal = fixture.debugElement.query(By.css('#equal-btn')),
      display = fixture.debugElement.query(By.css('#current-operation'));

    btn3.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnMult.triggerEventHandler('click', null);
    fixture.detectChanges();

    btn2.triggerEventHandler('click', null);
    fixture.detectChanges();

    equal.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(display.nativeElement.innerText).toEqual('6');
  });

  it('deve garantir que é possivel trocar o operador', () => {
    let
      btn3 = fixture.debugElement.query(By.css('#btn3')),
      btn2 = fixture.debugElement.query(By.css('#btn2')),
      btnMult = fixture.debugElement.query(By.css('#mult-btn')),
      btnDiv = fixture.debugElement.query(By.css('#div-btn')),
      equal = fixture.debugElement.query(By.css('#equal-btn')),
      display = fixture.debugElement.query(By.css('#current-operation'));

    btn3.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnMult.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnDiv.triggerEventHandler('click', null);
    fixture.detectChanges();

    btn2.triggerEventHandler('click', null);
    fixture.detectChanges();

    equal.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(display.nativeElement.innerText).toEqual('1.5');
  });

  it('deve garantir que é possivel limpar a todos os dados', () => {
    let
      btn3 = fixture.debugElement.query(By.css('#btn3')),
      btnMult = fixture.debugElement.query(By.css('#mult-btn')),
      btnClearAll = fixture.debugElement.query(By.css('#c-btn')),
      currentDisplay = fixture.debugElement.query(By.css('#current-operation')),
      previousDisplay = fixture.debugElement.query(By.css('#previous-operation'));

    btn3.triggerEventHandler('click', null);
    fixture.detectChanges();

    btn3.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnMult.triggerEventHandler('click', null);
    fixture.detectChanges();

    btn3.triggerEventHandler('click', null);
    fixture.detectChanges();

    btn3.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnClearAll.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(currentDisplay.nativeElement.innerText).toEqual('0');
    expect(previousDisplay.nativeElement.innerText).toEqual('');
  });

  it('deve garantir que é possivel limpar o dado atual', () => {
    let
      btn3 = fixture.debugElement.query(By.css('#btn3')),
      btnMult = fixture.debugElement.query(By.css('#mult-btn')),
      btnClear = fixture.debugElement.query(By.css('#ce-btn')),
      currentDisplay = fixture.debugElement.query(By.css('#current-operation')),
      previousDisplay = fixture.debugElement.query(By.css('#previous-operation'));

    btn3.triggerEventHandler('click', null);
    fixture.detectChanges();

    btn3.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnMult.triggerEventHandler('click', null);
    fixture.detectChanges();

    btn3.triggerEventHandler('click', null);
    fixture.detectChanges();

    btn3.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnClear.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(currentDisplay.nativeElement.innerText).toEqual('');
    expect(previousDisplay.nativeElement.innerText).toEqual('33 *');
  });

  it('deve garantir que é possivel deletar um digito', () => {
    let
      btn3 = fixture.debugElement.query(By.css('#btn3')),
      btnDel = fixture.debugElement.query(By.css('#del-btn')),
      currentDisplay = fixture.debugElement.query(By.css('#current-operation'));

    btn3.triggerEventHandler('click', null);
    fixture.detectChanges();

    btn3.triggerEventHandler('click', null);
    fixture.detectChanges();

    btn3.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnDel.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(currentDisplay.nativeElement.innerText).toEqual('33');
  });

  it('deve garantir que os botões de operação executão a operação caso haje dados disponiveis', () => {
    let
      btn3 = fixture.debugElement.query(By.css('#btn3')),
      btn2 = fixture.debugElement.query(By.css('#btn2')),
      btnDiv = fixture.debugElement.query(By.css('#div-btn')),
      display = fixture.debugElement.query(By.css('#previous-operation'));

    btn3.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnDiv.triggerEventHandler('click', null);
    fixture.detectChanges();

    btn2.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnDiv.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(display.nativeElement.innerText).toEqual('1.5 /');
  });
});
