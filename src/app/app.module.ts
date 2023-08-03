import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './core/components/header/header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {YoutubeModule} from './youtube/module/youtube.module';
import {AuthenticationModule} from './authentication/module/authentication.module';
import {StoreModule} from '@ngrx/store';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LogoComponent} from './core/components/header/logo/logo.component';
import {SettingsButtonComponent} from './core/components/header/settings-button/settings-button.component';
import {LogInfoComponent} from './core/components/header/log-info/log-info.component';
import {SearchInputComponent} from './core/components/header/search-input/search-input.component';
import {AdminModule} from './admin/module/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    SettingsButtonComponent,
    LogInfoComponent,
    SearchInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AuthenticationModule,
    YoutubeModule,
    AdminModule,
    StoreModule.forRoot(
      {},
      {
        runtimeChecks: {
          strictActionImmutability: true,
          strictActionSerializability: true,
          strictActionWithinNgZone: true,
          strictActionTypeUniqueness: true,
          strictStateImmutability: true,
          strictStateSerializability: true,
        },
      },
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
