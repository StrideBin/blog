package com.lb.blog.service.page;

import java.util.List;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import com.lb.blog.dto.PageDto;
import com.lb.blog.dto.SpringDataPageable;

/**
 * 创建人: lb  日期:2017年4月10日 下午4:59:45
 */
@Service("PageService")
public class PageServiceImpl implements PageService{
	
	@Autowired
    public MongoTemplate mongoTemplate;

	@Override
	public Page<PageDto> queryAll(SpringDataPageable pageable) {
		Query query = new Query();
		Long count = mongoTemplate.count(query, PageDto.class, "page");
		List<PageDto> list = mongoTemplate.find(query.with(pageable), PageDto.class, "page");
		Page<PageDto> pagelist = new PageImpl<PageDto>(list, pageable, count);
		return pagelist;
	}
	/**
	 * 数据插入之后会在原对象生产obj id
	 */
	@Override
	public boolean insertPage(PageDto pageDto) {
		mongoTemplate.insert(pageDto);
		if(StringUtils.isNotEmpty(pageDto.getId())){
			return true;	
		}else{
			return false;
		}
		
	}
	
}
