import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppHttpService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getData(): Observable<any> {
    return this.httpClient.get(`https://ezlearn-heroku.herokuapp.com/v1/api/users`)
      .pipe(
        map((resp: any) => {
          return resp.data.user_name;
        })
      );
  }

}
