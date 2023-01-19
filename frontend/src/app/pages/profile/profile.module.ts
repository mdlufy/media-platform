import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TuiLinkModule } from '@taiga-ui/core';
import { TuiBreadcrumbsModule } from '@taiga-ui/kit';
import { ProfileEffects } from 'src/app/+state/profile/profile.effects';
import {
    profileFeatureKey,
    profileReducer,
} from './../../+state/profile/profile.reducer';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';

const EFFECTS_LIST = [ProfileEffects];

@NgModule({
    declarations: [ProfileComponent],
    imports: [
        CommonModule,
        ProfileRoutingModule,
        TuiBreadcrumbsModule,
        TuiLinkModule,
        StoreModule.forFeature(profileFeatureKey, profileReducer),
        EffectsModule.forFeature(EFFECTS_LIST),
    ],
})
export class ProfileModule {}
