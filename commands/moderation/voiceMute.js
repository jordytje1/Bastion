const a83_0xd15b=['apply','MUTE_MEMBERS','locale','guild','BASTION_ERROR_TYPE','document','voice','author','channel','It\x20allows\x20you\x20to\x20voice\x20mute\x20(and\x20unmute)\x20users\x20in\x20a\x20channel.\x20Voice\x20muted\x20users\x20can\x27t\x20speak\x20in\x20the\x20voice\x20channels\x20they\x20are\x20muted.','member','catch','Command','voiceMute\x20--unset\x20--user\x20USER_ID\x20--\x20REASON','Constants','RED','user','INVALID_COMMAND_SYNTAX','language','voiceMute\x20--user\x20USER_ID\x20--\x20REASON','ORANGE','client','send','errors','exec','getString','COLORS','compile','name','../../utils/errors','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','info','memberSetVoiceMute','setMute','join','voiceMute','DiscordError','tag','@bastion/tesseract','memberUnsetVoiceMute'];(function(_0x58431c,_0xd15bda){const _0x234d41=function(_0x2b944e){while(--_0x2b944e){_0x58431c['push'](_0x58431c['shift']());}};const _0x18e9b2=function(){const _0x1faec2={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x5897fa,_0x7478aa,_0x249cc6,_0x583968){_0x583968=_0x583968||{};let _0x34e418=_0x7478aa+'='+_0x249cc6;let _0x27d019=0x0;for(let _0x5c3fd4=0x0,_0xe4949f=_0x5897fa['length'];_0x5c3fd4<_0xe4949f;_0x5c3fd4++){const _0xcad60=_0x5897fa[_0x5c3fd4];_0x34e418+=';\x20'+_0xcad60;const _0x14d3e7=_0x5897fa[_0xcad60];_0x5897fa['push'](_0x14d3e7);_0xe4949f=_0x5897fa['length'];if(_0x14d3e7!==!![]){_0x34e418+='='+_0x14d3e7;}}_0x583968['cookie']=_0x34e418;},'removeCookie':function(){return'dev';},'getCookie':function(_0x5801f1,_0x293553){_0x5801f1=_0x5801f1||function(_0x65dca){return _0x65dca;};const _0x4a7521=_0x5801f1(new RegExp('(?:^|;\x20)'+_0x293553['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x5062c5=function(_0xb4b831,_0x346d51){_0xb4b831(++_0x346d51);};_0x5062c5(_0x234d41,_0xd15bda);return _0x4a7521?decodeURIComponent(_0x4a7521[0x1]):undefined;}};const _0x525e76=function(){const _0x17a959=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x17a959['test'](_0x1faec2['removeCookie']['toString']());};_0x1faec2['updateCookie']=_0x525e76;let _0x2cc793='';const _0x5c3aef=_0x1faec2['updateCookie']();if(!_0x5c3aef){_0x1faec2['setCookie'](['*'],'counter',0x1);}else if(_0x5c3aef){_0x2cc793=_0x1faec2['getCookie'](null,'counter');}else{_0x1faec2['removeCookie']();}};_0x18e9b2();}(a83_0xd15b,0x1d7));const a83_0x234d=function(_0x58431c,_0xd15bda){_0x58431c=_0x58431c-0x0;let _0x234d41=a83_0xd15b[_0x58431c];return _0x234d41;};const a83_0x1faec2=function(){let _0xc9b813=!![];return function(_0x387a56,_0x1435d7){const _0x5107a3=_0xc9b813?function(){if(_0x1435d7){const _0x2721cf=_0x1435d7[a83_0x234d('0x9')](_0x387a56,arguments);_0x1435d7=null;return _0x2721cf;}}:function(){};_0xc9b813=![];return _0x5107a3;};}();const a83_0x2b944e=a83_0x1faec2(this,function(){const _0x3a07da=function(){const _0x50f24f=_0x3a07da['constructor']('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[a83_0x234d('0x24')](a83_0x234d('0x27'));return!_0x50f24f['test'](a83_0x2b944e);};return _0x3a07da();});a83_0x2b944e();'use strict';const tesseract_1=require(a83_0x234d('0x7'));const errors=require(a83_0x234d('0x26'));module['exports']=class VoiceMute extends tesseract_1[a83_0x234d('0x15')]{constructor(){super(a83_0x234d('0x4'),{'description':a83_0x234d('0x12'),'triggers':[],'arguments':{'configuration':{'negation-prefix':'un'},'alias':{'user':'u'},'default':{'set':!![]},'boolean':['set'],'string':[a83_0x234d('0x19')]},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':['MUTE_MEMBERS'],'userPermissions':[a83_0x234d('0xa')],'syntax':[a83_0x234d('0x1c'),a83_0x234d('0x16')]});this[a83_0x234d('0x21')]=async(_0x174472,_0x53ae3d)=>{const _0x1f589c=this['client']['resolver']['resolveGuildMember'](_0x174472[a83_0x234d('0xc')],_0x53ae3d['user']);if(!_0x1f589c)throw new errors[(a83_0x234d('0x5'))](errors[a83_0x234d('0xd')][a83_0x234d('0x1a')],this[a83_0x234d('0x25')]);if(_0x174472['author']['id']!==_0x174472[a83_0x234d('0xc')]['ownerID']&&!_0x174472[a83_0x234d('0x13')]['canManage'](_0x1f589c)){return await _0x174472[a83_0x234d('0x11')][a83_0x234d('0x1f')]({'embed':{'color':tesseract_1['Constants']['COLORS'][a83_0x234d('0x18')],'title':this[a83_0x234d('0x1e')][a83_0x234d('0xb')][a83_0x234d('0x22')](_0x174472[a83_0x234d('0xc')][a83_0x234d('0xe')]['language'],a83_0x234d('0x20'),'unauthorized'),'description':this['client']['locale'][a83_0x234d('0x22')](_0x174472[a83_0x234d('0xc')][a83_0x234d('0xe')]['language'],a83_0x234d('0x20'),'rolePosition',_0x174472[a83_0x234d('0x10')][a83_0x234d('0x6')],_0x1f589c[a83_0x234d('0x19')]['tag'])}})[a83_0x234d('0x14')](()=>{});}const _0x42e74e=_0x53ae3d['_'][a83_0x234d('0x3')]('\x20')||'-';await _0x1f589c[a83_0x234d('0xf')][a83_0x234d('0x2')](!!_0x53ae3d['set'],_0x42e74e);await _0x174472[a83_0x234d('0x11')][a83_0x234d('0x1f')]({'embed':{'color':tesseract_1[a83_0x234d('0x17')][a83_0x234d('0x23')][a83_0x234d('0x1d')],'description':_0x53ae3d['set']?this['client']['locale'][a83_0x234d('0x22')](_0x174472['guild'][a83_0x234d('0xe')][a83_0x234d('0x1b')],'info',a83_0x234d('0x1'),_0x174472[a83_0x234d('0x10')]['tag'],_0x1f589c[a83_0x234d('0x19')][a83_0x234d('0x6')]):this[a83_0x234d('0x1e')][a83_0x234d('0xb')]['getString'](_0x174472[a83_0x234d('0xc')][a83_0x234d('0xe')]['language'],a83_0x234d('0x0'),a83_0x234d('0x8'),_0x174472[a83_0x234d('0x10')][a83_0x234d('0x6')],_0x1f589c['user']['tag']),'fields':[{'name':'Reason','value':_0x42e74e}],'footer':{'text':_0x1f589c['id']}}})['catch'](()=>{});};}};