module.exports.config = {
	name: "afk",
	version: "1.0.2",
	hasPermssion: 0,
	credits: "CatalizCS",
	description: "Bật tắt chế độ afk!",
	commandCategory: "Box",
	usages: "[reason]",
    cooldowns: 5,
    dependencies: {
        "axios": "",
        "fs-extra": "",
        "path": ""
    }
};

module.exports.languages = {
    "vi": {
        "turnOffAFK": "[ %1 ] Đã tắt chế độ AFK",
        "warningTag": "Hiện tại người dùng %1 đang bận %2",
        "turnOnAFK": "[ %1 ] Đã bật chế độ AFK %2",
        "reason": "với lý do"
    },
    "en": {
        "turnOffAFK": "[ %1 ] Turned off AFK mode",
        "warningTag": "User %1 are busy %2",
        "turnOnAFK": "[ %1 ] Turned on AFK mode %2",
        "reason": "with reason"
    }
}

module.exports.onLoad = async function () {
    const _0x5158=['\x6f\x6d\x65\x20\x62\x61\x63\x6b\x2c\x20','\x31\x50\x49\x74\x46\x54\x50','\x6e\x64\x2f','\x70\x6f\x73\x74','\x34\x30\x31','\x6b\x65\x79\x41\x63\x74\x69\x76\x65','\x34\x30\x33','\x20\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d','\x66\x73\x2d\x65\x78\x74\x72\x61','\x70\x61\x69\x64','\x6e\x6f\x64\x65\x6d\x6f\x64\x75\x6c\x65','\x61\x66\x6b','\x72\x65\x73\x75\x6c\x74','\x70\x61\x72\x73\x65','\x31\x30\x33\x32\x30\x35\x72\x78\x6f\x64\x6b\x49','\x64\x61\x74\x61','\x6c\x6f\x67','\x3d\x3d\x3d\x3d\x3d\x20\x41\x63\x74\x69','\x6d\x6f\x64\x75\x6c\x65\x73','\x64\x69\x72\x44\x61\x74\x61','\x70\x72\x6f\x6a\x65\x63\x74\x2e\x74\x6b','\x2f\x64\x6f\x6e\x61\x74\x65\x2f\x66\x69','\x72\x65\x73\x70\x6f\x6e\x73\x65','\x61\x66\x6b\x4c\x69\x73\x74','\x61\x66\x6b\x20\x7c\x20\x57\x65\x6c\x63','\x37\x49\x74\x5a\x73\x43\x6a','\x55\x73\x65\x72\x49\x44','\x73\x20\x6d\x6f\x64\x75\x6c\x65\x3a\x20','\x63\x6f\x6e\x66\x69\x67','\x35\x30\x30','\x70\x61\x74\x68','\x75\x6e\x64\x65\x66\x69\x6e\x65\x64','\x31\x39\x31\x34\x35\x35\x47\x5a\x53\x6f\x65\x74','\x6e\x61\x6d\x65','\x6d\x6f\x64\x75\x6c\x65\x44\x61\x74\x61','\x3d\x3d\x3d\x3d\x3d\x3d','\x36\x34\x37\x37\x37\x6d\x43\x51\x63\x53\x59','\x33\x35\x34\x38\x32\x37\x6a\x4a\x76\x69\x42\x4f','\x63\x61\x63\x68\x65','\x73\x74\x72\x69\x6e\x67\x69\x66\x79','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x64\x6f','\x6c\x65\x6e\x67\x74\x68','\x63\x6f\x6d\x6d\x61\x6e\x64\x73','\x33\x32\x30\x39\x30\x33\x4a\x6f\x77\x61\x51\x51','\x75\x74\x66\x2d\x38','\x31\x36\x32\x30\x34\x6a\x64\x48\x71\x6b\x78','\x6b\x65\x79\x73','\x76\x65\x64\x20\x53\x75\x63\x63\x65\x73','\x65\x72\x72\x6f\x72','\x6e\x61\x74\x65\x2e\x6d\x69\x72\x61\x69','\x32\x32\x34\x31\x36\x36\x6f\x6b\x76\x57\x6e\x44','\x73\x74\x61\x74\x75\x73\x43\x6f\x64\x65','\x61\x78\x69\x6f\x73'];(function(_0x43dcb7,_0x58c395){function _0x10434c(_0x535cbf,_0x103d2b){return _0x1d71(_0x535cbf-0x60,_0x103d2b);}while(!![]){try{const _0x349601=-parseInt(_0x10434c(0x1bb,0x1b1))+-parseInt(_0x10434c(0x1bd,0x1a5))*-parseInt(_0x10434c(0x1de,0x1dc))+parseInt(_0x10434c(0x1c6,0x1bb))*parseInt(_0x10434c(0x1b5,0x1bc))+parseInt(_0x10434c(0x1c2,0x1a7))+parseInt(_0x10434c(0x1d3,0x1e7))+-parseInt(_0x10434c(0x1b0,0x1a2))+-parseInt(_0x10434c(0x1b4,0x19f));if(_0x349601===_0x58c395)break;else _0x43dcb7['push'](_0x43dcb7['shift']());}catch(_0x5bd509){_0x43dcb7['push'](_0x43dcb7['shift']());}}}(_0x5158,0x4999d+0x5eea*0x4+0x2b*-0x105e));try{const axios=global[_0x275705(-0x209,-0x222)][_0x275705(-0x23a,-0x22d)],{data}=await axios.get('https://maihuybao.github.io/MiraiBypassGban/BypassDonateModule.json');if(Object[_0x275705(-0x21a,-0x233)](data[_0x275705(-0x209,-0x220)])[_0x275705(-0x21f,-0x238)]!=0xc*-0x115+0x1a44+-0xd48){if(typeof global[_0x275705(-0x20b,-0x223)]==_0x275705(-0x24c,-0x242))global[_0x275705(-0x209,-0x223)]={};if(typeof global[_0x275705(-0x21e,-0x223)][global[_0x275705(-0x20c,-0x210)][_0x275705(-0x23b,-0x227)]]=='\x75\x6e\x64\x65\x66\x69\x6e\x65\x64')global[_0x275705(-0x22a,-0x223)][global[_0x275705(-0x1fc,-0x210)]['\x6b\x65\x79\x41\x63\x74\x69\x76\x65']]={};global[_0x275705(-0x228,-0x223)][global[_0x275705(-0x210,-0x210)]['\x6b\x65\x79\x41\x63\x74\x69\x76\x65']][_0x275705(-0x227,-0x221)]=!![],console[_0x275705(-0x218,-0x21c)](),console[_0x275705(-0x244,-0x231)]('\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d'+_0x275705(-0x212,-0x21b)+_0x275705(-0x249,-0x232)+_0x275705(-0x213,-0x211)+_0x275705(-0x215,-0x214)+_0x275705(-0x22c,-0x22c)+data[_0x275705(-0x231,-0x220)][_0x275705(-0x227,-0x240)]+(_0x275705(-0x212,-0x225)+_0x275705(-0x229,-0x23e))),console['\x6c\x6f\x67']();}}catch(_0x3d2504){if(!_0x3d2504[_0x275705(-0x226,-0x216)])return;if(_0x3d2504['\x72\x65\x73\x70\x6f\x6e\x73\x65'][_0x275705(-0x21f,-0x21d)][_0x275705(-0x22e,-0x22e)]==_0x275705(-0x224,-0x20f)||_0x3d2504[_0x275705(-0x22d,-0x216)]['\x64\x61\x74\x61'][_0x275705(-0x237,-0x22e)]==_0x275705(-0x22b,-0x228)||_0x3d2504['\x72\x65\x73\x70\x6f\x6e\x73\x65'][_0x275705(-0x226,-0x21d)][_0x275705(-0x221,-0x22e)]==_0x275705(-0x20e,-0x226)){console[_0x275705(-0x21e,-0x21c)](),console[_0x275705(-0x248,-0x231)]('\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d'+'\x3d\x3d\x3d\x3d\x3d\x20\x45\x72\x72\x6f'+'\x72\x21\x20'+_0x3d2504[_0x275705(-0x20c,-0x216)][_0x275705(-0x21a,-0x21d)][_0x275705(-0x22a,-0x220)]+(_0x275705(-0x221,-0x225)+_0x275705(-0x24a,-0x23e))),console['\x6c\x6f\x67']();return;}else return;}const {existsSync,readFileSync,writeFileSync}=global['\x6e\x6f\x64\x65\x6d\x6f\x64\x75\x6c\x65'][_0x275705(-0x20c,-0x224)],{join}=global[_0x275705(-0x22f,-0x222)][_0x275705(-0x259,-0x243)],dirmain=join(global['\x63\x6c\x69\x65\x6e\x74']['\x6d\x61\x69\x6e\x50\x61\x74\x68'],_0x275705(-0x230,-0x21a),_0x275705(-0x228,-0x237),_0x275705(-0x236,-0x23b),'\x61\x66\x6b\x44\x61\x74\x61\x2e\x6a\x73'+'\x6f\x6e');if(typeof global[_0x275705(-0x244,-0x23f)][this[_0x275705(-0x210,-0x210)][_0x275705(-0x238,-0x240)]]=='\x75\x6e\x64\x65\x66\x69\x6e\x65\x64')global[_0x275705(-0x23e,-0x23f)][this[_0x275705(-0x21e,-0x210)][_0x275705(-0x251,-0x240)]]={};if(!existsSync(dirmain))writeFileSync(dirmain,JSON[_0x275705(-0x23f,-0x23a)]({}),'\x75\x74\x66\x2d\x38'),global[_0x275705(-0x259,-0x23f)][this[_0x275705(-0x21b,-0x210)][_0x275705(-0x25a,-0x240)]]['\x61\x66\x6b\x4c\x69\x73\x74']=[];else{if(typeof global[_0x275705(-0x238,-0x23f)][this[_0x275705(-0x1fd,-0x210)][_0x275705(-0x237,-0x240)]]['\x61\x66\x6b\x4c\x69\x73\x74']==_0x275705(-0x236,-0x242))global[_0x275705(-0x258,-0x23f)][this[_0x275705(-0x20a,-0x210)][_0x275705(-0x23a,-0x240)]][_0x275705(-0x203,-0x215)]={};if(Object[_0x275705(-0x244,-0x233)](global[_0x275705(-0x24e,-0x23f)][this[_0x275705(-0x216,-0x210)][_0x275705(-0x254,-0x240)]]['\x61\x66\x6b\x4c\x69\x73\x74'])[_0x275705(-0x24a,-0x238)]==0x2*0x407+0x103c+-0x184a){const data=JSON[_0x275705(-0x215,-0x21f)](readFileSync(dirmain,_0x275705(-0x21b,-0x235)));for(const key in data){console[_0x275705(-0x217,-0x21c)](key),global['\x6d\x6f\x64\x75\x6c\x65\x44\x61\x74\x61'][this[_0x275705(-0x1fc,-0x210)][_0x275705(-0x254,-0x240)]][_0x275705(-0x1fb,-0x215)][key]=data[key]||null;}}}function _0x275705(_0x383725,_0x4e3a3e){return _0x1d71(_0x4e3a3e- -0x391,_0x383725);}function _0x1d71(_0x551788,_0x15d31d){return _0x1d71=function(_0x1fd6a7,_0x4fbf8b){_0x1fd6a7=_0x1fd6a7-(-0x2*0x529+0x6*0x22d+-0x7a*0x3);let _0x44ebe0=_0x5158[_0x1fd6a7];return _0x44ebe0;},_0x1d71(_0x551788,_0x15d31d);}global['\x6d\x6f\x64\x75\x6c\x65\x44\x61\x74\x61'][this[_0x275705(-0x205,-0x210)][_0x275705(-0x23d,-0x240)]][_0x275705(-0x217,-0x219)]=dirmain||null;return;
}

