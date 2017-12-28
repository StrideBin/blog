<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file='../../index.jsp'%>
<div class="travel-common-title" >
			<ul class="breadcrumb">
				<li>
					 <a href="http://localhost:8080/travel/backMenu.html">首页</a>
				</li>
				<li class="default">

					 <a>国家信息搜索</a>
				</li>
				
			</ul>
		</div>

	<div class="panel panel-default" id="searchinfo"style="margin-bottom: 10px" >
	<div class="panel-heading" >
	<a  href="#searchinfo11" class="nav-header" data-toggle="collapse" >
             <span class='glyphicon  glyphicon-edit edit'></span>             
                          数据查询
             <span class="pull-right glyphicon glyphicon-chevron-down"></span>
    </a>
    </div>
	
        <ul id="searchinfo11" class="nav nav-list collapse  secondmenu">
            <li>
	<div class="row-position1">
	<label for="code" class="col-xs-2 control-label">二字码</label>
	<div class="col-xs-3 ">
		<input type="text" class="form-control" id="code"
					name="code"  placeholder="请输入二字码">
	</div>
	<span class="col-xs-1"></span>
	<label for="name" class="col-xs-2 control-label">国家名</label>
	<div class="col-xs-3 ">
		<input type="text" class="form-control" id="name"
					name="name"  placeholder="请输入国家名">			
	</div>
	</div>
	<div class="row-position1">
	<label for="hqCode" class="col-xs-2 control-label">外编号</label>
	<div class="col-xs-3 ">
		<input type="text" class="form-control" id="hqCode"
					name="code"  placeholder="请输入外编码">
	</div>
	<span class="col-xs-1"></span>
	<label for="nameEn" class="col-xs-2 control-label">英文名</label>
	<div class="col-xs-3 ">
		<input type="text" class="form-control" id="nameEn"
					name="name"  placeholder="请输入英文名">			
	</div>
	</div>
     <div class="form-actions row" style="margin-top:20px;text-align:center;">
		<input type="button" class="btn btn-default" id="search" value="查询"/>
		<a href="<%=basePath%>/business/travel/country/addNew.jsp"><input type="button" class="btn btn-default"  value="新增"/></a>
	</div>
		</li>
          </ul>
	</div>
		

	
	<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog" style="width:800px">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true" id="close">
					&times;
				</button>
				<h4 class="modal-title" id="myModalLabel">
					修改信息
				</h4>
			</div>
			<div class="modal-body" >
	<form>
	<div class="form-group row" style="margin-left:50px;">
	<label for="code"  class="col-xs-2 control-label" style="margin-top:5px;">二字码</label>
	<div class="col-xs-3 ">
		<input type="text"  class="form-control"   readonly id="codeInput"
					name="code"  placeholder="">
	</div>
	<span class="col-xs-1"></span>
	<label for="name" class="col-xs-2 control-label"style="margin-top:5px;">国家名</label>
	<div class="col-xs-3 ">
		<input type="text" class="form-control" id="nameInput"
					name="name"  placeholder="请输入国家名">			
	</div>
	</div>
	<div class="form-group row"style="margin-left:50px;">
	<label for="hqCode" class="col-xs-2 control-label"style="margin-top:5px;">外编号</label>
	<div class="col-xs-3 ">
		<input type="text" class="form-control" id="hqCodeInput"
					name="code"  placeholder="请输入外编号">
	</div>
	<span class="col-xs-1"></span>
	<label for="nameEn" class="col-xs-2 control-label"style="margin-top:5px;">英文名</label>
	<div class="col-xs-3 ">
		<input type="text" class="form-control" id="nameEnInput"
					name="name"  placeholder="请输入英文名">			
	</div>
	</div>
	</form>
	<div style="text-align:center;">
				<button type="button" class="btn btn-primary" id="confirmedit">
					提交更改
				</button>
				</div>
		</div>	
		</div>
		</div><!-- /.modal-content -->
	</div><!-- /.modal -->
	
	<div class="modal fade" id="moreModal" tabindex="-1" role="dialog" aria-labelledby="moreModalLabel" aria-hidden="true">
	<div class="modal-dialog" style="width:800px">
		<div class="modal-content" >
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true" id="close">
					&times;
				</button>
				<h4 class="modal-title" id="myModalLabel">
					详细信息
				</h4>
			</div>
			<div class="modal-body" >
	<form>
	<div class="form-group row" style="margin-left:50px;">
	<label for="code"  class="col-xs-2 control-label" style="margin-top:5px;">二字码</label>
	<div class="col-xs-3 ">
		<input type="text"  class="form-control"   readonly id="codeMore"
					name="codeMore" >
	</div>
	<span class="col-xs-1"></span>
	<label for="name" class="col-xs-2 control-label" style="margin-top:5px;">国家名</label>
	<div class="col-xs-3 ">
		<input type="text" class="form-control" id="nameMore" readonly
					name="nameMore" >			
	</div>
	</div>
	<div class="form-group row"style="margin-left:50px;">
	<label for="hqCode" class="col-xs-2 control-label"style="margin-top:5px;">外编号</label>
	<div class="col-xs-3 ">
		<input type="text" class="form-control" id="hqCodeMore" readonly
					name="hqCodeMore" >
	</div>
	<span class="col-xs-1"></span>
	<label for="nameEn" class="col-xs-2 control-label"style="margin-top:5px;">英文名</label>
	<div class="col-xs-3 ">
		<input type="text" class="form-control" id="nameEnMore" readonly
					name="nameEnMore">			
	</div>
	</div>
		<div class="form-group row"style="margin-left:50px;">
	<label for="hqCode" class="col-xs-2 control-label"style="margin-top:5px;">拼音</label>
	<div class="col-xs-3 ">
		<input type="text" class="form-control" id="namePinyinMore" readonly
					name="namePinyinMore" >
	</div>
	<span class="col-xs-1"></span>
	<label for="nameEn" class="col-xs-2 control-label"style="margin-top:5px;">图标</label>
	<div class="col-xs-3 ">
		<input type="text" class="form-control" id="iconMore" readonly
					name="iconMore" >			
	</div>
	</div>
		<div class="form-group row"style="margin-left:50px;">
	<label for="hqCode" class="col-xs-2 control-label"style="margin-top:5px;">创建者</label>
	<div class="col-xs-3 ">
		<input type="text" class="form-control" id="creatorMore" readonly
					name="creatorMore" >
	</div>
	<span class="col-xs-1"></span>
	<label for="nameEn" class="col-xs-2 control-label"style="margin-top:5px;">创建时间</label>
	<div class="col-xs-3 ">
		<input type="text" class="form-control" id="createTimeMore" readonly
					name="createTimeMore" >			
	</div>
	</div>
			<div class="form-group row"style="margin-left:50px;">
	<label for="hqCode" class="col-xs-2 control-label"style="margin-top:5px;">签证</label>
	<div class="col-xs-3 ">
		<input type="text" class="form-control" id="visaDescMore" readonly
					name="visaDescMore" >
	</div>
	<span class="col-xs-1"></span>
	<label for="nameEn" class="col-xs-2 control-label"style="margin-top:5px;">备注</label>
	<div class="col-xs-3 ">
		<input type="text" class="form-control" id="contentDescMore" readonly
					name="contentDescMore" >			
	</div>
	</div>
	</form>
		</div>	
		</div>
		</div><!-- /.modal-content -->
	</div><!-- /.modal -->

	
