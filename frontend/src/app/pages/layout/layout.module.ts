import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TuiButtonModule, TuiModeModule, TuiSvgModule } from '@taiga-ui/core';
import { TuiTabsModule } from '@taiga-ui/kit';
import { LayoutComponent } from './layout.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
    declarations: [LayoutComponent, NavbarComponent],
    imports: [
        CommonModule,
        RouterModule,
        TuiTabsModule,
        TuiButtonModule,
        TuiSvgModule,
        TuiModeModule,
    ],
})
export class LayoutModule {}
