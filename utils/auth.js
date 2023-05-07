const withAuth = (req, res, next) => {
    if (!req.session.logged_in) {
      res.redirect('/login');
    } else {
      //next();
      res.redirect('/homepage');
    }
  };
  
  module.exports = withAuth;