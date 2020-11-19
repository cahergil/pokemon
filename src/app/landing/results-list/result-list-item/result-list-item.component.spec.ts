import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { ResultListItemComponent } from './result-list-item.component';

fdescribe('ResultListItemComponent', () => {
  let component: ResultListItemComponent;
  let fixture: ComponentFixture<ResultListItemComponent>;
  let router: Router;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultListItemComponent ],
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(ResultListItemComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    component.result = {url: 'url', name: 'name'}
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('[gotoDetails()] should go to details view', ()=> {
    spyOn(router, 'navigate');
    component.result = { url: 'url', name: 'picachu' };
    component.gotoDetails();
    expect(router.navigate).toHaveBeenCalledWith(['/pokemon' , 'picachu'])
  });
});
