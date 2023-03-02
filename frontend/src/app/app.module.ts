import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TuiPreviewModule } from '@taiga-ui/addon-preview';
import { TuiAlertModule, TuiDialogModule, TuiRootModule } from '@taiga-ui/core';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './pages/auth/auth.module';
import { JwtInterceptor } from './jwt.interceptor';
import { SessionStorageService } from './session-storage.service';

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
    providers: [
        SessionStorageService,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
