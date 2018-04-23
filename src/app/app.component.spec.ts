
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


import { AlertComponent } from './ui/alert/alert.component';
import { MyAppComponent } from './my-app/my-app.component';
import { WetInputTextComponent } from './ui/wet-input-text/wet-input-text.component';
import { WetRadioButtonsComponent } from './ui/wet-radio-buttons/wet-radio-buttons.component';
import { CardComponent } from './ui/card/card.component';
import { NameComponent } from './ui/name/name.component'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({    
      declarations: [
        AppComponent,
        AlertComponent,
        MyAppComponent,
        WetInputTextComponent,
        WetRadioButtonsComponent,
        CardComponent,
        NameComponent
      ],
      imports: [FormsModule]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});
