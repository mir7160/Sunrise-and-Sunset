let request = new XMLHttpRequest();
let url = "https://api.sunrise-sunset.org/json?lat=40.710302&lng=-73.793382";

request.open("GET", url, true);

request.onload = function(){
  let data = JSON.parse(this.response);  //"this" refers to ownership
  
  let sunrise = document.getElementById('sunrise');
  let sunset = document.getElementById('sunset');
  
  if (request.status >= 200 && request.status < 400){
      sunrise.textContent = convertToEST(data.results.sunrise);
      sunset.textContent = convertToEST(data.results.sunset);
  }
}


request.send();

function convertToEST(utc) {
    let utcHours = utc.substr(0, utc.indexOf(":"));
    let utcMinSec = utc.substr(utc.indexOf(":")+1);
    
    let est = parseInt(utcHours, 10) - 5;
    est += ":" + utcMinSec;
    
    return est;
}