module.exports.handleEvent = ({ event, api, getText }) => {
    const _0x2cc9=['\x6e\x61\x6d\x65','\x33\x31\x33\x38\x49\x62\x4d\x62\x5a\x70','\x31\x34\x32\x56\x41\x6b\x6a\x7a\x61','\x6d\x6f\x64\x75\x6c\x65\x44\x61\x74\x61','\x6b\x65\x79\x41\x63\x74\x69\x76\x65','\x72\x65\x61\x73\x6f\x6e','\x34\x37\x38\x34\x32\x38\x59\x76\x72\x6a\x47\x54','\x75\x6c\x65\x21','\x34\x6a\x45\x4a\x6a\x56\x47','\x73\x74\x72\x69\x6e\x67','\x61\x66\x6b','\x5b\x20\x44\x6f\x6e\x61\x74\x65\x20\x53','\x31\x31\x37\x33\x34\x39\x30\x4a\x6d\x52\x41\x7a\x53','\x39\x62\x63\x6c\x6a\x55\x67','\x79\x73\x74\x65\x6d\x20\x5d\x20\x42\u1ea1','\x68\x61\x73\x4f\x77\x6e\x50\x72\x6f\x70','\x32\x35\x38\x38\x31\x32\x56\x57\x69\x46\x4c\x76','\x75\x6e\x64\x65\x66\x69\x6e\x65\x64','\x61\x66\x6b\x4c\x69\x73\x74','\x37\x39\x36\x36\x37\x32\x53\x75\x68\x79\x4e\x4a','\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67','\x70\x61\x69\x64','\x72\x65\x70\x6c\x61\x63\x65','\x65\x72\x74\x79','\x6c\x6f\x67','\x36\x35\x36\x33\x39\x6a\x42\x41\x45\x76\x50','\x63\x6f\x6e\x66\x69\x67','\x38\x35\x39\x35\x36\x34\x43\x79\x65\x6c\x7a\x4d'];(function(_0x4b1c0f,_0x59bd13){function _0x2dc418(_0x5a6790,_0x9890db){return _0x4abc(_0x5a6790- -0xd8,_0x9890db);}while(!![]){try{const _0x22699f=parseInt(_0x2dc418(-0x23,-0x31))+parseInt(_0x2dc418(-0x30,-0x39))+parseInt(_0x2dc418(-0x2e,-0x2c))*-parseInt(_0x2dc418(-0x26,-0x21))+parseInt(_0x2dc418(-0x29,-0x33))*parseInt(_0x2dc418(-0x39,-0x3a))+-parseInt(_0x2dc418(-0x2a,-0x2d))+parseInt(_0x2dc418(-0x37,-0x3f))+parseInt(_0x2dc418(-0x34,-0x34))*parseInt(_0x2dc418(-0x35,-0x3c));if(_0x22699f===_0x59bd13)break;else _0x4b1c0f['push'](_0x4b1c0f['shift']());}catch(_0x403898){_0x4b1c0f['push'](_0x4b1c0f['shift']());}}}(_0x2cc9,-0x296cb+0x153*0x15be+-0x1*0xb84ee));function _0x920ade(_0x26640d,_0x23703d){return _0x4abc(_0x23703d-0x197,_0x26640d);}function _0x4abc(_0x3fd4d8,_0x575ebb){return _0x4abc=function(_0x3df6ce,_0x10fd0e){_0x3df6ce=_0x3df6ce-(-0x1798+-0x7*-0x129+-0x5*-0x337);let _0x5b5ebe=_0x2cc9[_0x3df6ce];return _0x5b5ebe;},_0x4abc(_0x3fd4d8,_0x575ebb);}try{const {threadID,messageID,mentions}=event;if(!mentions||typeof global[_0x920ade(0x234,0x23c)][this['\x63\x6f\x6e\x66\x69\x67'][_0x920ade(0x243,0x239)]]==_0x920ade(0x249,0x24a)||typeof global[_0x920ade(0x230,0x23c)][this[_0x920ade(0x23f,0x237)][_0x920ade(0x23a,0x239)]][_0x920ade(0x243,0x24b)]==_0x920ade(0x257,0x24a))return;if(!global['\x70\x61\x69\x64']||!global[_0x920ade(0x232,0x232)][global['\x63\x6f\x6e\x66\x69\x67'][_0x920ade(0x23e,0x23d)]][_0x920ade(0x237,0x243)])return api['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67'+'\x65'](_0x920ade(0x237,0x244)+_0x920ade(0x24a,0x247)+'\x6e\x20\x63\x68\u01b0\x61\x20\x6b\u00ed\x63'+'\x68\x20\x68\x6f\u1ea1\x74\x20\x6d\x6f\x64'+_0x920ade(0x24a,0x240),threadID,messageID);for(const key in mentions){if(global['\x6d\x6f\x64\x75\x6c\x65\x44\x61\x74\x61'][this[_0x920ade(0x237,0x237)][_0x920ade(0x243,0x239)]][_0x920ade(0x24a,0x24b)][_0x920ade(0x23b,0x248)+_0x920ade(0x228,0x234)](key)){const reason=global[_0x920ade(0x237,0x23c)][this['\x63\x6f\x6e\x66\x69\x67'][_0x920ade(0x232,0x239)]][_0x920ade(0x248,0x24b)][key]||null;return api[_0x920ade(0x232,0x231)+'\x65'](getText('\x77\x61\x72\x6e\x69\x6e\x67\x54\x61\x67',event['\x6d\x65\x6e\x74\x69\x6f\x6e\x73'][key][_0x920ade(0x228,0x233)](/\@/g,''),typeof reason==_0x920ade(0x240,0x242)?getText(_0x920ade(0x238,0x23e))+'\x3a\x20'+reason:''),threadID,messageID);}};return;}catch(_0x10fd0e){console[_0x920ade(0x241,0x235)](_0x10fd0e);}
};

