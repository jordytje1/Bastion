const a81_0x33cb=['compile','Constants','Reason','resolveUser','Command','catch','members','name','COLORS','language','send','channel','info','locale','BASTION_ERROR_TYPE','user','getString','constructor','author','test','unban\x20--user\x20USER_ID\x20--\x20REASON','apply','return\x20/\x22\x20+\x20this\x20+\x20\x22/','../../utils/errors','It\x20allows\x20you\x20to\x20unban\x20the\x20users\x20who\x27re\x20banned\x20in\x20the\x20server.','exports','exec','client','tag','BAN_MEMBERS','INVALID_COMMAND_SYNTAX','guild','resolver','document'];(function(_0x498068,_0x33cb85){const _0x2f96ef=function(_0x136d12){while(--_0x136d12){_0x498068['push'](_0x498068['shift']());}};const _0x47438a=function(){const _0x1ceb7c={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x459c9e,_0x33f75e,_0x55e4d2,_0x20712e){_0x20712e=_0x20712e||{};let _0x4a5b1a=_0x33f75e+'='+_0x55e4d2;let _0x1afd83=0x0;for(let _0xf8579a=0x0,_0x371882=_0x459c9e['length'];_0xf8579a<_0x371882;_0xf8579a++){const _0x4ae6ed=_0x459c9e[_0xf8579a];_0x4a5b1a+=';\x20'+_0x4ae6ed;const _0x357710=_0x459c9e[_0x4ae6ed];_0x459c9e['push'](_0x357710);_0x371882=_0x459c9e['length'];if(_0x357710!==!![]){_0x4a5b1a+='='+_0x357710;}}_0x20712e['cookie']=_0x4a5b1a;},'removeCookie':function(){return'dev';},'getCookie':function(_0xf544aa,_0x3bbbd7){_0xf544aa=_0xf544aa||function(_0x464df){return _0x464df;};const _0x4e2e44=_0xf544aa(new RegExp('(?:^|;\x20)'+_0x3bbbd7['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x1c05b1=function(_0x2210cf,_0x90d9c9){_0x2210cf(++_0x90d9c9);};_0x1c05b1(_0x2f96ef,_0x33cb85);return _0x4e2e44?decodeURIComponent(_0x4e2e44[0x1]):undefined;}};const _0x6ff590=function(){const _0x2099c3=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x2099c3['test'](_0x1ceb7c['removeCookie']['toString']());};_0x1ceb7c['updateCookie']=_0x6ff590;let _0x32e6d4='';const _0x5dd17a=_0x1ceb7c['updateCookie']();if(!_0x5dd17a){_0x1ceb7c['setCookie'](['*'],'counter',0x1);}else if(_0x5dd17a){_0x32e6d4=_0x1ceb7c['getCookie'](null,'counter');}else{_0x1ceb7c['removeCookie']();}};_0x47438a();}(a81_0x33cb,0x199));const a81_0x2f96=function(_0x498068,_0x33cb85){_0x498068=_0x498068-0x0;let _0x2f96ef=a81_0x33cb[_0x498068];return _0x2f96ef;};const a81_0x1ceb7c=function(){let _0x225896=!![];return function(_0x482d11,_0x17ea28){const _0x16ffc1=_0x225896?function(){if(_0x17ea28){const _0x2d4de8=_0x17ea28[a81_0x2f96('0x14')](_0x482d11,arguments);_0x17ea28=null;return _0x2d4de8;}}:function(){};_0x225896=![];return _0x16ffc1;};}();const a81_0x136d12=a81_0x1ceb7c(this,function(){const _0x344cf7=function(){const _0x52094f=_0x344cf7[a81_0x2f96('0x10')](a81_0x2f96('0x15'))()[a81_0x2f96('0x21')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x52094f[a81_0x2f96('0x12')](a81_0x136d12);};return _0x344cf7();});a81_0x136d12();'use strict';const tesseract_1=require('@bastion/tesseract');const errors=require(a81_0x2f96('0x16'));module[a81_0x2f96('0x18')]=class Unban extends tesseract_1[a81_0x2f96('0x3')]{constructor(){super('unban',{'description':a81_0x2f96('0x17'),'triggers':[],'arguments':{'alias':{'user':'u'},'string':[a81_0x2f96('0xe')]},'scope':a81_0x2f96('0x1e'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':['BAN_MEMBERS'],'userPermissions':[a81_0x2f96('0x1c')],'syntax':[a81_0x2f96('0x13')]});this[a81_0x2f96('0x19')]=async(_0x923f67,_0x5b1db8)=>{const _0x1f28ad=this[a81_0x2f96('0x1a')][a81_0x2f96('0x1f')][a81_0x2f96('0x2')](_0x5b1db8[a81_0x2f96('0xe')]);if(!_0x1f28ad)throw new errors['DiscordError'](errors[a81_0x2f96('0xd')][a81_0x2f96('0x1d')],this[a81_0x2f96('0x6')]);const _0x3cbb31=_0x5b1db8['_']['join']('\x20')||'-';await _0x923f67[a81_0x2f96('0x1e')][a81_0x2f96('0x5')]['unban'](_0x1f28ad,_0x3cbb31);await _0x923f67[a81_0x2f96('0xa')][a81_0x2f96('0x9')]({'embed':{'color':tesseract_1[a81_0x2f96('0x0')][a81_0x2f96('0x7')]['ORANGE'],'description':this[a81_0x2f96('0x1a')][a81_0x2f96('0xc')][a81_0x2f96('0xf')](_0x923f67['guild'][a81_0x2f96('0x20')][a81_0x2f96('0x8')],a81_0x2f96('0xb'),'guildBanRemove',_0x923f67[a81_0x2f96('0x11')][a81_0x2f96('0x1b')],_0x1f28ad['tag']),'fields':[{'name':a81_0x2f96('0x1'),'value':_0x3cbb31}],'footer':{'text':_0x1f28ad['id']}}})[a81_0x2f96('0x4')](()=>{});};}};