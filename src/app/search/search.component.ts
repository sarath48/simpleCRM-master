import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
   color='';
   priceTo=0;
   priceFrom=0;
   size ='M';
   isDirty =true;

  constructor(public activatedRoute:ActivatedRoute) { 
    this.activatedRoute.queryParams.subscribe(params => {
      
      this.color=params.color;
      this.priceFrom=params.priceFrom;
      this.priceTo=params.priceTo;
      this.size=params.size;
    });
  }

  ngOnInit(): void {
  }

}
