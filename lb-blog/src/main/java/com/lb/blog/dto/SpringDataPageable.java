package com.lb.blog.dto;

import java.io.Serializable;

import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

/**
 * spring data 分页实现
 * 
 * @author shixiangwei
 * @date 2017/8/28
 */
@SuppressWarnings("serial")
public class SpringDataPageable implements Serializable, Pageable {
	private Integer pagenumber = 1;
	private Integer pagesize = 10;
	private Sort sort;

	@Override
	public int getPageNumber() {
		return getPagenumber();
	}

	@Override
	public int getPageSize() {
		return getPagesize();
	}

	@Override
	public int getOffset() {
		return (getPagenumber() - 1) * getPagesize();
	}

	@Override
	public Sort getSort() {
		return sort;
	}

	@Override
	public Pageable next() {
		return null;
	}

	@Override
	public Pageable previousOrFirst() {
		return null;
	}

	@Override
	public Pageable first() {
		return null;
	}

	@Override
	public boolean hasPrevious() {
		return false;
	}

	public Integer getPagenumber() {
		return pagenumber;
	}

	public void setPagenumber(Integer pagenumber) {
		this.pagenumber = pagenumber;
	}

	public Integer getPagesize() {
		return pagesize;
	}

	public void setPagesize(Integer pagesize) {
		this.pagesize = pagesize;
	}

	public void setSort(Sort sort) {
		this.sort = sort;
	}
}
