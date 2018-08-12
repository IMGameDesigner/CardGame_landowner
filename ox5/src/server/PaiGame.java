package server;

public class PaiGame {
String INT52_ARRAY_to_PaiSize_Char1tod_ARRAY(int[] aaa){
	//int(1~52)的数组 变为 char('1'~'9','a'~'d')的数组
	int l=aaa.length;
	String s="";
	String pais="123456789abcd";
	for(int i=0;i<=l-1;i++){
		s+=pais.charAt((aaa[i]-1)%13+1-1);
	}
	return s;
}
}
