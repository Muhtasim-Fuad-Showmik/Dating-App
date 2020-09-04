import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// For using http get requests to retrieve values from the server
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';

@NgModule({
  declarations: [	
    AppComponent,
      ValueComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
