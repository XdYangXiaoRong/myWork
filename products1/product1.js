$(function(){
	
	//获取数据库的数据
	var clothes=obj.clothes;
	var daily=obj.daily;
	var maternalSupplies=obj.maternalSupplies;
	var underwear=obj.underwear;
	//写入数据
	qiye.deal(clothes,"#products1");
	qiye.deal(daily,"#products2");
	qiye.deal(maternalSupplies,"#products3");
	qiye.deal(underwear,"#products4");

	var clothesTop,dailyTop,maternalSuppliesTop,underwearTop;
	setTimeout(function(){
		clothesTop=$("#0001");
		dailyTop=$("#0002");
		maternalSuppliesTop=$("#0003");
		underwearTop=$("#0004");

		qiye.goTop(".for1",clothesTop);
		qiye.goTop(".for2",dailyTop);
		qiye.goTop(".for3",maternalSuppliesTop);
		qiye.goTop(".for4",underwearTop);
		//随着屏幕的浏览导航栏的背景色的改变
		var arrayTops=[clothesTop,dailyTop,maternalSuppliesTop,underwearTop,$("p.empty")];
		console.log(arrayTops);
		$(window).scroll(function(){
			var ln=$(".choose li").length;
			var chooseHeight= $('.choose').height();
			for(var i=0;i<ln;i++){
				console.log($(document).scrollTop());
				if($(document).scrollTop()>=arrayTops[i].offset().top-chooseHeight&&$(document).scrollTop()<arrayTops[i+1].offset().top-chooseHeight){
					$(".choose li").removeAttr("id");
					console.log(i);
					$(".choose li").eq(i).attr("id","now");
					console.log("aaa");
					return;
				}else{
					console.log("bbbb");
				}
			}
		})
		
	},1);
	
	//页面滚动到导航栏时，固定导航栏的位置
	var topHeight=$(".choose").offset().top;
	$(window).scroll(function(){
		if($(document).scrollTop()>topHeight){
			$(".choose").addClass("fix");
		}else{
			$(".choose").removeClass("fix");
		}
		//超出两屏的高度时，出现回到顶部的按钮
		var screenHeight=$(window).height();
		if($(document).scrollTop()>screenHeight*2){
			$("#gotop").css("display","block");
		}else{
			$("#gotop").css("display","none");
		}
	})

})
var qiye={
	deal:function(obj,id){//定义一个在对应项写入数据的方法
		var html="";
		for(var i=0;i<obj.length;i++){
			html+='<li><a href="javascript:void(0)"><img src='+obj[i].imgUrl+'><p class="price"><span>￥'+obj[i].price
			+'</span><em>'+obj[i].pricebefore+'</em></p><p class="title">'+ obj[i].title+'</p></a></li>';
		}
		if(obj.length%2==1){
			html+='<li><a href="javascript:void(0)"><img src="images/empty.png"></a></li>';
		}
		$(id).html(html);
	},
	goTop:function(obj,value){
		$(obj).click(function(){
		$(document).scrollTop(value.offset().top - $('.choose').height() + 1);//要在点击的时候才能计算offset().top,因为导航栏变成了浮动元素，不在占用这部分空间
		$(this).siblings().removeAttr("id");
		$(this).attr("id","now");

	})
	}
};