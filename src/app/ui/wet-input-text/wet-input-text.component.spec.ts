import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WetInputTextComponent } from './wet-input-text.component';
import { FormsModule } from '@angular/forms';


describe('WetInputTextComponent', () => {
  let component: WetInputTextComponent;
  let fixture: ComponentFixture<WetInputTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ WetInputTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WetInputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
