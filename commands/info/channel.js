const a53_0x56b2=['permissionsLocked','name','Not\x20Synced','toUTCString','test','exec','errors','guild','Members','constructor','channel\x20CHANNEL','rawPosition','Synced','toString','document','exports','resolver','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','return\x20/\x22\x20+\x20this\x20+\x20\x22/','type','topic','size','It\x20allows\x20you\x20see\x20the\x20information\x20of\x20a\x20channel.','channel','toTitleCase','Constants','client','Created','compile','Category','channelInfo','Position','\x20Channel','\x20•\x20','IRIS','catch','members','channelNotFound'];(function(_0xa32628,_0x56b2f2){const _0x4da263=function(_0x100d58){while(--_0x100d58){_0xa32628['push'](_0xa32628['shift']());}};const _0x39d0ed=function(){const _0x3a6985={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x1d3dc1,_0x47226f,_0x47540e,_0x1be523){_0x1be523=_0x1be523||{};let _0x53cf56=_0x47226f+'='+_0x47540e;let _0x5e1c41=0x0;for(let _0x71e4e8=0x0,_0x4cfbbe=_0x1d3dc1['length'];_0x71e4e8<_0x4cfbbe;_0x71e4e8++){const _0x402860=_0x1d3dc1[_0x71e4e8];_0x53cf56+=';\x20'+_0x402860;const _0x46c16a=_0x1d3dc1[_0x402860];_0x1d3dc1['push'](_0x46c16a);_0x4cfbbe=_0x1d3dc1['length'];if(_0x46c16a!==!![]){_0x53cf56+='='+_0x46c16a;}}_0x1be523['cookie']=_0x53cf56;},'removeCookie':function(){return'dev';},'getCookie':function(_0x111a9d,_0x5bd397){_0x111a9d=_0x111a9d||function(_0x18178d){return _0x18178d;};const _0x248c6f=_0x111a9d(new RegExp('(?:^|;\x20)'+_0x5bd397['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x3a43d6=function(_0x5b4f1e,_0x1ce5c6){_0x5b4f1e(++_0x1ce5c6);};_0x3a43d6(_0x4da263,_0x56b2f2);return _0x248c6f?decodeURIComponent(_0x248c6f[0x1]):undefined;}};const _0x1d56b0=function(){const _0x2b8b80=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x2b8b80['test'](_0x3a6985['removeCookie']['toString']());};_0x3a6985['updateCookie']=_0x1d56b0;let _0x559071='';const _0x389e64=_0x3a6985['updateCookie']();if(!_0x389e64){_0x3a6985['setCookie'](['*'],'counter',0x1);}else if(_0x389e64){_0x559071=_0x3a6985['getCookie'](null,'counter');}else{_0x3a6985['removeCookie']();}};_0x39d0ed();}(a53_0x56b2,0x8e));const a53_0x4da2=function(_0xa32628,_0x56b2f2){_0xa32628=_0xa32628-0x0;let _0x4da263=a53_0x56b2[_0xa32628];return _0x4da263;};const a53_0x3a6985=function(){let _0x3b4115=!![];return function(_0x528cdb,_0x369159){const _0x57374f=_0x3b4115?function(){if(_0x369159){const _0x501620=_0x369159['apply'](_0x528cdb,arguments);_0x369159=null;return _0x501620;}}:function(){};_0x3b4115=![];return _0x57374f;};}();const a53_0x100d58=a53_0x3a6985(this,function(){const _0x21575a=function(){const _0x38a360=_0x21575a[a53_0x4da2('0x13')](a53_0x4da2('0x1c'))()[a53_0x4da2('0x0')](a53_0x4da2('0x1b'));return!_0x38a360[a53_0x4da2('0xe')](a53_0x100d58);};return _0x21575a();});a53_0x100d58();'use strict';const tesseract_1=require('@bastion/tesseract');const strings=require('../../utils/strings');module[a53_0x4da2('0x19')]=class ChannelCommand extends tesseract_1['Command']{constructor(){super(a53_0x4da2('0x21'),{'description':a53_0x4da2('0x20'),'triggers':[a53_0x4da2('0x2')],'arguments':{},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a53_0x4da2('0x21'),a53_0x4da2('0x14')]});this[a53_0x4da2('0xf')]=async(_0x31ba93,_0x52f449)=>{const _0x4243ca=_0x52f449['_']['join']('\x20');let _0x35753a;if(_0x4243ca){_0x35753a=this[a53_0x4da2('0x24')][a53_0x4da2('0x1a')]['resolveGuildChannel'](_0x31ba93['guild'],_0x4243ca);}else{_0x35753a=_0x31ba93['channel'];}if(!_0x35753a)throw new Error(this[a53_0x4da2('0x24')]['locale']['getString'](_0x31ba93[a53_0x4da2('0x11')][a53_0x4da2('0x18')]['language'],a53_0x4da2('0x10'),a53_0x4da2('0x9')));_0x31ba93[a53_0x4da2('0x21')]['send']({'embed':{'color':tesseract_1[a53_0x4da2('0x23')]['COLORS'][a53_0x4da2('0x6')],'author':{'name':_0x35753a[a53_0x4da2('0xb')]},'title':strings[a53_0x4da2('0x22')](_0x35753a[a53_0x4da2('0x1d')])+a53_0x4da2('0x4'),'description':a53_0x4da2('0x1e')in _0x35753a?_0x35753a[a53_0x4da2('0x1e')]:null,'fields':[{'name':a53_0x4da2('0x3'),'value':_0x35753a[a53_0x4da2('0x15')][a53_0x4da2('0x17')](),'inline':!![]},{'name':a53_0x4da2('0x1'),'value':_0x35753a['parent']?_0x35753a['parent'][a53_0x4da2('0xb')]:'-','inline':!![]},{'name':a53_0x4da2('0x12'),'value':_0x35753a[a53_0x4da2('0x8')][a53_0x4da2('0x1f')]+'\x20Members','inline':!![]},{'name':a53_0x4da2('0x25'),'value':_0x35753a['createdAt'][a53_0x4da2('0xd')](),'inline':!![]}],'footer':{'text':(_0x35753a[a53_0x4da2('0xa')]?a53_0x4da2('0x16'):a53_0x4da2('0xc'))+a53_0x4da2('0x5')+_0x35753a['id']}}})[a53_0x4da2('0x7')](()=>{});};}};