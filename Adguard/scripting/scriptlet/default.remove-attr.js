/*******************************************************************************

    uBlock Origin Lite - a comprehensive, MV3-compliant content blocker
    Copyright (C) 2014-present Raymond Hill

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see {http://www.gnu.org/licenses/}.

    Home: https://github.com/gorhill/uBlock

*/

/* jshint esversion:11 */
/* global cloneInto */

'use strict';

// ruleset: default

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_removeAttr = function() {

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = [["style","#over"],["data-id|data-p","[data-id],[data-p]","stay"],["checked","input#chkIsAdd"],["checked","#addon"],["onclick"],["href|target","a[href=\"https://imgprime.com/view.php\"][target=\"_blank\"]","complete"],["href","a[href=\"https://vpn-choice.com\"]"],["src","iframe#claimAd"],["href","#opfk"],["srcdoc","iframe"],["onmousemove","button"],["onclick","button[id][onclick*=\".html\"]"],["onclick","button[name=\"imgContinue\"][onclick]"],["target","#continuetoimage > [href]"],["href|target","#continuetoimage > [href][onclick], #overlayera > #ajax_load_indicator > #page_effect > [href][onclick]"],["target"],["href","[href*=\"ccbill\"]"],["onclick","[onclick^=\"window.open\"]"],["onclick","[onclick^=\"pop\"]"],["disabled","button[id=\"invisibleCaptchaShortlink\"]"],["onmouseover|onclick|onmouseout",".save-btn.pull-right"],["href","#clickfakeplayer"],["onclick","","stay"],["type","input[value^=\"http\"]"],["oncontextmenu"],["class","div.intAdX"],["class","div[class^=\"img\"][class$=\"ad\"]"],["data-ivad-preroll-adtag","video","stay"],["style","ins","complete"],["href","[href*=\"jump\"]","stay"],["href","a#clickfakeplayer"],["href",".fake_player > [href][target]"],["href",".link"],["href",".fake_player > a[href]"],["target",".clickbutton"],["oncontextmenu","body"],["disabled","button"],["data-ppcnt_ads","main[onclick]"],["disabled","#tp-snp2"],["data-ppcnt_ads|onclick","#main"],["onclick",".btn-success.get-link","stay"],["disabled",".btn-primary"],["href",".MyAd > a[target=\"_blank\"]"],["data-ppcnt_ads","","stay"],["disabled",".get-link"],["onClick"],["href","[href^=\"https://aj2218.online/\"]","stay"],["target","#downloadvideo"],["data-item","a[href='']"],["href","a[href][target=\"_blank\"]"],["href","a[href*=\"/ads.php\"][target=\"_blank\"]"],["onclick","[onclick*=\"window.open\"]"],["target|href","a[href^=\"//\"]"],["onclick","a[href^=\"magnet:\"][onclick]"],["target","#SafelinkGenerate"],["onclick","a[href][onclick^=\"getFullStory\"]"],["onclick","body"],["onclick",".previewhd > a"],["onclick","a.thumb.mvi-cover"],["href|target|data-ipshover-target|data-ipshover|data-autolink|rel","a[href^=\"https://thumpertalk.com/link/click/\"][target=\"_blank\"]"],["href","#continue"],["href",".button[href^=\"javascript\"]"],["disabled","input[id=\"button1\"][class=\"btn btn-primary\"][disabled]"],["type","[src*=\"SPOT\"]","asap stay"],["class","div#player"],["href|target|data-onclick","a[id=\"dl\"][data-onclick^=\"window.open\"]","stay"],["href","a#clickfkplayer"],["onclick","a[onclick^=\"setTimeout\"]"],["href",".mvi-cover"],["href",".t-out-span [href*=\"utm_source\"]","stay"],["src",".t-out-span [src*=\".gif\"]","stay"],["disabled",".panel-body > .text-center > button"],["href","[onclick]","stay"],["onmousedown",".ob-dynamic-rec-link","stay"],["disabled","a#redirect-btn"],["onclick","form > button"],["href",".unlock-step-link"],["href","[href*=\"discord\"]"],["href",".MediaStep","stay"],["onclick",".btn"],["href","[href=\"/bestporn.html\"]"],["disabled","button#getlink"],["disabled","button#gotolink"],["id","#div-gpt-ad-footer"],["id","#div-gpt-ad-pagebottom"],["id","#div-gpt-ad-relatedbottom-1"],["id","#div-gpt-ad-sidebottom"],["disabled",".downloadbtn"],["onclick","#direct_link > a[onclick]"],["href","[onclick^=\"pop\"]"],["disabled","#gotolink"],["style","[style*=\"background-image: url\"]","stay"],["href","[href*=\"click?\"]","stay"],["href",".atas > a[href*=\"/redirect\"][onclick]"],["onload","[onload^=\"window.open\"]"],["onclick","button[onclick^=\"window.open\"]"],["href","a[href^=\"//torrentico.top/sim/go.php\"]"],["onclick","[type=\"submit\"]"],["onclick","a#downloadbtn[onclick^=\"window.open\"]","stay"],["onclick","a[onclick]"],["onclick","a[onclick*=\"window.open\"]"],["style","[style^=\"background\"]","stay"],["href","[target^=\"_\"]","stay"],["class|style","div[id^=\"los40_gpt\"]"],["data-woman-ex","a[href][data-woman-ex]"],["data-trm-action|data-trm-category|data-trm-label",".trm_event","stay"]];

const hostnamesMap = new Map([["freeplayervideo.com",0],["nazarickol.com",0],["player-cdn.com",0],["mcloud.bz",1],["vidstream.pro",1],["dailyuploads.net",2],["userupload.net",3],["bs.to",4],["payskip.org",4],["dozarte.com",4],["goalup.live",4],["pornoborshch.com",4],["imgprime.com",5],["magnetdl.com",6],["magnetdl.org",6],["moondoge.co.in",7],["igg-games.com",9],["newscon.org",9],["crazyvidup.com",9],["22pixx.xyz",[12,13,14]],["games2rule.com",15],["games4king.com",15],["sexykittenporn.com",16],["errotica-archives.com",16],["shon.xyz",17],["megaurl.in",18],["megafly.in",18],["donpelis.com",18],["noweconomy.live",19],["elil.cc",20],["amyscans.com",21],["dvdgayonline.com",21],["supergoku.com",21],["streampourvous.com",21],["openloading.com",21],["dvdgayporn.com",21],["latinohentai.com",21],["hdmovie20.com",21],["vumoo.cc",21],["cinefunhd.com",21],["eegybest.xyz",21],["animesgratis.org",21],["filerio.in",22],["fastconverter.net",22],["xxx-image.com",24],["1001tracklists.com",[25,26]],["desired.de",27],["forum.release-apk.com",28],["work.ink",29],["premiumstream.live",32],["verepeliculas.com",33],["newsonthegotoday.com",34],["findandfound.ga",35],["apps2app.com",36],["appsmodz.com",36],["note1s.com",36],["paste1s.com",36],["tr.link",37],["wikitraveltips.com",38],["amritadrino.com",38],["aylink.co",39],["gitizle.vip",39],["shtms.co",39],["satoshi-win.xyz",40],["promo-visits.site",41],["bitzite.com",42],["cpmlink.pro",43],["freebrightsoft.com",44],["smutty.com",46],["iseekgirls.com",48],["tio.ch",50],["ondebaixo.com",53],["ondebaixa.com",53],["ondeeubaixo.org",53],["torrentool.org",53],["egao.in",54],["hindustantimes.com",55],["e-sushi.fr",56],["itsfuck.com",57],["stilltube.com",57],["hitmovies4u.com",58],["123moviefree4u.com",58],["thumpertalk.com",59],["adz7short.space",60],["allwpworld.com",62],["veoplanet.com",63],["blogdatecnologia.net",64],["diariodecasamento.com",64],["eusaudavel.net",64],["modaestiloeafins.com",64],["portalmundocurioso.com",64],["receitasabores.com",64],["turismoeviagem.com",64],["bowfile.com",65],["av01.tv",67],["film01stream.ws",68],["firstpost.com",[69,70]],["so1.asia",71],["methodspoint.com",72],["welt.de",73],["top1iq.com",74],["sh2rt.com",75],["sub1s.com",76],["utopiascans.com",77],["mboost.me",78],["oii.io",79],["watchanime.video",80],["adzz.in",[81,82,90]],["soranews24.com",[83,84,85,86]],["datanodes.to",87],["mega4upload.com",88],["javchill.com",89],["proappapk.com",90],["seznamzpravy.cz",[91,92]],["link.idblog.eu.org",93],["jockantv.com",94],["stagatvfiles.com",95],["domaha.tv",96],["xxxrip.net",96],["sextor.org",96],["sex-torrent.net",96],["timestamp.fr",97],["yt2conv.com",98],["av01.media",99],["flixtor2.to",100],["karaoketexty.cz",[101,102]],["los40.com",103],["woman.excite.co.jp",104],["demae-can.com",105]]);

const entitiesMap = new Map([["vidplay",1],["vizcloud",1],["douploads",2],["adbull",4],["burningseries",4],["nextorrent",4],["sportlive",4],["pelisplus",8],["pelispedia",[8,30,31]],["cine-calidad",8],["vinaurl",10],["filecrypt",11],["mega4up",17],["zeefiles",17],["cinetux",21],["dpstream",21],["allcalidad",21],["pelis28",21],["jetanimes",21],["anxcinema",21],["hdmovie5",21],["pelishouse",21],["hdmovie2",21],["mlwbd",23],["pelispedia24",30],["notube",45],["strcloud",47],["streamtape",47],["streamta",47],["strtape",47],["strtapeadblock",47],["shrinke",49],["shrinkme",49],["fzm",51],["fzmovies",51],["lite-link",52],["waploaded",61],["onionplay",66]]);

const exceptionsMap = new Map([["notube.com",[45]]]);

/******************************************************************************/

function removeAttr(
    token = '',
    selector = '',
    behavior = ''
) {
    if ( typeof token !== 'string' ) { return; }
    if ( token === '' ) { return; }
    const tokens = token.split(/\s*\|\s*/);
    if ( selector === '' ) {
        selector = `[${tokens.join('],[')}]`;
    }
    let timer;
    const rmattr = ( ) => {
        timer = undefined;
        try {
            const nodes = document.querySelectorAll(selector);
            for ( const node of nodes ) {
                for ( const attr of tokens ) {
                    node.removeAttribute(attr);
                }
            }
        } catch(ex) {
        }
    };
    const mutationHandler = mutations => {
        if ( timer !== undefined ) { return; }
        let skip = true;
        for ( let i = 0; i < mutations.length && skip; i++ ) {
            const { type, addedNodes, removedNodes } = mutations[i];
            if ( type === 'attributes' ) { skip = false; }
            for ( let j = 0; j < addedNodes.length && skip; j++ ) {
                if ( addedNodes[j].nodeType === 1 ) { skip = false; break; }
            }
            for ( let j = 0; j < removedNodes.length && skip; j++ ) {
                if ( removedNodes[j].nodeType === 1 ) { skip = false; break; }
            }
        }
        if ( skip ) { return; }
        timer = self.requestIdleCallback(rmattr, { timeout: 17 });
    };
    const start = ( ) => {
        rmattr();
        if ( /\bstay\b/.test(behavior) === false ) { return; }
        const observer = new MutationObserver(mutationHandler);
        observer.observe(document, {
            attributes: true,
            attributeFilter: tokens,
            childList: true,
            subtree: true,
        });
    };
    runAt(( ) => {
        start();
    }, /\bcomplete\b/.test(behavior) ? 'idle' : 'interactive');
}

function runAt(fn, when) {
    const intFromReadyState = state => {
        const targets = {
            'loading': 1,
            'interactive': 2, 'end': 2, '2': 2,
            'complete': 3, 'idle': 3, '3': 3,
        };
        const tokens = Array.isArray(state) ? state : [ state ];
        for ( const token of tokens ) {
            const prop = `${token}`;
            if ( targets.hasOwnProperty(prop) === false ) { continue; }
            return targets[prop];
        }
        return 0;
    };
    const runAt = intFromReadyState(when);
    if ( intFromReadyState(document.readyState) >= runAt ) {
        fn(); return;
    }
    const onStateChange = ( ) => {
        if ( intFromReadyState(document.readyState) < runAt ) { return; }
        fn();
        safe.removeEventListener.apply(document, args);
    };
    const safe = safeSelf();
    const args = [ 'readystatechange', onStateChange, { capture: true } ];
    safe.addEventListener.apply(document, args);
}

function safeSelf() {
    if ( scriptletGlobals.has('safeSelf') ) {
        return scriptletGlobals.get('safeSelf');
    }
    const self = globalThis;
    const safe = {
        'Array_from': Array.from,
        'Error': self.Error,
        'Function_toStringFn': self.Function.prototype.toString,
        'Function_toString': thisArg => safe.Function_toStringFn.call(thisArg),
        'Math_floor': Math.floor,
        'Math_max': Math.max,
        'Math_min': Math.min,
        'Math_random': Math.random,
        'Object': Object,
        'Object_defineProperty': Object.defineProperty.bind(Object),
        'Object_fromEntries': Object.fromEntries.bind(Object),
        'Object_getOwnPropertyDescriptor': Object.getOwnPropertyDescriptor.bind(Object),
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'Request_clone': self.Request.prototype.clone,
        'XMLHttpRequest': self.XMLHttpRequest,
        'addEventListener': self.EventTarget.prototype.addEventListener,
        'removeEventListener': self.EventTarget.prototype.removeEventListener,
        'fetch': self.fetch,
        'JSON': self.JSON,
        'JSON_parseFn': self.JSON.parse,
        'JSON_stringifyFn': self.JSON.stringify,
        'JSON_parse': (...args) => safe.JSON_parseFn.call(safe.JSON, ...args),
        'JSON_stringify': (...args) => safe.JSON_stringifyFn.call(safe.JSON, ...args),
        'log': console.log.bind(console),
        uboLog(...args) {
            if ( scriptletGlobals.has('canDebug') === false ) { return; }
            if ( args.length === 0 ) { return; }
            if ( `${args[0]}` === '' ) { return; }
            this.log('[uBO]', ...args);
        },
        initPattern(pattern, options = {}) {
            if ( pattern === '' ) {
                return { matchAll: true };
            }
            const expect = (options.canNegate !== true || pattern.startsWith('!') === false);
            if ( expect === false ) {
                pattern = pattern.slice(1);
            }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match !== null ) {
                return {
                    re: new this.RegExp(
                        match[1],
                        match[2] || options.flags
                    ),
                    expect,
                };
            }
            if ( options.flags !== undefined ) {
                return {
                    re: new this.RegExp(pattern.replace(
                        /[.*+?^${}()|[\]\\]/g, '\\$&'),
                        options.flags
                    ),
                    expect,
                };
            }
            return { pattern, expect };
        },
        testPattern(details, haystack) {
            if ( details.matchAll ) { return true; }
            if ( details.re ) {
                return this.RegExp_test.call(details.re, haystack) === details.expect;
            }
            return haystack.includes(details.pattern) === details.expect;
        },
        patternToRegex(pattern, flags = undefined, verbatim = false) {
            if ( pattern === '' ) { return /^/; }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match === null ) {
                const reStr = pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                return new RegExp(verbatim ? `^${reStr}$` : reStr, flags);
            }
            try {
                return new RegExp(match[1], match[2] || undefined);
            }
            catch(ex) {
            }
            return /^/;
        },
        getExtraArgs(args, offset = 0) {
            const entries = args.slice(offset).reduce((out, v, i, a) => {
                if ( (i & 1) === 0 ) {
                    const rawValue = a[i+1];
                    const value = /^\d+$/.test(rawValue)
                        ? parseInt(rawValue, 10)
                        : rawValue;
                    out.push([ a[i], value ]);
                }
                return out;
            }, []);
            return this.Object_fromEntries(entries);
        },
    };
    scriptletGlobals.set('safeSelf', safe);
    return safe;
}

