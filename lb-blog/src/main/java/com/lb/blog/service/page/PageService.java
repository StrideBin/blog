package com.lb.blog.service.page;

import org.springframework.data.domain.Page;

import com.lb.blog.dto.PageDto;
import com.lb.blog.dto.SpringDataPageable;

/**
 * 创建人: lb  日期:2017年4月10日 下午4:59:45
 */

public interface PageService {
	
	public Page<PageDto> queryAll(SpringDataPageable springDataPageable);
}
