package server;

public class WEBWIDTH {
/*加密与流量压缩*/
public char BOOLEAN6toCHAR(boolean[] bbb){
	int a=0;
	a+=(bbb[0]==true?1:0)*32;
	a+=(bbb[1]==true?1:0)*16;
	a+=(bbb[2]==true?1:0)*8;
	a+=(bbb[3]==true?1:0)*4;
	a+=(bbb[4]==true?1:0)*2;
	a+=(bbb[5]==true?1:0)*1;
	//now a:0-63
	a+=23;
	//now a:23-86
	char c=(char) a;
	return c;
} 
private char oneINT2toCHAR(int[] aa){
	int a=aa[0]*10+aa[1];
	//now a:0-99
	a+=23;
	//now a:23-122
	char c=(char)a;
	//System.out.println("char:"+c);
	return c;
}
public String INTtoString(int a){
	//System.out.println("INTtoSTRING begin");
	String s="";
	do{
		//System.out.println(a);
		int h=a%100;//System.out.println(a);
		a=a/100;//System.out.println(100000/100);
		//System.out.println(a);
		int[] hh={0,0};
		hh[0]=h/10;
		hh[1]=h%10;
		s=oneINT2toCHAR(hh)+s;
		//System.out.println(a);
		//System.out.println(s);
	}while(a>0);
	//System.out.println("INTtoSTRING end");
	return s;
}
}
