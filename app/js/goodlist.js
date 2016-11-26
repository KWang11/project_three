//--------------------------------------------左侧--------------------------------------------------
jQuery(document).ready(function() {
	//------------------------bigbox_left---------------------
	var $bigbox_left_a1_p = $('.bigbox_left .a1>p');
	var $bigbox_left_a1_p_a = $('.bigbox_left .a1>p>a');
	$bigbox_left_a1_p.on("mouseenter", function() {
		$(this).find("a").css("color", "#c79b62");
	}).on("mouseleave", function() {
		$(this).find("a").css("color", "black");
	})

	var $bigbox_left_a1 = $('.bigbox_left .a1')
	var $bigbox_left_li = $('.bigbox_left ul>li');
	$bigbox_left_li.on("click", function() {
			console.log("ass")
			$(this).find(".li_cont").toggle(); //toggle()点击显示，点击隐藏
			console.log($bigbox_left_a1);
			$(this).find(".li_cont").css("background", "white");
			//		    	  	     $(this).find(".li_title").css("background","white");	    	  	    
		})
		//------------------------bigbox_left---------------------

	//------------------------bigbox_right---------------------

	//----------------------------top------------------------
	var $bigbox_right_ul_li_other = $(".bigbox_right ul li .other");
	console.log($bigbox_right_ul_li_other);
	var $gt7_1 = $(".bigbox_right ul .product li:gt(7)");

	$gt7_1.css("display", "none");

	$bigbox_right_ul_li_other.on("click", function() {
		console.log("css");
		$gt7_1.toggle();
	})

	//----------------------------middle------------------------
	var $bigbox_right_ul_li_other_2 = $(".bigbox_right ul li .other_2");
	console.log($bigbox_right_ul_li_other_2);
	var $gt7_2 = $(".bigbox_right ul .product_2 li:gt(7)");

	$gt7_2.css("display", "none");
	$bigbox_right_ul_li_other_2.on("click", function() {
			console.log("css");
			$gt7_2.toggle();
		})
		//----------------------------bottom------------------------
	var $bigbox_right_ul_li_other_3 = $(".bigbox_right ul li .other_3");
	console.log($bigbox_right_ul_li_other_3);

	var $gt7_3 = $(".bigbox_right ul .product_3 li:gt(7)");
	$gt7_3.css("display", "none");
	$bigbox_right_ul_li_other_3.on("click", function() {
		console.log("css");
		$gt7_3.toggle();
	})
})

//			//----------------------------------------懒加载--ajax--------------------------------------------
//			  jQuery(document).ready(function(){
//		  	        
//		          var $goodlist_JZ=$('.goodlist_JZ');
//		           $goodlist_JZ.addClass("goodlist_JZ");
//		            //console.log("css")
//		            var $ul= $('<ul/>').addClass("ul_JZ");  //创建一个ul
//		            $.ajax({		            	
//		            	url:"../data/goodlist_JZ.json",
//		                success:function(res){  //从服务器获取数据
//		                	  console.log(res);		                	  
//		                	  $.each(res,function(idx,item){  //从服务器中传出两个参数 idx 索引符号， item内容
//		                	  	      var $li=$('<li/>').addClass("float_JZ");
//		                	  	      //创建一个a标签，在a标签里面添加超链接
//		                	  	       var $a=$('<a/>');
//		                	  	       $a.attr({href:item.url}).appendTo($li);
//		                	  	       console.log("css");
//		                	  	            //创建一个div
//		                	  	            $('<div/>').addClass('pic_Top_JZ').html('<img src="'+item.imgurl+'"/>').appendTo($a);
//		                	  	             $('<div/>').addClass('pic_NA_JZ').html('<img src="'+item.imgurl2+'"/>').appendTo($a);
//		                	  	            
//		                	  	             var $div1=$('<div/>');
//		                	  	             $div1.addClass('cont_NA_JZ').appendTo($li);
//		                	  	                   var $h4=$('<h4/>').addClass('h4_pre').appendTo($div1);
//			                	  	                        $('<span/>').addClass('price_pre').html(item.price).appendTo($h4);
//			                	  	                        $('<span/>').addClass('price_dis').html(item.discount).appendTo($h4);
//			                	  	                        $('<span/>').addClass('discound_Z').html(item.discount_cod).appendTo($h4);
//		                	  	                       
//		                	  	                       $('<div/>').addClass().html(item.title).appendTo($div1);
//		                	  	                       $('<div/>').addClass().html(item.content).appendTo($div1);
//		                	  	                       $('<div/>').addClass().html(item.slice).appendTo($div1);
//		                	  	                       $('<div/>').addClass().html(item.introduce).appendTo($div1);
//		                	  	                        $('<div/>').addClass().html(item.sale).appendTo($div1);
//		                	  	                        
//		                	  	                         var $div2=$('<div/>').addClass('div_right_JZ').appendTo($div1);
//		                	  	                         
//		                	  	                              $('<button/>').addClass('button_LO_JZ').html(item.button).appendTo($div2);
//		                	  	                         
//		                	  	                        
//		                	  	                       
//		                	  	       $li.appendTo($ul);
//		                	  })
//		                	$goodlist_JZ.append($ul); 
//		                	
//		                	
//		                }		            	
//		            });
//		  
//			});