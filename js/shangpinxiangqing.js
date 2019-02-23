
$("#sm_1").on("mouseleave",function(){
	$(".phone").css({"display":"none"});
})
$("#list a:nth-child(1)").mouseenter(function(){
	$(".phone:nth-child(2)").css({"display":"block"});
})
$("#list a:nth-child(2)").mouseenter(function(){
	$(".phone:nth-child(3)").css({"display":"block",});
})
$("#list a:nth-child(3)").mouseenter(function(){
	$(".phone:nth-child(4)").css({"display":"block",});
})
$("#list a:nth-child(4)").mouseenter(function(){
	$(".phone:nth-child(5)").css({"display":"block",});
})
$("#people").mouseenter(function(){
	$("#zhuce").css({"display":"block",});
})
$("#zhuce") .mouseleave(function(){
	$("#zhuce").css({"display":"none",});
}) 
$(function(){
	$(".baiyu").on("click",function(){
	$("#preview").css({"display":"block"});
	$("#previewone").css({"display":"none"});
	$("#previewtwo").css({"display":"none"});
	$(".preview-booth a img").attr({ src: "img/shopp1.jpg"});
	$(".preview-thumb a:nth-child(1)").on("click",function(){
		$(".preview-booth a img").attr({ src: "img/shopp1.jpg"});
	})

	$(".preview-thumb a:nth-child(2)").on("click",function(){
		$(".preview-booth a img").attr({ src: "img/shopp2.jpg"});
	})

	$(".preview-thumb a:nth-child(3)").on("click",function(){
		$(".preview-booth a img").attr({ src: "img/shopp3.jpg"});
	})
	$(".preview-thumb a:nth-child(4)").on("click",function(){
		$(".preview-booth a img").attr({ src: "img/shopp4.jpg"});
	})
	})
$(".lianghei").on("click",function(){
	$("#previewone").css({"display":"block"});
	$("#preview").css({"display":"none"});
	$("#previewtwo").css({"display":"none"});
	$(".preview-booth a img").attr({ src: "img/shopp6.jpg"});
	$(".preview-thumb a:nth-child(1)").on("click",function(){
	$(".preview-booth a img").attr({ src: "img/shopp6.jpg"});
	})

	$(".preview-thumb a:nth-child(2)").on("click",function(){
		$(".preview-booth a img").attr({ src: "img/shopp7.jpg"});
	})

	$(".preview-thumb a:nth-child(3)").on("click",function(){
		$(".preview-booth a img").attr({ src: "img/shopp8.jpg"});
	})
	$(".preview-thumb a:nth-child(4)").on("click",function(){
		$(".preview-booth a img").attr({ src: "img/shopp9.jpg"});
	})
})
$(".huanlan").on("click",function(){
	$("#previewone").css({"display":"none"});
	$("#preview").css({"display":"none"});
	$("#previewtwo").css({"display":"block"});
	$(".preview-booth a img").attr({ src: "img/shopp10.jpg"});
	$(".preview-thumb a:nth-child(1)").on("click",function(){
	$(".preview-booth a img").attr({ src: "img/shopp10.jpg"});
	})

	$(".preview-thumb a:nth-child(2)").on("click",function(){
		$(".preview-booth a img").attr({ src: "img/shopp11.jpg"});
	})

	$(".preview-thumb a:nth-child(3)").on("click",function(){
		$(".preview-booth a img").attr({ src: "img/shopp12.jpg"});
	})
	$(".preview-thumb a:nth-child(4)").on("click",function(){
		$(".preview-booth a img").attr({ src: "img/shopp13.jpg"});
	})
})
	$(".mod-bd a").on("click",function(event){
		if (event.currentTarget==this) {
			$(".mod-bd a").css({"border":"1px solid #BFBFBF"});
			$( event.currentTarget).css({"border":"1px solid black"});
		}
	})
})