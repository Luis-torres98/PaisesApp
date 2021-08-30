import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PaisTablaComponent } from './components/pais-tabla/pais-tabla.component';
import { PaisInputComponent } from './components/pais-input/pais-input.component';

const LIST = [
	PorCapitalComponent, 
	PorPaisComponent,
	PorRegionComponent,
	VerPaisComponent
];

@NgModule({
	declarations: [LIST, PaisTablaComponent, PaisInputComponent],
	exports : [LIST],
	imports: [
		CommonModule,
		 FormsModule,
		 RouterModule
		],
})
export class PaisModule {}
