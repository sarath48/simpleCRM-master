import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simpleCRM';
  superPower:String="Hulk";
  iamhappy ="iamverysad";
  percentExample =0.454;
  dateExample=Date.now();
  success:boolean=true;
  uName ="";
   printHello(){
     console.log("Hi there i am santhosh");
   }

  contacts=[
    {
      "firstName":"Sarath",
      "LastName":"Santhosh",
      "Age":24
    },
    {
      "firstName":"Sarath1",
      "LastName":"Santhosh2",
      "Age":25
    },
    {
      "firstName":"Sarath2",
      "LastName":"Santhosh2",
      "Age":26
    }
  ]
}
