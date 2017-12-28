package com.lb.blog.dto;

import java.io.Serializable;

public class PageDto implements Serializable {

	private static final long serialVersionUID = -5465303343663044045L;
	
	private String pageTitle;
	private String pageContent;
	private String insertDate;
	public String getPageTitle() {
		return pageTitle;
	}
	public void setPageTitle(String pageTitle) {
		this.pageTitle = pageTitle;
	}
	public String getPageContent() {
		return pageContent;
	}
	public void setPageContent(String pageContent) {
		this.pageContent = pageContent;
	}
	public String getInsertDate() {
		return insertDate;
	}
	public void setInsertDate(String insertDate) {
		this.insertDate = insertDate;
	}
}
