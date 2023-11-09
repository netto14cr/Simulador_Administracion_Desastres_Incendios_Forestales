(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Sensor_CO2_atlas_", frames: [[0,0,2000,2000]]},
		{name:"Sensor_CO2_atlas_2", frames: [[0,0,1920,1200]]},
		{name:"Sensor_CO2_atlas_3", frames: [[1540,502,400,400],[1038,1004,612,385],[1666,1439,350,200],[0,1644,400,400],[1666,904,333,264],[1038,1391,626,306],[1520,1699,251,320],[1773,1641,256,256],[524,1002,512,512],[524,1516,512,512],[1038,1699,480,269],[0,1002,522,640],[1666,1170,300,267],[1002,0,800,500],[0,0,1000,1000],[1038,502,500,500]]},
		{name:"Sensor_CO2_atlas_4", frames: [[555,0,225,225],[258,0,295,173],[258,175,232,160],[0,492,850,4],[614,227,385,4],[0,0,256,256],[782,0,225,225],[492,227,120,263]]}
];


// symbols:



(lib.alerta_fuego = function() {
	this.initialize(ss["Sensor_CO2_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bosquefondo100 = function() {
	this.initialize(ss["Sensor_CO2_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.BotonSENSORSIMULACION2 = function() {
	this.initialize(ss["Sensor_CO2_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.copiaalerta_fuego = function() {
	this.initialize(ss["Sensor_CO2_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.copiaedificioderecencipon = function() {
	this.initialize(ss["Sensor_CO2_atlas_3"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.copiasenorco2nuevo = function() {
	this.initialize(ss["Sensor_CO2_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.cuidad2 = function() {
	this.initialize(ss["Sensor_CO2_atlas_3"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.escueladeinformaticalogo = function() {
	this.initialize(ss["Sensor_CO2_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.fondocafe = function() {
	this.initialize(ss["Sensor_CO2_atlas_4"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.fondo_oscuro = function() {
	this.initialize(ss["Sensor_CO2_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.humo1 = function() {
	this.initialize(ss["Sensor_CO2_atlas_3"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.internet = function() {
	this.initialize(ss["Sensor_CO2_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.llamas1 = function() {
	this.initialize(ss["Sensor_CO2_atlas_3"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.llamas2 = function() {
	this.initialize(ss["Sensor_CO2_atlas_3"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.llamas3 = function() {
	this.initialize(ss["Sensor_CO2_atlas_3"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits76 = function() {
	this.initialize(ss["Sensor_CO2_atlas_4"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits77 = function() {
	this.initialize(ss["Sensor_CO2_atlas_4"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.nubeservidor = function() {
	this.initialize(ss["Sensor_CO2_atlas_3"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.pinos1 = function() {
	this.initialize(ss["Sensor_CO2_atlas_4"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.pinos3 = function() {
	this.initialize(ss["Sensor_CO2_atlas_3"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.routerwirelesicono = function() {
	this.initialize(ss["Sensor_CO2_atlas_3"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.senorco2nuevo = function() {
	this.initialize(ss["Sensor_CO2_atlas_4"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.SNESORCO2LETRA = function() {
	this.initialize(ss["Sensor_CO2_atlas_3"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.sobretrnasparente = function() {
	this.initialize(ss["Sensor_CO2_atlas_3"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.torreanimada_0 = function() {
	this.initialize(ss["Sensor_CO2_atlas_4"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.wificolor_0 = function() {
	this.initialize(ss["Sensor_CO2_atlas_3"]);
	this.gotoAndStop(15);
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


(lib.humo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.humo1();
	this.instance.parent = this;
	this.instance.setTransform(161.4,0,0.643,0.4061,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.humo, new cjs.Rectangle(0,0,161.4,130), null);


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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{x:0,scaleX:0.5125,scaleY:0.3688,y:0}},{t:this.instance,p:{x:-12,scaleX:0.7653,scaleY:0.6874,y:0}}]}).to({state:[{t:this.instance_1,p:{x:-2,scaleX:0.5125,scaleY:0.3688,y:0}},{t:this.instance,p:{x:-14,scaleX:0.7653,scaleY:0.6874,y:0}}]},1).to({state:[{t:this.instance_1,p:{x:0,scaleX:0.5125,scaleY:0.3688,y:0}},{t:this.instance,p:{x:-12,scaleX:0.7653,scaleY:0.6874,y:0}}]},1).to({state:[{t:this.instance_1,p:{x:0,scaleX:0.5125,scaleY:0.3688,y:0}},{t:this.instance,p:{x:-12,scaleX:0.7653,scaleY:0.6874,y:0}}]},1).to({state:[{t:this.instance_1,p:{x:0,scaleX:0.5125,scaleY:0.3688,y:0}},{t:this.instance,p:{x:-12,scaleX:0.7653,scaleY:0.6874,y:0}}]},1).to({state:[{t:this.instance_1,p:{x:0,scaleX:0.5125,scaleY:0.3688,y:0}},{t:this.instance,p:{x:-12,scaleX:0.7653,scaleY:0.6874,y:0}}]},1).to({state:[{t:this.instance_1,p:{x:0,scaleX:0.5125,scaleY:0.3688,y:0}},{t:this.instance,p:{x:-12,scaleX:0.7653,scaleY:0.6874,y:0}}]},1).to({state:[{t:this.instance_1,p:{x:0,scaleX:0.5125,scaleY:0.3688,y:0}},{t:this.instance,p:{x:-12,scaleX:0.7653,scaleY:0.6874,y:0}}]},1).to({state:[{t:this.instance_1,p:{x:0,scaleX:0.5125,scaleY:0.3688,y:0}},{t:this.instance,p:{x:-12,scaleX:0.7653,scaleY:0.6874,y:0}}]},1).to({state:[{t:this.instance_1,p:{x:0,scaleX:0.5125,scaleY:0.3688,y:0}},{t:this.instance,p:{x:-12,scaleX:0.7653,scaleY:0.6874,y:0}}]},1).to({state:[{t:this.instance_1,p:{x:0,scaleX:0.5125,scaleY:0.3688,y:0}},{t:this.instance,p:{x:-12,scaleX:0.7653,scaleY:0.6874,y:0}}]},1).to({state:[{t:this.instance_1,p:{x:0,scaleX:0.5125,scaleY:0.3688,y:0}},{t:this.instance,p:{x:-12,scaleX:0.7653,scaleY:0.6874,y:0}}]},1).to({state:[{t:this.instance_1,p:{x:0,scaleX:0.5125,scaleY:0.3688,y:0}},{t:this.instance,p:{x:-12,scaleX:0.7653,scaleY:0.6874,y:0}}]},1).to({state:[{t:this.instance_1,p:{x:0,scaleX:0.5125,scaleY:0.3688,y:0}},{t:this.instance,p:{x:-12,scaleX:0.7653,scaleY:0.6874,y:0}}]},1).to({state:[{t:this.instance_1,p:{x:0,scaleX:0.5125,scaleY:0.3688,y:0}},{t:this.instance,p:{x:-12,scaleX:0.7653,scaleY:0.6874,y:0}}]},1).to({state:[{t:this.instance_1,p:{x:0,scaleX:0.5125,scaleY:0.3688,y:0}},{t:this.instance,p:{x:-12,scaleX:0.7653,scaleY:0.6874,y:0}}]},1).to({state:[{t:this.instance_1,p:{x:0,scaleX:0.5125,scaleY:0.3688,y:0}},{t:this.instance,p:{x:-12,scaleX:0.7653,scaleY:0.6874,y:0}}]},1).to({state:[{t:this.instance_1,p:{x:0,scaleX:0.5125,scaleY:0.3688,y:0}},{t:this.instance,p:{x:-12,scaleX:0.7653,scaleY:0.6874,y:0}}]},1).to({state:[{t:this.instance_1,p:{x:0,scaleX:0.5125,scaleY:0.3688,y:0}},{t:this.instance,p:{x:-12,scaleX:0.7653,scaleY:0.6874,y:0}}]},1).to({state:[{t:this.instance_1,p:{x:0,scaleX:0.5125,scaleY:0.3688,y:0}},{t:this.instance,p:{x:-12,scaleX:0.7653,scaleY:0.6874,y:0}}]},1).to({state:[{t:this.instance_1,p:{x:0,scaleX:0.5125,scaleY:0.3688,y:0}},{t:this.instance,p:{x:-12,scaleX:0.7653,scaleY:0.6874,y:0}}]},1).to({state:[{t:this.instance_1,p:{x:0,scaleX:0.5125,scaleY:0.3688,y:0}},{t:this.instance,p:{x:-12,scaleX:0.7653,scaleY:0.6874,y:0}}]},1).to({state:[{t:this.instance_1,p:{x:0,scaleX:0.5125,scaleY:0.3688,y:0}},{t:this.instance,p:{x:-12,scaleX:0.7653,scaleY:0.6874,y:0}}]},1).to({state:[{t:this.instance_1,p:{x:-23,scaleX:0.6082,scaleY:0.4313,y:-16}},{t:this.instance,p:{x:-38,scaleX:0.9081,scaleY:0.8039,y:-16}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.5125,x:0}},{t:this.instance,p:{x:-12,scaleX:0.7653,scaleY:0.6874,y:0}},{t:this.instance_1,p:{x:42,scaleX:0.4813,scaleY:0.4125,y:-35}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.5999,x:-24}},{t:this.instance,p:{x:-38,scaleX:0.8957,scaleY:0.6874,y:0}},{t:this.instance_1,p:{x:26,scaleX:0.5633,scaleY:0.4125,y:-35}},{t:this.instance_3,p:{scaleX:0.3474}}]},31).to({state:[{t:this.instance_2,p:{scaleX:0.5999,x:-24}},{t:this.instance,p:{x:-38,scaleX:0.8957,scaleY:0.6874,y:0}},{t:this.instance_1,p:{x:26,scaleX:0.5633,scaleY:0.4125,y:-35}},{t:this.instance_3,p:{scaleX:0.3474}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.5999,x:-24}},{t:this.instance,p:{x:-38,scaleX:0.8957,scaleY:0.6874,y:0}},{t:this.instance_1,p:{x:26,scaleX:0.5633,scaleY:0.4125,y:-35}},{t:this.instance_3,p:{scaleX:0.3474}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.5999,x:-24}},{t:this.instance,p:{x:-38,scaleX:0.8957,scaleY:0.6874,y:0}},{t:this.instance_1,p:{x:26,scaleX:0.5633,scaleY:0.4125,y:-35}},{t:this.instance_3,p:{scaleX:0.3474}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.5999,x:-24}},{t:this.instance,p:{x:-38,scaleX:0.8957,scaleY:0.6874,y:0}},{t:this.instance_1,p:{x:26,scaleX:0.5633,scaleY:0.4125,y:-35}},{t:this.instance_3,p:{scaleX:0.3474}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.5999,x:-24}},{t:this.instance,p:{x:-38,scaleX:0.8957,scaleY:0.6874,y:0}},{t:this.instance_1,p:{x:26,scaleX:0.5633,scaleY:0.4125,y:-35}},{t:this.instance_3,p:{scaleX:0.3474}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.5999,x:-24}},{t:this.instance,p:{x:-38,scaleX:0.8957,scaleY:0.6874,y:0}},{t:this.instance_1,p:{x:26,scaleX:0.5633,scaleY:0.4125,y:-35}},{t:this.instance_3,p:{scaleX:0.3474}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.5999,x:-24}},{t:this.instance,p:{x:-38,scaleX:0.8957,scaleY:0.6874,y:0}},{t:this.instance_1,p:{x:26,scaleX:0.5633,scaleY:0.4125,y:-35}},{t:this.instance_3,p:{scaleX:0.3474}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.5999,x:-24}},{t:this.instance,p:{x:-38,scaleX:0.8957,scaleY:0.6874,y:0}},{t:this.instance_1,p:{x:26,scaleX:0.5633,scaleY:0.4125,y:-35}},{t:this.instance_3,p:{scaleX:0.3474}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.5999,x:-24}},{t:this.instance,p:{x:-38,scaleX:0.8957,scaleY:0.6874,y:0}},{t:this.instance_1,p:{x:26,scaleX:0.5633,scaleY:0.4125,y:-35}},{t:this.instance_3,p:{scaleX:0.3474}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.5999,x:-24}},{t:this.instance,p:{x:-38,scaleX:0.8957,scaleY:0.6874,y:0}},{t:this.instance_1,p:{x:26,scaleX:0.5633,scaleY:0.4125,y:-35}},{t:this.instance_3,p:{scaleX:0.3474}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.5999,x:-24}},{t:this.instance,p:{x:-38,scaleX:0.8957,scaleY:0.6874,y:0}},{t:this.instance_1,p:{x:26,scaleX:0.5633,scaleY:0.4125,y:-35}},{t:this.instance_3,p:{scaleX:0.3474}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.5999,x:-24}},{t:this.instance,p:{x:-38,scaleX:0.8957,scaleY:0.6874,y:0}},{t:this.instance_1,p:{x:26,scaleX:0.5633,scaleY:0.4125,y:-35}},{t:this.instance_3,p:{scaleX:0.3474}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.5999,x:-24}},{t:this.instance,p:{x:-38,scaleX:0.8957,scaleY:0.6874,y:0}},{t:this.instance_1,p:{x:26,scaleX:0.5633,scaleY:0.4125,y:-35}},{t:this.instance_3,p:{scaleX:0.3474}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.5999,x:-24}},{t:this.instance,p:{x:-38,scaleX:0.8957,scaleY:0.6874,y:0}},{t:this.instance_1,p:{x:26,scaleX:0.5633,scaleY:0.4125,y:-35}},{t:this.instance_3,p:{scaleX:0.3474}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.5999,x:-24}},{t:this.instance,p:{x:-38,scaleX:0.8957,scaleY:0.6874,y:0}},{t:this.instance_1,p:{x:26,scaleX:0.5633,scaleY:0.4125,y:-35}},{t:this.instance_3,p:{scaleX:0.3474}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.5999,x:-24}},{t:this.instance,p:{x:-38,scaleX:0.8957,scaleY:0.6874,y:0}},{t:this.instance_1,p:{x:26,scaleX:0.5633,scaleY:0.4125,y:-35}},{t:this.instance_3,p:{scaleX:0.3474}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.5999,x:-24}},{t:this.instance,p:{x:-38,scaleX:0.8957,scaleY:0.6874,y:0}},{t:this.instance_1,p:{x:26,scaleX:0.5633,scaleY:0.4125,y:-35}},{t:this.instance_3,p:{scaleX:0.3474}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.5999,x:-24}},{t:this.instance,p:{x:-38,scaleX:0.8957,scaleY:0.6874,y:0}},{t:this.instance_1,p:{x:26,scaleX:0.5633,scaleY:0.4125,y:-35}},{t:this.instance_3,p:{scaleX:0.3474}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.5999,x:-24}},{t:this.instance,p:{x:-38,scaleX:0.8957,scaleY:0.6874,y:0}},{t:this.instance_1,p:{x:26,scaleX:0.5633,scaleY:0.4125,y:-35}},{t:this.instance_3,p:{scaleX:0.3474}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.5125,x:0}},{t:this.instance_4},{t:this.instance_1,p:{x:42,scaleX:0.4813,scaleY:0.4125,y:-35}},{t:this.instance_3,p:{scaleX:0.2969}},{t:this.instance,p:{x:136,scaleX:0.7375,scaleY:0.7734,y:-35}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.5125,x:0}},{t:this.instance_4},{t:this.instance_1,p:{x:42,scaleX:0.4813,scaleY:0.4125,y:-35}},{t:this.instance_3,p:{scaleX:0.2969}},{t:this.instance,p:{x:136,scaleX:0.7375,scaleY:0.7734,y:-35}}]},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38,-35,362.8,239.8);


(lib.fuego2222 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.fuego1();
	this.instance.parent = this;
	this.instance.setTransform(39.25,29.6,0.2732,0.3111,0,0,0,131.6,95.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.fuego2222, new cjs.Rectangle(0,0,75,58.8), null);


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
(lib.Sensor_CO2 = function(mode,startPosition,loop) {
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
		
		this.button_3.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame()
		{
			this.gotoAndPlay("init");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(311));

	// nube_central
	this.text = new cjs.Text("NUBE", "30px 'Wide Latin'", "#000066");
	this.text.lineHeight = 39;
	this.text.lineWidth = 265;
	this.text.parent = this;
	this.text.setTransform(163,19.55);

	this.instance = new lib.nubeservidor();
	this.instance.parent = this;
	this.instance.setTransform(78,-14,0.6419,0.7918);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance},{t:this.text}]},277).wait(48));

	// estacion_central
	this.instance_1 = new lib.copiaedificioderecencipon();
	this.instance_1.parent = this;
	this.instance_1.setTransform(621,239,1.3363,1.5573);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(277).to({_off:false},0).wait(48));

	// mesnajes
	this.instance_2 = new lib.sobre();
	this.instance_2.parent = this;
	this.instance_2.setTransform(479.05,616.05,0.958,1.1374,-29.9989,0,0,0.5,0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(247).to({_off:false},0).to({scaleX:0.9579,scaleY:1.1373,rotation:45.0005,x:534.1,y:-65.25},29).wait(1).to({regX:0.8,regY:0.2,scaleX:0.6683,scaleY:0.7942,rotation:-9.7182,x:31.85,y:-2.1},0).to({scaleX:0.7502,scaleY:0.9079,rotation:65.4417,x:425.7,y:92.15},20).to({regY:0.5,scaleX:0.5985,scaleY:0.8297,rotation:-9.7191,x:724.5,y:172.6},27).wait(1));

	// INTENET
	this.text_1 = new cjs.Text("INTERNET", "60px 'Times New Roman'", "#333333");
	this.text_1.lineHeight = 68;
	this.text_1.lineWidth = 466;
	this.text_1.parent = this;
	this.text_1.setTransform(339.9,527);

	this.instance_3 = new lib.internet();
	this.instance_3.parent = this;
	this.instance_3.setTransform(254,40,0.2562,0.2496);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.text_1}]},247).to({state:[]},30).wait(48));

	// ROUTER_CENTRAL
	this.instance_4 = new lib.routerwirelesicono();
	this.instance_4.parent = this;
	this.instance_4.setTransform(726,102,0.4933,0.6854);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(277).to({_off:false},0).wait(48));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6},{t:this.text_2},{t:this.instance_5}]},277).wait(48));

	// abol_jaja
	this.instance_7 = new lib.pinos3();
	this.instance_7.parent = this;
	this.instance_7.setTransform(612,261,0.8698,0.7314);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(91).to({_off:false},0).to({_off:true},156).wait(78));

	// mensaje3
	this.instance_8 = new lib.sobre();
	this.instance_8.parent = this;
	this.instance_8.setTransform(447.25,555.8,0.541,1,0,0,0,40.6,47.2);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(207).to({_off:false},0).to({scaleX:0.7679,x:937.55,y:157.2},13).to({x:608.25,y:111.8},14).to({x:352.7,y:94.05},12).to({_off:true},1).wait(78));

	// señal3
	this.instance_9 = new lib.copiaalerta_fuego();
	this.instance_9.parent = this;
	this.instance_9.setTransform(212,501,0.3,0.255);

	this.instance_10 = new lib.wificolor_0();
	this.instance_10.parent = this;
	this.instance_10.setTransform(332,450,0.2402,0.2042);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10},{t:this.instance_9}]},207).to({state:[]},40).to({state:[]},1).wait(77));

	// humo_3
	this.instance_11 = new lib.humo();
	this.instance_11.parent = this;
	this.instance_11.setTransform(641.5,494.55,0.958,1.6696,0,0,180,80.9,65);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(207).to({_off:false},0).to({regX:80.8,scaleX:2.0253,scaleY:2.3605,x:672.25,y:454.45},13).to({regY:65.1,scaleX:2.6209,scaleY:3.1588,y:398.15},14).to({scaleY:3.3584,skewX:-14.9991,skewY:165.001,x:627.65,y:396},12).to({_off:true},1).wait(78));

	// fuego3
	this.instance_12 = new lib.fuego2222();
	this.instance_12.parent = this;
	this.instance_12.setTransform(639.85,599.35,1.1536,1.7257,0,0,0,37.6,29.4);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(195).to({_off:false},0).to({regY:29.5,scaleX:2.3256,scaleY:2.88,x:665.35,y:576.75},25).to({regY:29.6,scaleX:3.5457,scaleY:4.3031,y:544.3},26).to({_off:true},1).wait(78));

	// Capa_59
	this.instance_13 = new lib.sobre();
	this.instance_13.parent = this;
	this.instance_13.setTransform(685.4,275.2,0.5455,1,0,0,0,40.6,47.2);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(156).to({_off:false},0).to({x:917.3,y:180.8},16).to({x:721.6,y:111.8},23).to({x:418.5},25).to({regY:67.2,x:280.6,y:5.3},26).to({_off:true},1).wait(78));

	// señal2
	this.instance_14 = new lib.copiaalerta_fuego();
	this.instance_14.parent = this;
	this.instance_14.setTransform(590,365,0.2403,0.2401);

	this.instance_15 = new lib.wificolor_0();
	this.instance_15.parent = this;
	this.instance_15.setTransform(632,275,0.1082,0.1323);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_15},{t:this.instance_14}]},156).to({state:[]},91).to({state:[]},1).wait(77));

	// humo2
	this.instance_16 = new lib.humo();
	this.instance_16.parent = this;
	this.instance_16.setTransform(873.95,287,1.2811,1.9692,0,0,180,80.8,65);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(156).to({_off:false},0).to({regX:80.7,scaleX:1.6023,scaleY:1.8537,x:936.7,y:340.65},16).to({regX:80.8,regY:65.2,scaleX:2.0811,scaleY:2.532,skewX:-19.4496,skewY:160.5503,x:901.1,y:341.1},23).to({scaleX:1.5129,skewX:-6.7416,skewY:173.259,x:907.45,y:308.65},25).to({regX:80.9,regY:65.1,scaleX:1.5128,scaleY:2.5319,skewX:27.2095,skewY:207.2096,x:957,y:361.3},26).to({_off:true},1).wait(78));

	// fuego2
	this.instance_17 = new lib.fuego2222();
	this.instance_17.parent = this;
	this.instance_17.setTransform(859.5,408.9,0.9447,1.393,0,0,0,37.6,29.4);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(145).to({_off:false},0).to({scaleX:1.9587,scaleY:1.8218,x:859.55,y:408.85},27).to({regX:37.8,regY:29.6,scaleX:2.8487,scaleY:2.9898,rotation:14.9999,x:859.85,y:409.55},23).to({regX:37.7,scaleY:2.9899,rotation:-14.9992,x:859.7,y:409.5},25).to({regX:37.8,scaleY:2.9898,rotation:14.9999,x:859.85,y:409.55},26).to({_off:true},1).wait(78));

	// mensaje1
	this.instance_18 = new lib.sobre();
	this.instance_18.parent = this;
	this.instance_18.setTransform(191.65,265,0.4162,1,0,0,0,40.8,47.2);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(102).to({_off:false},0).to({regY:47.3,scaleX:0.6366,x:118.9,y:172.3},15).to({x:360.9,y:206.3},21).to({regX:40.6,regY:47.4,x:641,y:129},17).to({x:406.2,y:121},17).to({x:286.2,y:3.05},23).to({_off:true},1).wait(129));

	// alerta1
	this.instance_19 = new lib.alerta_fuego();
	this.instance_19.parent = this;
	this.instance_19.setTransform(119,321,0.1903,0.1703);

	this.instance_20 = new lib.wificolor_0();
	this.instance_20.parent = this;
	this.instance_20.setTransform(189,265,0.1478,0.1122);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_20},{t:this.instance_19}]},102).to({state:[]},145).wait(78));

	// humo1
	this.instance_21 = new lib.humo();
	this.instance_21.parent = this;
	this.instance_21.setTransform(286.7,341,1,1,0,0,0,80.7,65);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(102).to({_off:false},0).to({scaleX:1.5948,scaleY:1.739,y:341.1},15).to({regX:80.8,regY:65.1,scaleX:1.3535,scaleY:2.1711,x:270.05,y:369.35},15).to({regY:65.2,scaleX:2.0831,scaleY:2.6013,x:271.3,y:331.35},13).to({regX:80.9,rotation:22.2319,x:303.45,y:330.75},27).to({rotation:-27.4746,x:258.75,y:386.8},23).to({scaleY:2.6012,rotation:17.5245,x:330.65,y:314.5},25).to({regX:80.8,regY:65.3,scaleX:1.855,scaleY:2.7398,rotation:-20.9272,x:266.25,y:314.55},26).to({_off:true},1).wait(78));

	// fuego1
	this.instance_22 = new lib.fuego2222();
	this.instance_22.parent = this;
	this.instance_22.setTransform(307.45,406.3,1,1,0,0,0,37.5,29.4);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(91).to({_off:false},0).to({scaleX:2.1733,scaleY:2.3605,x:318.5,y:404.4},26).to({regX:37.6,scaleX:2.9731,scaleY:3.1809,x:360.75,y:406.4},28).to({rotation:-14.9991,y:406.45},27).to({rotation:15.0001,x:360.85,y:406.55},23).to({rotation:-14.9991,x:360.75,y:406.5},25).to({scaleX:2.973,scaleY:3.1808,rotation:15.0001,x:360.9,y:406.6},26).to({_off:true},1).wait(78));

	// sensores
	this.instance_23 = new lib.copiasenorco2nuevo();
	this.instance_23.parent = this;
	this.instance_23.setTransform(612,335,0.4756,0.3779);

	this.instance_24 = new lib.copiasenorco2nuevo();
	this.instance_24.parent = this;
	this.instance_24.setTransform(195,321,0.3333,0.3779);

	this.instance_25 = new lib.copiasenorco2nuevo();
	this.instance_25.parent = this;
	this.instance_25.setTransform(345,529,0.4756,0.5378);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_25},{t:this.instance_24},{t:this.instance_23}]},91).to({state:[]},156).to({state:[]},1).wait(77));

	// torres
	this.instance_26 = new lib.torreanimada_0();
	this.instance_26.parent = this;
	this.instance_26.setTransform(-17,110,1,0.8555);

	this.instance_27 = new lib.torreanimada_0();
	this.instance_27.parent = this;
	this.instance_27.setTransform(906,110,1,0.8023);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_27},{t:this.instance_26}]},91).to({state:[]},156).to({state:[]},1).wait(77));

	// arboles
	this.instance_28 = new lib.pinos3();
	this.instance_28.parent = this;
	this.instance_28.setTransform(247,228,0.1879,0.2142);

	this.instance_29 = new lib.pinos3();
	this.instance_29.parent = this;
	this.instance_29.setTransform(-93,301,0.655,0.5625);

	this.instance_30 = new lib.pinos3();
	this.instance_30.parent = this;
	this.instance_30.setTransform(509,236,0.2718,0.3064);

	this.instance_31 = new lib.pinos3();
	this.instance_31.parent = this;
	this.instance_31.setTransform(367,200,0.2718,0.3064);

	this.instance_32 = new lib.pinos3();
	this.instance_32.parent = this;
	this.instance_32.setTransform(31,176,0.3567,0.4003);

	this.instance_33 = new lib.pinos1();
	this.instance_33.parent = this;
	this.instance_33.setTransform(824,261,0.85,0.7376);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28}]},91).to({state:[]},156).to({state:[]},1).wait(77));

	// router_inalabrico
	this.instance_34 = new lib.routerwirelesicono();
	this.instance_34.parent = this;
	this.instance_34.setTransform(582,0,0.5065,0.5955);
	this.instance_34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(91).to({_off:false},0).to({_off:true},156).wait(78));

	// seevidor
	this.instance_35 = new lib.Mapadebits77();
	this.instance_35.parent = this;
	this.instance_35.setTransform(400,121,0.626,1);

	this.text_3 = new cjs.Text("NUBE", "23px 'Times New Roman'", "#FFFFFF");
	this.text_3.lineHeight = 28;
	this.text_3.lineWidth = 352;
	this.text_3.parent = this;
	this.text_3.setTransform(346.95,96.05);

	this.instance_36 = new lib.nubeservidor();
	this.instance_36.parent = this;
	this.instance_36.setTransform(189,-17,0.775,0.7174);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_36},{t:this.text_3},{t:this.instance_35}]},91).to({state:[]},156).to({state:[]},1).wait(77));

	// fondo_animacion
	this.instance_37 = new lib.bosquefondo100();
	this.instance_37.parent = this;
	this.instance_37.setTransform(0,0,1.634,1.6883);
	this.instance_37._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(91).to({_off:false},0).to({_off:true},156).wait(78));

	// Boton_de_play
	this.button_3 = new lib.botonplay();
	this.button_3.name = "button_3";
	this.button_3.parent = this;
	this.button_3.setTransform(95,411.15);
	this.button_3._off = true;
	new cjs.ButtonHelper(this.button_3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_3).wait(14).to({_off:false},0).wait(76).to({x:111.4,y:411},0).to({_off:true},1).wait(234));

	// Letra_fondo_inicio
	this.instance_38 = new lib.SNESORCO2LETRA();
	this.instance_38.parent = this;
	this.instance_38.setTransform(227,-35,0.6851,0.6164);
	this.instance_38._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(7).to({_off:false},0).to({_off:true},84).wait(234));

	// Logo_una
	this.instance_39 = new lib.escueladeinformaticalogo();
	this.instance_39.parent = this;
	this.instance_39.setTransform(743,541,0.7071,0.5561);
	this.instance_39._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(6).to({_off:false},0).to({_off:true},85).wait(234));

	// imagen_fondo_robot
	this.instance_40 = new lib.senorco2nuevo();
	this.instance_40.parent = this;
	this.instance_40.setTransform(351,273,1.3384,1.1136);
	this.instance_40._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(14).to({_off:false},0).to({_off:true},77).wait(234));

	// fondo
	this.instance_41 = new lib.fondo_oscuro();
	this.instance_41.parent = this;
	this.instance_41.setTransform(0,0,0.5208,0.5417);

	this.timeline.addTween(cjs.Tween.get(this.instance_41).to({_off:true},91).wait(234));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(407,245.2,734.2,483.90000000000003);
// library properties:
lib.properties = {
	id: '4098C43DEC3EDB49A7EF21D548773408',
	width: 1000,
	height: 810,
	fps: 40,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Sensor_CO2_atlas_.png?1559817602930", id:"Sensor_CO2_atlas_"},
		{src:"images/Sensor_CO2_atlas_2.png?1559817602930", id:"Sensor_CO2_atlas_2"},
		{src:"images/Sensor_CO2_atlas_3.png?1559817602931", id:"Sensor_CO2_atlas_3"},
		{src:"images/Sensor_CO2_atlas_4.png?1559817602932", id:"Sensor_CO2_atlas_4"}
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
an.compositions['4098C43DEC3EDB49A7EF21D548773408'] = {
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