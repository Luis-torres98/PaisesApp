import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
	selector: 'app-por-region',
	templateUrl: './por-region.component.html',
	styles: [
		`
			button {
				margin-right: 5px;
			}
		`,
	],
})
export class PorRegionComponent implements OnInit {
	regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
	regionActiva: string = '';
	paises: Country[] = [];

	constructor(private service: PaisService) {}

	ngOnInit(): void {}

	getClaseCSS(region: string): string {
		return region === this.regionActiva ? 'btn btn-primary ' : 'btn btn-outline-primary';
	}

	ActivarRegion(region: string) {
		if (region === this.regionActiva) return
		
		this.regionActiva = region;
		this.paises = [];
		
		this.service.porRegion(region).subscribe(resp => {
			this.paises = resp;
		});
	}
}
