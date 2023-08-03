import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {PageNotFoundComponent} from '../../core/components/page-not-found/page-not-found.component';
import {AuthGuard} from '../../core/guards/auth.guard';
import {SearchResultPageComponent} from '../components/search-result-page/search-result-page.component';
import {SearchResultListComponent} from '../components/search-result-list/search-result-list.component';
import {SearchResultWrapperComponent} from '../components/search-result-wrapper/search-result-wrapper.component';
import {ColorOfPublishedDateDirective} from '../../core/directives/color-of-published-date.directive';
import {FilterByTitlePipe} from '../../core/pipe/filter-by-title.pipe';
import {SearchResultDetailsComponent} from '../components/search-result-details/search-result-details.component';

@NgModule({
  declarations: [
    SearchResultPageComponent,
    SearchResultListComponent,
    SearchResultWrapperComponent,
    SearchResultDetailsComponent,
    ColorOfPublishedDateDirective,
    FilterByTitlePipe,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: SearchResultPageComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'result/:id',
        component: SearchResultDetailsComponent,
        pathMatch: 'full',
      },
      {
        path: 'result/error',
        component: PageNotFoundComponent,
        pathMatch: 'full',
      },
    ]),
  ],
  exports: [RouterModule],
})
export class SearchResultModule {}
