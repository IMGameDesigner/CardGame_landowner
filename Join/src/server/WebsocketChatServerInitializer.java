package server;

import java.util.concurrent.TimeUnit;

import io.netty.channel.ChannelInitializer;
import io.netty.channel.ChannelPipeline;
import io.netty.channel.socket.SocketChannel;
import io.netty.handler.codec.http.HttpObjectAggregator;
import io.netty.handler.codec.http.HttpServerCodec;
import io.netty.handler.codec.http.websocketx.WebSocketServerProtocolHandler;
import io.netty.handler.stream.ChunkedWriteHandler;
import io.netty.handler.timeout.IdleStateHandler;

public class WebsocketChatServerInitializer extends ChannelInitializer<SocketChannel> {    //1
	//下面三个0为关闭
		private static final int READ_IDEL_TIME_OUT = 10;//读超时
		private static final int WRITE_IDEL_TIME_OUT = 0;// 写超时
		private static final int ALL_IDEL_TIME_OUT = 0;//所有超时
@Override
public void initChannel(SocketChannel ch) throws Exception {//2
 ChannelPipeline pipeline = ch.pipeline();
 
pipeline.addLast(new IdleStateHandler(READ_IDEL_TIME_OUT,
         WRITE_IDEL_TIME_OUT, 
         ALL_IDEL_TIME_OUT, 
         TimeUnit.SECONDS));
pipeline.addLast(new HttpServerCodec());
pipeline.addLast(new HttpObjectAggregator(64*1024));
pipeline.addLast(new ChunkedWriteHandler());
pipeline.addLast(new HttpRequestHandler("/ws"));
pipeline.addLast(new WebSocketServerProtocolHandler("/ws"));
pipeline.addLast(new EchoServerHandler());

}
}