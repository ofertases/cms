module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "strapi4-ftp-provider",
      providerOptions: {
        host: env("FTP_HOST"),
        port: env("FTP_PORT"),
        user: env("FTP_USER"),
        password: env("FTP_PASSWORD"),
        secure: env.bool("FTP_SECURE", false),
        path: env("FTP_BASE_PATH"),
        baseUrl: env("FTP_BASE_URL"),
      },
    },
  },
});