import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoadingBarModule} from '@ngx-loading-bar/core';
import {LoadingBarHttpClientModule} from '@ngx-loading-bar/http-client';
import {LoadingBarRouterModule} from '@ngx-loading-bar/router';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BackendApiModule} from './core/backend-api/backend-api.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    BackendApiModule,

    LoadingBarHttpClientModule,
    LoadingBarRouterModule,
    LoadingBarModule,

    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
