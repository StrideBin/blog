
function searchFormSubmit() {
	loadingStart();
	//$("html,body").animate({scrollTop:2500},100);
	var code=$("#code").val();
	var name=$("#name").val();
	var hqCode=$("#hqCode").val();
	var nameEn=$("#nameEn").val();
	code=emptyToNull(code);
	name=emptyToNull(name);
	hqCode=emptyToNull(hqCode);
	nameEn=emptyToNull(nameEn);
	orderBy=emptyToNull(orderBy);
	var tCountryInfo=new TCountryInfo(code,name,hqCode,nameEn);
	var	params = {
			"tCountryInfo":tCountryInfo,
			"startPage":pageId,
			"limit":limit,
			"orderBy":orderBy
			};
	 $.ajax({
	        type: "post",
	        url: getRootPath()+"/country/searchCountry",
	        dataType: "json",
	        data : JSON.stringify(params),
	        contentType : "application/json",
	        timeout : 60000,
	 	    error :errorMessageShow,
	 	    global : false,
	        success: function(data){
	        	loadingEnd();
	        	$(".countryDetail tbody")[0].innerHTML="";
	        	var newdata=jsonTransfer(data.list);
	        		count=data.count;
	        		globeData=newdata;
	        		pagehelper(count,limit);
				if(newdata.length>0){
					var country="";
					for (var i = 0; i < newdata.length; i++) {
						country+="<tr><td>"+newdata[i].code
						+"</td><td>"+newdata[i].hqCode
						+"</td><td>"+newdata[i].name
						+"</td><td>"+newdata[i].nameEn+"</td><td>"
						+"<a title='删除'><span class='glyphicon  glyphicon-trash delete'></span></a>"
						+" <a title='编辑' data-toggle='modal' data-target='#myModal'> <span class='glyphicon  glyphicon-edit edit'></span></a>"
						+" <a title='详细信息' data-toggle='modal' data-target='#moreModal'> <span id=data"+i+" class='glyphicon  glyphicon-list-alt list-alt'></span></a>"
						+"</td></tr>"+"<div></div>"
					}
					$(".countryDetail tbody").append(country);
					
					
				}					
				else{
					errorMessageShow();
				}
				
				//点击事件start↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
				$(".edit").click(function(){
					var code=$(this).parent()[0].parentElement.parentElement.children[0].innerHTML;
					var hqCode=$(this).parent()[0].parentElement.parentElement.children[1].innerHTML;
					var name=$(this).parent()[0].parentElement.parentElement.children[2].innerHTML;
					var nameEn=$(this).parent()[0].parentElement.parentElement.children[3].innerHTML;
					$("#codeInput")[0].value=code;
					$("#nameInput")[0].value=name;
					$("#hqCodeInput")[0].value=hqCode;
					$("#nameEnInput")[0].value=nameEn;
				})
				 $(".delete").click(function(){
						var code=$(this).parent().parent()[0].parentElement.cells[0].textContent;
						window.wxc.xcConfirm("是否要删除？","warning",{onOk:function(){deleteByPrimaryKey(code)}});
					})	
					
					
			$(".list-alt").click(function(){
				globeId=$(this).attr("id");
				globeId=globeId.replace("data","");
				$("#contentDescMore")[0].value=globeData[globeId].contentDesc;
				$("#codeMore")[0].value=globeData[globeId].code;
				$("#createTimeMore")[0].value=formatDate(globeData[globeId].createTime);
				$("#creatorMore")[0].value=globeData[globeId].creator;
				$("#hqCodeMore")[0].value=globeData[globeId].hqCode;
				$("#iconMore")[0].value=globeData[globeId].icon;
				$("#nameMore")[0].value=globeData[globeId].name;
				$("#nameEnMore")[0].value=globeData[globeId].nameEn;
				$("#namePinyinMore")[0].value=globeData[globeId].namePinyin;
				$("#visaDescMore")[0].value=globeData[globeId].visaDesc;
				
			})
			//点击事件end↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
	        } 
	 })
}
function deleteByPrimaryKey(code){
	var	params = {
				"code":code,
				};
	 $.ajax({
	        type: "post",
	        url: getRootPath()+"/country/deleteCountry",
	        dataType: "json",
	        data : JSON.stringify(params), 
	        contentType : "application/json",
	        timeout : 60000,
	 	    error :errorMessageShow,
	 	    global : false,
	        success: function(data){
	        	if(data>0){
	        		window.wxc.xcConfirm("成功","success",{onOk:function(){history.go(0)}});
	        		//alert("成功");
	        	}else{
	        		window.wxc.xcConfirm("失败","warning");
	        		//alert("失败");
	        	}
	        }
	        }
		)
		
		
	}

