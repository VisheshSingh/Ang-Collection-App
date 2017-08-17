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

    getCollectables(){
        return this.collectables;
    }

  constructor() { }

}
