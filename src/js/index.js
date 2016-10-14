jQuery(document).ready(function(){
	
			  	    
         // -------------------------------------------------------------------------------------------
		//  ---------------------------------------------banner_left_LB-----字体样式变化------------------------			  	     			  	    			  	     
                      var $all_list_li =$(".banner_LB_left .all_list>li");
                      var $all_list_li_a=$(".banner_LB_left .all_list>li>a")
                      $all_list_li.on("mouseenter",function(){
                      	     $(this).children('a').css({"color":"red"});
                      	     $(this).find(".a1").css({"display":"block"});
                      	     $(this).find(".a2").css({"display":"block"});
                      	      $(this).find(".a3").css({"display":"block"});
                      	       $(this).find(".a4").css({"display":"block"});
                      	        $(this).find(".a5").css({"display":"block"});
                      	         $(this).find(".a6").css({"display":"block"});
                      	          $(this).find(".a7").css({"display":"block"});
                      	           $(this).find(".a8").css({"display":"block"});                     	    
                      }).on("mouseleave",function(){
                      	    $(this).children('a').css({"color":"white"});
                      	     $(this).find(".a1").css({"display":"none"});
                      	      $(this).find(".a2").css({"display":"none"});
                      	       $(this).find(".a3").css({"display":"none"});
                      	         $(this).find(".a4").css({"display":"none"});
                      	           $(this).find(".a5").css({"display":"none"});
                      	             $(this).find(".a6").css({"display":"none"});
                      	               $(this).find(".a7").css({"display":"none"});
                      	                 $(this).find(".a8").css({"display":"none"});
                      })
                      
                      $all_list_li_a.on("mouseenter",function(){
                      	     $(this).css({"color":"black"});
                      	    
                      }).on("mouseleave",function(){
                      	    $(this).css({"color":"red"});
                      })	  	    
                      
                      
			  	    
			  	     //....................................banner_LB_right..............轮播.................
				      var $banner_LB_right=$('.banner_LB_right');
				      var $img_list =$('.img_list');
				      var $btn=$('.btn');
				      
				      //设置 图片缩影，并赋予第一张图下标为0
				      var index=0;
				      //获取所有图片
				      var len=$img_list.children("li").length;
				        console.log(len);
				      //初始状态
				      show();
				      //自动轮播
				      var timer =setInterval(animating,3000);
				      
				      function animating(){
				      	   index++;
				      	   show();
				      }
				      //图片切换
				      function show(){
				      	    if( index == len){
				      	    	  index = 0
				      	    }else if( index <0){
				      	    	   index = len -1;
				      	    }
				      	    $img_list.children("li").eq(index).animate({opacity :1}).siblings().animate({opacity :0});
				      	    $btn.children("li").eq(index).animate({opacity :1}).siblings().animate({opacity:0.5});
				      }
				      
				      //按钮点击事件设置
				        $btn.on("mouseenter","li",function(){
				        	     clearInterval(timer);
				        	     index = $(this).index();
				        	     show();
				        }).on("mouseleave","li",function(){
				        	 timer = setInterval(animating,3000);
				        })
				        
				       //图片划入
				       var $img_list_li = $('.img_list li ');
				         //console.log($img_list_li);
				       $img_list_li.on("mouseenter",function(){
				       	        clearInterval(timer);
				       }).on("mouseleave",function(){
				       	        timer = setInterval(animating,3000);
				       })
				      
})

