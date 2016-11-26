;(function(){
	  window.onload = function() {
				var oInput = document.getElementsByTagName("input");
				var oAlert1 = document.getElementById("alert1");
				var oAlert2 = document.getElementById("alert2");
				var oAlert3 = document.getElementById("alert3");
				var oAlert4 = document.getElementById("alert4");
				var btn = document.getElementById("btn");

				//0)用户名称只能包含数字、字母、下划线，长度不小于8位
				oInput[0].onblur = function() {
					var username = this.value;
					var isTrue = /\w{8,}/.test(username);
					if(isTrue) {
						oAlert1.innerHTML = "用户名合法";
					} else {
						oAlert1.innerHTML = "用户名不合法";
					}

				}

				//1)密码长度在6-20位之间 ,密码只能是数值，字母，下划线
				oInput[1].onblur = function() {
					var password = this.value;
					var isTrue = /\w{6,20}/.test(password);
					if(isTrue) {
						oAlert2.innerHTML = "密码合法";
					} else {
						oAlert2.innerHTML = "密码不合法";
					}

				}

				//2)密码长度在6-20位之间 ,密码只能是数值，字母，下划线
				oInput[2].onblur = function() {
					var password = oInput[1].value;

					var passwords = this.value;

					if(passwords == password) {
						oAlert3.innerHTML = "密码相等";
					} else {
						oAlert3.innerHTML = "密码不相等";
					}

				}

				//3)点击数字验证码，更换一个新的4位数字
				var ospan = document.getElementById("VCode");
				ospan.onclick = function() {
					var str = "";
					for(var i = 0; i < 4; i++) {
						str += parseInt(Math.random() * 10);
					}
					console.log(str);
					ospan.innerHTML = str;
				}

				var oInput = document.getElementsByTagName("input");
				oInput[3].onblur = function() {
					var number = ospan.innerHTML;
					if(oInput[3].value != number) {
						oAlert4.innerHTML = "验证码不正确，请重新输入";
						ospan.innerHTML = "请再点";
						oInput[3].value = "";
					} else {
						oAlert4.innerHTML = " ";
					}
				}
				btn.onclick = function() {
					var name = oInput[0].value;
					var mima = oInput[1].value;
					setCookie(name, mima)
					console.log("cookie")
				}

			}
})();
