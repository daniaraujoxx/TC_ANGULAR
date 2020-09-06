import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroReservaComponent } from './cadastro-reserva.component';

describe('CadastroReservaComponent', () => {
  let component: CadastroReservaComponent;
  let fixture: ComponentFixture<CadastroReservaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroReservaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