/******************************************************************************/

const hnParts = [];
try { hnParts.push(...document.location.hostname.split('.')); }
catch(ex) { }
const hnpartslen = hnParts.length;
if ( hnpartslen === 0 ) { return; }

const todoIndices = new Set();
const tonotdoIndices = [];

// Exceptions
if ( exceptionsMap.size !== 0 ) {
    for ( let i = 0; i < hnpartslen; i++ ) {
        const hn = hnParts.slice(i).join('.');
        const excepted = exceptionsMap.get(hn);
        if ( excepted ) { tonotdoIndices.push(...excepted); }
    }
    exceptionsMap.clear();
}

// Hostname-based
if ( hostnamesMap.size !== 0 ) {
    const collectArgIndices = hn => {
        let argsIndices = hostnamesMap.get(hn);
        if ( argsIndices === undefined ) { return; }
        if ( typeof argsIndices === 'number' ) { argsIndices = [ argsIndices ]; }
        for ( const argsIndex of argsIndices ) {
            if ( tonotdoIndices.includes(argsIndex) ) { continue; }
            todoIndices.add(argsIndex);
        }
    };
    for ( let i = 0; i < hnpartslen; i++ ) {
        const hn = hnParts.slice(i).join('.');
        collectArgIndices(hn);
    }
    collectArgIndices('*');
    hostnamesMap.clear();
}

