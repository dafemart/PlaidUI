var AuthEndpoint =  https://sandbox.plaid.com/auth/get;
var TransactionEndpoint = https://sandbox.plaid.com/transactions/get;
var BalanceEndpoint = https://sandbox.plaid.com/accounts/balance/get;
var DeleteEndpoint = https://sandbox.plaid.com/item/remove;

function processRequest(EndPoint, body){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
       if(this.readyState == 4 && this.status == 200){
          return this.response;
       }
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

function createTransactionBody(){
   
} 

function sendAuthRequest(){
   var body = createAuthBody();
   processRequest(AuthEndpoint, body);   
}

window.onload = function(){
   
};