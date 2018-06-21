
var DeleteEndpoint = "https://development.plaid.com/item/remove";

function processRequest(EndPoint, body){

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
       if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200){
        let removeData = JSON.parse(xhr.responseText);
        getData(removeData);
       }
    }

    xhr.open("POST", EndPoint, true);
    xhr.setRequestHeader('Content-type','application/json');
    xhr.send(body);
}

function createDeleteBody(){
  var ClientId = document.getElementById("Remove_clientId").value;
  var secret = document.getElementById("Remove_secret").value;
  var token = document.getElementById("Remove_token").value;
  var DeleteBody = {};
  DeleteBody["client_id"] = ClientId;
  DeleteBody["secret"] = secret;
  DeleteBody["access_token"] = token;
  return DeleteBody;
}

function sendDeleteRequest(){
  var body = createDeleteBody();
  return processRequest(DeleteEndpoint, body);
}

window.onload = function(){
  document.getElementById("Remove_submit").
       addEventListener("click",sendDeleteRequest ,false);
};



function getData(data){
  if(removeData.message){
         document.getElementById("errorMessage").innerHTML = '<span class="label label-danger label-center">Incorrect input.</span>';
  }
  else{
  //Clean up data in Id authenticationMessage first.
  document.getElementById('removeMessage').innerHTML = "";
  document.getElementById("removeMessage").innerHTML = JSON.stringify(data,null,4);
    }
}
