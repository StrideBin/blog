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
				row += "<div class='rows'><h3>"
						+ globeData[i].pageTitle + "</h3>" 
						+ "<ul><div style='display:inline'>"
						+ intro(globeData[i].intro) + "</div>"
						+ "<div style='display:none'>"
						+ globeData[i].pageContent + "<span style='margin-left:90%;font-size:18px;color:blue;cursor:pointer;'>收&nbsp&nbsp起</span></div></ul>"
						+ "<p class='dateview'><span>"
						+ globeData[i].insertTime + "</span></p></div>";
			}
			$("#page_rows").html("");
			$("#page_rows").prepend(row);
			pagehelper(data.totalElements, limit, globeData.length);

			$(".rows").click(function(){
				if($(this)[0].children[1].children[0].style.display=="inline"){
					$(this)[0].children[1].children[0].style.display="none";
				}
				if($(this)[0].children[1].children[1].style.display=="none"){
					$(this)[0].children[1].children[1].style.display="inline";
				}
			})
		}

	});
}
