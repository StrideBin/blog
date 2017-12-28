$(function(){

	var params= {};
		$.ajax({
			type: "post",
			url:"http://localhost:8082/lb-blog/main/searchPaper",
			dataType : "json",
			contentType : "application/json",
			data : JSON.stringify(params), 
			timeout : 60000,
			global : false,
			error : function(data) {
				console.info(data);
			},
			success : function(data) {
				var content=data.content;
				var row="";
				for (var i = 0; i < content.length; i++) {
					  row+="<div><h3><a href=''>"+content[i].pageTitle+"</a></h3></div>"
					     +"<ul><p>"+content[i].pageContent+"</p>"
				         +"<a id='readmore' title='"+content[i].pageTitle+"' href='' target='_blank' class='readmore'>阅读全文&gt;&gt;</a>"
				         +"</ul>"
				      	 +"<p class='dateview'><span id='"+content[i].insertDate+"'></span><span>个人博客：[<a href='/jstt/bj/'>心得笔记</a>]</span></p>"
				}
				 $("#page_rows").prepend(row);			

			}
		});
	
		 	pagehelper(10,10);
			// Navigation Menu
			$(function() {
				$(".menu ul").css({display: "none"}); // Opera Fix
				$(".menu li").hover(function(){
					$(this).find('ul:first').css({visibility: "visible",display: "none"}).slideDown("normal");
				},function(){
					$(this).find('ul:first').css({visibility: "hidden"});
				});
			});
	
});