window.onload = () =>{
  if (document.contains(document.getElementById("Authentication_submit"))) {
    document.getElementById("Authentication_submit").addEventListener("click", getAuthenticationData);
}
  else if (document.contains(document.getElementById("Transaction_submit"))) {
    document.getElementById("Transaction_submit").addEventListener("click", getAuthenticationData);
}
else if (document.contains(document.getElementById("Balance_submit"))) {
  document.getElementById("Balance_submit").addEventListener("click", getAuthenticationData);
}

else if (document.contains(document.getElementById("Remove_submit"))) {
  document.getElementById("Remove_submit").addEventListener("click", getAuthenticationData);
}

}

function getAuthenticationData(){

  //First, get the data from function processRequest
  //dummy test data

  let dataJson =
  {
    "accounts": [{
      "account_id": "vzeNDwK7KQIm4yEog683uElbp9GRLEFXGK98D",
      "balances": {
        "available": 100,
        "current": 110,
        "limit": null,
        "iso_currency_code": "USD",
        "unofficial_currency_code": null,
      },
      "mask": "0000",
      "name": "Plaid Checking",
      "official_name": "Plaid Gold Checking",
      "subtype": "checking",
      "type": "depository"
    }],
    "numbers": {
       "ach": [{
        "account": "9900009606",
        "account_id": "vzeNDwK7KQIm4yEog683uElbp9GRLEFXGK98D",
        "routing": "011401533",
        "wire_routing": "021000021"
       }],
       "eft": []
    },
    "item": {},
    "request_id": "45QSn"
  };

  //Clean up data in Id displayData
  //document.getElementById('pre').innerHTML = "";
//  document.getElementById("displayData").innerHTML = JSON.stringify(dataJson,null,"  ");
  //document.getElementById("authenticationMessage").innerHTML = JSON.stringify(dataJson,null,4);
//  if (document.contains(document.getElementById('pre'))) {
    //        document.getElementById("submitbutton").remove();
//}   else {
  //    document.body.appendChild(document.createElement('pre')).innerHTML = JSON.stringify(dataJson,null,4);
//}
    document.getElementById("authenticationMessage").innerHTML = "";
    document.getElementById("authenticationMessage").innerHTML = JSON.stringify(dataJson,null,4);

}
