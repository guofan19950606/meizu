$(function(){
	$(".dh").on("mouseover",function(){
		$(".menue_two").css({"opacity":"1"});
	})
	$(".menue_two").on("mouseleave",function(){
		$(".menue_two").css({"opacity":"0"});
	})
})

function getCookie(key){
	let str = unescape(document.cookie);	
	let arr = str.split("; ");
	for(let i in arr){
		if(arr[i].indexOf(key+"=")==0){
			return arr[i].split("=")[1];
		}
	}
	alert(arr[i].split("=")[1])
	return null;
}
$(function(){	
	let temp = getCookie("username");
		$.post("php/loginCheckone.php",{userphone:temp},function(data){
			if (data==0) {
				$(".zhuce").css({"display":"none"});
				$(".denglu").css({"display":"none"});
				$(".boxa").css({"display":"none"});
				$(".boxb").css({"display":"block"});
				$(".guanli").css({"display":"block"});
				$("#onespan").html(temp);
			}
		})
	})
