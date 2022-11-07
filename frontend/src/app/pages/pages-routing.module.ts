import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo: 'pages', pathMatch: 'prefix'},
    // {
    //     path: 'videos',
    //     component: VideosComponent,
    //     data: {
    //         header: {
    //             title: 'Плейлисты видео',
    //             subtitle: 'различные видео',
    //         },
    //     },
    //     resolve: {streams: VideoService},
    //     children: [
    //         {
    //             path: 'novideo',
    //             component: NoContentComponent,
    //             data: {header: {title: 'Смотрим видео...'}},
    //         },
    //         {
    //             path: ':videoSource/:videoId',
    //             component: ComposeVideoPlayerComponent,
    //             data: {header: {title: 'Смотрим видео...'}},
    //         },
    //     ],
    // },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule {}
