jQuery(document).ready(function() {
	//-------------------------------nav_里的js操作----------------------------
	//-----------------------------nav里面的操作---------------------------------
	$(".nav .nav_right > li").on("mouseenter", function() {
			$(this).css("background", "white"); //this是永远是原生对象，需要转化为jq对象才用jq方法
			//$(this).children("")css("display","block");     ？？
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
		//console.log("ccs");

})

//-----------------------------鼠标滚动后左悬浮条显示，右下角按钮显示-------------------------------------
jQuery(document).ready(function() {
	//			  	     top_btn
	var $top_btn = $('#top_btn');
	// console.log($top_btn);                 
	//
	var $float_left = $('#float_left');

	$(window).scroll(function() {
			var scrollTop = $(document).scrollTop();

			if(scrollTop > 20) {
				$top_btn.css('display', 'block') //
			} else {
				$top_btn.css('display', 'none') //
			}

			if(scrollTop > 650) {
				$float_left.css('display', 'block') //淡入
			} else {
				$float_left.css('display', 'none') //
			}
		})
		//点击右下角按钮回到顶部
	$top_btn.on('click', function() {
		var speed = 200; //滑动速度
		$('body,html').animate({
			scrollTop: 0
		}, speed);
		return false;
	})
})

//-------------cookier  封装函数
//instanceof: 判断是否属于某个类型
//name=value;[expires=date];[path=路径];[domain=域名];[secure]
//设置cookie

function addCookie(name, value, day, path, domain, secure) {

	//name=value
	var cookieText = name + "=" + value;

	//失效时间expires=date
	var oDate = new Date();
	oDate.setDate(oDate.getDate() + day);
	cookieText += ";expires=" + oDate;

	//path=路径
	if(path) {
		cookieText += ";path=" + path;
	}
	//domain=域名

	if(domain) {
		cookieText += ";domain=" + domain;
	}

	//secure
	if(secure) {
		cookieText += ";secure";
	}

	document.cookie = cookieText;

	return document.cookie;

}

//获取cookie
function getCookie(name) {

	var cookie = document.cookie; //name=1;name2=2;name3=3

	var arr = cookie.split("; ");
	//[name=1,name2=2,name3=3]
	for(var i = 0; i < arr.length; i++) {
		//name=1
		var arr2 = arr[i].split("=");
		//[name,1]
		if(arr2.length >= 2) {
			if(arr2[0] == name) {
				return arr2[1];
			}
		}
	}
	return "";

}

//删除cookie
function removeCookie(name) {
	var d = new Date();
	document.cookie = name + "=;expires=" + d;
	return document.cookie;

}

//、、、、、、、、、、、、、、、、