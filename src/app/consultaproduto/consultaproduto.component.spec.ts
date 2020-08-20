import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaprodutoComponent } from './consultaproduto.component';

describe('ConsultaprodutoComponent', () => {
  let component: ConsultaprodutoComponent;
  let fixture: ComponentFixture<ConsultaprodutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaprodutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaprodutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