//-----------------------------每日必看--------------------------------------
		  
		  jQuery(document).ready(function(){
		  	        
		          var $goodlist_MC=$('.goodlist_MC');
		           $goodlist_MC.addClass("goodlist_MC");
		            //console.log("css")
		            var $ul= $('<ul/>').addClass("ul_MC");  //创建一个ul
		            $.ajax({		            	
		            	url:"data/goodlist_MC.json",
		                success:function(res){  //从服务器获取数据
		                	  console.log(res);		                	  
		                	  $.each(res,function(idx,item){  //从服务器中传出两个参数 idx 索引符号， item内容
		                	  	   var $li=$('<li/>').addClass("float");
		                	  	   //创建一个a标签，a内添加超链接
		                	  	   var $a=$('<a/>');
		                	  	   $a.attr({href:item.url}).appendTo($li);
		                	  	     console.log("css");
		                	  	   //创建一个div
		                	  	   var $div1=$('<div/>').addClass("pic_MC");
		                	  	      //console.log($div1);
		                	  	       $div1.html('<img src="'+item.imgurl+'"/>').appendTo($a);
		                	  	   
		                	  	   var $div2=$('<div/>').addClass("cont_MC");
		                	  	        $div2.appendTo($a);
		                	  	      console.log("css")
		                	  	         $('<h3/>').addClass("title_MC").html(item.title).appendTo($div2);
		                	  	         $('<h4/>').addClass("introduce").html(item.introduce).appendTo($div2);
		                	  	        $('<p/>').addClass("content").html(item.content).appendTo($div2);
		                	  	        var $div3=$('<div/>').addClass('div').appendTo($div2);
		                	  	          $('<button/>').addClass('button').html(item.button).appendTo($div3);
		                	  	         
		                	  	   $li.appendTo($ul);  
		                	  })
		                	$goodlist_MC.append($ul);  
		                }		            	
		            });
		  
			});


 //-----------------------------------限时特卖--------------------------------------
		 jQuery(document).ready(function(){
			     var $goodlist_LO=$('.goodlist_LO');
			     $goodlist_LO.addClass("goodlist_LO");
			     console.log("css");
			     var $ul= $('<ul/>').addClass("ul_lo");  //创建一个ul
			     $.ajax({
			     	type:"get",
			     	url:"data/goodlist_LO.json",
			     	async:true,
			     	success:function(res){ //从服务器端获取
			     		  //console.log(res);
			     		  
			     		  $.each(res,function(idx,item){ //遍历后传出数据，
			     		  	     var $li=$('<li/>').addClass("li_lo");
			     		  	     //创建一个a标签，并加入超链接
			     		  	        var $a= $('<a/>');
			     		  	       $a.attr({href:item.url}).appendTo($li);
		                	  	     console.log("css");
				     		  	       $('<div/>').addClass('pic_LO').html("<img src="+item.imgurl+"/>").appendTo($a);
				     		  	       var $div_con=$('<div/>');
					     		  	        $div_con.addClass('cont_LO').appendTo($a);  
					     		  	               $('<div/>').addClass("ad_lo").html(item.introduce).appendTo($div_con);
					     		  	               var $div_box=$('<div/>').addClass('box');
				     		  	                       $div_box.appendTo($div_con);
				     		  	                             var $div_box_left= $('<div/>').addClass('box_left');
				     		  	                             $div_box_left.appendTo($div_box);
				     		  	                                    $('<p/>').addClass('p_LO').html(item.content).appendTo($div_box_left);         
				     		  	                                     $('<h4/>').addClass('h4_LO').html(item.price).appendTo($div_box_left);
				     		  	                                      $('<div/>').addClass('div_LO').html(item.sale).appendTo($div_box_left);
				     		  	                                     
				     		  	                             var $div_box_right= $('<div/>').addClass('box_right');
				     		  	                             $div_box_right.appendTo($div_box);
				     		  	                                  var  $div_right= $('<div/>');
				     		  	                                     $div_right.addClass('div_right').appendTo($div_box_right);
				     		  	                                            var $div_right_button=$('<div/>');
				     		  	                                                 $div_right_button.addClass('button_LO').html(item.button).appendTo($div_right);
				     		  	     /////
				     		  	     $li.appendTo($ul);     //遍历结束前，将li加载到ul中
			     		  })
			     		  $goodlist_LO.append($ul);    //遍历完后，将ul加载到最外层盒子中
			     	}
			     	
			     });
			     
		})



