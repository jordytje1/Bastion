const a180_0x3830=['Guild','Schema','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','constructor','test','TextChannel','Giveaway','defineProperty','model','__esModule','mongoose','apply'];(function(_0x559555,_0x38305e){const _0x2f8b73=function(_0x106656){while(--_0x106656){_0x559555['push'](_0x559555['shift']());}};const _0x3a4560=function(){const _0x25ac79={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x5408d8,_0x4a94b2,_0x31e651,_0x8471e){_0x8471e=_0x8471e||{};let _0x13064f=_0x4a94b2+'='+_0x31e651;let _0x1210ac=0x0;for(let _0x3ad434=0x0,_0x8afed1=_0x5408d8['length'];_0x3ad434<_0x8afed1;_0x3ad434++){const _0x1b7741=_0x5408d8[_0x3ad434];_0x13064f+=';\x20'+_0x1b7741;const _0x1d8abd=_0x5408d8[_0x1b7741];_0x5408d8['push'](_0x1d8abd);_0x8afed1=_0x5408d8['length'];if(_0x1d8abd!==!![]){_0x13064f+='='+_0x1d8abd;}}_0x8471e['cookie']=_0x13064f;},'removeCookie':function(){return'dev';},'getCookie':function(_0x4fe18b,_0x8350f8){_0x4fe18b=_0x4fe18b||function(_0x5f44ef){return _0x5f44ef;};const _0x39c5a4=_0x4fe18b(new RegExp('(?:^|;\x20)'+_0x8350f8['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x1ec740=function(_0x40f794,_0x447639){_0x40f794(++_0x447639);};_0x1ec740(_0x2f8b73,_0x38305e);return _0x39c5a4?decodeURIComponent(_0x39c5a4[0x1]):undefined;}};const _0xbd0a04=function(){const _0x30930c=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x30930c['test'](_0x25ac79['removeCookie']['toString']());};_0x25ac79['updateCookie']=_0xbd0a04;let _0x270b38='';const _0x3d57e0=_0x25ac79['updateCookie']();if(!_0x3d57e0){_0x25ac79['setCookie'](['*'],'counter',0x1);}else if(_0x3d57e0){_0x270b38=_0x25ac79['getCookie'](null,'counter');}else{_0x25ac79['removeCookie']();}};_0x3a4560();}(a180_0x3830,0x1cb));const a180_0x2f8b=function(_0x559555,_0x38305e){_0x559555=_0x559555-0x0;let _0x2f8b73=a180_0x3830[_0x559555];return _0x2f8b73;};const a180_0x25ac79=function(){let _0x1ec740=!![];return function(_0x5f44ef,_0x40f794){const _0x447639=_0x1ec740?function(){if(_0x40f794){const _0x30930c=_0x40f794[a180_0x2f8b('0x8')](_0x5f44ef,arguments);_0x40f794=null;return _0x30930c;}}:function(){};_0x1ec740=![];return _0x447639;};}();const a180_0x106656=a180_0x25ac79(this,function(){const _0x2af131=function(){const _0x2ff748=_0x2af131[a180_0x2f8b('0x0')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()['compile'](a180_0x2f8b('0xb'));return!_0x2ff748[a180_0x2f8b('0x1')](a180_0x106656);};return _0x2af131();});a180_0x106656();'use strict';Object[a180_0x2f8b('0x4')](exports,a180_0x2f8b('0x6'),{'value':!![]});const mongoose=require(a180_0x2f8b('0x7'));const giveawaySchema=new mongoose[(a180_0x2f8b('0xa'))]({'_id':{'type':String,'required':!![]},'channel':{'type':String,'required':!![],'ref':a180_0x2f8b('0x2')},'guild':{'type':String,'required':!![],'ref':a180_0x2f8b('0x9')},'winners':{'type':Number},'ends':{'type':Date,'required':!![],'expires':0x15180}});exports['default']=mongoose[a180_0x2f8b('0x5')](a180_0x2f8b('0x3'),giveawaySchema);