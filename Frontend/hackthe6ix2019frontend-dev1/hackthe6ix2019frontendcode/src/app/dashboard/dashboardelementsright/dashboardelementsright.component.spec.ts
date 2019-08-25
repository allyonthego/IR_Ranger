import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardelementsrightComponent } from './dashboardelementsright.component';

describe('DashboardelementsrightComponent', () => {
  let component: DashboardelementsrightComponent;
  let fixture: ComponentFixture<DashboardelementsrightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardelementsrightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardelementsrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
