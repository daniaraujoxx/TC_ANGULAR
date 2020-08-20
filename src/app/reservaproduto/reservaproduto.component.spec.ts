import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaprodutoComponent } from './reservaproduto.component';

describe('ReservaprodutoComponent', () => {
  let component: ReservaprodutoComponent;
  let fixture: ComponentFixture<ReservaprodutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservaprodutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaprodutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
