import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from '../models/page';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url: string = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=151';
  detailsUrl: string = 'https://pokeapi.co/api/v2/pokemon/'
  constructor(private httpClient: HttpClient) {}

  getList():Observable<Page> {
    return this.httpClient.get<Page>(this.url);
  }
  getDetails(name: string):Observable<any> {
    return this.httpClient.get(this.detailsUrl + name)
  }
}
