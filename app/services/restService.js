/*
 *
 * NavigationContainer actions
 *
 */


export function defaultAction(data) {    
 console.log(JSON.stringify(data) );

let options;
        if(!data.request.mockEnabled){
     options = {
        method: data.request.methodName,
        body: JSON.stringify( data.request.payload ), 
		credentials: "same-origin", 
		credentials: 'include'
    };
  } else {
     options = {
        method: data.request.methodName
      }
  }
     

   return fetch(data.request.url, options
     
   )
  .then(response => response.json())
 
}



