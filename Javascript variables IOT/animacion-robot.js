(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"animacion_robot_atlas_", frames: [[0,0,2000,2000]]},
		{name:"animacion_robot_atlas_2", frames: [[0,0,1920,1200]]},
		{name:"animacion_robot_atlas_3", frames: [[0,0,1698,1260]]},
		{name:"animacion_robot_atlas_4", frames: [[0,0,1600,900],[0,902,1000,1000]]},
		{name:"animacion_robot_atlas_5", frames: [[1038,1316,612,385],[0,0,1183,793],[1038,1703,626,306],[0,795,800,500],[1038,802,512,512],[524,1297,512,512],[0,1297,522,640],[1185,0,732,800],[1552,802,458,458]]},
		{name:"animacion_robot_atlas_6", frames: [[0,551,350,200],[482,0,333,264],[0,271,413,278],[415,271,333,264],[717,795,295,173],[282,806,232,160],[750,266,256,256],[0,990,850,4],[282,968,385,4],[0,0,480,269],[717,537,256,256],[415,537,300,267],[817,0,120,263],[0,753,280,235]]}
];


// symbols:



(lib.bosquefondo100 = function() {
	this.initialize(ss["animacion_robot_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.BotonSENSORSIMULACION2 = function() {
	this.initialize(ss["animacion_robot_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_2 = function() {
	this.initialize(ss["animacion_robot_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.copiaedificioderecencipon = function() {
	this.initialize(ss["animacion_robot_atlas_6"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.copiamonitoreocentro = function() {
	this.initialize(ss["animacion_robot_atlas_6"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.copiamonitoreocentropng4 = function() {
	this.initialize(ss["animacion_robot_atlas_5"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.cuidad2 = function() {
	this.initialize(ss["animacion_robot_atlas_5"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.dronagua2png = function() {
	this.initialize(ss["animacion_robot_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.edificioderecencipon = function() {
	this.initialize(ss["animacion_robot_atlas_6"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.escueladeinformaticalogo = function() {
	this.initialize(ss["animacion_robot_atlas_6"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.fondocafe = function() {
	this.initialize(ss["animacion_robot_atlas_6"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.fondo_oscuro = function() {
	this.initialize(ss["animacion_robot_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.internet = function() {
	this.initialize(ss["animacion_robot_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.letraamarillorobot = function() {
	this.initialize(ss["animacion_robot_atlas_5"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.llamas1 = function() {
	this.initialize(ss["animacion_robot_atlas_6"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.llamas2 = function() {
	this.initialize(ss["animacion_robot_atlas_5"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.llamas3 = function() {
	this.initialize(ss["animacion_robot_atlas_5"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits76 = function() {
	this.initialize(ss["animacion_robot_atlas_6"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits77 = function() {
	this.initialize(ss["animacion_robot_atlas_6"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.nubeservidor = function() {
	this.initialize(ss["animacion_robot_atlas_6"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.pinos1 = function() {
	this.initialize(ss["animacion_robot_atlas_6"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.pinos3 = function() {
	this.initialize(ss["animacion_robot_atlas_5"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.robot = function() {
	this.initialize(ss["animacion_robot_atlas_5"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.routerwirelesicono = function() {
	this.initialize(ss["animacion_robot_atlas_6"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.señalincendio = function() {
	this.initialize(ss["animacion_robot_atlas_5"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.sobretrnasparente = function() {
	this.initialize(ss["animacion_robot_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.torreanimada_0 = function() {
	this.initialize(ss["animacion_robot_atlas_6"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.wifiazuloscuroclaro = function() {
	this.initialize(ss["animacion_robot_atlas_6"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Símbolo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.BotonSENSORSIMULACION2();
	this.instance.parent = this;
	this.instance.setTransform(-88.55,-60,0.5062,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo1, new cjs.Rectangle(-88.5,-60,177.1,120), null);


(lib.sobre = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.sobretrnasparente();
	this.instance.parent = this;
	this.instance.setTransform(-21,0,0.1232,0.0944);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Capa_2
	this.instance_1 = new lib.fondocafe();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-7,22,0.4085,0.32);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.sobre, new cjs.Rectangle(-21,0,123.2,94.4), null);


(lib.simbolowfi = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1_copia
	this.instance = new lib.wifiazuloscuroclaro();
	this.instance.parent = this;
	this.instance.setTransform(150.65,-83,0.2672,0.2527,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({scaleX:0.4207,scaleY:0.4356,y:-113.45},0).to({_off:true},1).wait(42));

	// Capa_1_copia
	this.instance_1 = new lib.wifiazuloscuroclaro();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150.55,-114.95,0.4289,0.4452,45);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30).to({_off:false},0).wait(18).to({scaleX:0.4207,scaleY:0.4356,x:150.65,y:-113.45},0).to({_off:true},1).wait(23));

	// Capa_1
	this.instance_2 = new lib.wifiazuloscuroclaro();
	this.instance_2.parent = this;
	this.instance_2.setTransform(190.65,-158.2,0.5176,0.5511,45);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(48).to({_off:false},0).wait(23).to({scaleX:0.4207,scaleY:0.4356,x:150.65,y:-113.45},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(76.6,-158.2,216.6,202.1);


(lib.Interpolación15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.dronagua2png();
	this.instance.parent = this;
	this.instance.setTransform(-17.1,-36.55,0.0403,0.054,27.92);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.8,-36.5,79.69999999999999,73.1);


(lib.Interpolación14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.dronagua2png();
	this.instance.parent = this;
	this.instance.setTransform(-17.1,-71.9,0.061,0.1234,27.9308);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.1,-71.9,138.2,143.8);


(lib.Interpolación13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.dronagua2png();
	this.instance.parent = this;
	this.instance.setTransform(-58.55,-171.6,0.2253,0.336,27.9314);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200.2,-171.6,460.2,436.1);


(lib.Interpolación12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.dronagua2png();
	this.instance.parent = this;
	this.instance.setTransform(-213.35,-334.3,0.3894,0.5454,19.2227);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-374.9,-334.3,749.9,668.7);


(lib.Interpolación11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.dronagua2png();
	this.instance.parent = this;
	this.instance.setTransform(-213.3,-308.3,0.3787,0.4908,19.2241);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-358.7,-308.3,717.5,616.6);


(lib.Interpolación10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.dronagua2png();
	this.instance.parent = this;
	this.instance.setTransform(-175.3,-258.3,0.3133,0.4137,19.2241);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-297.9,-258.3,595.9,516.7);


(lib.Interpolación9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.dronagua2png();
	this.instance.parent = this;
	this.instance.setTransform(-140.15,-208.3,0.2512,0.3346,19.2257);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-239.3,-208.3,478.6,416.70000000000005);


(lib.Interpolación8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.dronagua2png();
	this.instance.parent = this;
	this.instance.setTransform(-175.45,-148.3,0.1863,0.2336,19.2268);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-244.7,-148.3,350.7,296.70000000000005);


(lib.Interpolación3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.robot();
	this.instance.parent = this;
	this.instance.setTransform(-62.35,-62.95,0.159,0.1672,-3.6885);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.3,-70.4,124.69999999999999,141);


(lib.Interpolación2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.robot();
	this.instance.parent = this;
	this.instance.setTransform(-69.5,-41.5,0.1436,0.1541,-18.6934);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.5,-75.2,139.1,150.5);


(lib.Interpolación1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.robot();
	this.instance.parent = this;
	this.instance.setTransform(-59.9,-28.95,0.1296,0.1166,-18.6982);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.9,-59.3,119.8,118.69999999999999);


(lib.fuego1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.llamas1();
	this.instance.parent = this;
	this.instance.setTransform(-12,0,0.7653,0.6874);

	this.instance_1 = new lib.llamas2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.5125,0.3688);

	this.instance_2 = new lib.llamas2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,0.5125,0.3688);

	this.instance_3 = new lib.llamas3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(136,19,0.3474,0.307);

	this.instance_4 = new lib.llamas1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-12,0,0.7653,0.6874);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{scaleX:0.5125,scaleY:0.3688,x:0,y:0}},{t:this.instance,p:{scaleX:0.7653,scaleY:0.6874,x:-12,y:0}}]}).to({state:[{t:this.instance_1,p:{scaleX:0.5125,scaleY:0.3688,x:0,y:0}},{t:this.instance,p:{scaleX:0.7653,scaleY:0.6874,x:-12,y:0}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.5125,scaleY:0.3688,x:0,y:0}},{t:this.instance,p:{scaleX:0.7653,scaleY:0.6874,x:-12,y:0}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.5125,scaleY:0.3688,x:0,y:0}},{t:this.instance,p:{scaleX:0.7653,scaleY:0.6874,x:-12,y:0}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.5125,scaleY:0.3688,x:0,y:0}},{t:this.instance,p:{scaleX:0.7653,scaleY:0.6874,x:-12,y:0}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.5125,scaleY:0.3688,x:0,y:0}},{t:this.instance,p:{scaleX:0.7653,scaleY:0.6874,x:-12,y:0}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.5125,scaleY:0.3688,x:0,y:0}},{t:this.instance,p:{scaleX:0.7653,scaleY:0.6874,x:-12,y:0}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.5125,scaleY:0.3688,x:0,y:0}},{t:this.instance,p:{scaleX:0.7653,scaleY:0.6874,x:-12,y:0}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.5125,scaleY:0.3688,x:0,y:0}},{t:this.instance,p:{scaleX:0.7653,scaleY:0.6874,x:-12,y:0}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.5125,scaleY:0.3688,x:0,y:0}},{t:this.instance,p:{scaleX:0.7653,scaleY:0.6874,x:-12,y:0}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.5125,scaleY:0.3688,x:0,y:0}},{t:this.instance,p:{scaleX:0.7653,scaleY:0.6874,x:-12,y:0}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.5125,scaleY:0.3688,x:0,y:0}},{t:this.instance,p:{scaleX:0.7653,scaleY:0.6874,x:-12,y:0}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.5125,scaleY:0.3688,x:0,y:0}},{t:this.instance,p:{scaleX:0.7653,scaleY:0.6874,x:-12,y:0}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.5125,scaleY:0.3688,x:0,y:0}},{t:this.instance,p:{scaleX:0.7653,scaleY:0.6874,x:-12,y:0}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.5125,scaleY:0.3688,x:0,y:0}},{t:this.instance,p:{scaleX:0.7653,scaleY:0.6874,x:-12,y:0}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.5125,scaleY:0.3688,x:0,y:0}},{t:this.instance,p:{scaleX:0.7653,scaleY:0.6874,x:-12,y:0}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.5125,scaleY:0.3688,x:0,y:0}},{t:this.instance,p:{scaleX:0.7653,scaleY:0.6874,x:-12,y:0}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.5125,scaleY:0.3688,x:0,y:0}},{t:this.instance,p:{scaleX:0.7653,scaleY:0.6874,x:-12,y:0}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.5125,scaleY:0.3688,x:0,y:0}},{t:this.instance,p:{scaleX:0.7653,scaleY:0.6874,x:-12,y:0}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.5125,scaleY:0.3688,x:0,y:0}},{t:this.instance,p:{scaleX:0.7653,scaleY:0.6874,x:-12,y:0}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.5125,scaleY:0.3688,x:0,y:0}},{t:this.instance,p:{scaleX:0.7653,scaleY:0.6874,x:-12,y:0}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.5125,scaleY:0.3688,x:0,y:0}},{t:this.instance,p:{scaleX:0.7653,scaleY:0.6874,x:-12,y:0}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.5125,scaleY:0.3688,x:0,y:0}},{t:this.instance,p:{scaleX:0.7653,scaleY:0.6874,x:-12,y:0}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.6082,scaleY:0.4313,x:-23,y:-16}},{t:this.instance,p:{scaleX:0.9081,scaleY:0.8039,x:-38,y:-16}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.5125,x:0}},{t:this.instance,p:{scaleX:0.7653,scaleY:0.6874,x:-12,y:0}},{t:this.instance_1,p:{scaleX:0.4813,scaleY:0.4125,x:42,y:-35}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.5999,x:-24}},{t:this.instance,p:{scaleX:0.8957,scaleY:0.6874,x:-38,y:0}},{t:this.instance_1,p:{scaleX:0.5633,scaleY:0.4125,x:26,y:-35}},{t:this.instance_3,p:{scaleX:0.3474}}]},31).to({state:[{t:this.instance_2,p:{scaleX:0.5999,x:-24}},{t:this.instance,p:{scaleX:0.8957,scaleY:0.6874,x:-38,y:0}},{t:this.instance_1,p:{scaleX:0.5633,scaleY:0.4125,x:26,y:-35}},{t:this.instance_3,p:{scaleX:0.3474}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.5999,x:-24}},{t:this.instance,p:{scaleX:0.8957,scaleY:0.6874,x:-38,y:0}},{t:this.instance_1,p:{scaleX:0.5633,scaleY:0.4125,x:26,y:-35}},{t:this.instance_3,p:{scaleX:0.3474}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.5999,x:-24}},{t:this.instance,p:{scaleX:0.8957,scaleY:0.6874,x:-38,y:0}},{t:this.instance_1,p:{scaleX:0.5633,scaleY:0.4125,x:26,y:-35}},{t:this.instance_3,p:{scaleX:0.3474}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.5999,x:-24}},{t:this.instance,p:{scaleX:0.8957,scaleY:0.6874,x:-38,y:0}},{t:this.instance_1,p:{scaleX:0.5633,scaleY:0.4125,x:26,y:-35}},{t:this.instance_3,p:{scaleX:0.3474}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.5999,x:-24}},{t:this.instance,p:{scaleX:0.8957,scaleY:0.6874,x:-38,y:0}},{t:this.instance_1,p:{scaleX:0.5633,scaleY:0.4125,x:26,y:-35}},{t:this.instance_3,p:{scaleX:0.3474}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.5999,x:-24}},{t:this.instance,p:{scaleX:0.8957,scaleY:0.6874,x:-38,y:0}},{t:this.instance_1,p:{scaleX:0.5633,scaleY:0.4125,x:26,y:-35}},{t:this.instance_3,p:{scaleX:0.3474}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.5999,x:-24}},{t:this.instance,p:{scaleX:0.8957,scaleY:0.6874,x:-38,y:0}},{t:this.instance_1,p:{scaleX:0.5633,scaleY:0.4125,x:26,y:-35}},{t:this.instance_3,p:{scaleX:0.3474}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.5999,x:-24}},{t:this.instance,p:{scaleX:0.8957,scaleY:0.6874,x:-38,y:0}},{t:this.instance_1,p:{scaleX:0.5633,scaleY:0.4125,x:26,y:-35}},{t:this.instance_3,p:{scaleX:0.3474}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.5999,x:-24}},{t:this.instance,p:{scaleX:0.8957,scaleY:0.6874,x:-38,y:0}},{t:this.instance_1,p:{scaleX:0.5633,scaleY:0.4125,x:26,y:-35}},{t:this.instance_3,p:{scaleX:0.3474}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.5999,x:-24}},{t:this.instance,p:{scaleX:0.8957,scaleY:0.6874,x:-38,y:0}},{t:this.instance_1,p:{scaleX:0.5633,scaleY:0.4125,x:26,y:-35}},{t:this.instance_3,p:{scaleX:0.3474}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.5999,x:-24}},{t:this.instance,p:{scaleX:0.8957,scaleY:0.6874,x:-38,y:0}},{t:this.instance_1,p:{scaleX:0.5633,scaleY:0.4125,x:26,y:-35}},{t:this.instance_3,p:{scaleX:0.3474}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.5999,x:-24}},{t:this.instance,p:{scaleX:0.8957,scaleY:0.6874,x:-38,y:0}},{t:this.instance_1,p:{scaleX:0.5633,scaleY:0.4125,x:26,y:-35}},{t:this.instance_3,p:{scaleX:0.3474}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.5999,x:-24}},{t:this.instance,p:{scaleX:0.8957,scaleY:0.6874,x:-38,y:0}},{t:this.instance_1,p:{scaleX:0.5633,scaleY:0.4125,x:26,y:-35}},{t:this.instance_3,p:{scaleX:0.3474}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.5999,x:-24}},{t:this.instance,p:{scaleX:0.8957,scaleY:0.6874,x:-38,y:0}},{t:this.instance_1,p:{scaleX:0.5633,scaleY:0.4125,x:26,y:-35}},{t:this.instance_3,p:{scaleX:0.3474}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.5999,x:-24}},{t:this.instance,p:{scaleX:0.8957,scaleY:0.6874,x:-38,y:0}},{t:this.instance_1,p:{scaleX:0.5633,scaleY:0.4125,x:26,y:-35}},{t:this.instance_3,p:{scaleX:0.3474}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.5999,x:-24}},{t:this.instance,p:{scaleX:0.8957,scaleY:0.6874,x:-38,y:0}},{t:this.instance_1,p:{scaleX:0.5633,scaleY:0.4125,x:26,y:-35}},{t:this.instance_3,p:{scaleX:0.3474}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.5999,x:-24}},{t:this.instance,p:{scaleX:0.8957,scaleY:0.6874,x:-38,y:0}},{t:this.instance_1,p:{scaleX:0.5633,scaleY:0.4125,x:26,y:-35}},{t:this.instance_3,p:{scaleX:0.3474}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.5999,x:-24}},{t:this.instance,p:{scaleX:0.8957,scaleY:0.6874,x:-38,y:0}},{t:this.instance_1,p:{scaleX:0.5633,scaleY:0.4125,x:26,y:-35}},{t:this.instance_3,p:{scaleX:0.3474}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.5999,x:-24}},{t:this.instance,p:{scaleX:0.8957,scaleY:0.6874,x:-38,y:0}},{t:this.instance_1,p:{scaleX:0.5633,scaleY:0.4125,x:26,y:-35}},{t:this.instance_3,p:{scaleX:0.3474}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.5125,x:0}},{t:this.instance_4},{t:this.instance_1,p:{scaleX:0.4813,scaleY:0.4125,x:42,y:-35}},{t:this.instance_3,p:{scaleX:0.2969}},{t:this.instance,p:{scaleX:0.7375,scaleY:0.7734,x:136,y:-35}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.5125,x:0}},{t:this.instance_4},{t:this.instance_1,p:{scaleX:0.4813,scaleY:0.4125,x:42,y:-35}},{t:this.instance_3,p:{scaleX:0.2969}},{t:this.instance,p:{scaleX:0.7375,scaleY:0.7734,x:136,y:-35}}]},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38,-35,362.8,239.8);


(lib.Interpolación6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.sobre();
	this.instance.parent = this;
	this.instance.setTransform(-53.35,-104.9,0.548,0.8414,-14.9984,0,0,-46.8,-19.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.5,-110.4,85.8,94.2);


(lib.botonplay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.movieClip_1 = new lib.Símbolo1();
	this.movieClip_1.name = "movieClip_1";
	this.movieClip_1.parent = this;
	this.movieClip_1.setTransform(88.95,60,1,1,0,0,0,0.4,0);
	new cjs.ButtonHelper(this.movieClip_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,177.2,120);


// stage content:
(lib.animacionrobot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{init:91});

	// timeline functions:
	this.frame_14 = function() {
		/* Detener en este fotograma
		La línea de tiempo se detendrá/pausará en el fotograma en el que se inserte este código.
		También se puede utilizar para detener/pausar la línea de tiempo de clips de película.
		*/

		//this.stop();

		/* Hacer clic para ir al fotograma y reproducir
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y prosigue la reproducción desde dicho fotograma.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.

		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/

		this.button_3.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_8.bind(this));

		function fl_ClickToGoToAndPlayFromFrame_8()
		{
			this.gotoAndPlay("init");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(855));

	// mensaje_explicacion_rotobo
	this.text = new cjs.Text("Robot llega contiene incendio.", "55px 'Times New Roman'", "#FFFFFF");
	this.text.lineHeight = 63;
	this.text.lineWidth = 742;
	this.text.parent = this;
	this.text.setTransform(171.4234,212.45,0.7566,0.741);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(581).to({_off:false},0).to({_off:true},43).wait(63).to({_off:false,scaleX:0.7846,scaleY:0.6783,x:297.7325,y:469.5,text:"Robot envia mensaje de incendio contenido",lineWidth:568},0).to({_off:true},98).wait(84));

	// nube_central
	this.text_1 = new cjs.Text("NUBE", "30px 'Wide Latin'", "#000066");
	this.text_1.lineHeight = 39;
	this.text_1.lineWidth = 265;
	this.text_1.parent = this;
	this.text_1.setTransform(163,19.55);

	this.instance = new lib.nubeservidor();
	this.instance.parent = this;
	this.instance.setTransform(78,-14,0.6419,0.7918);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance},{t:this.text_1}]},820).to({state:[]},48).wait(1));

	// estacion_central
	this.instance_1 = new lib.copiaedificioderecencipon();
	this.instance_1.parent = this;
	this.instance_1.setTransform(621,239,1.3363,1.5573);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(820).to({_off:false},0).to({_off:true},48).wait(1));

	// mesnajes
	this.instance_2 = new lib.simbolowfi();
	this.instance_2.parent = this;
	this.instance_2.setTransform(326.4,375.3,1,1,29.9992,0,0,42.7,42.6);
	this.instance_2._off = true;

	this.instance_3 = new lib.sobre();
	this.instance_3.parent = this;
	this.instance_3.setTransform(459.55,321.05,0.5459,0.6503,0,0,0,0.2,0.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(688).to({_off:false},0).to({regX:42.8,scaleX:1.2984,scaleY:1.1401,rotation:14.9986,x:618.5,y:324.9},32).to({_off:true,regX:0.2,regY:0.1,scaleX:0.5459,scaleY:0.6503,rotation:0,x:459.55,y:321.05},1).wait(148));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(720).to({_off:false},1).to({x:897.1,y:133.65},43).to({regX:0.3,x:288.45,y:77.85},18).to({regX:0.2,x:114.85,y:-26.75},6).to({regX:0.5,regY:0,scaleX:0.958,scaleY:1.1374,rotation:-29.9989,x:479.05,y:616.05},1).to({scaleX:0.9579,scaleY:1.1373,rotation:45.0005,x:534.1,y:-65.25},30).wait(1).to({regX:0.8,regY:0.2,scaleX:0.6683,scaleY:0.7942,rotation:-9.7182,x:31.85,y:-2.1},0).to({scaleX:0.7502,scaleY:0.9079,rotation:65.4417,x:425.7,y:92.15},20).to({regY:0.5,scaleX:0.5985,scaleY:0.8297,rotation:-9.7191,x:724.5,y:172.6},27).to({_off:true},1).wait(1));

	// ROUTER_CENTRAL
	this.instance_4 = new lib.routerwirelesicono();
	this.instance_4.parent = this;
	this.instance_4.setTransform(726,102,0.4933,0.6854);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(820).to({_off:false},0).to({_off:true},48).wait(1));

	// fondo_estacion_central
	this.instance_5 = new lib.Mapadebits76();
	this.instance_5.parent = this;
	this.instance_5.setTransform(241.05,129.9,0.6153,2.5,0,-172.3001,7.6983);

	this.text_2 = new cjs.Text("ESTACION \nCENTRAL", "60px 'Times New Roman'", "#333333");
	this.text_2.lineHeight = 68;
	this.text_2.lineWidth = 353;
	this.text_2.parent = this;
	this.text_2.setTransform(96.4,415.75);

	this.instance_6 = new lib.cuidad2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,0,1.5974,2.1242);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6},{t:this.text_2},{t:this.instance_5}]},820).to({state:[]},48).wait(1));

	// arbol_reparo
	this.instance_7 = new lib.pinos3();
	this.instance_7.parent = this;
	this.instance_7.setTransform(592,195,0.5824,0.715);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(625).to({_off:false},0).to({_off:true},61).wait(183));

	// agua_robot
	this.instance_8 = new lib.Interpolación8("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(437.1,366.6,0.5132,0.6248,0,0,0,-85.5,0);
	this.instance_8._off = true;

	this.instance_9 = new lib.Interpolación9("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(494.65,435.1,1.1504,1.1526);
	this.instance_9._off = true;

	this.instance_10 = new lib.Interpolación10("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(498.95,467.3,1,1.1935);
	this.instance_10._off = true;

	this.instance_11 = new lib.Interpolación11("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(537.2,458.25);
	this.instance_11._off = true;

	this.instance_12 = new lib.Interpolación12("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(531.05,466.4);
	this.instance_12._off = true;

	this.instance_13 = new lib.Interpolación13("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(456.95,402.65,1.4372,1.2101);
	this.instance_13._off = true;

	this.instance_14 = new lib.Interpolación14("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(446.95,354.05);
	this.instance_14._off = true;

	this.instance_15 = new lib.Interpolación15("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(435.65,357.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8}]},625).to({state:[{t:this.instance_8}]},9).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},10).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},10).to({state:[{t:this.instance_11}]},6).to({state:[{t:this.instance_12}]},8).to({state:[{t:this.instance_12}]},2).to({state:[{t:this.instance_12}]},3).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},5).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},4).to({state:[]},1).wait(182));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(625).to({_off:false},0).to({regX:-85.4,regY:0.1,scaleX:0.9513,scaleY:0.9625,x:464,y:397.65},9).to({regX:0,regY:0,scaleX:1,scaleY:1.2562,rotation:9.9907,x:532.35,y:437.95},1).to({regX:0.1,regY:0.1,scaleX:1.3664,scaleY:1.4376,rotation:9.2724,x:586.4,y:449.7},10).to({_off:true,regX:0,regY:0,scaleX:1.1504,scaleY:1.1526,rotation:0,x:494.65,y:435.1},1).wait(223));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(645).to({_off:false},1).to({_off:true,scaleX:1,scaleY:1.1935,x:498.95,y:467.3},10).wait(213));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(646).to({_off:false},10).to({_off:true,scaleY:1,x:537.2,y:458.25},6).wait(207));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(656).to({_off:false},6).to({_off:true,x:531.05,y:466.4},8).wait(199));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(662).to({_off:false},8).to({x:542.2,y:464.05},2).to({x:508.95,y:460.5},3).to({_off:true,scaleX:1.4372,scaleY:1.2101,x:456.95,y:402.65},1).wait(193));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(675).to({_off:false},1).to({scaleX:1.0728,scaleY:1.035,x:452.6,y:367.25},5).to({_off:true,scaleX:1,scaleY:1,x:446.95,y:354.05},1).wait(187));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(681).to({_off:false},1).to({_off:true,x:435.65,y:357.55},4).wait(183));

	// mensaje_ins2
	this.text_3 = new cjs.Text("Robot recibe instrucciones enviadas desde la estación central", "55px 'Times New Roman'", "#FFFFFF");
	this.text_3.lineHeight = 63;
	this.text_3.lineWidth = 754;
	this.text_3.parent = this;
	this.text_3.setTransform(187.9457,245,0.9806,1);
	this.text_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text_3).wait(441).to({_off:false},0).to({_off:true},63).wait(365));

	// mensaje_nube_2
	this.instance_16 = new lib.sobre();
	this.instance_16.parent = this;
	this.instance_16.setTransform(488.85,29.2,1,1,-29.9992,0,0,40.6,47.3);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(310).to({_off:false},0).to({scaleX:0.999,scaleY:0.999,rotation:41.45,x:488.9,y:268.05},10).to({regY:47.4,scaleX:0.9984,scaleY:0.9984,rotation:-29.9165,x:489,y:463.55},9).to({regX:40.7,scaleX:0.9992,scaleY:0.9992,rotation:10.0069,x:542.45,y:639.2},8).to({regX:40.6,regY:47.2,scaleX:0.935,scaleY:1,rotation:0,x:57.6,y:87.2},1).to({scaleX:0.6107,x:375,y:128.5},20).to({regX:88.9,regY:64.5,rotation:-29.9989,x:702.35,y:99.55},21).to({x:964.25,y:189.55},20).wait(1).to({regX:40.8,regY:47.2,scaleX:0.5652,rotation:0,x:908.05,y:206.2},0).to({scaleX:0.4534,scaleY:0.6271,x:360.9,y:429.55},40).to({_off:true},1).wait(428));

	// arboles
	this.instance_17 = new lib.pinos3();
	this.instance_17.parent = this;
	this.instance_17.setTransform(247,228,0.1879,0.2142);

	this.instance_18 = new lib.pinos3();
	this.instance_18.parent = this;
	this.instance_18.setTransform(-93,301,0.655,0.5625);

	this.instance_19 = new lib.pinos3();
	this.instance_19.parent = this;
	this.instance_19.setTransform(509,236,0.2718,0.3064);

	this.instance_20 = new lib.pinos3();
	this.instance_20.parent = this;
	this.instance_20.setTransform(367,200,0.2718,0.3064);

	this.instance_21 = new lib.pinos3();
	this.instance_21.parent = this;
	this.instance_21.setTransform(31,176,0.3567,0.4003);

	this.instance_22 = new lib.pinos3();
	this.instance_22.parent = this;
	this.instance_22.setTransform(612,219,0.8698,0.7314);

	this.instance_23 = new lib.pinos1();
	this.instance_23.parent = this;
	this.instance_23.setTransform(824,261,0.85,0.7376);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_23,p:{scaleX:0.85,scaleY:0.7376,x:824,y:261}},{t:this.instance_22},{t:this.instance_21,p:{scaleX:0.3567,scaleY:0.4003,x:31,y:176}},{t:this.instance_20,p:{scaleX:0.2718,scaleY:0.3064,x:367,y:200}},{t:this.instance_19,p:{scaleX:0.2718,scaleY:0.3064,x:509,y:236}},{t:this.instance_18,p:{scaleX:0.655,scaleY:0.5625,x:-93,y:301}},{t:this.instance_17,p:{scaleX:0.1879,scaleY:0.2142,x:247,y:228}}]},339).to({state:[{t:this.instance_23,p:{scaleX:0.7122,scaleY:0.4998,x:464,y:298}},{t:this.instance_21,p:{scaleX:0.718,scaleY:0.695,x:0,y:195}},{t:this.instance_20,p:{scaleX:0.5824,scaleY:0.715,x:592,y:195}},{t:this.instance_19,p:{scaleX:0.441,scaleY:0.4486,x:840,y:211}},{t:this.instance_18,p:{scaleX:0.1721,scaleY:0.2064,x:734,y:221}},{t:this.instance_17,p:{scaleX:0.1759,scaleY:0.1656,x:214,y:247}}]},165).to({state:[]},285).to({state:[]},79).wait(1));

	// robot
	this.instance_24 = new lib.Interpolación1("synched",0);
	this.instance_24.parent = this;
	this.instance_24.setTransform(59.9,381.15);
	this.instance_24._off = true;

	this.instance_25 = new lib.Interpolación2("synched",0);
	this.instance_25.parent = this;
	this.instance_25.setTransform(248.5,421.3);
	this.instance_25._off = true;

	this.instance_26 = new lib.Interpolación3("synched",0);
	this.instance_26.parent = this;
	this.instance_26.setTransform(387.85,386.05,1.3758,1.2496);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(504).to({_off:false},0).to({_off:true,x:248.5,y:421.3},19).wait(346));
	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(504).to({_off:false},19).to({scaleX:1.3654,scaleY:1.2427,x:384,y:387.05},19).to({_off:true,scaleX:1.3758,scaleY:1.2496,x:387.85,y:386.05},17).wait(310));
	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(542).to({_off:false},17).to({regX:0.1,regY:0.2,scaleX:1.3458,scaleY:1.3151,x:380.2,y:390.75},25).to({_off:true},205).wait(80));

	// torres
	this.instance_27 = new lib.torreanimada_0();
	this.instance_27.parent = this;
	this.instance_27.setTransform(906,110,1,0.8023);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(339).to({_off:false},0).wait(202).to({_off:true},248).wait(80));

	// robot_nube
	this.instance_28 = new lib.Interpolación3("synched",0);
	this.instance_28.parent = this;
	this.instance_28.setTransform(288,470.4,1.636,1.2498);
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(339).to({_off:false},0).to({_off:true},165).wait(365));

	// INTENET
	this.text_4 = new cjs.Text("INTERNET", "60px 'Times New Roman'", "#333333");
	this.text_4.lineHeight = 68;
	this.text_4.lineWidth = 466;
	this.text_4.parent = this;
	this.text_4.setTransform(339.9,527);

	this.instance_29 = new lib.internet();
	this.instance_29.parent = this;
	this.instance_29.setTransform(254,40,0.2562,0.2496);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_29},{t:this.text_4}]},789).to({state:[]},31).wait(49));

	// router_inalabrico
	this.instance_30 = new lib.routerwirelesicono();
	this.instance_30.parent = this;
	this.instance_30.setTransform(582,0,0.5065,0.5955);
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(339).to({_off:false},0).to({_off:true},450).wait(80));

	// seevidor
	this.instance_31 = new lib.Mapadebits77();
	this.instance_31.parent = this;
	this.instance_31.setTransform(400,121,0.626,1);

	this.text_5 = new cjs.Text("NUBE", "23px 'Times New Roman'", "#FFFFFF");
	this.text_5.lineHeight = 28;
	this.text_5.lineWidth = 352;
	this.text_5.parent = this;
	this.text_5.setTransform(346.95,96.05);

	this.instance_32 = new lib.nubeservidor();
	this.instance_32.parent = this;
	this.instance_32.setTransform(189,-17,0.775,0.7174);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_32},{t:this.text_5},{t:this.instance_31}]},339).to({state:[]},450).wait(80));

	// INTENET
	this.text_6 = new cjs.Text("INTERNET", "60px 'Times New Roman'", "#333333");
	this.text_6.lineHeight = 68;
	this.text_6.lineWidth = 466;
	this.text_6.parent = this;
	this.text_6.setTransform(339.9,527);

	this.instance_33 = new lib.internet();
	this.instance_33.parent = this;
	this.instance_33.setTransform(254,40,0.2562,0.2496);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_33},{t:this.text_6}]},310).to({state:[]},29).wait(530));

	// nubes_2
	this.text_7 = new cjs.Text("NUBE", "25px 'Times New Roman'", "#FFFFFF");
	this.text_7.lineHeight = 30;
	this.text_7.lineWidth = 352;
	this.text_7.parent = this;
	this.text_7.setTransform(176,158.95);

	this.instance_34 = new lib.nubeservidor();
	this.instance_34.parent = this;
	this.instance_34.setTransform(-42,-17,1.0417,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_34},{t:this.text_7}]},270).to({state:[]},40).wait(559));

	// toopologia
	this.instance_35 = new lib.routerwirelesicono();
	this.instance_35.parent = this;
	this.instance_35.setTransform(725,196,0.44,0.6554);
	this.instance_35._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(270).to({_off:false},0).to({_off:true},40).wait(559));

	// explicacion
	this.text_8 = new cjs.Text("Servidor procesador de datos", "35px 'Times New Roman'", "#333333");
	this.text_8.lineHeight = 41;
	this.text_8.lineWidth = 288;
	this.text_8.parent = this;
	this.text_8.setTransform(602.2,289.9);

	this.text_9 = new cjs.Text("Centro de monitoreo", "30px 'Times New Roman'", "#333333");
	this.text_9.lineHeight = 35;
	this.text_9.lineWidth = 278;
	this.text_9.parent = this;
	this.text_9.setTransform(50.1,241);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_9},{t:this.text_8}]},129).to({state:[]},141).wait(599));

	// mens2
	this.instance_36 = new lib.sobre();
	this.instance_36.parent = this;
	this.instance_36.setTransform(407.55,389.6,0.548,0.8414,-14.9984,0,0,40.7,47.4);
	this.instance_36._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(240).to({_off:false},0).to({x:315.7,y:480.6},29).to({_off:true},1).wait(599));

	// mensaje_salida_monotoreo
	this.instance_37 = new lib.sobre();
	this.instance_37.parent = this;
	this.instance_37.setTransform(839.2,217.65,0.749,0.912,-14.9991,0,0,40.6,47.2);
	this.instance_37._off = true;

	this.instance_38 = new lib.Interpolación6("synched",0);
	this.instance_38.parent = this;
	this.instance_38.setTransform(384.25,341.7);
	this.instance_38._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(99).to({_off:false},0).to({regX:40.7,scaleX:0.7483,scaleY:0.9112,rotation:30.1744,x:997.35,y:576.5},29).to({regY:47.4,scaleX:0.548,scaleY:0.8414,rotation:-14.9984,x:321.4,y:209.8},1).to({rotation:-14.9984,x:388.6,y:293},21).wait(1).to({x:521.4,y:318.6},0).to({x:612.6,y:267.4},28).wait(22).to({x:529.4,y:313.8},38).to({_off:true},1).wait(30).to({_off:false,regX:40.6,regY:47.3,scaleX:0.5325,scaleY:0.5932,rotation:0,x:757.8,y:256},0).to({x:-6,y:-27.95},39).to({_off:true},1).wait(559));
	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(240).to({_off:false},0).to({x:308.25,y:265.7},29).to({_off:true},1).wait(599));

	// centro_monitoreo
	this.text_10 = new cjs.Text("Visualizacion y toma de deciciones", "55px 'Times New Roman'", "#333333");
	this.text_10.lineHeight = 63;
	this.text_10.lineWidth = 818;
	this.text_10.parent = this;
	this.text_10.setTransform(102,489.2);

	this.instance_39 = new lib.señalincendio();
	this.instance_39.parent = this;
	this.instance_39.setTransform(490,153,0.1825,0.1336);

	this.instance_40 = new lib.llamas2();
	this.instance_40.parent = this;
	this.instance_40.setTransform(686,297,0.0875,0.075);

	this.instance_41 = new lib.Interpolación3("synched",0);
	this.instance_41.parent = this;
	this.instance_41.setTransform(259.3,196.5,1.1157,0.5688,-14.9988,0,0,0.1,0.1);

	this.text_11 = new cjs.Text("Equipo Central de monitoreo", "55px 'Times New Roman'", "#333333");
	this.text_11.lineHeight = 63;
	this.text_11.lineWidth = 750;
	this.text_11.parent = this;
	this.text_11.setTransform(143.35,56.6);

	this.instance_42 = new lib.copiamonitoreocentro();
	this.instance_42.parent = this;
	this.instance_42.setTransform(177,126,1.5191,1.2993);

	this.instance_43 = new lib.CachedTexturedBitmap_2();
	this.instance_43.parent = this;
	this.instance_43.setTransform(79,20,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_42},{t:this.text_11},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.text_10}]},91).to({state:[{t:this.instance_43}]},38).to({state:[]},141).to({state:[]},557).wait(42));

	// fuego
	this.instance_44 = new lib.fuego1();
	this.instance_44.parent = this;
	this.instance_44.setTransform(554.85,480.25,0.3296,0.3226,0,0,0,131.2,94.4);
	this.instance_44._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(508).to({_off:false},0).to({regX:131.3,regY:94.5,scaleX:0.5002,scaleY:0.6277,x:554.9,y:480.3},19).to({regX:131.4,scaleX:0.679,scaleY:0.8649,y:480.35},18).to({regX:131.5,regY:94.6,scaleX:0.8385,scaleY:1.0774,x:555,y:480.45},17).to({regX:131.6,regY:94.5,scaleX:0.8573,scaleY:1.1024,y:480.35},2).to({regY:94.7,scaleY:1.001,rotation:-7.9942,y:480.45},24).to({regY:94.8,scaleX:1.0042,scaleY:1.2286,y:480.55},31).wait(24).to({regX:131.2,regY:94.7,scaleX:0.4322,scaleY:0.577,rotation:0,x:561.25,y:466.55},16).to({regY:94.5,scaleX:0.2226,scaleY:0.3017,y:466.45},21).to({_off:true},1).wait(188));

	// edifi
	this.instance_45 = new lib.edificioderecencipon();
	this.instance_45.parent = this;
	this.instance_45.setTransform(680,348,1.1153,1.1454);
	this.instance_45._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(270).to({_off:false},0).to({_off:true},40).wait(559));

	// fondo_animacion
	this.text_12 = new cjs.Text("ESTACION CENTRAL", "55px 'Times New Roman'", "#333333");
	this.text_12.lineHeight = 63;
	this.text_12.lineWidth = 336;
	this.text_12.parent = this;
	this.text_12.setTransform(128.75,468);

	this.text_13 = new cjs.Text("Router central", "55px 'Times New Roman'", "#333333");
	this.text_13.lineHeight = 63;
	this.text_13.lineWidth = 170;
	this.text_13.parent = this;
	this.text_13.setTransform(586.8057,349.1,0.9817,0.5493);

	this.instance_46 = new lib.cuidad2();
	this.instance_46.parent = this;
	this.instance_46.setTransform(0,0,1.5974,2.1242);

	this.instance_47 = new lib.bosquefondo100();
	this.instance_47.parent = this;
	this.instance_47.setTransform(0,0,1.634,1.6883);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_46},{t:this.text_13},{t:this.text_12}]},270).to({state:[]},40).to({state:[{t:this.instance_47}]},29).to({state:[{t:this.instance_47}]},249).to({state:[{t:this.instance_47}]},158).to({state:[]},43).wait(80));

	// fondo
	this.instance_48 = new lib.bosquefondo100();
	this.instance_48.parent = this;
	this.instance_48.setTransform(0,0,1.634,1.6883);
	this.instance_48._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_48).wait(339).to({_off:false},0).to({_off:true},450).wait(80));

	// Boton_de_play
	this.button_3 = new lib.botonplay();
	this.button_3.name = "button_3";
	this.button_3.parent = this;
	this.button_3.setTransform(109,411);
	this.button_3._off = true;
	new cjs.ButtonHelper(this.button_3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_3).wait(14).to({_off:false},0).wait(76).to({x:111.4},0).to({_off:true},1).wait(778));

	// Letra_fondo_inicio
	this.instance_49 = new lib.letraamarillorobot();
	this.instance_49.parent = this;
	this.instance_49.setTransform(93,-103);
	this.instance_49._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_49).wait(7).to({_off:false},0).to({_off:true},84).wait(778));

	// Logo_una
	this.instance_50 = new lib.escueladeinformaticalogo();
	this.instance_50.parent = this;
	this.instance_50.setTransform(743,531,0.7071,0.5561);
	this.instance_50._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_50).wait(6).to({_off:false},0).to({_off:true},85).wait(778));

	// imagen_fondo_robot
	this.instance_51 = new lib.robot();
	this.instance_51.parent = this;
	this.instance_51.setTransform(335,222,0.4667,0.42);
	this.instance_51._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_51).wait(14).to({_off:false},0).to({_off:true},77).wait(778));

	// fondo
	this.instance_52 = new lib.fondo_oscuro();
	this.instance_52.parent = this;
	this.instance_52.setTransform(0,0,0.5208,0.5417);

	this.timeline.addTween(cjs.Tween.get(this.instance_52).to({_off:true},91).wait(778));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1070.2,800.8);
// library properties:
lib.properties = {
	id: 'DC9AE655AB8C5A4F9E1D0E199EC53A94',
	width: 1000,
	height: 810,
	fps: 45,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/animacion_robot_atlas_.png", id:"animacion_robot_atlas_"},
		{src:"images/animacion_robot_atlas_2.png", id:"animacion_robot_atlas_2"},
		{src:"images/animacion_robot_atlas_3.png", id:"animacion_robot_atlas_3"},
		{src:"images/animacion_robot_atlas_4.png", id:"animacion_robot_atlas_4"},
		{src:"images/animacion_robot_atlas_5.png", id:"animacion_robot_atlas_5"},
		{src:"images/animacion_robot_atlas_6.png", id:"animacion_robot_atlas_6"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['DC9AE655AB8C5A4F9E1D0E199EC53A94'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {
	var lastW, lastH, lastS=1;
	window.addEventListener('resize', resizeCanvas);
	resizeCanvas();
	function resizeCanvas() {
		var w = lib.properties.width, h = lib.properties.height;
		var iw = window.innerWidth, ih=window.innerHeight;
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;
		if(isResp) {
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {
				sRatio = lastS;
			}
			else if(!isScale) {
				if(iw<w || ih<h)
					sRatio = Math.min(xRatio, yRatio);
			}
			else if(scaleType==1) {
				sRatio = Math.min(xRatio, yRatio);
			}
			else if(scaleType==2) {
				sRatio = Math.max(xRatio, yRatio);
			}
		}
		domContainers[0].width = w * pRatio * sRatio;
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {
			container.style.width = w * sRatio + 'px';
			container.style.height = h * sRatio + 'px';
		});
		stage.scaleX = pRatio*sRatio;
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;
		stage.tickOnUpdate = false;
		stage.update();
		stage.tickOnUpdate = true;
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;