import { Component, OnInit } from '@angular/core';
import { CollectableService } from '../shared/collectable.service';
import {Collectable} from '../shared/collectable.model';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {
    collectables: Collectable[] = [];

    onAddCollection(item: Collectable){
        this.CS.addCollection(item);
    }

  constructor(private CS: CollectableService ) { }

  ngOnInit() {
      this.collectables = this.CS.getCollectables();
  }

}
