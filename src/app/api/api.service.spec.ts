import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ApiServiceMock } from '../testing/mocks/apiServie.mock';
fdescribe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;
  let apiModels = new ApiServiceMock();
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('[getList()] shoud get the list', () => {
    const fakePage = apiModels.page;
    service.getList().subscribe(page => {
      expect(page).toBeTruthy();
    })
    const req = httpMock.expectOne('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151');
    expect(req.request.method).toBe('GET');
    req.flush(fakePage)
  });

  it('[getDetails()] shoud get the pokemon details', () => {
    const fakeDetails = apiModels.details;
    service.getDetails('picachu').subscribe((details) => {
      expect(details).toBeTruthy();
    });
    const req = httpMock.expectOne('https://pokeapi.co/api/v2/pokemon/picachu');
    expect(req.request.method).toBe('GET');
    req.flush(fakeDetails);
  });
});
