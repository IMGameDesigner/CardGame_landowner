
cc.Class({
    extends: cc.Component,

    properties: {
		//INScene:
		name_:"name",
		password_:"1234",
		id_:-1,
		money_:0,
		SP_background: {default: null,type: cc.Node},
		SP_in_1: {default: null,type: cc.Node},
		SP_in_2: {default: null,type: cc.Node},
		SP_in_3: {default: null,type: cc.Node},
		//MainScene:
		history_W:200,
		history_H:130,
		history_midX:640,
		history_midY:900,
	    button_circle_white_X:{
            default: function () { 
                return [1920*3/12,1920*5/12,1920*7/12,1920*9/12];
            },
            type: [cc.Integer]
        },
		button_circle_white_Y:{
            default: function () { 
                return [1080/2,1080/2,1080/2,1080/2];
            },
            type: [cc.Integer]
        },
		button_money:{
            default: function () { 
                return [100,1000,10000,100000,1000000];
            },
            type: [cc.Integer]
        },
		button_money_X:{
            default: function () { 
                return [1920*4/12,1920*5/12,1920*6/12,1920*7/12,1920*8/12];
            },
            type: [cc.Integer]
        },
		button_money_Y:{
            default: function () { 
                return [1080/12,1080/12,1080/12,1080/12,1080/12];
            },
            type: [cc.Integer]
        },
		paiX:{
            default: function () { 
                return [860,910,960,1010,1060,
                        380,430,480,530,580,
                        700,750,800,850,900,
	                    1020,1070,1120,1170,1220,
	                    1340,1390,1440,1490,1540];
            },
            type: [cc.Integer]
        },
		paiY:{
            default: function () { 
                return [360,360,360,360,360,
                        720,720,720,720,720,
                        720,720,720,720,720,
	                    720,720,720,720,720,
	                    720,720,720,720,720];
            },
            type: [cc.Integer]
        },
		headX:{
            default: function () { 
                return [1920/2,1920/8,1920*3/8,1920*5/8,1920*7/8];
            },
            type: [cc.Integer]
        },
		headY:{
            default: function () { 
                return [1080*1/5,1080*10/12,1080*10/12,1080*10/12,1080*10/12];
            },
            type: [cc.Integer]
        },
		ox_bei:{
            default: function () { 
                return [1//1 ox1
	                   ,1//2 ox2
	                   ,1//3 ox3
	                   ,1//4 ox4
	                   ,1//5 ox5
	                   ,1//6 ox6
	                   ,1//7 ox7
	                   ,2//8 ox8
	                   ,3//9 ox9
	                   ,4//10 oxox
	                   ,5//11 炸弹
	                   ,6//12 五花
	                   ,10]//13 五小];
            },
            type: [cc.Integer]
        },
		casert:0,
        my_gived_money:{
            default: function () { 
                return [0,0,0,0];
            },
            type: [cc.Integer]
        },
        my_money_tip:1,
		room:0,
		sofa:0,
		timer0:0,
		BY_history:"FFFFFFFFFFFFFFFFFFFFFFFF",
		BY_cardssize5X5:"11111aaaaaddddd5555599999",
		BY_cardscolor5X5:"0000011111222223333300000",
		BY_cardscolor5:"11111",
		BY_cardscolor5:"11111",
		BY_link:{
            default: function () { 
                return [0,0,0,0,0];
            },
            type: [cc.Integer]
        },
		BY_ready:{
            default: function () { 
                return [0,0,0,0,0];
            },
            type: [cc.Integer]
        },
		BY_money:[],
		BY_name:[],
		BY_id:[],
		BY_photo:[],
		BY_allgivedmoney4:[],
		BY_pairank:[],
		BY_qiang:{
            default: function () { 
                return [0,0,0,0,0];
            },
            type: [cc.Integer]
        },
		BY_zhuang:0,
		money_mygive:{
            default: function () { 
                return [0,0,0,0];//东南西北
            },
            type: [cc.Integer]
        },
		//{动画变量：
		pai_action_ed:true,
		paiback_action_ed:true,
		oxback_action_ed:true,
		chengback_action_ed:true,
		//【SP数据】:

		ZI_caser: {default: null,type: cc.Label},
		ZI_casert: {default: null,type: cc.Label},
		websocket:[],
    },

    onLoad () {
		
		//-------------------------------------------------------------------------------------
		//-------------------------------------------------------------------------------------
		//-------------------------------------------------------------------------------------
		//-------------------------------------------------------------------------------------
		//-------------------------------------------------------------------------------------
		//--------------------------------------事件监听-----------------------------------------------
		//-------------------------------------------------------------------------------------
		//-------------------------------------------------------------------------------------
		//-------------------------------------------------------------------------------------
		//-------------------------------------------------------------------------------------
		//-------------------------------------------------------------------------------------
		//-------------------------------------------------------------------------------------
		var self=this;
/*
		this.SP_button_ready.on(cc.Node.EventType.TOUCH_START, function(event){ 
		    self.websocket[0].send("R}");
		}, this.node);	    

		this.SP_button_qiang.on(cc.Node.EventType.TOUCH_START, function(event){ 
		    self.websocket[0].send("Q}");
		}, this.node);	
*/		
		this.SP_in_1.on(cc.Node.EventType.TOUCH_START, function(event){ 
		    self.SP_in_1.active=false;
			self.makesocket_caser1();
			self.SP_background.active=false;
			self.SP_in_1.active=false;
			self.SP_in_2.active=false;
			self.SP_in_3.active=false;
        }, this.node);
		//-------------------------------------------load
		//-------------------------------------------load
		//-------------------------------------------load
		//-------------------------------------------load
		//-------------------------------------------load
		this.closecaserall();
		this.opencaser1();
	},
    closecaserall: function () {
		this.caser=0;
    },
	opencaser1:function(){
		this.caser=1;
	},
	opencaser2:function(){
		this.caser=2;
		this.makesocket_caser2();
	},
	makesocket_caser1:function(){
		var self =this;
	    //var webSocket1=new WebSocket("ws://47.93.2.137:54320/ws");
	    var webSocket1=new WebSocket("ws://106.14.181.7:54320/ws");
	    //var webSocket1=new WebSocket("ws://www.ququking.top:54320/ws");
	    //var webSocket1=new WebSocket("ws://www.seenmemo.com:54320/ws");
	    //var webSocket1=new WebSocket("ws://localhost:54320/ws");
		var con_ok=true;//客户端心跳检测{1/3}
	    webSocket1.onopen=function(event){
		    cc.log("socket_caser1 open:"); 
		webSocket1.send("1"+self.name_+"\n"+self.password_+"}");
	    }
	    webSocket1.onmessage=function(event){
			cc.log("socket_caser1 msg:"+event.data);
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
					webSocket1.close();
					//换场景
					self.closecaserall();
					self.opencaser2();
			}
	    }
	    webSocket1.onerror=function(event){
		    cc.log("socket_caser1 error");
	    }
	    webSocket1.onclose=function(event){
		    cc.log("socket_caser1 close");
			webSocket1=null;
	    }
		//function:if 本函数（makesocket_caser1）打开时间>10s then close webSocket1
	},
	makesocket_caser2:function(){
        //--------------------------------------------------------------
	    var self =this;
	    //var webSocket=new WebSocket("ws://47.93.2.137:54321/ws");
	    var webSocket=new WebSocket("ws://106.14.181.7:54321/ws");
	    //var webSocket=new WebSocket("ws://www.ququking.top:54321/ws");
	    //var webSocket=new WebSocket("ws://www.seenmemo.com:54321/ws");
	    //var webSocket=new WebSocket("ws://localhost:54321/ws");
		this.websocket[0]=webSocket;
	    var con_ok=true;//客户端心跳检测{1/3}
        var nettydata="";
        
	        webSocket.onmessage=function(event){if(this.caser==2||1==1){
				con_ok=true;//--客户端心跳检测{2/3}
		        //cc.log("["+event.data+"]");
			    nettydata=nettydata + event.data;//防拆包1/3
			    if (nettydata[nettydata.length-1]=="}") {//防拆包2/3
                //print("-------------------------------------get--------------------------------------")
			    //print(event.data)
			    var getdata=nettydata.split("}");//防沾包
			    nettydata="";//防拆包3/3
			    for(var i0=0;i0<=getdata.length-1;i0++ ){
				    
	    		    if( getdata[i0][0]== "T" ){

	    			    //获取去掉开头的部分:
				        var s1=getdata[i0].slice(2-1,getdata[i0].length);
					
    					//获取timer作为client的timer
    					self.casert=parseInt(s1);

    					if( self.casert>=0 && self.casert<=100 ){
    					    self.ZI_caser.string=("房间:"+ self.room +" "+":");
    						//self.ZI_casert.string=(string.format("%d",(100-self.casert)/20));
    						self.ZI_casert.string=parseInt(self.sofa);
    					}
	                }
    				if (getdata[i0][0]=="3") {
    				    //获取去掉开头的部分:
						
    				    var s1=getdata[i0].slice(2-1,getdata[i0].length);
    					//分开数据
    				    var s2=s1.split("~");
    					self.room=parseInt(s2[0])-1;
    					self.sofa=parseInt(s2[1])-1;
						cc.log("get in return room:"+self.room+" sofa:"+self.sofa);
    	//##########################################################################################
    	var timer=0;
    	setInterval(function () {
    		//----------------------------------------------------------------------------------------
    	    timer=timer+1;if(timer>1000000)timer=1;
    		//----------------------------------------------------------------------------------------
    		//----------------------------------------------------------------------------------------
    		//【即时数据沟通】
					webSocket.send("T}");
    		//----------------------------------------------------------------------------------------
    		//----------------------------------------------------------------------------------------		
    		if (timer%100==0) { 
    		    //【【客户端心跳检测{3/3}  写在timer最前面 
    			if (con_ok==false) {
    			    cc.log("heart client close");
					
                    webSocket.close();
    			    //cc.Director:getInstance():getScheduler():unscheduleScriptEntry(schedulerID1)	
    				//cc.Director:getInstance():getScheduler():unscheduleScriptEntry(schedulerID0)
    				//local newScene = import("app.scenes.HomeScene"):new()
                    //display.replaceScene(newScene,"crossFade",0,0)
					
    			}
    			if (con_ok==true)  con_ok=false ;
    			//】】
			}
    		//----------------------------------------------------------------------------------------
        }, 1000*0.01);
    	//----------------------------------------------------------
    	//##########################################################################################
	
    				}//if string.sub(getdata[i0],1,1)=="3" then
    			}//for i0=1,table.getn(getdata),1 do
				}//if (nettydata[nettydata.length-1]=="}") {//防拆包2/3
    	    }}
    	    webSocket.onopen=function(event){
				console.log("socket_caser2 open and send id:"+self.id_+" password:"+self.password_);
				webSocket.send("1"+self.id_.toString()+"~"+self.password_.toString()+"}");
    	    }
    	    webSocket.onerror=function(event){
		        cc.log("socket_caser2 error");
	        }
	        webSocket.onclose=function(event){
		        cc.log("socket_caser2 close  ");
			    webSocket=null;
	        }

    },
	
    update (dt) {
		this.timer0++;if(this.timer0>1000000)this.timer0=1;
	},
	
});
