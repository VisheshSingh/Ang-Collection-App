import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {
    collectables = [
        {description: 'A beginner\'s guide to jQuery', type: 'Book'},
        {description: 'ReactJS: Make the BEST SPAs', type: 'Magazine'},
        {description: 'a to z of JavaScript', type: 'Article'},
        {description: 'Intermediate level: HTML/CSS', type: 'Periodical'}
    ];

    onAddCollection(){
        console.log("Test!");
    }

  constructor() { }

  ngOnInit() {
  }

}
