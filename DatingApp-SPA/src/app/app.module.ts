import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// For using http get requests to retrieve values from the server
import { HttpClientModule} from '@angular/common/http';
// For using the Forms module to create Angular Forms that has added benefits compared to normal forms.
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [				
    AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
