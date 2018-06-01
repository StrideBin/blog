package com.lb.blog.utils;

public class Encrypt {
	public static void main(String[] args) {
		
		String secret_key="liubin";
		
		String nub="0123456789";
		String l_letter="abcdefghijklmnopqrstuvwsyz";
		String h_letter="ABCDEFGHIJKLMNOPQRSTUVWSYZ";
		String sign="~!@#$%^&*()";
		String all=nub+l_letter+h_letter+sign;
		/**
		 * 三位数字 三位小写 三位大写 一位特殊符号
		 * 把key 变为一个10位的index
		 * 如果出现其他字符就删掉
		 * 判断key小于10位的情况
		 * 小于10位则按正序补全10位
		 * 大于十位将多出的位数舍弃
		 * 每一位的都代表一个净数 净数的大小为在对应字符串的index
		 * 数字符号和字母出现的顺序按照秘钥对应index在总index中的比值决定
		 * 队列满值则关闭对应队列的匹配
		 */
			String nkey="";
			for (int j = 0; j < secret_key.length(); j++) {
				if(all.indexOf(secret_key.charAt(j))!=-1){
					nkey+=secret_key.charAt(j);
				}
			}
		
		int s_l=nkey.length();
		while(s_l<10){
			nkey+=nkey.substring(0,10-s_l);
			s_l=nkey.length();
		}
		nkey=nkey.substring(0,10);
		int nb[]=new int[10];
		for (int i = 0; i < 10; i++) {
			nb[i]=all.indexOf(nkey.charAt(i));
		}
		String opt="";
		
	}
	
	
}
