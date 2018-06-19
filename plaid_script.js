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

function createTransactionBody(){
   var ClientId = document.getElementById("Transaction_clientId").value;
   var secret = document.getElementById("Transaction_secret").value;
   var token = document.getElementById("Transaction_token").value;
   var StartDate = document.getElementById("Transaction_startDate").value;
   var EndDate = document.getElementById("Transaction_endDate").value;
   var options = document.getElementById("Transaction_options").value;
   var TransactionBody = {};
   TransactionBody["client_id"] = ClientId;
   TransactionBody["secret"] = secret;
   TransactionBody["access_token"] = token;
   TransactionBody["start_date"] = StartDate;
   TransactionBody["end_date"] = EndDate;
   TransactionBody["options"] = options;
   return TransactionBody;
}

function createBalanceBody(){
   var ClientId = document.getElementById("Balance_clientId").value;
   var secret = document.getElementById("Balance_secret").value;
   var token = document.getElementById("Balance_token").value;
   var BalanceBody = {};
   BalanceBody["client_id"] = ClientId;
   BalanceBody["secret"] = secret;
   BalanceBody["token"] = token;
   return BalanceBody;
}

function createDeleteBody(){
  var ClientId = document.getElementById("Delete_clientId").value;
  var secret = document.getElementById("Delete_secret").value;
  var token = document.getElementById("Delete_token").value;
  var DeleteBody = {};
  DeleteBody["client_id"] = ClientId;
  DeleteBody["secret"] = secret;
  DeleteBody["access_token"] = token;
  return DeleteBody;
}

function sendAuthRequest(){
   var body = createAuthBody();
   var authenticationData = JSON.parse(processRequest(AuthEndpoint, body));
   console.log(authenticationData); //delete this one after test is finished
}

function sendTransactionRequest(){
  var body = createTransactionBody();
  return processRequest(TransactionEndpoint,body);
}

function sendBalanceRequest(){
 var body = createBalanceBody();
 return processRequest(BalanceEndpoint, body);
}

function sendDeleteRequest(){
  var body = createDeleteBody();
  return processRequest(DeleteEndpoint, body);
}

window.onload = function(){
  document.getElementById("Authentication_submit").
       addEventListener("click",sendAuthRequest,false);
//  document.getElementById("Transaction_submit").
  //     addEventListener("click",sendTransactionRequest,false);
  document.getElementById("Balance_submit").
       addEventListener("click",sendBalanceRequest,false);
  document.getElementById("Delete_submit").
       addEventListener("click",sendDeleteRequest ,false);
};

function getAuthenticationData(){

  //Clean up data in Id displayData
  document.body.appendChild(document.createElement('pre')).innerHTML = JSON.stringify(authenticationDatadata,null,4);
}
