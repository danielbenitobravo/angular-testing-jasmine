import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonRepsonse } from '../shared/models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  baseUrl = 'https://pokeapi.co/api/v2';

  constructor(private _http: HttpClient) { }

  getPokemon(limit: number = 10000, offset: number = 0): Observable<PokemonRepsonse> {
    const url = this.baseUrl + '/pokemon';
    let params = new HttpParams();
    params = params.append('limit', limit);
    params = params.append('offset', offset);
    return this._http.get<PokemonRepsonse>(url, { params });
  }
}
