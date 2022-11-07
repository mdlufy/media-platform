import { DemoNgZorroAntdModule } from './demo.module';
import {NgModule} from '@angular/core';
import { LayoutComponent } from '../layout/layout.component';

import {PagesRoutingModule} from './pages-routing.module';


@NgModule({
    imports: [PagesRoutingModule, DemoNgZorroAntdModule],
    declarations: [LayoutComponent],
    exports: [],
})
export class PagesModule {}
