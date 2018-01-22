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
	$
			.ajax({
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
						row += "<div><h3><a href=''>"
								+ globeData[i].pageTitle
								+ "</a></h3></div>"
								+ "<ul><p>"
								+ intro(globeData[i].pageContent)
								+ "</p>"
								+ "</ul>"
								+ "<p class='dateview'><span>"+globeData[i].insertTime+"</span></p>";
					}
					$("#page_rows").html("");
					$("#page_rows").prepend(row);
					pagehelper(data.totalElements, limit,globeData.length);
					

				}
			});
}