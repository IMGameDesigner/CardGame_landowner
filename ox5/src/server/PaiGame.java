package server;

public class PaiGame {
String INT52_ARRAY_to_PaiSize_Char1tod_ARRAY(int[] aaa){
	//int(1~52)������ ��Ϊ char('1'~'9','a'~'d')������
	int l=aaa.length;
	String s="";
	String pais="123456789abcd";
	for(int i=0;i<=l-1;i++){
		s+=pais.charAt((aaa[i]-1)%13+1-1);
	}
	return s;
}
}
