<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<link rel="stylesheet" type="text/css" href="./bootstrap.min.css" />
<link rel="stylesheet" type="text/css" href="./index.css" />
<script type="text/javascript" src="./jquery.min.js"></script>
<script type="text/javascript" src="./bootstrap.min.js"></script>
<script type="text/javascript" src="./canvas.js"></script>

<title>canvas</title>
</head>
<body>
<div style="position:absolute;z-index:1"><canvas id="canvas" style="width:97%;height:97%" width="1920" height="974"></canvas></div>
</body>
<script>
			//定义画布宽高和生成点的个数
			var WIDTH = window.innerWidth, HEIGHT = window.innerHeight, POINT = 24;
			
			var canvas = document.getElementById('canvas');
			canvas.width = WIDTH,
			canvas.height = HEIGHT;
			var context = canvas.getContext('2d');
			context.strokeStyle = 'rgba(0,0,0,0.02)',
			context.strokeWidth = 1,
			context.fillStyle = 'rgba(255,255,255,0.08)';
			var circleArr = [];
	
			//调用执行
			window.onload = function () {
				
				init();
				setInterval(function () {
					for (var i = 0; i < POINT; i++) {
						var cir = circleArr[i];
						cir.x += cir.moveX;
						cir.y += cir.moveY;
						if (cir.x > WIDTH) cir.x = 0;
						else if (cir.x < 0) cir.x = WIDTH;
						if (cir.y > HEIGHT) cir.y = 0;
						else if (cir.y < 0) cir.y = HEIGHT;
						
					}
					draw();
				}, 16);
			}
		
			
</script>	
</html>