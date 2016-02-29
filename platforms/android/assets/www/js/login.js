$(document).ready(function(){
	
    allEvents();
    document.addEventListener("deviceready", onDeviceReady, true);
    function load(){
		  setTimeout(function(){
				window.location = "login.html";
			}, 1000);  
	}
});   

var isDeviceReady = false;
var deviceUUID;
var deviceAccounts;
var test = ["tejasgujjar@gmail.com","neha@gmail.com","whatsapp"];
var deviceAccountArray = [];
function onDeviceReady() {
	isDeviceReady = true;
	    console.log("device ready");
	    initialize();
	}
	
function initialize()
{
	 console.log("cordova information");
	 if(isDeviceReady)
	 {
		 console.log("Device Unique ID : "+device.uuid);
		 deviceUUID = device.uuid;
		 $('#UUIDNumbr').text(deviceUUID);
			window.plugins.DeviceAccounts.get(function(accounts){
 			 // accounts is an array with objects containing name and type attributes
 			  console.log('1 TejasBook account registered on this device:'+ accounts);
			 // alert('1account registered on this device:'+ accounts);
			  deviceAccounts = accounts;
			  showAccounts(accounts);
				}, function(error){
 			 alert('Fail to retrieve accounts, details on exception:'+ error);
					}); 
	 }
	else{
		alert("device not ready");
	}	
}
function allEvents()
{
	$('#submit,#skip').click(function(){
		window.location = 'HomePage.html';
	});
	
	$('#differentUsername').unbind();
	$('#differentUsername').bind('click',function(){
		$("#accounts_dialog").popup("open");
	});
	
	$('#skip').click(function(){
		//initialize();
		/*  showPopup(
                  {
                      headText: "head",
                      innerText: "inner",
                      button1: "ok",
                      popupHdlr: 
                          function(data)
                          {
                              alert("done");
                          }
                  });*/
	});
}
function showAccounts(deviceAccounts)
{
	var i =0;
	var len = deviceAccounts.length;
	for(i=0; i<= len-1;i++)
	{
		if (deviceAccounts[i].name.indexOf("@") >= 0 && deviceAccounts[i].name.indexOf("com") >= 0 )
		{
			deviceAccountArray.push(deviceAccounts[i].name);
			//alert(deviceAccounts[i].name);
		}
	}
		if(deviceAccountArray.length == 0)
		{
			alert("No accounts found.");
		}else{
			$('#username').val(deviceAccountArray[0]);
				var items = [];
				$('#account_listDiv').html("");
				$('#account_UL').css("list-style-type","none");
				var length = deviceAccountArray.length;
				for(i=0;i<=length-1;i++)
				{
					var toPush = '<li class="accounts_list">'+deviceAccountArray[i]+'</li>';
					items.push(toPush);
				}
				$('<ul/>', {
				    html: items.join('')
				  }).appendTo('#account_listDiv');
				$('#account_UL').css("list-style-type","none");
				$('#account_listDiv ul').css("list-style-type","none");
				$('#account_listDiv ul li').click(function(){
					var id = $(this).text();
					$('#username').val(id);
					$("#accounts_dialog").popup("close");
				});
			}
	}