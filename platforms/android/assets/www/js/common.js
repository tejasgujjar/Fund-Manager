var globalClickedListId = null;
var globalClickedMemName = "test";
$('ui-btn').css('background-color','#f6f6f6');  
$( document ).on( "vmousedown", "button,a", function() {
    	//console.log("mouse down");
    	var id = $(this).attr('id');
    	console.log("id = "+id);
    	if(id != "addExpense")
    		{
    			$(this).css('background-color','#7996B2'); //on click change of color 
    		}
    });
    $( document ).on( "vmouseup", "button,a", function() {
    	//console.log("mouse up");
    	var id2 = $(this).attr('id');
    	console.log("id = "+id2);
    	if(id2 != "addExpense")
    		{
    			$(this).css('background-color','darkgray'); 
    		}
  });
    
function saveClickedListForNextpage(id,name){
	globalClickedListId = id;
	globalClickedMemName = name;
}

    
$(document).delegate('#loginPage,#HomePage,#detailsPage', 'pageshow', function () {
      var the_height = ($(window).height() - $(this).find('[data-role="header"]').height()-10);
      $(this).height($(window).height()).find('[data-role="content"]').height(the_height);
});

//STRINGS starts
var memberDetailData='{"members":[{"memberName":"Tejas","amount":"53"},{"memberName":"Sahana","amount":"68"},{"memberName":"Nikhil","amount":"78"},{"memberName":"Sachin","amount":"101"},{"memberName":"user 5","amount":"amt2"},{"memberName":"user 2","amount":"amt2"},{"memberName":"user 2","amount":"amt2"},{"memberName":"user 2","amount":"amt2"},{"memberName":"user 2","amount":"amt2"},{"memberName":"user 2","amount":"amt2"},{"memberName":"user 2","amount":"amt2"}]}';
var expenseDetails= '{"details":[{"id":"121","purpose":"lunch","time":"10.45 PM","amount":"52","location":"goa"},{"id":"122","purpose":"petrol","time":"10.45 PM","amount":"52","location":"goa"},{"id":"123","purpose":"dinner","time":"10.45 PM","amount":"52","location":"goa"}]}';
var memberList = [];
//STRINGS ends