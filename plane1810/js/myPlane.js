function MyPlane(obj){

	this.domObj = null;//dom对象，外观
	this.map = obj.map;//所属地图；
	this.width = obj.width;
	this.height = obj.height;
	this.left = obj.left;
	this.top = obj.top;
	this.bgImg = obj.bgImg;

	this.bullets = [];

	this.createUI();

}

MyPlane.prototype.createUI = function(){
	this.domObj = document.createElement("div");
	this.domObj.style.cssText = `
		position:absolute;
		width:${this.width}px;
		height:${this.height}px;
		left:${this.left}px;
		top:${this.top}px;
		background:url(${this.bgImg}) no-repeat;
		background-size:${this.width}px	${this.height}px;
	`;
	this.map.domObj.appendChild(this.domObj);
}

MyPlane.prototype.addEvent = function(){

	this.map.domObj.onmousemove = (event)=>{
		let evt = event || window.event;

		//1、数据
		this.left = evt.pageX-this.map.domObj.offsetLeft-this.width/2;
		this.top =  evt.pageY-this.map.domObj.offsetTop-this.height/2;

		if(this.left<=0){
			this.left=0;
		}else if(this.left>=this.map.width-this.width){
			this.left=this.map.width-this.width;
		}

		if(this.top<=0){
			this.top=0;
		}else if(this.top>=this.map.height-this.height){
			this.top=this.map.height-this.height;
		}

		//外观
		this.domObj.style.left = this.left+"px";
		this.domObj.style.top = this.top+"px";
	}
}

MyPlane.prototype.shoot = function(){
	setInterval(()=>{
		//创建子弹
		let b = new Bullet({
			"map":this.map,
			"width":6,
			"height":14,
			"bgImg":"img/bullet1.png",
			"left":this.left+(this.width-6)/2,
			"top":this.top-14,
			"directionTop":-1,
			"step":14*2,
			"timeSpace":100,
			"myPlane":this
		});
		b.go();
		this.bullets.push(b);
	},100);

}