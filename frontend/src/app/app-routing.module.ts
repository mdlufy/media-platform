import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { VideosListComponent } from './videos-list/videos-list.component';

const routes: Routes = [
    { path: 'layout', component: LayoutComponent },
    { path: 'login', component: LoginComponent },
    { path: 'videos', component: VideosListComponent },
    { path: '', redirectTo: '/layout', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
