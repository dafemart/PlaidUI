
var TransactionEndpoint = "https://development.plaid.com/transactions/get";

function processRequest(EndPoint, body){

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
       if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200){
        let transactionData = JSON.parse(xhr.responseText);
        getData(transactionData);
       }
    }

    xhr.open("POST", EndPoint, true);
    xhr.setRequestHeader('Content-type','application/json');
    xhr.send(body);
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

function sendTransactionRequest(){
  var body = createTransactionBody();
  return processRequest(TransactionEndpoint,body);
}

window.onload = function(){
  document.getElementById("Transaction_submit").
     addEventListener("click",sendTransactionRequest,false);
};



function getData(data){
  if(transactionData.message){
         document.getElementById("errorMessage").innerHTML = '<span class="label label-danger label-center">Incorrect input.</span>';
  }
  else{
  //Clean up data in Id authenticationMessage first.
  document.getElementById('transactionMessage').innerHTML = "";
  document.getElementById("transactionMessage").innerHTML = JSON.stringify(data,null,4);
    }
}
