 ;(function(){
  	  jQuery(document).ready(function() {
				//jquery获取元素
				var $focus = $("#focus");
				var $bigpic_pic = $("#bigpic #pic_aac");
				//console.log($bigpic_pic);
				var $smallpic_li = $("#smallpic li");

				$smallpic_li.on('click', function() {
					var index = $(this).index();

					console.log(index);
					$bigpic_pic.attr("src", "../img/detail/detailaa" + index + ".jpg");
				})

			})

			//实现放大镜效果
			jQuery(function($) {
				$('.fdj_xiaoguo').xzoom({
					position: 'right'
				});
			});
			////////////////////////
			jQuery(document).ready(function() {
				//-------------------------------nav_里的js操作----------------------------
				//-----------------------------nav里面的操作---------------------------------
				$(".nav .nav_right > li").on("mouseenter", function() {
						$(this).css("background", "white"); //this是永远是原生对象，需要转化为jq对象才用jq方法
						//$(this).children("")css("display","block");     
						// console.log(this);			  	    	   
						//注意此处用的是find方法，寻找this下面的#cont1
						$(this).find('#cont1').css("display", "block");

						$(this).find('#shop_box').css("display", "block");
						//鼠标滑过下拉菜单字体时，字体颜色发生变化，离开后，字体颜色还原
						$(".nav .nav_right .cont li").on("mouseenter", function() {
							$(this).css("color", "yellowgreen");
						}).on("mouseleave", function() {
							$(this).css("color", "black");
						})
					}).on("mouseleave", function() {
						$(this).css("background", "#f2f2f2");
						$(this).find('#cont1').css("display", "none");

						$(this).find('#shop_box').css("display", "none");
					})
					//  console.log("ccs");	  
			})

			//-------------实现button 数值加减------
            jQuery(document).ready(function(){
            	    var $btn_left=$('#btn_left');
            	    var $btn_right=$('#btn_right');
            	    var index=1;
            	    var $value_sl=$('#value_sl');
            	    $value_sl.html(index);
            	    
            	    $btn_left.on('click',function(){
            	    	  index--;
            	    	  if(index<1){
            	    	  	index=1;
            	    	  	 $value_sl.html(index);
            	    	  	
            	    	  }else{
            	    	  	 $value_sl.html(index);
            	    	  }
            	    	  
            	    })
            	    
            	    $btn_right.on('click',function(){
            	    	  index++;
            	    	  $value_sl.html(index);
            	    })
            	    
            	    
            })


			//----------------实现点击添加购物车功能-----------------------
			jQuery(document).ready(function() {
				//------------绑定点击事件---------点击添加购物车功能----------------
				//给按钮添加绑定点击事件
				var $button_LO_JZ = $('.detail_right button');
				console.log($button_LO_JZ);
				$button_LO_JZ.click(function() {

					//						   	      var $currentli =$(this).closest("li"); //获取当前 点击下的li

					var $shop_box_car_ul = $(".shop_box_car");

					var $li = $('<li/>');
					$("<div class='aa1_clone'><img src=../img/detail/detailaa0.jpg/></div>").appendTo($li);
					$(" <p class='aa2_clone'>金丝燕窝洁面乳（10片）</p>").appendTo($li);
					$("<div class='clone_price'>￥68.0</div>").appendTo($li);
					$("<div class='btn_za'><button>进入购物车</button></div>").appendTo($li);

					//添加删除按钮
					//5，添加删除按钮（右上角x）
					var $btnClose = $("<span/>");
					$btnClose.addClass("btn-close").html('&times;').appendTo($li);
					$btnClose.click(function() {
						$(this).parent("li").remove();
						console.log("css");
					})

					$li.appendTo($shop_box_car_ul);

				})

			})
			$(function(){
				var $img = $("#detail_clone .shopping_cart .detail_left .img>img" ).attr("src");
				var $biaoti = $("#detail_clone .shopping_cart .detail_right .a1");
				var $jiage = $("#detail_clone .shopping_cart .detail_right .a4 .Sale_price");
				var $btnshop = $("#detail_clone .shopping_cart .detail_right .a5 button");
				$btnshop.on("click",function(){
					
//				console.log($img,$biaoti.text(),$jiage.text())
					setCookie("g1",[$img,$biaoti.text(),$jiage.text()])
				})
			})

  })();
