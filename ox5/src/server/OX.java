package server;

public class OX {
	/*ֽ��ţţ����߼�*/
	
    boolean  is5small(String size5_){//��Сţ
    boolean is=true;
	int sum=0;
	for (int i=1;i<=5;i++){//�Ƿ�ÿ������=4
	    char c=size5_.charAt(i-1);
		if (c<='4'&&c>='1');else
			is=false ;
		sum+=(c-'0');
	}
	if (sum>=10)  is=false ;
	return is;
    }
    
    
    
	boolean isJQK(String size5_){//5����ȫ��JQK
    boolean is=true;
	for(int i=1;i<=5;i++){
	    char c=size5_.charAt(i-1);
	    if (c<'b'||c>'d')
		    is=false;
	}
	return is;
	}

    
	boolean isAAAA(String size5_){//5������4����size��ͬ��
    int sum=0;
	for (int i=1;i<=4;i++){
	    for(int j=i+1;j<=5;j++){
		    if (size5_.charAt(i-1)!=size5_.charAt(j-1)){
			    sum+=1;
		    }
	    }
	}
	if (sum==4)  return true ;
	return false;
	}
    
	boolean can3to10(String size5_){//��3���������10�ı���
    boolean is=false;
    String s=size5_;
	int[] int5={0,0,0,0,0};
	for (int i=0;i<=4;i++)
	    if (s.charAt(i)<='9' && s.charAt(i)>='1') 
	       int5[i]=s.charAt(i)-'0';
	    else int5[i]=10 ;
	
	for(int i=1;i<=3;i++)
	    for(int j=i+1;j<=4;j++)
	        for(int k=j+1;k<=5;k++)
				if ((int5[i-1]+int5[j-1]+int5[k-1])% 10==0 )
                    is=true;	
	return is;
	}
    
	int whichox(String size5_){//ţ��
		String s=size5_;
		int[] int5={0,0,0,0,0};
	for (int i=0;i<=4;i++)
	    if (s.charAt(i)<='9'&&s.charAt(i)>='1')
	       int5[i]=s.charAt(i)-'0';
	    else int5[i]=10 ;
	
	int endint=((int5[0]+int5[1]+int5[2]+int5[3]+int5[4])%10);
	if(endint==0)endint=10 ;
	return endint;//  1->10
	}
    
	int[] update_pairank(String cardssize5X5){//���������Ѳ������ܷ�����
	//��� pai_rank=int[5]   0-13
	//���� cardssize5X5="1-d"*25
	//��С10(13) > �廨6(12) > �Ļ�5(11) > ţţ4(10) > ţ��3 ţ��2 ��ţ1 > ûţ0(0)������=pai_rank��
        int[] pai_rank={0,0,0,0,0};
	    for (int i=1;i<=5;i++){
		    String size5=cardssize5X5.substring(i*5-5,i*5);
			pai_rank[i-1]=0;
			if (is5small(size5)==true )
			    pai_rank[i-1]=13;
			else if (isJQK(size5)==true )
			    pai_rank[i-1]=12;
	        else if (isAAAA(size5)==true )
			    pai_rank[i-1]=11;
			else if (can3to10(size5)==true )
			    pai_rank[i-1]=whichox(size5);
	         		
			//now pai_rank=1->13
	    }
	    return pai_rank;
	}//function
}
