import { TuiLinkModule } from '@taiga-ui/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TuiBreadcrumbsModule } from '@taiga-ui/kit';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';

@NgModule({
    declarations: [ProfileComponent],
    imports: [CommonModule, ProfileRoutingModule, TuiBreadcrumbsModule, TuiLinkModule],
})
export class ProfileModule {}
