import { httpInterceptorProviders } from './http-interceptors/index';
import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import {
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    TUI_SANITIZER,
} from '@taiga-ui/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { VideosListComponent } from './videos-list/videos-list.component';
import { VideoComponent } from './video/video.component';
import { LayoutComponent } from './layout/layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
    declarations: [
        AppComponent,
        VideosListComponent,
        VideoComponent,
        LoginComponent,
        LayoutComponent,
        PageNotFoundComponent,
        RegistrationComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        TuiRootModule,
        TuiDialogModule,
        TuiAlertModule,
        FormsModule,
    ],
    providers: [
        { provide: TUI_SANITIZER, useClass: NgDompurifySanitizer },
        httpInterceptorProviders,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
