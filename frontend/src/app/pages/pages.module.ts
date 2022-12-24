import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';

import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
    declarations: [LayoutComponent],
    imports: [
        CommonModule,
        PagesRoutingModule,
    ],
})
export class PagesModule {}
