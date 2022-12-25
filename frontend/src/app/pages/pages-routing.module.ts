import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'courses', pathMatch: 'full' },
    {
        path: 'courses',
        loadChildren: () =>
            import('./courses/courses.module').then((m) => m.CoursesModule),
    },
    {
        path: 'profile',
        loadChildren: () =>
            import('./profile/profile.module').then((m) => m.ProfileModule),
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule {}
