(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Mapa_atlas_", frames: [[0,0,2000,2000]]},
		{name:"Mapa_atlas_2", frames: [[0,0,1920,1200]]},
		{name:"Mapa_atlas_3", frames: [[0,0,1698,1260]]},
		{name:"Mapa_atlas_4", frames: [[0,1002,1183,793],[0,0,1000,1000]]},
		{name:"Mapa_atlas_5", frames: [[849,1375,960,480],[1217,722,800,500],[1282,0,650,433],[0,1375,847,602],[0,0,1280,720],[0,722,1215,651]]},
		{name:"Mapa_atlas_6", frames: [[628,1038,350,200],[0,0,575,479],[628,237,333,264],[0,832,626,306],[628,503,333,264],[482,1240,295,173],[779,1240,232,160],[0,1415,850,4],[628,0,376,235],[0,481,620,349],[0,1140,480,269],[628,769,300,267]]}
];


// symbols:



(lib.bosque = function() {
	this.initialize(ss["Mapa_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.BotonSENSORSIMULACION2 = function() {
	this.initialize(ss["Mapa_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_4 = function() {
	this.initialize(ss["Mapa_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.centro = function() {
	this.initialize(ss["Mapa_atlas_6"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.copiaedificioderecencipon = function() {
	this.initialize(ss["Mapa_atlas_6"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.copiamonitoreocentropng4 = function() {
	this.initialize(ss["Mapa_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.cuidad2 = function() {
	this.initialize(ss["Mapa_atlas_6"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.edificioderecencipon = function() {
	this.initialize(ss["Mapa_atlas_6"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.escueladeinformaticalogo = function() {
	this.initialize(ss["Mapa_atlas_6"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.fondocafe = function() {
	this.initialize(ss["Mapa_atlas_6"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.fondo_oscuro = function() {
	this.initialize(ss["Mapa_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.internet = function() {
	this.initialize(ss["Mapa_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.LETRAmapainteligente = function() {
	this.initialize(ss["Mapa_atlas_5"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits76 = function() {
	this.initialize(ss["Mapa_atlas_6"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.mapatemperatura = function() {
	this.initialize(ss["Mapa_atlas_5"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.mapa2tra = function() {
	this.initialize(ss["Mapa_atlas_6"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.mapa3 = function() {
	this.initialize(ss["Mapa_atlas_5"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.mapa3Dfinal = function() {
	this.initialize(ss["Mapa_atlas_5"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.mapa4 = function() {
	this.initialize(ss["Mapa_atlas_6"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.mapa5 = function() {
	this.initialize(ss["Mapa_atlas_5"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.nubeservidor = function() {
	this.initialize(ss["Mapa_atlas_6"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.routerwirelesicono = function() {
	this.initialize(ss["Mapa_atlas_6"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.sobretrnasparente = function() {
	this.initialize(ss["Mapa_atlas_4"]);
	this.gotoAndStop(1);
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
(lib.Mapa = function(mode,startPosition,loop) {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(513));

	// nube_central
	this.text = new cjs.Text("NUBE", "30px 'Wide Latin'", "#000066");
	this.text.lineHeight = 39;
	this.text.lineWidth = 265;
	this.text.parent = this;
	this.text.setTransform(163,19.55);

	this.instance = new lib.nubeservidor();
	this.instance.parent = this;
	this.instance.setTransform(78,-14,0.6419,0.7918);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance},{t:this.text}]},468).wait(59));

	// ROUTER_CENTRAL
	this.instance_1 = new lib.routerwirelesicono();
	this.instance_1.parent = this;
	this.instance_1.setTransform(726,102,0.4933,0.6854);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(468).to({_off:false},0).wait(59));

	// estacion_central
	this.instance_2 = new lib.copiaedificioderecencipon();
	this.instance_2.parent = this;
	this.instance_2.setTransform(621,239,1.3363,1.5573);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(468).to({_off:false},0).wait(59));

	// mesnajes
	this.instance_3 = new lib.sobre();
	this.instance_3.parent = this;
	this.instance_3.setTransform(255.5,95.85,0.6683,0.7942,-9.7182,0,0,0.8,0.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(468).to({_off:false},0).to({scaleX:0.7502,scaleY:0.9079,rotation:65.4417,x:425.7,y:92.15},20).to({regY:0.5,scaleX:0.5985,scaleY:0.8297,rotation:-9.7191,x:724.5,y:172.6},38).wait(1));

	// fondo_estacion_central
	this.instance_4 = new lib.Mapadebits76();
	this.instance_4.parent = this;
	this.instance_4.setTransform(241.05,129.9,0.6153,2.5,0,-172.3001,7.6983);

	this.text_1 = new cjs.Text("ESTACION \nCENTRAL", "60px 'Times New Roman'", "#333333");
	this.text_1.lineHeight = 68;
	this.text_1.lineWidth = 353;
	this.text_1.parent = this;
	this.text_1.setTransform(96.4,415.75);

	this.instance_5 = new lib.cuidad2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,0,1.5974,2.1242);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5},{t:this.text_1},{t:this.instance_4}]},468).wait(59));

	// mensajes_anaimacion_nube_intenet_nune_copia
	this.instance_6 = new lib.sobre();
	this.instance_6.parent = this;
	this.instance_6.setTransform(273.95,442.3,1,1,0,0,0,40.6,47.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(414).to({_off:false},0).to({x:507.85,y:219.15},27).to({regY:27.2,scaleX:0.7078,x:853.3,y:155.2},26).wait(60));

	// mensajes_anaimacion_nube_intenet_nune
	this.instance_7 = new lib.sobre();
	this.instance_7.parent = this;
	this.instance_7.setTransform(98,536.7,1,1,0,0,0,40.6,47.2);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(414).to({_off:false},0).to({x:507.85,y:313.55},27).to({scaleX:0.7078,x:880.5,y:80.8},26).wait(60));

	// nube_mapa
	this.instance_8 = new lib.nubeservidor();
	this.instance_8.parent = this;
	this.instance_8.setTransform(88,453,0.3298,0.2867);

	this.instance_9 = new lib.bosque();
	this.instance_9.parent = this;
	this.instance_9.setTransform(14,461,0.242,0.4417);

	this.text_2 = new cjs.Text("Datos enviados  sensores del bosque", "40px 'Times New Roman'");
	this.text_2.lineHeight = 46;
	this.text_2.lineWidth = 294;
	this.text_2.parent = this;
	this.text_2.setTransform(16,288);

	this.text_3 = new cjs.Text("Nube central", "50px 'Times New Roman'");
	this.text_3.lineHeight = 57;
	this.text_3.lineWidth = 272;
	this.text_3.parent = this;
	this.text_3.setTransform(710.25,212.35);

	this.text_4 = new cjs.Text("Internet", "50px 'Times New Roman'");
	this.text_4.lineHeight = 57;
	this.text_4.lineWidth = 240;
	this.text_4.parent = this;
	this.text_4.setTransform(423.9,454.6);

	this.instance_10 = new lib.nubeservidor();
	this.instance_10.parent = this;
	this.instance_10.setTransform(720,20,0.5502,0.7472);

	this.instance_11 = new lib.internet();
	this.instance_11.parent = this;
	this.instance_11.setTransform(362,128,0.1603,0.1623);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.instance_9},{t:this.instance_8}]},414).wait(113));

	// nubes_2
	this.text_5 = new cjs.Text("NUBE", "25px 'Times New Roman'", "#FFFFFF");
	this.text_5.lineHeight = 30;
	this.text_5.lineWidth = 352;
	this.text_5.parent = this;
	this.text_5.setTransform(176,158.95);

	this.instance_12 = new lib.nubeservidor();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-42,-17,1.0417,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_12},{t:this.text_5}]},374).to({state:[]},40).wait(113));

	// toopologia
	this.instance_13 = new lib.routerwirelesicono();
	this.instance_13.parent = this;
	this.instance_13.setTransform(725,196,0.44,0.6554);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(374).to({_off:false},0).to({_off:true},40).wait(113));

	// mensaje_salida_monotoreo
	this.instance_14 = new lib.sobre();
	this.instance_14.parent = this;
	this.instance_14.setTransform(757.8,256,0.5325,0.5932,0,0,0,40.6,47.3);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(374).to({_off:false},0).to({x:-6,y:-27.95},39).to({_off:true},1).wait(113));

	// edifi
	this.instance_15 = new lib.edificioderecencipon();
	this.instance_15.parent = this;
	this.instance_15.setTransform(680,348,1.1153,1.1454);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(374).to({_off:false},0).to({_off:true},40).wait(113));

	// fondo_animacion
	this.text_6 = new cjs.Text("ESTACION CENTRAL", "55px 'Times New Roman'", "#333333");
	this.text_6.lineHeight = 63;
	this.text_6.lineWidth = 336;
	this.text_6.parent = this;
	this.text_6.setTransform(128.75,468);

	this.text_7 = new cjs.Text("Router central", "55px 'Times New Roman'", "#333333");
	this.text_7.lineHeight = 63;
	this.text_7.lineWidth = 170;
	this.text_7.parent = this;
	this.text_7.setTransform(586.8057,349.1,0.9817,0.5493);

	this.instance_16 = new lib.cuidad2();
	this.instance_16.parent = this;
	this.instance_16.setTransform(0,0,1.5974,2.1242);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_16},{t:this.text_7},{t:this.text_6}]},374).to({state:[]},40).wait(113));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_9},{t:this.text_8}]},233).to({state:[]},141).wait(153));

	// mens2
	this.instance_17 = new lib.sobre();
	this.instance_17.parent = this;
	this.instance_17.setTransform(407.55,389.6,0.548,0.8414,-14.9984,0,0,40.7,47.4);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(344).to({_off:false},0).to({x:315.7,y:480.6},29).to({_off:true},1).wait(153));

	// mensaje_salida_monotoreo
	this.instance_18 = new lib.sobre();
	this.instance_18.parent = this;
	this.instance_18.setTransform(321.4,209.8,0.548,0.8414,-14.9984,0,0,40.7,47.4);
	this.instance_18._off = true;

	this.instance_19 = new lib.Interpolación6("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(384.25,341.7);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(233).to({_off:false},0).to({x:388.6,y:293},21).wait(1).to({x:521.4,y:318.6},0).to({x:612.6,y:267.4},17).wait(33).to({x:529.4,y:313.8},38).to({_off:true},1).wait(30).to({_off:false,regX:40.6,regY:47.3,scaleX:0.5325,scaleY:0.5932,rotation:0,x:757.8,y:256},0).to({x:-6,y:-27.95},39).to({_off:true},1).wait(113));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(344).to({_off:false},0).to({x:308.25,y:265.7},29).to({_off:true},1).wait(153));

	// dron_img
	this.instance_20 = new lib.mapa3Dfinal();
	this.instance_20.parent = this;
	this.instance_20.setTransform(97,40,0.0565,0.0757);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(233).to({_off:false},0).to({_off:true},141).wait(153));

	// centro_monitoreo
	this.instance_21 = new lib.CachedTexturedBitmap_4();
	this.instance_21.parent = this;
	this.instance_21.setTransform(79,20,0.5,0.5);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(233).to({_off:false},0).to({_off:true},141).wait(153));

	// edifi
	this.instance_22 = new lib.edificioderecencipon();
	this.instance_22.parent = this;
	this.instance_22.setTransform(680,348,1.1153,1.1454);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(374).to({_off:false},0).to({_off:true},40).wait(113));

	// letras_maparadiacion
	this.text_10 = new cjs.Text("Datos enviados por el sensor de radiacón - Hace 15 minutos.", "35px 'Times New Roman'", "#333333");
	this.text_10.lineHeight = 41;
	this.text_10.lineWidth = 890;
	this.text_10.parent = this;
	this.text_10.setTransform(46.05,113.4);

	this.text_11 = new cjs.Text("Mapa de calor", "50px 'Times New Roman'", "#333333");
	this.text_11.lineHeight = 57;
	this.text_11.lineWidth = 288;
	this.text_11.parent = this;
	this.text_11.setTransform(355.9,28.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_11},{t:this.text_10}]},190).to({state:[]},43).to({state:[]},279).wait(15));

	// maparadaicion
	this.instance_23 = new lib.mapatemperatura();
	this.instance_23.parent = this;
	this.instance_23.setTransform(176,158);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(190).to({_off:false},0).to({_off:true},43).wait(294));

	// map3d
	this.instance_24 = new lib.mapa3Dfinal();
	this.instance_24.parent = this;
	this.instance_24.setTransform(0,0,0.7813,0.9028);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(142).to({_off:false},0).to({_off:true},48).wait(337));

	// letras_monitore1
	this.text_12 = new cjs.Text("Visualizando informacion en tiempo real, obtenda en la nube", "40px 'Times New Roman'", "#333333");
	this.text_12.lineHeight = 46;
	this.text_12.lineWidth = 602;
	this.text_12.parent = this;
	this.text_12.setTransform(12.05,426.2);
	this.text_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text_12).wait(91).to({_off:false},0).to({_off:true},51).wait(385));

	// objetos_moitoreo1
	this.instance_25 = new lib.mapa3();
	this.instance_25.parent = this;
	this.instance_25.setTransform(367,249,0.2682,0.2096);

	this.instance_26 = new lib.mapa4();
	this.instance_26.parent = this;
	this.instance_26.setTransform(37,238,0.4003,0.3928);

	this.instance_27 = new lib.mapa5();
	this.instance_27.parent = this;
	this.instance_27.setTransform(676,47,0.2168,0.1768);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_27},{t:this.instance_26},{t:this.instance_25}]},91).to({state:[]},51).wait(385));

	// imgane_moitore1
	this.instance_28 = new lib.centro();
	this.instance_28.parent = this;
	this.instance_28.setTransform(0,0,1.7391,1.357);
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(91).to({_off:false},0).to({_off:true},51).wait(385));

	// Boton_de_play
	this.button_3 = new lib.botonplay();
	this.button_3.name = "button_3";
	this.button_3.parent = this;
	this.button_3.setTransform(95,411.15);
	this.button_3._off = true;
	new cjs.ButtonHelper(this.button_3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_3).wait(14).to({_off:false},0).wait(76).to({x:111.4,y:411},0).to({_off:true},1).wait(436));

	// Letra_fondo_inicio
	this.instance_29 = new lib.LETRAmapainteligente();
	this.instance_29.parent = this;
	this.instance_29.setTransform(243,-53,0.6901,0.7042);
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(7).to({_off:false},0).to({_off:true},84).wait(436));

	// Logo_una
	this.instance_30 = new lib.escueladeinformaticalogo();
	this.instance_30.parent = this;
	this.instance_30.setTransform(743,541,0.7071,0.5561);
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(6).to({_off:false},0).to({_off:true},85).wait(436));

	// imagen_fondo_robot
	this.instance_31 = new lib.mapa2tra();
	this.instance_31.parent = this;
	this.instance_31.setTransform(286,186,1.3087,1.4688);
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(14).to({_off:false},0).to({_off:true},77).wait(436));

	// fondo
	this.instance_32 = new lib.fondo_oscuro();
	this.instance_32.parent = this;
	this.instance_32.setTransform(0,0,0.5208,0.5417);

	this.timeline.addTween(cjs.Tween.get(this.instance_32).to({_off:true},91).wait(436));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(458,269,608,404);
// library properties:
lib.properties = {
	id: '5696DF9437F87D4380B44D053BEDCB47',
	width: 1000,
	height: 810,
	fps: 45,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Mapa_atlas_.png?1559698116046", id:"Mapa_atlas_"},
		{src:"images/Mapa_atlas_2.png?1559698116047", id:"Mapa_atlas_2"},
		{src:"images/Mapa_atlas_3.png?1559698116047", id:"Mapa_atlas_3"},
		{src:"images/Mapa_atlas_4.png?1559698116047", id:"Mapa_atlas_4"},
		{src:"images/Mapa_atlas_5.png?1559698116048", id:"Mapa_atlas_5"},
		{src:"images/Mapa_atlas_6.png?1559698116048", id:"Mapa_atlas_6"}
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
an.compositions['5696DF9437F87D4380B44D053BEDCB47'] = {
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