// Entity-based
if ( entitiesMap.size !== 0 ) {
    const n = hnpartslen - 1;
    for ( let i = 0; i < n; i++ ) {
        for ( let j = n; j > i; j-- ) {
            const en = hnParts.slice(i,j).join('.');
            let argsIndices = entitiesMap.get(en);
            if ( argsIndices === undefined ) { continue; }
            if ( typeof argsIndices === 'number' ) { argsIndices = [ argsIndices ]; }
            for ( const argsIndex of argsIndices ) {
                if ( tonotdoIndices.includes(argsIndex) ) { continue; }
                todoIndices.add(argsIndex);
            }
        }
    }
    entitiesMap.clear();
}

// Apply scriplets
for ( const i of todoIndices ) {
    try { removeAttr(...argsList[i]); }
    catch(ex) {}
}
argsList.length = 0;

/******************************************************************************/

};
// End of code to inject

/******************************************************************************/

// Inject code

// https://bugzilla.mozilla.org/show_bug.cgi?id=1736575
//   'MAIN' world not yet supported in Firefox, so we inject the code into
//   'MAIN' ourself when environment in Firefox.

const targetWorld = 'MAIN';

// Not Firefox
if ( typeof wrappedJSObject !== 'object' || targetWorld === 'ISOLATED' ) {
    return uBOL_removeAttr();
}

// Firefox
{
    const page = self.wrappedJSObject;
    let script, url;
    try {
        page.uBOL_removeAttr = cloneInto([
            [ '(', uBOL_removeAttr.toString(), ')();' ],
            { type: 'text/javascript; charset=utf-8' },
        ], self);
        const blob = new page.Blob(...page.uBOL_removeAttr);
        url = page.URL.createObjectURL(blob);
        const doc = page.document;
        script = doc.createElement('script');
        script.async = false;
        script.src = url;
        (doc.head || doc.documentElement || doc).append(script);
    } catch (ex) {
        console.error(ex);
    }
    if ( url ) {
        if ( script ) { script.remove(); }
        page.URL.revokeObjectURL(url);
    }
    delete page.uBOL_removeAttr;
}

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
