// Application configuration
export function getAppConfig() {
    /* Configuration
     To work with diffrent envrioment(To Avoid hard coding of service urls in all service request)
    [Use "environment" key to set the envrionment, then correspoding envrioment urls will be populated in al service requests]
    */
  const config = {
     "config" :{
        "environment" : "local",
        "mockEnabled": true
 			 },

  "serverConfig" : {
				"local": "https://wmt.sysco.com/WMT_APP",
				"dev" :"",			
				"qa": "",
				"uat": "",
				"prod": ""
  }

}
  return config;
}

/* Configuration
Setting service parameters. To handle if any future updates in  service params
*/
export function getServiceConfig(requestData) {
    const serviceConfig = {
        "defaults" : {
					"headers" :{
						"Content-Type": "application/json"
					}
				},

				"GETCUSTOMERINFO" : {
					"apiName" :"GETCUSTOMERINFO",
					"endPointUrl" : "getCustomerInfo",
					"method" : "POST",
					"mock_json" : "http://localhost:3000/api/getCustomerInfo",
                    "isSecured": false,
					"server": "pepsico"
				},
				"GETROUTEINFO" : {
					"apiName" :"GETROUTEINFO",
					"endPointUrl" : "getRouteInfo",
					"method" : "POST",
					"mock_json" : "http://localhost:3000/api/routeJSON",
                    "isSecured": false,
					"server": "pepsico"
				},
				"GETCUSTOMERROUTE" : {
					"apiName" :"GETCUSTOMERROUTE",
					"endPointUrl" : "getCustomerRoute",
					"method" : "POST",
					"mock_json" : "http://localhost:3000/api/customerRouteJSON",
                    "isSecured": false,
					"server": "pepsico"
				},
				"GETROUTEDETAIL" : {
					"apiName" :"GETROUTEDETAIL",
					"endPointUrl" : "getRouteDetail",
					"method" : "POST",
					"mock_json" : "http://localhost:3000/api/routeDetailJSON",
                    "isSecured": false,
					"server": "pepsico"
				},
				"GETROUTELISTINFO" : {
					"apiName" :"GETROUTELISTINFO",
					"endPointUrl" : '/routes/:routes.json',
					"method" : "GET",
					"mock_json" : "http://localhost:3000/api/routeJSON",
                    "isSecured": true,
					"server": "pepsico"
				}				
    }
    return serviceConfig;
}
