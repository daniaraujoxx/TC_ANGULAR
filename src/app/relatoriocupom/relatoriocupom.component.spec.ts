import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatoriocupomComponent } from './relatoriocupom.component';

describe('RelatoriocupomComponent', () => {
  let component: RelatoriocupomComponent;
  let fixture: ComponentFixture<RelatoriocupomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatoriocupomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatoriocupomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
