import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoadingBarModule} from '@ngx-loading-bar/core';
import {LoadingBarHttpClientModule} from '@ngx-loading-bar/http-client';
import {LoadingBarRouterModule} from '@ngx-loading-bar/router';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BackendApiModule} from './core/backend-api/backend-api.module';
import {LayoutComponent} from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
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

    MatMenuModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
