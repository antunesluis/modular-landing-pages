module.exports = [
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "img-src": ["'self'", "data:", "blob:", "res.cloudinary.com"], // Permite imagens do Cloudinary
          "media-src": ["'self'", "data:", "blob:", "res.cloudinary.com"], // Permite mídia do Cloudinary
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  "strapi::logger",
  "strapi::errors",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
