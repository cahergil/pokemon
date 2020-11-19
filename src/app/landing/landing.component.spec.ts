import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiService } from '../api/api.service';
import { ApiServiceMock } from '../testing/mocks/apiServie.mock';

import { LandingComponent } from './landing.component';

fdescribe('LandingComponent', () => {
  let component: LandingComponent;
  let fixture: ComponentFixture<LandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingComponent ],
      providers: [
        {provide: ApiService, useClass: ApiServiceMock}
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingComponent);
    component = fixture.componentInstance;

  });

  it('should create', () => {
    spyOn(component, 'init');
    fixture.detectChanges();
    expect(component).toBeTruthy();
    expect(component.init).toHaveBeenCalled()
  });
  it('[init()] should call the api', async()=> {
    component.state.page = undefined;
    component.init();
    await fixture.whenStable();
    expect(component.state.page).toBeDefined();
    expect(component.state.loader).toBe(false)
  })
});
