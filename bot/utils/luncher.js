const a0_0xbf507e=a0_0x87ec;(function(_0x477469,_0x42f776){const _0x3876e1=a0_0x87ec,_0x478ee1=_0x477469();while(!![]){try{const _0x128221=-parseInt(_0x3876e1(0x1c2))/0x1*(-parseInt(_0x3876e1(0x1e1))/0x2)+-parseInt(_0x3876e1(0x1ae))/0x3+parseInt(_0x3876e1(0x1cf))/0x4+parseInt(_0x3876e1(0x1f0))/0x5*(-parseInt(_0x3876e1(0x1e8))/0x6)+-parseInt(_0x3876e1(0x1b4))/0x7*(parseInt(_0x3876e1(0x1e7))/0x8)+parseInt(_0x3876e1(0x1d9))/0x9+parseInt(_0x3876e1(0x1f3))/0xa*(parseInt(_0x3876e1(0x1ce))/0xb);if(_0x128221===_0x42f776)break;else _0x478ee1['push'](_0x478ee1['shift']());}catch(_0x5de50d){_0x478ee1['push'](_0x478ee1['shift']());}}}(a0_0x1fcc,0x75ffc));function a0_0x87ec(_0x4c139,_0x527529){const _0x1fcc16=a0_0x1fcc();return a0_0x87ec=function(_0x87ec5a,_0x45ade0){_0x87ec5a=_0x87ec5a-0x1ad;let _0xe2aba4=_0x1fcc16[_0x87ec5a];return _0xe2aba4;},a0_0x87ec(_0x4c139,_0x527529);}const register=require('../core/register'),logger=require(a0_0xbf507e(0x1b2)),{select}=require(a0_0xbf507e(0x1da)),fs=require('fs'),path=require(a0_0xbf507e(0x1eb)),settings=require(a0_0xbf507e(0x1c7)),proxies=require('../config/proxies'),{program,Option}=require(a0_0xbf507e(0x1d6)),{TelegramClient}=require('telegram'),Tapper=require(a0_0xbf507e(0x1b1)),{StringSession}=require(a0_0xbf507e(0x1f5)),logger2=require(a0_0xbf507e(0x1ed)),os=require('os'),sleep=require(a0_0xbf507e(0x1c5)),_=require('lodash');class Luncher{#start_text;constructor(){this.#start_text='\x0a╔═╗╔═╗\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20╔═══╗\x20\x20╔══╗\x20\x20\x20\x20\x20\x20╔╗\x20\x0a║║╚╝║║\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20║╔══╝\x20\x20║╔╗║\x20\x20\x20\x20\x20╔╝╚╗\x0a║╔╗╔╗║╔══╗╔╗╔╗╔══╗\x20║╚══╗╔╗║╚╝╚╗╔══╗╚╗╔╝\x0a║║║║║║║╔╗║║╚╝║║╔╗║\x20║╔══╝╠╣║╔═╗║║╔╗║\x20║║\x20\x0a║║║║║║║║═╣║║║║║║═╣╔╝╚╗\x20\x20║║║╚═╝║║╚╝║\x20║╚╗\x0a╚╝╚╝╚╝╚══╝╚╩╩╝╚══╝╚══╝\x20\x20╚╝╚═══╝╚══╝\x20╚═╝\x0a\x0a©\x20Freddy\x20Bots\x20\x20\x20\x0a\x0a';}#printStartText(){const _0x224bc7=a0_0xbf507e;logger[_0x224bc7(0x1c0)](_0x224bc7(0x1e4)+this.#get_sessions()[_0x224bc7(0x1f2)]+_0x224bc7(0x1b9)+(this.#get_proxies()&&Array[_0x224bc7(0x1ba)](this.#get_proxies())?this.#get_proxies()[_0x224bc7(0x1f2)]:0x0)+'</pi>\x20proxies'),logger['paragraph']('<ye><u><b>WARNING</b></u></ye>\x20<br\x20/>\x0a<b><bl>en:</bl></b>\x20NOT\x20FOR\x20SALE\x0a<b><bl>ru:</bl></b>\x20НЕ\x20ДЛЯ\x20ПРОДАЖИ\x0a<b><bl>es:</bl></b>\x20NO\x20VENTA\x0a<b><bl>fr:</bl></b>\x20PAS\x20À\x20VENDRE\x0a<b><bl>it:</bl></b>\x20NON\x20PER\x20VENDITA\x0a<b><bl>gh:</bl></b>\x20YƐN\x20TƆN\x0a\x0a<b>For\x20updates\x20and\x20more\x20bots\x20join\x20us:</b>\x20\x0a<la>https://t.me/freddy_bots</la>\x0a'),console[_0x224bc7(0x1b7)](this.#start_text);}async[a0_0xbf507e(0x1e9)](){const _0xcb1a9c=a0_0xbf507e;let _0x3e96ba;program['addOption'](new Option(_0xcb1a9c(0x1e6),'Action\x20type')[_0xcb1a9c(0x1de)](['1','2']))[_0xcb1a9c(0x1af)](!![]),program[_0xcb1a9c(0x1cd)]();const _0x5b7d40=program[_0xcb1a9c(0x1bd)]();_0x3e96ba=_0x5b7d40?parseInt(_0x5b7d40[_0xcb1a9c(0x1ef)]):null;if(!_0x3e96ba){this.#printStartText();let _0x660b73='';while(!![]){_0x660b73=await select({'message':_0xcb1a9c(0x1d3),'choices':[{'name':_0xcb1a9c(0x1d4),'value':'1','description':'\x0aCreate\x20a\x20new\x20session\x20for\x20the\x20bot'},{'name':_0xcb1a9c(0x1be),'value':'2','description':'\x0aStart\x20the\x20bot'}]});if(!_0x660b73[_0xcb1a9c(0x1ec)]()[_0xcb1a9c(0x1c3)](/^[1-2]$/))logger['warning'](_0xcb1a9c(0x1d7));else break;}_0x3e96ba=parseInt(_0x660b73[_0xcb1a9c(0x1ec)]());}if(_0x3e96ba===0x1)register[_0xcb1a9c(0x1ad)]();else{if(_0x3e96ba===0x2){const _0x221509=await this.#get_tg_clients();await this.#run_tasks(_0x221509);}}}async #get_tg_clients(){const _0x1de4ab=a0_0xbf507e,_0x2d763a=this.#get_sessions(),_0x2bc988=_0x2d763a[_0x1de4ab(0x1c8)](_0x498f54=>{const _0x31a211=_0x1de4ab;try{const _0x459678=fs[_0x31a211(0x1b5)](path[_0x31a211(0x1ca)](process[_0x31a211(0x1ee)](),_0x31a211(0x1c1),_0x498f54+_0x31a211(0x1df)),'utf8');if(!_0x459678){logger[_0x31a211(0x1c4)](_0x31a211(0x1e5)+_0x498f54+'</b></la>\x20|\x20Session\x20is\x20empty\x20or\x20expired.\x20Create\x20a\x20new\x20one.');return;}const _0x53ec85=JSON[_0x31a211(0x1cd)](_0x459678);(!settings[_0x31a211(0x1b8)]||!settings[_0x31a211(0x1db)])&&(logger[_0x31a211(0x1c4)]('API_ID\x20and\x20API_HASH\x20must\x20be\x20provided.'),process[_0x31a211(0x1cc)](0x1));(!_0x53ec85[_0x31a211(0x1f4)]||!_0x53ec85[_0x31a211(0x1f6)]||!_0x53ec85[_0x31a211(0x1bc)])&&(logger['error']('<la><b>'+_0x498f54+_0x31a211(0x1d1)),process[_0x31a211(0x1cc)](0x1));!/^\d+$/[_0x31a211(0x1dd)](_0x53ec85[_0x31a211(0x1f6)])&&(logger[_0x31a211(0x1c4)](_0x31a211(0x1e5)+_0x498f54+_0x31a211(0x1d1)),process[_0x31a211(0x1cc)](0x1));const _0x314a2e=new StringSession(_0x53ec85['sessionString']),_0xe7d2f9=new TelegramClient(_0x314a2e,_0x53ec85[_0x31a211(0x1f6)],_0x53ec85[_0x31a211(0x1bc)],{'connectionRetries':0x5,'deviceModel':_0x31a211(0x1d8)+os[_0x31a211(0x1ea)](),'appVersion':_0x31a211(0x1e3),'systemVersion':_0x31a211(0x1e3),'langCode':'en','baseLogger':logger2});return{'tg_client':_0xe7d2f9,'session_name':_0x498f54};}catch(_0x2d35e4){logger['error']('<la><b>'+_0x498f54+'</b></la>\x20|\x20Error:\x20'+_0x2d35e4[_0x31a211(0x1c9)]);}});return _0x2bc988;}#get_sessions(){const _0x4252d7=a0_0xbf507e,_0x5672b7=path[_0x4252d7(0x1ca)](process[_0x4252d7(0x1ee)](),_0x4252d7(0x1c1));if(!fs[_0x4252d7(0x1b0)](_0x5672b7))return[];const _0x4cb2f4=fs[_0x4252d7(0x1cb)](_0x5672b7)[_0x4252d7(0x1c8)](_0x10d69d=>{const _0x4fcef3=_0x4252d7,_0x5862db=_0x10d69d[_0x4fcef3(0x1b6)](_0x4fcef3(0x1df))?_0x10d69d[_0x4fcef3(0x1e2)]('.')[0x0]:null;return _0x5862db;});return _0x4cb2f4;}#get_proxies(){const _0x49401b=a0_0xbf507e;if(!settings[_0x49401b(0x1f1)])return null;return proxies;}async #run_tasks(_0x3e8cdc){const _0x177fee=a0_0xbf507e,_0x5c532d=this.#get_proxies();let _0x278854=_0x5c532d?_0x5c532d[Symbol[_0x177fee(0x1bb)]]():null;const _0x3b1fdd=_0x3e8cdc[_0x177fee(0x1c8)](async(_0x18a18e,_0xbd79ea)=>{const _0xdbc5f4=_0x177fee,_0x104b7e=_0x278854?_0x278854[_0xdbc5f4(0x1dc)]()[_0xdbc5f4(0x1d0)]:null;try{const _0x17663f=sleep[_0xdbc5f4(0x1bf)](_0x3e8cdc[_0xdbc5f4(0x1f2)]+0x1)[_0xbd79ea];logger['info'](_0xdbc5f4(0x1b3)+_0x18a18e[_0xdbc5f4(0x1d2)]+_0xdbc5f4(0x1e0)+_0x17663f+_0xdbc5f4(0x1c6)),await sleep(_0x17663f),await new Tapper(_0x18a18e)['run'](_0x104b7e,_0xbd79ea);}catch(_0x3cb190){logger[_0xdbc5f4(0x1c4)]('Error\x20in\x20task\x20for\x20tg_client:\x20'+_0x3cb190[_0xdbc5f4(0x1c9)]);}});await Promise['all'](_0x3b1fdd);}}function a0_0x1fcc(){const _0x193cbb=['process','type','path','trim','./TldLogger','cwd','action','5MMRxAX','USE_PROXY_FROM_FILE','length','3023070QhGOFk','sessionString','telegram/sessions','apiId','start','713814bsKiXX','showHelpAfterError','existsSync','../core/tapper','./logger','<ye>[memefi]</ye>\x20|\x20','140dPKHln','readFileSync','endsWith','log','API_ID','</lb>\x20sessions\x20|\x20<pi>','isArray','iterator','apiHash','opts','Run\x20bot','generateDelays','info','sessions','392965xjErBV','match','error','./sleep','\x20seconds\x20before\x20starting\x20the\x20bot','../config/config','map','message','join','readdirSync','exit','parse','11TrcyPD','231820EscshN','value','</b></la>\x20|\x20Invalid\x20session\x20data.\x20Create\x20a\x20new\x20one.','session_name','What\x20would\x20you\x20like\x20to\x20do:\x0a','Create\x20session','exports','commander','Action\x20must\x20be\x201\x20or\x202','Freddy\x20Bots\x20-\x20','3231108NKoBjF','@inquirer/prompts','API_HASH','next','test','choices','.session','\x20|\x20Sleeping\x20','2LxdOlW','split','1.0.0','Detected\x20<lb>','<la><b>','--action\x20<action>','121384JfBPcT','525102sGitKL'];a0_0x1fcc=function(){return _0x193cbb;};return a0_0x1fcc();}const luncher=new Luncher();module[a0_0xbf507e(0x1d5)]=luncher;