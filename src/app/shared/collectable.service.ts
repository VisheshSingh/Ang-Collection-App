import { Injectable } from '@angular/core';
import {Collectable} from './collectable.model';

@Injectable()
export class CollectableService {
    private collectables : Collectable[] = [
        {description: 'A beginner\'s guide to jQuery', type: 'Book'},
        {description: 'ReactJS: Make the BEST SPAs', type: 'Magazine'},
        {description: 'a to z of JavaScript', type: 'Article'},
        {description: 'Intermediate level: HTML/CSS', type: 'Periodical'}
    ];

    private collection: Collectable[] = [];

    getCollectables(){
        return this.collectables;
    }

    getCollection(){
        return this.collection;
    }

    addCollection(item: Collectable){
        if(this.collection.indexOf(item) !== -1){
            return;
        }
        this.collection.push(item);
    }

    removeCollection(item: Collectable){
        this.collection.splice(this.collection.indexOf(item), 1);
    }

  constructor() { }


}
