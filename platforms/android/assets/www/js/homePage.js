$(document).ready(function(){
	allEvents();
});
function showHomePage(){
	$('#header_text').text("HOME");
	$('#home_div').show();
	$('#home_div').siblings().hide();
}

function logout(){
	showPopup(
            {
                headText: "Logout",
                innerText: "Any unsaved data will be lost. Are you sure you want to logout ?",
                button1: "Yes",
                button2:'No',
                defaultBtn: 'No',
                popupHdlr: 
                    function(data)
                    {
                		if(data == 'Yes')
                			{
                				window.location = 'login.html';
                			}
                		else
                			{
                				//alert("stay");
                			}
                    }
            });
}
function allEvents(){
	$('#selectCompany').change(function(){
		showHomePage();
	});
	$('#createCompanyBtn').click(function(){
		$("#create_company_dialog").popup("open");
		$('.ui-btn').css('background-color',"darkgray");
	});
	$('#createCompany_popUpBtn').click(function(){
		$("#create_company_dialog").popup("close");
		setTimeout(function(){
			window.location = 'login.html';
		}, 500);
	});
	
	$('#home_div div img, #home_div div span').click(function(){
		var T = this;
		var id = $(this).parent().attr('id');
		var selCls = id+'-select';
		var unselCls = id+'-unselect';
		$(T).parent().find('img').addClass(selCls).removeClass(unselCls);
		setTimeout(function(){
			$(T).parent().find('img').addClass(unselCls).removeClass(selCls);
			switch(id){
			case 'category':
				showCategoryScreen();
				break;
			case 'ledger':
				$.mobile.loading( "show", {theme: "d"});
				setTimeout(function(){
					$.mobile.loading( "hide" );
				}, 700);
				setTimeout(function(){
					showLedgerScreen();
				}, 400);
				break;
			case 'cash':
				$.mobile.loading( "show", {theme: "d"});
				setTimeout(function(){
					$.mobile.loading( "hide" );
				}, 700);
				setTimeout(function(){
					showCashScreen();
				}, 400);
				break;
			case 'report':
				$.mobile.loading( "show", {theme: "d"});
				setTimeout(function(){
					$.mobile.loading( "hide" );
				}, 700);
				setTimeout(function(){
					showReportScreen();
				}, 400);
				break;
			}
		}, 300);
	});
}

function showCategoryScreen(){
	$('#header_text').text("Category List");
	$('#home_div').hide();
	$('#category_div').show();
	$("#create_category_footer").trigger( "click" );
	
	$('#list_category_footer').unbind();
	$('#list_category_footer').bind('click',function(){
		$.mobile.loading( "show", {theme: "d"});
		setTimeout(function(){
			$.mobile.loading( "hide" );
		}, 700);
		setTimeout(function(){
			$('#header_text').text("Category List");
			$('#list_category_footer').removeClass('footer-unselect').addClass('footer-select');
			$('#create_category_footer').removeClass('footer-select').addClass('footer-unselect');
			$('#create_category').hide();
			$('#list_category').show();
		}, 400);
	});
	$('#category_list_content li').unbind();
	$('#category_list_content li').bind('click',function(){
		$("#category_list_dialog").popup("open");
		$('.ui-btn').css('background-color',"darkgray");
	});
	$('#create_category_footer').unbind();
	$('#create_category_footer').bind('click',function(){
		$('#header_text').text("Create Category");
		$('#create_category').show();
		$('#list_category').hide();
		$('#create_category_footer').removeClass('footer-unselect').addClass('footer-select');
		$('#list_category_footer').removeClass('footer-select').addClass('footer-unselect');
	});
	$('#createCategory_saveBtn').click(function(){
		showPopup(
                  {
                      headText: "Create Category",
                      innerText: "Category Created Succesfully.",
                      button1: "ok",
                      popupHdlr: 
                          function(data)
                          {
                          }
                  });
	});
}

