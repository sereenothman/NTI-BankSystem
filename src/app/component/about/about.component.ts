import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  type2 :string= "password"

  clk(){
    if( this.type2 =="password")  this.type2 ="text"
    else this.type2="password"
  }
}
