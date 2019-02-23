
window.onload = function () {
	//二、项目的流程（）
	//1、创建地图并显示出来
	let m = new Map({
		"width":520,
		'height':600,
		"bgImg":"img/xingyun1.jpg"
	});

	//创建我方战机
	let myPlane = new MyPlane({
		map:m,
		width:100,
		height:60,
		bgImg:'img/myplane.png',
		left:(m.width-100)/2,
		top1:m.height-60,
		incLeft:'0',
		incTop:'0',
		vDirection:'0',
		hDirection:'0',
		timeSpace:'0'
	});
	m.myPlanes.push(myPlane);
	//发射子弹
	myPlane.shoot();

	//创建敌机
 	createEnemyPlane(m);
}

function createEnemyPlane(m){
	setInterval(function(){
		//随机产生飞机的位置（横向的）
		let left1 = parseInt(Math.random()*(m.width-59));

		let ePlane = new EnemyPlane({
			map: m,
			width:59,
			height:36,
			bgImg:'img/plane1.png',
			left:left1,
			top1:-36,
			incLeft:0,
			incTop:36,
			vDirection:1,
			hDirection:0,
			timeSpace:1000,
			boomImgs:['img/plain1_die1.png','img/plain1_die2.png','img/plain1_die3.png']
		});
		ePlane.go();
		m.enemyPlanes.push(ePlane);
	},1000);

}
