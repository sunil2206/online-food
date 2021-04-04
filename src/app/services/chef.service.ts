import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Position } from '../model/postiion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ChefService {
  url = 'https://api.dev.chefed.co/chefed/api/v1/cook/filter';
  body = {

  };
  constructor(private httpClient: HttpClient) { }

  getChefList(area: Position): Observable<any>{
    return this.httpClient.post(this.url, {
      "location":{
          "latitude": area.latitude.toString(),
          "longitude": area.lognitude.toString()
      }
  });
  }
}
