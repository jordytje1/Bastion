const a28_0x3ef9=['PREFIXES','configurations','It\x20allows\x20you\x20set\x20custom\x20prefixes\x20for\x20Bastion\x20in\x20your\x20server.','locale','isPublicBastion','../../utils/constants','Constants','GOLD','LIMITS','PremiumTier','author','membershipLimitPrefix','@bastion/tesseract','join','DiscordError','channel','user','apply','PLATINUM','COLORS','LIMITED_PREMIUM_MEMBERSHIP','return\x20/\x22\x20+\x20this\x20+\x20\x22/','guildPrefixUpdate','prefixes','language','errors','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','Command','save','../../utils/omnic','length','info','exports','IRIS','constructor','premiumPrefix','fetchPremiumTier','Prefixes','client','send','document','prefix','getString','BASTION_ERROR_TYPE','catch','GREEN','guild','MANAGE_GUILD'];(function(_0x22a51c,_0x3ef9d2){const _0x538421=function(_0x407a75){while(--_0x407a75){_0x22a51c['push'](_0x22a51c['shift']());}};const _0x2fd9f6=function(){const _0x299c2a={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x307ec2,_0x57382a,_0x2375bd,_0x5db050){_0x5db050=_0x5db050||{};let _0x1189aa=_0x57382a+'='+_0x2375bd;let _0x257def=0x0;for(let _0x4e8319=0x0,_0x377385=_0x307ec2['length'];_0x4e8319<_0x377385;_0x4e8319++){const _0x17e54e=_0x307ec2[_0x4e8319];_0x1189aa+=';\x20'+_0x17e54e;const _0xe0ec6d=_0x307ec2[_0x17e54e];_0x307ec2['push'](_0xe0ec6d);_0x377385=_0x307ec2['length'];if(_0xe0ec6d!==!![]){_0x1189aa+='='+_0xe0ec6d;}}_0x5db050['cookie']=_0x1189aa;},'removeCookie':function(){return'dev';},'getCookie':function(_0x2addfb,_0x20d458){_0x2addfb=_0x2addfb||function(_0x3aefce){return _0x3aefce;};const _0x3d6d00=_0x2addfb(new RegExp('(?:^|;\x20)'+_0x20d458['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x38f4e2=function(_0x4c864b,_0x57e1ef){_0x4c864b(++_0x57e1ef);};_0x38f4e2(_0x538421,_0x3ef9d2);return _0x3d6d00?decodeURIComponent(_0x3d6d00[0x1]):undefined;}};const _0xa2cf02=function(){const _0x303ac7=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x303ac7['test'](_0x299c2a['removeCookie']['toString']());};_0x299c2a['updateCookie']=_0xa2cf02;let _0x127c36='';const _0x431642=_0x299c2a['updateCookie']();if(!_0x431642){_0x299c2a['setCookie'](['*'],'counter',0x1);}else if(_0x431642){_0x127c36=_0x299c2a['getCookie'](null,'counter');}else{_0x299c2a['removeCookie']();}};_0x2fd9f6();}(a28_0x3ef9,0xf5));const a28_0x5384=function(_0x22a51c,_0x3ef9d2){_0x22a51c=_0x22a51c-0x0;let _0x538421=a28_0x3ef9[_0x22a51c];return _0x538421;};const a28_0x299c2a=function(){let _0x103ad0=!![];return function(_0x665e0e,_0xc0a93a){const _0x20a827=_0x103ad0?function(){if(_0xc0a93a){const _0x980ee4=_0xc0a93a[a28_0x5384('0xc')](_0x665e0e,arguments);_0xc0a93a=null;return _0x980ee4;}}:function(){};_0x103ad0=![];return _0x20a827;};}();const a28_0x407a75=a28_0x299c2a(this,function(){const _0x14a01d=function(){const _0x110800=_0x14a01d[a28_0x5384('0x1d')](a28_0x5384('0x10'))()['compile'](a28_0x5384('0x15'));return!_0x110800['test'](a28_0x407a75);};return _0x14a01d();});a28_0x407a75();'use strict';const tesseract_1=require(a28_0x5384('0x7'));const constants=require(a28_0x5384('0x0'));const errors=require('../../utils/errors');const omnic=require(a28_0x5384('0x18'));module[a28_0x5384('0x1b')]=class Prefix extends tesseract_1[a28_0x5384('0x16')]{constructor(){super(a28_0x5384('0x24'),{'description':a28_0x5384('0x2d'),'triggers':[],'arguments':{},'scope':a28_0x5384('0x29'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[a28_0x5384('0x2a')],'syntax':[a28_0x5384('0x24'),'prefix\x20--\x20PREFIX']});this['exec']=async(_0x13f7a0,_0x49e58e)=>{const _0x4a71c4=_0x13f7a0[a28_0x5384('0x29')];if(_0x49e58e['_'][a28_0x5384('0x19')]){if(_0x49e58e['_'][a28_0x5384('0x19')]>constants[a28_0x5384('0x3')][a28_0x5384('0x2b')]&&constants[a28_0x5384('0x2f')](this[a28_0x5384('0x21')][a28_0x5384('0xb')])){const _0xf5ee60=await omnic[a28_0x5384('0x1f')](_0x13f7a0['guild'])[a28_0x5384('0x27')](()=>{});if(_0xf5ee60){if(_0xf5ee60===omnic[a28_0x5384('0x4')][a28_0x5384('0x2')]&&_0x49e58e['_'][a28_0x5384('0x19')]>constants['LIMITS'][a28_0x5384('0x2')][a28_0x5384('0x2b')]){throw new errors[(a28_0x5384('0x9'))](errors['BASTION_ERROR_TYPE'][a28_0x5384('0xf')],this[a28_0x5384('0x21')][a28_0x5384('0x2e')]['getString'](_0x13f7a0[a28_0x5384('0x29')][a28_0x5384('0x23')][a28_0x5384('0x13')],a28_0x5384('0x14'),a28_0x5384('0x6'),constants[a28_0x5384('0x3')][a28_0x5384('0x2')][a28_0x5384('0x2b')]));}else if(_0xf5ee60===omnic[a28_0x5384('0x4')][a28_0x5384('0xd')]&&_0x49e58e['_']['length']>constants['LIMITS']['PLATINUM'][a28_0x5384('0x2b')]){throw new errors[(a28_0x5384('0x9'))](errors[a28_0x5384('0x26')][a28_0x5384('0xf')],this[a28_0x5384('0x21')]['locale'][a28_0x5384('0x25')](_0x13f7a0[a28_0x5384('0x29')][a28_0x5384('0x23')][a28_0x5384('0x13')],a28_0x5384('0x14'),a28_0x5384('0x6'),constants[a28_0x5384('0x3')][a28_0x5384('0xd')][a28_0x5384('0x2b')]));}}else{throw new errors[(a28_0x5384('0x9'))](errors[a28_0x5384('0x26')]['PREMIUM_MEMBERSHIP_REQUIRED'],this[a28_0x5384('0x21')][a28_0x5384('0x2e')][a28_0x5384('0x25')](_0x13f7a0[a28_0x5384('0x29')]['document']['language'],a28_0x5384('0x14'),a28_0x5384('0x1e'),constants['LIMITS'][a28_0x5384('0x2b')]));}}_0x4a71c4[a28_0x5384('0x23')]['prefixes']=_0x49e58e['_'];await _0x4a71c4['document'][a28_0x5384('0x17')]();return await _0x13f7a0['channel'][a28_0x5384('0x22')]({'embed':{'color':tesseract_1[a28_0x5384('0x1')][a28_0x5384('0xe')][a28_0x5384('0x28')],'description':this[a28_0x5384('0x21')][a28_0x5384('0x2e')][a28_0x5384('0x25')](_0x13f7a0[a28_0x5384('0x29')][a28_0x5384('0x23')][a28_0x5384('0x13')],a28_0x5384('0x1a'),a28_0x5384('0x11'),_0x13f7a0[a28_0x5384('0x5')]['tag'],_0x4a71c4[a28_0x5384('0x23')][a28_0x5384('0x12')][a28_0x5384('0x8')]('\x20\x20'))}})[a28_0x5384('0x27')](()=>{});}const _0x2ddc5d=this[a28_0x5384('0x21')][a28_0x5384('0x2c')][a28_0x5384('0x12')]['concat'](_0x4a71c4[a28_0x5384('0x23')][a28_0x5384('0x12')]);await _0x13f7a0[a28_0x5384('0xa')]['send']({'embed':{'color':tesseract_1['Constants'][a28_0x5384('0xe')][a28_0x5384('0x1c')],'description':this['client'][a28_0x5384('0x2e')][a28_0x5384('0x25')](_0x13f7a0['guild'][a28_0x5384('0x23')][a28_0x5384('0x13')],a28_0x5384('0x1a'),'guildPrefixes'),'fields':[{'name':a28_0x5384('0x20'),'value':_0x2ddc5d[a28_0x5384('0x8')]('\x20\x20')}]}})['catch'](()=>{});};}};