$(function(){
	/*$("#countryBlue").click();	*/
	searchFormSubmit();

$("#insert").click(function(){
	window.wxc.xcConfirm("确认提交？","confirm",{onOk: function(){insert()}});
})	
$("#search").click(function(){
	pageId=1;
	startPage=1;
	searchFormSubmit();
})	

$("#confirmedit").click(function(){
	editByPrimaryKey();
})


function insert(){
	re=new RegExp("[^0-9]");
	var code=$("#code").val();
	var name=emptyToNull($("#name").val());
	var hqCode=emptyToNull($("#hqCode").val());
	var nameEn=emptyToNull($("#nameEn").val());
	
	if(isNullOrEmpty(code)){
		return window.wxc.xcConfirm("请输入二字码!","warning");
		//alert("请输入二字码！");
	}
	if(code.length!=2){
		return window.wxc.xcConfirm("二字码为俩位数!","warning");
		//alert("二字码位数必须为两位");
	}
	if(!checkLengthAndChinese(name)){
		return window.wxc.xcConfirm("请输入"+inputLength+"位以下的中文国家名!","warning");
		//alert("请输入"+inputLength+"位以下的中文国家名!");
	}
	if(!checkLengthAndEnglish(nameEn)){
		return window.wxc.xcConfirm("请输入"+inputLength+"位以下的英文名!","warning");
		//alert("请输入"+inputLength+"位以下的英文名!");
	}
	if(!checkLengthAndNumber(hqCode)){
		return window.wxc.xcConfirm("请输入"+inputLength+"位以下的外编码!","warning");
		//alert("请输入"+inputLength+"位以下的外编码!");
	}

 	var	params = {
	"code" :code,
	"name":name,
	"hqCode" :hqCode,
	"nameEn":nameEn,
	};
	$.ajax({
        type: "post",
        url: getRootPath()+"/country/insertCountry",
        dataType: "json",
        data : JSON.stringify(params), 
        contentType : "application/json",
        timeout : 60000,
 	    error :errorMessageShow,
 	    global : false,
        success: function(data){
        	if(data==1){
        		//alert("成功");
        		window.wxc.xcConfirm("成功!是否继续添加","warning",{onOk:function(){history.go(0)},onCancel:function(){$("#back").click()}});
        	}else{ 
        		window.wxc.xcConfirm("失败","warning");
        		//alert("失败");
   			 } 
        }
        }
	)
}
	







function editByPrimaryKey(){
	var code=$("#codeInput").val();
	var name=emptyToNull($("#nameInput").val());
	var hqCode=emptyToNull($("#hqCodeInput").val());
	var nameEn=emptyToNull($("#nameEnInput").val());
	
	if(!checkLengthAndChinese(name)){
		return window.wxc.xcConfirm("请输入"+inputLength+"位以下的中文国家名!","warning");
		//alert("请输入"+inputLength+"位以下的中文国家名!");
	}
	if(!checkLengthAndNumber(hqCode)){
		return window.wxc.xcConfirm("请输入"+inputLength+"位以下的数字外编号!","warning");
		//alert("请输入"+inputLength+"位以下的数字外编号!");
	}
	if(!checkLengthAndEnglish(nameEn)){
		return window.wxc.xcConfirm("请输入"+inputLength+"位以下的英文名!","warning");
		//alert("请输入"+inputLength+"位以下的英文名!");
	}
	var	params = {
				"code":code,
				"name":name,
				"hqCode" :hqCode,
				"nameEn":nameEn,		
				};
	 $.ajax({
	        type: "post",
	        url: getRootPath()+"/country/editCountry",
	        dataType: "json",
	        data : JSON.stringify(params), 
	        contentType : "application/json",
	        timeout : 60000,
	 	    error : errorMessageShow,
	 	    global : false,
	        success: function(data){
	        	if(data>0){
	        		window.wxc.xcConfirm("成功","success",{onOk:function(){$("#close").click();searchFormSubmit();}});
	        		//alert("成功");	 
	        	}else{
	        		window.wxc.xcConfirm("失败","warning");
	        		//alert("失败");
	        	}
	        }
	        }
		)
		
		
	}


$("#codeOrder").click(function(){
	orderBy=="code"?orderBy="code desc":orderBy="code";
if (orderBy=="code"){
$(this)[0].childNodes[1].className="pull-right glyphicon glyphicon-chevron-up";
	searchFormSubmit();
}else{
	$(this)[0].childNodes[1].className="pull-right glyphicon glyphicon-chevron-down";
	searchFormSubmit();	
}	
})

$("#hqCodeOrder").click(function(){
	orderBy=="hq_code"?orderBy="hq_code desc":orderBy="hq_code";
	if (orderBy=="hq_code"){
		$(this)[0].childNodes[1].className="pull-right glyphicon glyphicon-chevron-up";
		searchFormSubmit();
	}else{
		$(this)[0].childNodes[1].className="pull-right glyphicon glyphicon-chevron-down";
		searchFormSubmit();	
	}
})
$("#nameOrder").click(function(){
	orderBy=="name"?orderBy="name desc":orderBy="name";
	if (orderBy=="name"){
		$(this)[0].childNodes[1].className="pull-right glyphicon glyphicon-chevron-up";
		searchFormSubmit();
	}else{
		$(this)[0].childNodes[1].className="pull-right glyphicon glyphicon-chevron-down";
		searchFormSubmit();	
	}
	
})
$("#nameEnOrder").click(function(){
	orderBy=="name_en"?orderBy="name_en desc":orderBy="name_en";
	if (orderBy=="name_en"){
		$(this)[0].childNodes[1].className="pull-right glyphicon glyphicon-chevron-up";
		searchFormSubmit();
	}else{
		$(this)[0].childNodes[1].className="pull-right glyphicon glyphicon-chevron-down";
		searchFormSubmit();	
	}
})

})








