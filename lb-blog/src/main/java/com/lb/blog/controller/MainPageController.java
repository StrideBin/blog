package com.lb.blog.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.lb.blog.dto.PageDto;
import com.lb.blog.dto.SpringDataPageable;
import com.lb.blog.service.page.PageService;

/**
 * 创建人: lb 日期:2017年12月21日
 */
@Controller
@RequestMapping("/main")
public class MainPageController {

	@Autowired
	private PageService pageService;
	@ResponseBody																	//如果不标注 前端ajax接收不到返回值
	@RequestMapping(value = "/searchPaper", method = RequestMethod.POST)
	public Object searchPaper(@RequestBody SpringDataPageable springDataPageable) { 						// @RequestBody 将前端的值转为json对象接收
		Page<PageDto> page=pageService.queryAll(springDataPageable);
		return page;
	}
	@ResponseBody																	//如果不标注 前端ajax接收不到返回值
	@RequestMapping(value = "/addPaper", method = RequestMethod.POST)
	public Object addPaper(@RequestBody PageDto pageDto) {
		return pageService.insertPage(pageDto);
	}
}
