const setNoCacheHeaders = (req, res, next) => {
  // write your code here
  res.header('Cache-Control', 'no-store');
  next()
};

module.exports = {
  setNoCacheHeaders
};
