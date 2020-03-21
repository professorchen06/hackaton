import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { orderAreaPluggable } from './areas/order/order-area.pluggable';

const routes: Routes = [
  {
    path: '',
    canActivate: [],
    children: [
      ...orderAreaPluggable.lazyRoutes,
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
      {
        enableTracing: false,
        onSameUrlNavigation: 'reload',
      },
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
