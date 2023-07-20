module.exports = [
  'strapi::errors',
  {
      name: 'strapi::security',
      config: {
          contentSecurityPolicy: {
              directives: {
                  'script-src': ["'self'", "'unsafe-inline'", 'cdn.jsdelivr.net', '*'],
                  'img-src': ["'self'", 'data:', "blob:", 'cdn.jsdelivr.net', 'strapi.io', 'res.cloudinary.com','market-assets.strapi.io'],
              },
          }
      },
  },
  {
      name: 'strapi::cors',
      config: {
          header: '*',
          origin: ['*']
      }
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];