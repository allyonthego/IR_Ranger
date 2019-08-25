import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardelementsComponent } from './dashboardelements.component';

describe('DashboardelementsComponent', () => {
  let component: DashboardelementsComponent;
  let fixture: ComponentFixture<DashboardelementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardelementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardelementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
