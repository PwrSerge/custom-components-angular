import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WetRadioButtonsComponent } from './wet-radio-buttons.component';

describe('WetRadioButtonsComponent', () => {
  let component: WetRadioButtonsComponent;
  let fixture: ComponentFixture<WetRadioButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WetRadioButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WetRadioButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
