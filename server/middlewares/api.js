const low = require('lowdb');
const bodyParser = require('body-parser');
const uuid = require('uuid');
const customerInfo = require('./mock/customerdetails/getCustomers.json');
const customerRouteJSON = require('./mock/customerRoutes/getCustRoutes.json');
const routeDetailJSON = require('./mock/routeDetails/getRouteDetails.json');
const routeJSON = require('./json/routes.json');

function setupDb() {
  const db = low();

  db.defaults({ topics: [], links: [] })
    .value();

 

  return db;
}

module.exports = (app) => {
  const db = setupDb();
  
  app.get('/api/getCustomerInfo', (req, res) => {
      res.send(customerInfo);
    }); 


  /* For loading json for routes */
  app.get('/api/routeJSON', (req, res) => {
      res.send(routeJSON);
  }); 

/* For loading json for customers routes */
  app.get('/api/customerRouteJSON', (req, res) => {
      res.send(customerRouteJSON);
  });

/* For loading json for route details */
  app.get('/api/routeDetailJSON', (req, res) => {
      res.send(routeDetailJSON);
    });

 
};
