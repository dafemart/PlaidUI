window.onload = function(){
  document.getElementById("Authentication_submit").
       addEventListener("click",sendAuthRequest,false);
};


var AuthEndpoint =  "https://development.plaid.com/auth/get";

function sendAuthRequest(){
   var body = createAuthBody();
  processRequest(AuthEndpoint, body);
}

function createAuthBody(){
   var ClientId = document.getElementById("Authentication_clientId").value;
   var secret = document.getElementById("Authentication_secret").value;
   var token = document.getElementById("Authentication_token").value;
   var AuthBody = {};
    AuthBody["client_id"] = ClientId;
    AuthBody["secret"] = secret;
    AuthBody["access_token"] = token;
   return AuthBody;
}

function processRequest(EndPoint, body){

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
       if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200){
        let authenticationData = JSON.parse(xhr.responseText);
        getData(authenticationData);
       }
    }

    xhr.open("POST", EndPoint, true);
    xhr.setRequestHeader('Content-type','application/json');
    xhr.send(body);
}


function getData(data){
  if(authenticationData.message){
         document.getElementById("errorMessage").innerHTML = '<span class="label label-danger label-center">Incorrect input.</span>';
  }
  else{
  //Clean up data in Id authenticationMessage first.
  document.getElementById('authenticationMessage').innerHTML = "";
  document.getElementById("authenticationMessage").innerHTML = JSON.stringify(data,null,4);
    }
}
