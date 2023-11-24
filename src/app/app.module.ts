import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from '../store/counter/counter.reducer';
import { AppComponent } from './app.component';
import { MyCounterComponent } from '../components/my-counter/my-counter.component';

@NgModule({
  imports: [BrowserModule,StoreModule.forRoot({ count: counterReducer })],
  declarations: [AppComponent, MyCounterComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/