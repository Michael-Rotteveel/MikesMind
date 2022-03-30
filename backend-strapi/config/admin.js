module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd5e6124f7d1b05365e830e04818d173f'),
  },
});
