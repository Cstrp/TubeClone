import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminPanelComponent} from '../components/admin-pannel/admin-panel.component';
import {SharedModule} from '../../shared/shared.module';
import {RouterModule} from '@angular/router';
import {AuthGuard} from '../../core/guards/auth.guard';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MaterialModule} from '../../shared/material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [AdminPanelComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: AdminPanelComponent,
        canActivate: [AuthGuard],
      },
    ]),
    MatFormFieldModule,
    MaterialModule,
  ],
  exports: [RouterModule],
})
export class AdminModule {}
