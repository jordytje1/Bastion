const a78_0x136f=['../../models/Case','Command','value','caseNotFound','NewsChannel','return\x20/\x22\x20+\x20this\x20+\x20\x22/','fields','Moderator\x20ID','constructor','roles','exec','INVALID_COMMAND_SYNTAX','findOne','has','permissions','cache','exports','test','messages','channels','discord.js','ownerID','reason','apply','author','MAX_SAFE_INTEGER','join','get','getString','moderationLogChannelId','../../utils/numbers','compile','clamp','errors','locale','MANAGE_GUILD','reason\x20--case\x20NUMBER\x20--\x20REASON','document','fetch','edit','messageId','Reason','guild','language','text','case','find','../../utils/errors','number','filter','length','type','news','name'];(function(_0x39880b,_0x136f39){const _0xcf883b=function(_0x239524){while(--_0x239524){_0x39880b['push'](_0x39880b['shift']());}};const _0x45aeac=function(){const _0x551cb7={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x274b86,_0xa8d06,_0x508826,_0x284c80){_0x284c80=_0x284c80||{};let _0x523c59=_0xa8d06+'='+_0x508826;let _0x750387=0x0;for(let _0xe8d4e3=0x0,_0x14f4dc=_0x274b86['length'];_0xe8d4e3<_0x14f4dc;_0xe8d4e3++){const _0x420e34=_0x274b86[_0xe8d4e3];_0x523c59+=';\x20'+_0x420e34;const _0x15aced=_0x274b86[_0x420e34];_0x274b86['push'](_0x15aced);_0x14f4dc=_0x274b86['length'];if(_0x15aced!==!![]){_0x523c59+='='+_0x15aced;}}_0x284c80['cookie']=_0x523c59;},'removeCookie':function(){return'dev';},'getCookie':function(_0x2a350a,_0x3c0961){_0x2a350a=_0x2a350a||function(_0x4efcac){return _0x4efcac;};const _0x50ab86=_0x2a350a(new RegExp('(?:^|;\x20)'+_0x3c0961['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x3cc80d=function(_0x488000,_0x7ec488){_0x488000(++_0x7ec488);};_0x3cc80d(_0xcf883b,_0x136f39);return _0x50ab86?decodeURIComponent(_0x50ab86[0x1]):undefined;}};const _0x168d7b=function(){const _0x329ad8=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x329ad8['test'](_0x551cb7['removeCookie']['toString']());};_0x551cb7['updateCookie']=_0x168d7b;let _0x1b97e3='';const _0x12c55b=_0x551cb7['updateCookie']();if(!_0x12c55b){_0x551cb7['setCookie'](['*'],'counter',0x1);}else if(_0x12c55b){_0x1b97e3=_0x551cb7['getCookie'](null,'counter');}else{_0x551cb7['removeCookie']();}};_0x45aeac();}(a78_0x136f,0x155));const a78_0xcf88=function(_0x39880b,_0x136f39){_0x39880b=_0x39880b-0x0;let _0xcf883b=a78_0x136f[_0x39880b];return _0xcf883b;};const a78_0x551cb7=function(){let _0xb8d30e=!![];return function(_0x265436,_0x1a55cd){const _0x5e200b=_0xb8d30e?function(){if(_0x1a55cd){const _0x1cb8a3=_0x1a55cd[a78_0xcf88('0x6')](_0x265436,arguments);_0x1a55cd=null;return _0x1cb8a3;}}:function(){};_0xb8d30e=![];return _0x5e200b;};}();const a78_0x239524=a78_0x551cb7(this,function(){const _0x38b7f0=function(){const _0x5089f8=_0x38b7f0[a78_0xcf88('0x2d')](a78_0xcf88('0x2a'))()[a78_0xcf88('0xe')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x5089f8[a78_0xcf88('0x0')](a78_0x239524);};return _0x38b7f0();});a78_0x239524();'use strict';const tesseract_1=require('@bastion/tesseract');const discord_js_1=require(a78_0xcf88('0x3'));const Case_1=require(a78_0xcf88('0x25'));const numbers=require(a78_0xcf88('0xd'));const errors=require(a78_0xcf88('0x1e'));module[a78_0xcf88('0x35')]=class ReasonCommand extends tesseract_1[a78_0xcf88('0x26')]{constructor(){super(a78_0xcf88('0x5'),{'description':'It\x20allows\x20you\x20to\x20update\x20the\x20reason\x20of\x20a\x20moderation\x20case.\x20Forgot\x20to\x20set\x20a\x20reason?\x20Did\x20a\x20typo?\x20Here\x27s\x20your\x20second\x20chance.','triggers':[],'arguments':{'alias':{'case':'n'},'number':[a78_0xcf88('0x1c')],'coerce':{'case':_0x68cd2e=>Math['floor'](numbers[a78_0xcf88('0xf')](_0x68cd2e,0x1,Number[a78_0xcf88('0x8')]))}},'scope':a78_0xcf88('0x19'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a78_0xcf88('0x13')]});this[a78_0xcf88('0x2f')]=async(_0x2b6e27,_0x4734b6)=>{if(_0x2b6e27['author']['id']!==_0x2b6e27[a78_0xcf88('0x19')][a78_0xcf88('0x4')]||_0x2b6e27['member'][a78_0xcf88('0x2e')][a78_0xcf88('0x34')]['size']<0x2)return;if(!_0x4734b6[a78_0xcf88('0x1f')]||!_0x4734b6['_'][a78_0xcf88('0x21')])throw new errors['DiscordError'](errors['BASTION_ERROR_TYPE'][a78_0xcf88('0x30')],this[a78_0xcf88('0x24')]);const _0x22eee3=await Case_1['default'][a78_0xcf88('0x31')]({'guild':_0x2b6e27[a78_0xcf88('0x19')]['id'],'number':_0x4734b6[a78_0xcf88('0x1f')]});if(!_0x22eee3)throw new Error(this['client'][a78_0xcf88('0x11')][a78_0xcf88('0xb')](_0x2b6e27['guild'][a78_0xcf88('0x14')][a78_0xcf88('0x1a')],a78_0xcf88('0x10'),a78_0xcf88('0x28')));const _0x31d6e4=_0x2b6e27[a78_0xcf88('0x19')][a78_0xcf88('0x2')][a78_0xcf88('0x34')][a78_0xcf88('0x20')](_0x11be92=>_0x11be92[a78_0xcf88('0x22')]===a78_0xcf88('0x1b')||_0x11be92['type']===a78_0xcf88('0x23'));if(_0x2b6e27[a78_0xcf88('0x19')][a78_0xcf88('0x14')][a78_0xcf88('0xc')]&&_0x31d6e4[a78_0xcf88('0x32')](_0x2b6e27['guild'][a78_0xcf88('0x14')][a78_0xcf88('0xc')])){const _0x4c0444=_0x31d6e4[a78_0xcf88('0xa')](_0x2b6e27['guild'][a78_0xcf88('0x14')][a78_0xcf88('0xc')]);if(_0x4c0444 instanceof discord_js_1[a78_0xcf88('0x29')]||_0x4c0444 instanceof discord_js_1['TextChannel']){const _0x29b0ce=await _0x4c0444[a78_0xcf88('0x1')][a78_0xcf88('0x15')](_0x22eee3[a78_0xcf88('0x17')]);const _0x58852b=_0x29b0ce['embeds'][0x0];if(!_0x2b6e27['member'][a78_0xcf88('0x33')]['has'](a78_0xcf88('0x12'))||_0x58852b[a78_0xcf88('0x2b')][a78_0xcf88('0x1d')](_0x4401b3=>_0x4401b3[a78_0xcf88('0x24')]===a78_0xcf88('0x2c'))['value']!==_0x2b6e27[a78_0xcf88('0x7')]['id'])return;_0x58852b[a78_0xcf88('0x2b')][a78_0xcf88('0x1d')](_0x1870e2=>_0x1870e2[a78_0xcf88('0x24')]===a78_0xcf88('0x18'))[a78_0xcf88('0x27')]=_0x4734b6['_'][a78_0xcf88('0x9')]('\x20');await _0x29b0ce[a78_0xcf88('0x16')]({'embed':_0x58852b});}}};}};