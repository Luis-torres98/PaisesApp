import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
	providedIn: 'root',
})
export class PaisService {
	private apiUrl: string = 'https://restcountries.eu/rest/v2';

	get HttpParams() {
		return new HttpParams().set('fields', 'name;capital;alpha2Code;population;flag');
	}
	constructor(private Http: HttpClient) {}

	buscarPais(termino: string): Observable<Country[]> {
		const url = `${this.apiUrl}/name/${termino}`;

		return this.Http.get<Country[]>(url, { params: this.HttpParams });
	}

	buscarCapital(termino: string): Observable<Country[]> {
		const url = `${this.apiUrl}/capital/${termino}`;

		return this.Http.get<Country[]>(url, { params: this.HttpParams });
	}

	getPaisPorAlpha(id: string): Observable<Country> {
		const url = `${this.apiUrl}/alpha/${id}`;

		return this.Http.get<Country>(url);
	}

	porRegion(region: string): Observable<Country[]> {
		const url = `${this.apiUrl}/region/${region}`;

		return this.Http.get<Country[]>(url, { params: this.HttpParams });
	}
}
