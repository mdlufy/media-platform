import {DemoNgZorroAntdModule} from './demo.module';
import {NgModule} from '@angular/core';
import {LayoutComponent} from '../layout/layout.component';

import {PagesRoutingModule} from './pages-routing.module';
import {VideosComponent} from './components/videos/videos.component';
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [PagesRoutingModule, DemoNgZorroAntdModule, CommonModule],
    declarations: [LayoutComponent, VideosComponent],
    exports: [],
})
export class PagesModule {}
