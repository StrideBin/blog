package com.lb.blog.service.page;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.domain.Sort.Order;
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
	public Page<PageDto> queryAll() {
		SpringDataPageable pageable = new SpringDataPageable();
		Query query = new Query();
		List<Order> orders = new ArrayList<Order>();
		orders.add(new Order(Direction.DESC, "updateDate"));
		Sort sort = new Sort(orders);
		pageable.setPagenumber(1);
		pageable.setPagesize(10);
		pageable.setSort(sort);
		Long count = mongoTemplate.count(query, PageDto.class, "page");
		List<PageDto> list = mongoTemplate.find(query.with(pageable), PageDto.class, "page");
		Page<PageDto> pagelist = new PageImpl<PageDto>(list, pageable, count);
		return pagelist;
	}
	
}
