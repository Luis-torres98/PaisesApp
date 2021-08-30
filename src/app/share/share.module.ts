import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';

const LIST = [SidebarComponent];

@NgModule({
	declarations: [LIST],
	exports: [LIST],
	imports: [CommonModule, AppRoutingModule, RouterModule],
})
export class ShareModule {}
