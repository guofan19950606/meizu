$("#first_input").on("click",function(){
	$("#first_input").css({"border":"1px solid blue"})
})
$("#first_input").on("mouseleave",function(){
	$("#first_input").css({"border":"1px solid #dadada"})
})
$("#two_input").on("click",function(){
	$("#two_input").css({"border":"1px solid blue"})
})
$("#two_input").on("mouseleave",function(){
	$("#two_input").css({"border":"1px solid #dadada"})
})
$(".state i").toggle(
  function () {
    $(".state i").css({"color":"blue"})
	$(".state i span").css({"display":"block","background":"blue","color":"white"})
	var d = new Date();
	d.setDate(d.getDate()+7);
	document.cookie = "username="+$("#username").val()+";expires="+d.toGMTString();
	document.cookie = "userpass="+$("#password").val()+";expires="+d.toGMTString();
  },
  function () {
   $(".state i").css({"color":"black"})
   $(".state i span").css({"display":"none"})
  }
);
$(".next").on("click",function(){
	$(".next").css({"color":"black"})
	$(".first").css({"color":"#aaaaaa"})
	$(".bigbox").css({"display":"block"})
})
$(".first").on("click",function(){
	$(".next").css({"color":"#aaaaaa"})
	$(".first").css({"color":"black"})
	$(".bigbox").css({"display":"none"})
})
$(function(){
	$(".but").on("click",function(){
		$.post("php/loginCheck.php",{userpass:$("#password").val(),userphone:$("#username").val()},function(data){
			if (data==0) {
				location.href="index.html";
			}else{
				alert("登录失败");
			}
		})
	})
})
