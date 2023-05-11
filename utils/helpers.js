module.exports = {
    format_date: (date) => {
      // Format date as MM/DD/YYYY
      return date.toLocaleDateString();
    },
};

// Define Handlebars helper for logout feature
Handlebars.registerHelper('logoutButton', function() {
  return '<button onclick="logout()">Logout</button>';
});

// Define Handlebars helper for logout feature
//Handlebars.registerHelper('logoutButton', function() {
//  return '<button id="logoutButton">Logout</button>';
//});
