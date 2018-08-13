
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
		SP_head_:[],//={o1,o2,o3,o4,o5,o6,o7,o8,o9,o10,o11,o12}
		SP_head:{default:[],type: [cc.Node]},
		SP_pai:{default:[],type: [cc.Node]},
		SP_ox:{default:[],type: [cc.Node]},
		SP_cheng:{default:[],type: [cc.Node]},
		SP_qiang:{default:[],type: [cc.Node]},
		SP_ready:{default:[],type: [cc.Node]},
		SP_without:{default:[],type: [cc.Node]},
		ZI_name:{default:[],type: [cc.Label]},
		ZI_personmoney:{default:[],type: [cc.Label]},
		SP_money:{default:[],type: [cc.Node]},//动画
		SP_button_money:[],//={o1,o2,o3,o4,o5}
		SP_button_circle_white:[],//={o1,o2,o3,o4}
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
		    self.websocket[0].send("R}");
		}, this.node);	    

		this.SP_button_qiang.on(cc.Node.EventType.TOUCH_START, function(event){ 
		    self.websocket[0].send("Q}");
		}, this.node);	
		
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
					    
					    self.BY_zhuang=parseInt(s1)-1;
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
                        cc.log("rank1:" + self.BY_pairank[1-1]);					
                        cc.log("rank2:" + self.BY_pairank[2-1]);				
                        cc.log("rank3:" + self.BY_pairank[3-1]);					
                        cc.log("rank4:" + self.BY_pairank[4-1]);					
                        cc.log("rank5:" + self.BY_pairank[5-1]);				
				    }
				    if(getdata[i0][0]== "A" ){
				        //获取去掉开头的部分:
				        var s1=getdata[i0].slice(2-1,getdata[i0].length);
					
				    	//----------------------------------------
				    	//解压缩数据
						
				    	function webCHARtoNUMBER0to99(c){
						    return c.charCodeAt(0)-23;   //字符->ASCII
                        }
						function NUMBER5X0to99TOBYcardssize5char1tod(number){
						    var pais="123456789abcd";
						    var s="";
						    for (var i=0;i<=4;i++) {
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
						//cc.log("t:"+self.casert);
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
    						self.ZI_casert.string=parseInt((100-self.casert)/20);
    					}
    					if( self.casert>100 && self.casert<=200 ){
    					    self.ZI_caser.string=("房间:"+ self.room +" "+"发牌");
    						//self.ZI_casert.string=(string.format("%d",(200-self.casert)/20));
							self.ZI_casert.string=parseInt((200-self.casert)/20);
    					}
    					if( self.casert>200 && self.casert<=300 ){
    					    self.ZI_caser.string=("房间:"+ self.room +" "+"抢庄");
    						//self.ZI_casert.string=(string.format("%d",(300-self.casert)/20));
							self.ZI_casert.string=parseInt((300-self.casert)/20);
    					}
    					if( self.casert>=300 && self.casert<=400 ){
    					    self.ZI_caser.string=("房间:"+ self.room +" "+"开牌");
    						//self.ZI_casert.string=(string.format("%d",(400-self.casert)/20));
							self.ZI_casert.string=parseInt((400-self.casert)/20);
    					}
    					if( self.casert>400 && self.casert<=500 ){
    					    self.ZI_caser.string=("房间:"+ self.room +" "+"结算");
    						//self.ZI_casert.string=(string.format("%d",(500-self.casert)/20));
							self.ZI_casert.string=parseInt((500-self.casert)/20);
    					}
    					if( self.casert>500 && self.casert<=600 ){
    					    self.ZI_caser.string=("房间:"+ self.room +" "+"收牌");
    						//self.ZI_casert.string=(string.format("%d",(600-self.casert)/20));
							self.ZI_casert.string=parseInt((600-self.casert)/20);
    					}
						
    					//【状态提醒】 }
    					//【牌】 begin
    					
    					if( self.casert<100 ){
    					    for(var i=0;i<=24;i++){
    							self.SP_pai[ i].active=false;
    						}
    						self.pai_action_ed=false;
                        }
						
    					if( self.casert>=100 && self.casert<=105 && self.pai_action_ed==false ){//发牌动画开始
    					    self.pai_action_ed=true;
    					    for( var i_server=0;i_server<=4;i_server++ ){ for( var j=0;j<=4;j++ ){
    						    var i_client=i_server-(self.sofa);
    						    if( i_client<0 ){ i_client=i_client+5; }
    							if( self.BY_ready[i_server]==1 ){
									self.SP_pai[ (i_client)*5+j].active=true;
									var texture0=cc.textureCache.addImage(cc.url.raw("resources/twelve_ox/card_back.png"));
                                    self.SP_pai[ (i_client)*5+j].getComponent(cc.Sprite).spriteFrame.setTexture(texture0);
									self.SP_pai[ (i_client)*5+j].x=0;
    						        self.SP_pai[ (i_client)*5+j].y=0;
    							    
									var anim0=cc.moveBy(1, cc.p(
									    self.paiX[(i_client)*5+j]-960,
									    self.paiY[(i_client)*5+j]-540)).easing(cc.easeCubicActionOut());
									self.SP_pai[ (i_client)*5+j].runAction(anim0);
								}else{
    							    self.SP_pai[ (i_client)*5+j].active=false;
    							}
    						} }
    					}
						
    					if( self.casert>100 && self.casert<120 ){
    					    //动画
    					}
                        if( self.casert>=120 && self.casert<=140 ){//等待
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
    					if( self.casert>140 && self.casert<300 ){//显示我的牌
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
    					if( self.casert>300 && self.casert<580 ){//显示所有人的牌
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
    					if( self.casert>=580 && self.casert<600 && self.paiback_action_ed==false ){//
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

    					if( self.casert<=350 ){ 
    					    for( var i=0;i<=4;i++ ){
    							self.SP_ox[ i].active=false;
                            }
    						self.ox_action_ed=false;
    					}
    					if( self.casert>350 && self.casert<355 && self.ox_action_ed==false ){//动画开始
    					    self.ox_action_ed=true;
    					    for(var i_server=0;i_server<=4;i_server++ ){
    						    var i_client=i_server-(self.sofa);
    						    if( i_client<0 ){ i_client=i_client+5; }
    						    self.SP_ox[ i_client].x=self.paiX[(i_client+1)*5-2]-960;
    						    self.SP_ox[ i_client].y=self.paiY[(i_client+1)*5-2]+180-540;//+1080 not 180
								var anim0=cc.moveBy(1, cc.p(500, -580)).easing(cc.easeCubicActionOut());
                                self.SP_ox[ i_client].runAction(anim0);
								var texture=cc.textureCache.addImage(cc.url.raw(
								    "resources/twelve_ox/niu_"+ self.BY_pairank[i_server] +".png"));
                                self.SP_ox[ i_client].getComponent(cc.Sprite).spriteFrame.setTexture(texture);
    							if( self.BY_ready[i_server]==1 ){
    							    self.SP_ox[ i_client].active=true;
    							}else{
    							    self.SP_ox[ i_client].active=false;
    							}
    						}
    					}/*
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
        }, 1000*0.05);
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
		//控制按钮是否显示
		
		if (this.caser==2&&this.casert<100&&this.BY_ready[this.sofa]==0)
		    this.SP_button_ready.active=true;
		else
		    this.SP_button_ready.active=false;
		if (this.caser==2&&this.casert<300&&this.casert>200&&this.BY_qiang[this.sofa]==0)
		    this.SP_button_qiang.active=true;
		else
		    this.SP_button_qiang.active=false;
        //-----------------------------------------------------------
		
		//全部玩家头像name money	
		if(this.timer0>5&&this.caser==2){
		    //---------------------------------------------------------------
			//准备阶段  玩家信息 准备图标
		    if(this.casert<=100){
					for (var i_server=0;i_server<=4;i_server++){ 
					        var i_client=i_server-(this.sofa);//sofa:0~4 i_client:-4~4 
							if (i_client<0)  i_client=i_client+5 ;
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
			//---------------------------------------------------------------
			//非准备阶段  玩家信息 在线离线图标
			if (this.casert>100) {
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
			//---------------------------------------------------------------
			//抢 
			
			if (this.casert>200 && this.casert<300) {
				for (var i_server=0;i_server<=4;i_server++){ 
					var i_client=i_server-(this.sofa);//sofa:0~4 i_client:-4~4 
					if (i_client<0)  i_client=i_client+5 ;
				    if (this.BY_qiang[i_server]==1) {
				        this.SP_qiang[i_client].active=true;
					}else{
					    this.SP_qiang[i_client].active=false;
					}
				}
			}else{
				for (var i=0;i<=4;i++){
				    this.SP_qiang[i].active=false;
			    }
			}
			//---------------------------------------------------------------
			//---------------------------------------------------------------
			//庄
			/*
			if (casert>300) {
			    this.SP_zhuang.active=true;
				var zhuang_client=this.BY_zhuang-(this.sofa);//this.BY_zhuang:0~4  this.sofa:0~4
				//print("zhuang_client".. zhuang_client)
				//print("BY_zhuang".. BY_zhuang)
				if( zhuang_client<0)  zhuang_client=zhuang_client+5 ;
				this.SP_zhuang.x=this.headX[zhuang_client];
				this.SP_zhuang.y=this.headY[zhuang_client];
			}else{
			    this.SP_zhuang.active=false;
			}*/
			//---------------------------------------------------------------
		}			
		
        //-----------------------------------------------------------
	},
	update_pairank:function(){//--【】【】已测无误(已经全部转移到server)
	
//BY_pairank={0,0,0,0,0} BY_cardscolor5X5="0-3" BY_cardssize5X5="1-d"
//五小10 > 五花6 > 四花5 > 牛牛4 > 牛九3 牛八2 有牛1 > 没牛0。
        function is5small(size5_){
            var is=true;
		    var sum_is5small=0;
		    for(var i_is5small=1;i_is5small<=5;i_is5small++ ){//是否每个都《=4
		        var c_is5small=size5_[i_is5small-1];
		    	if( (c_is5small.charCodeAt(0))<=("4".charCodeAt(0)) &&
		    	    (c_is5small.charCodeAt(0))>=("1".charCodeAt(0)) ){ }else{
		    		is=false; }
	    		sum_is5small=sum_is5small+((c_is5small.charCodeAt(0))-("0".charCodeAt(0)));
	    	}
	    	if( sum_is5small>=10 ){ is=false; }
	    	return is;
        }	
	    function isJQK(size5_){
	        var is=true;
	    	for(var i_isJQK=1;i_isJQK<=5;i_isJQK++ ){
	    	    var c_isJQK=(size5_[i_isJQK-1]);
	    	    if( (c_isJQK.charCodeAt(0))<("b".charCodeAt(0)) ){
	    		    is=false;
	    		}
	    		if( (c_isJQK.charCodeAt(0))>("d".charCodeAt(0)) ){
	    		    is=false;
	    		}
	    	}
	    	return is;
	    }
	    function isAAAA(size5_){
	        var sum_AAAA=0;
		    for(var i_AAAA=1;i_AAAA<=4;i_AAAA++ ){
		        for(var j_AAAA=i_AAAA+1;j_AAAA<=5;j_AAAA++ ){
		    	    if( size5_[i_AAAA-1]!=size5_[j_AAAA-1] ){
		    		    sum_AAAA=sum_AAAA+1;
		    		}
		    	}
		    }
		    if( sum_AAAA==4 ){ return true; }
	    	return false;
	    }
	    function can3to10(size5_)	{
	        var is=false;
	        var s=size5_;
		    var int5=[0,0,0,0,0];
		    for(var i_whichox=0;i_whichox<=4;i_whichox++ ){
		        if( (s[i_whichox].charCodeAt(0))<=("9".charCodeAt(0)) 
		        && (s[i_whichox].charCodeAt(0))>=("1".charCodeAt(0)) )
		           int5[i_whichox]=(s[i_whichox].charCodeAt(0))-("0".charCodeAt(0));
		        else int5[i_whichox]=10 ;
		    }
		    for(var i_3to10=1;i_3to10<=3;i_3to10++ ){
		        for(var j_3to10=i_3to10+1;j_3to10<=4;j_3to10++){
		            for(var k_3to10=j_3to10+1;k_3to10<=5;k_3to10++ ){
					    if( (int5[i_3to10-1]+int5[j_3to10-1]+int5[k_3to10-1])% 10==0 ){
                            is=true;
                        }
                    }
                }
            }  			
	    	return is;
	    }
	    function whichox(size5_){
	        var s = size5_;
	    	var int5=[0,0,0,0,0];
	    	for(var i_whichox=0;i_whichox<=4;i_whichox++ ){
	    	    if( (s[i_whichox].charCodeAt(0))<=("9".charCodeAt(0)) 
	    	    && (s[i_whichox].charCodeAt(0))>=("1".charCodeAt(0)) )
	    	       int5[i_whichox]=(s[i_whichox].charCodeAt(0))-("0".charCodeAt(0));
	    	    else int5[i_whichox]=10 ;
	    	}
	    	var result_int=((int5[1]+int5[2]+int5[3]+int5[4]+int5[0])%10);
	    	if( result_int==0 ){ result_int=10; }
	    	return result_int;//  1->10
	    }
        for(var i_pai=1;i_pai<=5;i_pai++){
	        var color5=this.BY_cardscolor5X5.slice(i_pai*5-4-1,i_pai*5);
	    	var size5=this.BY_cardssize5X5.slice(i_pai*5-4-1,i_pai*5);
	    	this.BY_pairank[i_pai-1]=0;
	    	if( is5small(size5)==true) 
	    	    this.BY_pairank[i_pai-1]=13;
	    	else if( isJQK(size5)==true) 
	    	    this.BY_pairank[i_pai-1]=12;
            else if( isAAAA(size5)==true)
	    	    this.BY_pairank[i_pai-1]=11;
	    	else if( can3to10(size5)==true)
	    	    this.BY_pairank[i_pai-1]=whichox(size5);		
	    	//now BY_pairank=0->13
        }
    },
});
