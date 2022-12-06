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
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { VideosListComponent } from './pages/videos-list/videos-list.component';
import { VideoComponent } from './components/video/video.component';
import { RegistrationComponent } from './pages/registration/registration.component';

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