<div class="panel panel-success dis5bottom" style="height:450px;overflow:auto;boarder:false;overFlow-y: 1px solid;">
			<div class="panel-heading" >
				列表信息
			</div>
			<table class="table table-bordered table-striped table-hover countryDetail" >
			<thead>
				<tr >

					<th id="codeOrder" style="width:20%">二字码<span class="pull-right glyphicon glyphicon-chevron-down"></span></th>
					<th id="hqCodeOrder" style="width:20%">外编号<span class="pull-right glyphicon glyphicon-chevron-down"></span></th>
					<th id="nameOrder" style="width:20%">中文名<span class="pull-right glyphicon glyphicon-chevron-down"></span></th>
					<th id="nameEnOrder" style="width:20%">英文名<span class="pull-right glyphicon glyphicon-chevron-down"></span></th>
					<th style="width:20%">操作</th>
				</tr>
			</thead>
			<tbody></tbody>
		</table>
			</div>
			
		<ul class="pagination"style="margin-left: 0px;" >
		  
		</ul>
		

	

<link rel="stylesheet" type="text/css"
	href="<%=basePath%>/business/travel/country/css/search.css" />
<link rel="stylesheet" type="text/css"	
	href="<%=basePath%>/common/css/bootstrap/css/bootstrap.min.css" />
<link rel="stylesheet" type="text/css"
	href="<%=basePath%>/common/css/bootstrap/css/bootstrap-theme.min.css" />
<script type="text/javascript"
	src="<%=basePath%>/business/travel/country/js/search.js"></script>
<link rel="stylesheet" type="text/css"
    href="<%=basePath%>/common/css/xcConfirm.css">
<script type="text/javascript"
	src="<%=basePath%>/common/js/xcConfirm.js"></script> 
