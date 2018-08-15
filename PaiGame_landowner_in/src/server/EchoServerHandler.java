package server;  
  
import java.io.UnsupportedEncodingException;
import java.sql.Connection;
import java.sql.Date;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.StringTokenizer;
import java.util.logging.LogManager;


import org.apache.log4j.Level;
import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;



import server.BY;
import sun.net.www.protocol.jar.Handler;



import io.netty.buffer.ByteBuf;
import io.netty.buffer.Unpooled;  
import io.netty.channel.Channel;
import io.netty.channel.ChannelFuture;
import io.netty.channel.ChannelFutureListener;  
import io.netty.channel.ChannelHandlerAdapter;
import io.netty.channel.ChannelHandlerContext;  
import io.netty.channel.ChannelInboundHandlerAdapter;  
import io.netty.channel.ChannelHandler.Sharable;  
import io.netty.channel.ChannelPromise;
import io.netty.channel.SimpleChannelInboundHandler;
import io.netty.handler.codec.http.websocketx.TextWebSocketFrame;
import io.netty.handler.timeout.IdleState;
import io.netty.handler.timeout.IdleStateEvent;
import io.netty.util.CharsetUtil;
import io.netty.util.ReferenceCountUtil;
  
@Sharable//注解@Sharable可以让它在channels间共享  
public class EchoServerHandler extends SimpleChannelInboundHandler<TextWebSocketFrame> { 

	int myroom=-1;
	int mysofa=-1;

	//--------------------------------------------------------------------
	//处理意外断开导致的内存残留【begin】
	public synchronized void userEventTriggered(ChannelHandlerContext ctx, Object evt)throws Exception {
		if (evt instanceof IdleStateEvent) {
			ctx.writeAndFlush(Unpooled.EMPTY_BUFFER) //flush掉所有写回的数据  
	        .addListener(ChannelFutureListener.CLOSE); // ctx.close();?
			link_close();
		} else {
			//super.userEventTriggered(ctx, evt);//netty5 心跳检测   此句删掉后未测试
		}
	}
	public synchronized void channelInactive(ChannelHandlerContext ctx) throws Exception {
		System.out.println("客户端强制断开join");
        ctx.writeAndFlush(Unpooled.EMPTY_BUFFER) //flush掉所有写回的数据  
        .addListener(ChannelFutureListener.CLOSE); // ctx.close();?
        link_close();
	}
    public synchronized void handlerRemoved(ChannelHandlerContext ctx) throws Exception {
    	System.out.println("浏览器断开");
    	ctx.writeAndFlush(Unpooled.EMPTY_BUFFER) //flush掉所有写回的数据  
        .addListener(ChannelFutureListener.CLOSE); //当flush完成后关闭channel 
    	link_close();
	}
    public synchronized void close(ChannelHandlerContext ctx){//<权威指南p411>
    	ctx.close();
    	link_close();
    }
    public synchronized void exceptionCaught(ChannelHandlerContext ctx,Throwable cause) {   
        try {
			super.exceptionCaught(ctx, cause);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
        Channel channel = ctx.channel();
        //……
        if(channel.isActive()){
        	ctx.close();
        	link_close();
        }
    }
    //处理意外断开导致的内存残留【end】
    //--------------------------------------------------------------------
    protected synchronized void channelRead0(ChannelHandlerContext ctx,TextWebSocketFrame msg) throws Exception {
        try {
            String body0=msg.text();
            System.out.println("【"+body0+"】");
    		String[] allbody = body0.split("}");//防沾包
    		for (int iall = 0; iall <= allbody.length-1; iall++) {
    		String body=allbody[iall];
            //============================================================================
            //============================================================================
            if(body.charAt(0)=='1'){//
            	String body2=body.substring(2-1, body.length());//：取0位后面的
            	String[] all1 = body2.split("\n");//得到分解后的字符串数组
            	String BY_name=all1[0];
            	String BY_password=all1[1];
        		//----------------------------------------------------
        		//将用户名密码存入数据库
        		try {
        			Class.forName("com.mysql.jdbc.Driver");
        			String url = "jdbc:mysql://localhost:3306/ws?characterEncoding=utf-8";//^^^fix
        			String username = "root";//^^^fix
        			String sqlpassword = "1111";//^^^fix

        			Connection conn1 = DriverManager.getConnection(url,username,sqlpassword);
        			
        			PreparedStatement ps0=conn1.prepareStatement(
        					"insert into  ox12(name,password,gamesum,money)values("
        					+
    			             "?,?,?,?)");
        			ps0.setString(1,BY_name);//sql的第一个问号用zhushi代替
        			ps0.setString(2,BY_password);
        			ps0.setInt(3, 0);
        			ps0.setInt(4,100000);
        			ps0.executeUpdate();
        			
        			ps0.close();
        			conn1.close();
        		} catch (ClassNotFoundException e) {
        			e.printStackTrace();
        		} catch (SQLException e) {
        			e.printStackTrace();
        		}
        		//----------------------------------------------------
        		//----------------------------------------------------
        		//将信息传回client
        		BY.max_id++;
        		ctx.writeAndFlush(new TextWebSocketFrame("2"+BY.max_id+"\n100000}"));
        		//----------------------------------------------------
            	//----------------------------------------------------
            	
            	//----------------------------------------------------
            }
            //============================================================================
            //============================================================================

            //============================================================================
    		}
        } finally {

        	//ReferenceCountUtil.release(msg);//用来保证：60w次数据   接收  jar正常运行
        	
        	 }
    }   
    public synchronized void channelReadComplete(ChannelHandlerContext ctx) {   
 
    }   
     
    public void link_close(){
    	/*
    	if(BY.socket_link[myroom][mysofa]){//判断是否已经断开，防止重复判断
    		BY.socket_link[myroom][mysofa]=false;
    		BY.roomperson[myroom]--;
    		//强退？扣钱？
    	}*/
    }
}