const _0x1a4721=_0x1a09,_0x4ed74e=_0x1a09,_0x1e6a96=_0x1a09,_0x467052=_0x1a09,_0x252e12=_0x1a09;(function(_0x165acc,_0x34e55f){const _0x54eae0=_0x1a09,_0x1ccec6=_0x1a09,_0x1ec5eb=_0x1a09,_0xa0420a=_0x1a09,_0x191f73=_0x1a09,_0x5d045e=_0x165acc();while(!![]){try{const _0x5d1024=-parseInt(_0x54eae0(0x19c))/0x1*(-parseInt(_0x54eae0(0x189))/0x2)+parseInt(_0x1ccec6(0x1ba))/0x3*(-parseInt(_0x54eae0(0x1cb))/0x4)+-parseInt(_0x191f73(0x1b4))/0x5*(parseInt(_0xa0420a(0x1e1))/0x6)+-parseInt(_0x54eae0(0x195))/0x7*(-parseInt(_0x1ec5eb(0x19f))/0x8)+parseInt(_0xa0420a(0x184))/0x9*(-parseInt(_0x54eae0(0x1d3))/0xa)+parseInt(_0x1ccec6(0x19a))/0xb+parseInt(_0x1ec5eb(0x1df))/0xc*(parseInt(_0x1ccec6(0x1d4))/0xd);if(_0x5d1024===_0x34e55f)break;else _0x5d045e['push'](_0x5d045e['shift']());}catch(_0x241188){_0x5d045e['push'](_0x5d045e['shift']());}}}(_0x47ae,0x39555),require('../settings'));const fs=require('fs'),pino=require(_0x1a4721(0x1c6)),path=require(_0x1a4721(0x18e)),{Boom}=require(_0x1a4721(0x186)),NodeCache=require(_0x1a4721(0x1b8)),{exec,spawn,execSync}=require(_0x4ed74e(0x1b3)),{parsePhoneNumber}=require(_0x467052(0x191)),{default:WAConnection,useMultiFileAuthState,Browsers,DisconnectReason,makeInMemoryStore,makeCacheableSignalKeyStore,fetchLatestBaileysVersion,proto,getAggregateVotesInPollMessage}=require(_0x252e12(0x1aa)),{GroupUpdate,GroupParticipantsUpdate,MessagesUpsert,Solving}=require('./message'),client={},msgRetryCounterCache=new NodeCache(),store=makeInMemoryStore({'logger':pino()['child']({'level':_0x1e6a96(0x1a5),'stream':_0x1e6a96(0x1d2)})});function _0x1a09(_0x41bf05,_0x3960d5){const _0x47ae18=_0x47ae();return _0x1a09=function(_0x1a0982,_0x20ec6a){_0x1a0982=_0x1a0982-0x182;let _0x3e9d5c=_0x47ae18[_0x1a0982];return _0x3e9d5c;},_0x1a09(_0x41bf05,_0x3960d5);}async function JadiBot(_0x443c28,_0x42d318,_0x55ac98){async function _0x3aa364(){const _0x45d53d=_0x1a09,_0x34dd1c=_0x1a09,_0x4601c9=_0x1a09,_0x1bf4bb=_0x1a09,_0x2d359f=_0x1a09;try{const {state:_0x3e2a09,saveCreds:_0x8547e8}=await useMultiFileAuthState(_0x45d53d(0x194)+_0x42d318),{version:_0x4b7757,isLatest:_0x4577e9}=await fetchLatestBaileysVersion(),_0xd96ef0=pino({'level':_0x45d53d(0x1a5)}),_0x30a6c1=async _0x5cb58f=>{const _0x4a13d6=_0x45d53d,_0x161223=_0x45d53d,_0x5e3e93=_0x45d53d;if(store){const _0x2d909b=await store['loadMessage'](_0x5cb58f[_0x4a13d6(0x18c)],_0x5cb58f['id']);return _0x2d909b?.[_0x161223(0x182)]||'';}return{'conversation':_0x5e3e93(0x1af)};};client[_0x42d318]=WAConnection({'isLatest':_0x4577e9,'logger':_0xd96ef0,'getMessage':_0x30a6c1,'syncFullHistory':!![],'maxMsgRetryCount':0xf,'msgRetryCounterCache':msgRetryCounterCache,'retryRequestDelayMs':0xa,'defaultQueryTimeoutMs':0x0,'printQRInTerminal':![],'browser':Browsers[_0x34dd1c(0x1bf)](_0x34dd1c(0x1d6)),'transactionOpts':{'maxCommitRetries':0xa,'delayBetweenTriesMs':0xa},'appStateMacVerification':{'patch':!![],'snapshot':!![]},'auth':{'creds':_0x3e2a09[_0x2d359f(0x19d)],'keys':makeCacheableSignalKeyStore(_0x3e2a09[_0x4601c9(0x1a6)],_0xd96ef0)}});if(!client[_0x42d318][_0x1bf4bb(0x1b1)]['creds'][_0x1bf4bb(0x1c9)]){let _0x3c0056=_0x42d318[_0x34dd1c(0x1b2)](/[^0-9]/g,'');setTimeout(async()=>{const _0x2bd7a9=_0x1bf4bb,_0x5f4786=_0x34dd1c,_0x63ae46=_0x34dd1c,_0x4e9acc=_0x4601c9,_0x9cd0e7=_0x34dd1c;exec(_0x2bd7a9(0x1a8)+_0x42d318+'/*');let _0x32a93d=await client[_0x42d318][_0x5f4786(0x1b0)](_0x3c0056);_0x55ac98[_0x63ae46(0x18f)](_0x63ae46(0x18d)+(_0x32a93d?.['match'](/.{1,4}/g)?.[_0x63ae46(0x197)]('-')||_0x32a93d));},0xbb8);}return store[_0x4601c9(0x1c4)](client[_0x42d318]['ev']),await Solving(client[_0x42d318],store),client[_0x42d318]['ev']['on'](_0x34dd1c(0x1d5),_0x8547e8),client[_0x42d318]['ev']['on'](_0x4601c9(0x1cc),async _0x1d42fc=>{const _0x50e423=_0x4601c9,_0xd81e0=_0x34dd1c,_0x39f39a=_0x2d359f,_0x396efc=_0x2d359f,_0x222700=_0x2d359f,{connection:_0x414726,lastDisconnect:_0x5b0d60,receivedPendingNotifications:_0x37087f}=_0x1d42fc;if(_0x414726==='close'){const _0x152116=new Boom(_0x5b0d60?.[_0x50e423(0x1d8)])?.[_0x50e423(0x1c1)][_0x50e423(0x1bb)];if([DisconnectReason[_0x396efc(0x1c2)],DisconnectReason[_0x222700(0x1e0)],DisconnectReason[_0x396efc(0x1ac)],DisconnectReason[_0xd81e0(0x1cd)],DisconnectReason[_0x39f39a(0x193)],DisconnectReason[_0x39f39a(0x1dd)]][_0xd81e0(0x1a4)](_0x152116))JadiBot(_0x443c28,_0x42d318,_0x55ac98);else{if(_0x152116===DisconnectReason[_0x222700(0x190)])_0x55ac98[_0x50e423(0x18f)](_0x39f39a(0x1ad)),StopJadiBot(_0x443c28,_0x42d318,_0x55ac98);else _0x152116===DisconnectReason[_0x50e423(0x1ae)]?(_0x55ac98['reply'](_0x222700(0x1ca)),StopJadiBot(_0x443c28,_0x42d318,_0x55ac98)):_0x55ac98[_0x50e423(0x18f)](_0xd81e0(0x1c8));}}if(_0x414726==_0x396efc(0x1d0)){let _0x4b0e68=await client[_0x42d318][_0x222700(0x1c0)](client[_0x42d318][_0x39f39a(0x18b)]['id']);db[_0x396efc(0x1a9)][_0x4b0e68]&&!db['set'][_0x4b0e68]?.[_0xd81e0(0x197)]&&(db['set'][_0x4b0e68][_0x50e423(0x1a0)]=![],global['my']['gc'][_0x222700(0x1ab)]>0x0&&global['my']['gc'][_0xd81e0(0x1a4)](_0x396efc(0x1b9))&&await client[_0x42d318][_0x396efc(0x199)](global['my']['gc']?.[_0xd81e0(0x183)](_0x39f39a(0x1db))[0x1])[_0x222700(0x19b)](async _0x541432=>{const _0x438919=_0x50e423,_0x1f9069=_0xd81e0,_0x5bf8a5=_0x222700;await client[_0x42d318][_0x438919(0x1be)]({'archive':!![]},_0x541432,[]),db[_0x1f9069(0x1a9)][_0x4b0e68][_0x438919(0x197)]=!![];}));}_0x37087f==_0xd81e0(0x1a7)&&client[_0x42d318]['ev'][_0x50e423(0x1bc)]();}),client[_0x42d318]['ev']['on']('contacts.update',_0x43e219=>{const _0x4ef201=_0x2d359f,_0x318621=_0x2d359f,_0x130c5a=_0x45d53d,_0x1ba93d=_0x45d53d;for(let _0x1e6a99 of _0x43e219){let _0x2b853d=client[_0x42d318][_0x4ef201(0x1c0)](_0x1e6a99['id']);if(store&&store[_0x4ef201(0x1bd)])store[_0x130c5a(0x1bd)][_0x2b853d]={'id':_0x2b853d,'name':_0x1e6a99[_0x4ef201(0x192)]};}}),client[_0x42d318]['ev']['on'](_0x1bf4bb(0x1c5),async _0x1f3332=>{const _0x4ae863=_0x2d359f,_0x554f4e=_0x34dd1c,_0x205dfd=_0x34dd1c,_0x50db4b=_0x45d53d,_0x4399b8=_0x45d53d;let _0x111074=await client[_0x42d318]['decodeJid'](client[_0x42d318][_0x4ae863(0x18b)]['id']);if(db[_0x4ae863(0x1a9)][_0x111074][_0x205dfd(0x1cf)])for(let _0x5d30e6 of _0x1f3332){if(_0x5d30e6[_0x4ae863(0x1c3)]===_0x4399b8(0x1b7)){let _0x4bdadb=await client[_0x42d318][_0x4ae863(0x1dc)](_0x5d30e6['from'],{'text':_0x4ae863(0x196)+(_0x5d30e6[_0x50db4b(0x1ce)]?_0x554f4e(0x187):_0x4399b8(0x1d9))+'.\x0aJika\x20@'+_0x5d30e6['from'][_0x554f4e(0x183)]('@')[0x0]+_0x205dfd(0x1da),'mentions':[_0x5d30e6['from']]});await client[_0x42d318]['sendContact'](_0x5d30e6[_0x4ae863(0x1d7)],global[_0x554f4e(0x1b6)],_0x4bdadb),await client[_0x42d318][_0x205dfd(0x1b5)](_0x5d30e6['id'],_0x5d30e6[_0x205dfd(0x1d7)]);}}}),client[_0x42d318]['ev']['on'](_0x4601c9(0x1a2),async _0x195782=>{await GroupUpdate(client[_0x42d318],_0x195782,store);}),client[_0x42d318]['ev']['on'](_0x45d53d(0x1d1),async _0x5c3208=>{await GroupParticipantsUpdate(client[_0x42d318],_0x5c3208,store);}),client[_0x42d318]['ev']['on']('messages.upsert',async _0x2bab8c=>{await MessagesUpsert(client[_0x42d318],_0x2bab8c,store);}),client[_0x42d318];}catch(_0x465702){console['log'](_0x45d53d(0x1de),_0x465702);}}return _0x3aa364();}function _0x47ae(){const _0x24f253=['10pzMTzg','18447JuuqyC','creds.update','Chrome','from','error','Suara','\x20Memerlukan\x20Bantuan,\x20Silakan\x20Hubungi\x20Owner\x20:)','https://chat.whatsapp.com/','sendMessage','connectionReplaced','Error\x20di\x20jadibot\x20:\x20','2904FwstZi','connectionClosed','102LAcSse','message','split','3912309utPqtz','end','@hapi/boom','Video','chat','3412NHHePB','-\x20@','user','remoteJid','Your\x20Pairing\x20Code\x20:\x20','path','reply','loggedOut','awesome-phonenumber','notify','badSession','./database/jadibot/','1799dyOFoU','Saat\x20Ini,\x20Kami\x20Tidak\x20Dapat\x20Menerima\x20Panggilan\x20','join','Sukses\x20Keluar\x20Dari\x20Sessi\x20Jadi\x20bot','groupAcceptInvite','3435256wgpDOE','then','113jzYybX','creds','Stop','1352OAHQaa','original','log','groups.update','List\x20Jadi\x20Bot\x20:\x0a\x0a','includes','silent','keys','true','rm\x20-rf\x20./database/jadibot/','set','@whiskeysockets/baileys','length','restartRequired','Scan\x20again\x20and\x20Run...','Multidevicemismatch','Halo\x20Saya\x20Adalah\x20Bot','requestPairingCode','authState','replace','child_process','39995wnpnYJ','rejectCall','owner','offer','node-cache','whatsapp.com','6MRAlwT','statusCode','flush','contacts','chatModify','ubuntu','decodeJid','output','connectionLost','status','bind','call','pino','removeAllListeners','Anda\x20Sudah\x20Tidak\x20Lagi\x20Menjadi\x20Bot!','registered','Scan\x20again...','172768Bfzzgy','connection.update','timedOut','isVideo','anticall','open','group-participants.update','store'];_0x47ae=function(){return _0x24f253;};return _0x47ae();}async function StopJadiBot(_0xde869e,_0x10c545,_0x4e4bd1){const _0x3378cc=_0x4ed74e,_0x48e774=_0x4ed74e,_0x412a71=_0x252e12,_0x3f1d10=_0x1e6a96,_0x2ef92b=_0x1a4721;if(!Object[_0x3378cc(0x1a6)](client)[_0x48e774(0x1a4)](_0x10c545))return _0xde869e[_0x48e774(0x1dc)](_0x4e4bd1[_0x412a71(0x188)],{'text':'Anda\x20Tidak\x20Sedang\x20jadibot!'},{'quoted':fkontak1});try{client[_0x10c545][_0x412a71(0x185)](_0x48e774(0x19e)),client[_0x10c545]['ev'][_0x48e774(0x1c7)]();}catch(_0x29e5d4){console[_0x48e774(0x1a1)]('Errornya\x20di\x20stopjadibot\x20:\x20',_0x29e5d4);}return delete client[_0x10c545],exec(_0x48e774(0x1a8)+_0x10c545),_0x4e4bd1[_0x48e774(0x18f)](_0x412a71(0x198),{'quoted':fkontak1});}async function ListJadiBot(_0x5874e7,_0x3999f4){const _0x52f2d7=_0x252e12,_0x229482=_0x467052,_0x17c29e=_0x4ed74e,_0x407102=_0x252e12,_0x4ca0ec=_0x252e12;let _0x4894b3=_0x52f2d7(0x1a3);for(let _0x2d09dc of Object['values'](client)){_0x4894b3+=_0x229482(0x18a)+_0x5874e7[_0x17c29e(0x1c0)](_0x2d09dc[_0x229482(0x18b)]['id'])[_0x407102(0x183)]('@')[0x0]+'\x0a';}return _0x3999f4['reply'](_0x4894b3,{'quoted':fkontak1});}module['exports']={'JadiBot':JadiBot,'StopJadiBot':StopJadiBot,'ListJadiBot':ListJadiBot};