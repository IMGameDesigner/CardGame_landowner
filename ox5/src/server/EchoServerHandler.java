package server;  
  
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Random;
import server.BY;
import io.netty.buffer.Unpooled;  
import io.netty.channel.Channel;
import io.netty.channel.ChannelFutureListener;  
import io.netty.channel.ChannelHandlerContext;  
import io.netty.channel.ChannelHandler.Sharable;  
import io.netty.channel.SimpleChannelInboundHandler;
import io.netty.handler.codec.http.websocketx.TextWebSocketFrame;
import io.netty.handler.timeout.IdleStateEvent;
import io.netty.util.ReferenceCountUtil;
  
@Sharable//注解@Sharable可以让它在channels间共享  
public class EchoServerHandler extends SimpleChannelInboundHandler<TextWebSocketFrame> {  

	int myroom=-1;
	int mysofa=-1;

	//--------------------------------------------------------------------
	//处理意外断开导致的内存残留【begin】
	public void userEventTriggered(ChannelHandlerContext ctx, Object evt)
			throws Exception {
		if (evt instanceof IdleStateEvent) {
			ctx.writeAndFlush(Unpooled.EMPTY_BUFFER) //flush掉所有写回的数据  
	        .addListener(ChannelFutureListener.CLOSE); // ctx.close();?
			System.out.println("room:"+myroom+" sofa:"+mysofa+" close 1");
			link_close();
		} else {
			//super.userEventTriggered(ctx, evt);//netty5 心跳检测   此句删掉后未测试
		}
	}
	public void channelInactive(ChannelHandlerContext ctx) throws Exception {
		System.out.println("room:"+myroom+" sofa:"+mysofa+" close 2");
        ctx.writeAndFlush(Unpooled.EMPTY_BUFFER) //flush掉所有写回的数据  
        .addListener(ChannelFutureListener.CLOSE); // ctx.close();?
        link_close();
	}
    public void handlerRemoved(ChannelHandlerContext ctx) throws Exception {
    	System.out.println("room:"+myroom+" sofa:"+mysofa+" close 3");
    	ctx.writeAndFlush(Unpooled.EMPTY_BUFFER) //flush掉所有写回的数据  
        .addListener(ChannelFutureListener.CLOSE); //当flush完成后关闭channel 
    	link_close();
	}
    public void close(ChannelHandlerContext ctx){//<权威指南p411>
    	System.out.println("room:"+myroom+" sofa:"+mysofa+" close 4");
    	ctx.close();
    	link_close();
    }
    public void exceptionCaught(ChannelHandlerContext ctx,Throwable cause) {   
        try {
			super.exceptionCaught(ctx, cause);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
        Channel channel = ctx.channel();
        //……
        if(channel.isActive()){
        	System.out.println("room:"+myroom+" sofa:"+mysofa+" close 5");
        	ctx.close();
        	link_close();
        }
    }
    //处理意外断开导致的内存残留【end】
    //--------------------------------------------------------------------
    public void channelActive(ChannelHandlerContext ctx) {

    }
    public void channelRead0(ChannelHandlerContext ctx,TextWebSocketFrame msg) throws Exception {
        try {
            String body=msg.text();
            System.out.println("get data:"+body);
    		String[] allbody = body.split("}");//防沾包
    		for (int iall = 0; iall <= allbody.length-1; iall++) {
    		body=allbody[iall];
            //============================================================================
            //============================================================================
            if(body.charAt(0)=='R'){
            	//System.out.println("BY.timer[myroom][mysofa]"+BY.timer[myroom][mysofa]);
            	//System.out.println("BY.readyed[myroom][mysofa]"+BY.readyed[myroom][mysofa]);
            	//System.out.println("myroom"+myroom);
            	//System.out.println("mysofa"+mysofa);
            	if(BY.timer[myroom][0]<100&&BY.readyed[myroom][mysofa]==false){
            		//System.out.println("-----------------------------------------------get ready");
            	    BY.readyed[myroom][mysofa]=true;
            	    BY.roomready[myroom]++;
            	    for(int imt=0;imt<=4;imt++)BY.changed_me_them[myroom][imt][mysofa]=true;
            	}
            }else
            //============================================================================
            //============================================================================
            if(body.charAt(0)=='Q'){
            	//System.out.println("BY.timer[myroom][0]"+BY.timer[myroom][0]);
            	if(BY.timer[myroom][0]<300&&BY.timer[myroom][0]>200){
            
                    BY.P_qianged[myroom][mysofa]=true;
                    for(int imt=0;imt<=4;imt++)BY.changed_qiang[myroom][imt][mysofa]=true;
            	}
            }else
            //============================================================================
            //============================================================================
            //sleep 0.05 client主动的即时沟通
            if(body.charAt(0)=='T'){
            	System.out.println("get T");
            	//----------------------------------------------------
            	//部分时间系统
            	if(myroom!=-1){
            		if(BY.roomready[myroom]<=1){
            			//System.out.println("BY.roomready[myroom:"+myroom+"]:"+BY.roomready[myroom]);
            			BY.timer[myroom][0]=0;
            		}else{
                    //System.out.println("t:"+BY.timer[myroom][0]+":"+BY.timer[myroom][1]);
            		BY.timer[myroom][1]++;//小时间加
            		if(BY.roomperson[myroom]<=BY.timer[myroom][1]){//判断是否增加大时间
            		
                	    BY.timer[myroom][0]++;//大时间加
                	    BY.timer[myroom][1]=0;//-=BY.roomperson[myroom];(为了处理不能==)//小时间归0
                	    //--下注10s / 0.05s = 200
                	    //--发牌3s  /0.05s=60 -> 260
            			//--开牌12s / 0.05s = 240 ->500
            			//--结束6s / 0.05s = 120 ->620
                	    if(BY.timer[myroom][0]==600){//大时间过界归0
                	    	toFirst();
                	    	update_changed();
                	    }
                	    if(BY.timer[myroom][0]==101){//系统知道牌
                	    	//刷新牌：     此发牌算法容易实现，但大于一副牌
                	    	for(int i_pai=0;i_pai<=24;i_pai++)BY.cards5X5[myroom][i_pai]=
                	    			1+(int)(Math.random()*52);
                	    }
                	    if(BY.timer[myroom][0]==102){//通知每个人拿自己的牌
                	    	for(int i=0;i<=4;i++)BY.changed_self_pai[myroom][i]=true;
                	    }
                	    if(BY.timer[myroom][0]==301){//确定庄家
                	    	
                	    	
                	    		int readysum=0;
                	    	    int qiangsum=0;
                	    	    int[] whoReady={0,0,0,0,0};
                	    	    int[] whoQ={0,0,0,0,0};
                	    	    for(int i=0;i<=4;i++)
                	    	    	if(BY.readyed[myroom][i]){
                	    	    		readysum++;
                	    	    		whoReady[readysum-1]=i;
                	    	    	}
                	    	    for(int i=0;i<=4;i++){
                	    	    	System.out.println("BY.P_qianged[myroom][i]"+BY.P_qianged[myroom][i]);
                	    	    	System.out.println("BY.readyed[myroom][i]"+BY.readyed[myroom][i]);
                	    	    	if(BY.P_qianged[myroom][i]&&BY.readyed[myroom][i])
                	    	    	{
                	    	    		System.out.println("qiang sum ++");
                	    	    		qiangsum++;
                	    	    		whoQ[qiangsum-1]=i;
                	    	    	}
                	    	    }
                	    	    if(qiangsum==0){
                	    		    BY.zhuang[myroom]=whoReady[new Random().nextInt(readysum)];
                	    		    System.out.println("no person qiang ;zhuang:"+BY.zhuang[myroom]);
                	    	    }else{
                	    		    BY.zhuang[myroom]=whoQ[new Random().nextInt(qiangsum)];
                	    		    System.out.println("have person qiang ;zhuang:"+BY.zhuang[myroom]);
                	    	    }
                	    	

                	    	for(int i=0;i<=4;i++)BY.changed_zhuang[myroom][i]=true;
                	    	for(int i=0;i<=4;i++)BY.P_qianged[myroom][i]=false;
                	    	for(int i=0;i<=4;i++)
                	    		for(int j=0;j<=4;j++)
                	    			BY.changed_qiang[myroom][i][j]=true;
                	    	
                	    }
                	    if(BY.timer[myroom][0]==302){//通知每个人拿全部的牌
                	    	for(int i=0;i<=4;i++)BY.changed_sys_pai[myroom][i]=true;
                	    }
                	    if(BY.timer[myroom][0]==305){//计算是什么牛
                	    	OX ox=new OX();
                	    	PaiGame PG=new PaiGame();
                	    	BY.ox_rank[myroom]=
                	    			ox.update_pairank(
                	    					PG.INT52_ARRAY_to_PaiSize_Char1tod_ARRAY(BY.cards5X5[myroom]));
                	    }
                	    if(BY.timer[myroom][0]==310){//金钱修改
                	    	int[] ox_bei={0
                	    			   ,1//--1 ox1
                	    			   ,1//--2 ox2
                	    			   ,1//--3 ox3
                	    			   ,1//--4 ox4
                	    			   ,1//--5 ox5
                	    			   ,1//--6 ox6
                	    			   ,1//--7 ox7
                	    			   ,2//--8 ox8
                	    			   ,3//--9 ox9
                	    			   ,4//--10 oxox
                	    			   ,5//--11 炸弹
                	    			   ,6//--12 五花
                	    			   ,10};//--13 五小
                	    	for(int i=0;i<=4;i++)if(i!=BY.zhuang[myroom]&&BY.readyed[myroom][i])
                	    	{
                	    		if(BY.ox_rank[myroom][i]>BY.ox_rank[myroom][BY.zhuang[myroom]]){
                	    			int money=BY.P_gived_money[myroom][i]*ox_bei[BY.ox_rank[myroom][i]];
                	    			if(BY.P_money[myroom][i]>0)BY.P_money[myroom][i]+=money;
                	    			if(BY.P_money[myroom][BY.zhuang[myroom]]>0)
                	    				BY.P_money[myroom][BY.zhuang[myroom]]-=money;
                	    		}
                	    		else
                	    		if(BY.ox_rank[myroom][i]<BY.ox_rank[myroom][BY.zhuang[myroom]]){
                	    			int money=BY.P_gived_money[myroom][i]*ox_bei[BY.ox_rank[myroom][BY.zhuang[myroom]]];
                	    			if(BY.P_money[myroom][i]>0)BY.P_money[myroom][i]-=money;
                	    			if(BY.P_money[myroom][BY.zhuang[myroom]]>0)
                	    				BY.P_money[myroom][BY.zhuang[myroom]]+=money;
                	    		}
                	    		else
                	    		if(BY.ox_rank[myroom][i]==BY.ox_rank[myroom][BY.zhuang[myroom]]){
                	    		}
                	    	}
                	    }
                	    if(BY.timer[myroom][0]==315){//金钱修改数据库
                    		try {
                    			Class.forName("com.mysql.jdbc.Driver");
                    			String url = "jdbc:mysql://localhost:3306/ws?characterEncoding=utf-8";//^^^fix
                    			String username = "root";//^^^fix
                    			String sqlpassword = "1111";//^^^fix
            					//修改：
        						Connection conn2 = DriverManager.getConnection(url,username,sqlpassword);
        			            Statement stmt2 = conn2.createStatement();	
        					String sql = "update ox12 set money=? where id=?";//where pingfen<=? and pingci>=?";
        					// 获取PreparedStatement
        					PreparedStatement ps = conn2.prepareStatement(sql);
        					// 对SQL语句中的第一个参数赋值
        					ps.setInt(1,BY.P_money[myroom][mysofa]);
        					// 对SQL语句中的第二个参数赋值
        					ps.setInt(2,BY.P_id[myroom][mysofa]);
        					// 执行更新操作
        					ps.executeUpdate();
        					//修改结束
        					conn2.close();stmt2.close();ps.close();
                    		} catch (ClassNotFoundException e) {
                    			e.printStackTrace();
                    		} catch (SQLException e) {
                    			e.printStackTrace();
                    		}
                	    }
                	    if(BY.timer[myroom][0]==480){//通知用户接收修改后的数据
        	    			for(int i=0;i<=4;i++)
        	    				for(int j=0;j<=4;j++)
        	    					BY.changed_me_them[myroom][i][j]=true;
                	    }
            		}
            		}
            	}
            	//----------------------------------------------------
            	if(myroom!=-1){
        		//----------------------------------------------------
        		//将信息传回client
            	ctx.writeAndFlush(new TextWebSocketFrame("T"+BY.timer[myroom][0]+"}"));
            	//System.out.println("send T ： "+BY.timer[myroom][0]);
        		//----------------------------------------------------
            	WEBWIDTH webwidth=new WEBWIDTH(); 
            	int bingfa=0;
            	//System.out.println("send T end");
        		//----------------------------------------------------
        		//将信息传回client
            	if(BY.changed_sys_pai[myroom][mysofa]&&bingfa==0)
        		{
            		bingfa++;
            		BY.changed_sys_pai[myroom][mysofa]=false;
        			{
                		//----------------------------------------------------------
            			String cards_="";
            			for(int i=0;i<=24;i++)cards_+=
            					(webwidth.INTtoString(BY.cards5X5[myroom][i]));
            			//----------------------------------------------------------
        	    	ctx.writeAndFlush(new TextWebSocketFrame("S"+cards_+"}"));
        			}
        		}
        		//----------------------------------------------------
        		//----------------------------------------------------
        		//将信息传回client
            	for(int i_=0;i_<=4;i_++)
            		if(BY.changed_qiang[myroom][mysofa][i_]&&bingfa==0)
        		{
            		bingfa++;
            		BY.changed_qiang[myroom][mysofa][i_]=false;
        	    	ctx.writeAndFlush(new TextWebSocketFrame("q"+(BY.P_qianged[myroom][i_]==true?1:0)+(i_+1)+"}"));
        		}
        		//----------------------------------------------------
        		//----------------------------------------------------
        		//将信息传回client
            		if(BY.changed_zhuang[myroom][mysofa]&&bingfa==0)
        		{
            			bingfa++;
            		BY.changed_zhuang[myroom][mysofa]=false;
        	    	ctx.writeAndFlush(new TextWebSocketFrame("z"+(BY.zhuang[myroom]+1)+"}"));
        		}
        		//----------------------------------------------------
        		//----------------------------------------------------
        		//将信息传回client
            	if(BY.changed_self_pai[myroom][mysofa]&&bingfa==0)
        		{
            		bingfa++;
            		BY.changed_self_pai[myroom][mysofa]=false;
        			{
                		//----------------------------------------------------------
            			String cards_="";
            			for(int i=mysofa*5;i<=mysofa*5+4;i++)cards_+=
            					(webwidth.INTtoString(BY.cards5X5[myroom][i]));
            			//----------------------------------------------------------
        	    	    ctx.writeAndFlush(new TextWebSocketFrame("A"+cards_+"}"));
        			}
        		}
        		//----------------------------------------------------
        		//----------------------------------------------------
        		//将信息传回client
            	for(int i_=0;i_<=4;i_++)
            		if(BY.changed_me_them[myroom][mysofa][i_]&&bingfa==0)
        		{
            			bingfa++;
            			System.out.println("room:"+myroom+" sofa:"+mysofa+" get person begin"+i_);
            		BY.changed_me_them[myroom][mysofa][i_]=false;
        			{
        				
            			//----------------------------------------------------------
            			String link_ready_=(""+(BY.socket_link[myroom][i_]==true?1:0))
            			+(""+(BY.readyed[myroom][i_]==true?1:0));
            			//----------------------------------------------------------
            			
            			//----------------------------------------------------------
            			String money_=""+(webwidth.INTtoString(BY.P_money[myroom][i_]));
            			//----------------------------------------------------------
            			
            			//----------------------------------------------------------
            			String name_=""+(BY.P_name[myroom][i_]);
            			//----------------------------------------------------------
            			//----------------------------------------------------------
            			String photo_=""+(webwidth.INTtoString(BY.P_photo[myroom][i_]));
            			//----------------------------------------------------------
            	    ctx.writeAndFlush(new TextWebSocketFrame("P"+
            			    (i_+1)+"\n"+
            	    		link_ready_+"\n"+
            	    		money_+"\n"+// 
            	    		name_+"\n"+// 
            	    		photo_+"\n"+// 
            	    		"}"));
        			}
        			System.out.println("room:"+myroom+" sofa:"+mysofa+" get person end"+i_);
        		}
        		//----------------------------------------------------
            	}//room==-1
            }else
            //============================================================================
            //============================================================================
            if(body.charAt(0)=='1'){//  新连接第一条   登录
            	String body2=body.substring(1, body.length());//：取0位后面的
            	System.out.println(body2);
            	String[] all1 = body2.split("~");//得到分解后的字符串数组
            	String id=all1[0];
            	String password=all1[1];
            	//----------------------------------------------------
            	//判断 password is true？
            	boolean passwordistrue=true;
            	int id_=0;
            	String name_="";
            	int money_=0;
        		try {
        			Class.forName("com.mysql.jdbc.Driver");
        			String url = "jdbc:mysql://localhost:3306/ws?characterEncoding=utf-8";//^^^fix
        			String username = "root";//^^^fix
        			String sqlpassword = "1111";//^^^fix
        			Connection conn = DriverManager.getConnection(url,username,sqlpassword);
        			Statement stmt = conn.createStatement();
        			String sql = "select * from ox12 where id="+id+" and password='"+password+"' ";//^^^fix
        			ResultSet rs = stmt.executeQuery(sql);
        			if(!rs.next()){
        				passwordistrue=false;
        				System.out.println("mistake password:"+password);
        				System.out.println("mistake id:"+id);
        			}else{
        				id_=rs.getInt("id");
        				name_=rs.getString("name");
        				money_=rs.getInt("money");
        			}
        			rs.close();		
        			stmt.close();	
        			conn.close();	
        		} catch (ClassNotFoundException e) {
        			e.printStackTrace();
        		} catch (SQLException e) {
        			e.printStackTrace();
        		}
            	//----------------------------------------------------
            	//----------------------------------------------------
            	//如果用户名密码正确
            	if(passwordistrue){
            		//--------------------
            		//获取房间和座位
            		int room=-1;
            		int sofa=-1;
            		for(int i=0;i<=1999;i++)if(room==-1&&sofa==-1)
            			for(int j=0;j<=4;j++)if(room==-1&&sofa==-1){
            				if(BY.roomperson[i]==0){//获取全部逃走的房间的位子
            					room=i;
            					sofa=j;
            				}else
            				if((!BY.socket_link[i][j])&&(!BY.readyed[i][j])){//获取没有[人]也没有[掉线代理机器人]的位子
            					room=i;
            					sofa=j;
            				}
            			}
            		//--------------------
            		//--------------------
            		//本链接获得房间和座位
            		myroom=room;
            		mysofa=sofa;
            		System.out.println("-----------------room:"+room);
            		System.out.println("-----------------sofa:"+sofa);
            		//--------------------
            		//--------------------
            		//房间人数加，房间链接加
            		if(BY.roomperson[myroom]==0){//如果[第一次]进入了一个全部是[掉线代理机器人]的房间
            			toFirst();
            		}
            		BY.roomperson[myroom]++;
            		BY.socket_link[myroom][sofa]=true;
            		//--------------------
            		System.out.println("room:"+myroom+" sofa:"+mysofa+" 1");
            		//--------------------
            		//获取个人信息：
            		BY.P_id[myroom][mysofa]=id_;
            		BY.P_money[myroom][mysofa]=money_;
            		BY.P_name[myroom][mysofa]=name_;
            		BY.P_photo[myroom][mysofa]=1+(int)(Math.random()*4);
                	//--------------------
            		System.out.println("room:"+myroom+" sofa:"+mysofa+" 2");
            		//--------------------
            		//通知房间里的所有人我的位子的状态变了
            		for(int i=0;i<=4;i++)
                		BY.changed_me_them[myroom][i][mysofa]=true;
            		//--------------------
            		System.out.println("room:"+myroom+" sofa:"+mysofa+" 3");
                	//--------------------
            		//往client发送  房间、座位
                	ctx.writeAndFlush(new TextWebSocketFrame("3"+(room+1)+"~"+(sofa+1)+"}"));
                	//--------------------
                	System.out.println("room:"+myroom+" sofa:"+mysofa+" 4");
            	}
            	//----------------------------------------------------
            	//----------------------------------------------------
            	//如果用户名密码错误
            	if(!passwordistrue){
            		System.out.println("password false");
            		//往client发送  F
                	ctx.writeAndFlush(new TextWebSocketFrame("2}"));
                	//--------------------
            	}
            	
            	//----------------------------------------------------
            }
            //============================================================================
    		}
        } finally {

        	//ReferenceCountUtil.release(msg);//用来保证：60w次数据   接收  jar正常运行
        	
        	 }
    }   
    public void channelReadComplete(ChannelHandlerContext ctx) {   
 
    }   
     
    public void link_close(){
    	if(myroom!=-1)
    	if(BY.socket_link[myroom][mysofa]){//未断开
    		//-------------------------------
    		BY.socket_link[myroom][mysofa]=false;
    		BY.roomperson[myroom]--;
    		//--------------------------------
    		update_changed();
    		//----------------------------------
    		if(BY.timer[myroom][0]<=98){//未开始
    			if(BY.readyed[myroom][mysofa]){//已准备
    				BY.readyed[myroom][mysofa]=false;
    				BY.roomready[myroom]--;
    			}else{//未准备（不需要改动）
    				
    			}
    		}else{//已开始
    			if(!BY.readyed[myroom][mysofa]){//游客（无法点击准备按钮，必定未准备不需要修改）
    				
    			}else{//在线正在游戏的玩家已经知道牌，必定已准备
    				BY.readyed[myroom][mysofa]=false;
    				BY.roomready[myroom]--;
    				//扣钱
    			}
    		}
    		//-----------------------------------
    	}else{//已断开(不归此程序段管)
    		
    	}
    }
    public void toFirst(){
    	for(int ird=0;ird<=4;ird++)BY.readyed[myroom][ird]=false;
		BY.roomready[myroom]=0;
		BY.timer[myroom][0]=0;
		BY.timer[myroom][1]=0;
		for(int iz=0;iz<=4;iz++)BY.P_qianged[myroom][iz]=false;
		BY.zhuang[myroom]=1;
    }
    public void update_changed(){
        for(int j=0;j<=4;j++)BY.changed_self_pai[myroom][j]=true;
        for(int j=0;j<=4;j++)BY.changed_sys_pai[myroom][j]=true;
        for(int j=0;j<=4;j++)for(int k=0;k<=4;k++)BY.changed_me_them[myroom][j][k]=true;
        for(int j=0;j<=4;j++)for(int k=0;k<=4;k++)BY.changed_qiang[myroom][j][k]=true;
        for(int j=0;j<=4;j++)BY.changed_zhuang[myroom][j]=true;
    }
}