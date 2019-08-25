import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestimageComponent } from './latestimage.component';

describe('LatestimageComponent', () => {
  let component: LatestimageComponent;
  let fixture: ComponentFixture<LatestimageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestimageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
