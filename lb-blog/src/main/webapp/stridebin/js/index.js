var limit=10;//数据库查询条数 就是查询的这页有多少条 *

var showPage=5;//初始化显示页数  就是页面初始化时候下面分页的项有多少个 比如showPage为4 则下面显示1-4页

var pageId=1;//当前页码 当前在第几页 页面初始化时 从第一页开始查 *

var startPage=1;//当前起始页 就是当前的页码从几开始  如果填2 就是2 3 4 5 6 这样

var endPage=showPage;//当前最后页

/**
 * 
 * @param count 数据库中总数据数
 * @param lmt   限制每次查询(每页)的条数
 * @param dataLength 实际查出的数据量  dataL<=lmt
 */
function pagehelper(count,lmt,dataL){
	

	 $(".pagination").html("");
	 //如果总数<=预计查出每页的条数
	 if(count<=lmt){
		 startPage=1;
	 }
	 var pages="";
	 var startLength=(pageId-1)*lmt+1;
	 var endLength=startLength+dataL-1;
	 if(dataL==0){
		 startLength=0;
		 endLength=0;
	 }
	
	 pages+="<li id='firstPage'><a data-original-title='' title=''>首页</a></li><li class='disabled'></li><li><a href='#' class='prePage'>&laquo;</a></li>";
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
	 pages+=" <li><a href='#' class='nextPage'>&raquo;</a></li><li id='lastPage'><a href='#'>末页</a></li>"
	 
	 pages+="<li><select class='form-control' style='width:70px;float:left' id='pageSelect'><option value="+limit+">"+limit+"</option><option value=10>10</option><option value=20>20</option><option value=50>50</option></select></li></ul>"
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

	searchFormSubmit();
	$(function() {
		$(".menu ul").css({
			display : "none"
		}); // Opera Fix
		$(".menu li").hover(function() {
			$(this).find('ul:first').css({
				visibility : "visible",
				display : "none"
			}).slideDown("normal");
		}, function() {
			$(this).find('ul:first').css({
				visibility : "hidden"
			});
		});
	});
});
function searchFormSubmit() {
	var params = {
		"pagenumber" : pageId,
		"pagesize" : limit,
	};

	$.ajax({
		type : "post",
		url : "http://localhost:8082/lb-blog/main/searchPaper",
		dataType : "json",
		contentType : "application/json",
		data : JSON.stringify(params),
		timeout : 60000,
		global : false,
		error : function(data) {
			console.info(data);
		},
		success : function(data) {
			var globeData = data.content;
			var row = "";
			for (var i = 0; i < globeData.length; i++) {
				row += "<div class='rows' style='margin-top:20px'><h3>"
						+ globeData[i].pageTitle + "</h3>" 
						+ "<ul><div style='display:inline'>"
						+ intro(globeData[i].intro) + "</div>"
						+ "<div style='display:none'>"
						+ globeData[i].pageContent +"</div></ul>"
						+ "<p class='dateview'><span>"
						+ globeData[i].insertTime + "</span></p></div>";
			}
			$("#page_rows").html("");
			$("#page_rows").prepend(row);
			pagehelper(data.totalElements, limit, globeData.length);

			$(".rows").dblclick(function(){
				if($(this)[0].children[1].children[1].style.display=="inline"&&$(this)[0].children[1].children[0].style.display=="none"){
					$(this)[0].children[1].children[0].style.display="inline";
					$(this)[0].children[1].children[1].style.display="none";
				}else{
					$(this)[0].children[1].children[1].style.display="inline";
					$(this)[0].children[1].children[0].style.display="none";
				}
			})
		}

	});
}
