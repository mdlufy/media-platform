import { UserProfileComponent } from './user-profile/user-profile.component';
import { VideosListComponent } from './videos-list/videos-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'videos', component: VideosListComponent },
    { path: 'profile', component: UserProfileComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule {}
