import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonListComponent } from './pokemon-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

fdescribe('PokemonListComponent', () => {
  let component: PokemonListComponent;
  let fixture: ComponentFixture<PokemonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonListComponent, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /**
   * TODO: create tests for public funcitons filterPokemon() & resetFilters()
   * ! Services must not do real calls. Mock the data you'll recieve -> /app/shared/mocks/...
   * ! Private functions must not be tested, they'll be "automatically" tested once code passes through
   * ! Keep this describe like "fdescribe" so the other tests won't give an error
   * * Have fun :)
   */
});
