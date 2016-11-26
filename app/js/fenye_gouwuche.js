//分页与购物车实现功能（分页功能，数据来至json文件，服务器返回并无分页，自己计算）
;(function(){
	
	  	jQuery(document).ready(function() {
				  success();
				  //设置分页，实现点击加载
               
                 //参数现有特殊，再到一般
                 
	           function success(){
					var $goodlist_JZ = $('.goodlist_JZ');
					$goodlist_JZ.addClass("goodlist_JZ");
					//console.log("css")
					var $ul = $('<ul/>').addClass("ul_JZ"); //创建一个ul
					$.ajax({
						url: "../data/goodlist_JZ.json",
						dataType:'json',						
						
						success: function(res) { //从服务器获取数据
							console.log(res);
							
						//显示分页
							var total=res.length;
//							console.log(total);  //19
							var pagecount=9;   //加载条数9条
							var page=Math.ceil(total/pagecount);   //加载的页数
							    var $ul2=$('#page_gd').appendTo($('.goodlist_page'));
							 
							 
							 for(var i=0; i<page; i++){
							 	    var $li=$('<li/>');
							 	    $li.html(i+1).appendTo($ul2);
							 	 //添加当前元素页高亮效果
							 	 if(i===res.pageNo){
	                                  $span.addClass('active');	                                  
                            }							 	 
				       }
							 //页面开始加载是，首先显示在页面上的东西
							 
							 if(total<pagecount){
							 	  for(var i=0;i<total;i++){
						           
									  var $li = $('<li/>').addClass("float_JZ");
										//创建一个a标签，在a标签里面添加超链接
										var $a = $('<a/>');
										$a.attr({
											href: res[i].url
										}).appendTo($li);
										console.log("css");
										//创建一个div
										$('<div/>').addClass('pic_Top_JZ').html('<img src="' + res[i].imgurl + '"/>').appendTo($a);
										$('<div/>').addClass('pic_NA_JZ').html('<img src="' + res[i].imgurl2 + '"/>').appendTo($a);
			
										var $div1 = $('<div/>');
										$div1.addClass('cont_NA_JZ').appendTo($li);
										var $h4 = $('<h4/>').addClass('h4_pre').appendTo($div1);
										$('<span/>').addClass('price_pre').html(res[i].price).appendTo($h4);
										$('<span/>').addClass('price_dis').html(res[i].discount).appendTo($h4);
										$('<span/>').addClass('discound_Z').html(res[i].discount_cod).appendTo($h4);
			
										$('<div/>').addClass("aa1_JZ").html(res[i].title).appendTo($div1);
										$('<div/>').addClass("aa2_JZ").html(res[i].content).appendTo($div1);
										$('<div/>').addClass("aa3_JZ").html(res[i].slice).appendTo($div1);
										$('<div/>').addClass("aa4_JZ").html(res[i].introduce).appendTo($div1);
										$('<div/>').addClass("aa5_JZ").html(res[i].sale).appendTo($div1);
			
										var $div2 = $('<div/>').addClass('div_right_JZ').appendTo($div1);
			
										$('<button/>').addClass('button_LO_JZ').html(res[i].button).appendTo($div2);
			
										$li.appendTo($ul);
											    											    
										}
									
									  $goodlist_JZ.append($ul);
							 	
							 	
							 }else{
							 	     for(var i=0;i<pagecount;i++){
						           
									  var $li = $('<li/>').addClass("float_JZ");
										//创建一个a标签，在a标签里面添加超链接
										var $a = $('<a/>');
										$a.attr({
											href: res[i].url
										}).appendTo($li);
										console.log("css");
										//创建一个div
										$('<div/>').addClass('pic_Top_JZ').html('<img src="' + res[i].imgurl + '"/>').appendTo($a);
										$('<div/>').addClass('pic_NA_JZ').html('<img src="' + res[i].imgurl2 + '"/>').appendTo($a);
			
										var $div1 = $('<div/>');
										$div1.addClass('cont_NA_JZ').appendTo($li);
										var $h4 = $('<h4/>').addClass('h4_pre').appendTo($div1);
										$('<span/>').addClass('price_pre').html(res[i].price).appendTo($h4);
										$('<span/>').addClass('price_dis').html(res[i].discount).appendTo($h4);
										$('<span/>').addClass('discound_Z').html(res[i].discount_cod).appendTo($h4);
			
										$('<div/>').addClass("aa1_JZ").html(res[i].title).appendTo($div1);
										$('<div/>').addClass("aa2_JZ").html(res[i].content).appendTo($div1);
										$('<div/>').addClass("aa3_JZ").html(res[i].slice).appendTo($div1);
										$('<div/>').addClass("aa4_JZ").html(res[i].introduce).appendTo($div1);
										$('<div/>').addClass("aa5_JZ").html(res[i].sale).appendTo($div1);
			
										var $div2 = $('<div/>').addClass('div_right_JZ').appendTo($div1);
			
										$('<button/>').addClass('button_LO_JZ').html(res[i].button).appendTo($div2);
			
										$li.appendTo($ul);
											    											    
										}
									
									  $goodlist_JZ.append($ul);							 	
							 	
							 }
							 
							 
							 
							 
							 
							 
							//给分页设置点击事件
						$("#page_gd li").click(function(){
							        //点击时，将上一次的内容清空
							        $goodlist_JZ.html('');
							        $ul.html('');
								    var left=$(this).index();
								    var right=left+1;
//								    console.log(left);
//								    console.log(right);
								   //给for循环
								   
						  if(right*pagecount<total){	
								     	
								for(var i=left*pagecount;i<right*pagecount;i++){
						           
									  var $li = $('<li/>').addClass("float_JZ");
										//创建一个a标签，在a标签里面添加超链接
										var $a = $('<a/>');
										$a.attr({
											href: res[i].url
										}).appendTo($li);
										console.log("css");
										//创建一个div
										$('<div/>').addClass('pic_Top_JZ').html('<img src="' + res[i].imgurl + '"/>').appendTo($a);
										$('<div/>').addClass('pic_NA_JZ').html('<img src="' + res[i].imgurl2 + '"/>').appendTo($a);
			
										var $div1 = $('<div/>');
										$div1.addClass('cont_NA_JZ').appendTo($li);
										var $h4 = $('<h4/>').addClass('h4_pre').appendTo($div1);
										$('<span/>').addClass('price_pre').html(res[i].price).appendTo($h4);
										$('<span/>').addClass('price_dis').html(res[i].discount).appendTo($h4);
										$('<span/>').addClass('discound_Z').html(res[i].discount_cod).appendTo($h4);
			
										$('<div/>').addClass("aa1_JZ").html(res[i].title).appendTo($div1);
										$('<div/>').addClass("aa2_JZ").html(res[i].content).appendTo($div1);
										$('<div/>').addClass("aa3_JZ").html(res[i].slice).appendTo($div1);
										$('<div/>').addClass("aa4_JZ").html(res[i].introduce).appendTo($div1);
										$('<div/>').addClass("aa5_JZ").html(res[i].sale).appendTo($div1);
			
										var $div2 = $('<div/>').addClass('div_right_JZ').appendTo($div1);
			
										$('<button/>').addClass('button_LO_JZ').html(res[i].button).appendTo($div2);
			
										$li.appendTo($ul);
											    											    
										}
									
									  $goodlist_JZ.append($ul);
									  
							    } else{	
							    	for(var i=left*pagecount;i<total;i++){
						           
									  var $li = $('<li/>').addClass("float_JZ");
										//创建一个a标签，在a标签里面添加超链接
										var $a = $('<a/>');
										$a.attr({
											href: res[i].url
										}).appendTo($li);
										console.log("bbb");
										//创建一个div
										$('<div/>').addClass('pic_Top_JZ').html('<img src="' + res[i].imgurl + '"/>').appendTo($a);
										$('<div/>').addClass('pic_NA_JZ').html('<img src="' + res[i].imgurl2 + '"/>').appendTo($a);
			
										var $div1 = $('<div/>');
										$div1.addClass('cont_NA_JZ').appendTo($li);
										var $h4 = $('<h4/>').addClass('h4_pre').appendTo($div1);
										$('<span/>').addClass('price_pre').html(res[i].price).appendTo($h4);
										$('<span/>').addClass('price_dis').html(res[i].discount).appendTo($h4);
										$('<span/>').addClass('discound_Z').html(res[i].discount_cod).appendTo($h4);
			
										$('<div/>').addClass("aa1_JZ").html(res[i].title).appendTo($div1);
										$('<div/>').addClass("aa2_JZ").html(res[i].content).appendTo($div1);
										$('<div/>').addClass("aa3_JZ").html(res[i].slice).appendTo($div1);
										$('<div/>').addClass("aa4_JZ").html(res[i].introduce).appendTo($div1);
										$('<div/>').addClass("aa5_JZ").html(res[i].sale).appendTo($div1);
			
										var $div2 = $('<div/>').addClass('div_right_JZ').appendTo($div1);
			
										$('<button/>').addClass('button_LO_JZ').html(res[i].button).appendTo($div2);
			
										$li.appendTo($ul);
											    											    
										}
									
									  $goodlist_JZ.append($ul);
							    	  
							    }
							})							
						
	
				        
							
							//--------------------------------绑定点击事件-----------------------------------
	
							//给按钮添加绑定点击事件,     button捕获的到点击事件无法添加
							var $button_LO_JZ = $('.goodlist_JZ button');
							// console.log($button_LO_JZ);
							$button_LO_JZ.click(function() {
	
								var $currentli = $(this).closest("li"); //获取当前 点击下的li
	
								//购物车的设置				   	     
								var $shop_box_car_ul = $('.shop_box_car ul'); //用来添加插入的信息
//								console.log($shop_box_car_ul);
//								console.log("aaa");
								//2,复制列表信息的li
								var $copyli = $currentli.clone();
	
								//3,将复制的li添加到购物车中
								$copyli.appendTo($shop_box_car_ul);
//								console.log("bbb");
								//4，复制对象里的删除按钮（添加购物车）
								$copyli.find("button").parent().remove(); //删除复制里面不需要的东西			   	     
								$copyli.find('.pic_Top_JZ').remove();
								$copyli.find('.aa1_JZ').remove();
								$copyli.find('.aa3_JZ').remove();
								$copyli.find('.aa4_JZ').remove();
								$copyli.find('.aa5_JZ').remove();
	
								$copyli.find('.price_dis').remove();
								$copyli.find('.discound_Z').remove();
	
								//5，添加删除按钮（右上角x）
								var $btnClose = $("<span/>");
								$btnClose.addClass("btn-close").html('&times;').appendTo($copyli);
								$btnClose.click(function() {
									$(this).parent("li").remove();
//									console.log("css");
								})
	
							})
	
							////--------------------------------绑定点击事件-----bottom------------------------------
	
							//、、--------------------------------------添加cookier-------------------------------------------
							//cookier 操作
							//		
							//		 			//1,创建一个数组存入数据
							//					 var arr=[];
	
							//2,创建一个cookie存入商品数据
							//					 var $src=$(".pic_NA_JZ").attr('src');
							//					  console.log($src);
							//					 var $jg=$('.price_pre').html();	
							//					  console.log($jg);
							//					 var $title=$('.aa2_JZ').html();
							//					   console.log($title);
							//					
							//					  //3,创建一个空对象
							//					  var obj={};
							//					  
							//					  obj.src=$src;
							//					  obj.price=$jg;
							//					  obj.title=$title;
							//					  
							//					  arr.push(obj);
							//					  addCookie('goods',JSON.stringify(arr),7);
	
						}
					});
	
	             }
            
			});
	
})()
