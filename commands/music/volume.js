const a95_0x1762=['Constants','tag','language','@bastion/tesseract','name','author','length','setVolume','document','Command','exports','queue','volume','getString','PINK','exec','connection','COLORS','test','return\x20/\x22\x20+\x20this\x20+\x20\x22/','constructor','voice','textChannel','playing','send','apply','It\x20allows\x20you\x20to\x20set\x20the\x20volume\x20of\x20the\x20music\x20track\x20that\x20is\x20currently\x20being\x20played\x20in\x20the\x20server.','DiscordError','INVALID_COMMAND_SYNTAX','isMusicMaster','locale','compile','dispatcher','volume\x2042','channel','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','catch','member','musicDisabled','isPublicBastion','musicDisabledPublic','\x20•\x20','paused','../../utils/errors','track','client','guild','info','isInteger','music'];(function(_0x4c0e57,_0x17623f){const _0x17cb3e=function(_0x34947c){while(--_0x34947c){_0x4c0e57['push'](_0x4c0e57['shift']());}};const _0x3429f3=function(){const _0x319ab2={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x37c1f2,_0x13984d,_0x3b14c9,_0x1f7f53){_0x1f7f53=_0x1f7f53||{};let _0x339ae7=_0x13984d+'='+_0x3b14c9;let _0x4cd70c=0x0;for(let _0x1e57ca=0x0,_0x3d1657=_0x37c1f2['length'];_0x1e57ca<_0x3d1657;_0x1e57ca++){const _0xf8c85e=_0x37c1f2[_0x1e57ca];_0x339ae7+=';\x20'+_0xf8c85e;const _0x32abd5=_0x37c1f2[_0xf8c85e];_0x37c1f2['push'](_0x32abd5);_0x3d1657=_0x37c1f2['length'];if(_0x32abd5!==!![]){_0x339ae7+='='+_0x32abd5;}}_0x1f7f53['cookie']=_0x339ae7;},'removeCookie':function(){return'dev';},'getCookie':function(_0x329a53,_0x428dbb){_0x329a53=_0x329a53||function(_0x487f99){return _0x487f99;};const _0x13f42a=_0x329a53(new RegExp('(?:^|;\x20)'+_0x428dbb['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x29e5fa=function(_0x2fac02,_0x316818){_0x2fac02(++_0x316818);};_0x29e5fa(_0x17cb3e,_0x17623f);return _0x13f42a?decodeURIComponent(_0x13f42a[0x1]):undefined;}};const _0x54b17b=function(){const _0xbfcd1e=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0xbfcd1e['test'](_0x319ab2['removeCookie']['toString']());};_0x319ab2['updateCookie']=_0x54b17b;let _0x315dcf='';const _0x242786=_0x319ab2['updateCookie']();if(!_0x242786){_0x319ab2['setCookie'](['*'],'counter',0x1);}else if(_0x242786){_0x315dcf=_0x319ab2['getCookie'](null,'counter');}else{_0x319ab2['removeCookie']();}};_0x3429f3();}(a95_0x1762,0x1a3));const a95_0x17cb=function(_0x4c0e57,_0x17623f){_0x4c0e57=_0x4c0e57-0x0;let _0x17cb3e=a95_0x1762[_0x4c0e57];return _0x17cb3e;};const a95_0x319ab2=function(){let _0x23b571=!![];return function(_0x14ef31,_0x1149b1){const _0x5f4969=_0x23b571?function(){if(_0x1149b1){const _0x1aeb9d=_0x1149b1[a95_0x17cb('0x6')](_0x14ef31,arguments);_0x1149b1=null;return _0x1aeb9d;}}:function(){};_0x23b571=![];return _0x5f4969;};}();const a95_0x34947c=a95_0x319ab2(this,function(){const _0x4277e1=function(){const _0x55d589=_0x4277e1[a95_0x17cb('0x1')](a95_0x17cb('0x0'))()[a95_0x17cb('0xc')](a95_0x17cb('0x10'));return!_0x55d589[a95_0x17cb('0x31')](a95_0x34947c);};return _0x4277e1();});a95_0x34947c();'use strict';const tesseract_1=require(a95_0x17cb('0x22'));const constants=require('../../utils/constants');const errors=require(a95_0x17cb('0x18'));module[a95_0x17cb('0x29')]=class Volume extends tesseract_1[a95_0x17cb('0x28')]{constructor(){super(a95_0x17cb('0x2b'),{'description':a95_0x17cb('0x7'),'triggers':[],'arguments':{},'scope':a95_0x17cb('0x1b'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a95_0x17cb('0xe')]});this[a95_0x17cb('0x2e')]=async(_0x15990a,_0x878462)=>{let _0x6b5be7=Number['parseInt'](_0x878462['_'][0x0]);if(!_0x878462['_'][a95_0x17cb('0x25')]||!Number[a95_0x17cb('0x1d')](_0x6b5be7))throw new errors[(a95_0x17cb('0x8'))](errors['BASTION_ERROR_TYPE'][a95_0x17cb('0x9')],this[a95_0x17cb('0x23')]);const _0x504d08=_0x15990a['guild'];if(!_0x504d08[a95_0x17cb('0x27')][a95_0x17cb('0x1e')]||!_0x504d08[a95_0x17cb('0x27')][a95_0x17cb('0x1e')]['enabled']){return await _0x15990a[a95_0x17cb('0xf')][a95_0x17cb('0x5')]({'embed':{'color':tesseract_1[a95_0x17cb('0x1f')][a95_0x17cb('0x30')]['RED'],'description':this['client'][a95_0x17cb('0xb')][a95_0x17cb('0x2c')](_0x15990a[a95_0x17cb('0x1b')]['document'][a95_0x17cb('0x21')],'errors',constants[a95_0x17cb('0x14')](_0x15990a[a95_0x17cb('0x24')])?a95_0x17cb('0x15'):a95_0x17cb('0x13'))}})[a95_0x17cb('0x11')](()=>{});}if(!_0x15990a[a95_0x17cb('0x12')][a95_0x17cb('0xa')]())return;if(_0x504d08[a95_0x17cb('0x1e')][a95_0x17cb('0x4')]&&_0x504d08[a95_0x17cb('0x2')]&&_0x504d08['voice'][a95_0x17cb('0x2f')][a95_0x17cb('0xd')]&&!_0x504d08[a95_0x17cb('0x2')]['connection'][a95_0x17cb('0xd')][a95_0x17cb('0x17')]){_0x6b5be7=_0x6b5be7<0x1?0x1:_0x6b5be7>0xc8?0xc8:_0x6b5be7;_0x504d08[a95_0x17cb('0x2')][a95_0x17cb('0x2f')][a95_0x17cb('0xd')]['setVolume'](_0x6b5be7/0x64);const _0x13b6aa=_0x504d08[a95_0x17cb('0x1e')][a95_0x17cb('0x2a')][0x0];_0x504d08[a95_0x17cb('0x1e')][a95_0x17cb('0x3')][a95_0x17cb('0x5')]({'embed':{'color':tesseract_1[a95_0x17cb('0x1f')][a95_0x17cb('0x30')][a95_0x17cb('0x2d')],'title':'Volume','description':this[a95_0x17cb('0x1a')][a95_0x17cb('0xb')][a95_0x17cb('0x2c')](_0x15990a[a95_0x17cb('0x1b')][a95_0x17cb('0x27')][a95_0x17cb('0x21')],a95_0x17cb('0x1c'),a95_0x17cb('0x26'),_0x15990a[a95_0x17cb('0x24')][a95_0x17cb('0x20')],_0x6b5be7),'footer':{'text':_0x13b6aa[a95_0x17cb('0x19')]+a95_0x17cb('0x16')+_0x504d08[a95_0x17cb('0x2')]['connection']['channel'][a95_0x17cb('0x23')]}}})['catch'](()=>{});}};}};