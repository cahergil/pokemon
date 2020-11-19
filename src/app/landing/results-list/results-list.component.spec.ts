import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsListComponent } from './results-list.component';

fdescribe('ResultsListComponent', () => {
  let component: ResultsListComponent;
  let fixture: ComponentFixture<ResultsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultsListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    spyOn(component, 'init');
    fixture.detectChanges();
    expect(component).toBeTruthy();
    expect(component.init).toHaveBeenCalled();
  });
  it('[init()] should call the api', async () => {
    component.results = [{ name: 'name', url: 'ual' }];
    const expected = [
      {
        name: 'name',
        url:
          'https://img.pokemondb.net/sprites/black-white/anim/normal/name.gif',
      },
    ];
    component.init();
    await fixture.whenStable();
    expect(component.state.results).toEqual(expected);
  });
});
