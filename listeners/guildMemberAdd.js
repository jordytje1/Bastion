const a155_0x2a6d=['^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','createdAt','Human','forBots','@bastion/tesseract','add','default','get','channels','Member\x20ID','timeout','parse','handleAutoRoles','message','guildMemberAdd','apply','Auto\x20added\x20via\x20Auto\x20Roles','concat','Member\x20Type','has','return\x20/\x22\x20+\x20this\x20+\x20\x22/','handleGreetings','floor','../assets/greetings.json','constructor','send','../utils/embeds','filter','catch','guild','bot','Greetings!','Constants','getDocument','tag','channelId','greeting','then','delete','partial','roles','createLog','deletable','Joined\x20Discord','Listener','../models/Role','generateEmbed','user','exports','autoAssignable','find','../utils/variables','toUTCString','forUsers','_id','LISTENER_MODE'];(function(_0x1080d1,_0x2a6dfb){const _0x28eb37=function(_0x2b1de4){while(--_0x2b1de4){_0x1080d1['push'](_0x1080d1['shift']());}};const _0x1b9ecc=function(){const _0x42e917={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x345762,_0x540096,_0x2c1ec5,_0x55e24b){_0x55e24b=_0x55e24b||{};let _0x45cc24=_0x540096+'='+_0x2c1ec5;let _0xcf3816=0x0;for(let _0x19324d=0x0,_0xa0327c=_0x345762['length'];_0x19324d<_0xa0327c;_0x19324d++){const _0x38036e=_0x345762[_0x19324d];_0x45cc24+=';\x20'+_0x38036e;const _0x383c7a=_0x345762[_0x38036e];_0x345762['push'](_0x383c7a);_0xa0327c=_0x345762['length'];if(_0x383c7a!==!![]){_0x45cc24+='='+_0x383c7a;}}_0x55e24b['cookie']=_0x45cc24;},'removeCookie':function(){return'dev';},'getCookie':function(_0x412aca,_0x4b608e){_0x412aca=_0x412aca||function(_0x3d8543){return _0x3d8543;};const _0x16d2e3=_0x412aca(new RegExp('(?:^|;\x20)'+_0x4b608e['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x130981=function(_0x25e882,_0x21dacc){_0x25e882(++_0x21dacc);};_0x130981(_0x28eb37,_0x2a6dfb);return _0x16d2e3?decodeURIComponent(_0x16d2e3[0x1]):undefined;}};const _0x30aa8=function(){const _0x26bc6a=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x26bc6a['test'](_0x42e917['removeCookie']['toString']());};_0x42e917['updateCookie']=_0x30aa8;let _0x38d673='';const _0x3c58c0=_0x42e917['updateCookie']();if(!_0x3c58c0){_0x42e917['setCookie'](['*'],'counter',0x1);}else if(_0x3c58c0){_0x38d673=_0x42e917['getCookie'](null,'counter');}else{_0x42e917['removeCookie']();}};_0x1b9ecc();}(a155_0x2a6d,0xa9));const a155_0x28eb=function(_0x1080d1,_0x2a6dfb){_0x1080d1=_0x1080d1-0x0;let _0x28eb37=a155_0x2a6d[_0x1080d1];return _0x28eb37;};const a155_0x42e917=function(){let _0x25bdd5=!![];return function(_0x57fb0f,_0x5baacf){const _0x1264c8=_0x25bdd5?function(){if(_0x5baacf){const _0x908c3f=_0x5baacf[a155_0x28eb('0xe')](_0x57fb0f,arguments);_0x5baacf=null;return _0x908c3f;}}:function(){};_0x25bdd5=![];return _0x1264c8;};}();const a155_0x2b1de4=a155_0x42e917(this,function(){const _0x22282e=function(){const _0x40a9ab=_0x22282e[a155_0x28eb('0x17')](a155_0x28eb('0x13'))()['compile'](a155_0x28eb('0x37'));return!_0x40a9ab['test'](a155_0x2b1de4);};return _0x22282e();});a155_0x2b1de4();'use strict';const tesseract_1=require(a155_0x28eb('0x3'));const Role_1=require(a155_0x28eb('0x2c'));const embeds=require(a155_0x28eb('0x19'));const variables=require(a155_0x28eb('0x32'));const greetings=require(a155_0x28eb('0x16'));module[a155_0x28eb('0x2f')]=class GuildMemberAddListener extends tesseract_1[a155_0x28eb('0x2b')]{constructor(){super('guildMemberAdd',{'mode':tesseract_1[a155_0x28eb('0x1f')][a155_0x28eb('0x36')]['ON']});this[a155_0x28eb('0xb')]=async(_0x3ecb2e,_0x160101)=>{const _0x1211b4=await Role_1[a155_0x28eb('0x5')][a155_0x28eb('0x31')]({'guild':_0x160101['id'],'autoAssignable':{'$exists':!![]}});const _0x4f7abf=_0x1211b4[a155_0x28eb('0x1a')](_0x5c8f66=>_0x5c8f66[a155_0x28eb('0x30')]&&_0x5c8f66['autoAssignable'][a155_0x28eb('0x2')])['map'](_0x317906=>_0x317906[a155_0x28eb('0x35')]);const _0x41572f=_0x1211b4[a155_0x28eb('0x1a')](_0x4a1b55=>_0x4a1b55[a155_0x28eb('0x30')]&&_0x4a1b55['autoAssignable'][a155_0x28eb('0x34')])['map'](_0x15919e=>_0x15919e[a155_0x28eb('0x35')]);const _0x5f2d10=_0x1211b4['filter'](_0x461f6e=>_0x461f6e[a155_0x28eb('0x30')]&&(Number(_0x461f6e[a155_0x28eb('0x30')][a155_0x28eb('0x2')])^Number(_0x461f6e[a155_0x28eb('0x30')][a155_0x28eb('0x34')]))===0x0)['map'](_0x463a71=>_0x463a71[a155_0x28eb('0x35')]);_0x3ecb2e[a155_0x28eb('0x27')][a155_0x28eb('0x4')](_0x5f2d10[a155_0x28eb('0x10')](_0x3ecb2e['user'][a155_0x28eb('0x1d')]?_0x4f7abf:_0x41572f),a155_0x28eb('0xf'));};this[a155_0x28eb('0x14')]=(_0x3dc7cc,_0x1f5459)=>{if(!_0x1f5459['greeting']||!_0x1f5459[a155_0x28eb('0x23')]['channelId'])return;if(!_0x3dc7cc['guild'][a155_0x28eb('0x7')]['cache'][a155_0x28eb('0x12')](_0x1f5459[a155_0x28eb('0x23')]['channelId']))return;const _0x5220d0=_0x3dc7cc['guild'][a155_0x28eb('0x7')]['cache'][a155_0x28eb('0x6')](_0x1f5459['greeting'][a155_0x28eb('0x22')]);const _0x3fb19d=embeds[a155_0x28eb('0x2d')](_0x1f5459[a155_0x28eb('0x23')][a155_0x28eb('0xc')]?_0x1f5459[a155_0x28eb('0x23')][a155_0x28eb('0xc')]:greetings[Math[a155_0x28eb('0x15')](Math['random']()*greetings['length'])]);_0x5220d0[a155_0x28eb('0x18')]({'embed':{...JSON[a155_0x28eb('0xa')](variables['replaceMemberVariables'](JSON['stringify'](_0x3fb19d),_0x3dc7cc)),'footer':{'text':a155_0x28eb('0x1e')}}})[a155_0x28eb('0x24')](_0x2b0718=>{if(_0x1f5459['greeting'][a155_0x28eb('0x9')]&&_0x2b0718[a155_0x28eb('0x29')]){_0x2b0718[a155_0x28eb('0x25')]({'timeout':_0x1f5459[a155_0x28eb('0x23')][a155_0x28eb('0x9')]*0xea60})[a155_0x28eb('0x1b')](()=>{});}})[a155_0x28eb('0x1b')](()=>{});};this['exec']=async _0x19112a=>{if(_0x19112a[a155_0x28eb('0x26')]){await _0x19112a['fetch']();}const _0x4efcb0=_0x19112a[a155_0x28eb('0x1c')];const _0x57e837=await _0x4efcb0[a155_0x28eb('0x20')]();this[a155_0x28eb('0x14')](_0x19112a,_0x57e837);this[a155_0x28eb('0xb')](_0x19112a,_0x4efcb0);_0x4efcb0[a155_0x28eb('0x28')]({'event':a155_0x28eb('0xd'),'fields':[{'name':'Member','value':_0x19112a['user'][a155_0x28eb('0x21')],'inline':!![]},{'name':a155_0x28eb('0x8'),'value':_0x19112a['id'],'inline':!![]},{'name':a155_0x28eb('0x11'),'value':_0x19112a[a155_0x28eb('0x2e')]['bot']?'Bot':a155_0x28eb('0x1'),'inline':!![]},{'name':a155_0x28eb('0x2a'),'value':_0x19112a[a155_0x28eb('0x2e')][a155_0x28eb('0x0')][a155_0x28eb('0x33')](),'inline':!![]}],'timestamp':_0x19112a['joinedTimestamp']});};}};