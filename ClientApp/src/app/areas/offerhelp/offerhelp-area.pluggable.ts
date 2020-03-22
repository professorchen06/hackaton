export const offerHelpAreaPluggable = {
  lazyRoutes: [
    {
      path: 'offerhelp',
      loadChildren: () => import('./offerhelp-area.module').then((m) => m.OfferHelpAreaModule),
    },
  ],
};
