
function EnemyPlane(obj){
	MoverObj.call(this,obj);
	this.imgs = obj.imgs;//敌机消失时需要播放的图片数组
}

EnemyPlane.prototype = new MoverObj();//继承的父类的方法

//是否碰到边界
EnemyPlane.prototype.isEdge = function(){
	return this.top> this.map.height
}

//子类需要完成事情
EnemyPlane.prototype.subDo = function(){
	return this.hit();
}

EnemyPlane.prototype.hit = function(){
	//循环所有子弹
	let bullets = this.map.myPlanes[0].bullets;

	for(let i in bullets){

		//判断当前子弹和某个敌机是否有区域上的重合
		//横向：子弹的right>=敌机的left   子弹left<=敌机的right
		//纵向：子弹的bottom>=敌机的top   子弹top<=敌机的bottom
		let bLeft = bullets[i].left;
		let bRight = bLeft+bullets[i].width;
		let bTop = bullets[i].top;
		let bBottom = bTop+bullets[i].height;

		let eLeft = this.left;
		let eRight = eLeft+this.width;
		let eTop = this.top;
		let eBottom = eTop+this.height;

		if((bRight>=eLeft && bLeft<=eRight) && (bBottom>=eTop && bTop<=eBottom)){
			//击中
			//1、子弹消失
			bullets[i].dispose();
			//2、敌机消失
			this.dispose();			
			return true;
		}
	}
	return false;
}

//敌机被击中后的消失。
EnemyPlane.prototype.dispose = function(){
	//1、定时器停了
	window.clearInterval(this.myTimer);
	//2、敌机数组删除
	let index = this.map.enemyPlanes.indexOf(this);//敌机的下标
	this.map.enemyPlanes.splice(index,1);

	//3、外观也删除了
	let ord = -1;//图片数组的下标
	let timer = setInterval(()=>{
		ord++;
		if(ord>this.imgs.length-1){
			window.clearInterval(timer);
			this.domObj.remove();
			return;
		}
		// this.domObj.src = this.imgs[ord];
		this.domObj.style.backgroundImage =`url(${this.imgs[ord]})` ;
	},100);	
}