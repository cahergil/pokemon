import { Observable, of } from 'rxjs';
import { Page } from 'src/app/models/page';
export class ApiServiceMock {
  page: Page = {
    count: 100,
    next: 'next',
    previous: null,
    results: [{url: 'url', name: 'name'}]
  }
  details = {
    abilities: [],
    id: 2,
    height: 10,
    types: []
  }
  getList():Observable<Page> {
     return of(this.page)
  }

  getDetails(): Observable<any> {
    return of(this.details)
  }
}
