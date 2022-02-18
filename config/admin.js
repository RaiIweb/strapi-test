module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4b7cab01e26571b912dd3e6c70a84c82'),
  },
});
