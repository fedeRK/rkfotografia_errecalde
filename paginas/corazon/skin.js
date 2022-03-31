// Garden Gnome Software - Skin
// Object2VR 3.1.9/10783
// Filename: RK Anato3D.ggsk
// Generated vie. 25. mar. 13:28:35 2022

function object2vrSkin(player,base) {
	var me=this;
	var flag=false;
	var nodeMarker=new Array();
	var activeNodeMarker=new Array();
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=new Array();
	this.elementMouseOver=new Array();
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	for(i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
			domTransition=prefixes[i] + 'Transition';
			domTransform=prefixes[i] + 'Transform';
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=new Array();
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=new Array();
		var stack=new Array();
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.preloadImages=function() {
		var preLoadImg=new Image();
		preLoadImg.src=basePath + 'imagenes/button_1__o.png';
		preLoadImg.src=basePath + 'imagenes/button_2__o.png';
	}
	
	this.addSkin=function() {
		this._button_1=document.createElement('div');
		this._button_1.ggId="Button 1";
		this._button_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_1.ggVisible=true;
		this._button_1.className='ggskin ggskin_button';
		this._button_1.ggType='button';
		hs ='position:absolute;';
		hs+='left: 344px;';
		hs+='top:  13px;';
		hs+='width: 50px;';
		hs+='height: 57px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_1.setAttribute('style',hs);
		this._button_1__img=document.createElement('img');
		this._button_1__img.className='ggskin ggskin_button';
		this._button_1__img.setAttribute('src',basePath + 'imagenes/button_1.png');
		this._button_1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._button_1__img.className='ggskin ggskin_button';
		this._button_1__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_1__img);
		this._button_1.appendChild(this._button_1__img);
		this._button_1.onclick=function () {
			me.player.changeViewState("0",0.05);
		}
		this._button_1.onmouseover=function () {
			me._tt_corazon.style[domTransition]='none';
			me._tt_corazon.style.visibility='inherit';
			me._tt_corazon.ggVisible=true;
			me._button_1__img.src=basePath + 'imagenes/button_1__o.png';
		}
		this._button_1.onmouseout=function () {
			me._tt_corazon.style[domTransition]='none';
			me._tt_corazon.style.visibility='hidden';
			me._tt_corazon.ggVisible=false;
			me._button_1__img.src=basePath + 'imagenes/button_1.png';
		}
		this._tt_corazon=document.createElement('div');
		this._tt_corazon__text=document.createElement('div');
		this._tt_corazon.className='ggskin ggskin_textdiv';
		this._tt_corazon.ggTextDiv=this._tt_corazon__text;
		this._tt_corazon.ggId="tt_corazon";
		this._tt_corazon.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_corazon.ggVisible=false;
		this._tt_corazon.className='ggskin ggskin_text';
		this._tt_corazon.ggType='text';
		this._tt_corazon.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-113 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-28 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -113px;';
		hs+='top:  -28px;';
		hs+='width: 120px;';
		hs+='height: 17px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._tt_corazon.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 120px;';
		hs+='height: 17px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_corazon__text.setAttribute('style',hs);
		this._tt_corazon.ggTextDiv.innerHTML="Cerrado";
		this._tt_corazon.appendChild(this._tt_corazon__text);
		this._button_1.appendChild(this._tt_corazon);
		this.divSkin.appendChild(this._button_1);
		this._button_2=document.createElement('div');
		this._button_2.ggId="Button 2";
		this._button_2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_2.ggVisible=true;
		this._button_2.className='ggskin ggskin_button';
		this._button_2.ggType='button';
		hs ='position:absolute;';
		hs+='left: 343px;';
		hs+='top:  73px;';
		hs+='width: 50px;';
		hs+='height: 57px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_2.setAttribute('style',hs);
		this._button_2__img=document.createElement('img');
		this._button_2__img.className='ggskin ggskin_button';
		this._button_2__img.setAttribute('src',basePath + 'imagenes/button_2.png');
		this._button_2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._button_2__img.className='ggskin ggskin_button';
		this._button_2__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_2__img);
		this._button_2.appendChild(this._button_2__img);
		this._button_2.onclick=function () {
			me.player.changeViewState("1",0.05);
		}
		this._button_2.onmouseover=function () {
			me._tt_confint.style[domTransition]='none';
			me._tt_confint.style.visibility='inherit';
			me._tt_confint.ggVisible=true;
			me._button_2__img.src=basePath + 'imagenes/button_2__o.png';
		}
		this._button_2.onmouseout=function () {
			me._tt_confint.style[domTransition]='none';
			me._tt_confint.style.visibility='hidden';
			me._tt_confint.ggVisible=false;
			me._button_2__img.src=basePath + 'imagenes/button_2.png';
		}
		this._tt_confint=document.createElement('div');
		this._tt_confint__text=document.createElement('div');
		this._tt_confint.className='ggskin ggskin_textdiv';
		this._tt_confint.ggTextDiv=this._tt_confint__text;
		this._tt_confint.ggId="tt_confint";
		this._tt_confint.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_confint.ggVisible=false;
		this._tt_confint.className='ggskin ggskin_text';
		this._tt_confint.ggType='text';
		this._tt_confint.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-108 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-33 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -108px;';
		hs+='top:  -33px;';
		hs+='width: 113px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._tt_confint.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 113px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_confint__text.setAttribute('style',hs);
		this._tt_confint.ggTextDiv.innerHTML="Abierto<br\/>";
		this._tt_confint.appendChild(this._tt_confint__text);
		this._button_2.appendChild(this._tt_confint);
		this.divSkin.appendChild(this._button_2);
		this._text_1=document.createElement('div');
		this._text_1__text=document.createElement('div');
		this._text_1.className='ggskin ggskin_textdiv';
		this._text_1.ggTextDiv=this._text_1__text;
		this._text_1.ggId="Text 1";
		this._text_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_1.ggVisible=true;
		this._text_1.className='ggskin ggskin_text';
		this._text_1.ggType='text';
		hs ='position:absolute;';
		hs+='left: 3px;';
		hs+='top:  5px;';
		hs+='width: 128px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._text_1.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 128px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._text_1__text.setAttribute('style',hs);
		this._text_1.ggTextDiv.innerHTML="FedeRK Fotograf\xeda";
		this._text_1.appendChild(this._text_1__text);
		this.divSkin.appendChild(this._text_1);
		this._container_2=document.createElement('div');
		this._container_2.ggId="Container 2";
		this._container_2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._container_2.ggVisible=true;
		this._container_2.className='ggskin ggskin_container';
		this._container_2.ggType='container';
		hs ='position:absolute;';
		hs+='left: 104px;';
		hs+='top:  225px;';
		hs+='width: 252px;';
		hs+='height: 68px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.6;';
		hs+='visibility: inherit;';
		this._container_2.setAttribute('style',hs);
		this._container_2.onmouseover=function () {
			me._container_1.style[domTransition]='none';
			me._container_1.style.visibility='inherit';
			me._container_1.ggVisible=true;
		}
		this._container_2.onmouseout=function () {
			me._container_1.style[domTransition]='none';
			me._container_1.style.visibility='hidden';
			me._container_1.ggVisible=false;
		}
		this._container_1=document.createElement('div');
		this._container_1.ggId="Container 1";
		this._container_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._container_1.ggVisible=false;
		this._container_1.className='ggskin ggskin_container';
		this._container_1.ggType='container';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 252px;';
		hs+='height: 68px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._container_1.setAttribute('style',hs);
		this._up=document.createElement('div');
		this._up.ggId="up";
		this._up.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._up.ggVisible=true;
		this._up.className='ggskin ggskin_svg';
		this._up.ggType='svg';
		this._up.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-101 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-68 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -101px;';
		hs+='top:  -68px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._up.setAttribute('style',hs);
		this._up__img=document.createElement('img');
		this._up__img.className='ggskin ggskin_svg';
		this._up__img.setAttribute('src',basePath + 'imagenes/up.svg');
		this._up__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._up__img['ondragstart']=function() { return false; };
		this._up.appendChild(this._up__img);
		this._up.onclick=function () {
			me.player.changeTiltLog(1,true);
		}
		this._up.onmouseover=function () {
			me._up__img.src=basePath + 'imagenes/up__o.svg';
		}
		this._up.onmouseout=function () {
			me._up__img.src=basePath + 'imagenes/up.svg';
		}
		this._container_1.appendChild(this._up);
		this._down=document.createElement('div');
		this._down.ggId="down";
		this._down.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._down.ggVisible=true;
		this._down.className='ggskin ggskin_svg';
		this._down.ggType='svg';
		this._down.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-101 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-37 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -101px;';
		hs+='top:  -37px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._down.setAttribute('style',hs);
		this._down__img=document.createElement('img');
		this._down__img.className='ggskin ggskin_svg';
		this._down__img.setAttribute('src',basePath + 'imagenes/down.svg');
		this._down__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._down__img['ondragstart']=function() { return false; };
		this._down.appendChild(this._down__img);
		this._down.onclick=function () {
			me.player.changeTiltLog(-1,true);
		}
		this._down.onmouseover=function () {
			me._down__img.src=basePath + 'imagenes/down__o.svg';
		}
		this._down.onmouseout=function () {
			me._down__img.src=basePath + 'imagenes/down.svg';
		}
		this._container_1.appendChild(this._down);
		this._left=document.createElement('div');
		this._left.ggId="left";
		this._left.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._left.ggVisible=true;
		this._left.className='ggskin ggskin_svg';
		this._left.ggType='svg';
		this._left.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-126 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-53 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -126px;';
		hs+='top:  -53px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._left.setAttribute('style',hs);
		this._left__img=document.createElement('img');
		this._left__img.className='ggskin ggskin_svg';
		this._left__img.setAttribute('src',basePath + 'imagenes/left.svg');
		this._left__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._left__img['ondragstart']=function() { return false; };
		this._left.appendChild(this._left__img);
		this._left.onclick=function () {
			me.player.changePanLog(1,true);
		}
		this._left.onmouseover=function () {
			me._left__img.src=basePath + 'imagenes/left__o.svg';
		}
		this._left.onmouseout=function () {
			me._left__img.src=basePath + 'imagenes/left.svg';
		}
		this._container_1.appendChild(this._left);
		this._right=document.createElement('div');
		this._right.ggId="right";
		this._right.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._right.ggVisible=true;
		this._right.className='ggskin ggskin_svg';
		this._right.ggType='svg';
		this._right.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-76 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-53 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -76px;';
		hs+='top:  -53px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._right.setAttribute('style',hs);
		this._right__img=document.createElement('img');
		this._right__img.className='ggskin ggskin_svg';
		this._right__img.setAttribute('src',basePath + 'imagenes/right.svg');
		this._right__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._right__img['ondragstart']=function() { return false; };
		this._right.appendChild(this._right__img);
		this._right.onclick=function () {
			me.player.changePanLog(-1,true);
		}
		this._right.onmouseover=function () {
			me._right__img.src=basePath + 'imagenes/right__o.svg';
		}
		this._right.onmouseout=function () {
			me._right__img.src=basePath + 'imagenes/right.svg';
		}
		this._container_1.appendChild(this._right);
		this._zoomin=document.createElement('div');
		this._zoomin.ggId="zoomin";
		this._zoomin.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._zoomin.ggVisible=true;
		this._zoomin.className='ggskin ggskin_svg';
		this._zoomin.ggType='svg';
		this._zoomin.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-36 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-53 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -36px;';
		hs+='top:  -53px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._zoomin.setAttribute('style',hs);
		this._zoomin__img=document.createElement('img');
		this._zoomin__img.className='ggskin ggskin_svg';
		this._zoomin__img.setAttribute('src',basePath + 'imagenes/zoomin.svg');
		this._zoomin__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._zoomin__img['ondragstart']=function() { return false; };
		this._zoomin.appendChild(this._zoomin__img);
		this._zoomin.onmouseover=function () {
			me._tt_zoomin.style[domTransition]='none';
			me._tt_zoomin.style.visibility='inherit';
			me._tt_zoomin.ggVisible=true;
			me._zoomin__img.src=basePath + 'imagenes/zoomin__o.svg';
		}
		this._zoomin.onmouseout=function () {
			me._tt_zoomin.style[domTransition]='none';
			me._tt_zoomin.style.visibility='hidden';
			me._tt_zoomin.ggVisible=false;
			me._zoomin__img.src=basePath + 'imagenes/zoomin.svg';
			me.elementMouseDown['zoomin']=false;
		}
		this._zoomin.onmousedown=function () {
			me.elementMouseDown['zoomin']=true;
		}
		this._zoomin.onmouseup=function () {
			me.elementMouseDown['zoomin']=false;
		}
		this._zoomin.ontouchend=function () {
			me.elementMouseDown['zoomin']=false;
		}
		this._tt_zoomin=document.createElement('div');
		this._tt_zoomin__text=document.createElement('div');
		this._tt_zoomin.className='ggskin ggskin_textdiv';
		this._tt_zoomin.ggTextDiv=this._tt_zoomin__text;
		this._tt_zoomin.ggId="tt_zoomin";
		this._tt_zoomin.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_zoomin.ggVisible=false;
		this._tt_zoomin.className='ggskin ggskin_text';
		this._tt_zoomin.ggType='text';
		this._tt_zoomin.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-84 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(3 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -84px;';
		hs+='top:  3px;';
		hs+='width: 148px;';
		hs+='height: 17px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._tt_zoomin.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 17px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_zoomin__text.setAttribute('style',hs);
		this._tt_zoomin.ggTextDiv.innerHTML="Zoom In";
		this._tt_zoomin.appendChild(this._tt_zoomin__text);
		this._zoomin.appendChild(this._tt_zoomin);
		this._container_1.appendChild(this._zoomin);
		this._zoomout=document.createElement('div');
		this._zoomout.ggId="zoomout";
		this._zoomout.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._zoomout.ggVisible=true;
		this._zoomout.className='ggskin ggskin_svg';
		this._zoomout.ggType='svg';
		this._zoomout.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-6 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-53 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -6px;';
		hs+='top:  -53px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._zoomout.setAttribute('style',hs);
		this._zoomout__img=document.createElement('img');
		this._zoomout__img.className='ggskin ggskin_svg';
		this._zoomout__img.setAttribute('src',basePath + 'imagenes/zoomout.svg');
		this._zoomout__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._zoomout__img['ondragstart']=function() { return false; };
		this._zoomout.appendChild(this._zoomout__img);
		this._zoomout.onmouseover=function () {
			me._tt_zoomout.style[domTransition]='none';
			me._tt_zoomout.style.visibility='inherit';
			me._tt_zoomout.ggVisible=true;
			me._zoomout__img.src=basePath + 'imagenes/zoomout__o.svg';
		}
		this._zoomout.onmouseout=function () {
			me._tt_zoomout.style[domTransition]='none';
			me._tt_zoomout.style.visibility='hidden';
			me._tt_zoomout.ggVisible=false;
			me._zoomout__img.src=basePath + 'imagenes/zoomout.svg';
			me.elementMouseDown['zoomout']=false;
		}
		this._zoomout.onmousedown=function () {
			me.elementMouseDown['zoomout']=true;
		}
		this._zoomout.onmouseup=function () {
			me.elementMouseDown['zoomout']=false;
		}
		this._zoomout.ontouchend=function () {
			me.elementMouseDown['zoomout']=false;
		}
		this._tt_zoomout=document.createElement('div');
		this._tt_zoomout__text=document.createElement('div');
		this._tt_zoomout.className='ggskin ggskin_textdiv';
		this._tt_zoomout.ggTextDiv=this._tt_zoomout__text;
		this._tt_zoomout.ggId="tt_zoomout";
		this._tt_zoomout.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_zoomout.ggVisible=false;
		this._tt_zoomout.className='ggskin ggskin_text';
		this._tt_zoomout.ggType='text';
		this._tt_zoomout.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-85 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(3 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -85px;';
		hs+='top:  3px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._tt_zoomout.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_zoomout__text.setAttribute('style',hs);
		this._tt_zoomout.ggTextDiv.innerHTML="Zoom Out";
		this._tt_zoomout.appendChild(this._tt_zoomout__text);
		this._zoomout.appendChild(this._tt_zoomout);
		this._container_1.appendChild(this._zoomout);
		this._autorotate=document.createElement('div');
		this._autorotate.ggId="autorotate";
		this._autorotate.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._autorotate.ggVisible=true;
		this._autorotate.className='ggskin ggskin_svg';
		this._autorotate.ggType='svg';
		this._autorotate.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(34 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-53 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 34px;';
		hs+='top:  -53px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._autorotate.setAttribute('style',hs);
		this._autorotate__img=document.createElement('img');
		this._autorotate__img.className='ggskin ggskin_svg';
		this._autorotate__img.setAttribute('src',basePath + 'imagenes/autorotate.svg');
		this._autorotate__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._autorotate__img['ondragstart']=function() { return false; };
		this._autorotate.appendChild(this._autorotate__img);
		this._autorotate.onclick=function () {
			me.player.toggleAutorotate();
		}
		this._autorotate.onmouseover=function () {
			me._tt_autorotate.style[domTransition]='none';
			me._tt_autorotate.style.visibility='inherit';
			me._tt_autorotate.ggVisible=true;
			me._autorotate__img.src=basePath + 'imagenes/autorotate__o.svg';
		}
		this._autorotate.onmouseout=function () {
			me._tt_autorotate.style[domTransition]='none';
			me._tt_autorotate.style.visibility='hidden';
			me._tt_autorotate.ggVisible=false;
			me._autorotate__img.src=basePath + 'imagenes/autorotate.svg';
		}
		this._tt_autorotate=document.createElement('div');
		this._tt_autorotate__text=document.createElement('div');
		this._tt_autorotate.className='ggskin ggskin_textdiv';
		this._tt_autorotate.ggTextDiv=this._tt_autorotate__text;
		this._tt_autorotate.ggId="tt_autorotate";
		this._tt_autorotate.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_autorotate.ggVisible=false;
		this._tt_autorotate.className='ggskin ggskin_text';
		this._tt_autorotate.ggType='text';
		this._tt_autorotate.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-94 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(3 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -94px;';
		hs+='top:  3px;';
		hs+='width: 168px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._tt_autorotate.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 168px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_autorotate__text.setAttribute('style',hs);
		this._tt_autorotate.ggTextDiv.innerHTML="Auto Rotar";
		this._tt_autorotate.appendChild(this._tt_autorotate__text);
		this._autorotate.appendChild(this._tt_autorotate);
		this._container_1.appendChild(this._autorotate);
		this._container_2.appendChild(this._container_1);
		this.divSkin.appendChild(this._container_2);
		this.preloadImages();
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
		}
		this.divSkin.ggLoaded=function() {
		}
		this.divSkin.ggReLoaded=function() {
		}
		this.divSkin.ggLoadedLevels=function() {
		}
		this.divSkin.ggReLoadedLevels=function() {
		}
		this.divSkin.ggEnterFullscreen=function() {
		}
		this.divSkin.ggExitFullscreen=function() {
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
	}
	this.hotspotProxyOver=function(id) {
	}
	this.hotspotProxyOut=function(id) {
	}
	this.changeActiveNode=function(id) {
		var newMarker=new Array();
		var i,j;
		var tags=me.player.userdata.tags;
		for (i=0;i<nodeMarker.length;i++) {
			var match=false;
			if ((nodeMarker[i].ggMarkerNodeId==id) && (id!='')) match=true;
			for(j=0;j<tags.length;j++) {
				if (nodeMarker[i].ggMarkerNodeId==tags[j]) match=true;
			}
			if (match) {
				newMarker.push(nodeMarker[i]);
			}
		}
		for(i=0;i<activeNodeMarker.length;i++) {
			if (newMarker.indexOf(activeNodeMarker[i])<0) {
				if (activeNodeMarker[i].ggMarkerNormal) {
					activeNodeMarker[i].ggMarkerNormal.style.visibility='inherit';
				}
				if (activeNodeMarker[i].ggMarkerActive) {
					activeNodeMarker[i].ggMarkerActive.style.visibility='hidden';
				}
				if (activeNodeMarker[i].ggDeactivate) {
					activeNodeMarker[i].ggDeactivate();
				}
			}
		}
		for(i=0;i<newMarker.length;i++) {
			if (activeNodeMarker.indexOf(newMarker[i])<0) {
				if (newMarker[i].ggMarkerNormal) {
					newMarker[i].ggMarkerNormal.style.visibility='hidden';
				}
				if (newMarker[i].ggMarkerActive) {
					newMarker[i].ggMarkerActive.style.visibility='inherit';
				}
				if (newMarker[i].ggActivate) {
					newMarker[i].ggActivate();
				}
			}
		}
		activeNodeMarker=newMarker;
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
		if (me.elementMouseDown['zoomin']) {
			me.player.changeFovLog(-1,true);
		}
		if (me.elementMouseDown['zoomout']) {
			me.player.changeFovLog(1,true);
		}
	};
	this.addSkin();
};