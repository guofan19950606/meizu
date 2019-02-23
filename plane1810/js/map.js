
function Map(obj){
	//属性
	this.domObj = null;//地图对象对应dom元素（外观）
	this.width = obj.width;
	this.height = obj.height;
	this.bgImg = obj.bgImg;
	//我方战机数组
	this.myPlanes = [];
	//敌机数组
	this.enemyPlanes = [];
	this.createUI();
}

//方法
Map.prototype.createUI = function(){
	this.domObj = document.createElement("div");
	this.domObj.style.cssText = `position:relative;
						background:url(${this.bgImg}) repeat-y;
						width:${this.width}px;
						height:${this.height}px;
						overflow:hidden;
	`;
	document.body.appendChild(this.domObj);
}

Map.prototype.bgGo = function(){
	let bgPos = 0;//纵向top
	setInterval(()=>{
		bgPos++;

		if(bgPos>=853){
			bgPos=0;
		}

		this.domObj.style.backgroundPosition=`0px ${bgPos}px`;
	},10);
}