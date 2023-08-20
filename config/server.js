module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', process.env.PORT),
  app: {
    keys: env.array('APP_KEYS')
  },
});
