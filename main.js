
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
		sofasum:3,
		caser:0,
		casert:0,
		room:0,
		sofa:0,
		timer0:0,//时间系统随时更新的本地动画
		/*
		BY_cardssize5X5:"11111aaaaaddddd5555599999",
		BY_cardscolor5X5:"0000011111222223333300000",
		*/
		BY_mycards_sum:0,
		BY_mycards:{
            default: function () { 
                return [0,1,2,3,4,
				        0,1,2,3,4,
						0,1,2,3,4,
						0,1,2,3,4];
            },
            type: [cc.Integer]
        },
		BY_mycards_client_will:{
            default: function () { 
                return [0,0,0,0,0,
				        0,0,0,0,0,
						0,0,0,0,0,
						0,0,0,0,0];
            },
            type: [cc.Integer]
        },
		BY_landowner_cards:{
            default: function () { 
                return [0,1,2];
            },
            type: [cc.Integer]
        },
		BY_now_cards_sum:0,
		BY_nowcard_from:0,
		BY_card_next_person:0,
		BY_now_cards:{
            default: function () { 
                return [0,1,2,3,4,
				        0,1,2,3,4,
						0,1,2,3,4,
						0,1,2,3,4];
            },
            type: [cc.Integer]
        },
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
		BY_qiang:{
            default: function () { 
                return [0,0,0,0,0];
            },
            type: [cc.Integer]
        },
		BY_zhuang:0,
		//{动画变量：
		/*
		pai_action_ed:true,
		paiback_action_ed:true,
		oxback_action_ed:true,
		chengback_action_ed:true,
		*/
		//【SP数据】:
		SP_BG: {default: null,type: cc.Node},
		SP_exit: {default: null,type: cc.Node},
		SP_note: {default: null,type: cc.Node},
		SP_button_ready: {default: null,type: cc.Node},
		SP_clock: {default: null,type: cc.Node},
		ZI_caser: {default: null,type: cc.Label},
		ZI_casert: {default: null,type: cc.Label},
		SP_head:{default:[],type: [cc.Node]},
		ZI_name:{default:[],type: [cc.Label]},
		ZI_personmoney:{default:[],type: [cc.Label]},
		SP_ready:{default:[],type: [cc.Node]},
		SP_mycard:{default:[],type: [cc.Node]},
		ZI_other2_pai_sum: {default: null,type: cc.Label},
		ZI_other3_pai_sum: {default: null,type: cc.Label},
		SP_landowner_card:{default:[],type: [cc.Node]},
		SP_qiang:{default:[],type: [cc.Node]},
		SP_button_qiang: {default: null,type: cc.Node},
		SP_without:{default:[],type: [cc.Node]},
		SP_out_card:{default:[],type: [cc.Node]},
		ZI_getmoney:{default:[],type: [cc.Label]},
		SP_zhuang: {default: null,type: cc.Node},
		SP_button_tishi: {default: null,type: cc.Node},
		SP_button_chupai: {default: null,type: cc.Node},
		SP_button_buyao: {default: null,type: cc.Node},
		//SP_money:{default:[],type: [cc.Node]},//动画
		//----------------------------------------
		websocket:[],
    },

    onLoad () {
		
		
		{var now_=new Array(3);
        now_[0]=3;
        now_[1]=1;
        now_[2]=1;
		var will_=new Array(3);
        will_[0]=2;
        will_[1]=2;
        will_[2]=2;
		cc.log("$$$$$$$$$$$$cuo:"+this.can_out_poker(now_,will_));//--> false
		}
		{var now_=new Array(8);
        now_[0]=3;
        now_[1]=3;
        now_[2]=3;
        now_[3]=4;
        now_[4]=4;
        now_[5]=4;
        now_[6]=5;
        now_[7]=6;
		var will_=new Array(8);
        will_[0]=7;
        will_[1]=7;
        will_[2]=7;
		will_[3]=8;
		will_[4]=8;
		will_[5]=8;
		will_[6]=9;
		will_[7]=10;
		cc.log("$$$$$$$$$$$fei ji "+this.can_out_poker(now_,will_));//--> true
		}
		{var now_=new Array(4);
        now_[0]=3;
        now_[1]=3;
        now_[2]=3;
        now_[3]=4;
		var will_=new Array(4);
        will_[0]=7;
        will_[1]=7;
        will_[2]=7;
		will_[3]=8;
		cc.log("$$$$$$$$$$$$$san dai yi "+this.can_out_poker(now_,will_));//--> true
		}
		{var now_=new Array(6);
        now_[0]=3;
        now_[1]=3;
        now_[2]=3;
        now_[3]=4;
        now_[4]=4;
        now_[5]=4;
		var will_=new Array(6);
        will_[0]=7;
        will_[1]=7;
        will_[2]=7;
		will_[3]=8;
		will_[4]=8;
		will_[5]=8;
		cc.log("$$$$$$$$$san shun:"+this.can_out_poker(now_,will_));//--> true
		}
		{var now_=new Array(6);
        now_[0]=3;
        now_[1]=3;
        now_[2]=4;
        now_[3]=4;
        now_[4]=5;
        now_[5]=5;
		var will_=new Array(6);
        will_[0]=7;
        will_[1]=7;
        will_[2]=8;
		will_[3]=8;
		will_[4]=9;
		will_[5]=9;
		cc.log("$$$$$$$$$2 shun:"+this.can_out_poker(now_,will_));//--> true
		}
		{var now_=new Array(6);
        now_[0]=3;
        now_[1]=4;
        now_[2]=5;
        now_[3]=6;
        now_[4]=7;
        now_[5]=8;
		var will_=new Array(6);
        will_[0]=7;
        will_[1]=8;
        will_[2]=9;
		will_[3]=10;
		will_[4]=11;
		will_[5]=12;
		cc.log("$$$$$$$$$ 1 shun:"+this.can_out_poker(now_,will_));//--> true
		}
		{var now_=new Array(3);
        now_[0]=1;
        now_[1]=1;
        now_[2]=1;
		var will_=new Array(3);
        will_[0]=2;
        will_[1]=2;
        will_[2]=2;
		cc.log("$$$$$$$$$$3张："+this.can_out_poker(now_,will_));//--> true
		}
		{var now_=new Array(2);
        now_[0]=1;
        now_[1]=1;
		var will_=new Array(2);
        will_[0]=2;
        will_[1]=2;
		cc.log("$$$$$$$$$$dui zi："+this.can_out_poker(now_,will_));//--> true
		}
		{var now_=new Array(1);
        now_[0]=1;
		var will_=new Array(1);
        will_[0]=2;
		cc.log("$$$$$$$$$$dan pai ："+this.can_out_poker(now_,will_));//--> true
		}
		{var now_=new Array(3);
        now_[0]=4;
        now_[1]=4;
        now_[2]=4;
		var will_=new Array(4);
        will_[0]=3;
        will_[1]=3;
        will_[2]=3;
		will_[3]=3;
		cc.log("$$$$$$$$$$$$炸弹干三张"+this.can_out_poker(now_,will_));//--> true
		}
		
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
		//this.SP_exit.on(cc.Node.EventType.TOUCH_START, function(event){ 
		    //断开连接
			/*
			socket:close()
			cc.Director:getInstance():getScheduler():unscheduleScriptEntry(schedulerID1)
			local newScene = import("app.scenes.HomeScene"):new()
            display.replaceScene(newScene,"crossFade",0,0)
			*/
		//}, this.node);

		this.SP_button_ready.on(cc.Node.EventType.TOUCH_START, function(event){ 
		    self.websocket[0].send("R}");
		}, this.node);	    

		this.SP_button_qiang.on(cc.Node.EventType.TOUCH_START, function(event){ 
		    self.websocket[0].send("Q}");
		}, this.node);	
		
		this.SP_button_tishi.on(cc.Node.EventType.TOUCH_START, function(event){ 
		    //
		}, this.node);
		
		this.SP_button_chupai.on(cc.Node.EventType.TOUCH_START, function(event){ 
		
		   //now 牌 获取 begin
		   var now0=new Array(self.BY_now_cards_sum);
		   for(var i=0;i<=now0.length-1;i++)now0[i]=self.BY_now_cards[i];
		   //now 牌 获取 end
		   //will 牌 获取 begin
		   var will_sum=0;
		   var will0=new Array(20);
		   for(var i=0;i<=19;i++){
			   if(self.BY_mycards_client_will[i]==1){
				   will0[will_sum]=self.BY_mycards[i];
				   will_sum++;
			   }
		   }
		   var will1=new Array(will_sum);
		   for(var i=0;i<=will_sum-1;i++)will1[i]=will0[i];
		   //will 牌 获取 end 
		   if(self.can_out_poker(now0,will1)==true||self.BY_card_next_person==self.BY_nowcard_from){//如果牌可以出
		   //----------------------------------------------------------------------------------------
		   //----------------------------------------------------------------------------------------
		   //----------------------------------------------------------------------------------------
		   //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
		   cc.log("click chupai1");
		   var s_card="";
		   for(var i=0;i<=19;i++){
			   if(self.BY_mycards_client_will[i]==1)s_card=s_card+self.BY_mycards[i]+"~";
		   }
		   cc.log("G"+s_card+"}");
		   self.websocket[0].send("G"+s_card+"}");
		   //删掉已经出的牌：
		   var a=new Array(20);
           var tip=-1;	   
		   for(var i=0;i<=self.BY_mycards_sum-1;i++){
			   if(self.BY_mycards_client_will[i]==0){
				   tip++;
				   a[tip]=self.BY_mycards[i];
			   }
		   }
		   cc.log("click chupai2");
		   for(var i=0;i<=tip;i++)self.BY_mycards[i]=a[i];
		   self.BY_mycards_sum=tip+1;
		   //更新删除后的牌显示
		    for(var i=0;i<=self.BY_mycards_sum-1;i++)self.SP_mycard[i].y=-444;
			for(var i=0;i<=19;i++)self.BY_mycards_client_will[i]=0;
			self.PaiSumChange_ViewChange();
			cc.log("click chupai3");
			//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
			//----------------------------------------------------------------------------------------
			//----------------------------------------------------------------------------------------
			//----------------------------------------------------------------------------------------
			//
            }
			
		}, this.node);
		
		this.SP_button_buyao.on(cc.Node.EventType.TOUCH_START, function(event){ 
		    self.websocket[0].send("U}");
		}, this.node);
		
		//mycard 20 begin------------------------------------------------------------
		
			this.SP_mycard[1].on(cc.Node.EventType.TOUCH_START, function(event){ 
			    cc.log("click my card");
		        self.BY_mycards_client_will[1]=(self.BY_mycards_client_will[1]+1)%2;
				self.SP_mycard[1].y=-444+100*self.BY_mycards_client_will[1];
		    }, this.node);
			this.SP_mycard[2].on(cc.Node.EventType.TOUCH_START, function(event){ 
			    cc.log("click my card");
		        self.BY_mycards_client_will[2]=(self.BY_mycards_client_will[2]+1)%2;
				self.SP_mycard[2].y=-444+100*self.BY_mycards_client_will[2];
		    }, this.node);
			this.SP_mycard[3].on(cc.Node.EventType.TOUCH_START, function(event){ 
			    cc.log("click my card");
		        self.BY_mycards_client_will[3]=(self.BY_mycards_client_will[3]+1)%2;
				self.SP_mycard[3].y=-444+100*self.BY_mycards_client_will[3];
		    }, this.node);
			this.SP_mycard[4].on(cc.Node.EventType.TOUCH_START, function(event){ 
			    cc.log("click my card");
		        self.BY_mycards_client_will[4]=(self.BY_mycards_client_will[4]+1)%2;
				self.SP_mycard[4].y=-444+100*self.BY_mycards_client_will[4];
		    }, this.node);
			this.SP_mycard[5].on(cc.Node.EventType.TOUCH_START, function(event){ 
			    cc.log("click my card");
		        self.BY_mycards_client_will[5]=(self.BY_mycards_client_will[5]+1)%2;
				self.SP_mycard[5].y=-444+100*self.BY_mycards_client_will[5];
		    }, this.node);
			//
			this.SP_mycard[6].on(cc.Node.EventType.TOUCH_START, function(event){ 
			    cc.log("click my card");
		        self.BY_mycards_client_will[6]=(self.BY_mycards_client_will[6]+1)%2;
				self.SP_mycard[6].y=-444+100*self.BY_mycards_client_will[6];
		    }, this.node);
			this.SP_mycard[7].on(cc.Node.EventType.TOUCH_START, function(event){ 
			    cc.log("click my card");
		        self.BY_mycards_client_will[7]=(self.BY_mycards_client_will[7]+1)%2;
				self.SP_mycard[7].y=-444+100*self.BY_mycards_client_will[7];
		    }, this.node);
			this.SP_mycard[8].on(cc.Node.EventType.TOUCH_START, function(event){ 
			    cc.log("click my card");
		        self.BY_mycards_client_will[8]=(self.BY_mycards_client_will[8]+1)%2;
				self.SP_mycard[8].y=-444+100*self.BY_mycards_client_will[8];
		    }, this.node);
			this.SP_mycard[9].on(cc.Node.EventType.TOUCH_START, function(event){ 
			    cc.log("click my card");
		        self.BY_mycards_client_will[9]=(self.BY_mycards_client_will[9]+1)%2;
				self.SP_mycard[9].y=-444+100*self.BY_mycards_client_will[9];
		    }, this.node);
			this.SP_mycard[10].on(cc.Node.EventType.TOUCH_START, function(event){ 
			    cc.log("click my card");
		        self.BY_mycards_client_will[10]=(self.BY_mycards_client_will[10]+1)%2;
				self.SP_mycard[10].y=-444+100*self.BY_mycards_client_will[10];
		    }, this.node);
			//
			this.SP_mycard[11].on(cc.Node.EventType.TOUCH_START, function(event){ 
			    cc.log("click my card");
		        self.BY_mycards_client_will[11]=(self.BY_mycards_client_will[11]+1)%2;
				self.SP_mycard[11].y=-444+100*self.BY_mycards_client_will[11];
		    }, this.node);
			this.SP_mycard[12].on(cc.Node.EventType.TOUCH_START, function(event){ 
			    cc.log("click my card");
		        self.BY_mycards_client_will[12]=(self.BY_mycards_client_will[12]+1)%2;
				self.SP_mycard[12].y=-444+100*self.BY_mycards_client_will[12];
		    }, this.node);
			this.SP_mycard[13].on(cc.Node.EventType.TOUCH_START, function(event){ 
			    cc.log("click my card");
		        self.BY_mycards_client_will[13]=(self.BY_mycards_client_will[13]+1)%2;
				self.SP_mycard[13].y=-444+100*self.BY_mycards_client_will[13];
		    }, this.node);
			this.SP_mycard[14].on(cc.Node.EventType.TOUCH_START, function(event){ 
			    cc.log("click my card");
		        self.BY_mycards_client_will[14]=(self.BY_mycards_client_will[14]+1)%2;
				self.SP_mycard[14].y=-444+100*self.BY_mycards_client_will[14];
		    }, this.node);
			this.SP_mycard[15].on(cc.Node.EventType.TOUCH_START, function(event){ 
			    cc.log("click my card");
		        self.BY_mycards_client_will[15]=(self.BY_mycards_client_will[15]+1)%2;
				self.SP_mycard[15].y=-444+100*self.BY_mycards_client_will[15];
		    }, this.node);
			//
			this.SP_mycard[16].on(cc.Node.EventType.TOUCH_START, function(event){ 
			    cc.log("click my card");
		        self.BY_mycards_client_will[16]=(self.BY_mycards_client_will[16]+1)%2;
				self.SP_mycard[16].y=-444+100*self.BY_mycards_client_will[16];
		    }, this.node);
			this.SP_mycard[17].on(cc.Node.EventType.TOUCH_START, function(event){ 
			    cc.log("click my card");
		        self.BY_mycards_client_will[17]=(self.BY_mycards_client_will[17]+1)%2;
				self.SP_mycard[17].y=-444+100*self.BY_mycards_client_will[17];
		    }, this.node);
			this.SP_mycard[18].on(cc.Node.EventType.TOUCH_START, function(event){ 
			    cc.log("click my card");
		        self.BY_mycards_client_will[18]=(self.BY_mycards_client_will[18]+1)%2;
				self.SP_mycard[18].y=-444+100*self.BY_mycards_client_will[18];
		    }, this.node);
			this.SP_mycard[19].on(cc.Node.EventType.TOUCH_START, function(event){ 
			    cc.log("click my card");
		        self.BY_mycards_client_will[19]=(self.BY_mycards_client_will[19]+1)%2;
				self.SP_mycard[19].y=-444+100*self.BY_mycards_client_will[19];
		    }, this.node);
			this.SP_mycard[0].on(cc.Node.EventType.TOUCH_START, function(event){ 
			    cc.log("click my card");
		        self.BY_mycards_client_will[0]=(self.BY_mycards_client_will[0]+1)%2;
				self.SP_mycard[0].y=-444+100*self.BY_mycards_client_will[0];
		    }, this.node);
			//
			
		//mycard 20 end---------------------------------------------------------------
		
		this.SP_in_1.on(cc.Node.EventType.TOUCH_START, function(event){ 
		    self.SP_in_1.active=false;
			self.makesocket_caser1();
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
		//INScene:
        this.SP_background.active=false;
		this.SP_in_1.active=false;
		this.SP_in_2.active=false;
		this.SP_in_3.active=false;
		//MainScene:
		this.SP_BG.active=false;
		this.SP_exit.active=false;
		this.SP_note.active=false;
		this.SP_button_ready.active=false;
		this.ZI_caser.node.active=false;
		this.SP_clock.active=false;
		this.ZI_casert.node.active=false;
		this.ZI_other2_pai_sum.node.active=false;
		this.ZI_other3_pai_sum.node.active=false;
		this.SP_button_qiang.active=false;
		this.SP_zhuang.active=false;
		this.SP_button_tishi.active=false;
		this.SP_button_chupai.active=false;
		this.SP_button_buyao.active=false;
		for(var i=0;i<=19;i++){
			this.SP_mycard[i].active=false;
			this.SP_out_card[i].active=false;
		}
		for(var i=0;i<=2;i++){
			this.SP_head[i].active=false;
			this.ZI_name[i].node.active=false;
			this.ZI_personmoney[i].node.active=false;
			this.SP_ready[i].active=false;
			this.SP_landowner_card[i].active=false;
			this.SP_qiang[i].active=false;
			this.SP_without[i].active=false;
			this.ZI_getmoney[i].node.active=false;
		}
    },
	opencaser1:function(){
		this.caser=1;
		//INScene:
		this.SP_background.active=true;
		this.SP_in_1.active=true;
		this.SP_in_2.active=true;
		this.SP_in_3.active=true;
	},
	opencaser2:function(){
		this.caser=2;
		//MainScene:
		this.SP_BG.active=true;
		this.SP_exit.active=true;
		this.SP_note.active=true;
		this.ZI_caser.node.active=true;
		this.SP_clock.active=true;
		this.ZI_casert.node.active=true;
		for(var i=0;i<=2;i++){
			this.SP_head[i].active=true;
			this.ZI_name[i].node.active=true;
			this.ZI_personmoney[i].node.active=true;
			this.SP_ready[i].active=false;
		}
		this.SP_button_ready.active=true;
	},
	makesocket_caser1:function(){
		var self =this;
	    //var webSocket1=new WebSocket("ws://47.93.2.137:54320/ws");
	    //var webSocket1=new WebSocket("ws://106.14.181.7:54320/ws");
	    //var webSocket1=new WebSocket("ws://www.ququking.top:54320/ws");
	    //var webSocket1=new WebSocket("ws://www.seenmemo.com:54320/ws");
	    var webSocket1=new WebSocket("ws://localhost:54320/ws");
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
					self.makesocket_caser2();
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
	    //var webSocket=new WebSocket("ws://106.14.181.7:54321/ws");
	    //var webSocket=new WebSocket("ws://www.ququking.top:54321/ws");
	    var webSocket=new WebSocket("ws://localhost:54321/ws");
		this.websocket[0]=webSocket;
	    var con_ok=true;//客户端心跳检测{1/3}
        var nettydata="";
        
	        webSocket.onmessage=function(event){if(this.caser==2||1==1){
				con_ok=true;//--客户端心跳检测{2/3}
		        cc.log("["+event.data+"]");
			    nettydata=nettydata + event.data;//防拆包1/3
			    if (nettydata[nettydata.length-1]=="}") {//防拆包2/3
                //print("-------------------------------------get--------------------------------------")
			    //print(event.data)
			    var getdata=nettydata.split("}");//防沾包
			    nettydata="";//防拆包3/3
			    for(var i0=0;i0<=getdata.length-1;i0++ ){
			        if(getdata[i0][0]== "2"){
				        //断开连接
					    //webSocket.close();
			            //cc.Director:getInstance():getScheduler():unscheduleScriptEntry(schedulerID1)
					    cc.log("账号或密码错误");
					    //下一个场景
				    }
				    if(getdata[i0][0]== "q"){//qiang msg
				        //获取去掉开头的部分:
				        var s1=getdata[i0].slice(2-1,getdata[i0].length);
						//
					    self.BY_qiang[parseInt(s1[2-1])-1]=parseInt(s1[0]);
				    }
				    if(getdata[i0][0]== "z" ){//who is zhuang
				        //获取去掉开头的部分:
				        var s1=getdata[i0].slice(2-1,getdata[i0].length);
					    //
					    self.BY_zhuang=parseInt(s1)-1;
				    }
				    if( getdata[i0][0]== "S" ){//three landowner cards
				        //获取去掉开头的部分:
				        var s1=getdata[i0].slice(2-1,getdata[i0].length);
					    //----------------------------------------
					    //(函数)解压缩数据
					    function webCHARtoNUMBER0to99(c){
						    return c.charCodeAt(0)-23;   //字符->ASCII
                        }
				    	//---------------------------------------- 
                        for(var i=0;i<=2;i++){
				    	    self.BY_landowner_cards[i]=webCHARtoNUMBER0to99(s1[i]);
							cc.log(">>>>>>>>landowner>>>>>>>>>"+self.BY_landowner_cards[i]);
                        }						
						//=========================================
						//UI:
						for(var i=0;i<=2;i++){
							self.SP_landowner_card[i].active=true;
							var texture0=cc.textureCache.addImage(cc.url.raw("resources/card_change/pai_"+
    								     self.BY_landowner_cards[i]+
    									 ".png"));
                            self.SP_landowner_card[ i].getComponent(cc.Sprite).spriteFrame.setTexture(texture0);
						}
				    }
				    if(getdata[i0][0]== "A" ){//only my cards
					
					    self.BY_mycards_sum=17;
				        //获取去掉开头的部分:
				        var s1=getdata[i0].slice(2-1,getdata[i0].length);
				    	//----------------------------------------
				    	//(函数)解压缩数据
				    	function webCHARtoNUMBER0to99(c){
						    return c.charCodeAt(0)-23;   //字符->ASCII
                        }
				    	//----------------------------------------
                        for(var i=0;i<=16;i++){
				    	    self.BY_mycards[i]=webCHARtoNUMBER0to99(s1[i]);
							cc.log(">>>>>>>>>mycard>>>>>>>>"+self.BY_mycards[i]);
                        }					
						//------------------------------------------
						//------------------------------------------
						//------------------------------------------
						//------------------------------------------
						//self.PaiSumChange_ViewChange();
				    }
					if(getdata[i0][0]== "g" ){//now out poker
					
					    self.casert=17;
						for(var i=0;i<=19;i++){
							self.BY_mycards_client_will[i]=0;
							self.SP_mycard[i].y=-444+100*self.BY_mycards_client_will[i];
						}
					    //获取去掉开头的部分:
						var s1=getdata[i0].slice(2-1,getdata[i0].length);
					    //----------------------------------------
				    	//(函数)解压缩数据
				    	function webCHARtoNUMBER0to99(c){
						    return c.charCodeAt(0)-23;   //字符->ASCII
                        }
				    	//----------------------------------------
				        
						self.BY_now_cards_sum=webCHARtoNUMBER0to99(s1[0]);//第一个是  牌的数量
						cc.log(">>>>>>>>>>now card sum>>>>>>>"+self.BY_now_cards_sum);
						self.BY_nowcard_from=s1[self.BY_now_cards_sum+1];//倒数第二个是  谁出的
						cc.log(">>>>>>>>>>card from>>>>>>>"+self.BY_nowcard_from);
						self.BY_card_next_person=s1[self.BY_now_cards_sum+2];//倒数第一个是  该谁出
						cc.log(">>>>>>>>>>who will out card>>>>>>>"+self.BY_card_next_person);

                        for(var i=1;i<=self.BY_now_cards_sum;i++){
				    	    self.BY_now_cards[i-1]=webCHARtoNUMBER0to99(s1[i]);
							cc.log(">>>>>>>>>>now card>>>>>>>"+self.BY_now_cards[i-1]);
                        }
						//poker from(poker position)
					    var from_client=self.BY_nowcard_from-(self.sofa);
					    if (from_client<0)  from_client=from_client+3 ;
						cc.log("from_client:"+from_client);
						//
						//poker who will(clock position)
						var will_client=self.BY_card_next_person-(self.sofa);
					    if (will_client<0)  will_client=will_client+3 ;
						cc.log("will_client:"+will_client);
						//
						//clock position
						self.SP_clock.active=true;
						self.SP_clock.x=self.SP_head[will_client].x;
						self.ZI_casert.node.x=self.SP_head[will_client].x;
						self.SP_clock.y=self.SP_head[will_client].y+self.SP_head[will_client].height;
						self.ZI_casert.node.y=self.SP_head[will_client].y+self.SP_head[will_client].height;
						cc.log("self.SP_head[will_client].x = "+self.SP_head[will_client].x);
						//if I will out poker,then button can view :
						if(will_client==0){
							self.SP_button_buyao.active=true;
							self.SP_button_tishi.active=true;
							self.SP_button_chupai.active=true;
						}else{
							self.SP_button_buyao.active=false;
							self.SP_button_tishi.active=false;
							self.SP_button_chupai.active=false;
						}
						//poker position
						for(var i=0;i<=19;i++)self.SP_out_card[i].active=false;
						for(var i=0;i<=self.BY_now_cards_sum-1;i++){
							self.SP_out_card[i].active=true;
							self.SP_out_card[i].x=self.SP_head[from_client].x+i*50;
							self.SP_out_card[i].y=self.SP_head[from_client].y+self.SP_head[from_client].height;
							var texture0=cc.textureCache.addImage(cc.url.raw("resources/card_change/pai_"+
    								     self.BY_now_cards[i]+
    									 ".png"));
                            self.SP_out_card[i].getComponent(cc.Sprite).spriteFrame.setTexture(texture0);
						}
				    }
				    if( getdata[i0][0]== "P"){//[who ready]and[person all msg]
					
				        //获取去掉开头的部分:
						cc.log("00000000000000000000000000");
				        var s1=getdata[i0].slice(2-1,getdata[i0].length);
					
					    //分开数据
						
				        var datat=s1.split("\n");
					    //
					    var P_sofa=parseInt(datat[1-1]);
					    var P_link_ready_=datat[2-1];//"0" or "1"
					    var P_money0=datat[3-1];//压缩数据
					    var P_name=datat[4-1];
					    cc.log("11111111111111111111111111");
				    	for(var i=0;i<=P_money0.length-1;i++ ){
				    	    cc.log("ascii"+ (P_money0[i].charCodeAt(0)-23));
				    	}
				    	//----------------------------------------
					    //解压缩数据
					    function webCHARtoNUMBER0to99(c){
						    return c.charCodeAt(0)-23;   //字符->ASCII
                        }
				    	function webSTRINGtoINT(s){
				    		var sum=0;
				    		for(var i=0;i<=s.length-1;i++ ){
				    		    sum=sum*100+webCHARtoNUMBER0to99(s[i]);
				    		}
				    		return sum;
				    	}
				    	//----------------------------------------
					    cc.log("22222222222222222222222222222222");
					
				    	var P_money=webSTRINGtoINT(P_money0);
					
				    	cc.log("sofa"+ P_sofa);
				    	cc.log("link ready "+ P_link_ready_);
				    	cc.log("money"+ P_money);
				    	cc.log("name"+ P_name);
					    cc.log("22222--------------------------");
						cc.log(parseInt(P_link_ready_[0]));
	    				self.BY_link[P_sofa-1]=parseInt(P_link_ready_[0]);
						cc.log("22222--+++++++++++++333333-------------------");
	    				self.BY_ready[P_sofa-1]=parseInt(P_link_ready_[1]);
						cc.log("22222--333333-------------------");
	    				self.BY_money[P_sofa-1]=P_money;
	    				self.BY_name[P_sofa-1]=P_name;
						cc.log("333333333333333333333333333333333");
						
	    			}
	    		    if( getdata[i0][0]== "T" ){
	    			    //获取去掉开头的部分:
				        var s1=getdata[i0].slice(2-1,getdata[i0].length);
    					//获取timer作为client的timer
    					self.casert=parseInt(s1);
						cc.log("t:"+self.casert);
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
    	    timer=timer+1;if(timer>100000000)timer=1;
    		//----------------------------------------------------------------------------------------
    		//----------------------------------------------------------------------------------------
			    if(self.casert<=0){}else{self.casert++;
				        cc.log("timer-----------------"+self.casert);
			            //时间过界重启
						
						if( self.casert==41){
							cc.log("self.casert==41");
							for(var i=0;i<=self.sofasum-1;i++)self.BY_ready[i]=0;
							for(var i=0;i<=self.sofasum-1;i++)self.BY_qiang[i]=0;
							self.casert=0;
							//
							self.closecaserall();
							self.opencaser2();
						}
    					//【状态提醒】 begin
    					if( self.casert>=1 && self.casert<=5 ){
    					    self.ZI_caser.string=("房间:"+ self.room +" 准备");
    						//self.ZI_casert.string=(string.format("%d",(100-self.casert)/20));
    						self.ZI_casert.string=""+parseInt(6-self.casert);
    					}
    					if( self.casert>=6 && self.casert<=8 ){
    					    self.ZI_caser.string=("房间:"+ self.room +" "+"发牌");
    						//self.ZI_casert.string=(string.format("%d",(200-self.casert)/20));
							self.ZI_casert.string=parseInt(9-self.casert);
    					}
    					if( self.casert>=9 && self.casert<=17 ){
    					    self.ZI_caser.string=("房间:"+ self.room +" "+"抢地主");
    						//self.ZI_casert.string=(string.format("%d",(300-self.casert)/20));
							self.ZI_casert.string=parseInt((18-self.casert));
    					}
    					if( self.casert>=18 && self.casert<=37 ){
    					    self.ZI_caser.string=("房间:"+ self.room +" "+"出牌中");
    						//self.ZI_casert.string=(string.format("%d",(400-self.casert)/20));
							self.ZI_casert.string=parseInt((38-self.casert));
    					}
    					if( self.casert>=38 && self.casert<=39 ){
    					    self.ZI_caser.string=("房间:"+ self.room +" "+"结算");
    						//self.ZI_casert.string=(string.format("%d",(500-self.casert)/20));
							self.ZI_casert.string=parseInt((41-self.casert));
    					}
						if( self.casert>=40 && self.casert<=40 ){
    					    self.ZI_caser.string=("房间:"+ self.room +" "+"结算");
    						//self.ZI_casert.string=(string.format("%d",(500-self.casert)/20));
							self.ZI_casert.string="赢家是我";
							self.SP_clock.active=false;
    					}
						
    					//【状态提醒】 }
    					//【牌】 begin
    					
    					if( self.casert<=4 ){
    					    for(var i=0;i<=19;i++){
    							self.SP_mycard[ i].active=false;
    						}
                        }
						
    					if( self.casert==8 ){//显示我的牌（不该写在这个位置）
						    self.PaiSumChange_ViewChange();
    					}
						
    					/*
                        if( self.casert>=6 && self.casert<=7 ){//等待
    					    for( var i_server=0;i_server<=4;i_server++ ){ for( var j=0;j<=4;j++ ){
    						    var i_client=i_server-(self.sofa);
    						    if( i_client<0 ){ i_client=i_client+5; }
    							if( self.BY_ready[i_server]==1 ){
    						        var texture1=cc.textureCache.addImage(cc.url.raw("resources/twelve_ox/card_back.png"));
                                    self.SP_pai[ (i_client)*5+j].getComponent(cc.Sprite).spriteFrame.setTexture(texture1);
    						        self.SP_pai[ (i_client)*5+j].x=self.paiX[(i_client)*5+j]-960;
    						        self.SP_pai[ (i_client)*5+j].y=self.paiY[(i_client)*5+j]-540;
    							    self.SP_pai[ (i_client)*5+j].active=true;
    							}else{
    								self.SP_pai[ (i_client)*5+j].active=false;	
    							}
    						} }
    					}
    					if( self.casert>=8 && self.casert<=8+15-15 ){//显示我的牌
    						for( var i=0;i<=4;i++ ){
    						    //if( self.timer0>10 ){  原lua
    							var texture2=cc.textureCache.addImage(cc.url.raw("resources/twelve_ox/card_"+
    								     self.BY_cardscolor5[i]+
    									 self.BY_cardssize5[i]+
    									 ".png"));
                                self.SP_pai[i].getComponent(cc.Sprite).spriteFrame.setTexture(texture2);
    
    							//}//timer
    						    self.SP_pai[i].x=self.paiX[i]-960;
    						    self.SP_pai[i].y=self.paiY[i]-540;
    							self.SP_pai[i].active=true;
    						}
    						self.paiback_action_ed=false
    					}
    					if( self.casert>=16 && self.casert<=28 ){//显示所有人的牌
    						for( var i_server=0;i_server<=4;i_server++ ){ for( var j=0;j<=4;j++ ){
    						    var i_client=i_server-(self.sofa);
    						    if( i_client<0 ){ i_client=i_client+5; }
    						    //if( self.timer0>10 ){  lua
                                if(	self.BY_ready[i_server]==1 ){
									var texture=cc.textureCache.addImage(cc.url.raw("resources/twelve_ox/card_"+
    								        self.BY_cardscolor5X5[(i_server)*5+j]+
    									    self.BY_cardssize5X5[(i_server)*5+j]+
    									    ".png"));
                                    self.SP_pai[ (i_client)*5+j].getComponent(cc.Sprite).spriteFrame.setTexture(texture);
    								self.SP_pai[ (i_client)*5+j].x=self.paiX[(i_client)*5+j]-960;
    								self.SP_pai[ (i_client)*5+j].y=self.paiY[(i_client)*5+j]-540;
    							    self.SP_pai[ (i_client)*5+j].active=true;
    							}else{
    							    self.SP_pai[ (i_client)*5+j].active=false;
    							}
    							//}
    						    
    						}
    						}
    						self.paiback_action_ed=false
    					}
    					if( self.casert>=29 && self.casert<=29 && self.paiback_action_ed==false ){//
    					    self.paiback_action_ed=true;
    					    for( var i_server=0;i_server<=4;i_server++ ){ for( var j=0;j<=4;j++ ){
    						    var i_client=i_server-(self.sofa);
    						    if( i_client<0 ){ i_client=i_client+5; }
    							if( self.BY_ready[i_server]==1 ){
									var texture=cc.textureCache.addImage(cc.url.raw("resources/twelve_ox/card_back.png"));
                                    self.SP_pai[ (i_client)*5+j].getComponent(cc.Sprite).spriteFrame.setTexture(texture);
    						        self.SP_pai[ (i_client)*5+j].x=self.paiX[(i_client)*5+j]-960;
    						        self.SP_pai[ (i_client)*5+j].y=self.paiY[(i_client)*5+j]-540;
    							    self.SP_pai[ (i_client)*5+j].active=true;
									var anim0=cc.moveBy(1, cc.p(
									    -self.paiX[(i_client)*5+j]+960,
										-self.paiY[(i_client)*5+j]+540)).easing(cc.easeCubicActionOut());
                                    self.SP_pai[ (i_client)*5+j].runAction(anim0);
    							}else{
    							    self.SP_pai[ (i_client)*5+j].active=false;
    							}
    						} }
    					}
    					//【牌】 }
    					//【牛等级】 begin

    					if( self.casert<=16 ){ 
    					    for( var i=0;i<=4;i++ ){
    							self.SP_ox[ i].active=false;
                            }
    						self.ox_action_ed=false;
    					}
    					if( self.casert>=17 && self.casert<=17 && self.ox_action_ed==false ){//动画开始
    					    self.ox_action_ed=true;
    					    for(var i_server=0;i_server<=4;i_server++ ){
    						    var i_client=i_server-(self.sofa);
    						    if( i_client<0 ){ i_client=i_client+5; }
    						    self.SP_ox[ i_client].x=self.paiX[(i_client+1)*5-2]-960;
    						    self.SP_ox[ i_client].y=self.paiY[(i_client+1)*5-2]+1080-540;
								
								var texture=cc.textureCache.addImage(cc.url.raw(
								    "resources/twelve_ox/niu_"+ self.BY_pairank[i_server] +".png"));
                                self.SP_ox[ i_client].getComponent(cc.Sprite).spriteFrame.setTexture(texture);
    							if( self.BY_ready[i_server]==1 ){
    							    self.SP_ox[ i_client].active=true;
    							}else{
    							    self.SP_ox[ i_client].active=false;
    							}
								var anim0=cc.moveBy(1, cc.p(0,-1080)).easing(cc.easeCubicActionOut());
                                self.SP_ox[ i_client].runAction(anim0);
    						}
    					}
    					if( self.casert>=17 && self.casert<=17 ){
    					    //动画
    					}
    					if( self.casert>=18 && self.casert<=27 ){//等待
    					    for(var i_server=0;i_server<=4;i_server++ ){
    						    var i_client=i_server-(self.sofa);
    						    if( i_client<0 ){ i_client=i_client+5; }
    						    var texture=cc.textureCache.addImage(cc.url.raw(
								    "resources/twelve_ox/niu_"+ self.BY_pairank[i_server] +".png"));
                                self.SP_ox[ i_client].getComponent(cc.Sprite).spriteFrame.setTexture(texture);
    						    self.SP_ox[ i_client].x=self.paiX[(i_client+1)*5-2]-960;
    						    self.SP_ox[ i_client].y=self.paiY[(i_client+1)*5-2]-540;
    							if( self.BY_ready[i_server]==1 ){
    							    self.SP_ox[ i_client].active=true;
    							}else{
    							    self.SP_ox[ i_client].active=false;
    							}
                            }
    						self.oxback_action_ed=false
    					}
    					if( self.casert>=28 && self.casert<=28 && self.oxback_action_ed==false ){//动画关闭
    					    self.oxback_action_ed=true;
    						for(var i_server=0;i_server<=4;i_server++ ){
    						    var i_client=i_server-(self.sofa);
    						    if( i_client<0 ){ i_client=i_client+5; }
    						    self.SP_ox[ i_client].x=self.paiX[(i_client+1)*5-2]-960;
    						    self.SP_ox[ i_client].y=self.paiY[(i_client+1)*5-2]-540;
    							if( self.BY_ready[i_server]==1 ){
    							    self.SP_ox[ i_client].active=true;
    							}else{
    							    self.SP_ox[ i_client].active=false;
    							}
								var anim0=cc.moveBy(1, cc.p(0,1080)).easing(cc.easeCubicActionOut());
                                self.SP_ox[ i_client].runAction(anim0);
    						}
    					}
    					if( self.casert>=29 ){
    						for( var i=0;i<=4;i++ ){
    							self.SP_ox[ i].active=false;
                            }
    					}
    					
    					//【牛等级】 }
    					//【倍率】 begin
    					
    					if( self.casert<=19 ){ 
    					    for( var i=0;i<=4;i++ ){
    							self.SP_cheng[ i].active=false;
                            }
    						self.cheng_action_ed=false
    					}
    					if( self.casert>=20 && self.casert<=20 && self.cheng_action_ed==false ){//动画
    					    self.cheng_action_ed=true
    
    						for(var i_server=0;i_server<=4;i_server++ ){
    						    var i_client=i_server-(self.sofa);
    						    if( i_client<0 ){ i_client=i_client+5; }
    							    
    							    if( self.BY_pairank[i_server]!=0 && self.BY_ready[i_server]==1 ){
    						            self.SP_cheng[ i_client].x=self.paiX[(i_client+1)*5-2]-960;
    						            self.SP_cheng[ i_client].y=self.paiY[(i_client+1)*5-2]-540-100+1080;
										var texture=cc.textureCache.addImage(cc.url.raw(
								            "resources/twelve_ox/cheng_"+ self.ox_bei[self.BY_pairank[i_server]] +".png"));
                                        self.SP_cheng[ i_client].getComponent(cc.Sprite).spriteFrame.setTexture(texture);
    							        
    							        self.SP_cheng[ i_client].active=true;
										var anim0=cc.moveBy(1, cc.p(0,-1080)).easing(cc.easeCubicActionOut());
                                        self.SP_cheng[ i_client].runAction(anim0);
    								}else{
    								    self.SP_cheng[ i_client].active=false;
    								}
    							
    						}
    					}
    					if( self.casert>=20 && self.casert<=20 ){
    					    //动画
    					}
    					if( self.casert>=21 && self.casert<=24 ){//等待
    
    						for(var i_server=0;i_server<=4;i_server++ ){
    						    var i_client=i_server-(self.sofa);
    						    if( i_client<0 ){ i_client=i_client+5; }
    							
    							    if( self.BY_pairank[i_server]!=0 && self.BY_ready[i_server]==1 ){
    								    self.SP_cheng[ i_client].x=self.paiX[(i_client+1)*5-2]-960;
    						            self.SP_cheng[ i_client].y=self.paiY[(i_client+1)*5-2]-540-100;
										var texture=cc.textureCache.addImage(cc.url.raw(
								            "resources/twelve_ox/cheng_"+ self.ox_bei[self.BY_pairank[i_server]] +".png"));
                                        self.SP_cheng[ i_client].getComponent(cc.Sprite).spriteFrame.setTexture(texture);
    							        self.SP_cheng[ i_client].active=true;
    								}else{
    								    //cc.log("BY_pairank[i_server]"+ BY_pairank[i_server])
    								    self.SP_cheng[ i_client].active=false;
    								}
    							
    						}
    						self.chengback_action_ed=false
    					}
    					if( self.casert>=25 && self.casert<=25 && self.chengback_action_ed==false ){//退出
    					    self.chengback_action_ed=true
    
    						for(var i_server=0;i_server<=4;i_server++ ){
    						    var i_client=i_server-(self.sofa);
    						    if( i_client<0 ){ i_client=i_client+5; }
    						    
    							    if( self.BY_pairank[i_server]!=0 && self.BY_ready[i_server]==1 ){
    						            self.SP_cheng[ i_client].x=self.paiX[(i_client+1)*5-2]-960;
    						            self.SP_cheng[ i_client].y=self.paiY[(i_client+1)*5-2]-540-100;
    							        self.SP_cheng[ i_client].active=true;
									    var anim0=cc.moveBy(1, cc.p(0,+1080)).easing(cc.easeCubicActionOut());
                                        self.SP_cheng[ i_client].runAction(anim0);
    								}else{
    								    self.SP_cheng[ i_client].active=false;
    							    }
    						}
    					}
    					if( self.casert>=26 ){
    						for( var i=0;i<=4;i++ ){
    							self.SP_cheng[ i].active=false;
                            }
    					}
						//【倍率】 end
						*/
				}
    		//----------------------------------------------------------------------------------------
    		//----------------------------------------------------------------------------------------
    		//【即时数据沟通】
			if(timer%18000==0)webSocket.send("X}");
    		//----------------------------------------------------------------------------------------
    		//----------------------------------------------------------------------------------------		
    		if (timer%36000==0) { 
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
        }, 1000);
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
		//----------------------------------------------------------------------------------------
		//----------------------------------------------------------------------------------------
		//----------------------------------------------------------------------------------------
		//按钮是否显示
		
		if (this.caser==2&&this.casert<5&&this.BY_ready[this.sofa]==0)
		    this.SP_button_ready.active=true;
		else
		    this.SP_button_ready.active=false;
		if (this.caser==2&&this.casert<17&&this.casert>8&&this.BY_qiang[this.sofa]==0)
		    this.SP_button_qiang.active=true;
		else
		    this.SP_button_qiang.active=false;
        //-----------------------------------------------------------
		
		//全部玩家头像name money	
		if(this.timer0>5&&this.caser==2){
		    //---------------------------------------------------------------
			//准备阶段  玩家信息 准备图标
		    if(this.casert<=5){
				    var sofasum=3;
					for (var i_server=0;i_server<=sofasum-1;i_server++){ 
					        var i_client=i_server-(this.sofa);//sofa:0~4 i_client:-4~4 
							if (i_client<0)  i_client=i_client+sofasum ;
					    if (this.BY_link[i_server]==1){
							
                            //--------------------------------
							//var texture=cc.textureCache.addImage(cc.url.raw("img/twelve_ox/head"+ this.BY_photo[i_server] +".png"));//assets/img/BG_up.png
		                    //this.SP_head[i_client-1].getComponent(cc.Sprite).spriteFrame.setTexture(texture);
                            this.SP_head[i_client].active=true;
							//---------------------------------
							this.ZI_name[i_client].string=this.BY_name[i_server];
                            this.ZI_name[i_client].node.active=true;
							//----------------------------------
							this.ZI_personmoney[i_client].string=this.BY_money[i_server];
                            this.ZI_personmoney[i_client].node.active=true;
							//----------------------------------
							if (this.BY_ready[i_server]==1) 
							    this.SP_ready[i_client].active=true;
							else
								this.SP_ready[i_client].active=false;	
							//----------------------------------
							
						}
						else{
						    this.SP_head[i_client].active=false;
							this.ZI_name[i_client].node.active=false;
							this.ZI_personmoney[i_client].node.active=false;
							this.SP_ready[i_client].active=false;
							
                        }
					}
			}
			//---------------------------------------------------------------
			/*
			//---------------------------------------------------------------
			//非准备阶段  玩家信息 在线离线图标
			if (this.casert>5) {
					for (var i_server=0;i_server<=4;i_server++){ 
					        var i_client=i_server-(this.sofa);//sofa:0~4 i_client:-4~4 
							if (i_client<0)  i_client=i_client+5 ;
							this.SP_ready[i_client].active=false;	
					    if (this.BY_link[i_server]==1 || this.BY_ready[i_server]==1) {
                            //--------------------------------
							//var texture=cc.textureCache.addImage(cc.url.raw("img/twelve_ox/head"+ BY_photo[i_server] +".png"));//assets/img/BG_up.png
		                    //this.SP_head[i_client].getComponent(cc.Sprite).spriteFrame.setTexture(texture);
                            this.SP_head[i_client].active=true;
							//---------------------------------
							this.ZI_name[i_client].string=(this.BY_name[i_server]);
                            this.ZI_name[i_client].node.active=true;
							//----------------------------------
							this.ZI_personmoney[i_client].string=(this.BY_money[i_server]);
                            this.ZI_personmoney[i_client].node.active=true;
							//----------------------------------
							if (this.BY_link[i_server]==0) {
						        this.SP_without[i_client].active=true;
						    }else{
						        this.SP_without[i_client].active=false;
						    }
							//----------------------------------
							if (this.BY_ready[i_server]==0) {
							    this.ZI_personmoney[i_client].string=("观众");
								this.ZI_name[i_client].string=("观众");
							}
							//----------------------------------
						}else{
							this.ZI_name[i_client].node.active=false;
							this.ZI_personmoney[i_client].node.active=false;
							this.SP_ready[i_client].active=false;
							this.SP_head[i_client].active=false;
                        }

					}
			}else{
			    for (var i=0;i<=4;i++) {
					this.SP_without[i].active=false;
				}
			}
			//---------------------------------------------------------------
			*/
			//---------------------------------------------------------------
			//抢 
			
			if (this.casert>8 && this.casert<17) {
				for (var i_server=0;i_server<=2;i_server++){ 
					var i_client=i_server-(this.sofa);//sofa:0~4 i_client:-4~4 
					if (i_client<0)  i_client=i_client+3 ;
				    if (this.BY_qiang[i_server]==1) {
				        this.SP_qiang[i_client].active=true;
					}else{
					    this.SP_qiang[i_client].active=false;
					}
				}
			}else{
				for (var i=0;i<=2;i++){
				    this.SP_qiang[i].active=false;
			    }
			}
			//---------------------------------------------------------------
			
			//---------------------------------------------------------------
			//庄
			
			if (this.casert>17) {
			    this.SP_zhuang.active=true;
				var zhuang_client=this.BY_zhuang-(this.sofa);
				if( zhuang_client<0)  zhuang_client=zhuang_client+3 ;
				this.SP_zhuang.x=this.SP_head[zhuang_client].x;
				this.SP_zhuang.y=this.SP_head[zhuang_client].y;
			}else{
			    this.SP_zhuang.active=false;
			}
			//---------------------------------------------------------------
			
		}			
		
        //-----------------------------------------------------------
		
	},
	PaiSumChange_ViewChange:function(){
		var self=this;
		self.poker_to_easy_view();
		for(var i=0;i<=19;i++)self.SP_mycard[i].active=false;
		for(var i=0;i<=self.BY_mycards_sum-1;i++){
    	    self.SP_mycard[i].active=true;
		    var texture0=cc.textureCache.addImage(cc.url.raw("resources/card_change/pai_"+self.BY_mycards[i]+".png"));
            self.SP_mycard[ i].getComponent(cc.Sprite).spriteFrame.setTexture(texture0);
    	}
	},
	poker_to_easy_view:function(){
		var len=this.BY_mycards_sum;
		var ranksize=new Array(len);
		for(var i=0;i<=len-1;i++)ranksize[i]=this.BY_mycards[i];
		for(var i=0;i<=len-1;i++)cc.log("---------card赋值结果--->"+ranksize[i]);
		//【等级化：】 [1->K 变为 3->K->2],[有色变无色],[53||54->14]
		for(var i=0;i<=len-1;i++){
			if(ranksize[i]>=53)ranksize[i]=14;else{
			    ranksize[i]=((ranksize[i]-1)%13+1)-2;
				if(ranksize[i]<=0)ranksize[i]+=13;
			}
		}
		for(var i=0;i<=len-1;i++)cc.log("---------card等级化结果--->"+ranksize[i]);
		//【等级化end】now:1->14
		//排序开始
		for(var i=0;i<=len-1-1;i++)
			for(var j=i+1;j<=len-1;j++)
				if(ranksize[i]>ranksize[j])
				{
					var h=ranksize[i];
					ranksize[i]=ranksize[j];
					ranksize[j]=h;
					h=this.BY_mycards[i];
					this.BY_mycards[i]=this.BY_mycards[j];
					this.BY_mycards[j]=h;
				}
		//排序结束
		for(var i=0;i<=len-1;i++)cc.log("---------card排序结果--->"+this.BY_mycards[i]);
	},
	can_out_poker:function(now_poker,will_poker){//输入两个数组，判断是否新牌组可以出
		var len1=now_poker.length;
		var len2=will_poker.length;
		if(len2==0)return false;
		//if(len1==0)return true;
		cc.log("//both not kong");
		//后面为两者都不为空的情况：
		//排序：
		for(var i=0;i<=len1-1-1;i++)
			for(var j=i+1;j<=len1-1;j++)
				if(now_poker[i]>now_poker[j]){
					var h=now_poker[i];
					now_poker[i]=now_poker[j];
					now_poker[j]=h;
				}
		for(var i=0;i<=len2-1-1;i++)
			for(var j=i+1;j<=len2-1;j++)
				if(will_poker[i]>will_poker[j]){
					var h=will_poker[i];
					will_poker[i]=will_poker[j];
					will_poker[j]=h;
				}
		//排序结束
		if(len2==2&&will_poker[0]==53&&will_poker[1]==54)return true;//出牌为火箭
		if(len1==2&&now_poker[0]==53&&now_poker[1]==54)return false;//原牌为火箭
		cc.log("both not huo jian");
		//后面为两者都不为火箭的情况
		function isZhaDan(poker){
			if(poker.length>=5||poker.length<=3)return false;
			for(var i=0;i<=3;i++)if(poker[i]>=53)return false;
			var size1=(poker[0]-1)%13+1;
			var size2=(poker[1]-1)%13+1;
			var size3=(poker[2]-1)%13+1;
			var size4=(poker[3]-1)%13+1;
			if(size1==size2&&size1==size3&&size1==size4)return true;
			return false;
		}
		if(isZhaDan(now_poker)&&!isZhaDan(will_poker))return false;
		if(!isZhaDan(now_poker)&&isZhaDan(will_poker))return true;
		if(isZhaDan(now_poker)&&isZhaDan(will_poker)){
			var ranksize1=(now_poker[0]-1)%13+1-2;if(ranksize1<=0)ranksize1+=13;
			var ranksize2=(will_poker[0]-1)%13+1-2;if(ranksize2<=0)ranksize2+=13;
			if(ranksize1<ranksize2)return true;
			return false;
		}
		cc.log("both not zha dan");
		//后面为两者都不是炸弹的情况：
		function isDanPai(poker){
			if(poker.length==1)return true;
			return false;
		}
		if(isDanPai(now_poker)&&isDanPai(will_poker)){
			var ranksize1=(now_poker[0]-1)%13+1-2;if(ranksize1<=0)ranksize1+=13;
			var ranksize2=(will_poker[0]-1)%13+1-2;if(ranksize2<=0)ranksize2+=13;
			if(ranksize1<ranksize2)return true;
			cc.log("not dan pai ok");
		}
		if(len1==0&&isDanPai(will_poker))return true;
		for(var i=0;i<=len1-1;i++)if(now_poker[i]>=53)return false;
		for(var i=0;i<=len2-1;i++)if(will_poker[i]>=53)return false;
		//后面为不存在大王小王的情况：
		function isDuiZi(poker){
			if(poker.length!=2)return false;
			var size1=(poker[0]-1)%13+1;
			var size2=(poker[1]-1)%13+1;
			if(size1==size2)return true;
			return false;
		}
		if(isDuiZi(now_poker)&&isDuiZi(will_poker)){
			var ranksize1=(now_poker[0]-1)%13+1-2;if(ranksize1<=0)ranksize1+=13;
			var ranksize2=(will_poker[0]-1)%13+1-2;if(ranksize2<=0)ranksize2+=13;
			if(ranksize1<ranksize2)return true;
			cc.log("not dui zi ok");
		}
		if(len1==0&&isDuiZi(will_poker))return true;
		function isSanZhang(poker){
			if(poker.length!=3)return false;
			var size1=(poker[0]-1)%13+1;
			var size2=(poker[1]-1)%13+1;
			var size3=(poker[2]-1)%13+1;
			if(size1==size2&&size1==size3)return true;
			return false;
		}
		if(isSanZhang(now_poker)&&isSanZhang(will_poker)){
			var ranksize1=(now_poker[0]-1)%13+1-2;if(ranksize1<=0)ranksize1+=13;
			var ranksize2=(will_poker[0]-1)%13+1-2;if(ranksize2<=0)ranksize2+=13;
			if(ranksize1<ranksize2)return true;
			cc.log("not san zhang ok");
		}
		if(len1==0&&isSanZhang(will_poker))return true;
		//【等级化：】 [1->K 变为 3->K->2],[有色变无色]
		for(var i=0;i<=len1-1;i++){
			var ranksize1=(now_poker[i]-1)%13+1-2;if(ranksize1<=0)ranksize1+=13;
			now_poker[i]=ranksize1;
		}
		for(var i=0;i<=len2-1;i++){
			var ranksize2=(will_poker[i]-1)%13+1-2;if(ranksize2<=0)ranksize2+=13;
			will_poker[i]=ranksize2;
		}
		//for(var i=0;i<=len1-1;i++)cc.log("等级化结果："+i+" --- "+now_poker[i]);
		//for(var i=0;i<=len2-1;i++)cc.log("等级化结果："+i+" --- "+will_poker[i]);
		////【等级化end】
		//排序：
		for(var i=0;i<=len1-1-1;i++)
			for(var j=i+1;j<=len1-1;j++)
				if(now_poker[i]>now_poker[j]){
					var h=now_poker[i];
					now_poker[i]=now_poker[j];
					now_poker[j]=h;
				}
		//for(var i=0;i<=len1-1;i++)cc.log("排序结果："+i+" --- "+now_poker[i]);
		
		for(var i=0;i<=len2-1-1;i++)
			for(var j=i+1;j<=len2-1;j++)
				if(will_poker[i]>will_poker[j]){
					var h=will_poker[i];
					will_poker[i]=will_poker[j];
					will_poker[j]=h;
				}
		//for(var i=0;i<=len2-1;i++)cc.log("排序结果："+i+" --- "+will_poker[i]);
		//排序结束
		function isDanShun(poker){//BY规则：不可用王，可用2(下同)
		    if(poker.length<=4)return false;
			var is_=true;
			for(var i=0;i<=poker.length-1-1;i++)
				if(poker[i+1]-poker[i]==1&&poker[i+1]<=12){}else{
					is_=false;
				}
			return is_;
		}
		if(isDanShun(now_poker)&&isDanShun(will_poker)){
			if(now_poker.length==will_poker.length&&will_poker[0]>now_poker[0])return true;
		}
		if(len1==0&&isDanShun(will_poker))return true;
		cc.log("not dan shun");
		function isShuangShun(poker){
			if(poker.length%2!=0||poker.length<=5)return false;
			for(var i=0;i<=poker.length/2-1;i++){
				if(poker[i*2]!=poker[i*2+1])return false;
			}
			for(var i=0;i<=poker.length/2-1-1;i++){
				if(poker[i*2]+1!=poker[i*2+2])return false;
			}
			return true;
		}
		if(isShuangShun(now_poker)&&isShuangShun(will_poker)){
			if(now_poker.length==will_poker.length&&will_poker[0]>now_poker[0])return true;
		}
		if(len1==0&&isShuangShun(will_poker))return true;
		cc.log("not 2 shun");
		function isSanShun(poker){
			if(poker.length%3!=0||poker.length<=5)return false;
			for(var i=0;i<=poker.length/3-1;i++){
				if(poker[i*3]!=poker[i*3+1])return false;
			}
			for(var i=0;i<=poker.length/3-1-1;i++){
				if(poker[i*3]+1!=poker[i*3+3])return false;
			}
			return true;
		}
		if(isSanShun(now_poker)&&isSanShun(will_poker)){
			if(now_poker.length==will_poker.length&&will_poker[0]>now_poker[0])return true;
		}
		if(len1==0&&isSanShun(will_poker))return true;
		cc.log("not 3 shun");
		function isSanDaiYi(poker){
			if(poker.length>=6||poker.length<=3)return -1;
			if(poker.length==4){
				if(poker[0]==poker[1]&&poker[1]==poker[2]&&poker[2]!=poker[3])return poker[0];
				if(poker[0]!=poker[1]&&poker[1]==poker[2]&&poker[2]==poker[3])return poker[3];
			}
			if(poker.length==5){
				if(poker[0]==poker[1]&&poker[1]==poker[2]&&poker[2]!=poker[3]&&poker[3]==poker[4])return poker[0];
				if(poker[0]==poker[1]&&poker[1]!=poker[2]&&poker[2]==poker[3]&&poker[3]==poker[4])return poker[4];
			}
			return -1;
		}
		if(isSanDaiYi(now_poker)!=-1&&isSanDaiYi(will_poker)!=-1){
			if(now_poker.length==will_poker.length&&isSanDaiYi(now_poker)<isSanDaiYi(will_poker))return true;
		}
		if(len1==0&&isSanDaiYi(will_poker)!=-1)return true;
		cc.log("not 3dai1");
		function isFeiJi(poker){
			//统计每个size的数量
			//for(var i=0;i<=poker.length-1;i++)cc.log("----"+i+"--pai-->"+poker[i]);
			var pai=new Array(13);for(var i=0;i<=12;i++)pai[i]=0;
			for(var i=0;i<=poker.length-1;i++)pai[poker[i]]++;
			//for(var i=0;i<=12;i++)cc.log("----"+i+"--sum-->"+pai[i]);
			//取三张里的最大和最小size，记录几个三张。max-min=sum-1>=2 对，否则不是三顺
			var max=-1;
			var min=14;
			var sum=0;
			for(var i=0;i<=12;i++)if(pai[i]==3){
				if(i>max)max=i;
				if(i<min)min=i;
				sum++;
			}
			//cc.log("max="+max);
			//cc.log("min="+min);
			//cc.log("sum="+sum);
			if(max-min==sum-1&&sum>=2){}else return -1;
			//cc.log("function FeiJi: san shun true");
			//有单也有双，错
			var sum1=0;
			var sum2=0;
			for(var i=0;i<=12;i++){
				if(pai[i]==2)sum2++;
				if(pai[i]==1)sum1++;
			}
			if(sum2==0&&sum1==0)return -1;
			if(sum2!=0&&sum1!=0)return -1; 
			//判断单双的数量对否
			if(sum1!=0&&sum2==0)if(sum1!=sum)return -1;
			if(sum2!=0&&sum1==0)if(sum2!=sum)return -1;
			//cc.log("function FeiJi: end is true");
			//------------------------
			return min;
		}
		if(isFeiJi(now_poker)!=-1&&isFeiJi(will_poker)!=-1){
			if(now_poker.length==will_poker.length&&isFeiJi(now_poker)<isFeiJi(will_poker))return true;
		}
		if(len1==0&&isFeiJi(will_poker)!=-1){
			return true;
		}
		cc.log("not feiji");
		//
		//-------------------------------
		return false;//不属于任何一种情况那就不可用
		
	},
});
