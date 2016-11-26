;(function(){  
	    jQuery(document).ready(function(){
			  	    $(".nav .nav_right > li").on("mouseenter",function(){
			  	    	   	$(this).css("background","white");  //this是永远是原生对象，需要转化为jq对象才用jq方法
			  	    	   //$(this).children("")css("display","block");     ？？
			  	    	   // console.log(this);			  	    	   
			  	    	      //注意此处用的是find方法，寻找this下面的#cont1
			  	    	   $(this).find('#cont1').css("display","block");
			  	    	     //鼠标滑过下拉菜单字体时，字体颜色发生变化，离开后，字体颜色还原
			  	    	   $(".nav .nav_right .cont li").on("mouseenter",function(){
			  	    	   	     $(this).css("color","yellowgreen");
			  	    	   }).on("mouseleave",function(){
			  	    	   	    $(this).css("color","black");
			  	    	   })
			  	    	   
			  	    }).on("mouseleave",function(){
			  	    	   $(this).css("background","#f2f2f2");  
			  	    	   //
			  	    	    $(this).find('#cont1').css("display","none");
			  	    	  
			  	    })
			  	    
			  	    var $mima = $(".content .content_right #pass");
			  	    var $btn = $(".content .content_right div");
			  	    $btn.click(function(){
			  	    	var $a_txt = $(".nav .nav_left .txt");var $name = $(".content .content_right #text");
			  	    	//console.log($name.val(),$mima.val());
			  	    	//console.log(getCookie($name.val()).length)
			  	    	if(getCookie($name.val()) == $mima.val() && getCookie($name.val()).length > 0){
			  	    		alert("注册成功")
			  	    		$a_txt.text($name.val())
			  	    	}else if(getCookie($name.val()).length > 0){
			  	    		alert("密码错误")
			  	    	}else{
			  	    		alert("此账号未注册")	
			  	    	}
			  	    })
			  	   
			  })
	
})()
