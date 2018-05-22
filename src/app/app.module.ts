import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { LumiereComponent } from './lumiere/lumiere.component';
import { CONST_ROUTING } from './app.routing'; 
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DataService } from './services/data.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TemperatureComponent,
    LumiereComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    CONST_ROUTING
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
