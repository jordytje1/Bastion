const a197_0x6572=['guild','default','name','infractions','music','abs','language','length','roleId','kick','COLORS','@bastion/tesseract','send','Kick','isOwner','comparePositionTo','clamp','balance','GuildMember','ownerID','test','Ban','save','MIN_SAFE_INTEGER','exports','constructor','banThreshold','push','\x20infractions.','debit','credit','Logger','has','apply','findOne','kickable','Constants','../models/Member','locale','bannable','ban','error','../utils/numbers','addInfraction','discord.js','client','memberInfractions','getDocument','info','MAX_SAFE_INTEGER','document','../models/Transaction','catch','user','roles'];(function(_0x289651,_0x65728b){const _0x1bfe17=function(_0x5459f1){while(--_0x5459f1){_0x289651['push'](_0x289651['shift']());}};const _0x371c30=function(){const _0x47ed86={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x5c0df2,_0x4aaadd,_0x503e02,_0x2dbb9b){_0x2dbb9b=_0x2dbb9b||{};let _0x132c70=_0x4aaadd+'='+_0x503e02;let _0x3655a5=0x0;for(let _0x410199=0x0,_0x15b3ad=_0x5c0df2['length'];_0x410199<_0x15b3ad;_0x410199++){const _0x1b7588=_0x5c0df2[_0x410199];_0x132c70+=';\x20'+_0x1b7588;const _0x1c8a17=_0x5c0df2[_0x1b7588];_0x5c0df2['push'](_0x1c8a17);_0x15b3ad=_0x5c0df2['length'];if(_0x1c8a17!==!![]){_0x132c70+='='+_0x1c8a17;}}_0x2dbb9b['cookie']=_0x132c70;},'removeCookie':function(){return'dev';},'getCookie':function(_0x138486,_0x4d90db){_0x138486=_0x138486||function(_0x21a476){return _0x21a476;};const _0x27ad51=_0x138486(new RegExp('(?:^|;\x20)'+_0x4d90db['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x99e670=function(_0x1673d0,_0x23f6a0){_0x1673d0(++_0x23f6a0);};_0x99e670(_0x1bfe17,_0x65728b);return _0x27ad51?decodeURIComponent(_0x27ad51[0x1]):undefined;}};const _0x4615df=function(){const _0x5f0162=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x5f0162['test'](_0x47ed86['removeCookie']['toString']());};_0x47ed86['updateCookie']=_0x4615df;let _0x2d4414='';const _0x3937ba=_0x47ed86['updateCookie']();if(!_0x3937ba){_0x47ed86['setCookie'](['*'],'counter',0x1);}else if(_0x3937ba){_0x2d4414=_0x47ed86['getCookie'](null,'counter');}else{_0x47ed86['removeCookie']();}};_0x371c30();}(a197_0x6572,0x10e));const a197_0x1bfe=function(_0x289651,_0x65728b){_0x289651=_0x289651-0x0;let _0x1bfe17=a197_0x6572[_0x289651];return _0x1bfe17;};const a197_0x47ed86=function(){let _0x230eb0=!![];return function(_0x7f7695,_0x260437){const _0x377a75=_0x230eb0?function(){if(_0x260437){const _0x574c4e=_0x260437[a197_0x1bfe('0x26')](_0x7f7695,arguments);_0x260437=null;return _0x574c4e;}}:function(){};_0x230eb0=![];return _0x377a75;};}();const a197_0x5459f1=a197_0x47ed86(this,function(){const _0x309ffc=function(){const _0x194fb4=_0x309ffc[a197_0x1bfe('0x1e')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()['compile']('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x194fb4[a197_0x1bfe('0x19')](a197_0x5459f1);};return _0x309ffc();});a197_0x5459f1();'use strict';const tesseract_1=require(a197_0x1bfe('0x10'));const discord_js_1=require(a197_0x1bfe('0x31'));const Member_1=require(a197_0x1bfe('0x2a'));const Transaction_1=require(a197_0x1bfe('0x1'));const numbers=require(a197_0x1bfe('0x2f'));module[a197_0x1bfe('0x1d')]=class BastionGuildMember extends discord_js_1[a197_0x1bfe('0x17')]{constructor(_0x585b2b,_0x27e7a1,_0x1fe9b7){super(_0x585b2b,_0x27e7a1,_0x1fe9b7);}['canManage'](_0xf4be28){if(this['id']===this[a197_0x1bfe('0x5')][a197_0x1bfe('0x18')])return!![];if(_0xf4be28['id']===this[a197_0x1bfe('0x5')][a197_0x1bfe('0x18')])return![];if(this['id']===_0xf4be28['id'])return![];return this[a197_0x1bfe('0x4')]['highest'][a197_0x1bfe('0x14')](_0xf4be28[a197_0x1bfe('0x4')]['highest'])>0x0;}async[a197_0x1bfe('0x34')](){return await Member_1['default'][a197_0x1bfe('0x27')]({'user':this['id'],'guild':this[a197_0x1bfe('0x5')]['id']});}['isMusicMaster'](){if(this[a197_0x1bfe('0x3')][a197_0x1bfe('0x13')]())return!![];return this[a197_0x1bfe('0x5')][a197_0x1bfe('0x0')][a197_0x1bfe('0x9')]&&this[a197_0x1bfe('0x5')]['document'][a197_0x1bfe('0x9')][a197_0x1bfe('0xd')]&&this[a197_0x1bfe('0x4')]['cache'][a197_0x1bfe('0x25')](this[a197_0x1bfe('0x5')]['document'][a197_0x1bfe('0x9')][a197_0x1bfe('0xd')]);}async[a197_0x1bfe('0x30')](_0x10ac71){const _0xe353fc=await this['getDocument']();if(_0xe353fc['infractions']){_0xe353fc[a197_0x1bfe('0x8')][a197_0x1bfe('0x20')](_0x10ac71);}else{_0xe353fc[a197_0x1bfe('0x8')]=[_0x10ac71];}const _0x4f8b16=this[a197_0x1bfe('0x5')][a197_0x1bfe('0x0')]?this[a197_0x1bfe('0x5')][a197_0x1bfe('0x0')]:await this[a197_0x1bfe('0x5')][a197_0x1bfe('0x34')]();if(_0x4f8b16[a197_0x1bfe('0x8')]){const _0x5a31aa=_0xe353fc['infractions'][a197_0x1bfe('0xc')];let _0x5dee47;if(this[a197_0x1bfe('0x28')]&&_0xe353fc[a197_0x1bfe('0x8')][a197_0x1bfe('0xc')]===_0x4f8b16['infractions']['kickThreshold']){_0x5dee47=a197_0x1bfe('0x12');await this[a197_0x1bfe('0xe')](_0xe353fc[a197_0x1bfe('0x8')][a197_0x1bfe('0xc')]+a197_0x1bfe('0x21'));}if(this[a197_0x1bfe('0x2c')]&&_0xe353fc[a197_0x1bfe('0x8')][a197_0x1bfe('0xc')]===_0x4f8b16[a197_0x1bfe('0x8')][a197_0x1bfe('0x1f')]){_0x5dee47=a197_0x1bfe('0x1a');await this[a197_0x1bfe('0x2d')]({'reason':_0xe353fc['infractions'][a197_0x1bfe('0xc')]+a197_0x1bfe('0x21')});_0xe353fc[a197_0x1bfe('0x8')]=undefined;delete _0xe353fc[a197_0x1bfe('0x8')];}if(_0x5dee47){await this[a197_0x1bfe('0x11')]({'embed':{'color':tesseract_1[a197_0x1bfe('0x29')][a197_0x1bfe('0xf')]['ORANGE'],'description':this[a197_0x1bfe('0x32')][a197_0x1bfe('0x2b')]['getString'](_0x4f8b16[a197_0x1bfe('0xb')],a197_0x1bfe('0x35'),a197_0x1bfe('0x33')+_0x5dee47,this[a197_0x1bfe('0x5')][a197_0x1bfe('0x7')],_0x5a31aa)}})['catch'](()=>{});}}return _0xe353fc[a197_0x1bfe('0x1b')]();}async['clearInfractions'](){const _0x21e755=this['document']?this['document']:await this[a197_0x1bfe('0x34')]();_0x21e755[a197_0x1bfe('0x8')]=undefined;delete _0x21e755[a197_0x1bfe('0x8')];return _0x21e755[a197_0x1bfe('0x1b')]();}async[a197_0x1bfe('0x23')](_0x42c06e,_0x53fc47,_0x497047){_0x42c06e=Math[a197_0x1bfe('0xa')](_0x42c06e);const _0x49cbe6=_0x497047||await this[a197_0x1bfe('0x34')]();if(_0x42c06e){_0x49cbe6[a197_0x1bfe('0x16')]=numbers[a197_0x1bfe('0x15')](_0x49cbe6[a197_0x1bfe('0x16')]+_0x42c06e,Number[a197_0x1bfe('0x36')]);if(!_0x497047){await Transaction_1[a197_0x1bfe('0x6')]['create']({'guild':this[a197_0x1bfe('0x5')]['id'],'sender':this[a197_0x1bfe('0x32')][a197_0x1bfe('0x3')]['id'],'receiver':_0x497047[a197_0x1bfe('0x3')],'amount':_0x42c06e,'time':new Date(),'note':_0x53fc47})[a197_0x1bfe('0x2')](tesseract_1[a197_0x1bfe('0x24')][a197_0x1bfe('0x2e')]);}}return _0x497047?_0x49cbe6:_0x49cbe6['save']();}async[a197_0x1bfe('0x22')](_0x507380,_0x1f040b,_0x2b2d2){_0x507380=Math['abs'](_0x507380);const _0x7dd34=_0x2b2d2||await this[a197_0x1bfe('0x34')]();if(_0x507380){_0x7dd34['balance']=numbers[a197_0x1bfe('0x15')](_0x7dd34[a197_0x1bfe('0x16')]-_0x507380,Number[a197_0x1bfe('0x1c')]);if(!_0x2b2d2){await Transaction_1[a197_0x1bfe('0x6')]['create']({'guild':this[a197_0x1bfe('0x5')]['id'],'sender':_0x2b2d2[a197_0x1bfe('0x3')],'receiver':this[a197_0x1bfe('0x32')]['user']['id'],'amount':_0x507380,'time':new Date(),'note':_0x1f040b})[a197_0x1bfe('0x2')](tesseract_1[a197_0x1bfe('0x24')][a197_0x1bfe('0x2e')]);}}return _0x2b2d2?_0x7dd34:_0x7dd34[a197_0x1bfe('0x1b')]();}};