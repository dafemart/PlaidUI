var AuthEndpoint =  "https://development.plaid.com/auth/get";
var TransactionEndpoint = "https://development.plaid.com/transactions/get";
var BalanceEndpoint = "https://development.plaid.com/accounts/balance/get";
var DeleteEndpoint = "https://development.plaid.com/item/remove";

function processRequest(EndPoint, body){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
       if(this.readyState == 4 && this.status == 200){
          return this.response;
       }
       else return false;
    }
    xhr.open("POST", EndPoint, true);
    xhr.setRequestHeader('Content-type','application/json');
    xhr.send(body);
}

function createAuthBody(){
   var ClientId = document.getElementById("Authentication_clientId").value;
   var secret = document.getElementById("Authentication_secret").value;
   var token = document.getElementById().value;
   var AuthBody = {};
   authBody["client_id"] = ClientId;
   authBody["secret"] = secret;
   authBody["access_token"] = token;
   return AuthBody;
}

function sendAuthRequest(){
   var body = createAuthBody();
   var authenticationData = JSON.parse(processRequest(AuthEndpoint, body));
   console.log(authenticationData); //delete this one after test is finished
}

window.onload = function(){
  document.getElementById("Authentication_submit").
       addEventListener("click",sendAuthRequest,false);
};

function getAuthenticationData(){

  //Clean up data in Id displayData
  document.body.appendChild(document.createElement('pre')).innerHTML = JSON.stringify(authenticationDatadata,null,4);
}
