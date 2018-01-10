var limit=5;//数据库查询条数 就是查询的这页有多少条 *

var showPage=5;//初始化显示页数  就是页面初始化时候下面分页的项有多少个 比如showPage为4 则下面显示1-4页

var pageId=1;//当前页码 当前在第几页 页面初始化时 从第一页开始查 *

var startPage=1;//当前起始页 就是当前的页码从几开始  如果填2 就是2 3 4 5 6 这样
 
var globeData="";//全局 

var endPage=showPage;//当前最后页
function pagehelper(count,lmt){
	
	var endPage=showPage;//当前最后页
	
	 $(".pagination").html("");
	 //如果总数<=预计查出每页的条数
	 if(count<=lmt){
		 startPage=1;
	 }
	 var pages="";
	 var startLength=(pageId-1)*lmt+1;
	 var endLength=startLength+globeData.length-1;
	 if(globeData.length==0){
		 startLength=0;
		 endLength=0;
	 }
	
	 pages+="<li class='disabled'><a data-original-title='' title=''>显示"+startLength+"到"+endLength+"条</a></li><li id='firstPage'><a data-original-title='' title=''>首页</a></li><li class='disabled'></li><li><a href='#' class='prePage'>&laquo;</a></li>";
	 var nowPageCount;
	 var pageCount=Math.ceil(count/lmt);//记录总页数
	 
	 //如果小于10页则显示现在搜出来的总页数
	 //如果大于10页则直接用 nowPageCount=startPage+showPage;
	 
	 if(pageCount<=10){
		 nowPageCount=pageCount;
	 }else{
		 nowPageCount=startPage+showPage-1;
	 }
	 
	 
	 for (var i = startPage; i < nowPageCount+1; i++) {
		pages+="<li id="+i+"><a href='#' class='pages'>"+i+"</a></li>"
	}
	 pages+=" <li><a href='#' class='nextPage'>&raquo;</a></li><li id='lastPage'><a href='#'>末页</a></li><li class='disabled'><a data-original-title='' title=''>总共"+count+"条</a></li>"
	 
	 pages+="<li><select class='form-control' style='width:80px;float:left' id='pageSelect'><option value="+limit+">"+limit+"</option><option value=10>10</option><option value=25>25</option><option value=50>50</option><option value=100>100</option></select></li></ul>"
	 $(".pagination").append(pages);  
	
	if(pageId!=null){
	$("#"+pageId).addClass("active");
	}
	
	//判断现在是第几页 然后和第一页最后一页对比 如果相同则设置首页末页不可点击
	if(pageId==1){
		$(".prePage")[0].parentElement.className="disabled";
		$("#firstPage")[0].className="disabled";
	}
	if(pageCount==pageId||pageCount==0){
		$(".nextPage")[0].parentElement.className="disabled";
		$("#lastPage")[0].className="disabled";
	}
	 $(".pages").click(function(){
		 pageId= $(this)[0].parentElement.id;
		 if(pageId==endPage){
			 if(endPage!=pageCount){
			 startPage+=1;
			 endPage+=1;
			 }
		 }
		 if(pageId==startPage){
			 if(startPage!=1){
			 startPage-=1;
			 endPage-=1;
			 }
		 }
		 searchFormSubmit();

		 
	 })
		$("#pageSelect").change(function (){
			limit=$(this).val();
			 startPage=1;
			 pageId=1;
			searchFormSubmit();
   	});
	 $(".prePage").click(function(){
		 if($(this)[0].parentElement.className=='disabled'){
			 return;
		 }
		 if(pageId>1){
			 pageId--;
			 if((pageId)!=(startPage-1)){
				 if(startPage!=1){
				 startPage-=1;
				 endPage-=1;
				 }
			 }
			 searchFormSubmit();
		 }
		 
	 })
	 $(".nextPage").click(function(){
		 //當前最後一頁( •̀ ω •́ )y
		 if($(this)[0].parentElement.className=='disabled'){
			 return;
		 }
		 if(pageCount!=pageId){
			 pageId++;
			 if(endPage!=pageCount){
			 startPage+=1;
			 endPage+=1;
			 }
		 searchFormSubmit();
		 }
	 })
	 $("#firstPage").click(function(){
		 if($(this)[0].className=='disabled'){
			 return;
		 }
		 if(pageId==1){return ;}
		 pageId=1;
		 startPage=1;
		 endPage=showPage;
		 searchFormSubmit();
	 })
	 $("#lastPage").click(function(){
		
		 if($(this)[0].className=='disabled'){
			 return;
		 }
		 if(pageCount==pageId){
			 return;}
		 pageId=pageCount;
		 
		 startPage=pageCount-showPage+1;
		 if(pageCount<showPage){
			 startPage=1;
		 }
		 endPage=pageCount;
		 searchFormSubmit();
	 })
	 }



