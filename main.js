
cc.Class({
    extends: cc.Component,

    properties: {
		//INScene:
		name_:"inScene_name",
		password_:"1234",
		id_:-1,
		money_:0,
		SP_background: {default: null,type: cc.Node},
		SP_in_1: {default: null,type: cc.Node},
		SP_in_2: {default: null,type: cc.Node},
		SP_in_3: {default: null,type: cc.Node},
		//MainScene:
    },

    onLoad () {
		//
		var self=this;
		this.SP_in_1.on(cc.Node.EventType.TOUCH_START, function(event){ 
		    self.SP_in_1.x=-5000;self.SP_in_1.y=-5000;
			self.makesocket_caser1();
        }, this.node);
		//
		this.closecaserall();
		this.opencaser1();
	},
    closecaserall: function () {
		//INScene:
        this.SP_background.x=-5000;this.SP_background.y=-5000;
		this.SP_in_1.x=-5000;this.SP_in_1.y=-5000;
		this.SP_in_2.x=-5000;this.SP_in_2.y=-5000;
		this.SP_in_3.x=-5000;this.SP_in_3.y=-5000;
		//MainScene:
    },
	opencaser1:function(){
		//INScene:
		this.SP_background.x=0;this.SP_background.y=0;
		this.SP_in_1.x=499;this.SP_in_1.y=285;
		this.SP_in_2.x=499;this.SP_in_2.y=26;
		this.SP_in_3.x=499;this.SP_in_3.y=-240;
	},
	opencaser2:function(){
		//MainScene:
	},
	makesocket_caser1:function(){
		var self =this;
	    //var webSocket=new WebSocket("ws://47.93.2.137:54321/ws");
	    //var webSocket=new WebSocket("ws://106.14.181.7:54321/ws");
	    //var webSocket=new WebSocket("ws://www.ququking.top:54321/ws");
	    var webSocket=new WebSocket("ws://localhost:54320/ws");
		var con_ok=true;//客户端心跳检测{1/3}
	    webSocket.onopen=function(event){
		    cc.log("open:");
		    webSocket.send("1"+self.name_+"\n"+self.password_+"\n}");
	    }
	    webSocket.onmessage=function(event){
			cc.log("msg:"+event.data);
			con_ok=true//客户端心跳检测{2/3}
			
		    var getdata=event.data.split("}");//防沾包
			//cc.log("getdata[0]:    "+getdata[0]);
			for(var i0=0;i0<=getdata.length-1;i0++)
			if (getdata[i0][0]== '2'){
				    //获取去掉开头的部分:
				    var s1=getdata[i0].slice(2-1,getdata[i0].length);
					//分开数据
					var s2=s1.split("\n");
					self.id_=parseInt(s2[1-1]); cc.log("id:  "+self.id_);
					self.money_=parseInt(s2[2-1]); cc.log("money:   "+self.money_);
				    //断开连接
					webSocket.close();
					//换场景
					self.closecaserall();
			}
	    }
	    webSocket.onerror=function(event){
		    cc.log("error");
	    }
	    webSocket.onclose=function(event){
		    cc.log("close");
			webSocket=null;
	    }
		//function:if 本函数（makesocket_caser1）打开时间>10s then close webSocket
	},
    update (dt) {},
});
