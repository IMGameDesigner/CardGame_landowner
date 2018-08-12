package server;  
  
import io.netty.bootstrap.ServerBootstrap;  
import io.netty.channel.ChannelFuture;  
import io.netty.channel.ChannelInitializer;  
import io.netty.channel.ChannelOption;
import io.netty.channel.EventLoopGroup;  
import io.netty.channel.nio.NioEventLoopGroup;  
import io.netty.channel.socket.SocketChannel;  
import io.netty.channel.socket.nio.NioServerSocketChannel;  
import io.netty.handler.timeout.IdleStateHandler;

import java.net.InetSocketAddress;  
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;


import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;

public class BY {  

    private static final int port = 54320;  
    public static int max_id=0;
    //---------------------------------------------------

    //---------------------------------------------------
    
    
    public void start() throws InterruptedException {  
        ServerBootstrap b = new ServerBootstrap();
        EventLoopGroup group = new NioEventLoopGroup();//NIO
        try {  
            b.group(group);  
           
            b.channel(NioServerSocketChannel.class);// NIO
            b.option(ChannelOption.SO_BACKLOG, 102400);
            b.localAddress(new InetSocketAddress(port));// 设置监听端口  
            
            b.childHandler(new WebsocketChatServerInitializer());
    
            ChannelFuture f = b.bind().sync();// 配置完成，开始绑定server，通过调用sync同步方法阻塞直到绑定成功  
            System.out.println("started");  
            f.channel().closeFuture().sync();// 应用程序会一直等待，直到channel关闭  
        } catch (Exception e) {  
            e.printStackTrace();  
        } finally {  
            group.shutdownGracefully().sync();//关闭EventLoopGroup，释放掉所有资源包括创建的线程  
        }  
    }  
    public static void main(String[] args) throws ClassNotFoundException {
    	//------------------------------------------------
    	//获取数据库最高id
		try {
			Class.forName("com.mysql.jdbc.Driver");
			String url = "jdbc:mysql://localhost:3306/ws";//^^^fix
			String username = "root";//^^^fix
			String password = "1111";//^^^fix
			Connection conn = DriverManager.getConnection(url,username,password);
			Statement stmt = conn.createStatement();
			String sql = "select id from ox12";//^^^fix
			ResultSet rs = stmt.executeQuery(sql);
			while(rs.next())max_id=rs.getInt("id");
			System.out.println("load get sql max id:  "+max_id);
			rs.close();		
			stmt.close();	
			conn.close();	
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		//----------------------------------------------------
        try {  
            new BY().start();  
        } catch (InterruptedException e) {  
            e.printStackTrace();  
        }  
    }  
}  