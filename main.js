
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
		SP_head:[],//={o1,o2,o3,o4,o5,o6,o7,o8,o9,o10,o11,o12}
		SP_ready:[],//={o1,o2,o3,o4,o5,o6,o7,o8,o9,o10,o11,o12}
		SP_qiang:[],//={o1,o2,o3,o4,o5,o6,o7,o8,o9,o10,o11,o12}
		SP_without:[],//={o1,o2,o3,o4,o5,o6,o7,o8,o9,o10,o11,o12}
		SP_head_:[],//={o1,o2,o3,o4,o5,o6,o7,o8,o9,o10,o11,o12}
		ZI_name:[],//={o1,o2,o3,o4,o5,o6,o7,o8,o9,o10,o11,o12}
		ZI_personmoney:[],//={o1,o2,o3,o4,o5,o6,o7,o8,o9,o10,o11,o12}
		SP_button_money:[],//={o1,o2,o3,o4,o5}
		SP_pai:[],//={o1,o2,o3,o4,o5,
        		//o6,o7,o8,o9,o10,
				//o11,o12,o13,o14,o15,
				//o16,o17,o18,o19,o20,
				//o21,o22,o23,o24,o25}
		SP_button_circle_white:[],//={o1,o2,o3,o4}
		SP_ox:[],//={o1,o2,o3,o4,o5}
		SP_cheng:[],//={o1,o2,o3,o4}
		SP_money:[],//={o1,o2,o3,o4}
		ZI_givemoney:[],//={o1,o2,o3,o4}
		ZI_allgivemoney:[],//={o1,o2,o3,o4}
		//SP_history={} for i=1,6,1 do SP_history[i]={o1,o2,o3,o4} end
		ZI_history:[],//={o1,o2,o3,o4}
		ZI_history_rate:[],//={o1,o2,o3,o4}
		SP_BG: {default: null,type: cc.Node},
		SP_exit: {default: null,type: cc.Node},
		SP_button_ready: {default: null,type: cc.Node},
		SP_button_qiang: {default: null,type: cc.Node},
		SP_zhuang: {default: null,type: cc.Node},
		ZI_caser: {default: null,type: cc.Label},
		ZI_casert: {default: null,type: cc.Label},
		SP_note: {default: null,type: cc.Node},
		//---------------NSP:
		NSP_head1: {default: null,type: cc.Node},
		NSP_head2: {default: null,type: cc.Node},
		NSP_head3: {default: null,type: cc.Node},
		NSP_head4: {default: null,type: cc.Node},
		NSP_head5: {default: null,type: cc.Node},
		NSP_card1: {default: null,type: cc.Node},
		NSP_card2: {default: null,type: cc.Node},
		NSP_card3: {default: null,type: cc.Node},
		NSP_card4: {default: null,type: cc.Node},
		NSP_card5: {default: null,type: cc.Node},
		NSP_card6: {default: null,type: cc.Node},
		NSP_card7: {default: null,type: cc.Node},
		NSP_card8: {default: null,type: cc.Node},
		NSP_card9: {default: null,type: cc.Node},
		NSP_card10: {default: null,type: cc.Node},
		NSP_card11: {default: null,type: cc.Node},
		NSP_card12: {default: null,type: cc.Node},
		NSP_card13: {default: null,type: cc.Node},
		NSP_card14: {default: null,type: cc.Node},
		NSP_card15: {default: null,type: cc.Node},
		NSP_card16: {default: null,type: cc.Node},
		NSP_card17: {default: null,type: cc.Node},
		NSP_card18: {default: null,type: cc.Node},
		NSP_card19: {default: null,type: cc.Node},
		NSP_card20: {default: null,type: cc.Node},
		NSP_card21: {default: null,type: cc.Node},
		NSP_card22: {default: null,type: cc.Node},
		NSP_card23: {default: null,type: cc.Node},
		NSP_card24: {default: null,type: cc.Node},
		NSP_card25: {default: null,type: cc.Node},
		NSP_cheng1: {default: null,type: cc.Node},
		NSP_cheng2: {default: null,type: cc.Node},
		NSP_cheng3: {default: null,type: cc.Node},
		NSP_cheng4: {default: null,type: cc.Node},
		NSP_cheng5: {default: null,type: cc.Node},
		NSP_niu1: {default: null,type: cc.Node},
		NSP_niu2: {default: null,type: cc.Node},
		NSP_niu3: {default: null,type: cc.Node},
		NSP_niu4: {default: null,type: cc.Node},
		NSP_niu5: {default: null,type: cc.Node},
		NSP_qiang1: {default: null,type: cc.Node},
		NSP_qiang2: {default: null,type: cc.Node},
		NSP_qiang3: {default: null,type: cc.Node},
		NSP_qiang4: {default: null,type: cc.Node},
		NSP_qiang5: {default: null,type: cc.Node},
		NSP_ready1: {default: null,type: cc.Node},
		NSP_ready2: {default: null,type: cc.Node},
		NSP_ready3: {default: null,type: cc.Node},
		NSP_ready4: {default: null,type: cc.Node},
		NSP_ready5: {default: null,type: cc.Node},
		NSP_without1: {default: null,type: cc.Node},
		NSP_without2: {default: null,type: cc.Node},
		NSP_without3: {default: null,type: cc.Node},
		NSP_without4: {default: null,type: cc.Node},
		NSP_without5: {default: null,type: cc.Node},
		NSP_name1: {default: null,type: cc.Label},
		NSP_name2: {default: null,type: cc.Label},
		NSP_name3: {default: null,type: cc.Label},
		NSP_name4: {default: null,type: cc.Label},
		NSP_name5: {default: null,type: cc.Label},
		NSP_money1: {default: null,type: cc.Label},
		NSP_money2: {default: null,type: cc.Label},
		NSP_money3: {default: null,type: cc.Label},
		NSP_money4: {default: null,type: cc.Label},
		NSP_money5: {default: null,type: cc.Label},
		NSP_money_move1: {default: null,type: cc.Node},
		NSP_money_move2: {default: null,type: cc.Node},
		NSP_money_move3: {default: null,type: cc.Node},
		NSP_money_move4: {default: null,type: cc.Node},
		NSP_money_move5: {default: null,type: cc.Node},
		websocket:[],
    },

    onLoad () {
		this.SP_pai[0]=this.NSP_card1;
		this.SP_pai[1]=this.NSP_card2;
		this.SP_pai[2]=this.NSP_card3;
		this.SP_pai[3]=this.NSP_card4;
		this.SP_pai[4]=this.NSP_card5;
		this.SP_pai[5]=this.NSP_card6;
		this.SP_pai[6]=this.NSP_card7;
		this.SP_pai[7]=this.NSP_card8;
		this.SP_pai[8]=this.NSP_card9;
		this.SP_pai[9]=this.NSP_card10;
		this.SP_pai[10]=this.NSP_card11;
		this.SP_pai[11]=this.NSP_card12;
		this.SP_pai[12]=this.NSP_card13;
		this.SP_pai[13]=this.NSP_card14;
		this.SP_pai[14]=this.NSP_card15;
		this.SP_pai[15]=this.NSP_card16;
		this.SP_pai[16]=this.NSP_card17;
		this.SP_pai[17]=this.NSP_card18;
		this.SP_pai[18]=this.NSP_card19;
		this.SP_pai[19]=this.NSP_card20;
		this.SP_pai[20]=this.NSP_card21;
		this.SP_pai[21]=this.NSP_card22;
		this.SP_pai[22]=this.NSP_card23;
		this.SP_pai[23]=this.NSP_card24;
		this.SP_pai[24]=this.NSP_card25;
		//----------------------------
		this.SP_head[0]=this.NSP_head1;
		this.SP_head[1]=this.NSP_head2;
		this.SP_head[2]=this.NSP_head3;
		this.SP_head[3]=this.NSP_head4;
		this.SP_head[4]=this.NSP_head5;
		//-----------------------------
		this.SP_ready[0]=this.NSP_ready1;
		this.SP_ready[1]=this.NSP_ready2;
		this.SP_ready[2]=this.NSP_ready3;
		this.SP_ready[3]=this.NSP_ready4;
		this.SP_ready[4]=this.NSP_ready5;
		//------------------------------
		this.SP_qiang[0]=this.NSP_qiang1;
		this.SP_qiang[1]=this.NSP_qiang2;
		this.SP_qiang[2]=this.NSP_qiang3;
		this.SP_qiang[3]=this.NSP_qiang4;
		this.SP_qiang[4]=this.NSP_qiang5;
		//-------------------------------
		this.SP_without[0]=this.NSP_without1;
		this.SP_without[1]=this.NSP_without2;
		this.SP_without[2]=this.NSP_without3;
		this.SP_without[3]=this.NSP_without4;
		this.SP_without[4]=this.NSP_without5;
		//-------------------------------------
		this.ZI_name[0]=this.NSP_name1;
		this.ZI_name[1]=this.NSP_name2;
		this.ZI_name[2]=this.NSP_name3;
		this.ZI_name[3]=this.NSP_name4;
		this.ZI_name[4]=this.NSP_name5;
		//-------------------------------
		this.ZI_personmoney[0]=this.NSP_money1;
		this.ZI_personmoney[1]=this.NSP_money2;
		this.ZI_personmoney[2]=this.NSP_money3;
		this.ZI_personmoney[3]=this.NSP_money4;
		this.ZI_personmoney[4]=this.NSP_money5;
		//------------------------------------
		this.SP_ox[0]=this.NSP_niu1;
		this.SP_ox[1]=this.NSP_niu2;
		this.SP_ox[2]=this.NSP_niu3;
		this.SP_ox[3]=this.NSP_niu4;
		this.SP_ox[4]=this.NSP_niu5;
		//--------------------------
		this.SP_cheng[0]=this.NSP_cheng1;
		this.SP_cheng[1]=this.NSP_cheng2;
		this.SP_cheng[2]=this.NSP_cheng3;
		this.SP_cheng[3]=this.NSP_cheng4;
		this.SP_cheng[4]=this.NSP_cheng5;
		//--------------------------------
		this.SP_money[0]=this.NSP_money_move1;
		this.SP_money[1]=this.NSP_money_move2;
		this.SP_money[2]=this.NSP_money_move3;
		this.SP_money[3]=this.NSP_money_move4;
		this.SP_money[4]=this.NSP_money_move5;
		
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
		this.SP_exit.on(cc.Node.EventType.TOUCH_START, function(event){ 
		    //断开连接
			/*
			socket:close()
			cc.Director:getInstance():getScheduler():unscheduleScriptEntry(schedulerID1)
			local newScene = import("app.scenes.HomeScene"):new()
            display.replaceScene(newScene,"crossFade",0,0)
			*/
		}, this.node);

		this.SP_button_ready.on(cc.Node.EventType.TOUCH_START, function(event){ 
		    //socket:send(ByteArray.new():writeString("R}"):getPack())
		}, this.node);	    

		this.SP_button_qiang.on(cc.Node.EventType.TOUCH_START, function(event){ 
		    //socket:send(ByteArray.new():writeString("Q}"):getPack())
		}, this.node);	
		
		this.SP_in_1.on(cc.Node.EventType.TOUCH_START, function(event){ 
		    self.SP_in_1.x=-5000;self.SP_in_1.y=-5000;
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
		for(var i=0;i<=24;i++)this.SP_pai[i].active=false;
		for(var i=0;i<=4;i++){
			this.SP_head[i].active=false;
			this.SP_ready[i].active=false;
			this.SP_qiang[i].active=false;
			this.SP_without[i].active=false;
			this.ZI_name[i].node.active=false;
			this.ZI_personmoney[i].node.active=false;
			this.SP_ox[i].active=false;
			this.SP_cheng[i].active=false;
			this.SP_money[i].active=false;
		}
		this.SP_zhuang.active=false;
		this.SP_button_qiang.active=false;
		this.SP_note.active=false;
		this.SP_button_ready.active=false;
		this.ZI_caser.node.active=false;
		this.ZI_casert.node.active=false;
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
		this.makesocket_caser2();
		//MainScene:
		this.SP_BG.active=true;
		this.SP_exit.active=true;
		for(var i=0;i<=24;i++)this.SP_pai[i].active=true;
		for(var i=0;i<=4;i++){
			this.SP_head[i].active=true;
			this.SP_ready[i].active=true;
			this.SP_qiang[i].active=true;
			this.SP_without[i].active=true;
			this.ZI_name[i].node.active=true;
			this.ZI_personmoney[i].node.active=true;
			this.SP_ox[i].active=true;
			this.SP_cheng[i].active=true;
			this.SP_money[i].active=true;
		}
		this.SP_zhuang.active=true;
		this.SP_button_qiang.active=true;
		this.SP_note.active=true;
		this.SP_button_ready.active=true;
		this.ZI_caser.node.active=true;
		this.ZI_casert.node.active=true;
	},
	makesocket_caser1:function(){
		var self =this;
	    //var webSocket1=new WebSocket("ws://47.93.2.137:54320/ws");
	    //var webSocket1=new WebSocket("ws://106.14.181.7:54320/ws");
	    //var webSocket1=new WebSocket("ws://www.ququking.top:54320/ws");
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
					//webSocket1.close();
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
	    //var webSocket=new WebSocket("ws://106.14.181.7:54321/ws");
	    //var webSocket=new WebSocket("ws://www.ququking.top:54321/ws");
	    var webSocket=new WebSocket("ws://localhost:54321/ws");
		this.websocket[0]=webSocket;
	    var con_ok=true;//客户端心跳检测{1/3}
        var nettydata="";
        
	        webSocket.onmessage=function(event){
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
				    if(getdata[i0][0]== "q"){
				        //获取去掉开头的部分:
				        var s1=getdata[i0].slice(2-1,getdata[i0].length);
					    self.BY_qiang[parseInt(s1[2-1])-1]=parseInt(s1[0]);
				    }
				    if(getdata[i0][0]== "z" ){
				        //获取去掉开头的部分:
				        var s1=getdata[i0].slice(2-1,getdata[i0].length);
					    
					    self.BY_zhuang=parseInt(s1);
				    }
				    if( getdata[i0][0]== "S" ){
				        //获取去掉开头的部分:
				        var s1=getdata[i0].slice(2-1,getdata[i0].length);
					
					    //----------------------------------------
					    //解压缩数据
						
					    function webCHARtoNUMBER0to99(c){
						    return c.charCodeAt(0)-23;   //字符->ASCII
                        }
						
					    function NUMBER25X0to99TOBYcardssize25char1tod(number){
						    var pais="123456789abcd";
						    var s="";
						    for(var i=0;i<=24;i++ ){
						        var ii=(number[i]-1)%13+1;
						        s=s + pais[ii-1];
						    }
					    	return s;
					    }
						
				    	function NUMBER25X0to99TOBYcardscolor25char0to3(number){
				    		var s="";
				    		for(var i=0;i<=24;i++){
				    		    var t1=parseInt((number[i]-1)/13);
				    		    s=s + t1.toString();
				    		}
				    		return s;
				    	}
				    	//----------------------------------------

                        var cards = new Array();  
                        for(var i=0;i<=24;i++){
				    	    cards[i]=webCHARtoNUMBER0to99(s1[i]);
                        }		

                        self.BY_cardssize5X5=NUMBER25X0to99TOBYcardssize25char1tod(cards);
                        self.BY_cardscolor5X5=NUMBER25X0to99TOBYcardscolor25char0to3(cards);
                        cc.log(self.BY_cardssize5X5);				
                        cc.log(self.BY_cardscolor5X5);					

                        self.update_pairank();//BY_pairank={0,0,0,0,0} BY_cardscolor5X5="0-3" BY_cardssize5X5="1-d"	
                        cc.log("rank1:" + BY_pairank[1-1]);					
                        cc.log("rank2:" + BY_pairank[2-1]);				
                        cc.log("rank3:" + BY_pairank[3-1]);					
                        cc.log("rank4:" + BY_pairank[4-1]);					
                        cc.log("rank5:" + BY_pairank[5-1]);				
				    }
				    if(getdata[i0][0]== "A" ){
				        //获取去掉开头的部分:
				        var s1=getdata[i0].slice(2-1,getdata[i0].length);
					
				    	//----------------------------------------
				    	//解压缩数据
						
				    	function webCHARtoNUMBER0to99(c){
						    return c.charCodeAt(0)-23;   //字符->ASCII
                        }
				    	function NUMBER25X0to99TOBYcardssize25char1tod(number){
						    var pais="123456789abcd";
						    var s="";
						    for(var i=0;i<=24;i++ ){
						        var ii=(number[i]-1)%13+1;
						        s=s + pais[ii-1];
						    }
					    	return s;
					    }
				    	function NUMBER5X0to99TOBYcardscolor5char0to3(number){
				    		var s="";
				    		for(var i=0;i<=4;i++){
				    		    s=s + parseInt((number[i]-1)/13);
				    		}
				    		return s;
				    	}
				    	//----------------------------------------
                        var cards = new Array();  
                        for(var i=0;i<=4;i++){
				    	    cards[i]=webCHARtoNUMBER0to99(s1[i]);
                        }
                        self.BY_cardssize5=NUMBER5X0to99TOBYcardssize5char1tod(cards);
                        self.BY_cardscolor5=NUMBER5X0to99TOBYcardscolor5char0to3(cards);	
                        cc.log(self.BY_cardssize5);					
                        cc.log(self.BY_cardscolor5);					
				    }
				    if( getdata[i0][0]== "P" ){
				        //获取去掉开头的部分:
				        var s1=getdata[i0].slice(2-1,getdata[i0].length);
					
					    //分开数据
						
				        var datat=s1.split("\n");
					    //
					    var P_sofa=parseInt(datat[1-1]);
					    var P_link_ready_=datat[2-1];//"0" or "1"
					    var P_money0=datat[3-1];//压缩数据
					    var P_name=datat[4-1];
					    var P_photo0=datat[5-1];//压缩数据
					
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
					
				    	var P_money=webSTRINGtoINT(P_money0);
				    	var P_photo=webSTRINGtoINT(P_photo0);
					
				    	cc.log("sofa"+ P_sofa);
				    	cc.log("link ready "+ P_link_ready_);
				    	cc.log("money"+ P_money);
				    	cc.log("name"+ P_name);
					    cc.log("photo"+ P_photo);
					
	    				self.BY_link[P_sofa-1]=parseInt(P_link_ready_[0]);
	    				self.BY_ready[P_sofa-1]=parseInt(P_link_ready_[1]);
	    				self.BY_money[P_sofa-1]=P_money;
	    				self.BY_name[P_sofa-1]=P_name;
	    				self.BY_photo[P_sofa-1]=P_photo;
	    			}
	    		    if( getdata[i0][0]== "T" ){

	    			    //获取去掉开头的部分:
				        var s1=getdata[i0].slice(2-1,getdata[i0].length);
					
    					
    					//获取timer作为client的timer
    					self.casert=parseInt(s1);

    					//timer处理待发送数据：============================================
    					//timer处理待发送数据：============================================
    					//timer处理待发送数据：============================================
    					//timer处理待发送数据：============================================
    					//timer处理待发送数据：============================================
    					//【赌注的client改变2/2】begin
    					if (self.casert>610 && self.casert<=620) {
    					    for (var i=1;i<=4;i++)  self.my_gived_money[i]=0 ; 
    						self.my_money_tip=1;
    					}
    					//【赌注的client改变2/2】end
    					//timer二次事件发送：==============================================
    					//timer二次事件发送：==============================================
    					//timer二次事件发送：==============================================
    					//timer二次事件发送：==============================================
    					//timer二次事件发送：==============================================
    
    					//timer操作UI:=====================================================
    					//timer操作UI:=====================================================
    					//timer操作UI:=====================================================
    					//timer操作UI:=====================================================
    					//timer操作UI:=====================================================
    
    					//【状态提醒】 begin
						
						
    					if( self.casert>=0 && self.casert<=100 ){
    					    self.ZI_caser.string=("房间:"+ self.room +" "+"准备");
    						//self.ZI_casert.string=(string.format("%d",(100-self.casert)/20));
    						self.ZI_casert.string=((100-self.casert)/20);
    					}
    					if( self.casert>100 && self.casert<=200 ){
    					    self.ZI_caser.string=("房间:"+ self.room +" "+"发牌");
    						//self.ZI_casert.string=(string.format("%d",(200-self.casert)/20));
							self.ZI_casert.string=((200-self.casert)/20);
    					}
    					if( self.casert>200 && self.casert<=300 ){
    					    self.ZI_caser.string=("房间:"+ self.room +" "+"抢庄");
    						//self.ZI_casert.string=(string.format("%d",(300-self.casert)/20));
							self.ZI_casert.string=((300-self.casert)/20);
    					}
    					if( self.casert>=300 && self.casert<=400 ){
    					    self.ZI_caser.string=("房间:"+ self.room +" "+"开牌");
    						//self.ZI_casert.string=(string.format("%d",(400-self.casert)/20));
							self.ZI_casert.string=((400-self.casert)/20);
    					}
    					if( self.casert>400 && self.casert<=500 ){
    					    self.ZI_caser.string=("房间:"+ self.room +" "+"结算");
    						//self.ZI_casert.string=(string.format("%d",(500-self.casert)/20));
							self.ZI_casert.string=((500-self.casert)/20);
    					}
    					if( self.casert>500 && self.casert<=600 ){
    					    self.ZI_caser.string=("房间:"+ self.room +" "+"收牌");
    						//self.ZI_casert.string=(string.format("%d",(600-self.casert)/20));
							self.ZI_casert.string=((600-self.casert)/20);
    					}
						
    					//【状态提醒】 }
    					//【牌】 begin
    					
    					if( self.casert<100 ){
    					    for(var i=0;i<=24;i++){
    							self.SP_pai[ i].active=false;
    						}
    						self.pai_action_ed=false;
                        }
						/*
    					if( self.casert>=100 && self.casert<=105 && self.pai_action_ed==false ){//发牌动画开始
    					    self.pai_action_ed=true;
    					    for( var i_server=1;i_server<=5;i_server++ ){ for( var j=0;j<=4;j++ ){
    						    var i_client=i_server-(sofa-1);
    						    if( i_client<1 ){ i_client=i_client+5; }
    							if( self.BY_ready[i_server]==1 ){
    						        self.SP_pai[ (i_client-1)*5+j]:setSpriteFrame(cc.SpriteFrameCache:getInstance():
    							        getSpriteFrame("card_back.png"))
    						        self.SP_pai[ (i_client-1)*5+j]:align(display.CENTER,960,540)
    							    self.SP_pai[ (i_client-1)*5+j].active=true;
					            animate=cc.MoveTo:create(1,cc.p(paiX[(i_client-1)*5+j],paiY[(i_client-1)*5+j]))
                                    animate2=cc.EaseExponentialOut:create(animate)//动画模式
                                    self.SP_pai[ (i_client-1)*5+j]:runAction(animate2)//运行动画
    							else
    							    self.SP_pai[ (i_client-1)*5+j].active=false;
    							}
    						} }
    					}
    					if( self.casert>100 && self.casert<120 ){
    					    //动画
    					}
                        if( self.casert>=120 && self.casert<=140 ){//等待
    					var i_server=0
    					    for( var i_server=0;i_server<=4;i_server++ ){ for( var j=0;j<=4;j++ ){
    						    var i_client=i_server-(sofa-1)
    						    if( i_client<1 ){ i_client=i_client+5 }
    							if( self.BY_ready[i_server]==1 ){
    						        self.SP_pai[ (i_client-1)*5+j]:setSpriteFrame(cc.SpriteFrameCache:getInstance():
    							        getSpriteFrame("card_back.png"))
    						        self.SP_pai[ (i_client-1)*5+j]:align(display.CENTER,paiX[(i_client-1)*5+j],paiY[(i_client-1)*5+j])
    							    self.SP_pai[ (i_client-1)*5+j].active=true;
    							else
    								self.SP_pai[ (i_client-1)*5+j].active=false;	
    							}
    						} }
    					}
    					if( self.casert>140 && self.casert<300 ){//显示我的牌
    						for( var i=0;i<=4;i++ ){
    						    if( self.timer0>10 ){
    							
    						    self.SP_pai[ i]:setSpriteFrame(cc.SpriteFrameCache:getInstance():
    							    getSpriteFrame("card_"+
    								     string.sub(BY_cardscolor5,i,i)+
    									 string.sub(BY_cardssize5,i,i)+
    									 ".png"))
    							
    
    							}//timer
    						    self.SP_pai[ i]:align(display.CENTER,paiX[i],paiY[i])
    							self.SP_pai[ i].active=true;
    						}
    						self.paiback_action_ed=false
    					}
    					if( self.casert>300 && self.casert<580 ){//显示所有人的牌
    						for( var i_server=0;i_server<=4;i_server++ ){
                            for( var j=0;j<=4;j++ ){
    						    var i_client=i_server-(sofa-1)
    						    if( i_client<1 ){ i_client=i_client+5 }
    						    if( self.timer0>10 ){ 
                                if(	self.BY_ready[i_server]==1 ){
    							    self.SP_pai[ (i_client-1)*5+j]:setSpriteFrame(cc.SpriteFrameCache:getInstance():
    							        getSpriteFrame("card_"+
    								        string.sub(BY_cardscolor5X5,(i_server-1)*5+j,(i_server-1)*5+j)+
    									    string.sub(BY_cardssize5X5,(i_server-1)*5+j,(i_server-1)*5+j)+
    									    ".png")) 
    								self.SP_pai[ (i_client-1)*5+j]:align(display.CENTER,paiX[(i_client-1)*5+j],paiY[(i_client-1)*5+j])
    							    self.SP_pai[ (i_client-1)*5+j].active=true;
    							else
    							    self.SP_pai[ (i_client-1)*5+j].active=false;
    							}
    							}
    						    
    						}
    						}
    						self.paiback_action_ed=false
    					}
    					if( self.casert>=580 && self.casert<600 && self.paiback_action_ed==false ){//
    					    self.paiback_action_ed=true
    						var i_server=0
    					    for( var i_server=0;i_server<=4;i_server++ ){ for( var j=0;j<=4;j++ ){
    						    var i_client=i_server-(sofa-1)
    						    if( i_client<1 ){ i_client=i_client+5 }
    							if( self.BY_ready[i_server]==1 ){
    						        self.SP_pai[ (i_client-1)*5+j]:setSpriteFrame(cc.SpriteFrameCache:getInstance():
    							        getSpriteFrame("card_back.png"))
    						        self.SP_pai[ (i_client-1)*5+j]:align(display.CENTER,paiX[(i_client-1)*5+j],paiY[(i_client-1)*5+j])
    							    self.SP_pai[ (i_client-1)*5+j].active=true;
    					            animate=cc.MoveTo:create(1,cc.p(960,540))
                                    animate2=cc.EaseExponentialOut:create(animate)//动画模式
                                    self.SP_pai[ (i_client-1)*5+j]:runAction(animate2)//运行动画
    							else
    							    self.SP_pai[ (i_client-1)*5+j].active=false;
    							}
    						} }
    					}*/
    					//【牌】 }
    					//【牛等级】 begin
/*
    					if( self.casert<=350 ){ 
    					    for( var i=0;i<=4;i++ ){
    							SP_ox[ i].active=false;
                            }
    						ox_action_ed=false
    					}
    					if( self.casert>350 && self.casert<355 && ox_action_ed==false ){//动画开始
    					    ox_action_ed=true
    						local i_server=0
    					    for( i_server=1,5,1 ){
    						    local i_client=i_server-(sofa-1)
    						    if( i_client<1 ){ i_client=i_client+5 }
    						    SP_ox[ i_client]:align(display.CENTER, paiX[i_client*5-2], paiY[i_client*5-2]+1080)
    							animate=cc.MoveTo:create(1,cc.p(paiX[i_client*5-2],paiY[i_client*5-2]))
                                animate2=cc.EaseExponentialOut:create(animate)//动画模式
                                SP_ox[ i_client]:runAction(animate2)//运行动画
    							SP_ox[ i_client]:setSpriteFrame(cc.SpriteFrameCache:getInstance():
    							    getSpriteFrame("niu_"+ BY_pairank[i_server] +".png"))
    							if( BY_ready[i_server]==1 ){
    							    SP_ox[ i_client].active=true;
    							else
    							    SP_ox[ i_client].active=false;
    							}
    						}
    					}
    					if( self.casert>350 && self.casert<370 ){
    					    //动画
    					}
    					if( self.casert>=370 && self.casert<=540 ){//等待
    					    local i_server=0
    					    for( i_server=1,5,1 ){
    						    local i_client=i_server-(sofa-1)
    						    if( i_client<1 ){ i_client=i_client+5 }
    						    SP_ox[ i_client]:setSpriteFrame(cc.SpriteFrameCache:getInstance():
    							    getSpriteFrame("niu_"+ BY_pairank[i_server] +".png"))
    						    SP_ox[ i_client]:align(display.CENTER, paiX[i_client*5-2], paiY[i_client*5-2])
    							if( BY_ready[i_server]==1 ){
    							    SP_ox[ i_client].active=true;
    							else
    							    SP_ox[ i_client].active=false;
    							}
                            }
    						oxback_action_ed=false
    					}
    					if( self.casert>540 && self.casert<=560 && oxback_action_ed==false ){//动画关闭
    					    oxback_action_ed=true
    						local i_server=0
    					    for( i_server=1,5,1 ){
    						    local i_client=i_server-(sofa-1)
    						    if( i_client<1 ){ i_client=i_client+5 }
    						    SP_ox[ i_client]:align(display.CENTER, paiX[i_client*5-2], paiY[i_client*5-2])
    							animate=cc.MoveTo:create(1,cc.p(paiX[i_client*5-2],paiY[i_client*5-2]+1080))
                                animate2=cc.EaseExponentialOut:create(animate)//动画模式
                                SP_ox[ i_client]:runAction(animate2)//运行动画
    							if( BY_ready[i_server]==1 ){
    							    SP_ox[ i_client].active=true;
    							else
    							    SP_ox[ i_client].active=false;
    							}
    						}
    					}
    					if( self.casert>560 ){
    						for( var i=0;i<=4;i++ ){
    							SP_ox[ i].active=false;
                            }
    					}
    					
    					//【牛等级】 }
    					//【倍率】 begin
    					
    					if( self.casert<=400 ){ 
    					    for( var i=0;i<=4;i++ ){
    							self.SP_cheng[ i].active=false;
                            }
    						cheng_action_ed=false
    					}
    					if( self.casert>400 && self.casert<405 && cheng_action_ed==false ){//动画
    					    cheng_action_ed=true
    
    						local i_server=0
    					    for( i_server=1,5,1 ){
    						    local i_client=i_server-(sofa-1)
    						    if( i_client<1 ){ i_client=i_client+5 }
    							    
    							    if( BY_pairank[i_server]~=0 && BY_ready[i_server]==1 ){
    						            self.SP_cheng[ i_client]:align(display.CENTER, paiX[i_client*5-2], paiY[i_client*5-2]+1080)
    							        animate=cc.MoveTo:create(1,cc.p(paiX[i_client*5-2],paiY[i_client*5-2]+100))
                                        animate2=cc.EaseExponentialOut:create(animate)//动画模式
                                        self.SP_cheng[ i_client]:runAction(animate2)//运行动画
    							        self.SP_cheng[ i_client]:setSpriteFrame(cc.SpriteFrameCache:getInstance():
    							            getSpriteFrame("cheng_"+ ox_bei[BY_pairank[i_server]] +".png"))
    							        self.SP_cheng[ i_client].active=true;
    								else
    								    self.SP_cheng[ i_client].active=false;
    								}
    							
    						}
    					}
    					if( self.casert>400 && self.casert<420 ){
    					    //动画
    					}
    					if( self.casert>=420 && self.casert<500 ){//等待
    
    						local i_server=0
    					    for( i_server=1,5,1 ){
    						    local i_client=i_server-(sofa-1)
    						    if( i_client<1 ){ i_client=i_client+5 }
    							
    							    if( BY_pairank[i_server]~=0 && BY_ready[i_server]==1 ){
    								    //cc.log("BY_pairank[i_server]"+ BY_pairank[i_server])
    						            self.SP_cheng[ i_client]:align(display.CENTER, paiX[i_client*5-2], paiY[i_client*5-2]+100)
    							        self.SP_cheng[ i_client]:setSpriteFrame(cc.SpriteFrameCache:getInstance():
    							            getSpriteFrame("cheng_"+ ox_bei[BY_pairank[i_server]] +".png"))
    							        self.SP_cheng[ i_client].active=true;
    								else
    								    //cc.log("BY_pairank[i_server]"+ BY_pairank[i_server])
    								    self.SP_cheng[ i_client].active=false;
    								}
    							
    						}
    						chengback_action_ed=false
    					}
    					if( self.casert>=500 && self.casert<=505 && chengback_action_ed==false ){//退出
    					    chengback_action_ed=true
    
    						local i_server=0
    					    for( i_server=1,5,1 ){
    						    local i_client=i_server-(sofa-1)
    						    if( i_client<1 ){ i_client=i_client+5 }
    						    
    							    if( BY_pairank[i_server]~=0 && BY_ready[i_server]==1 ){
    						        self.SP_cheng[ i_client]:align(display.CENTER, paiX[i_client*5-2], paiY[i_client*5-2]+100)
    							    animate=cc.MoveTo:create(1,cc.p(paiX[i_client*5-2],paiY[i_client*5-2]+1080))
                                    animate2=cc.EaseExponentialOut:create(animate)//动画模式
                                    self.SP_cheng[ i_client]:runAction(animate2)//运行动画
    							    self.SP_cheng[ i_client].active=true;
    								else
    								self.SP_cheng[ i_client].active=false;
    							    }
    						}
    					}
    					if( self.casert>520 ){
    						for( var i=0;i<=4;i++ ){
    							self.SP_cheng[ i].active=false;
                            }
    					}
    					//【倍率】 }
    					//【奖金】 begin
    					
    					if( self.casert<430 ){ 
    					    for( var i=0;i<=4;i++ ){
    							self.SP_money[ i].active=false;
                            }
    						money_action_ed=false
    					}
    					if( self.casert>=430 && self.casert<=435 && money_action_ed==false ){
    					    money_action_ed=true
    						local i_server=0
    					    for( i_server=1,5,1 ){
                                local i_client=i_server-(sofa-1)
    						    if( i_client<1 ){ i_client=i_client+5 }		
    							local zhuang_server=BY_zhuang
                                local zhuang_client=zhuang_server-(sofa-1)
                                if( zhuang_client<1 ){ zhuang_client=zhuang_client+5 }							
    						if( i_server~=BY_zhuang ){
    						    cc.log("BY_pairank[i_server]"+ BY_pairank[i_server])
    						    cc.log("BY_pairank[BY_zhuang]"+ BY_pairank[BY_zhuang])
    						    if( BY_pairank[i_server]>BY_pairank[zhuang_server] ){
    						        self.SP_money[ i_client]:align(display.CENTER, paiX[5*zhuang_client-2], paiY[5*zhuang_client-2])
    							    animate=cc.MoveTo:create(2,cc.p(paiX[5*i_client-2],paiY[5*i_client-2]+100))
                                    animate2=cc.EaseExponentialOut:create(animate)//动画模式
                                    self.SP_money[ i_client]:runAction(animate2)//运行动画
    							    self.SP_money[ i_client].active=true;
    								if( BY_ready[i_server]==0 ){ self.SP_money[ i_client].active=false; }
    							}else if( BY_pairank[i_server]<BY_pairank[zhuang_server] ){
    						        self.SP_money[ i_client]:align(display.CENTER, paiX[5*i_client-2],paiY[5*i_client-2]+100)
    							    animate=cc.MoveTo:create(2,cc.p(paiX[5*zhuang_client-2], paiY[5*zhuang_client-2]))
                                    animate2=cc.EaseExponentialOut:create(animate)//动画模式
                                    self.SP_money[ i_client]:runAction(animate2)//运行动画
    							    self.SP_money[ i_client].active=true;
    								if( BY_ready[i_server]==0 ){ self.SP_money[ i_client].active=false; }
    							else
    							    self.SP_cheng[ i_client].active=false;
    							}
    						} 
    						}
    					}
    					if( self.casert>430 && self.casert<450 ){
    					    //动画
    					}
    					if( self.casert>=480 ){
    					    for( var i=0;i<=4;i++ ){
    							self.SP_money[ i].active=false;
                            }
    					}
    					
    					//【奖金】 }
*/
	                }
    				if (getdata[i0][0]=="3") {
    				    //获取去掉开头的部分:
						
    				    var s1=getdata[i0].slice(2-1,getdata[i0].length);
    					//分开数据
    				    var s2=s1.split("~");
    					self.room=parseInt(s2[0]);
    					self.sofa=parseInt(s2[1]);
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
        }, 1000*0.05);
    	//----------------------------------------------------------
    	//##########################################################################################
	
    				}//if string.sub(getdata[i0],1,1)=="3" then
    			}//for i0=1,table.getn(getdata),1 do
				}//if (nettydata[nettydata.length-1]=="}") {//防拆包2/3
    	    }
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
		//控制按钮是否显示
		
		if (this.caser==2&&this.casert<100&&this.BY_ready[this.sofa-1]==0)
		    this.SP_button_ready.active=true;
		else
		    this.SP_button_ready.active=false;
		if (this.caser==2&&this.casert<300&&this.casert>200&&this.BY_qiang[this.sofa-1]==0)
		    this.SP_button_qiang.active=true;
		else
		    this.SP_button_qiang.active=false;
        //-----------------------------------------------------------
		
		//全部玩家头像name money	
		if(this.timer0>5&&this.caser==2){
		    //---------------------------------------------------------------
			//准备阶段  玩家信息 准备图标
		    if(this.casert<=100){
					for (var i_server=1;i_server<=5;i_server++){ 
					        var i_client=i_server-(this.sofa-1);
							if (i_client<1)  i_client=i_client+5 ;
					    if (this.BY_link[i_server-1]==1){
                            //--------------------------------
							var texture=cc.textureCache.addImage(cc.url.raw("textures/img/twelve_ox/head"+ this.BY_photo[i_server-1] +".png"));//assets/img/BG_up.png
		                    this.SP_head[i_client-1].getComponent(cc.Sprite).spriteFrame.setTexture(texture);
                            this.SP_head[i_client-1].active=true;/*
							//---------------------------------
							this.ZI_name[i_client-1].string=this.BY_name[i_server-1];
                            this.ZI_name[i_client-1].active=true;
							//----------------------------------
							this.ZI_personmoney[i_client-1].string=this.BY_money[i_server-1];
                            this.ZI_personmoney[i_client-1].active=true;
							//----------------------------------
							if (this.BY_ready[i_server-1]==1) 
							    this.SP_ready[i_client-1].active=true;
							else
								this.SP_ready[i_client-1].active=false;	*/
							//----------------------------------
						}
						else{
						    this.SP_head[i_client-1].active=false;
							this.ZI_name[i_client-1].node.active=false;
							this.ZI_personmoney[i_client-1].node.active=false;
							this.SP_ready[i_client-1].active=false;
                        }
					}
			}
			//---------------------------------------------------------------
			//---------------------------------------------------------------
			//非准备阶段  玩家信息 在线离线图标
			/*if (casert>100) {
					for (var i_server=1;i_server<=5;i_server++) { 
					        var i_client=i_server-(this.sofa-1);
							if (i_client<1)  i_client=i_client+5 ;
							this.SP_ready[i_client].active=false;	
					    if (this.BY_link[i_server]==1 || this.BY_ready[i_server]==1) {
                            //--------------------------------
							var texture=cc.textureCache.addImage(cc.url.raw("img/twelve_ox/head"+ BY_photo[i_server] +".png"));//assets/img/BG_up.png
		                    this.SP_head[i_client].getComponent(cc.Sprite).spriteFrame.setTexture(texture);
                            this.SP_head[i_client].active=true;
							//---------------------------------
							this.ZI_name[i_client].string=(this.BY_name[i_server]);
                            this.ZI_name[i_client].active=true;
							//----------------------------------
							this.ZI_personmoney[i_client].string=(this.BY_money[i_server]);
                            this.ZI_personmoney[i_client].active=true;
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
							ZI_name[i_client].active=false;
							ZI_personmoney[i_client].active=false;
							SP_ready[i_client].active=false;
							SP_head[i_client].active=false;
                        }

					}
			}else{
			    for (var i=1;i<=5;i++) {
					this.SP_without[i].active=false;
				}
			}*/
			//---------------------------------------------------------------
			//---------------------------------------------------------------
			//抢 
			/*
			if (this.casert>200 && this.casert<300) {
			    //var i;
				for(var  i_server=1;i_server<=5;i_server++ ){
				    var i_client=i_server-(sofa-1);
					if (i_client<1 ) i_client=i_client+5 ;
				    if (this.BY_qiang[i_server]==1) {
				        this.SP_qiang[i_client].active=true;
					}else{
					    this.SP_qiang[i_client].active=false;
					}
				}
			}else{
				for (var i=1;i<=5;i++){
				    this.SP_qiang[i].active=false;
			    }
			}*/
			//---------------------------------------------------------------
			//---------------------------------------------------------------
			//庄
			/*
			if (casert>300) {
			    this.SP_zhuang.active=true;
				var zhuang_client=this.BY_zhuang-(sofa-1);
				//print("zhuang_client".. zhuang_client)
				//print("BY_zhuang".. BY_zhuang)
				if( zhuang_client<1)  zhuang_client=zhuang_client+5 ;
				this.SP_zhuang.x=this.headX[zhuang_client];
				this.SP_zhuang.y=this.headY[zhuang_client];
			}else{
			    this.SP_zhuang.active=false;
			}*/
			//---------------------------------------------------------------
		}			
		
        //-----------------------------------------------------------
	},
});