function showLedgerScreen(){
	$('#header_text').text("Ledger List");
	$('#home_div').hide();
	$('#ledger_div').show();
	$("#create_ledger_footer").trigger( "click" );
	
	$('#list_ledger_footer').unbind();
	$('#list_ledger_footer').bind('click',function(){
		$('#header_text').text("Ledger List");
		$('#list_ledger_footer').removeClass('footer-unselect').addClass('footer-select');
		$('#create_ledger_footer').removeClass('footer-select').addClass('footer-unselect');
		$('#create_ledger').hide();
		$('#list_ledger').show();
	});
	$('#create_ledger_footer').unbind();
	$('#create_ledger_footer').bind('click',function(){
		$('#header_text').text("Create Ledger");
		$('#create_ledger').show();
		$('#list_ledger').hide();
		$('#create_ledger_footer').removeClass('footer-unselect').addClass('footer-select');
		$('#list_ledger_footer').removeClass('footer-select').addClass('footer-unselect');
	});
	$('#ledger_list_content li').unbind();
	$('#ledger_list_content li').bind('click',function(){
		$("#ledger_list_dialog").popup("open");
		$('.ui-btn').css('background-color',"darkgray");
	});
	$('#createLedger_saveBtn').click(function(){
		showPopup(
                  {
                      headText: "Create Ledger",
                      innerText: "Ledger Created Succesfully.",
                      button1: "ok",
                      popupHdlr: 
                          function(data)
                          {
                          }
                  });
	});
}

function showCashScreen(){
	$('#header_text').text("Cash Entry");
	$('#home_div').hide();
	$('#cash_div').show();
	$('#cash_entry').show();
	$('#cash_entry').siblings().hide();
	var dateformat = 'D, M. dd, yyyy';
	$('#cash_date').click(function(){
		var now = new Date();
		var selYear = now.getFullYear();
		var selMonth = now.getMonth();
		var selDay = now.getDate();
		var selDate = new Date();
		$('#cash_date').mobiscroll({
			preset:'date',
			dateOrder: 'Mddyy',
			dateFormat: dateformat,
			startYear : new Date().getFullYear()-1,
			endYear: new Date().getFullYear()+5,
		    theme: 'default',
		   /* lang: currentLang,*/
		    display: 'model',
		    mode: 'clickpick',
		    onCancel : function(html, inst){
		    	//if(selValue.length == 0){
		    		$('#cash_date').val('');
		    	//}
		    }
		}).scroller('setDate',new Date(selYear, selMonth, selDay), true);
		$('#cash_date').mobiscroll('show');
	});
	
	$('#cashEdit_from_date').click(function(){
		var now = new Date();
		var selYear = now.getFullYear();
		var selMonth = now.getMonth();
		var selDay = now.getDate();
		var selDate = new Date();
		$('#cashEdit_from_date').mobiscroll({
			preset:'date',
			dateOrder: 'Mddyy',
			dateFormat: dateformat,
			startYear : new Date().getFullYear()-1,
			endYear: new Date().getFullYear()+5,
		    theme: 'default',
		   /* lang: currentLang,*/
		    display: 'model',
		    mode: 'clickpick',
		    onCancel : function(html, inst){
		    	//if(selValue.length == 0){
		    		$('#cashEdit_from_date').val('');
		    	//}
		    }
		}).scroller('setDate',new Date(selYear, selMonth, selDay), true);
		$('#cashEdit_from_date').mobiscroll('show');
	});
	
	$('#cashEdit_to_date').click(function(){
		var now = new Date();
		var selYear = now.getFullYear();
		var selMonth = now.getMonth();
		var selDay = now.getDate();
		var selDate = new Date();
		$('#cashEdit_to_date').mobiscroll({
			preset:'date',
			dateOrder: 'Mddyy',
			dateFormat: dateformat,
			startYear : new Date().getFullYear()-1,
			endYear: new Date().getFullYear()+5,
		    theme: 'default',
		   /* lang: currentLang,*/
		    display: 'model',
		    mode: 'clickpick',
		    onCancel : function(html, inst){
		    	//if(selValue.length == 0){
		    		$('#cashEdit_to_date').val('');
		    	//}
		    }
		}).scroller('setDate',new Date(selYear, selMonth, selDay), true);
		$('#cashEdit_to_date').mobiscroll('show');
	});
	 
	$('#cash_saveBtn').click(function(){
		showPopup(
                {
                    headText: "Cash Entry",
                    innerText: "Date Succesfully Saved.",
                    button1: "ok",
                    popupHdlr: 
                        function(data)
                        {
                        }
                });
	});
	
	$('#credit,#debit').click(function(){
		var t= $(this).attr('id');
		if(t == 'credit')
		{
			$('#credit img').removeClass('radio-unselect').addClass('radio-select');
			$('#debit img').removeClass('radio-select').addClass('radio-unselect');
		}
		else{
			$('#credit img').removeClass('radio-select').addClass('radio-unselect');
			$('#debit img').removeClass('radio-unselect').addClass('radio-select');
		}
	});
	
	$('#cash_editBtn').click(function(){
		$('#header_text').text("Edit");
		$('#cash_edit').show();
		$('#cash_edit').siblings().hide();
	});
	$('#cash_edit_backBtn').unbind();
	$('#cash_edit_backBtn').bind('click',function(){
		$('#header_text').text("Cash Entry");
		$('#cash_entry').siblings().hide();
		$('#cash_entry').show();
	});
	$('#cash_showResultsBtn').unbind();
	$('#cash_showResultsBtn').bind('click',function(){
		$('#header_text').text("Results");
		$('#cash_showResult').show();
		$('#cash_showResult').siblings().hide();
	});
	$('#cash_showResult_backBtn').unbind();
	$('#cash_showResult_backBtn').bind('click',function(){
		$('#header_text').text("Edit");
		$('#cash_edit').show();
		$('#cash_edit').siblings().hide();
	});
	$('#showResultCash_list_content li').unbind();
	$('#showResultCash_list_content li').bind('click',function(){
		$("#showResults_cash_dialog").popup("open");
		$('.ui-btn').css('background-color',"darkgray");
	});
}