$(function() {
/**
 * 加载动画模态框的位置计算 放在屏幕中间显示
 */
$('#loadingModal').css(
		{
			'margin-top' : function() {
				var modalHeight = $('#loadingModal').find(
						'.loading-img-bottom').height();
				return ($(window).height() / 2 - (modalHeight / 2));
			},
			'margin-left' : function() {
				var modalWidth = $("#loadingModal").find(
						'.loading-img-bottom').width();
				return ($(window).width() / 2 - (modalWidth / 2) - 500);
			}
		});

})
/**
 * 
 * 获取项目路径公用方法
 * @returns
 */
function getRootPath() {
	// 获取当前网址，如： http://localhost:8080/jetair/login/login.jsp
	var curWwwPath = window.document.location.href;
	// 获取主机地址之后的目录，如：jetair/login/login.jsp
	var pathName = window.document.location.pathname;
	var pos = curWwwPath.indexOf(pathName);
	// 获取主机地址，如： http://localhost:8080
	var localhostPaht = curWwwPath.substring(0, pos);
	// 获取带"/"的项目名，如：/jetair
	var projectName = pathName
			.substring(0, pathName.substr(1).indexOf('/') + 1);
	return (localhostPaht + projectName);
}
/**
 * 
 * 时间戳转为日期公用方法
 * @param data
 * @returns
 */
function formatDate(data) {
	if(data==""){return data;}
	var now=new Date(data);
	var year = now.getFullYear();
	var month = now.getMonth() + 1;
	var date = now.getDate();
	return year + "-" + month + "-" + date;
}
/**
 * 
 * 时间戳转为日期公用方法(显示时分秒)
 * @param data
 * @returns
 */
function formatDateDetail(data) {
	if(data==""){return data;}
	var now=new Date(data);
	var year = now.getFullYear();
	var month = now.getMonth() + 1;
	var date = now.getDate();
	var hour = now.getHours();
	var minute = now.getMinutes();
	var second = now.getSeconds();
	return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":"
			+ second;
}
/**
 * json格式数据null转""
 * @param jsonobj
 * @returns
 */
function jsonTransfer(jsonobj){
	var jsonstr=JSON.stringify(jsonobj);
	var ti = new RegExp("null", "g");
	var jsontransferstr=jsonstr.replace(ti,"\"\"");
	var jsontransferobj=eval('(' + jsontransferstr + ')');
	return jsontransferobj;
}
$.extend({
	/**
	 * 页面跳转，并将参数GET入新的页面
	 */
    StandardGet:function(url,args){
        var body = $(document.body),
            form = $("<form method='get'></form>"),
            input;
        form.attr({"action":url});
        $.each(args,function(key,value){
            input = $("<input type='hidden'>");
            input.attr({"name":key});
            input.val(value);
            form.append(input);
        });

        form.appendTo(document.body);
        form.submit();
        document.body.removeChild(form[0]);
    }
});
$.extend({
	/**
	 * 页面跳转，并将参数POST入新的页面
	 */
    StandardPost:function(url,args){
        var body = $(document.body),
            form = $("<form method='post'></form>"),
            input;
        form.attr({"action":url});
        $.each(args,function(key,value){
            input = $("<input type='hidden'>");
            input.attr({"name":key});
            input.val(value);
            form.append(input);
        });

        form.appendTo(document.body);
        form.submit();
        document.body.removeChild(form[0]);
    }
});

