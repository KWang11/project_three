;(function(){
	$(function() {
//				var str = getCookie("goods");

//				var str1 = JSON.parse(str);
//
				console.log(getCookie("g1").length)
				if(getCookie("g1").length > 0){
					
				
					console.log(1111);
					var arr = getCookie("g1").split(",");
					console.log(arr[0])
					//			$.each(str1, function(idx, item) {
					//--------
	
					var $oDiv = $("<div/>").addClass("goods");
	
					var $h2 = $('<h2/>').addClass("top_lo");
	
					$h2.appendTo($oDiv);
	
					$(' <span class="as1_lo">商品数量</span>').addClass("as1_lo").appendTo($h2);
					$('<span class="as2_lo">商品名称</span>').addClass("as2_lo").appendTo($h2);
					$(' <span class="as3_lo">单价</span>').addClass("as3_lo").appendTo($h2);
					$(' <span class="as4_lo">数量</span>').addClass("as4_lo").appendTo($h2);
					$(' <span class="as5_lo">小计</span>').addClass("as5_lo").appendTo($h2);
	
					var $sdiv = $('<div/>').addClass("goods-list");
					$sdiv.appendTo($oDiv);
	
					$("<span class='img_lo'><img src="+arr[0]+" /></span>").addClass("img_lo").appendTo($sdiv);
					$('<span class="title_lo">'+arr[1]+'</span>').addClass("title_lo").appendTo($sdiv);
					$(' <span class="ss1_lo">'+arr[2]+'</span>').addClass("ss1_lo").appendTo($sdiv);
					$(' <span class="ss2_lo">1</span>').addClass("ss2_lo").appendTo($sdiv);
					$('<span class="ss3_lo">￥958</span>').addClass("ss3_lo").appendTo($sdiv);
					$('<span class="ss4_lo"><a href="#" class="bta">删除</a></span>').addClass("ss4_lo").appendTo($sdiv);
	
					$oDiv.appendTo('#middle');
					$("#middle .bta").on("click",function(){
						console.log("删除试行")
//						$("#middle").html("已删除商品")
						$(".goods").remove();
						removeCookie("g1")
					})
				}else{
					$("#middle").html("购物车为空")
				}
			})
})();
