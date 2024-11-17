export const appRoutes = {
  // Authentiation
  sign_up: '/sign-up',
  login: '/login',
  logout: '/logout',
  reset_password: '/api/user/reset-password/:token',
  forgot_password: '/forgot-password',

  //Pages
  search: '/search',
  eventsDescription: '/:eventId',
  ticketBooking: '/ticketBooking',
  attendeeDets: '/attendeeDetails',
  orderSummary: '/orderSummary',
  share: '/share',
  helpCenter: '/help-center',
  aboutUs: '/about-us',
  find_event:"/event/:name",

  // Landing page
  home: '/',

  // contact us
  contactUs: '/contact-us',
  // Coming soon/Find events
  coming_soon: '/coming-soon',

  // create Events
  create_Event:"/create-event",

  // profile
  profile: '/profile',
}