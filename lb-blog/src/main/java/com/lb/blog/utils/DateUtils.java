package com.lb.blog.utils;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.Locale;

public class DateUtils {
	
	//今天的日期,string
	public static String getTime(){
		  Calendar   cal   =   Calendar.getInstance();
		  cal.add(Calendar.DATE,   0);
		  String today = new SimpleDateFormat("yyyy年MM月dd日 HH:mm:ss").format(cal.getTime());
		  return today;
	}
	
	//获取前一天的日期，string格式
	public String getDateString(){
		  Calendar   cal   =   Calendar.getInstance();
		  cal.add(Calendar.DATE,   -1);
		  String date = new SimpleDateFormat("yyyyMMdd").format(cal.getTime());
	    return date;
	}
	
	//获取前一天的日期，日期格式
	public Date getDate(){
		Date date = null;
		Calendar   cal   =   Calendar.getInstance();
		  cal.add(Calendar.DATE,   -1);
		  String str = new SimpleDateFormat("yyyyMMdd").format(cal.getTime());
		  java.text.SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd", Locale.getDefault());
		try {
			date = sdf.parse(str);
		} catch (ParseException e) {
			e.printStackTrace();
		}
	    return date;
	}
	
	//获取当天的日期，日期格式
		public Date getcurrentDate(){
			Date date = null;
			Calendar   cal   =   Calendar.getInstance();
			  cal.add(Calendar.DATE,   0);
			  String str = new SimpleDateFormat("yyyyMMdd HH:mm:ss").format(cal.getTime());
			  java.text.SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd HH:mm:ss", Locale.getDefault());
			try {
				date = sdf.parse(str);
			} catch (ParseException e) {
				e.printStackTrace();
			}
		    return date;
		}
	
}
