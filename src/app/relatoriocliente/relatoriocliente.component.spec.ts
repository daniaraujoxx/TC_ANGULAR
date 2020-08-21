import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioclienteComponent } from './relatoriocliente.component';

describe('RelatorioclienteComponent', () => {
  let component: RelatorioclienteComponent;
  let fixture: ComponentFixture<RelatorioclienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatorioclienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatorioclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