//<code>
//var GET = $.urlGet(); //获取URL的Get参数
//var id = GET['id']; //取得id的值
//</code>
//url get parameters
//public
//return array() 
$.extend({
	urlGet:function() {
	    var aQuery = window.location.href.split("?");  //取得Get参数
	    var aGET = new Array();
	    if(aQuery.length > 1) {
	        var aBuf = aQuery[1].split("&");
	        for(var i=0, iLoop = aBuf.length; i<iLoop; i++) {
	            var aTmp = aBuf[i].split("=");  //分离key与Value
	            aGET[aTmp[0]] = aTmp[1];
	        }
	     }
	     return aGET;
	 }
});
/**
 * 错误信息展示
 */
function errorMessageShow(msg){
	loadingEnd();
	if ("login" == msg.responseText) {
		window.location.href=getRootPath()+"/business/backindex.jsp";
	}
	$("#msgModal").show();
	setTimeout(function () {
		$("#msgModal").hide();
    }, 1500)
}
/**
 * 消息提示
 * @param msg 消息
 * @param url 要跳转的URL，如果是回退，填“back”
 * @param params 跳转的参数
 */
function showMsg(msg, url, params) {
	if ("login" == msg) {
		redirectUrl = '/pages/login/login.jsp';
		msg = "请先登录！";
		redirectParams = null;
	} else if ("back" == msg) {
		redirectUrl = "back";
	} else {
		redirectUrl = url;
		redirectParams = params;
	}
	$("#msgModalContent").html(msg);
	$('#msgModal').css({
		'width': '60%',
		'margin-top': function () {
			return ($(window).height() * 0.7 / 2);
		},
		'margin-left': function () {
			return ($(window).width() * 0.4 / 2);
		}
    });
	$('#msgModal').modal({
		keyboard: false,
		backdrop: 'static'
	});
}
/**
 * 
 * 模拟发送post请求
 * @param URL
 * @returns {___anonymous2943_2946}
 */
function post(URL) {        
    var temp = document.createElement("form");        
    temp.action = URL;        
    temp.method = "post";        
    temp.style.display = "none";        
    document.body.appendChild(temp);        
    temp.submit();        
    return temp;        

}   
/**
 * 校验是否为中文
 * @param str
 * @returns {Boolean}
 */
function checkChinese(str){ 
	var flag=true;
	for(var i=0;i<str.length;i++){
		if(str.charCodeAt(i)<=255){		
			flag=false;	
    }
	}
	return flag;
}

/**
 * 校验是否为数字
 * @param str
 * @returns {Boolean}
 */
function checkNumber(str){
var str1="0123456789";
var flag=true;
for(var i=0;i<str.length;i++){
var onechar=str.substring(i,i+1);
if(!(str1.indexOf(onechar)!=-1)){
	flag=false;
}
}
return flag;
}
/**
 * 
 * 检验是否为英文
 * @param str
 * @returns {Boolean}
 */
function checkEnglish(str){
	var str1="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ";
	var flag=true;
	for(var i=0;i<str.length;i++){
	var onechar=str.substring(i,i+1);
	if(!(str1.indexOf(onechar)!=-1)){
		flag=false;
	}
	}
	return flag;
	}

/**
 * 判断是否为空
 * @param obj
 * @returns {Boolean}
 */
function isNullOrEmpty(obj) {
	var flag = false;
	if (obj == null || obj == undefined || typeof (obj) == 'undefined'
			|| obj == '') {
		flag = true;
	} else if (typeof (obj) == 'string') {
		obj = obj.trim();
		if (obj == '') {//为空  
			flag = true;
		} else {//不为空  
			obj = obj.toUpperCase();
			if (obj == 'NULL' || obj == 'UNDEFINED' || obj == '{}') {
				flag = true;
			}
		}
	} else {
		flag = false;
	}
	return flag;
}
/**
 * 
 * 空转null 查询时如果字段为空则也会被当做查询条件 所以需要转
 * 
 */
