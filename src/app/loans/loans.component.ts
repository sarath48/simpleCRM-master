import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.scss']
})
export class LoansComponent implements OnInit {
  
  photoId=0;
  productId=0;
  

  constructor(private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe((params) =>{
      console.log(params);
      const interVal = params;
      this.photoId=interVal.photoId;
      this.productId=interVal.productId;

    });
   }

  ngOnInit(): void {
   

  }

}
