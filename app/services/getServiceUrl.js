
import {getAppConfig, getServiceConfig} from '../config/appConfig'

/*Constructing Service Url to handle server and local envrionments
 getServiceUrl Service Url. 
*/
export function getServiceUrl(params) {
    let apiParams = {}
    let serviceConfig = getServiceConfig();
    let appConfig = getAppConfig();
    let serviceEntry = serviceConfig[params.apiName];
    if (serviceEntry.endPointUrl == null) {
        console.log("Invalid service entry for ApiName : " + params.apiName);
     } else  {
         let endPointUrl = serviceEntry.endPointUrl; 
         let serverUrlPrefix =  appConfig.serverConfig[appConfig.config.environment];
         let url = serverUrlPrefix + endPointUrl;        
         let serviceUrl = url.trim();	
        if(serviceEntry.endPointUrl != null && appConfig.config.mockEnabled === false){
            apiParams.url = serviceUrl;	
            apiParams.methodName = serviceEntry.method;
            if(apiParams.methodName == "GET") {
                //frame query string
                var regex = /\:([a-z]+)/,match;             
                while (match = regex.exec(apiParams.url)){
                    apiParams.url=apiParams.url.replace(match[0],params.queryParams[match[1]])
                }
                apiParams.url += "?"+params.queryString;
            }
        } else {
            apiParams.url = serviceEntry.mock_json; 
            apiParams.methodName = "GET";	      
        }
        console.log("Server url = ",  apiParams.url);
        apiParams.payload =  params.payload; 
        apiParams.mockEnabled  = appConfig.config.mockEnabled; 
       
    }
 return apiParams;
}