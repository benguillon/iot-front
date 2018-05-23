import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';



@Component({
  selector: 'app-lumiere',
  templateUrl: './lumiere.component.html',
  styles: []
})
export class LumiereComponent implements OnInit {
  ledon = "led.on";
  ledoff = "led.off";
  ledState = "Eteinte";

  constructor(private _dataService : DataService) {

  }

  ngOnInit() {
  }

  setState(state){
    this._dataService.setState(state);
    if(state == "led.on"){
      this.ledState = "Allumée";
    } else {
      this.ledState = "Eteinte";
    }
  }
}
