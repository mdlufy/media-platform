import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TuiPreviewModule } from '@taiga-ui/addon-preview';
import { TuiAlertModule, TuiDialogModule, TuiRootModule } from '@taiga-ui/core';
import { httpInterceptorProviders } from './http-interceptors/index';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProfileLoadService } from './+state/profile/profile-load/profile-load.service';
import { ProfileEffects } from './+state/profile/profile.effects';
import * as fromProfile from './+state/profile/profile.reducer';
import { ProfileService } from './pages/profile/profile.service';

export interface GlobalState {
    profile: fromProfile.ProfileState;
}

export const reducers: ActionReducerMap<GlobalState> = {
    profile: fromProfile.reducer,
}

const EFFECTS_LIST = [ProfileEffects];

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production,
            // Register the ServiceWorker as soon as the application is stable
            // or after 30 seconds (whichever comes first).
            registrationStrategy: 'registerWhenStable:30000',
        }),
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot(EFFECTS_LIST),
        TuiRootModule,
        TuiDialogModule,
        TuiAlertModule,
        TuiPreviewModule,
    ],
    providers: [httpInterceptorProviders, ProfileLoadService, ProfileService],
    bootstrap: [AppComponent],
})
export class AppModule {}
