
var BalanceEndpoint = "https://development.plaid.com/accounts/balance/get";

function processRequest(EndPoint, body){

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
       if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200){
        let balanceData = JSON.parse(xhr.responseText);
        getData(balanceData);
       }
    }

    xhr.open("POST", EndPoint, true);
    xhr.setRequestHeader('Content-type','application/json');
    xhr.send(body);
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

function sendBalanceRequest(){
 var body = createBalanceBody();
 return processRequest(BalanceEndpoint, body);
}

window.onload = function(){
  document.getElementById("Balance_submit").
       addEventListener("click",sendBalanceRequest,false);
};



function getData(data){
  if(balanceData.message){
         document.getElementById("errorMessage").innerHTML = '<span class="label label-danger label-center">Incorrect input.</span>';
  }
  else{
  //Clean up data in Id authenticationMessage first.
  document.getElementById('balanceMessage').innerHTML = "";
  document.getElementById("balanceMessage").innerHTML = JSON.stringify(data,null,4);
    }
}
