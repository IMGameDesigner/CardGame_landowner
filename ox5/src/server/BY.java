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
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;


import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;

public class BY {  

    private static final int port = 54321;  

    //---------------------------------------------------
    //【所有的逻辑处理拉到server】
    //时间变量:
    public static int[][] timer=new int[2000][2];
    //房间公共：
    public static int[][] cards5X5=new int[2000][25];
    public static int[] zhuang=new int[2000];
    //记录是否掉线：
    public static boolean[][] socket_link=new boolean[2000][5];
    public static int[] roomperson=new int[2000];
    public static boolean[][] readyed=new boolean[2000][5];
    public static int[] roomready=new int[2000];
    //每个玩家不同：
    public static int[][] P_id=new int[2000][5];//不传输(仅供修改sql)
    public static int[][] ox_rank=new int[2000][5];//不传输（仅供过程计算，本应放在Handler内部）
    public static int[][] P_gived_money=new int[2000][5];//不传输（仅供过程计算，本应放在Handler内部）
    public static int[][] P_money=new int[2000][5];
    public static String[][] P_name=new String[2000][5];
    public static int[][] P_photo=new int[2000][5];
    public static boolean[][] P_qianged=new boolean[2000][5];
    //已改变的数据是否已经传输
    public static boolean[][] changed_self_pai=new boolean[2000][5];
    public static boolean[][] changed_sys_pai=new boolean[2000][5];
    public static boolean[][][] changed_me_them=new boolean[2000][5][5];
    public static boolean[][] changed_zhuang=new boolean[2000][5];
    public static boolean[][][] changed_qiang=new boolean[2000][5][5];
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
    public static void main(String[] args) {
        //---------------------------------------------------
        //时间变量:
        for(int i=0;i<=1999;i++)for(int j=0;j<=1;j++)timer[i][j]=0;
        //房间公共：
        for(int i=0;i<=1999;i++)for(int j=0;j<=24;j++)cards5X5[i][j]=1;
        for(int i=0;i<=1999;i++)zhuang[i]=1;
        //记录是否掉线：
        for(int i=0;i<=1999;i++)for(int j=0;j<=4;j++)socket_link[i][j]=false;
        for(int i=0;i<=1999;i++)roomperson[i]=0;
        for(int i=0;i<=1999;i++)for(int j=0;j<=4;j++)readyed[i][j]=false;
        for(int i=0;i<=1999;i++)roomready[i]=0;
        //每个玩家不同：
        for(int i=0;i<=1999;i++)for(int j=0;j<=4;j++)ox_rank[i][j]=0;
        for(int i=0;i<=1999;i++)for(int j=0;j<=4;j++)P_id[i][j]=0;
        for(int i=0;i<=1999;i++)for(int j=0;j<=4;j++)P_gived_money[i][j]=1;
        for(int i=0;i<=1999;i++)for(int j=0;j<=4;j++)P_money[i][j]=0;
        for(int i=0;i<=1999;i++)for(int j=0;j<=4;j++)P_name[i][j]="name";
        for(int i=0;i<=1999;i++)for(int j=0;j<=4;j++)P_photo[i][j]=-1;
        for(int i=0;i<=1999;i++)for(int j=0;j<=4;j++)P_qianged[i][j]=false;
        //已改变的数据是否已经传输
        for(int i=0;i<=1999;i++)for(int j=0;j<=4;j++)changed_self_pai[i][j]=true;
        for(int i=0;i<=1999;i++)for(int j=0;j<=4;j++)changed_sys_pai[i][j]=true;
        for(int i=0;i<=1999;i++)for(int j=0;j<=4;j++)for(int k=0;k<=4;k++)changed_me_them[i][j][k]=true;
        for(int i=0;i<=1999;i++)for(int j=0;j<=4;j++)changed_zhuang[i][j]=true;
        for(int i=0;i<=1999;i++)for(int j=0;j<=4;j++)for(int k=0;k<=4;k++)changed_qiang[i][j][k]=true;
        //--------------------------------------------------- 

        
        try {  
            new BY().start();  
        } catch (InterruptedException e) {  
            e.printStackTrace();  
        }  
        
    }  
}  