function showReportScreen(){
	$('#header_text').text("Report");
	$('#home_div').hide();
	$('#report_div').show();
	
	$('#showReportBtn').unbind();
	$('#showReportBtn').bind('click',function(){
		$('#header_text').text("Detailed Report");
		$('#select_report').hide();
		$('#detail_report').show();
	});
	$('#backToSelReportBtn').unbind();
	$('#backToSelReportBtn').bind('click',function(){
		$('#header_text').text("Report");
		$('#select_report').show();
		$('#detail_report').hide();
	});
	
	var dateformat = 'D, M. dd, yyyy';
	$('#from_date').click(function(){
		var now = new Date();
		var selYear = now.getFullYear();
		var selMonth = now.getMonth();
		var selDay = now.getDate();
		var selDate = new Date();
		$('#from_date').mobiscroll({
			preset:'date',
			dateOrder: 'Mddyy',
			dateFormat: dateformat,
			startYear : new Date().getFullYear()-1,
			endYear: new Date().getFullYear()+5,
		    theme: 'default',
		   /* lang: currentLang,*/
		    display: 'model',
		    mode: 'clickpick',
		    onCancel : function(html, inst){
		    	//if(selValue.length == 0){
		    		$('#from_date').val('');
		    	//}
		    }
		}).scroller('setDate',new Date(selYear, selMonth, selDay), true);
		$('#from_date').mobiscroll('show');
	});
	
	$('#to_date').click(function(){
		var now = new Date();
		var selYear = now.getFullYear();
		var selMonth = now.getMonth();
		var selDay = now.getDate();
		var selDate = new Date();
		$('#to_date').mobiscroll({
			preset:'date',
			dateOrder: 'Mddyy',
			dateFormat: dateformat,
			startYear : new Date().getFullYear()-1,
			endYear: new Date().getFullYear()+5,
		    theme: 'default',
		   /* lang: currentLang,*/
		    display: 'model',
		    mode: 'clickpick',
		    onCancel : function(html, inst){
		    	//if(selValue.length == 0){
		    		$('#to_date').val('');
		    	//}
		    }
		}).scroller('setDate',new Date(selYear, selMonth, selDay), true);
		$('#to_date').mobiscroll('show');
	});
	
	$('#showTotalBtn').click(function(){
		$("#showTotal_report_dialog").popup("open");
		$('.ui-btn').css('background-color',"darkgray");
	});
}


