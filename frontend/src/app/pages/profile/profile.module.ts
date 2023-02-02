import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TuiLinkModule } from '@taiga-ui/core';
import { TuiBreadcrumbsModule } from '@taiga-ui/kit';
import { ProfileLoadService } from 'src/app/+state/profile/profile-load/profile-load.service';
import { ProfileEffects } from 'src/app/+state/profile/profile.effects';
import { profileReducer } from './../../+state/profile/profile.reducer';
import { FEATURE_PROFILE } from './../../+state/profile/profile.selectors';
import { ProfileDataService } from './profile-data.service';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile/profile.component';

const EFFECTS_LIST = [ProfileEffects];

@NgModule({
    declarations: [ProfileComponent],
    imports: [
        CommonModule,
        ProfileRoutingModule,
        TuiBreadcrumbsModule,
        TuiLinkModule,
        StoreModule.forFeature(FEATURE_PROFILE, profileReducer),
        EffectsModule.forFeature(EFFECTS_LIST),
    ],
    providers: [
        ProfileLoadService, 
        ProfileDataService,
    ],
})
export class ProfileModule {}
