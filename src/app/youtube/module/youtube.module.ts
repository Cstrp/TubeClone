import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from '../components/home/home.component';
import {CardListComponent} from '../components/card-list/card-list.component';

import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxSpinnerModule} from 'ngx-spinner';
import {AuthGuard} from '../../core/guards/auth.guard';
import {SettingsComponent} from '../../core/components/settings/settings.component';
import {SortByDateBtnComponent} from '../../core/components/settings/sort-by-date-btn/sort-by-date-btn.component';
import {SortByViewBtnComponent} from '../../core/components/settings/sort-by-view-btn/sort-by-view-btn.component';
import {SortInputComponent} from '../../core/components/settings/sort-input/sort-input.component';
import {CardsStatisticsComponent} from '../components/cards-statistics/cards-statistics.component';
import {CardsWrapperComponent} from '../components/cards-wrapper/cards-wrapper.component';
import {ColorOfDateDirective} from '../../core/directives/color-of-date.directive';
import {FilterPipe} from '../../core/pipe/filter.pipe';
import {SortPipe} from '../../core/pipe/sort.pipe';
import {DetailsComponent} from '../components/details/details.component';

@NgModule({
  declarations: [
    HomeComponent,
    CardsWrapperComponent,
    CardListComponent,
    CardsStatisticsComponent,
    DetailsComponent,
    SettingsComponent,
    SortByDateBtnComponent,
    SortByViewBtnComponent,
    SortInputComponent,
    FilterPipe,
    SortPipe,
    ColorOfDateDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'home/:id',
        component: DetailsComponent,
        canActivate: [AuthGuard],
      },
    ]),
  ],
  exports: [RouterModule, SettingsComponent],
})
export class YoutubeModule {}
