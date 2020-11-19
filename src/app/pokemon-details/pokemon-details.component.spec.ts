import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiService } from '../api/api.service';
import { ApiServiceMock } from '../testing/mocks/apiServie.mock';

import { PokemonDetailsComponent } from './pokemon-details.component';

fdescribe('PokemonDetailsComponent', () => {
  let component: PokemonDetailsComponent;
  let fixture: ComponentFixture<PokemonDetailsComponent>;
  let router: Router;
  let route: ActivatedRoute;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonDetailsComponent],
      imports: [RouterTestingModule],
      providers: [{ provide: ApiService, useClass: ApiServiceMock }],
    }).compileComponents();
  });

  beforeEach(() => {
    router = TestBed.inject(Router);
    route = TestBed.inject(ActivatedRoute);
    fixture = TestBed.createComponent(PokemonDetailsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    spyOn(component, 'init');
    fixture.detectChanges();
    expect(component).toBeTruthy();
    expect(component.init).toHaveBeenCalled();
  });

  it('[init()] call the api and set the stae', async() => {
    component.state.details = undefined;
    component.init();
    await fixture.whenStable();
    expect(component.state.details).toBeDefined()
  });

  it('[goToList()] should go to parent view', () => {
    spyOn(router, 'navigate');
    component.goToList();
    expect(router.navigate).toHaveBeenCalledWith(['/pokemon']);
  });
});
