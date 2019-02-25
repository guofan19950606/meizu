
$("#list a:lt(4)").mouseover(function(){
	$("#bigheader").css({"width":"100%","display":"flex","justifyContent":"center","backgroundColor":"white"});
	$("#bigheader a").css({"color":"black","fontWeight":"100"});	
	$("#bigheader i").css({"color":"black","fontWeight":"600"});
	$("#bigheader a img").css({"color":"blue"});
	$("#bigheader .meizulg svg").css({"fill":"#00beff"});
})
$("#sm_1").on("mouseleave",function(){
	$("#bigheader").css({"width":"100%","display":"flex","justifyContent":"center","backgroundColor":""});
	$("#bigheader a").css({"color":"white"});
	$("#bigheader i").css({"color":"white","fontWeight":"100"});
	$("#bigheader .meizulg svg").css({"fill":"#fff"});
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
 var swiper = new Swiper('.swiper-container',{
  autoplay: {
	delay: 5000,  
	disableOnInteraction: false,
  },
  keyboard : true,
  speed: 700,
  allowTouchMove: false,
  lazy: {
	loadPrevNext: true,
	loadPrevNextAmount: 3,
  },
  centeredSlides: true,
  spaceBetween : 50,
  slidesOffsetBefore: 40,
  loop: true,
  slidesPerView : 'auto',
  on: {
	slideChangeTransitionEnd: function(){
	  this.slides.transition(this.params.autoplay.delay+this.params.speed).transform('translate3d(-60px, 0, 0)');
	},
	slideChangeTransitionStart: function(){
	  this.slides.transition(this.params.speed).transform('translate3d(0, 0, 0)');
	},
  },
  pagination: {
	el: '.swiper-pagination',
	clickable :true,
	renderBullet: function (index, className) {
      return '<div class="' + className + '"><span></span><i></i></div>';
    },
  },
  navigation: {
	nextEl: '.swiper-button-next',
	prevEl: '.swiper-button-prev',
  },
});
window.onresize=function(){
  swiper.update();
}