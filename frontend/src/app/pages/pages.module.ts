import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LayoutModule } from './layout/layout.module';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
    declarations: [],
    imports: [CommonModule, PagesRoutingModule, LayoutModule],
})
export class PagesModule {}
