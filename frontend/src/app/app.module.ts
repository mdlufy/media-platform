import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { httpInterceptorProviders } from './http-interceptors/index';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoComponent } from './components/video/video.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { VideosListComponent } from './pages/videos-list/videos-list.component';

@NgModule({
    declarations: [
        AppComponent,
        VideosListComponent,
        VideoComponent,
        LayoutComponent,
        PageNotFoundComponent,
        UserProfileComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [httpInterceptorProviders],
    bootstrap: [AppComponent],
})
export class AppModule {}