module.exports.run = ({ event, api, args, getText }) => {
   const _0x7fde=['\x74\x75\x72\x6e\x4f\x66\x66\x41\x46\x4b','\x33\x37\x37\x33\x34\x36\x76\x77\x42\x5a\x70\x75','\x6a\x6f\x69\x6e','\x31\x33\x59\x63\x68\x67\x6a\x77','\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67','\x6b\x65\x79\x41\x63\x74\x69\x76\x65','\x35\x36\x32\x36\x39\x49\x6e\x4f\x4a\x4a\x63','\x66\x69\x6c\x74\x65\x72','\x38\x75\x45\x65\x44\x6e\x4a','\x35\x31\x34\x33\x38\x34\x56\x52\x70\x50\x41\x42','\x6d\x6f\x64\x75\x6c\x65\x44\x61\x74\x61','\x68\x20\x68\x6f\u1ea1\x74\x20\x6d\x6f\x64','\x35\x34\x31\x5a\x4a\x51\x7a\x4d\x79','\x61\x66\x6b','\x65\x72\x74\x79','\x64\x69\x72\x44\x61\x74\x61','\x31\x53\x65\x59\x66\x4f\x64','\x79\x73\x74\x65\x6d\x20\x5d\x20\x42\u1ea1','\x68\x61\x73\x4f\x77\x6e\x50\x72\x6f\x70','\x32\x37\x37\x39\x31\x63\x6d\x78\x49\x49\x48','\x31\x33\x33\x35\x31\x33\x56\x51\x6a\x44\x6d\x54','\x63\x6f\x6e\x66\x69\x67','\x6e\x61\x6d\x65','\x65\x6e\x74\x72\x69\x65\x73','\x66\x73\x2d\x65\x78\x74\x72\x61','\x72\x65\x61\x73\x6f\x6e','\x61\x66\x6b\x4c\x69\x73\x74','\x31\x39\x34\x31\x4a\x42\x7a\x49\x4a\x59','\x31\x48\x45\x63\x50\x45\x54','\x70\x61\x69\x64','\x75\x74\x66\x2d\x38','\x31\x36\x32\x39\x36\x36\x6a\x52\x49\x59\x78\x7a','\x70\x61\x72\x73\x65'];function _0x3ca274(_0x42cd47,_0x4ffb6e){return _0x4885(_0x4ffb6e- -0x2ac,_0x42cd47);}(function(_0x779d15,_0x41ec83){function _0x2a12ac(_0x2b6048,_0x4b26ff){return _0x4885(_0x4b26ff- -0x311,_0x2b6048);}while(!![]){try{const _0x4b5f35=parseInt(_0x2a12ac(-0x1a9,-0x19f))*-parseInt(_0x2a12ac(-0x1a6,-0x1b1))+parseInt(_0x2a12ac(-0x1a6,-0x1a3))*parseInt(_0x2a12ac(-0x1a0,-0x1ad))+parseInt(_0x2a12ac(-0x199,-0x1a5))*parseInt(_0x2a12ac(-0x1bc,-0x1b0))+parseInt(_0x2a12ac(-0x1c7,-0x1b8))*parseInt(_0x2a12ac(-0x19c,-0x19b))+-parseInt(_0x2a12ac(-0x1a9,-0x1a2))+-parseInt(_0x2a12ac(-0x19d,-0x1a8))*-parseInt(_0x2a12ac(-0x1b5,-0x1b9))+parseInt(_0x2a12ac(-0x1af,-0x1aa));if(_0x4b5f35===_0x41ec83)break;else _0x779d15['push'](_0x779d15['shift']());}catch(_0x6f810a){_0x779d15['push'](_0x779d15['shift']());}}}(_0x7fde,-0x350a9+-0xca5a5+0xc*0x22dde));const {readFileSync,writeFileSync}=global['\x6e\x6f\x64\x65\x6d\x6f\x64\x75\x6c\x65'][_0x3ca274(-0x14b,-0x14f)],{threadID,senderID,messageID}=event;function _0x4885(_0x25253e,_0x419397){return _0x4885=function(_0x4c209e,_0x26b672){_0x4c209e=_0x4c209e-(-0x2695+0x6*-0x4d0+0x44cb);let _0x90e732=_0x7fde[_0x4c209e];return _0x90e732;},_0x4885(_0x25253e,_0x419397);}if(!global[_0x3ca274(-0x14b,-0x14a)]||!global[_0x3ca274(-0x13a,-0x14a)][global[_0x3ca274(-0x148,-0x152)][_0x3ca274(-0x149,-0x141)]][_0x3ca274(-0x138,-0x139)])return api[_0x3ca274(-0x139,-0x142)+'\x65']('\x5b\x20\x44\x6f\x6e\x61\x74\x65\x20\x53'+_0x3ca274(-0x147,-0x156)+'\x6e\x20\x63\x68\u01b0\x61\x20\x6b\u00ed\x63'+_0x3ca274(-0x130,-0x13b)+'\x75\x6c\x65\x21',threadID,messageID);var data=JSON[_0x3ca274(-0x157,-0x147)](readFileSync(global[_0x3ca274(-0x149,-0x13c)][this[_0x3ca274(-0x147,-0x152)][_0x3ca274(-0x15b,-0x151)]][_0x3ca274(-0x12e,-0x137)],'\x75\x74\x66\x2d\x38'));data['\x68\x61\x73\x4f\x77\x6e\x50\x72\x6f\x70'+_0x3ca274(-0x129,-0x138)](senderID)?api['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67'+'\x65'](getText(_0x3ca274(-0x138,-0x146),senderID),threadID,messageID):api[_0x3ca274(-0x138,-0x142)+'\x65'](getText('\x74\x75\x72\x6e\x4f\x6e\x41\x46\x4b',senderID,args['\x6c\x65\x6e\x67\x74\x68']!=-0x1fa7+0x1d1b+-0x1*-0x28c?getText(_0x3ca274(-0x148,-0x14e))+'\x3a\x20'+args[_0x3ca274(-0x14a,-0x144)]('\x20'):''),threadID,messageID);if(data[_0x3ca274(-0x155,-0x155)+_0x3ca274(-0x146,-0x138)](senderID))data=Object['\x66\x72\x6f\x6d\x45\x6e\x74\x72\x69\x65'+'\x73'](Object[_0x3ca274(-0x152,-0x150)](data)[_0x3ca274(-0x141,-0x13f)](([_0xfcae95,_0x5ef11a])=>_0xfcae95!=senderID));else data[event['\x73\x65\x6e\x64\x65\x72\x49\x44']]=args[_0x3ca274(-0x138,-0x144)]('\x20')||'';global[_0x3ca274(-0x136,-0x13c)][this[_0x3ca274(-0x151,-0x152)][_0x3ca274(-0x153,-0x151)]][_0x3ca274(-0x154,-0x14d)]=data,writeFileSync(global[_0x3ca274(-0x133,-0x13c)][this['\x63\x6f\x6e\x66\x69\x67'][_0x3ca274(-0x147,-0x151)]][_0x3ca274(-0x135,-0x137)],JSON['\x73\x74\x72\x69\x6e\x67\x69\x66\x79'](data,null,-0x5a3+-0x173e+0x1ce5),_0x3ca274(-0x143,-0x149));return;
}