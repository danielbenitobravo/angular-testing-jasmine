import { Component } from '@angular/core';
import { PokemonService } from '../../../services/pokemon.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PokemonRepsonse } from '../../../shared/models/pokemon.model';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss',
})
export class PokemonListComponent {
  /* Data */
  pokemonList: any[] = [];

  /* Form */
  filtersForm = new FormGroup({
    resultsNumber: new FormControl(151),
    startingPokemon: new FormControl(0),
  });

  constructor(private _pokemonService: PokemonService) {
    this._getPokemon();
  }

  public filterPokemon(): void {
    this._getPokemon();
  }

  public resetFilters(): void {
    this.filtersForm.get('resultsNumber')?.setValue(151);
    this.filtersForm.get('startingPokemon')?.setValue(0);
  }

  private _getPokemon(): void {
    const resultsNumber = this.filtersForm.get('resultsNumber')?.value ?? 151;
    const startingPokemon = this.filtersForm.get('startingPokemon')?.value ?? 0;
    this._pokemonService
      .getPokemon(resultsNumber, startingPokemon)
      .subscribe((res: PokemonRepsonse) => {
        this.pokemonList = res.results;
        console.log('pokemonList: ', this.pokemonList);
      });
  }
}
