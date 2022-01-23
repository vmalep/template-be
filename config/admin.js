module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '049dd2d1fc1990a026aabe303ede9069'),
  },
});
