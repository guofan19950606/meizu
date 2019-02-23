function MoverObj(obj){
	if(arguments.length>0){
		this.domObj = null;//dom对象，外观
		this.map = obj.map;//所属地图；
		this.width = obj.width;
		this.height = obj.height;
		this.left = obj.left;
		this.top = obj.top;
		this.bgImg = obj.bgImg;

		//关于运动的相关属性
		this.directionTop = obj.directionTop;
		this.step = obj.step;
		this.timeSpace = obj.timeSpace;
		this.myTimer = null;

		this.createUI();
	}
	
}

MoverObj.prototype.createUI = function(){
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

MoverObj.prototype.go = function(){
	this.myTimer = setInterval(()=>{
		//一、数据处理
		//1、改变数据
		// this.left = ;
		this.top = this.top+this.directionTop*this.step;

		//2、边界处理
		if(this.isEdge()){
			//消失(删除外观)
			this.domObj.remove();
			//清除定时器
			window.clearInterval(this.myTimer);
			return;
		}

		//子类要做的事情
		if(this.subDo()){
			return;
		}

		//二、外观
		this.domObj.style.top = this.top+"px";

	},this.timeSpace);
}