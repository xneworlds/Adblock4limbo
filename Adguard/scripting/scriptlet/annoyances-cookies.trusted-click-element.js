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

// ruleset: annoyances-cookies

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_trustedClickElement = function() {

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = [["form[action] button[jsname=\"tWT92d\"]"],["[title=\"Manage Cookies\"]"],["[title=\"Reject All\"]","","500"],[".sp_choice_type_12[title=\"Options\"]"],["[title=\"REJECT ALL\"]","","500"],[".sp_choice_type_12[title=\"OPTIONS\"]"],[".sp_choice_type_12[title=\"Manage or reject cookies\"]"],["[title=\"Reject all\"]","","500"],["button[title^=\"Consent\"]"],["button.reject-all"],[".cmp__dialog-footer-buttons > .is-secondary"],["#didomi-notice-agree-button"],["button[onclick=\"IMOK()\"]","","500"],["a.btn--primary"],[".message-container.global-font button.message-button.no-children.focusable.button-font.sp_choice_type_12[title=\"MORE OPTIONS\""],["[data-choice=\"1683026410215\"]","","500"],["button.sp_choice_type_12[title$=\"Settings\"]"],["button[title=\"REJECT ALL\"]","","1000"],["button.iubenda-cs-customize-btn, button.iub-cmp-reject-btn, button#iubFooterBtn"],[".sp_choice_type_12[title=\"Manage Cookies\"]"],[".sp_choice_type_REJECT_ALL","","500"],[".almacmp-button--settings, #purposeConsents1, #purposeConsents2, #purposeConsents3, #purposeConsents4, #purposeConsents5, #purposeConsents6, #purposeConsents7, #purposeConsents8, #purposeConsents9, #purposeConsents10, #purposeConsents11, #specialFeatureConsents1, #specialFeatureConsents2, #almacmp-save-layer2"],[".sanoma-logo-container ~ .message-component.sticky-buttons button.sp_choice_type_12[title=\"Asetukset\"]"],[".sanoma-logo-container ~ .message-component.privacy-manager-tcfv2 .tcfv2-stack[title=\"Sanoman sisällönjakelukumppanit\"] button.pm-switch[aria-checked=\"false\"]"],[".sanoma-logo-container ~ .message-component.sticky-buttons button.sp_choice_type_SAVE_AND_EXIT[title=\"Tallenna\"]","","1500"],["#onetrust-accept-btn-handler"],["button[title=\"Accept and continue\"]"],["button[title=\"Accept All Cookies\"]"],[".accept-all"],["#CybotCookiebotDialogBodyButtonAccept"],[".privacy-cp-wall #privacy-cp-wall-accept"],["button[aria-label=\"Continua senza accettare\"]"],["label[class=\"input-choice__label\"][for=\"CookiePurposes_1_\"], label[class=\"input-choice__label\"][for=\"CookiePurposes_2_\"], button.js-save[type=\"submit\"]"],["[href=\"/x-set-cookie/\"]"],["#dialogButton1"],[".call"],["#cl-consent button[data-role=\"b_decline\"]"],["#privacy-cp-wall-accept"],["button[data-label=\"accept-button\"]","","1000"],["#cmp-btn-accept","","5000"],["button#pt-accept-all"],["[for=\"checkbox_niezbedne\"], [for=\"checkbox_spolecznosciowe\"], .btn-primary"],["[aria-labelledby=\"banner-title\"] > div[class^=\"buttons_\"] > button[class*=\"secondaryButton_\"] + button"],["button#minf-privacy-open-modal-btn-id, button.iubenda-cs-close-btn"],["button.iubenda-cs-accept-btn","","1000"],["button.trustarc-agree-btn"],[".pg-configure-button[title=\"Instellen\"]","","500"],["button.message-button[title=\"Mijn instellingen beheren\"]","","500"],["button[aria-checked=\"false\"][aria-label^=\"Social\"], button.sp_choice_type_SAVE_AND_EXIT","","500"],["#pubtech-cmp #pt-close"],[".didomi-continue-without-agreeing"],["#ccAcceptOnlyFunctional","","4000"],["button.optoutmulti_button","","2000"],["button[title=\"Accepter\"]"],[".btns-container > button[title=\"Tilpass\"]"],[".message-row > button[title=\"Avvis alle\"]","","2000"],["button.iubenda-cs-accept-btn"],[".iubenda-cs-visible .iubenda-cs-accept-btn"],["button[title=\"Accept all\"]"]];

const hostnamesMap = new Map([["consent.youtube.com",0],["sourcepointcmp.bloomberg.com",[1,2]],["sourcepointcmp.bloomberg.co.jp",[1,2]],["cmpv2.independent.co.uk",[2,5]],["cmpv2.standard.co.uk",[3,4]],["sourcepoint.theguardian.com",[6,7]],["spiegel.de",8],["consent.yahoo.com",9],["tumblr.com",10],["20minutos.es",11],["rfi.fr",11],["elcomercio.es",11],["france24.com",11],["fplstatistics.co.uk",12],["e-shop.leonidas.com",13],["cdn.privacy-mgmt.com",[14,15,22,23,24,58]],["consent.ladbible.com",[16,17]],["consent.unilad.com",[16,17]],["consent.gamingbible.com",[16,17]],["consent.sportbible.com",[16,17]],["consent.tyla.com",[16,17]],["consent.ladbiblegroup.com",[16,17]],["m2o.it",18],["deejay.it",18],["capital.it",18],["ilmattino.it",18],["leggo.it",18],["libero.it",18],["consent-manager.ft.com",[19,20]],["ampparit.com",21],["arvopaperi.fi",21],["iltalehti.fi",21],["kauppalehti.fi",21],["mediuutiset.fi",21],["mikrobitti.fi",21],["talouselama.fi",21],["tekniikkatalous.fi",21],["tivi.fi",21],["uusisuomi.fi",21],["digitalfoundry.net",25],["egx.net",25],["eurogamer.it",25],["mcmcomiccon.com",25],["nintendolife.com",25],["paxsite.com",25],["purexbox.com",25],["pushsquare.com",25],["starwarscelebration.com",25],["thehaul.com",25],["timeextension.com",25],["dicebreaker.com",[26,27]],["eurogamer.cz",[26,27]],["eurogamer.es",[26,27]],["eurogamer.net",[26,27]],["eurogamer.nl",[26,27]],["eurogamer.pl",[26,27]],["eurogamer.pt",[26,27]],["gamesindustry.biz",[26,27]],["jelly.deals",[26,27]],["reedpop.com",[26,27]],["rockpapershotgun.com",[26,27]],["thepopverse.com",[26,27]],["vg247.com",[26,27]],["videogameschronicle.com",[26,27]],["eurogamer.de",28],["roadtovr.com",29],["corriere.it",[30,37]],["gazzetta.it",30],["cmp.sky.it",31],["tennisassa.fi",32],["f1racing.pl",33],["consent-pref.trustarc.com",35],["highlights.legaseriea.it",36],["calciomercato.com",36],["sosfanta.com",37],["wetter.com",39],["youmath.it",40],["pip.gov.pl",41],["forbes.com",42],["mediaset.it",43],["repubblica.it",44],["fortune.com",45],["cmp.dpgmedia.nl",[46,48]],["cmp.dpgmedia.be",[46,48]],["cmp.ad.nl",[46,48]],["cmp.autotrack.nl",[46,48]],["cmp.autoweek.nl",[46,48]],["cmp.bd.nl",[46,48]],["cmp.bndestem.nl",[46,48]],["cmp.demorgen.be",[46,48]],["cmp.deondernemer.nl",[46,48]],["cmp.destentor.nl",[46,48]],["cmp.ed.nl",[46,48]],["cmp.gaspedaal.nl",[46,48]],["cmp.gelderlander.nl",[46,48]],["cmp.hln.be",[46,48]],["cmp.humo.be",[46,48]],["cmp.margriet.nl",[46,48]],["cmp.nu.nl",[46,48]],["cmp.qmusic.nl",[46,48]],["cmp.stijlvol-wonen.com",[46,48]],["cmp.trouw.nl",[46,48]],["cmp.tubantia.nl",[46,48]],["cmp.vtwonen.be",[46,48]],["cmp.vtwonen.nl",[46,48]],["cmp.pzc.nl",[46,48]],["cmp.zozitdat.nl",[46,48]],["cmp-sp.vrt.be",[47,48]],["ilrestodelcarlino.it",49],["quotidiano.net",49],["lanazione.it",49],["ilgiorno.it",49],["iltelegrafolivorno.it",49],["frandroid.com",50],["nutri-plus.de",51],["aa.com",52],["programme-tv.net",53],["cmp.vg.no",[54,55]],["movieplayer.it",56],["huffingtonpost.it",57],["lastampa.it",57],["ilsecoloxix.it",57]]);

const entitiesMap = new Map([["consent.google",0],["gmx",25],["music.amazon",34],["chrono24",38],["americanairlines",52]]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function trustedClickElement(
    selectors = '',
    extraMatch = '', // not yet supported
    delay = ''
) {
    if ( extraMatch !== '' ) { return; }

    const safe = safeSelf();
    const extraArgs = safe.getExtraArgs(Array.from(arguments), 3);
    const uboLog = extraArgs.log !== undefined
        ? ((...args) => { safe.uboLog(...args); })
        : (( ) => { });

    const querySelectorEx = (selector, context = document) => {
        const pos = selector.indexOf(' >>> ');
        if ( pos === -1 ) { return context.querySelector(selector); }
        const outside = selector.slice(0, pos).trim();
        const inside = selector.slice(pos + 5).trim();
        const elem = context.querySelector(outside);
        if ( elem === null ) { return null; }
        const shadowRoot = elem.shadowRoot;
        return shadowRoot && querySelectorEx(inside, shadowRoot);
    };

    const selectorList = selectors.split(/\s*,\s*/)
        .filter(s => {
            try {
                void querySelectorEx(s);
            } catch(_) {
                return false;
            }
            return true;
        });
    if ( selectorList.length === 0 ) { return; }

    const clickDelay = parseInt(delay, 10) || 1;
    const t0 = Date.now();
    const tbye = t0 + 10000;
    let tnext = selectorList.length !== 1 ? t0 : t0 + clickDelay;

    const terminate = ( ) => {
        selectorList.length = 0;
        next.stop();
        observe.stop();
    };

    const next = notFound => {
        if ( selectorList.length === 0 ) {
            uboLog(`trusted-click-element: Completed`);
            return terminate();
        }
        const tnow = Date.now();
        if ( tnow >= tbye ) {
            uboLog(`trusted-click-element: Timed out`);
            return terminate();
        }
        if ( notFound ) { observe(); }
        const delay = Math.max(notFound ? tbye - tnow : tnext - tnow, 1);
        next.timer = setTimeout(( ) => {
            next.timer = undefined;
            process();
        }, delay);
        uboLog(`trusted-click-element: Waiting for ${selectorList[0]}...`);
    };
    next.stop = ( ) => {
        if ( next.timer === undefined ) { return; }
        clearTimeout(next.timer);
        next.timer = undefined;
    };

    const observe = ( ) => {
        if ( observe.observer !== undefined ) { return; }
        observe.observer = new MutationObserver(( ) => {
            if ( observe.timer !== undefined ) { return; }
            observe.timer = setTimeout(( ) => {
                observe.timer = undefined;
                process();
            }, 20);
        });
        observe.observer.observe(document, {
            attributes: true,
            childList: true,
            subtree: true,
        });
    };
    observe.stop = ( ) => {
        if ( observe.timer !== undefined ) {
            clearTimeout(observe.timer);
            observe.timer = undefined;
        }
        if ( observe.observer ) {
            observe.observer.disconnect();
            observe.observer = undefined;
        }
    };

    const process = ( ) => {
        next.stop();
        if ( Date.now() < tnext ) { return next(); }
        const selector = selectorList.shift();
        if ( selector === undefined ) { return terminate(); }
        const elem = querySelectorEx(selector);
        if ( elem === null ) {
            selectorList.unshift(selector);
            return next(true);
        }
        uboLog(`trusted-click-element: Clicked ${selector}`);
        elem.click();
        tnext += clickDelay;
        next();
    };

    runAtHtmlElementFn(process);
}

function runAtHtmlElementFn(fn) {
    if ( document.documentElement ) {
        fn();
        return;
    }
    const observer = new MutationObserver(( ) => {
        observer.disconnect();
        fn();
    });
    observer.observe(document, { childList: true });
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
    try { trustedClickElement(...argsList[i]); }
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

const targetWorld = 'ISOLATED';

// Not Firefox
if ( typeof wrappedJSObject !== 'object' || targetWorld === 'ISOLATED' ) {
    return uBOL_trustedClickElement();
}

// Firefox
{
    const page = self.wrappedJSObject;
    let script, url;
    try {
        page.uBOL_trustedClickElement = cloneInto([
            [ '(', uBOL_trustedClickElement.toString(), ')();' ],
            { type: 'text/javascript; charset=utf-8' },
        ], self);
        const blob = new page.Blob(...page.uBOL_trustedClickElement);
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
    delete page.uBOL_trustedClickElement;
}

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
