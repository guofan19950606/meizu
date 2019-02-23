
//子弹类

function Bullet(obj){
	MoverObj.call(this,obj);//继承的是属性（父类构造函数里的属性）
	this.myPlane = obj.myPlane;//子弹所属的战机
}

Bullet.prototype = new MoverObj();//继承的父类的方法

//子弹的判断边界
Bullet.prototype.isEdge = function(){
	return this.top< -1*this.height;
}

//go（）执行时，子类需要做的事情（子弹就要判断是否击中敌机）
Bullet.prototype.subDo = function(){
	return this.hit();
}

//是否击中敌机
Bullet.prototype.hit = function(){
	//循环所有敌机
	for(let i in this.map.enemyPlanes){
		let enemyPlane = this.map.enemyPlanes[i];
		//判断当前子弹和某个敌机是否有区域上的重合
		//横向：子弹的right>=敌机的left   子弹left<=敌机的right
		//纵向：子弹的bottom>=敌机的top   子弹top<=敌机的bottom
		let bLeft = this.left;
		let bRight = this.left+this.width;
		let bTop = this.top;
		let bBottom = this.top+this.height;

		let eLeft = enemyPlane.left;
		let eRight = eLeft+enemyPlane.width;
		let eTop = enemyPlane.top;
		let eBottom = enemyPlane.top+enemyPlane.height;

		if((bRight>=eLeft && bLeft<=eRight) && (bBottom>=eTop && bTop<=eBottom)){
			//击中
			//1、子弹消失
			this.dispose();
			//2、敌机消失
			enemyPlane.dispose();			
			return true;
		}
	}
	return false;
}

Bullet.prototype.dispose = function(){
	//1、定时器停了
	window.clearInterval(this.myTimer);
	//2、在子弹数组中删除子弹
	let index = this.myPlane.bullets.indexOf(this);//子弹的下标
	this.myPlane.bullets.splice(index,1);

	//3、外观也删除了
	this.domObj.remove();
}
