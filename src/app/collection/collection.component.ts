import { Component, OnInit } from '@angular/core';
import{ CollectableService } from '../shared/collectable.service';
import {Collectable} from '../shared/collectable.model'
@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
collectedItems: Collectable[] = [];

onRemoveCollection(item: Collectable){
    this.CS.removeCollection(item);
}

  constructor(private CS: CollectableService) { }

  ngOnInit() {
      this.collectedItems = this.CS.getCollection();
  }

}
