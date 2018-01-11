package com.lb.blog.dto;

import java.io.Serializable;

public class PageDto implements Serializable {

	private static final long serialVersionUID = -5465303343663044045L;
	private String id;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	private String pageTitle;
	private String pageContent;
	private String insertTime;
	private String updateTime;
	private String imageAddr;
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
	public String getInsertTime() {
		return insertTime;
	}
	public void setInsertTime(String insertTime) {
		this.insertTime = insertTime;
	}
	public String getUpdateTime() {
		return updateTime;
	}
	public void setUpdateTime(String updateTime) {
		this.updateTime = updateTime;
	}
	public String getImageAddr() {
		return imageAddr;
	}
	public void setImageAddr(String imageAddr) {
		this.imageAddr = imageAddr;
	}
	@Override
	public String toString() {
		return "PageDto [id=" + id + ", pageTitle=" + pageTitle + ", pageContent=" + pageContent + ", insertTime="
				+ insertTime + ", updateTime=" + updateTime + ", imageAddr=" + imageAddr + "]";
	}
}
