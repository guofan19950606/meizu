$("#biyan").on("click",function(){
	$("#password").css("display","none");
	$("#text").css("display","block");
	$("#text").val($("#password").val());
	$("#biyan").css("display","none");
	$("#yanjing").css("display","block");
});
$("#yanjing").on("click",function(){
	$("#password").css("display","block");
	$("#password").val($("#text").val());
	$("#text").css("display","none");
	$("#biyan").css("display","block");
	$("#yanjing").css("display","none");
});
$(".redinput_three").on("click",function(){
	$("#redinput").css("display","none");
})
$("#phone").keypress(function(){ 
	$("#redinput").css("display","none");
});
$("#password").keypress(function(){ 
	$(".one13").css("display","none");
});
$("#text").keypress(function(){ 
	$(".one13").css("display","none");
});
$(function(){
		$("#phone").on("blur",function(){
			let reg = /^1[^0126]\d{9}$/;
			let v=$("#phone").val();
			if($("#phone").val()==""){
  				$("#redinput").css("display","block");
  				$(".one12").css("display","none");
			}else if (!reg.test(v)) {
				$(".one12").css("display","block");
				$(".redinput_second_three").click(function(){
				$(".one12").css("display","none");
				});
			}
			else{
				$.get("php/checkuser.php",{userphone:$("#phone").val()},function(data){
		  			if (data==0) {
		  				$("#redinput_second").css("display","block");
		  				$(".redinput_second_three").click(function(){
		  					$("#redinput_second").css("display","none");
		  				});
		  				alert("注册失败");
		  			}else if(data==1){
		  					$(".one11").css("display","block");
		  					$(".redinput_second_three").click(function(){
		  					$(".one11").css("display","none");
		  					});
		  					$(".but_zhu").on("click",function(){		  					
							alert("注册成功");
							$(".bigbox").css("display","block");
							$(".min_form").css("display","none");

		  				});
		  			};
				})
			};
			
	})
})
$(function(){
	$("#password").on("blur",function(){
		if($("#password").val()==""){
			alert("亲，密码不能为空")
		}else{
			$(".but_ti").on("click",function(){
				$.post("php/regSave.php",{userpass:$("#password").val(),userphone:$("#phone").val()},function(data){
					if (data==1) {
						alert("注册成功");
						location.href="Flyme 账号 - 登录.html";
					}
				})
			})
		}
	})
})
$(function(){
	$("#text").on("blur",function(){
		if($("#text").val()==""){
			alert("亲，密码不能为空")
		}else{
			$(".but_ti").on("click",function(){
				$.post("php/regSave.php",{userpass:$("#text").val(),userphone:$("#phone").val()},function(data){
					if (data==1) {
						location.href="Flyme 账号 - 登录.html";
					}
				})
			})
		}
	})
})
$(function(){
	$("#password").on("blur",function(){
		let reg = /^[a-zA-Z0-9!@#$%^&*]{6,20}$/;
		let vr = $("#password").val();
		if (!reg.test(vr)) {
			$(".one13").css("display","block");
			$(".sp2").click(function(){
			$(".one13").css("display","none");
			});
		}
	})
})
$(function(){
	$("#text").on("blur",function(){
		let reg = /^[a-zA-Z0-9!@#$%^&*]{6,20}$/;
		let vr = $("#text").val();
		if (!reg.test(vr)) {
			$(".one13").css("display","block");
			$(".sp2").click(function(){
			$(".one13").css("display","none");
			});
		}
	})
})