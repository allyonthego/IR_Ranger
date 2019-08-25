import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogontextComponent } from './logontext.component';

describe('LogontextComponent', () => {
  let component: LogontextComponent;
  let fixture: ComponentFixture<LogontextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogontextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogontextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
