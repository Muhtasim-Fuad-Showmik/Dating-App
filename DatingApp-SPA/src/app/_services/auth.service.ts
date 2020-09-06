import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

// As this is not a component it has to be specified as an injectable separately.
@Injectable({
  // The root here refers to the app.module.
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://localhost:5000/api/auth/';

constructor(private http: HttpClient) { }

login(model: any) {
  return this.http.post(this.baseUrl + 'login', model)
    .pipe(
      map((response: any) => {
        const user = response;
        if(user) {
          localStorage.setItem('token', user.token);
        }
      })
    );
}

register(model: any) {
  return this.http.post(this.baseUrl + 'register', model);
}

}
