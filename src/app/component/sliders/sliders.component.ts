import { Component } from '@angular/core';

@Component({
  selector: 'app-sliders',
  templateUrl: './sliders.component.html',
  styleUrls: ['./sliders.component.css']
})
export class SlidersComponent {
  inputdata:string="angular app"
  modell:any

  handleinput(ele:any){
    console.log(this.inputdata=ele.value);
  }
  handledolar(ele:any){
    console.log(ele.target.value);
  }
}
