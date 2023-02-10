import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TuiPreviewModule } from '@taiga-ui/addon-preview';
import { TuiAlertModule, TuiDialogModule, TuiRootModule } from '@taiga-ui/core';
import { httpInterceptorProviders } from './http-interceptors/index';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './pages/auth/auth.module';

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
        StoreModule.forRoot({}),
        EffectsModule.forRoot(),
        TuiRootModule,
        TuiDialogModule,
        TuiAlertModule,
        TuiPreviewModule,
        AuthModule,
    ],
    providers: [httpInterceptorProviders],
    bootstrap: [AppComponent],
})
export class AppModule {}