function emptyToNull(obj){
	if(obj!=null){
	if (obj.replace(/(^s*)|(s*$)/g, "").length ==0) 
	{ 
		obj=null; 
	}
	}
	return obj;
}


/**
 * 检查是否为手机号码
 */
function checkPhoneNumber(obj){
	if(obj.length!=11){
		return false;
	}else{
		if(!checkNumber(obj)){
			return false;
		}
	}
	return true;
}
/**
 * 检查是否为邮箱地址
 */
function checkEmail(obj){ 
		var szReg=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z]{2,4})+$/;		
		var bChk=szReg.test(obj); 
		return bChk; 	
}
/**
 * 
 * 检查长度和是否为中文
 * @param obj
 * @returns {Boolean}
 */
function checkLengthAndChinese(obj){
	if(obj==null){
		return true;
	}
	if(!checkLength(obj)){
		return false;
	}else{
		if(!checkChinese(obj)){
		return false;
		}
	}
	return true;
}
/**
 * 
 * 检查长度和是否为英文
 * @param obj
 * @returns {Boolean}
 */
function checkLengthAndEnglish(obj){
	if(obj==null){
		return true;
	}
	if(!checkLength(obj)){
		return false;
	}else{
		if(!checkEnglish(obj)){
		return false;
		}
	}
	return true;
}
/**
 * 
 * 检查长度和是否为数字
 * @param obj
 * @returns {Boolean}
 */
function checkLengthAndNumber(obj){
	if(obj==null){
		return true;
	}
	if(!checkLength(obj)){
		return false;
	}else{
		if(!checkNumber(obj)){
		return false;
		}
	}
	return true;
}

/** 验证码
 * 由数字和大小写字母组成的4位验证码
 */
 var code ; //在全局 定义验证码
 function createCode(){ 
 code = new Array();
 var codeLength = 4;//验证码的长度
 var checkCode = document.getElementById("checkCode");
 checkCode.value = "";

 var selectChar = new Array(2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');

 for(var i=0;i<codeLength;i++) {
    var charIndex = Math.floor(Math.random()*58);
    code +=selectChar[charIndex];
 }
 if(code.length != codeLength){
    createCode();
 }
 checkCode.value = code;
 }

 function validate () {
 var inputCode = document.getElementById("input1").value;

 if(inputCode.length <=0) {
	 window.wxc.xcConfirm("请输入验证码","warning");
	 //alert("请输入验证码！");
    return false;
 }
 else if(inputCode != code ){
	 window.wxc.xcConfirm("验证码输入错误","warning");
	 //alert("验证码输入错误！");
    createCode();
    return false;
 }
 else {
    return true;
 }
 }
 

/**
 * zTree 选择父类全选子类
 * @param event
 * @param resourceTree
 * @param treeNode
 */
function onCheck(event, resourceTree, treeNode){
	var treeObj = $.fn.zTree.getZTreeObj("resourceTree");
	if (treeNode.checked==true){
	if (treeNode.children!==null){
		for (var i=0, l=treeNode.children.length; i < l; i++) {
			treeNodes=treeNode.children
			treeObj.checkNode(treeNode.children[i], true, true);
			if(treeNodes[i].isParent!== false){
				for (var a=0, l=treeNodes[i].children.length; a < l; a++) {
					treeObj.checkNode(treeNodes[i].children[a], true, true);
				}
			}
		}
	}
	}else{
			if(treeNode.pId!==null){
				var treeNodeP;
				tressNodeP=treeNode.getParentNode();
				if (tressNodeP.check_Child_State==0){
					treeObj.checkNode(tressNodeP,false,false);
				
			}
		}
	}
} 



/**
 * 过滤查询需勾选的节点
 * @param node
 * @returns {Boolean}
 */
function filter(node){
		var flag;
		 for(i=0;i<globeData[0].jrole.length;i++){
	     flag=(node.id==globeData[0].jrole[i].roleId);
	     if(flag==true){
	    	 return flag;
	     }
		 }
		
	} 
