const a86_0x16c2=['compile','music','voice','catch','GREEN','musicDisabled','name','author','locale','exports','test','apply','Command','save','@bastion/tesseract','guild','musicChannelsAdd','musicChannel\x20--voice-channel\x20VOICE_CHANNEL_ID','COLORS','document','../../utils/constants','enabled','musicChannel','Constants','It\x20allows\x20you\x20to\x20set\x20(and\x20unset)\x20Bastion\x27s\x20Music\x20Channels.','RED','language','client','isPublicBastion','channel','send','errors','voiceChannel','getString','resolver'];(function(_0x4d54a2,_0x16c293){const _0x14216d=function(_0x48ca74){while(--_0x48ca74){_0x4d54a2['push'](_0x4d54a2['shift']());}};const _0x47b8d4=function(){const _0x2526ef={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x516682,_0x3e220f,_0x5c5aea,_0x3a7c31){_0x3a7c31=_0x3a7c31||{};let _0x468985=_0x3e220f+'='+_0x5c5aea;let _0x43d907=0x0;for(let _0x336564=0x0,_0x390057=_0x516682['length'];_0x336564<_0x390057;_0x336564++){const _0x1d7044=_0x516682[_0x336564];_0x468985+=';\x20'+_0x1d7044;const _0x2f828d=_0x516682[_0x1d7044];_0x516682['push'](_0x2f828d);_0x390057=_0x516682['length'];if(_0x2f828d!==!![]){_0x468985+='='+_0x2f828d;}}_0x3a7c31['cookie']=_0x468985;},'removeCookie':function(){return'dev';},'getCookie':function(_0x12a9a3,_0x325c0d){_0x12a9a3=_0x12a9a3||function(_0x47a6fd){return _0x47a6fd;};const _0x7a730b=_0x12a9a3(new RegExp('(?:^|;\x20)'+_0x325c0d['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x253ee9=function(_0x5b1593,_0xf49405){_0x5b1593(++_0xf49405);};_0x253ee9(_0x14216d,_0x16c293);return _0x7a730b?decodeURIComponent(_0x7a730b[0x1]):undefined;}};const _0x3e056c=function(){const _0x335267=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x335267['test'](_0x2526ef['removeCookie']['toString']());};_0x2526ef['updateCookie']=_0x3e056c;let _0x2295b3='';const _0x5b8bfe=_0x2526ef['updateCookie']();if(!_0x5b8bfe){_0x2526ef['setCookie'](['*'],'counter',0x1);}else if(_0x5b8bfe){_0x2295b3=_0x2526ef['getCookie'](null,'counter');}else{_0x2526ef['removeCookie']();}};_0x47b8d4();}(a86_0x16c2,0x1a9));const a86_0x1421=function(_0x4d54a2,_0x16c293){_0x4d54a2=_0x4d54a2-0x0;let _0x14216d=a86_0x16c2[_0x4d54a2];return _0x14216d;};const a86_0x2526ef=function(){let _0x35ac43=!![];return function(_0x58b128,_0x40b895){const _0x1d3580=_0x35ac43?function(){if(_0x40b895){const _0x2265b7=_0x40b895[a86_0x1421('0x6')](_0x58b128,arguments);_0x40b895=null;return _0x2265b7;}}:function(){};_0x35ac43=![];return _0x1d3580;};}();const a86_0x48ca74=a86_0x2526ef(this,function(){const _0x1238c1=function(){const _0xc1035e=_0x1238c1['constructor']('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[a86_0x1421('0x1e')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0xc1035e[a86_0x1421('0x5')](a86_0x48ca74);};return _0x1238c1();});a86_0x48ca74();'use strict';const tesseract_1=require(a86_0x1421('0x9'));const constants=require(a86_0x1421('0xf'));module[a86_0x1421('0x4')]=class MusicChannel extends tesseract_1[a86_0x1421('0x7')]{constructor(){super(a86_0x1421('0x11'),{'description':a86_0x1421('0x13'),'triggers':[],'arguments':{'string':[a86_0x1421('0x1b')]},'scope':a86_0x1421('0xa'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a86_0x1421('0xc'),a86_0x1421('0x11')]});this['exec']=async(_0x4772e7,_0x5eb7a3)=>{const _0x4a527f=_0x4772e7['guild'];if(!_0x4a527f[a86_0x1421('0xe')][a86_0x1421('0x1f')]||!_0x4a527f[a86_0x1421('0xe')][a86_0x1421('0x1f')][a86_0x1421('0x10')]){return await _0x4772e7[a86_0x1421('0x18')][a86_0x1421('0x19')]({'embed':{'color':tesseract_1['Constants'][a86_0x1421('0xd')][a86_0x1421('0x14')],'description':this['client']['locale'][a86_0x1421('0x1c')](_0x4772e7['guild'][a86_0x1421('0xe')][a86_0x1421('0x15')],a86_0x1421('0x1a'),constants[a86_0x1421('0x17')](_0x4772e7[a86_0x1421('0x2')])?'musicDisabledPublic':a86_0x1421('0x0'))}})['catch'](()=>{});}const _0x49a948=this[a86_0x1421('0x16')][a86_0x1421('0x1d')]['resolveGuildChannel'](_0x4a527f,_0x5eb7a3[a86_0x1421('0x1b')],[a86_0x1421('0x20')]);_0x4a527f['document'][a86_0x1421('0x1f')]={..._0x4a527f[a86_0x1421('0xe')][a86_0x1421('0x1f')],'textChannelId':_0x49a948?_0x4772e7['channel']['id']:undefined,'voiceChannelId':_0x49a948?_0x49a948['id']:undefined};_0x4a527f[a86_0x1421('0xe')][a86_0x1421('0x8')]();await _0x4772e7['channel'][a86_0x1421('0x19')]({'embed':{'color':_0x49a948?tesseract_1['Constants']['COLORS'][a86_0x1421('0x22')]:tesseract_1[a86_0x1421('0x12')]['COLORS'][a86_0x1421('0x14')],'description':this[a86_0x1421('0x16')][a86_0x1421('0x3')]['getString'](_0x4772e7[a86_0x1421('0xa')][a86_0x1421('0xe')][a86_0x1421('0x15')],'info',_0x49a948?a86_0x1421('0xb'):'musicChannelsRemove',_0x4772e7['author']['tag'],_0x49a948?_0x4772e7[a86_0x1421('0x18')][a86_0x1421('0x1')]:null,_0x49a948?_0x49a948['name']:null)}})[a86_0x1421('0x21')](()=>{});};}};