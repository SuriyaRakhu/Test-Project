// 
// See http://henleyedition.com/implicit-code-splitting-with-react-router-and-webpack/ for more information
// about the code splitting business

import { getAsyncInjectors } from 'utils/asyncInjectors';
import NavigationContainer from 'containers/NavigationContainer';
import CustomerDetailsContainer from 'containers/CustomerDetailsContainer';


const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); 
};

/* Note ES6 arrow function decalartion has implicit return.
   So basically, this function looks something like this
   const loadModule = function(cb) {
         return  function(componentModule) {
              cb(null, componentModule.default);
         }
     };
*/
const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);      
};

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); 

  return [{
      path: '/',
      name: 'login',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/LoginContainer'),
          System.import('containers/LoginContainer/reducer'),
          System.import('containers/LoginContainer/sagas'),
         ]);
        const renderRoute = loadModule(cb);
        importModules.then(([component,loginReducer,loginSagas]) => {
          injectReducer('loginContainer',loginReducer.default);
          injectSagas('loginContainer',loginSagas.default);          
          renderRoute(component);

        });

        importModules.catch(errorLoading);
      }
    },
    {
      path: '/home',
      name: 'home',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/HomePage'),
          System.import('containers/NavigationContainer/reducer'),
          System.import('containers/NavigationContainer/sagas'),
         ]);
        const renderRoute = loadModule(cb);
        importModules.then(([component,navigationReducer,navigationSagas]) => {
          injectReducer('navigationContainer',navigationReducer.default);
          injectSagas('navigationContainer',navigationSagas.default);          
          renderRoute(component);

        });

        importModules.catch(errorLoading);
      }, childRoutes: [
        {
          path: '/home/:index',
          name: 'Dispatchhome',
          getComponent(nextState, cb) {
            const importModules = Promise.all([           
              System.import('containers/DispatchRoutesListContainer/reducer'),
              System.import('containers/DispatchRoutesListContainer/sagas'),
              System.import('containers/DispatchRoutesListContainer'),
            ]);
            const renderRoute = loadModule(cb);
            importModules.then(([reducer, sagas, component]) => {
              injectReducer('dispatchRoutesList',reducer.default);
              injectSagas('dispatchRoutesList',sagas.default);          
              renderRoute(component);
            });
            importModules.catch(errorLoading);
          }   
      },{
          path: '/editRoute',
          name: 'editRouteDetails',
          getComponent(nextState, cb) {
            const importModules = Promise.all([           
              System.import('containers/EditRouteDetailsContainer/reducer'),
              System.import('containers/EditRouteDetailsContainer/sagas'),
              System.import('containers/EditRouteDetailsContainer'),
            ]);
            const renderRoute = loadModule(cb);
            importModules.then(([reducer, sagas, component]) => {
              injectReducer('routeDetailsList',reducer.default);
              injectSagas('routeDetailsList',sagas.default);          
              renderRoute(component);
            });
            importModules.catch(errorLoading);
          }   
      },{
          path: '/home/:index/dispatchCustomerDetails',
          name: 'dispatchCustomerDetails',
          getComponent(nextState, cb) {
            const importModules = Promise.all([           
              System.import('containers/DispatchCustomerDetailsContainer/reducer'),
              System.import('containers/DispatchCustomerDetailsContainer/sagas'),
              System.import('containers/DispatchCustomerDetailsContainer'),
            ]);
            const renderRoute = loadModule(cb);
            importModules.then(([reducer, sagas, component]) => {
              injectReducer('DispatchCustomerDetails',reducer.default);
              injectSagas('DispatchCustomerDetails',sagas.default);          
              renderRoute(component);
            });
            importModules.catch(errorLoading);
          }   
      },{
          path: '/dispatch',
          name: 'Dispatchlanding',
          getComponent(nextState, cb) {
            const importModules = Promise.all([           
              System.import('containers/DispatchLandingContainer/reducer'),
              System.import('containers/DispatchLandingContainer/sagas'),
              System.import('containers/DispatchLandingContainer'),
            ]);
            const renderRoute = loadModule(cb);
            importModules.then(([reducer, sagas, component]) => {
              injectReducer('dispatchLanding',reducer.default);
              injectSagas('dispatchLanding',sagas.default);          
              renderRoute(component);
            });
            importModules.catch(errorLoading);
          }   
      },{
          path: '/customerdetails',
          name: 'customerdetails',
          getComponent(nextState, cb) {
            const importModules = Promise.all([           
              System.import('containers/CustomerDetailsContainer/reducer'),
              System.import('containers/CustomerDetailsContainer/sagas'),
              System.import('containers/CustomerDetailsContainer'),
            ]);
            const renderRoute = loadModule(cb);
            importModules.then(([reducer, sagas, component]) => {
              injectReducer('customerDetailsContainer',reducer.default);
              injectSagas('customerDetailsContainer',sagas.default);          
              renderRoute(component);
            });
            importModules.catch(errorLoading);
          }   
      },
      {
        path: '/customersettings',
          name: 'customersettings',
          getComponent(nextState, cb) {
            const importModules = Promise.all([           
              System.import('containers/CustomerSettingsContainer/reducer'),
              System.import('containers/CustomerSettingsContainer/sagas'),
              System.import('containers/CustomerSettingsContainer'),
            ]);
            const renderRoute = loadModule(cb);
            importModules.then(([reducer, sagas, component]) => {
              injectReducer('customerSettingsContainer',reducer.default);
              injectSagas('customerSettingsContainer',sagas.default);          
              renderRoute(component);
            });
            importModules.catch(errorLoading);
          } 
      },{
        path: '/maFeedback',
          name: 'maFeedback',
          getComponent(nextState, cb) {
            const importModules = Promise.all([           
              System.import('containers/MaFeedbackContainer/reducer'),
              System.import('containers/MaFeedbackContainer/sagas'),
              System.import('containers/MaFeedbackContainer'),
            ]);
            const renderRoute = loadModule(cb);
            importModules.then(([reducer, sagas, component]) => {
              injectReducer('MaFeedbackContainer',reducer.default);
              injectSagas('MaFeedbackContainer',sagas.default);          
              renderRoute(component);
            });
            importModules.catch(errorLoading);
          }
      }
     
      ],
    }, 
	  {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        System.import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
