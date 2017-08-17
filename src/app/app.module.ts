import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MarketComponent } from './market/market.component';
import { CollectionComponent } from './collection/collection.component';
import { CollectableService } from './shared/collectable.service';
import { NavComponent } from './nav.component';
import { routing } from './app.routing';
@NgModule({
  declarations: [
    AppComponent,
    MarketComponent,
    CollectionComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [CollectableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
