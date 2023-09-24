import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightFilterPipe } from './highlight-filter.pipe';
import { SearchListComponent } from './search-list/search-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightFilterPipe,
    SearchListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
