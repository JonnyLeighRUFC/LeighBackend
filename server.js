var app = require('express')(); // Create an instance of an Express app

var mobileApp = require('azure-mobile-apps')(); // Create an instance of a Mobile App with default settings

mobileApp.tables.add('Post'); // Create a table for 'login' with default settings
mobileApp.tables.add('Users'); // Create a table for 'Users' with default settings
mobileApp.tables.add('Newsletter'); // Create a table for 'Newsletter' with default settings
mobileApp.tables.add('Orders'); // Create a table for 'Orders' with default settings

app.use(mobileApp);
app.listen(process.env.PORT || 3000);
