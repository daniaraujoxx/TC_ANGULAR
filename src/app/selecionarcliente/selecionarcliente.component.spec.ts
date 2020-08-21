import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecionarclienteComponent } from './selecionarcliente.component';

describe('SelecionarclienteComponent', () => {
  let component: SelecionarclienteComponent;
  let fixture: ComponentFixture<SelecionarclienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelecionarclienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecionarclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
