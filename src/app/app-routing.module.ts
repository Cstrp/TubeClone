import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './core/guards/auth.guard';
import {PageNotFoundComponent} from './core/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./authentication/module/authentication.module').then((i) => i.AuthenticationModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./youtube/module/youtube.module').then((i) => i.YoutubeModule),
    canActivate: [AuthGuard],
    pathMatch: 'full',
  },
  // {
  //   path: 'home',
  //   children: [{path: 'home/detail/:id', component: DetailsComponent}],
  //   canActivate: [AuthGuard],
  // },
  {
    path: 'home/admin',
    loadChildren: () => import('./admin/module/admin.module').then((i) => i.AdminModule),
    canActivate: [AuthGuard],
    pathMatch: 'full',
  },
  {
    path: 'home/result',
    loadChildren: () => import('./search-result/module/search-result.module').then((i) => i.SearchResultModule),
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
