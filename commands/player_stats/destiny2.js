const a98_0x2304=['Deaths','adventuresCompleted','basic','COLORS','highestLightLevel','Team\x20Score','join','Win\x20Loss\x20Ratio','displayValue','heroicPublicEventsCompleted','return\x20/\x22\x20+\x20this\x20+\x20\x22/','exec','kills','Playtime','test','../../utils/omnic','BASTION_ERROR_TYPE','Score','teamScore','../../utils/errors','killsDeathsRatio','weaponBestType','stadia','profile','suicides','Best\x20Weapon\x20Type','\x20Adventures\x20Completed\x0a','secondsPlayed','score','keys','send','\x20Suicides','Destiny\x202\x20-\x20Player\x20Stats','psn','\x20/\x20','allTime','/playerstats/destiny2/','PLAYER_DOESNT_EXIST','\x20•\x20Powered\x20by\x20Bungie','Command','DESTINY_2','deaths','\x20Precision\x20Kills','objectivesCompleted','Highest\x20Light\x20Level','Combat\x20Rating','membership','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','KAD','precisionKills','toLowerCase','platforms','blizzard','winLossRatio','stats','assists','xbl','platform','length','allMedalsEarned','destiny2\x20USERNAME','Assists','toUTCString','makeRequest','compile','killsDeathsAssists','value','KDR','mergedAllCharacters','\x20Heroic\x20Public\x20Events\x20Completed','Total\x20Medals\x20Earned','guild','merged','steam'];(function(_0x5b87b0,_0x2304f6){const _0x5820a7=function(_0x271758){while(--_0x271758){_0x5b87b0['push'](_0x5b87b0['shift']());}};const _0x518e69=function(){const _0x3371e3={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x2dccfb,_0x41bc67,_0x1f717c,_0xc89555){_0xc89555=_0xc89555||{};let _0x5031c4=_0x41bc67+'='+_0x1f717c;let _0x4d7c31=0x0;for(let _0xedd7e2=0x0,_0x368ea7=_0x2dccfb['length'];_0xedd7e2<_0x368ea7;_0xedd7e2++){const _0x5d58d9=_0x2dccfb[_0xedd7e2];_0x5031c4+=';\x20'+_0x5d58d9;const _0x936205=_0x2dccfb[_0x5d58d9];_0x2dccfb['push'](_0x936205);_0x368ea7=_0x2dccfb['length'];if(_0x936205!==!![]){_0x5031c4+='='+_0x936205;}}_0xc89555['cookie']=_0x5031c4;},'removeCookie':function(){return'dev';},'getCookie':function(_0x518e98,_0x5a5a0c){_0x518e98=_0x518e98||function(_0x11707f){return _0x11707f;};const _0x2ab50e=_0x518e98(new RegExp('(?:^|;\x20)'+_0x5a5a0c['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x204715=function(_0x5238d2,_0xa41223){_0x5238d2(++_0xa41223);};_0x204715(_0x5820a7,_0x2304f6);return _0x2ab50e?decodeURIComponent(_0x2ab50e[0x1]):undefined;}};const _0x1bcd68=function(){const _0x57b223=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x57b223['test'](_0x3371e3['removeCookie']['toString']());};_0x3371e3['updateCookie']=_0x1bcd68;let _0x505f2a='';const _0x548e89=_0x3371e3['updateCookie']();if(!_0x548e89){_0x3371e3['setCookie'](['*'],'counter',0x1);}else if(_0x548e89){_0x505f2a=_0x3371e3['getCookie'](null,'counter');}else{_0x3371e3['removeCookie']();}};_0x518e69();}(a98_0x2304,0x1e4));const a98_0x5820=function(_0x5b87b0,_0x2304f6){_0x5b87b0=_0x5b87b0-0x0;let _0x5820a7=a98_0x2304[_0x5b87b0];return _0x5820a7;};const a98_0x3371e3=function(){let _0x20f690=!![];return function(_0x181e7c,_0xf39347){const _0x5c7bc4=_0x20f690?function(){if(_0xf39347){const _0xab6d11=_0xf39347['apply'](_0x181e7c,arguments);_0xf39347=null;return _0xab6d11;}}:function(){};_0x20f690=![];return _0x5c7bc4;};}();const a98_0x271758=a98_0x3371e3(this,function(){const _0xe700a4=function(){const _0x1be183=_0xe700a4['constructor'](a98_0x5820('0x2c'))()[a98_0x5820('0x18')](a98_0x5820('0x7'));return!_0x1be183[a98_0x5820('0x30')](a98_0x271758);};return _0xe700a4();});a98_0x271758();'use strict';const tesseract_1=require('@bastion/tesseract');const constants=require('../../utils/constants');const errors=require(a98_0x5820('0x35'));const omnic=require(a98_0x5820('0x31'));module['exports']=class Destiny2Command extends tesseract_1[a98_0x5820('0x49')]{constructor(){super('destiny2',{'description':'It\x20allows\x20you\x20to\x20see\x20the\x20stats\x20of\x20any\x20Destiny\x202\x20player\x20in\x20any\x20supported\x20platform.','triggers':[],'arguments':{'alias':{'platform':['p']},'string':[a98_0x5820('0x11')]},'scope':a98_0x5820('0x1f'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a98_0x5820('0x14'),'destiny2\x20USERNAME\x20--platform\x20PLATFORM']});this[a98_0x5820('0x2d')]=async(_0x1e7d2c,_0x4d1bc4)=>{if(!_0x4d1bc4['_']['length'])throw new errors['DiscordError'](errors[a98_0x5820('0x32')]['INVALID_COMMAND_SYNTAX'],this['name']);const _0x2206d7=_0x4d1bc4['_'][a98_0x5820('0x28')]('\x20');const _0x55b025=_0x4d1bc4['platform']&&this[a98_0x5820('0xb')]['includes'](_0x4d1bc4[a98_0x5820('0x11')]['toLowerCase']())?this[a98_0x5820('0xb')]['indexOf'](_0x4d1bc4[a98_0x5820('0x11')][a98_0x5820('0xa')]()):-0x1;const _0x2aae73=await omnic[a98_0x5820('0x17')](a98_0x5820('0x46')+_0x55b025+'/'+encodeURIComponent(_0x2206d7));const _0xa9abbe=await _0x2aae73['json']();if(!Object[a98_0x5820('0x3f')](_0xa9abbe)[a98_0x5820('0x12')])throw new Error(a98_0x5820('0x47'));await _0x1e7d2c['channel'][a98_0x5820('0x40')]({'embed':{'color':constants[a98_0x5820('0x25')][a98_0x5820('0x0')],'author':{'name':_0xa9abbe[a98_0x5820('0x6')]['displayName']},'title':a98_0x5820('0x42'),'description':'Last\x20played\x20on\x20'+new Date(_0xa9abbe[a98_0x5820('0x39')][a98_0x5820('0x39')]['data']['dateLastPlayed'])[a98_0x5820('0x16')](),'fields':[{'name':a98_0x5820('0x2f'),'value':_0xa9abbe[a98_0x5820('0xe')]['mergedAllCharacters']['merged']['allTime'][a98_0x5820('0x3d')][a98_0x5820('0x24')][a98_0x5820('0x2a')],'inline':!![]},{'name':a98_0x5820('0x4'),'value':_0xa9abbe['stats'][a98_0x5820('0x1c')]['merged']['allTime'][a98_0x5820('0x26')][a98_0x5820('0x24')][a98_0x5820('0x2a')],'inline':!![]},{'name':a98_0x5820('0x4'),'value':_0xa9abbe[a98_0x5820('0xe')][a98_0x5820('0x1c')][a98_0x5820('0x20')][a98_0x5820('0x45')][a98_0x5820('0x26')][a98_0x5820('0x24')]['displayValue'],'inline':!![]},{'name':a98_0x5820('0x5'),'value':_0xa9abbe[a98_0x5820('0xe')][a98_0x5820('0x1c')][a98_0x5820('0x20')]['allTime']['combatRating'][a98_0x5820('0x24')][a98_0x5820('0x2a')],'inline':!![]},{'name':a98_0x5820('0x33'),'value':_0xa9abbe[a98_0x5820('0xe')][a98_0x5820('0x1c')]['merged'][a98_0x5820('0x45')][a98_0x5820('0x3e')]['basic'][a98_0x5820('0x2a')],'inline':!![]},{'name':a98_0x5820('0x27'),'value':_0xa9abbe['stats'][a98_0x5820('0x1c')]['merged'][a98_0x5820('0x45')][a98_0x5820('0x34')][a98_0x5820('0x24')][a98_0x5820('0x2a')],'inline':!![]},{'name':'Kills','value':_0xa9abbe['stats'][a98_0x5820('0x1c')][a98_0x5820('0x20')]['allTime'][a98_0x5820('0x2e')][a98_0x5820('0x24')][a98_0x5820('0x2a')]+a98_0x5820('0x44')+_0xa9abbe[a98_0x5820('0xe')][a98_0x5820('0x1c')]['merged'][a98_0x5820('0x45')][a98_0x5820('0x9')]['basic'][a98_0x5820('0x2a')]+a98_0x5820('0x2'),'inline':!![]},{'name':a98_0x5820('0x15'),'value':_0xa9abbe['stats'][a98_0x5820('0x1c')]['merged'][a98_0x5820('0x45')][a98_0x5820('0xf')][a98_0x5820('0x24')][a98_0x5820('0x2a')],'inline':!![]},{'name':a98_0x5820('0x22'),'value':_0xa9abbe[a98_0x5820('0xe')][a98_0x5820('0x1c')][a98_0x5820('0x20')][a98_0x5820('0x45')][a98_0x5820('0x1')][a98_0x5820('0x24')][a98_0x5820('0x2a')]+a98_0x5820('0x44')+_0xa9abbe[a98_0x5820('0xe')][a98_0x5820('0x1c')][a98_0x5820('0x20')][a98_0x5820('0x45')][a98_0x5820('0x3a')][a98_0x5820('0x24')][a98_0x5820('0x2a')]+a98_0x5820('0x41'),'inline':!![]},{'name':a98_0x5820('0x1b'),'value':_0xa9abbe['stats']['mergedAllCharacters'][a98_0x5820('0x20')][a98_0x5820('0x45')][a98_0x5820('0x36')][a98_0x5820('0x24')][a98_0x5820('0x2a')],'inline':!![]},{'name':'KDA','value':_0xa9abbe[a98_0x5820('0xe')][a98_0x5820('0x1c')][a98_0x5820('0x20')][a98_0x5820('0x45')][a98_0x5820('0x19')][a98_0x5820('0x24')][a98_0x5820('0x2a')],'inline':!![]},{'name':a98_0x5820('0x8'),'value':((_0xa9abbe[a98_0x5820('0xe')][a98_0x5820('0x1c')][a98_0x5820('0x20')]['allTime'][a98_0x5820('0x2e')][a98_0x5820('0x24')]['value']+_0xa9abbe['stats'][a98_0x5820('0x1c')][a98_0x5820('0x20')][a98_0x5820('0x45')][a98_0x5820('0xf')][a98_0x5820('0x24')][a98_0x5820('0x1a')])/_0xa9abbe[a98_0x5820('0xe')][a98_0x5820('0x1c')][a98_0x5820('0x20')]['allTime'][a98_0x5820('0x1')][a98_0x5820('0x24')]['value'])['toFixed'](0x2),'inline':!![]},{'name':a98_0x5820('0x29'),'value':_0xa9abbe[a98_0x5820('0xe')][a98_0x5820('0x1c')][a98_0x5820('0x20')]['allTime'][a98_0x5820('0xd')]['basic'][a98_0x5820('0x2a')],'inline':!![]},{'name':a98_0x5820('0x3b'),'value':_0xa9abbe[a98_0x5820('0xe')][a98_0x5820('0x1c')][a98_0x5820('0x20')][a98_0x5820('0x45')][a98_0x5820('0x37')]['basic'][a98_0x5820('0x2a')],'inline':!![]},{'name':a98_0x5820('0x1e'),'value':_0xa9abbe[a98_0x5820('0xe')][a98_0x5820('0x1c')][a98_0x5820('0x20')][a98_0x5820('0x45')][a98_0x5820('0x13')][a98_0x5820('0x24')][a98_0x5820('0x2a')],'inline':!![]},{'name':'Extras','value':_0xa9abbe['stats'][a98_0x5820('0x1c')][a98_0x5820('0x20')][a98_0x5820('0x45')][a98_0x5820('0x3')][a98_0x5820('0x24')][a98_0x5820('0x2a')]+'\x20Objectives\x20Completed\x0a'+_0xa9abbe['stats'][a98_0x5820('0x1c')][a98_0x5820('0x20')][a98_0x5820('0x45')][a98_0x5820('0x23')][a98_0x5820('0x24')][a98_0x5820('0x2a')]+a98_0x5820('0x3c')+_0xa9abbe['stats']['mergedAllCharacters'][a98_0x5820('0x20')][a98_0x5820('0x45')][a98_0x5820('0x2b')][a98_0x5820('0x24')][a98_0x5820('0x2a')]+a98_0x5820('0x1d')}],'footer':{'text':this[a98_0x5820('0xb')][_0xa9abbe[a98_0x5820('0x6')]['membershipType']]['toUpperCase']()+a98_0x5820('0x48')}}});};this[a98_0x5820('0xb')]=[null,a98_0x5820('0x10'),a98_0x5820('0x43'),a98_0x5820('0x21'),a98_0x5820('0xc'),a98_0x5820('0x38')];}};