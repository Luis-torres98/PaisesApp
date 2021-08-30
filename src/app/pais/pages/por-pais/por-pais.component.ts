import { error } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
	selector: 'app-por-pais',
	templateUrl: './por-pais.component.html',
	styles: [
		`
			li {
				cursor: pointer;
			}
		`,
	],
})
export class PorPaisComponent {
	termino: string = '';
	hayError: boolean = false;
	paises: Country[] = [];
	paisesSugeridos: Country[] = [];
	mostrarSugerencias: boolean = false;


	constructor(private PaisService: PaisService) {}

	buscar(termino: string) {
		this.hayError = false;
		this.mostrarSugerencias = false;
		this.termino = termino;

		this.PaisService.buscarPais(termino).subscribe(
			paises => {
				this.paises = paises;
				console.log(this.paises);
			},
			error => {
				this.hayError = true;
				this.paises = [];
			},
		);
	}

	sugerencias(termino: string) {
		this.hayError = false;
		this.termino = termino;
		this.mostrarSugerencias = true;

		this.PaisService.buscarPais(termino).subscribe(
			paises => (this.paisesSugeridos = paises.splice(0, 5)),
			error => {
				this.paisesSugeridos = [];
			},
		);
	}

	buscarSugeridos(termino: string) {
		this.buscar(termino);
	}
}