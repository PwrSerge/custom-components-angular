import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'



import { AppComponent } from './app.component';
import { AlertComponent } from './ui/alert/alert.component';
import { WetInputTextComponent } from './ui/wet-input-text/wet-input-text.component';
import { WetRadioButtonsComponent } from './ui/wet-radio-buttons/wet-radio-buttons.component';
import { CardComponent } from './ui/card/card.component';
import { NameComponent } from './ui/name/name.component';





@NgModule({
  declarations: [
    AppComponent,
    AlertComponent, 
    WetInputTextComponent,
    WetRadioButtonsComponent,
    CardComponent,
    NameComponent
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
