import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertacupomComponent } from './ofertacupom.component';

describe('OfertacupomComponent', () => {
  let component: OfertacupomComponent;
  let fixture: ComponentFixture<OfertacupomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertacupomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertacupomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
