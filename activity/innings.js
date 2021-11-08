< !DOCTYPE html >
    <html lang="en">

        <head>
            <link rel="preload" href="https://wassets.hscicdn.com/static/fonts/EspnIcon/ESPNIcons.woff2" as="font"
                type="font/woff2" crossorigin="anonymous" />
            <link rel="preload" href="https://wassets.hscicdn.com/static/fonts/BentonSans/BentonSans-Bold/BentonSans-Bold.woff"
                as="font" type="font/woff" crossorigin="anonymous" />
            <link rel="preload"
                href="https://wassets.hscicdn.com/static/fonts/BentonSans/BentonSans-Regular/BentonSans-Regular.woff" as="font"
                type="font/woff" crossorigin="anonymous" />
            <link rel="preload"
                href="https://wassets.hscicdn.com/static/fonts/BentonSans/BentonSans-Medium/BentonSans-Medium.woff" as="font"
                type="font/woff" crossorigin="anonymous" />
            <link rel="preconnect" href="https://wassets.hscicdn.com" crossorigin="anonymous" />
            <link rel="preconnect" href="https://img1.hscicdn.com" crossorigin="anonymous" />
            <script type="text/javascript">
    /*! js-cookie v3.0.0-rc.0 | MIT */
                !function (e, t) {"object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self, function () { var r = e.Cookies, n = e.Cookies = t(); n.noConflict = function () { return e.Cookies = r, n } }())}(this, function () {"use strict"; function e(e) { for (var t = 1; t < arguments.length; t++) { var r = arguments[t]; for (var n in r) e[n] = r[n] } return e } var t = {read: function (e) { return e.replace(/%3B/g, ";") }, write: function (e) { return e.replace(/;/g, "%3B") } }; return function r(n, i) {function o(r, o, u) { if ("undefined" != typeof document) { "number" == typeof (u = e({}, i, u)).expires && (u.expires = new Date(Date.now() + 864e5 * u.expires)), u.expires && (u.expires = u.expires.toUTCString()), r = t.write(r).replace(/=/g, "%3D"), o = n.write(String(o), r); var c = ""; for (var f in u) u[f] && (c += "; " + f, !0 !== u[f] && (c += "=" + u[f].split(";")[0])); return document.cookie = r + "=" + o + c } } return Object.create({set: o, get: function (e) { if ("undefined" != typeof document && (!arguments.length || e)) { for (var r = document.cookie ? document.cookie.split("; ") : [], i = { }, o = 0; o < r.length; o++) { var u = r[o].split("="), c = u.slice(1).join("="), f = t.read(u[0]).replace(/%3D/g, "="); if (i[f] = n.read(c, f), e === f) break } return e ? i[e] : i } }, remove: function (t, r) {o(t, "", e({}, r, { expires: -1 }))}, withAttributes: function (t) { return r(this.converter, e({ }, this.attributes, t)) }, withConverter: function (t) { return r(e({ }, this.converter, t), this.attributes) } }, {attributes: {value: Object.freeze(i) }, converter: {value: Object.freeze(n) } }) }(t, {path: "/" }) });
            </script>
            <script type="text/javascript">
                window.hsci = window.hsci || {
                    consent: {
                    region: 'unknown',
                enabled: false,
                taken: true,
      },
                did: null,
    };

                var isApp = false;

                // android
                if (window.CleverTap) {
                    isApp = true;

      // ios
    } else if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.clevertap) {
                    isApp = true;
    }

                hsci.isApp = isApp;

                hsci.injectScript = function (src, opts) {
                    (function () {
                        var script = document.createElement("script");
                        script.type = "text/javascript";
                        script.async = false;
                        script.src = src;
                        if (opts && typeof opts.id !== "undefined") script.id = opts.id;
                        if (opts && typeof opts.async !== "undefined") script.async = opts.async;
                        if (opts && typeof opts.defer !== "undefined") script.defer = opts.defer;
                        var s = document.getElementsByTagName('script')[0];
                        s.parentNode.insertBefore(script, s);
                    })();
    };
            </script>
            <script type="text/javascript">
                hsci.consent.region = Cookies.get('region');
                hsci.consent.country = Cookies.get('country');

                // Faiyaz - emea region is added for exisiting users with the same region cookie.
                hsci.consent.enabled = hsci.isApp ? false : hsci.consent.region === 'gdpr' || hsci.consent.region === 'emea' || hsci.consent.region === 'ccpa';

                // Faiyaz - emea region is added for exisiting users with the same region cookie.
                if (hsci.consent.enabled && (hsci.consent.region === 'gdpr' || hsci.consent.region === 'emea')) {
      var _alertBox1 = Cookies.get('OptanonConsentAlertBoxClosed');
                var _alertBox2 = Cookies.get('OptanonAlertBoxClosed');
                hsci.consent.taken = _alertBox1 !== undefined || _alertBox2 !== undefined;

                //disable integration scripts
                window.YETT_BLACKLIST = [
                /www\.googletagmanager\.com/,
                /d2r1yp2w7bby2u\.cloudfront\.net/,
                /omniture-.*?\.js/,
                /prebid.*?\.js/,
                /sb\.scorecardresearch\.com/,
                /chartbeat\.js/,
                /chuknu\.sokrati\.com/,
                /cdn\.taboola\.com/
                ];


                document.addEventListener('tms.ready', function () {
                    // ensighten script is loaded and consent is taken so unblock
                    window.yett.unblock();
      });

                window.addEventListener('consent.onetrust', function (e) {
        // Check if __tcfapi is ready to detect event on close
        // @ts-ignore
        if (window.__tcfapi) {
                    __tcfapi('getTCData', 2, function (tcData, success) {
                        if (success) {
                            if (tcData.eventStatus === 'useractioncomplete') {
                                window.location.reload();
                            }
                        }
                    });
        }
      });

    } else {
                    // for non gdpr regions do not load following scipt upfront load after window load
                    window.YETT_BLACKLIST = [
                        /d2r1yp2w7bby2u\.cloudfront\.net/,
                        /omniture-.*?\.js/,
                        /chartbeat\.js/,
                        /chuknu\.sokrati\.com/,
                        /cdn\.taboola\.com/
                    ];

                window.addEventListener('load', function (event) {
                    window.yett.unblock();
      });
    }
            </script>
            <script
                type="text/javascript">!function (t, e) {"object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).yett = {})}(this, function (t) {"use strict"; function o(e, t) { return e && (!t || t !== s) && (!a.blacklist || a.blacklist.some(function (t) { return t.test(e) })) && (!a.whitelist || a.whitelist.every(function (t) { return !t.test(e) })) } function l(t) { var e = t.getAttribute("src"); return a.blacklist && a.blacklist.every(function (t) { return !t.test(e) }) || a.whitelist && a.whitelist.some(function (t) { return t.test(e) }) } var s = "javascript/blocked", a = {blacklist: window.YETT_BLACKLIST, whitelist: window.YETT_WHITELIST }, u = {blacklisted: [] }, f = new MutationObserver(function (t) { for (var e = 0; e < t.length; e++)for (var i = t[e].addedNodes, n = function (t) { var n = i[t]; if (1 === n.nodeType && "SCRIPT" === n.tagName) { var e = n.src, r = n.type; if (o(e, r)) {u.blacklisted.push(n.cloneNode()), n.type = s; n.addEventListener("beforescriptexecute", function t(e) {n.getAttribute("type") === s && e.preventDefault(), n.removeEventListener("beforescriptexecute", t)}), n.parentElement && n.parentElement.removeChild(n) } } }, r = 0; r < i.length; r++)n(r) }); f.observe(document.documentElement, {childList: !0, subtree: !0 }); var c = document.createElement; function p(t) { return function (t) { if (Array.isArray(t)) { for (var e = 0, n = new Array(t.length); e < t.length; e++)n[e] = t[e]; return n } }(t) || function (t) { if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t) }(t) || function () { throw new TypeError("Invalid attempt to spread non-iterable instance") }() } document.createElement = function () { for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)e[n] = arguments[n]; if ("script" !== e[0].toLowerCase()) return c.bind(document).apply(void 0, e); var r = c.bind(document).apply(void 0, e), i = r.setAttribute.bind(r); return Object.defineProperties(r, {src: {get: function () { var t = r.getAttribute("src"); return t && 0 === t.indexOf("//") ? document.location.protocol + t : t || "" }, set: function (t) { return o(t, r.type) && i("type", s), i("src", t), !0 } }, type: {set: function (t) { var e = o(r.src, r.type) ? s : t; return i("type", e), !0 } } }), r.setAttribute = function (t, e) {"type" === t || "src" === t ? r[t] = e : HTMLScriptElement.prototype.setAttribute.call(r, t, e)}, r }; var d = new RegExp("[|\\{ }()[\\]^$+*?.]", "g"); t.unblock = function () { for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++)n[e] = arguments[e]; n.length < 1 ? (a.blacklist = [], a.whitelist = []) : (a.blacklist && (a.blacklist = a.blacklist.filter(function (e) { return n.every(function (t) { return "string" == typeof t ? !e.test(t) : t instanceof RegExp ? e.toString() !== t.toString() : void 0 }) })), a.whitelist && (a.whitelist = [].concat(p(a.whitelist), p(n.map(function (e) { if ("string" == typeof e) { var n = ".*" + e.replace(d, "\$&") + ".*"; if (a.whitelist.every(function (t) { return t.toString() !== n.toString() })) return new RegExp(n) } else if (e instanceof RegExp && a.whitelist.every(function (t) { return t.toString() !== e.toString() })) return e; return null }).filter(Boolean))))); for (var r = document.querySelectorAll('script[type="'.concat(s, '"]')), i = 0; i < r.length; i++) { var o = r[i]; l(o) && (o.type = "application/javascript", u.blacklisted.push(o), o.parentElement.removeChild(o)) } var c = 0; p(u.blacklisted).forEach(function (t, e) { if (l(t)) { var n = document.createElement("script"); n.setAttribute("src", t.src), n.setAttribute("type", "application/javascript"), document.head.appendChild(n), u.blacklisted.splice(e - c, 1), c++ } }), a.blacklist && a.blacklist.length < 1 && f.disconnect() }, Object.defineProperty(t, "__esModule", {value: !0 }) });</script>
            <script type="text/javascript">
                if (!hsci.isApp) {
                    hsci.injectScript('//dcf.espn.com/TWDC-DTCI/prod/Bootstrap.js');
    }
            </script>
            <script type="text/javascript">
                (function (w, d, s, l, i) {
                    w[l] = w[l] || []; w[l].push({
                    'gtm.start':
                new Date().getTime(), event: 'gtm.js'
      }); var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
                '//www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-M2X5VXQ');
            </script>
            <script
                src="https://scripts.webcontentassessor.com/scripts/5fbc0ff32ea96e1471d342a6ea8597d908d377554a0d896b7ed14178ebb5c3e6"></script>
            <script async="" src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
            <script type="text/javascript">window.googletag = window.googletag || {cmd: [] };</script>
            <script type="text/javascript">
                window.pbjs = window.pbjs || {que: [] };
                hsci.injectScript('https://wassets.hscicdn.com/static/js/prebid4.30.0.js', {defer: true });
            </script>
            <script type="text/javascript">
                window._taboola = window._taboola || [];
    // _taboola.push({other: 'auto' });
                !function (e, f, u, i) {
      if (!document.getElementById(i)) {
                    e.async = 1;
                e.src = u;
                e.id = i;
                f.parentNode.insertBefore(e, f);
      }
    }(document.createElement('script'),
                document.getElementsByTagName('script')[0],
                'https://cdn.taboola.com/libtrc/espn-network/loader.js',
                'tb_loader_script');
                if (window.performance && typeof window.performance.mark == 'function') {
                    window.performance.mark('tbl_ic');
    }
            </script>
            <script type="text/javascript">
                if (!hsci.isApp) {
      var clevertap = {event: [], profile: [], account: [], onUserLogin: [], notifications: [], privacy: [] };
                // replace with the CLEVERTAP_ACCOUNT_ID with the actual ACCOUNT ID value from your Dashboard -> Settings page
                clevertap.account.push({"id": "884-7R5-R85Z" });
                clevertap.privacy.push({optOut: false }); //set the flag to true, if the user of the device opts out of sharing their data
                clevertap.privacy.push({useIP: true }); //set the flag to true, if the user agrees to share their IP data
                clevertap.enablePersonalization = true; // enables Personalization
                (function () {
        var wzrk = document.createElement('script');
                wzrk.type = 'text/javascript';
                wzrk.async = true;
                wzrk.src = ('https:' == document.location.protocol ? 'https://d2r1yp2w7bby2u.cloudfront.net' : 'http://static.clevertap.com') + '/js/a.js';
                var s = document.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(wzrk, s);
      })();
    }
            </script>
            <script type="text/javascript">
                hsci.injectScript('https://wassets.hscicdn.com/static/js/omniture-visitor-2.8.2-v1.js', {defer: true });
                hsci.injectScript('https://wassets.hscicdn.com/static/js/omniture-2.8.2.js', {defer: true });
            </script>
            <script type="text/javascript">
                if (!hsci.isApp) {
      var _comscore = _comscore || [];
                _comscore.push({c1: "2", c2: "3000005" });
                (function () {
        var s = document.createElement("script"), el =
                document.getElementsByTagName("script")[0]; s.async = true;
                s.src = (document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js";
                el.parentNode.insertBefore(s, el);
      })();
    }
            </script>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
            <link rel="manifest" href="/static/json/manifest.json" />
            <link rel="shortcut icon" type="image/x-icon" href="https://wassets.hscicdn.com/static/images/favicon.ico" />
            <link href="https://wassets.hscicdn.com/static/images/iphone5_splash.png"
                media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)"
                rel="apple-touch-startup-image" />
            <link href="https://wassets.hscicdn.com/static/images/iphone6_splash.png"
                media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
                rel="apple-touch-startup-image" />
            <link href="https://wassets.hscicdn.com/static/images/iphoneplus_splash.png"
                media="(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)"
                rel="apple-touch-startup-image" />
            <link href="https://wassets.hscicdn.com/static/images/iphonex_splash.png"
                media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)"
                rel="apple-touch-startup-image" />
            <link href="https://wassets.hscicdn.com/static/images/iphonexr_splash.png"
                media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)"
                rel="apple-touch-startup-image" />
            <link href="https://wassets.hscicdn.com/static/images/iphonexsmax_splash.png"
                media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)"
                rel="apple-touch-startup-image" />
            <link href="https://wassets.hscicdn.com/static/images/ipad_splash.png"
                media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)"
                rel="apple-touch-startup-image" />
            <link href="https://wassets.hscicdn.com/static/images/ipadpro1_splash.png"
                media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)"
                rel="apple-touch-startup-image" />
            <link href="https://wassets.hscicdn.com/static/images/ipadpro3_splash.png"
                media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)"
                rel="apple-touch-startup-image" />
            <link href="https://wassets.hscicdn.com/static/images/ipadpro2_splash.png"
                media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)"
                rel="apple-touch-startup-image" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-title" content="ESPN Cricinfo" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black" />
            <meta name="theme-color" content="#03a9f4" />
            <link rel="apple-touch-icon" sizes="72x72" href="https://wassets.hscicdn.com/static/images/ios-72.png"
                type="image/png" />
            <link rel="apple-touch-icon" sizes="120x120" href="https://wassets.hscicdn.com/static/images/ios-120.png"
                type="image/png" />
            <link rel="apple-touch-icon" sizes="144x144" href="https://wassets.hscicdn.com/static/images/ios-144.png"
                type="image/png" />
            <link rel="apple-touch-icon" sizes="180x180" href="https://wassets.hscicdn.com/static/images/ios-180.png"
                type="image/png" />
            <meta name="viewport" content="width=device-width" />
            <meta charSet="utf-8" />
            <title>Full Scorecard of India vs Afghanistan 33rd Match, Group 2 2021/22 - Score Report | ESPNcricinfo.com</title>
            <meta name="title"
                content="Full Scorecard of India vs Afghanistan 33rd Match, Group 2 2021/22 - Score Report | ESPNcricinfo.com" />
            <meta name="description"
                content="Complete Scorecard of India vs Afghanistan 33rd Match, Group 2 2021/22, ICC Men&#x27;s T20 World Cup only on ESPNcricinfo.com. Find the complete scorecard of India vs Afghanistan 33rd Match, Group 2 Online" />
            <meta name="keywords"
                content="India vs Afghanistan 33rd Match, Group 2,cricket scorecard,cricket scoreboard,INDIA vs AFG,reports,ICC Men&#x27;s T20 World Cup" />
            <meta name="robots" content="index,follow" />
            <meta name="googlebot" content="index,follow" />
            <link rel="canonical"
                href="https://www.espncricinfo.com/series/icc-men-s-t20-world-cup-2021-22-1267897/afghanistan-vs-india-33rd-match-group-2-1273744/full-scorecard" />
            <link rel="alternate"
                href="https://www.espncricinfo.com/hindi/series/icc-men-s-t20-world-cup-2021-22-1267897/afghanistan-vs-india-33rd-match-group-2-1273744/full-scorecard"
                hrefLang="hi" />
            <link rel="alternate"
                href="https://www.espncricinfo.com/series/icc-men-s-t20-world-cup-2021-22-1267897/afghanistan-vs-india-33rd-match-group-2-1273744/full-scorecard"
                hrefLang="en" />
            <link rel="alternate"
                href="https://www.espncricinfo.com/series/icc-men-s-t20-world-cup-2021-22-1267897/afghanistan-vs-india-33rd-match-group-2-1273744/full-scorecard"
                hrefLang="x-default" />
            <meta property="og:site_name" content="ESPNcricinfo" />
            <meta property="og:type" content="website" />
            <meta property="og:title"
                content="Full Scorecard of India vs Afghanistan 33rd Match, Group 2 2021/22 - Score Report | ESPNcricinfo.com" />
            <meta property="og:description"
                content="Complete Scorecard of India vs Afghanistan 33rd Match, Group 2 2021/22, ICC Men&#x27;s T20 World Cup only on ESPNcricinfo.com. Find the complete scorecard of India vs Afghanistan 33rd Match, Group 2 Online" />
            <meta property="og:image"
                content="https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/329800/329879.6.jpg" />
            <meta property="og:url"
                content="https://www.espncricinfo.com/series/icc-men-s-t20-world-cup-2021-22-1267897/afghanistan-vs-india-33rd-match-group-2-1273744/full-scorecard" />
            <meta property="fb:app_id" content="260890547115" />
            <meta property="fb:pages" content="104266592953439" />
            <meta name="twitter:site" content="@espncricinfo" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:app:name:iphone" content="ESPNcricinfo" />
            <meta name="twitter:app:id:iphone" content="417408017" />
            <meta name="twitter:app:name:googleplay" content="ESPNcricinfo" />
            <meta name="twitter:app:id:googleplay" content="com.july.cricinfo" />
            <meta name="twitter:title"
                content="Full Scorecard of India vs Afghanistan 33rd Match, Group 2 2021/22 - Score Report | ESPNcricinfo.com" />
            <meta name="twitter:description"
                content="Complete Scorecard of India vs Afghanistan 33rd Match, Group 2 2021/22, ICC Men&#x27;s T20 World Cup only on ESPNcricinfo.com. Find the complete scorecard of India vs Afghanistan 33rd Match, Group 2 Online" />
            <meta name="twitter:image"
                content="https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/329800/329879.6.jpg" />
            <script
                type="application/ld+json">{"@context":"https://schema.org","@type":"Organization","name":"ESPN Digital Media Pvt Ltd","url":"https://www.espncricinfo.com","logo":"https://www.espncricinfo.com/static/images/espncricinfo-logo-full.png","address":{"@type":"PostalAddress","streetAddress":"A block DivvyaSree Chambers, O Shaughnessy Road, Richmond Town","addressLocality":"Bangalore","addressRegion":"India","postalCode":"560025","Telephone":"+91-080-40202742"},"sameAs":["https://www.facebook.com/Cricinfo","https://twitter.com/ESPNcricinfo","https://www.youtube.com/espncricinfo"]}</script>
            <script
                type="application/ld+json">{"@context":"https://schema.org","@graph":[{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"Live Scores","url":"https://www.espncricinfo.com/live-cricket-score"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"Live Scores Home","url":"https://www.espncricinfo.com/live-cricket-score"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"Week view","url":"https://www.espncricinfo.com/ci/engine/match/index.html?view=week"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"Month view","url":"https://www.espncricinfo.com/ci/engine/series/index.html?view=month"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"Season view","url":"https://www.espncricinfo.com/ci/engine/series/index.html?view=season"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"International calendar","url":"https://www.espncricinfo.com/ci/engine/match/index.html?view=calendar"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"Desktop Scoreboard","url":"https://www.espncricinfo.com/ci/engine/match/scores/desktop.html"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"Series","url":"https://www.espncricinfo.com/ci/content/match/fixtures_futures.html"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"T20 World Cup","url":"https://www.espncricinfo.com/series/icc-men-s-t20-world-cup-2021-22-1267897"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"SMA Trophy","url":"https://www.espncricinfo.com/series/syed-mushtaq-ali-trophy-2021-22-1280192"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"WBBL 2021","url":"https://www.espncricinfo.com/series/wbbl-2021-22-1269053"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"Bangladesh v Pakistan","url":"https://www.espncricinfo.com/series/pakistan-in-bangladesh-2021-22-1277971"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"Marsh Cup","url":"https://www.espncricinfo.com/series/the-marsh-cup-2021-22-1270434"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"Ranji Trophy","url":"https://www.espncricinfo.com/series/ranji-trophy-2021-22-1280196"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"Vijay Hazare Trophy","url":"https://www.espncricinfo.com/series/vijay-hazare-trophy-2021-22-1280193"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"World Test Championship","url":"https://www.espncricinfo.com/series/icc-world-test-championship-2021-2023-1268315"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"ICC Women's Championship","url":"https://www.espncricinfo.com/series/icc-women-s-championship-2017-18-2021-1122932"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"Cricket World Cup League 2","url":"https://www.espncricinfo.com/series/world-cup-league-2-2019-2021-22-1196667"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"CWC Challenge League A","url":"https://www.espncricinfo.com/series/cwc-challenge-league-a-2019-2021-22-1200432"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"CWC Challenge League B","url":"https://www.espncricinfo.com/series/challenge-league-group-b-2019-2021-22-1207049"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"ICC CWC Super League","url":"https://www.espncricinfo.com/series/world-cup-super-league-2020-2022-23-1227837"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"-Future series-","url":"https://www.espncricinfo.com/ci/content/match/fixtures_futures.html"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"-Archives-","url":"https://www.espncricinfo.com/ci/engine/series/index.html"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"Teams","url":"https://www.espncricinfo.com/team"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"Australia","url":"https://www.espncricinfo.com/team/australia-2"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"Afghanistan","url":"https://www.espncricinfo.com/team/afghanistan-40"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"Bangladesh","url":"https://www.espncricinfo.com/team/bangladesh-25"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"Ireland","url":"https://www.espncricinfo.com/team/ireland-29"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"England","url":"https://www.espncricinfo.com/team/england-1"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"Namibia","url":"https://www.espncricinfo.com/team/namibia-28"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"India","url":"https://www.espncricinfo.com/team/india-6"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"Nepal","url":"https://www.espncricinfo.com/team/nepal-33"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"New Zealand","url":"https://www.espncricinfo.com/team/new-zealand-5"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"Netherlands","url":"https://www.espncricinfo.com/team/netherlands-15"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"Pakistan","url":"https://www.espncricinfo.com/team/pakistan-7"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"Oman","url":"https://www.espncricinfo.com/team/oman-37"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"South Africa","url":"https://www.espncricinfo.com/team/south-africa-3"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"PNG","url":"https://www.espncricinfo.com/team/papua-new-guinea-20"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"Sri Lanka","url":"https://www.espncricinfo.com/team/sri-lanka-8"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"Scotland","url":"https://www.espncricinfo.com/team/scotland-30"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"West Indies","url":"https://www.espncricinfo.com/team/west-indies-4"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"UAE","url":"https://www.espncricinfo.com/team/united-arab-emirates-27"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"Zimbabwe","url":"https://www.espncricinfo.com/team/zimbabwe-9"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"USA","url":"https://www.espncricinfo.com/team/united-states-of-america-11"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"News","url":"https://www.espncricinfo.com/latest-cricket-news"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"News Home","url":"https://www.espncricinfo.com/latest-cricket-news"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"Covid-19","url":"https://www.espncricinfo.com/subject/covid-19-324"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"Ball-tampering","url":"https://www.espncricinfo.com/subject/ball-tampering-25"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"Technology in cricket","url":"https://www.espncricinfo.com/subject/technology-in-cricket-18"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"Racism","url":"https://www.espncricinfo.com/subject/racism-99"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"Features","url":"https://www.espncricinfo.com/cricket-features"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"Features Home","url":"https://www.espncricinfo.com/cricket-features"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"Writers","url":"https://www.espncricinfo.com/espncricinfo-writers-index"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"Photo galleries","url":"https://www.espncricinfo.com/gallery"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"The Cricket Monthly","url":"https://www.thecricketmonthly.com/"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"Videos","url":"https://www.espncricinfo.com/video"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"Videos Home","url":"https://www.espncricinfo.com/video"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"Dream Big Stories","url":"https://www.espncricinfo.com/video/genre/dream-big-240"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"T20 Time Out","url":"https://www.espncricinfo.com/video/genre/t20-time-out-221"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"Dream Big Champs","url":"https://www.espncricinfo.com/video/genre/champion-of-the-day-241"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"#BreakBoundaries","url":"https://www.espncricinfo.com/video/genre/player-of-the-day-245"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"T20 TimeOut Hindi","url":"https://www.espncricinfo.com/video/genre/t20-time-out-hindi-236"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"Sahi Hai Strategy","url":"https://www.espncricinfo.com/video/genre/sahi-hai-strategy-229"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"Sixer Special","url":"https://www.espncricinfo.com/video/genre/sixers-special-244"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"Six Pack Powerplay","url":"https://www.espncricinfo.com/video/genre/six-pack-powerplay-243"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"Super Fan","url":"https://www.espncricinfo.com/video/genre/superfan-246"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"Haan Ya Naa","url":"https://www.espncricinfo.com/video/genre/haan-ya-naa-247"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"Stunning Moments","url":"https://www.espncricinfo.com/video/genre/stunning-moments-of-the-day-226"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"Fantasy Pick","url":"https://www.espncricinfo.com/video/genre/fantasy-pick-85"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"Polite Enquiries","url":"https://www.espncricinfo.com/video/genre/politeenquiries-119"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"Run Order","url":"https://www.espncricinfo.com/video/genre/run-order-166"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"Newsroom","url":"https://www.espncricinfo.com/video/genre/newsroom-218"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"25 Questions","url":"https://www.espncricinfo.com/video/genre/25-questions-191"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"Hindi Videos","url":"https://www.espncricinfo.com/video/genre/hindi-200"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"News and Analysis","url":"https://www.espncricinfo.com/video/genre/news-and-analysis-34"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"Match Analysis","url":"https://www.espncricinfo.com/video/genre/match-analysis-1"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"Interviews","url":"https://www.espncricinfo.com/video/genre/interviews-9"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"Features","url":"https://www.espncricinfo.com/video/genre/features-46"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"Press Conference","url":"https://www.espncricinfo.com/video/genre/press-conference-2"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"YouTube","url":"https://www.espncricinfo.comhttp://www.youtube.com/ESPNCricinfo"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"Stats","url":"https://www.espncricinfo.com/ci/engine/records/index.html"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"Stats home","url":"https://www.espncricinfo.com/ci/engine/records/index.html"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"AskCricinfo","url":"https://www.espncricinfo.com/ask"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"IPL 2021","url":"https://www.espncricinfo.com/ci/engine/series/1249214.html?view=records"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"Statsguru","url":"https://www.espncricinfo.com/ci/engine/stats/index.html"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"SuperStats","url":"https://www.espncricinfo.com/ci/content/story/genre.html?genre=706"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"2021 records","url":"https://www.espncricinfo.com/ci/engine/records/index.html?id=2021;type=year"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"All records","url":"https://www.espncricinfo.com/ci/engine/records/index.html"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"Players","url":"https://www.espncricinfo.com/player"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"Grounds","url":"https://www.espncricinfo.com/ci/content/ground/index.html"},{"@context":"https://schema.org","@type":"SiteNavigationElement","@id":"#nav-item","name":"Rankings","url":"https://www.espncricinfo.com/rankings/content/page/211271.html"}]}</script>
            <meta name="next-head-count" content="31" />
            <link rel="preload" href="https://wassets.hscicdn.com/_next/static/css/c41236890aced206da4e.css" as="style" />
            <link rel="stylesheet" href="https://wassets.hscicdn.com/_next/static/css/c41236890aced206da4e.css" data-n-g="" />
            <noscript data-n-css=""></noscript>
            <script defer="" nomodule=""
                src="https://wassets.hscicdn.com/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js"></script>
            <script defer=""
                src="https://wassets.hscicdn.com/_next/static/chunks/LanguageEnglish.a34bc35f93b21c94cb12.js"></script>
            <script defer=""
                src="https://wassets.hscicdn.com/_next/static/chunks/TrendingMatches.39d809258eb8f02eccd2.js"></script>
            <script src="https://wassets.hscicdn.com/_next/static/chunks/webpack-a77b5cfdfa880279c5b0.js" defer=""></script>
            <script src="https://wassets.hscicdn.com/_next/static/chunks/framework-9f4513c321d3052d6c6f.js" defer=""></script>
            <script src="https://wassets.hscicdn.com/_next/static/chunks/main-4c53c5e7bca090762a2d.js" defer=""></script>
            <script src="https://wassets.hscicdn.com/_next/static/chunks/pages/_app-e156d83d66ae86dabdcd.js" defer=""></script>
            <script src="https://wassets.hscicdn.com/_next/static/chunks/559-a50ab0c3b4be3742bd4a.js" defer=""></script>
            <script src="https://wassets.hscicdn.com/_next/static/chunks/8613-fd89c942ecad23964f2c.js" defer=""></script>
            <script src="https://wassets.hscicdn.com/_next/static/chunks/pages/match/MatchScoreBoardPage-07756c9e500a699b07c4.js"
                defer=""></script>
            <script src="https://wassets.hscicdn.com/_next/static/vCdk6STAYBKWQqzY56Ld_/_buildManifest.js" defer=""></script>
            <script src="https://wassets.hscicdn.com/_next/static/vCdk6STAYBKWQqzY56Ld_/_ssgManifest.js" defer=""></script>
        </head>

        <body>
            <script>
                (function () {
      const theme = window?.localStorage?.getItem('ci-theme-preference') || 'LIGHT';
                if (theme === 'DARK') {
                    document.body?.classList?.add('dark');
      }
    })()
            </script><noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-M2X5VXQ" height="0" width="0"
                style="display:none;visibility:hidden;"></iframe></noscript>
            <div id="__next">
                <div id="header-wrapper" class="site-header">
                    <div class="container d-none d-lg-block">
                        <div class="row">
                            <div class="col-16">
                                <div class="leagues-container">
                                    <ul class="nav nav-tabs league-tabs">
                                        <li class="nav-item">
                                            <div><span class="nav-link active">Matches<span class="matches-count">(
                                                <!-- -->24
                                                <!-- -->)
                                            </span></span></div>
                                        </li>
                                        <li class="nav-item">
                                            <div><span class="nav-link">T20 World Cup<span class="matches-count">(
                                                <!-- -->2
                                                <!-- -->)
                                            </span></span></div>
                                        </li>
                                        <li class="nav-item">
                                            <div><span class="nav-link">SMA TROPHY<span class="matches-count">(
                                                <!-- -->19
                                                <!-- -->)
                                            </span></span></div>
                                        </li>
                                        <li class="nav-item">
                                            <div><span class="nav-link">Shield<span class="matches-count">(
                                                <!-- -->1
                                                <!-- -->)
                                            </span></span></div>
                                        </li>
                                        <li class="nav-item">
                                            <div><span class="nav-link">Africa Qualifier B<span class="matches-count">(
                                                <!-- -->2
                                                <!-- -->)
                                            </span></span></div>
                                        </li>
                                    </ul>
                                    <div class="featured-scoreboard slick-slider-container">
                                        <style>
                                            .match-info {
                                                padding: .5rem 1rem;
                                            display: block;
                                            position: relative
                  }

                                            @media(max-width: 1023.98px) {
                    .match - info {
                                                padding: 1rem
                    }
                  }

                                            .match-info .classic-label {
                                                text - transform: uppercase;
                                            background: #2b2c2d;
                                            color: #fff;
                                            position: absolute;
                                            right: 8px;
                                            top: 8px;
                                            font-size: 10px;
                                            padding: 1px 4px;
                                            border-radius: 2px
                  }

                                            .match-info .language-icon {
                                                position: absolute;
                                            right: 0;
                                            top: -14px;
                                            color: #6c6d6f;
                                            cursor: pointer;
                                            border-radius: 50%;
                                            padding: .4rem
                  }

                                            .match-info .language-icon.right-24 {
                                                right: 28px
                  }

                                            .match-info .language-icon:hover {
                                                background - color: #f5f5f5
                  }

                                            .match-info .language-icon.collapsed {
                                                top: -28px
                  }

                                            .match-info .subscribe {
                                                position: absolute;
                                            right: 10px;
                                            top: 6px;
                                            color: #dcdddf;
                                            cursor: pointer
                  }

                                            .match-info .subscribe.pad-top {
                                                padding - top: .4rem
                  }

                                            .match-info .subscribe.subscribed {
                                                color: red
                  }

                                            .match-info .status {
                                                color: #2b2c2d;
                                            text-transform: uppercase;
                                            font-family: "BentonSans-Bold", Arial, "Noto Sans", sans-serif;
                                            font-weight: bold;
                                            color: #2b2c2d;
                                            font-size: .75rem;
                                            line-height: 1.5;
                                            letter-spacing: .6px;
                                            text-transform: uppercase
                  }

                                            .match-info .description,
                                            .match-info .status-text {
                                                color: #6c6d6f;
                                            white-space: nowrap;
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                            font-size: .75rem;
                                            line-height: 1.5;
                                            letter-spacing: .1px
                  }

                  .match-info .description>a {
                                                display: inline
                  }

                                            .match-info .teams {
                                                margin - top: 7px
                  }

                                            .match-info .team {
                                                display: flex;
                                            justify-content: space-between;
                                            margin-bottom: .5rem;
                                            margin-top: .25rem;
                                            align-items: center;
                                            color: #2b2c2d;
                                            font-family: "BentonSans-Bold", Arial, "Noto Sans", sans-serif
                  }

                                            .match-info .team .name-detail,
                                            .match-info .team .score-detail {
                                                display: inline-flex;
                                            line-height: 1.5;
                                            letter-spacing: .1px;
                                            align-items: center;
                                            font-size: 1rem;
                                            white-space: nowrap;
                                            opacity: 1
                  }

                                            @media(max-width: 1023.98px) {

                    .match - info.team.name - detail,
                    .match - info.team.score - detail {
                                                font - size: .875rem
                    }
                  }

                                            .match-info .team .fadeIn-appear,
                                            .match-info .team .fadeIn-enter,
                                            .match-info .team .fadeIn-exit {
                                                opacity: 0
                  }

                                            .match-info .team .fadeIn-appear-active,
                                            .match-info .team .fadeIn-enter-active,
                                            .match-info .team .fadeIn-exit-active {
                                                opacity: 1;
                                            transition: opacity 2s
                  }

                                            .match-info .team .fadeIn-appear-done,
                                            .match-info .team .fadeIn-enter-done,
                                            .match-info .team .fadeIn-exit-done {
                                                opacity: 1
                  }

                                            .match-info .team .name-detail .flag {
                                                width: 20px;
                                            height: 20px;
                                            margin-right: .5rem;
                                            border-radius: .25rem;
                                            border: none;
                                            position: relative;
                                            top: -1.5px
                  }

                                            .match-info .team .name-detail .name {
                                                margin: 0
                  }

                                            .match-info .team .name-detail .name-link {
                                                color: #2b2c2d
                  }

                                            .match-info .team .name-detail .winner-icon {
                                                color: #21cc53
                  }

                                            .match-info .team .name-detail .batting-indicator {
                                                margin - left: 5px;
                                            width: 5px;
                                            height: 5px;
                                            border-radius: 50%;
                                            background-color: #d00
                  }

                                            @media(max-width: 1023.98px) {
                    .match - info.team.name - detail.batting - indicator {
                                                width: 5px;
                                            height: 5px
                    }
                  }

                                            .match-info .team .score-detail .score-info {
                                                position: relative;
                                            margin-right: 5px;
                                            font-size: .75rem
                  }

                                            .match-info .team-gray .name,
                                            .match-info .team-gray .score-info,
                                            .match-info .team-gray .score {
                                                color: #6c6d6f;
                                            font-weight: 400;
                                            font-family: "BentonSans", Arial, "Noto Sans", sans-serif
                  }

                                            .match-info .team-gray .flag {
                                                opacity: .5
                  }

                                            .match-info-with-icon .status {
                                                width: 92%
                  }

                                            .match-info-with-icon .classic-label {
                                                right: 28px
                  }

                                            .match-info-FEED {
                                                padding: .5rem 1.5rem;
                                            border-bottom: 1px solid #edeef0
                  }

                                            .match-info-FEED .subscribe {
                                                right: 1.4rem
                  }

                                            @media(max-width: 1023.98px) {
                    .match - info - FEED {
                                                padding: .5rem 1rem
                    }

                                            .match-info-FEED .subscribe {
                                                right: .9rem
                    }
                  }

                                            .match-info-HSB {
                                                padding: .5rem;
                                            height: 100%;
                                            min-height: 124px;
                                            width: 288px;
                                            box-shadow: 1px 1px 4px rgba(0, 0, 0, .25);
                                            border-radius: .25rem;
                                            overflow: hidden;
                                            display: flex;
                                            flex-direction: column;
                                            justify-content: space-between
                  }

                                            .match-info-HSB .subscribe {
                                                top: 6px;
                                            right: 6px
                  }

                                            .match-info-HSB .status {
                                                letter - spacing: 0;
                                            font-size: 10px;
                                            white-space: nowrap;
                                            text-overflow: ellipsis;
                                            overflow: hidden
                  }

                                            .match-info-HSB .status .hsb-description {
                                                text - transform: capitalize;
                                            color: #48494a;
                                            font-family: "BentonSans", Arial, "Noto Sans", sans-serif
                  }

                                            .match-info-HSB .description {
                                                margin - bottom: .25rem;
                                            margin-top: 1px;
                                            width: 95%;
                                            font-size: .625rem;
                                            line-height: 1.6;
                                            letter-spacing: 0
                  }

                                            .match-info-HSB .teams {
                                                margin - top: 0
                  }

                                            .match-info-HSB .team {
                                                margin - bottom: 8px
                  }

                                            .match-info-HSB .team .name {
                                                text - transform: uppercase;
                                            font-size: 10px;
                                            letter-spacing: 0
                  }

                                            .match-info-HSB .team .score,
                                            .match-info-HSB .team .score-info {
                                                font - size: 12px;
                                            letter-spacing: 0
                  }

                                            .match-info-HSB .team .score-detail .score-info {
                                                font - size: 10px;
                                            color: #48494a;
                                            font-family: "BentonSans", Arial, "Noto Sans", sans-serif
                  }

                                            .match-info-HSB .countdown {
                                                padding: .25rem .75rem;
                                            float: right;
                                            background-color: #f1f2f3;
                                            margin: 0 -0.75rem -0.5rem -0.75rem;
                                            font-size: .625rem;
                                            line-height: 1.6;
                                            float: right;
                                            padding-top: 0;
                                            margin-right: .05rem
                  }

                                            .match-info-HSB .status-text {
                                                font - size: .625rem;
                                            line-height: 1.6;
                                            letter-spacing: 0;
                                            font-family: "BentonSans-Medium", Arial, "Noto Sans", sans-serif;
                                            font-weight: normal;
                                            color: #48494a;
                                            padding: 0 .75rem;
                                            margin: 0 -0.75rem 0 -0.75rem
                  }

                                            .match-info-HSB .status-text .red {
                                                color: #d00 !important
                  }

                                            .match-info-HSB .hsb-series-links {
                                                display: flex;
                                            flex-direction: row;
                                            align-items: center;
                                            font-size: 10px;
                                            margin-top: 8px
                  }

                                            .match-info-HSB .hsb-series-links .hsb-link {
                                                display: inline-flex;
                                            border: 1px solid #dcdddf;
                                            border-radius: 4px;
                                            color: #000;
                                            flex-basis: 0;
                                            flex-grow: 1;
                                            justify-content: center;
                                            padding: 6px 0
                  }

                                            .match-info-HSB .hsb-series-links .hsb-link+.hsb-link {
                                                margin - left: 4px;
                                            text-align: center
                  }

                                            .match-info-link-SIDEBAR {
                                                width: 100%;
                                            border-bottom: 1px solid #edeef0
                  }

                                            .match-info-SIDEBAR,
                                            .match-info-SLIDING_CARD {
                                                padding: 5px 0;
                                            margin-bottom: 0
                  }

                                            .match-info-SIDEBAR .subscribe,
                                            .match-info-SLIDING_CARD .subscribe {
                                                right: 4px;
                                            top: 4px
                  }

                                            .match-info-SIDEBAR .status,
                                            .match-info-SLIDING_CARD .status {
                                                font - size: 10px;
                                            text-transform: uppercase;
                                            font-family: "BentonSans-Medium", Arial, "Noto Sans", sans-serif;
                                            font-weight: normal;
                                            letter-spacing: normal
                  }

                                            .match-info-SIDEBAR .countdown,
                                            .match-info-SLIDING_CARD .countdown {
                                                padding: .25rem .75rem;
                                            margin: 0 -0.75rem -0.5rem -0.75rem;
                                            font-size: .6rem;
                                            letter-spacing: 0;
                                            float: right;
                                            padding-top: 0;
                                            margin-right: .05rem
                  }

                                            .match-info-SIDEBAR .description,
                                            .match-info-SLIDING_CARD .description,
                                            .match-info-SIDEBAR .status-text,
                                            .match-info-SLIDING_CARD .status-text {
                                                font - size: 10px;
                                            color: #a5a6a7;
                                            letter-spacing: .3px;
                                            font-size: .625rem;
                                            line-height: 1.4;
                                            letter-spacing: .8px;
                                            padding-top: 2px
                  }

                                            .match-info-SIDEBAR .status-text,
                                            .match-info-SLIDING_CARD .status-text {
                                                padding - top: 5px;
                                            margin-bottom: .5rem
                  }

                                            .match-info-SIDEBAR .team,
                                            .match-info-SLIDING_CARD .team {
                                                padding: 2px 0;
                                            margin: 0
                  }

                                            .match-info-SIDEBAR .team .flag,
                                            .match-info-SLIDING_CARD .team .flag {
                                                margin - right: 6px;
                                            top: -2px
                  }

                                            .match-info-SIDEBAR .team .name,
                                            .match-info-SLIDING_CARD .team .name,
                                            .match-info-SIDEBAR .team .score,
                                            .match-info-SLIDING_CARD .team .score,
                                            .match-info-SIDEBAR .team .score-info,
                                            .match-info-SLIDING_CARD .team .score-info {
                                                font - size: 12px
                  }

                                            .match-info-SIDEBAR .team .score-detail,
                                            .match-info-SLIDING_CARD .team .score-detail {
                                                white - space: nowrap;
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                            display: inline-block;
                                            width: 60%;
                                            text-align: right
                  }

                                            .match-info-SLIDING_CARD {
                                                min - width: 280px;
                                            max-width: 300px;
                                            border-right: 1px solid #edeef0;
                                            overflow: hidden;
                                            padding: .5rem 1rem;
                                            padding-top: 10px;
                                            border-bottom: none
                  }

                                            .match-info-MATCH {
                                                padding: 0
                  }

                                            @media(min-width: 1024px) {
                    .match - info - MATCH.container - padding {
                                                padding - left: calc((100vw - 960px !important) / 2) !important;
                                            padding-right: calc((100vw - 960px !important) / 2) !important
                    }
                  }

                                            @media(min-width: 1280px) {
                    .match - info - MATCH.container - padding {
                                                padding - left: calc((100vw - 1240px !important) / 2) !important;
                                            padding-right: calc((100vw - 1240px !important) / 2) !important
                    }
                  }

                                            .match-info-MATCH .subscribe {
                                                right: calc(-5px + 0.4rem);
                                            top: -14px
                  }

                                            @media(max-width: 1023.98px) {
                    .match - info - MATCH.subscribe {
                                                right: .4rem;
                                            top: -8px
                    }

                                            .match-info-MATCH .subscribe.collapsed {
                                                top: -18px
                    }
                  }

                                            .match-info-MATCH .status {
                                                color: #2b2c2d;
                                            font-weight: 700;
                                            font-family: "BentonSans", Arial, "Noto Sans", sans-serif;
                                            font-size: .875rem
                  }

                                            .match-info-MATCH .description {
                                                font - size: .875rem;
                                            color: #48494a
                  }

                                            .match-info-MATCH .teams {
                                                margin: 15px 0
                  }

                                            .match-info-MATCH .has-rhs {
                                                display: flex;
                                            align-items: center;
                                            justify-content: space-between
                  }

                                            .match-info-MATCH .prematch-status {
                                                text - align: right
                  }

                                            .match-info-MATCH .prematch-status .status {
                                                font - size: 1.25rem;
                                            text-transform: lowercase;
                                            width: auto
                  }

                                            @media(max-width: 1023.98px) {
                    .match - info - MATCH.prematch - status.status {
                                                font - size: 1rem
                    }
                  }

                                            .match-info-MATCH .prematch-status .description {
                                                font - size: .875rem
                  }

                                            @media(max-width: 1023.98px) {
                    .match - info - MATCH.prematch - status.description {
                                                font - size: .75rem
                    }
                  }

                                            .match-info-MATCH .countdown {
                                                padding: .25rem .75rem;
                                            float: right;
                                            margin: 0 -0.75rem -0.5rem -0.75rem;
                                            font-size: .625rem;
                                            line-height: 1.6;
                                            float: right;
                                            padding-top: 0;
                                            margin-right: .05rem
                  }

                                            .match-info-MATCH .team {
                                                margin - bottom: 8px
                  }

                                            .match-info-MATCH .team .name-detail,
                                            .match-info-MATCH .team .score-detail {
                                                font - size: 18px !important
                  }

                                            .match-info-MATCH .team .name,
                                            .match-info-MATCH .team .score {
                                                font - family: "BentonSans-Bold", Arial, "Noto Sans", sans-serif !important
                  }

                                            .match-info-MATCH .team .name-detail .name:hover {
                                                color: #0278bb !important
                  }

                                            .match-info-MATCH .team .name-detail .flag {
                                                width: 32px;
                                            height: auto;
                                            top: 0
                  }

                                            .match-info-MATCH .team .name-detail .winner-icon {
                                                font - size: 18px
                  }

                                            .match-info-MATCH .team .name-detail .batting-indicator {
                                                width: 8px;
                                            height: 8px;
                                            margin-left: 10px
                  }

                                            .match-info-MATCH .team .score-detail .score-info {
                                                font - size: .875rem;
                                            color: #48494a;
                                            font-family: "BentonSans", Arial, "Noto Sans", sans-serif;
                                            margin-right: 8px
                  }

                                            .match-info-MATCH .team-gray .name,
                                            .match-info-MATCH .team-gray .score {
                                                color: #a5a6a7
                  }

                                            .match-info-MATCH .team-gray .score-detail .score-info {
                                                color: #a5a6a7
                  }

                                            .match-info-MATCH .status-text {
                                                color: #2b2c2d;
                                            font-size: .875rem
                  }

                                            @media(max-width: 1023.98px) {

                    .match - info - MATCH.status,
                    .match - info - MATCH.description {
                                                font - size: 10px
                    }

                                            .match-info-MATCH .status.has-icon,
                                            .match-info-MATCH .description.has-icon {
                                                max - width: 85%
                    }

                                            .match-info-MATCH .teams {
                                                margin: 12px 0
                    }

                                            .match-info-MATCH .teams.collapsed {
                                                margin: 0
                    }

                                            .match-info-MATCH .team .name-detail .flag {
                                                width: 24px;
                                            height: 24px
                    }

                                            .match-info-MATCH .team .score-detail .score-info {
                                                font - size: 10px
                    }

                                            .match-info-MATCH .status-text {
                                                font - size: 12px
                    }
                  }

                                            .match-info-link-FIXTURES {
                                                width: 100%
                  }

                                            .match-info-FIXTURES {
                                                padding: .5rem 1.5rem
                  }

                                            @media(max-width: 1023.98px) {
                    .match - info - FIXTURES {
                                                padding: .5rem 1rem
                    }
                  }

                                            .match-info-FIXTURES .status,
                                            .match-info-FIXTURES .status-text,
                                            .match-info-FIXTURES .description {
                                                font - size: .625rem
                  }

                                            .match-info-FIXTURES .status .red,
                                            .match-info-FIXTURES .status-text .red,
                                            .match-info-FIXTURES .description .red {
                                                color: #d00 !important
                  }

                                            .match-info-FIXTURES .name,
                                            .match-info-FIXTURES .score {
                                                font - size: .875rem !important
                  }

                                            .match-info-FIXTURES .countdown {
                                                padding: .25rem .75rem;
                                            float: right;
                                            margin: 0 -0.75rem -0.5rem -0.75rem;
                                            font-size: .625rem;
                                            line-height: 1.6;
                                            float: right;
                                            padding-top: 0;
                                            margin-right: .05rem
                  }

                                            .bet365-scorecard {
                                                padding: .5rem 1.5rem
                  }

                                            .custom-toast {
                                                width: 100%;
                                            padding: 0;
                                            position: fixed;
                                            z-index: 1000;
                                            display: flex;
                                            justify-content: center;
                                            align-items: center;
                                            top: 50px;
                                            left: 0;
                                            right: 0;
                                            z-index: 100;
                                            transform: translateY(-100px);
                                            animation: slideDown 3s
                  }

                                            .custom-toast div {
                                                padding: 6px 12px;
                                            width: 200px;
                                            box-shadow: 1px 1px 6px rgba(0, 0, 0, .16);
                                            border-radius: 4px;
                                            color: #fff;
                                            font-family: "BentonSans-Medium", Arial, "Noto Sans", sans-serif;
                                            font-size: 1rem;
                                            text-align: center;
                                            background: rgba(0, 0, 0, .8)
                  }

                                            @keyframes slideDown {

                                                0 %,
                                                100 % {
                      - webkit - transform: translateY(-100px)
                    }

                                            10%,
                                            90% {
                                                -webkit - transform: translateY(0px)
                    }
                  }

                                            .custom-toast-pin {
                                                animation: slideDown 5s !important
                  }

                                            .custom-toast-pin div {
                                                width: 90% !important
                  }
                                        </style>
                                        <div>
                                            <div>
                                                <div class="slick-slider slick-initialized" dir="ltr"><button type="button" data-role="none"
                                                    class="slick-arrow slick-prev slick-disabled" style="display:block">
                                                    <!-- -->Previous
                                                </button>
                                                    <div class="slick-list">
                                                        <div class="slick-track" style="width:0px;left:0px">
                                                            <div style="outline:none" data-index="0" class="slick-slide slick-active slick-current"
                                                                tabindex="-1" aria-hidden="false">
                                                                <div>
                                                                    <div tabindex="-1" style="width:100%;display:inline-block">
                                                                        <div class="ad-placeholder presbyHeader ad-presbyheader-722309"
                                                                            style="min-width:10%;min-height:124px"></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div style="outline:none" data-index="1" class="slick-slide slick-active" tabindex="-1"
                                                                aria-hidden="false">
                                                                <div>
                                                                    <div class="scorecard-container" tabindex="-1" style="width:100%;display:inline-block"><a
                                                                        data-hover="" class="match-info-link-HSB" target="_self" rel=""
                                                                        href="/series/icc-men-s-t20-world-cup-2021-22-1267897/namibia-vs-new-zealand-36th-match-group-2-1273747/match-preview">
                                                                        <div>
                                                                            <div class="match-info match-info-HSB match-info-with-icon card scorecard">
                                                                                <div class="status status-hindi"><span>today, 10:00 am</span><span
                                                                                    class="hsb-description"><strong> •
                                                                                        <!-- -->36th Match, Group 2<span class="text-uppercase"> •
                                                                                            <!-- -->T20I
                                                                                        </span>
                                                                                    </strong> •
                                                                                    <!-- -->
                                                                                    <!-- -->Sharjah
                                                                                </span></div>
                                                                                <div class="teams">
                                                                                    <div>
                                                                                        <div class="team">
                                                                                            <div class="name-detail"><img
                                                                                                src="https://wassets.hscicdn.com/static/images/lazyimage.svg"
                                                                                                alt="Namibia Flag" class="img img-lazy flag" />
                                                                                                <p class="name">Namibia</p>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="team">
                                                                                            <div class="name-detail"><img
                                                                                                src="https://wassets.hscicdn.com/static/images/lazyimage.svg"
                                                                                                alt="New Zealand Flag" class="img img-lazy flag" />
                                                                                                <p class="name">New Zealand</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="status-text"><span>Match yet to begin</span></div>
                                                                                <div class="hsb-series-links"><a data-hover="Schedule" class="hsb-link"
                                                                                    target="_self" rel=""
                                                                                    href="/series/icc-men-s-t20-world-cup-2021-22-1267897/match-schedule-fixtures">Schedule</a><a
                                                                                        data-hover="Points Table" class="hsb-link" target="_self" rel=""
                                                                                        href="/series/icc-men-s-t20-world-cup-2021-22-1267897/points-table-standings">Points
                                                                                        Table</a><a data-hover="Videos" class="hsb-link" target="_self" rel=""
                                                                                            href="/series/icc-men-s-t20-world-cup-2021-22-1267897/videos">Videos</a></div>
                                                                            </div>
                                                                        </div>
                                                                    </a></div>
                                                                </div>
                                                            </div>
                                                            <div style="outline:none" data-index="2" class="slick-slide slick-active" tabindex="-1"
                                                                aria-hidden="false">
                                                                <div>
                                                                    <div class="scorecard-container" tabindex="-1" style="width:100%;display:inline-block"><a
                                                                        data-hover="" class="match-info-link-HSB" target="_self" rel=""
                                                                        href="/series/icc-men-s-t20-world-cup-2021-22-1267897/india-vs-scotland-37th-match-group-2-1273748/match-preview">
                                                                        <div>
                                                                            <div class="match-info match-info-HSB match-info-with-icon card scorecard">
                                                                                <div class="status status-hindi"><span>today, 2:00 pm</span><span
                                                                                    class="hsb-description"><strong> •
                                                                                        <!-- -->37th Match, Group 2<span class="text-uppercase"> •
                                                                                            <!-- -->T20I
                                                                                        </span>
                                                                                    </strong> •
                                                                                    <!-- -->
                                                                                    <!-- -->Dubai (DSC)
                                                                                </span></div>
                                                                                <div class="teams">
                                                                                    <div>
                                                                                        <div class="team">
                                                                                            <div class="name-detail"><img
                                                                                                src="https://wassets.hscicdn.com/static/images/lazyimage.svg"
                                                                                                alt="India Flag" class="img img-lazy flag" />
                                                                                                <p class="name">India</p>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="team">
                                                                                            <div class="name-detail"><img
                                                                                                src="https://wassets.hscicdn.com/static/images/lazyimage.svg"
                                                                                                alt="Scotland Flag" class="img img-lazy flag" />
                                                                                                <p class="name">Scotland</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="status-text"><span>Match yet to begin</span></div>
                                                                                <div class="hsb-series-links"><a data-hover="Schedule" class="hsb-link"
                                                                                    target="_self" rel=""
                                                                                    href="/series/icc-men-s-t20-world-cup-2021-22-1267897/match-schedule-fixtures">Schedule</a><a
                                                                                        data-hover="Points Table" class="hsb-link" target="_self" rel=""
                                                                                        href="/series/icc-men-s-t20-world-cup-2021-22-1267897/points-table-standings">Points
                                                                                        Table</a><a data-hover="Videos" class="hsb-link" target="_self" rel=""
                                                                                            href="/series/icc-men-s-t20-world-cup-2021-22-1267897/videos">Videos</a></div>
                                                                            </div>
                                                                        </div>
                                                                    </a></div>
                                                                </div>
                                                            </div>
                                                            <div style="outline:none" data-index="3" class="slick-slide slick-active" tabindex="-1"
                                                                aria-hidden="false">
                                                                <div>
                                                                    <div class="scorecard-container" tabindex="-1" style="width:100%;display:inline-block"><a
                                                                        data-hover="" class="match-info-link-HSB" target="_self" rel=""
                                                                        href="/series/syed-mushtaq-ali-trophy-2021-22-1280192/punjab-vs-maharashtra-elite-group-a-1280217/live-cricket-score">
                                                                        <div>
                                                                            <div class="match-info match-info-HSB match-info-with-icon card scorecard">
                                                                                <div class="status status-hindi"><span>today, 3:00 am</span><span
                                                                                    class="hsb-description"><strong> •
                                                                                        <!-- -->Elite, Group A<span class="text-uppercase"> •
                                                                                            <!-- -->T20
                                                                                        </span>
                                                                                    </strong> •
                                                                                    <!-- -->
                                                                                    <!-- -->Lucknow
                                                                                </span></div>
                                                                                <div class="teams">
                                                                                    <div>
                                                                                        <div class="team">
                                                                                            <div class="name-detail"><img
                                                                                                src="https://wassets.hscicdn.com/static/images/lazyimage.svg"
                                                                                                alt="Punjab Flag" class="img img-lazy flag" />
                                                                                                <p class="name">Punjab</p>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="team">
                                                                                            <div class="name-detail"><img
                                                                                                src="https://wassets.hscicdn.com/static/images/lazyimage.svg"
                                                                                                alt="Maharashtra Flag" class="img img-lazy flag" />
                                                                                                <p class="name">Maharashtra</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="status-text"><span>Match starts in <b> 41 </b> mins</span></div>
                                                                                <div class="hsb-series-links"><a data-hover="Schedule" class="hsb-link"
                                                                                    target="_self" rel=""
                                                                                    href="/series/syed-mushtaq-ali-trophy-2021-22-1280192/match-schedule-fixtures">Schedule</a><a
                                                                                        data-hover="Points Table" class="hsb-link" target="_self" rel=""
                                                                                        href="/series/syed-mushtaq-ali-trophy-2021-22-1280192/points-table-standings">Points
                                                                                        Table</a></div>
                                                                            </div>
                                                                        </div>
                                                                    </a></div>
                                                                </div>
                                                            </div>
                                                            <div style="outline:none" data-index="4" class="slick-slide" tabindex="-1" aria-hidden="true">
                                                                <div>
                                                                    <div class="scorecard-container" tabindex="-1" style="width:100%;display:inline-block"><a
                                                                        data-hover="" class="match-info-link-HSB" target="_self" rel=""
                                                                        href="/series/syed-mushtaq-ali-trophy-2021-22-1280192/jammu-kashmir-vs-rajasthan-elite-group-c-1280223/live-cricket-score">
                                                                        <div>
                                                                            <div class="match-info match-info-HSB match-info-with-icon card scorecard">
                                                                                <div class="status status-hindi"><span>today, 3:00 am</span><span
                                                                                    class="hsb-description"><strong> •
                                                                                        <!-- -->Elite, Group C<span class="text-uppercase"> •
                                                                                            <!-- -->T20
                                                                                        </span>
                                                                                    </strong> •
                                                                                    <!-- -->
                                                                                    <!-- -->Vadodara
                                                                                </span></div>
                                                                                <div class="teams">
                                                                                    <div>
                                                                                        <div class="team">
                                                                                            <div class="name-detail"><img
                                                                                                src="https://wassets.hscicdn.com/static/images/lazyimage.svg"
                                                                                                alt="Jammu &amp; Kashmir Flag" class="img img-lazy flag" />
                                                                                                <p class="name">Jammu &amp; Kashmir</p>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="team">
                                                                                            <div class="name-detail"><img
                                                                                                src="https://wassets.hscicdn.com/static/images/lazyimage.svg"
                                                                                                alt="Rajasthan Flag" class="img img-lazy flag" />
                                                                                                <p class="name">Rajasthan</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="status-text"><span>Match starts in <b> 41 </b> mins</span></div>
                                                                                <div class="hsb-series-links"><a data-hover="Schedule" class="hsb-link"
                                                                                    target="_self" rel=""
                                                                                    href="/series/syed-mushtaq-ali-trophy-2021-22-1280192/match-schedule-fixtures">Schedule</a><a
                                                                                        data-hover="Points Table" class="hsb-link" target="_self" rel=""
                                                                                        href="/series/syed-mushtaq-ali-trophy-2021-22-1280192/points-table-standings">Points
                                                                                        Table</a></div>
                                                                            </div>
                                                                        </div>
                                                                    </a></div>
                                                                </div>
                                                            </div>
                                                            <div style="outline:none" data-index="5" class="slick-slide" tabindex="-1" aria-hidden="true">
                                                                <div>
                                                                    <div class="scorecard-container" tabindex="-1" style="width:100%;display:inline-block"><a
                                                                        data-hover="" class="match-info-link-HSB" target="_self" rel=""
                                                                        href="/series/syed-mushtaq-ali-trophy-2021-22-1280192/chhattisgarh-vs-karnataka-elite-group-b-1280220/live-cricket-score">
                                                                        <div>
                                                                            <div class="match-info match-info-HSB match-info-with-icon card scorecard">
                                                                                <div class="status status-hindi"><span>today, 2:30 am</span><span
                                                                                    class="hsb-description"><strong> •
                                                                                        <!-- -->Elite, Group B<span class="text-uppercase"> •
                                                                                            <!-- -->T20
                                                                                        </span>
                                                                                    </strong> •
                                                                                    <!-- -->
                                                                                    <!-- -->Guwahati
                                                                                </span></div>
                                                                                <div class="teams">
                                                                                    <div>
                                                                                        <div class="team">
                                                                                            <div class="name-detail"><img
                                                                                                src="https://wassets.hscicdn.com/static/images/lazyimage.svg"
                                                                                                alt="Chhattisgarh Flag" class="img img-lazy flag" />
                                                                                                <p class="name">Chhattisgarh</p>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="team">
                                                                                            <div class="name-detail"><img
                                                                                                src="https://wassets.hscicdn.com/static/images/lazyimage.svg"
                                                                                                alt="Karnataka Flag" class="img img-lazy flag" />
                                                                                                <p class="name">Karnataka</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="status-text"><span>Match yet to begin</span></div>
                                                                                <div class="hsb-series-links"><a data-hover="Schedule" class="hsb-link"
                                                                                    target="_self" rel=""
                                                                                    href="/series/syed-mushtaq-ali-trophy-2021-22-1280192/match-schedule-fixtures">Schedule</a><a
                                                                                        data-hover="Points Table" class="hsb-link" target="_self" rel=""
                                                                                        href="/series/syed-mushtaq-ali-trophy-2021-22-1280192/points-table-standings">Points
                                                                                        Table</a></div>
                                                                            </div>
                                                                        </div>
                                                                    </a></div>
                                                                </div>
                                                            </div>
                                                            <div style="outline:none" data-index="6" class="slick-slide" tabindex="-1" aria-hidden="true">
                                                                <div>
                                                                    <div class="scorecard-container" tabindex="-1" style="width:100%;display:inline-block"><a
                                                                        data-hover="" class="match-info-link-HSB" target="_self" rel=""
                                                                        href="/series/syed-mushtaq-ali-trophy-2021-22-1280192/madhya-pradesh-vs-railways-elite-group-d-1280226/live-cricket-score">
                                                                        <div>
                                                                            <div class="match-info match-info-HSB match-info-with-icon card scorecard">
                                                                                <div class="status status-hindi"><span>today, 3:00 am</span><span
                                                                                    class="hsb-description"><strong> •
                                                                                        <!-- -->Elite, Group D<span class="text-uppercase"> •
                                                                                            <!-- -->T20
                                                                                        </span>
                                                                                    </strong> •
                                                                                    <!-- -->
                                                                                    <!-- -->Delhi
                                                                                </span></div>
                                                                                <div class="teams">
                                                                                    <div>
                                                                                        <div class="team">
                                                                                            <div class="name-detail"><img
                                                                                                src="https://wassets.hscicdn.com/static/images/lazyimage.svg"
                                                                                                alt="Madhya Pradesh Flag" class="img img-lazy flag" />
                                                                                                <p class="name">Madhya Pradesh</p>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="team">
                                                                                            <div class="name-detail"><img
                                                                                                src="https://wassets.hscicdn.com/static/images/lazyimage.svg"
                                                                                                alt="Railways Flag" class="img img-lazy flag" />
                                                                                                <p class="name">Railways</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="status-text"><span>Match yet to begin</span></div>
                                                                                <div class="hsb-series-links"><a data-hover="Schedule" class="hsb-link"
                                                                                    target="_self" rel=""
                                                                                    href="/series/syed-mushtaq-ali-trophy-2021-22-1280192/match-schedule-fixtures">Schedule</a><a
                                                                                        data-hover="Points Table" class="hsb-link" target="_self" rel=""
                                                                                        href="/series/syed-mushtaq-ali-trophy-2021-22-1280192/points-table-standings">Points
                                                                                        Table</a></div>
                                                                            </div>
                                                                        </div>
                                                                    </a></div>
                                                                </div>
                                                            </div>
                                                            <div style="outline:none" data-index="7" class="slick-slide" tabindex="-1" aria-hidden="true">
                                                                <div>
                                                                    <div class="scorecard-container" tabindex="-1" style="width:100%;display:inline-block"><a
                                                                        data-hover="" class="match-info-link-HSB" target="_self" rel=""
                                                                        href="/series/syed-mushtaq-ali-trophy-2021-22-1280192/meghalaya-vs-sikkim-plate-group-1280232/live-cricket-score">
                                                                        <div>
                                                                            <div class="match-info match-info-HSB match-info-with-icon card scorecard">
                                                                                <div class="status status-hindi"><span>today, 3:00 am</span><span
                                                                                    class="hsb-description"><strong> •
                                                                                        <!-- -->Plate Group<span class="text-uppercase"> •
                                                                                            <!-- -->T20
                                                                                        </span>
                                                                                    </strong> •
                                                                                    <!-- -->
                                                                                    <!-- -->Mulapadu
                                                                                </span></div>
                                                                                <div class="teams">
                                                                                    <div>
                                                                                        <div class="team">
                                                                                            <div class="name-detail"><img
                                                                                                src="https://wassets.hscicdn.com/static/images/lazyimage.svg"
                                                                                                alt="Meghalaya Flag" class="img img-lazy flag" />
                                                                                                <p class="name">Meghalaya</p>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="team">
                                                                                            <div class="name-detail"><img
                                                                                                src="https://wassets.hscicdn.com/static/images/lazyimage.svg"
                                                                                                alt="Sikkim Flag" class="img img-lazy flag" />
                                                                                                <p class="name">Sikkim</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="status-text"><span>Match yet to begin</span></div>
                                                                                <div class="hsb-series-links"><a data-hover="Schedule" class="hsb-link"
                                                                                    target="_self" rel=""
                                                                                    href="/series/syed-mushtaq-ali-trophy-2021-22-1280192/match-schedule-fixtures">Schedule</a><a
                                                                                        data-hover="Points Table" class="hsb-link" target="_self" rel=""
                                                                                        href="/series/syed-mushtaq-ali-trophy-2021-22-1280192/points-table-standings">Points
                                                                                        Table</a></div>
                                                                            </div>
                                                                        </div>
                                                                    </a></div>
                                                                </div>
                                                            </div>
                                                            <div style="outline:none" data-index="8" class="slick-slide" tabindex="-1" aria-hidden="true">
                                                                <div>
                                                                    <div class="scorecard-container" tabindex="-1" style="width:100%;display:inline-block"><a
                                                                        data-hover="" class="match-info-link-HSB" target="_self" rel=""
                                                                        href="/series/syed-mushtaq-ali-trophy-2021-22-1280192/arunachal-pradesh-vs-manipur-plate-group-1280234/live-cricket-score">
                                                                        <div>
                                                                            <div class="match-info match-info-HSB match-info-with-icon card scorecard">
                                                                                <div class="status status-hindi"><span>today, 3:00 am</span><span
                                                                                    class="hsb-description"><strong> •
                                                                                        <!-- -->Plate Group<span class="text-uppercase"> •
                                                                                            <!-- -->T20
                                                                                        </span>
                                                                                    </strong> •
                                                                                    <!-- -->
                                                                                    <!-- -->Mangalagiri
                                                                                </span></div>
                                                                                <div class="teams">
                                                                                    <div>
                                                                                        <div class="team">
                                                                                            <div class="name-detail"><img
                                                                                                src="https://wassets.hscicdn.com/static/images/lazyimage.svg"
                                                                                                alt="Arunachal Pradesh Flag" class="img img-lazy flag" />
                                                                                                <p class="name">Arunachal Pradesh</p>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="team">
                                                                                            <div class="name-detail"><img
                                                                                                src="https://wassets.hscicdn.com/static/images/lazyimage.svg"
                                                                                                alt="Manipur Flag" class="img img-lazy flag" />
                                                                                                <p class="name">Manipur</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="status-text"><span>Match yet to begin</span></div>
                                                                                <div class="hsb-series-links"><a data-hover="Schedule" class="hsb-link"
                                                                                    target="_self" rel=""
                                                                                    href="/series/syed-mushtaq-ali-trophy-2021-22-1280192/match-schedule-fixtures">Schedule</a><a
                                                                                        data-hover="Points Table" class="hsb-link" target="_self" rel=""
                                                                                        href="/series/syed-mushtaq-ali-trophy-2021-22-1280192/points-table-standings">Points
                                                                                        Table</a></div>
                                                                            </div>
                                                                        </div>
                                                                    </a></div>
                                                                </div>
                                                            </div>
                                                            <div style="outline:none" data-index="9" class="slick-slide" tabindex="-1" aria-hidden="true">
                                                                <div>
                                                                    <div class="scorecard-container" tabindex="-1" style="width:100%;display:inline-block"><a
                                                                        data-hover="" class="match-info-link-HSB" target="_self" rel=""
                                                                        href="/series/syed-mushtaq-ali-trophy-2021-22-1280192/saurashtra-vs-uttar-pradesh-elite-group-e-1280229/live-cricket-score">
                                                                        <div>
                                                                            <div class="match-info match-info-HSB match-info-with-icon card scorecard">
                                                                                <div class="status status-hindi"><span>today, 3:30 am</span><span
                                                                                    class="hsb-description"><strong> •
                                                                                        <!-- -->Elite, Group E<span class="text-uppercase"> •
                                                                                            <!-- -->T20
                                                                                        </span>
                                                                                    </strong> •
                                                                                    <!-- -->
                                                                                    <!-- -->Sultanpur
                                                                                </span></div>
                                                                                <div class="teams">
                                                                                    <div>
                                                                                        <div class="team">
                                                                                            <div class="name-detail"><img
                                                                                                src="https://wassets.hscicdn.com/static/images/lazyimage.svg"
                                                                                                alt="Saurashtra Flag" class="img img-lazy flag" />
                                                                                                <p class="name">Saurashtra</p>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="team">
                                                                                            <div class="name-detail"><img
                                                                                                src="https://wassets.hscicdn.com/static/images/lazyimage.svg"
                                                                                                alt="Uttar Pradesh Flag" class="img img-lazy flag" />
                                                                                                <p class="name">Uttar Pradesh</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="status-text"><span>Match yet to begin</span></div>
                                                                                <div class="hsb-series-links"><a data-hover="Schedule" class="hsb-link"
                                                                                    target="_self" rel=""
                                                                                    href="/series/syed-mushtaq-ali-trophy-2021-22-1280192/match-schedule-fixtures">Schedule</a><a
                                                                                        data-hover="Points Table" class="hsb-link" target="_self" rel=""
                                                                                        href="/series/syed-mushtaq-ali-trophy-2021-22-1280192/points-table-standings">Points
                                                                                        Table</a></div>
                                                                            </div>
                                                                        </div>
                                                                    </a></div>
                                                                </div>
                                                            </div>
                                                            <div style="outline:none" data-index="10" class="slick-slide" tabindex="-1"
                                                                aria-hidden="true">
                                                                <div>
                                                                    <div class="scorecard-container" tabindex="-1" style="width:100%;display:inline-block"><a
                                                                        data-hover="" class="match-info-link-HSB" target="_self" rel=""
                                                                        href="/series/syed-mushtaq-ali-trophy-2021-22-1280192/chandigarh-vs-delhi-elite-group-e-1280231/live-cricket-score">
                                                                        <div>
                                                                            <div class="match-info match-info-HSB match-info-with-icon card scorecard">
                                                                                <div class="status status-hindi"><span>today, 5:30 am</span><span
                                                                                    class="hsb-description"><strong> •
                                                                                        <!-- -->Elite, Group E<span class="text-uppercase"> •
                                                                                            <!-- -->T20
                                                                                        </span>
                                                                                    </strong> •
                                                                                    <!-- -->
                                                                                    <!-- -->Rohtak
                                                                                </span></div>
                                                                                <div class="teams">
                                                                                    <div>
                                                                                        <div class="team">
                                                                                            <div class="name-detail"><img
                                                                                                src="https://wassets.hscicdn.com/static/images/lazyimage.svg"
                                                                                                alt="Chandigarh Flag" class="img img-lazy flag" />
                                                                                                <p class="name">Chandigarh</p>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="team">
                                                                                            <div class="name-detail"><img
                                                                                                src="https://wassets.hscicdn.com/static/images/lazyimage.svg"
                                                                                                alt="Delhi Flag" class="img img-lazy flag" />
                                                                                                <p class="name">Delhi</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="status-text"><span>Match yet to begin</span></div>
                                                                                <div class="hsb-series-links"><a data-hover="Schedule" class="hsb-link"
                                                                                    target="_self" rel=""
                                                                                    href="/series/syed-mushtaq-ali-trophy-2021-22-1280192/match-schedule-fixtures">Schedule</a><a
                                                                                        data-hover="Points Table" class="hsb-link" target="_self" rel=""
                                                                                        href="/series/syed-mushtaq-ali-trophy-2021-22-1280192/points-table-standings">Points
                                                                                        Table</a></div>
                                                                            </div>
                                                                        </div>
                                                                    </a></div>
                                                                </div>
                                                            </div>
                                                            <div style="outline:none" data-index="11" class="slick-slide" tabindex="-1"
                                                                aria-hidden="true">
                                                                <div>
                                                                    <div class="scorecard-container" tabindex="-1" style="width:100%;display:inline-block"><a
                                                                        data-hover="" class="match-info-link-HSB" target="_self" rel=""
                                                                        href="/series/syed-mushtaq-ali-trophy-2021-22-1280192/goa-vs-puducherry-elite-group-a-1280219/live-cricket-score">
                                                                        <div>
                                                                            <div class="match-info match-info-HSB match-info-with-icon card scorecard">
                                                                                <div class="status status-hindi"><span>today, 6:30 am</span><span
                                                                                    class="hsb-description"><strong> •
                                                                                        <!-- -->Elite, Group A<span class="text-uppercase"> •
                                                                                            <!-- -->T20
                                                                                        </span>
                                                                                    </strong> •
                                                                                    <!-- -->
                                                                                    <!-- -->Lucknow
                                                                                </span></div>
                                                                                <div class="teams">
                                                                                    <div>
                                                                                        <div class="team">
                                                                                            <div class="name-detail"><img
                                                                                                src="https://wassets.hscicdn.com/static/images/lazyimage.svg"
                                                                                                alt="Goa Flag" class="img img-lazy flag" />
                                                                                                <p class="name">Goa</p>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="team">
                                                                                            <div class="name-detail"><img
                                                                                                src="https://wassets.hscicdn.com/static/images/lazyimage.svg"
                                                                                                alt="Puducherry Flag" class="img img-lazy flag" />
                                                                                                <p class="name">Puducherry</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="status-text"><span>Match yet to begin</span></div>
                                                                                <div class="hsb-series-links"><a data-hover="Schedule" class="hsb-link"
                                                                                    target="_self" rel=""
                                                                                    href="/series/syed-mushtaq-ali-trophy-2021-22-1280192/match-schedule-fixtures">Schedule</a><a
                                                                                        data-hover="Points Table" class="hsb-link" target="_self" rel=""
                                                                                        href="/series/syed-mushtaq-ali-trophy-2021-22-1280192/points-table-standings">Points
                                                                                        Table</a></div>
                                                                            </div>
                                                                        </div>
                                                                    </a></div>
                                                                </div>
                                                            </div>
                                                            <div style="outline:none" data-index="12" class="slick-slide" tabindex="-1"
                                                                aria-hidden="true">
                                                                <div>
                                                                    <div class="scorecard-container" tabindex="-1" style="width:100%;display:inline-block"><a
                                                                        data-hover="" class="match-info-link-HSB" target="_self" rel=""
                                                                        href="/series/syed-mushtaq-ali-trophy-2021-22-1280192/mumbai-vs-services-elite-group-b-1280222/live-cricket-score">
                                                                        <div>
                                                                            <div class="match-info match-info-HSB match-info-with-icon card scorecard">
                                                                                <div class="status status-hindi"><span>today, 6:30 am</span><span
                                                                                    class="hsb-description"><strong> •
                                                                                        <!-- -->Elite, Group B<span class="text-uppercase"> •
                                                                                            <!-- -->T20
                                                                                        </span>
                                                                                    </strong> •
                                                                                    <!-- -->
                                                                                    <!-- -->Guwahati
                                                                                </span></div>
                                                                                <div class="teams">
                                                                                    <div>
                                                                                        <div class="team">
                                                                                            <div class="name-detail"><img
                                                                                                src="https://wassets.hscicdn.com/static/images/lazyimage.svg"
                                                                                                alt="Mumbai Flag" class="img img-lazy flag" />
                                                                                                <p class="name">Mumbai</p>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="team">
                                                                                            <div class="name-detail"><img
                                                                                                src="https://wassets.hscicdn.com/static/images/lazyimage.svg"
                                                                                                alt="Services Flag" class="img img-lazy flag" />
                                                                                                <p class="name">Services</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="status-text"><span>Match yet to begin</span></div>
                                                                                <div class="hsb-series-links"><a data-hover="Schedule" class="hsb-link"
                                                                                    target="_self" rel=""
                                                                                    href="/series/syed-mushtaq-ali-trophy-2021-22-1280192/match-schedule-fixtures">Schedule</a><a
                                                                                        data-hover="Points Table" class="hsb-link" target="_self" rel=""
                                                                                        href="/series/syed-mushtaq-ali-trophy-2021-22-1280192/points-table-standings">Points
                                                                                        Table</a></div>
                                                                            </div>
                                                                        </div>
                                                                    </a></div>
                                                                </div>
                                                            </div>
                                                            <div style="outline:none" data-index="13" class="slick-slide" tabindex="-1"
                                                                aria-hidden="true">
                                                                <div>
                                                                    <div class="scorecard-container" tabindex="-1" style="width:100%;display:inline-block"><a
                                                                        data-hover="" class="match-info-link-HSB" target="_self" rel=""
                                                                        href="/series/syed-mushtaq-ali-trophy-2021-22-1280192/andhra-vs-haryana-elite-group-c-1280225/live-cricket-score">
                                                                        <div>
                                                                            <div class="match-info match-info-HSB match-info-with-icon card scorecard">
                                                                                <div class="status status-hindi"><span>today, 6:30 am</span><span
                                                                                    class="hsb-description"><strong> •
                                                                                        <!-- -->Elite, Group C<span class="text-uppercase"> •
                                                                                            <!-- -->T20
                                                                                        </span>
                                                                                    </strong> •
                                                                                    <!-- -->
                                                                                    <!-- -->Vadodara
                                                                                </span></div>
                                                                                <div class="teams">
                                                                                    <div>
                                                                                        <div class="team">
                                                                                            <div class="name-detail"><img
                                                                                                src="https://wassets.hscicdn.com/static/images/lazyimage.svg"
                                                                                                alt="Andhra Flag" class="img img-lazy flag" />
                                                                                                <p class="name">Andhra</p>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="team">
                                                                                            <div class="name-detail"><img
                                                                                                src="https://wassets.hscicdn.com/static/images/lazyimage.svg"
                                                                                                alt="Haryana Flag" class="img img-lazy flag" />
                                                                                                <p class="name">Haryana</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="status-text"><span>Match yet to begin</span></div>
                                                                                <div class="hsb-series-links"><a data-hover="Schedule" class="hsb-link"
                                                                                    target="_self" rel=""
                                                                                    href="/series/syed-mushtaq-ali-trophy-2021-22-1280192/match-schedule-fixtures">Schedule</a><a
                                                                                        data-hover="Points Table" class="hsb-link" target="_self" rel=""
                                                                                        href="/series/syed-mushtaq-ali-trophy-2021-22-1280192/points-table-standings">Points
                                                                                        Table</a></div>
                                                                            </div>
                                                                        </div>
                                                                    </a></div>
                                                                </div>
                                                            </div>
                                                            <div style="outline:none" data-index="14" class="slick-slide" tabindex="-1"
                                                                aria-hidden="true">
                                                                <div>
                                                                    <div class="scorecard-container" tabindex="-1" style="width:100%;display:inline-block"><a
                                                                        data-hover="" class="match-info-link-HSB" target="_self" rel=""
                                                                        href="/series/syed-mushtaq-ali-trophy-2021-22-1280192/bihar-vs-kerala-elite-group-d-1280228/live-cricket-score">
                                                                        <div>
                                                                            <div class="match-info match-info-HSB match-info-with-icon card scorecard">
                                                                                <div class="status status-hindi"><span>today, 6:30 am</span><span
                                                                                    class="hsb-description"><strong> •
                                                                                        <!-- -->Elite, Group D<span class="text-uppercase"> •
                                                                                            <!-- -->T20
                                                                                        </span>
                                                                                    </strong> •
                                                                                    <!-- -->
                                                                                    <!-- -->Delhi
                                                                                </span></div>
                                                                                <div class="teams">
                                                                                    <div>
                                                                                        <div class="team">
                                                                                            <div class="name-detail"><img
                                                                                                src="https://wassets.hscicdn.com/static/images/lazyimage.svg"
                                                                                                alt="Bihar Flag" class="img img-lazy flag" />
                                                                                                <p class="name">Bihar</p>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="team">
                                                                                            <div class="name-detail"><img
                                                                                                src="https://wassets.hscicdn.com/static/images/lazyimage.svg"
                                                                                                alt="Kerala Flag" class="img img-lazy flag" />
                                                                                                <p class="name">Kerala</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="status-text"><span>Match yet to begin</span></div>
                                                                                <div class="hsb-series-links"><a data-hover="Schedule" class="hsb-link"
                                                                                    target="_self" rel=""
                                                                                    href="/series/syed-mushtaq-ali-trophy-2021-22-1280192/match-schedule-fixtures">Schedule</a><a
                                                                                        data-hover="Points Table" class="hsb-link" target="_self" rel=""
                                                                                        href="/series/syed-mushtaq-ali-trophy-2021-22-1280192/points-table-standings">Points
                                                                                        Table</a></div>
                                                                            </div>
                                                                        </div>
                                                                    </a></div>
                                                                </div>
                                                            </div>
                                                            <div style="outline:none" data-index="15" class="slick-slide" tabindex="-1"
                                                                aria-hidden="true">
                                                                <div>
                                                                    <div class="scorecard-container" tabindex="-1" style="width:100%;display:inline-block"><a
                                                                        data-hover="" class="match-info-link-HSB" target="_self" rel=""
                                                                        href="/series/syed-mushtaq-ali-trophy-2021-22-1280192/baroda-vs-bengal-elite-group-b-1280221/live-cricket-score">
                                                                        <div>
                                                                            <div class="match-info match-info-HSB match-info-with-icon card scorecard">
                                                                                <div class="status status-hindi"><span>today, 7:00 am</span><span
                                                                                    class="hsb-description"><strong> •
                                                                                        <!-- -->Elite, Group B<span class="text-uppercase"> •
                                                                                            <!-- -->T20
                                                                                        </span>
                                                                                    </strong> •
                                                                                    <!-- -->
                                                                                    <!-- -->Guwahati
                                                                                </span></div>
                                                                                <div class="teams">
                                                                                    <div>
                                                                                        <div class="team">
                                                                                            <div class="name-detail"><img
                                                                                                src="https://wassets.hscicdn.com/static/images/lazyimage.svg"
                                                                                                alt="Baroda Flag" class="img img-lazy flag" />
                                                                                                <p class="name">Baroda</p>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="team">
                                                                                            <div class="name-detail"><img
                                                                                                src="https://wassets.hscicdn.com/static/images/lazyimage.svg"
                                                                                                alt="Bengal Flag" class="img img-lazy flag" />
                                                                                                <p class="name">Bengal</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="status-text"><span>Match yet to begin</span></div>
                                                                                <div class="hsb-series-links"><a data-hover="Schedule" class="hsb-link"
                                                                                    target="_self" rel=""
                                                                                    href="/series/syed-mushtaq-ali-trophy-2021-22-1280192/match-schedule-fixtures">Schedule</a><a
                                                                                        data-hover="Points Table" class="hsb-link" target="_self" rel=""
                                                                                        href="/series/syed-mushtaq-ali-trophy-2021-22-1280192/points-table-standings">Points
                                                                                        Table</a></div>
                                                                            </div>
                                                                        </div>
                                                                    </a></div>
                                                                </div>
                                                            </div>
                                                            <div style="outline:none" data-index="16" class="slick-slide" tabindex="-1"
                                                                aria-hidden="true">
                                                                <div>
                                                                    <div class="scorecard-container" tabindex="-1" style="width:100%;display:inline-block"><a
                                                                        data-hover="" class="match-info-link-HSB" target="_self" rel=""
                                                                        href="/series/syed-mushtaq-ali-trophy-2021-22-1280192/odisha-vs-tamil-nadu-elite-group-a-1280218/live-cricket-score">
                                                                        <div>
                                                                            <div class="match-info match-info-HSB match-info-with-icon card scorecard">
                                                                                <div class="status status-hindi"><span>today, 7:30 am</span><span
                                                                                    class="hsb-description"><strong> •
                                                                                        <!-- -->Elite, Group A<span class="text-uppercase"> •
                                                                                            <!-- -->T20
                                                                                        </span>
                                                                                    </strong> •
                                                                                    <!-- -->
                                                                                    <!-- -->Lucknow
                                                                                </span></div>
                                                                                <div class="teams">
                                                                                    <div>
                                                                                        <div class="team">
                                                                                            <div class="name-detail"><img
                                                                                                src="https://wassets.hscicdn.com/static/images/lazyimage.svg"
                                                                                                alt="Odisha Flag" class="img img-lazy flag" />
                                                                                                <p class="name">Odisha</p>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="team">
                                                                                            <div class="name-detail"><img
                                                                                                src="https://wassets.hscicdn.com/static/images/lazyimage.svg"
                                                                                                alt="Tamil Nadu Flag" class="img img-lazy flag" />
                                                                                                <p class="name">Tamil Nadu</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="status-text"><span>Match starts in <b> 5 </b> hrs <b> 11 </b>
                                                                                    mins</span></div>
                                                                                <div class="hsb-series-links"><a data-hover="Schedule" class="hsb-link"
                                                                                    target="_self" rel=""
                                                                                    href="/series/syed-mushtaq-ali-trophy-2021-22-1280192/match-schedule-fixtures">Schedule</a><a
                                                                                        data-hover="Points Table" class="hsb-link" target="_self" rel=""
                                                                                        href="/series/syed-mushtaq-ali-trophy-2021-22-1280192/points-table-standings">Points
                                                                                        Table</a></div>
                                                                            </div>
                                                                        </div>
                                                                    </a></div>
                                                                </div>
                                                            </div>
                                                            <div style="outline:none" data-index="17" class="slick-slide" tabindex="-1"
                                                                aria-hidden="true">
                                                                <div>
                                                                    <div class="scorecard-container" tabindex="-1" style="width:100%;display:inline-block"><a
                                                                        data-hover="" class="match-info-link-HSB" target="_self" rel=""
                                                                        href="/series/syed-mushtaq-ali-trophy-2021-22-1280192/himachal-pradesh-vs-jharkhand-elite-group-c-1280224/live-cricket-score">
                                                                        <div>
                                                                            <div class="match-info match-info-HSB match-info-with-icon card scorecard">
                                                                                <div class="status status-hindi"><span>today, 7:30 am</span><span
                                                                                    class="hsb-description"><strong> •
                                                                                        <!-- -->Elite, Group C<span class="text-uppercase"> •
                                                                                            <!-- -->T20
                                                                                        </span>
                                                                                    </strong> •
                                                                                    <!-- -->
                                                                                    <!-- -->Vadodara
                                                                                </span></div>
                                                                                <div class="teams">
                                                                                    <div>
                                                                                        <div class="team">
                                                                                            <div class="name-detail"><img
                                                                                                src="https://wassets.hscicdn.com/static/images/lazyimage.svg"
                                                                                                alt="Himachal Pradesh Flag" class="img img-lazy flag" />
                                                                                                <p class="name">Himachal Pradesh</p>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="team">
                                                                                            <div class="name-detail"><img
                                                                                                src="https://wassets.hscicdn.com/static/images/lazyimage.svg"
                                                                                                alt="Jharkhand Flag" class="img img-lazy flag" />
                                                                                                <p class="name">Jharkhand</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="status-text"><span>Match starts in <b> 5 </b> hrs <b> 11 </b>
                                                                                    mins</span></div>
                                                                                <div class="hsb-series-links"><a data-hover="Schedule" class="hsb-link"
                                                                                    target="_self" rel=""
                                                                                    href="/series/syed-mushtaq-ali-trophy-2021-22-1280192/match-schedule-fixtures">Schedule</a><a
                                                                                        data-hover="Points Table" class="hsb-link" target="_self" rel=""
                                                                                        href="/series/syed-mushtaq-ali-trophy-2021-22-1280192/points-table-standings">Points
                                                                                        Table</a></div>
                                                                            </div>
                                                                        </div>
                                                                    </a></div>
                                                                </div>
                                                            </div>
                                                            <div style="outline:none" data-index="18" class="slick-slide" tabindex="-1"
                                                                aria-hidden="true">
                                                                <div>
                                                                    <div class="scorecard-container" tabindex="-1" style="width:100%;display:inline-block"><a
                                                                        data-hover="" class="match-info-link-HSB" target="_self" rel=""
                                                                        href="/series/syed-mushtaq-ali-trophy-2021-22-1280192/assam-vs-gujarat-elite-group-d-1280227/live-cricket-score">
                                                                        <div>
                                                                            <div class="match-info match-info-HSB match-info-with-icon card scorecard">
                                                                                <div class="status status-hindi"><span>today, 7:30 am</span><span
                                                                                    class="hsb-description"><strong> •
                                                                                        <!-- -->Elite, Group D<span class="text-uppercase"> •
                                                                                            <!-- -->T20
                                                                                        </span>
                                                                                    </strong> •
                                                                                    <!-- -->
                                                                                    <!-- -->Delhi
                                                                                </span></div>
                                                                                <div class="teams">
                                                                                    <div>
                                                                                        <div class="team">
                                                                                            <div class="name-detail"><img
                                                                                                src="https://wassets.hscicdn.com/static/images/lazyimage.svg"
                                                                                                alt="Assam Flag" class="img img-lazy flag" />
                                                                                                <p class="name">Assam</p>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="team">
                                                                                            <div class="name-detail"><img
                                                                                                src="https://wassets.hscicdn.com/static/images/lazyimage.svg"
                                                                                                alt="Gujarat Flag" class="img img-lazy flag" />
                                                                                                <p class="name">Gujarat</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="status-text"><span>Match yet to begin</span></div>
                                                                                <div class="hsb-series-links"><a data-hover="Schedule" class="hsb-link"
                                                                                    target="_self" rel=""
                                                                                    href="/series/syed-mushtaq-ali-trophy-2021-22-1280192/match-schedule-fixtures">Schedule</a><a
                                                                                        data-hover="Points Table" class="hsb-link" target="_self" rel=""
                                                                                        href="/series/syed-mushtaq-ali-trophy-2021-22-1280192/points-table-standings">Points
                                                                                        Table</a></div>
                                                                            </div>
                                                                        </div>
                                                                    </a></div>
                                                                </div>
                                                            </div>
                                                            <div style="outline:none" data-index="19" class="slick-slide" tabindex="-1"
                                                                aria-hidden="true">
                                                                <div>
                                                                    <div class="scorecard-container" tabindex="-1" style="width:100%;display:inline-block"><a
                                                                        data-hover="" class="match-info-link-HSB" target="_self" rel=""
                                                                        href="/series/syed-mushtaq-ali-trophy-2021-22-1280192/nagaland-vs-vidarbha-plate-group-1280233/live-cricket-score">
                                                                        <div>
                                                                            <div class="match-info match-info-HSB match-info-with-icon card scorecard">
                                                                                <div class="status status-hindi"><span>today, 7:30 am</span><span
                                                                                    class="hsb-description"><strong> •
                                                                                        <!-- -->Plate Group<span class="text-uppercase"> •
                                                                                            <!-- -->T20
                                                                                        </span>
                                                                                    </strong> •
                                                                                    <!-- -->
                                                                                    <!-- -->Mulapadu
                                                                                </span></div>
                                                                                <div class="teams">
                                                                                    <div>
                                                                                        <div class="team">
                                                                                            <div class="name-detail"><img
                                                                                                src="https://wassets.hscicdn.com/static/images/lazyimage.svg"
                                                                                                alt="Nagaland Flag" class="img img-lazy flag" />
                                                                                                <p class="name">Nagaland</p>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="team">
                                                                                            <div class="name-detail"><img
                                                                                                src="https://wassets.hscicdn.com/static/images/lazyimage.svg"
                                                                                                alt="Vidarbha Flag" class="img img-lazy flag" />
                                                                                                <p class="name">Vidarbha</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="status-text"><span>Match yet to begin</span></div>
                                                                                <div class="hsb-series-links"><a data-hover="Schedule" class="hsb-link"
                                                                                    target="_self" rel=""
                                                                                    href="/series/syed-mushtaq-ali-trophy-2021-22-1280192/match-schedule-fixtures">Schedule</a><a
                                                                                        data-hover="Points Table" class="hsb-link" target="_self" rel=""
                                                                                        href="/series/syed-mushtaq-ali-trophy-2021-22-1280192/points-table-standings">Points
                                                                                        Table</a></div>
                                                                            </div>
                                                                        </div>
                                                                    </a></div>
                                                                </div>
                                                            </div>
                                                            <div style="outline:none" data-index="20" class="slick-slide" tabindex="-1"
                                                                aria-hidden="true">
                                                                <div>
                                                                    <div class="scorecard-container" tabindex="-1" style="width:100%;display:inline-block"><a
                                                                        data-hover="" class="match-info-link-HSB" target="_self" rel=""
                                                                        href="/series/syed-mushtaq-ali-trophy-2021-22-1280192/mizoram-vs-tripura-plate-group-1280235/live-cricket-score">
                                                                        <div>
                                                                            <div class="match-info match-info-HSB match-info-with-icon card scorecard">
                                                                                <div class="status status-hindi"><span>today, 7:30 am</span><span
                                                                                    class="hsb-description"><strong> •
                                                                                        <!-- -->Plate Group<span class="text-uppercase"> •
                                                                                            <!-- -->T20
                                                                                        </span>
                                                                                    </strong> •
                                                                                    <!-- -->
                                                                                    <!-- -->Mangalagiri
                                                                                </span></div>
                                                                                <div class="teams">
                                                                                    <div>
                                                                                        <div class="team">
                                                                                            <div class="name-detail"><img
                                                                                                src="https://wassets.hscicdn.com/static/images/lazyimage.svg"
                                                                                                alt="Mizoram Flag" class="img img-lazy flag" />
                                                                                                <p class="name">Mizoram</p>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="team">
                                                                                            <div class="name-detail"><img
                                                                                                src="https://wassets.hscicdn.com/static/images/lazyimage.svg"
                                                                                                alt="Tripura Flag" class="img img-lazy flag" />
                                                                                                <p class="name">Tripura</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="status-text"><span>Match yet to begin</span></div>
                                                                                <div class="hsb-series-links"><a data-hover="Schedule" class="hsb-link"
                                                                                    target="_self" rel=""
                                                                                    href="/series/syed-mushtaq-ali-trophy-2021-22-1280192/match-schedule-fixtures">Schedule</a><a
                                                                                        data-hover="Points Table" class="hsb-link" target="_self" rel=""
                                                                                        href="/series/syed-mushtaq-ali-trophy-2021-22-1280192/points-table-standings">Points
                                                                                        Table</a></div>
                                                                            </div>
                                                                        </div>
                                                                    </a></div>
                                                                </div>
                                                            </div>
                                                            <div style="outline:none" data-index="21" class="slick-slide" tabindex="-1"
                                                                aria-hidden="true">
                                                                <div>
                                                                    <div class="scorecard-container" tabindex="-1" style="width:100%;display:inline-block"><a
                                                                        data-hover="" class="match-info-link-HSB" target="_self" rel=""
                                                                        href="/series/syed-mushtaq-ali-trophy-2021-22-1280192/hyderabad-india-vs-uttarakhand-elite-group-e-1280230/live-cricket-score">
                                                                        <div>
                                                                            <div class="match-info match-info-HSB match-info-with-icon card scorecard">
                                                                                <div class="status status-hindi"><span>today, 8:00 am</span><span
                                                                                    class="hsb-description"><strong> •
                                                                                        <!-- -->Elite, Group E<span class="text-uppercase"> •
                                                                                            <!-- -->T20
                                                                                        </span>
                                                                                    </strong> •
                                                                                    <!-- -->
                                                                                    <!-- -->Sultanpur
                                                                                </span></div>
                                                                                <div class="teams">
                                                                                    <div>
                                                                                        <div class="team">
                                                                                            <div class="name-detail"><img
                                                                                                src="https://wassets.hscicdn.com/static/images/lazyimage.svg"
                                                                                                alt="Hyderabad (India) Flag" class="img img-lazy flag" />
                                                                                                <p class="name">Hyderabad (India)</p>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="team">
                                                                                            <div class="name-detail"><img
                                                                                                src="https://wassets.hscicdn.com/static/images/lazyimage.svg"
                                                                                                alt="Uttarakhand Flag" class="img img-lazy flag" />
                                                                                                <p class="name">Uttarakhand</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="status-text"><span>Match yet to begin</span></div>
                                                                                <div class="hsb-series-links"><a data-hover="Schedule" class="hsb-link"
                                                                                    target="_self" rel=""
                                                                                    href="/series/syed-mushtaq-ali-trophy-2021-22-1280192/match-schedule-fixtures">Schedule</a><a
                                                                                        data-hover="Points Table" class="hsb-link" target="_self" rel=""
                                                                                        href="/series/syed-mushtaq-ali-trophy-2021-22-1280192/points-table-standings">Points
                                                                                        Table</a></div>
                                                                            </div>
                                                                        </div>
                                                                    </a></div>
                                                                </div>
                                                            </div>
                                                            <div style="outline:none" data-index="22" class="slick-slide" tabindex="-1"
                                                                aria-hidden="true">
                                                                <div>
                                                                    <div class="scorecard-container" tabindex="-1" style="width:100%;display:inline-block"><a
                                                                        data-hover="" class="match-info-link-HSB" target="_self" rel=""
                                                                        href="/series/sheffield-shield-2021-22-1270433/victoria-vs-new-south-wales-8th-match-1270437/live-cricket-score">
                                                                        <div>
                                                                            <div class="match-info match-info-HSB match-info-with-icon card scorecard">
                                                                                <div class="status status-hindi red"><span>lunch</span><span
                                                                                    class="hsb-description"><strong> •
                                                                                        <!-- -->8th Match<span class="text-uppercase"> •
                                                                                            <!-- -->FC
                                                                                        </span>
                                                                                    </strong> •
                                                                                    <!-- -->
                                                                                    <!-- -->Melbourne
                                                                                </span></div>
                                                                                <div class="teams">
                                                                                    <div>
                                                                                        <div class="team">
                                                                                            <div class="name-detail"><img
                                                                                                src="https://wassets.hscicdn.com/static/images/lazyimage.svg"
                                                                                                alt="VIC Flag" class="img img-lazy flag" />
                                                                                                <p class="name">VIC</p><span class="batting-indicator"></span>
                                                                                            </div>
                                                                                            <div class="score-detail"><span class="score-info">(29 ov)</span><span
                                                                                                class="score">69/2</span></div>
                                                                                        </div>
                                                                                        <div class="team">
                                                                                            <div class="name-detail"><img
                                                                                                src="https://wassets.hscicdn.com/static/images/lazyimage.svg"
                                                                                                alt="NSW Flag" class="img img-lazy flag" />
                                                                                                <p class="name">NSW</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="status-text"><span>Day 1 - NSW chose to field.</span></div>
                                                                                <div class="hsb-series-links"><a data-hover="Schedule" class="hsb-link"
                                                                                    target="_self" rel=""
                                                                                    href="/series/sheffield-shield-2021-22-1270433/match-schedule-fixtures">Schedule</a><a
                                                                                        data-hover="Points Table" class="hsb-link" target="_self" rel=""
                                                                                        href="/series/sheffield-shield-2021-22-1270433/points-table-standings">Points
                                                                                        Table</a></div>
                                                                            </div>
                                                                        </div>
                                                                    </a></div>
                                                                </div>
                                                            </div>
                                                            <div style="outline:none" data-index="23" class="slick-slide" tabindex="-1"
                                                                aria-hidden="true">
                                                                <div>
                                                                    <div class="scorecard-container" tabindex="-1" style="width:100%;display:inline-block"><a
                                                                        data-hover="" class="match-info-link-HSB" target="_self" rel=""
                                                                        href="/series/icc-men-s-t20-world-cup-sub-regional-africa-a-2021-22-1283591/botswana-vs-cameroon-5th-match-group-b-1283046/live-cricket-score">
                                                                        <div>
                                                                            <div class="match-info match-info-HSB match-info-with-icon card scorecard">
                                                                                <div class="status status-hindi"><span>today, 7:15 am</span><span
                                                                                    class="hsb-description"><strong> •
                                                                                        <!-- -->5th Match, Group B<span class="text-uppercase"> •
                                                                                            <!-- -->T20I
                                                                                        </span>
                                                                                    </strong> •
                                                                                    <!-- -->
                                                                                    <!-- -->Rwanda
                                                                                </span></div>
                                                                                <div class="teams">
                                                                                    <div>
                                                                                        <div class="team">
                                                                                            <div class="name-detail"><img
                                                                                                src="https://wassets.hscicdn.com/static/images/lazyimage.svg"
                                                                                                alt="Botswana Flag" class="img img-lazy flag" />
                                                                                                <p class="name">Botswana</p>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="team">
                                                                                            <div class="name-detail"><img
                                                                                                src="https://wassets.hscicdn.com/static/images/lazyimage.svg"
                                                                                                alt="Cameroon Flag" class="img img-lazy flag" />
                                                                                                <p class="name">Cameroon</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="status-text"><span>Match starts in <b> 4 </b> hrs <b> 56 </b>
                                                                                    mins</span></div>
                                                                                <div class="hsb-series-links"><a data-hover="Schedule" class="hsb-link"
                                                                                    target="_self" rel=""
                                                                                    href="/series/icc-men-s-t20-world-cup-sub-regional-africa-a-2021-22-1283591/match-schedule-fixtures">Schedule</a><a
                                                                                        data-hover="Points Table" class="hsb-link" target="_self" rel=""
                                                                                        href="/series/icc-men-s-t20-world-cup-sub-regional-africa-a-2021-22-1283591/points-table-standings">Points
                                                                                        Table</a><a data-hover="Videos" class="hsb-link" target="_self" rel=""
                                                                                            href="/series/icc-men-s-t20-world-cup-sub-regional-africa-a-2021-22-1283591/videos">Videos</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </a></div>
                                                                </div>
                                                            </div>
                                                            <div style="outline:none" data-index="24" class="slick-slide" tabindex="-1"
                                                                aria-hidden="true">
                                                                <div>
                                                                    <div class="scorecard-container" tabindex="-1" style="width:100%;display:inline-block"><a
                                                                        data-hover="" class="match-info-link-HSB" target="_self" rel=""
                                                                        href="/series/icc-men-s-t20-world-cup-sub-regional-africa-a-2021-22-1283591/mozambique-vs-sierra-leone-6th-match-group-b-1283047/live-cricket-score">
                                                                        <div>
                                                                            <div class="match-info match-info-HSB match-info-with-icon card scorecard">
                                                                                <div class="status status-hindi"><span>today, 11:45 am</span><span
                                                                                    class="hsb-description"><strong> •
                                                                                        <!-- -->6th Match, Group B<span class="text-uppercase"> •
                                                                                            <!-- -->T20I
                                                                                        </span>
                                                                                    </strong> •
                                                                                    <!-- -->
                                                                                    <!-- -->Rwanda
                                                                                </span></div>
                                                                                <div class="teams">
                                                                                    <div>
                                                                                        <div class="team">
                                                                                            <div class="name-detail"><img
                                                                                                src="https://wassets.hscicdn.com/static/images/lazyimage.svg"
                                                                                                alt="Mozambique Flag" class="img img-lazy flag" />
                                                                                                <p class="name">Mozambique</p>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="team">
                                                                                            <div class="name-detail"><img
                                                                                                src="https://wassets.hscicdn.com/static/images/lazyimage.svg"
                                                                                                alt="Sierra Leone Flag" class="img img-lazy flag" />
                                                                                                <p class="name">Sierra Leone</p>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="status-text"><span>Match yet to begin</span></div>
                                                                                <div class="hsb-series-links"><a data-hover="Schedule" class="hsb-link"
                                                                                    target="_self" rel=""
                                                                                    href="/series/icc-men-s-t20-world-cup-sub-regional-africa-a-2021-22-1283591/match-schedule-fixtures">Schedule</a><a
                                                                                        data-hover="Points Table" class="hsb-link" target="_self" rel=""
                                                                                        href="/series/icc-men-s-t20-world-cup-sub-regional-africa-a-2021-22-1283591/points-table-standings">Points
                                                                                        Table</a><a data-hover="Videos" class="hsb-link" target="_self" rel=""
                                                                                            href="/series/icc-men-s-t20-world-cup-sub-regional-africa-a-2021-22-1283591/videos">Videos</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </a></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div><button type="button" data-role="none" class="slick-arrow slick-next" style="display:block">
                                                        <!-- -->Next
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style="min-height:0px">
                        <div class="sticky" style="transform:translateZ(0);-webkit-transform:translateZ(0)">
                            <nav class="navbar primary-navbar navbar-expand-lg navbar-light bg-primary">
                                <div class="container d-flex justify-content-start"><a data-hover="" class="navbar-brand" target="_self"
                                    rel="" href="/"><img src="https://wassets.hscicdn.com/static/images/logo.png" alt="ESPNcricinfo"
                                        class="logo" /></a>
                                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul class="navbar-nav mr-auto">
                                            <li class="nav-item dropdown"><a data-hover="" class="nav-link" target="_self" rel=""
                                                title="Live Scores" href="/live-cricket-score">Live Scores</a>
                                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                    <div class="d-flex flex-row">
                                                        <ul class="list-unstyled">
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="Live Scores Home" href="/live-cricket-score">Live Scores Home</a></li>
                                                            <li class="nav-item"><a
                                                                href="https://www.espncricinfo.com/ci/engine/match/index.html?view=week" data-hover=""
                                                                class="nav-link dropdown-item" target="_parent" rel="" title="Week view">Week view</a>
                                                            </li>
                                                            <li class="nav-item"><a
                                                                href="https://www.espncricinfo.com/ci/engine/series/index.html?view=month" data-hover=""
                                                                class="nav-link dropdown-item" target="_parent" rel="" title="Month view">Month view</a>
                                                            </li>
                                                            <li class="nav-item"><a
                                                                href="https://www.espncricinfo.com/ci/engine/series/index.html?view=season" data-hover=""
                                                                class="nav-link dropdown-item" target="_parent" rel="" title="Season view">Season view</a>
                                                            </li>
                                                            <li class="nav-item"><a
                                                                href="https://www.espncricinfo.com/ci/engine/match/index.html?view=calendar" data-hover=""
                                                                class="nav-link dropdown-item" target="_parent" rel=""
                                                                title="International calendar">International calendar</a></li>
                                                            <li class="nav-item"><a
                                                                href="https://www.espncricinfo.com/ci/engine/match/scores/desktop.html" data-hover=""
                                                                class="nav-link dropdown-item" target="_parent" rel="" title="Desktop Scoreboard">Desktop
                                                                Scoreboard</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="nav-item dropdown"><a
                                                href="https://www.espncricinfo.com/ci/content/match/fixtures_futures.html" data-hover=""
                                                class="nav-link" target="_parent" rel="" title="Series">Series</a>
                                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                    <div class="d-flex flex-row">
                                                        <ul class="list-unstyled">
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="T20 World Cup" href="/series/icc-men-s-t20-world-cup-2021-22-1267897">T20 World
                                                                Cup</a></li>
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="WBBL 2021" href="/series/wbbl-2021-22-1269053">WBBL 2021</a></li>
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="Marsh Cup" href="/series/the-marsh-cup-2021-22-1270434">Marsh Cup</a></li>
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="Vijay Hazare Trophy" href="/series/vijay-hazare-trophy-2021-22-1280193">Vijay
                                                                Hazare Trophy</a></li>
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="ICC Women&#x27;s Championship"
                                                                href="/series/icc-women-s-championship-2017-18-2021-1122932">ICC Women&#x27;s
                                                                Championship</a></li>
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="CWC Challenge League A"
                                                                href="/series/cwc-challenge-league-a-2019-2021-22-1200432">CWC Challenge League A</a></li>
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="ICC CWC Super League"
                                                                href="/series/world-cup-super-league-2020-2022-23-1227837">ICC CWC Super League</a></li>
                                                            <li class="nav-item"><a href="https://www.espncricinfo.com/ci/engine/series/index.html"
                                                                data-hover="" class="nav-link dropdown-item" target="_parent" rel=""
                                                                title="-Archives-">-Archives-</a></li>
                                                        </ul>
                                                        <ul class="list-unstyled">
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="SMA Trophy" href="/series/syed-mushtaq-ali-trophy-2021-22-1280192">SMA Trophy</a>
                                                            </li>
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="Bangladesh v Pakistan"
                                                                href="/series/pakistan-in-bangladesh-2021-22-1277971">Bangladesh v Pakistan</a></li>
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="Ranji Trophy" href="/series/ranji-trophy-2021-22-1280196">Ranji Trophy</a></li>
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="World Test Championship"
                                                                href="/series/icc-world-test-championship-2021-2023-1268315">World Test Championship</a>
                                                            </li>
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="Cricket World Cup League 2"
                                                                href="/series/world-cup-league-2-2019-2021-22-1196667">Cricket World Cup League 2</a></li>
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="CWC Challenge League B"
                                                                href="/series/challenge-league-group-b-2019-2021-22-1207049">CWC Challenge League B</a>
                                                            </li>
                                                            <li class="nav-item"><a
                                                                href="https://www.espncricinfo.com/ci/content/match/fixtures_futures.html" data-hover=""
                                                                class="nav-link dropdown-item" target="_parent" rel="" title="-Future series-">-Future
                                                                series-</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="nav-item dropdown"><a data-hover="" class="nav-link" target="_self" rel="" title="Teams"
                                                href="/team">Teams</a>
                                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                    <div class="d-flex flex-row">
                                                        <ul class="list-unstyled">
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="Australia" href="/team/australia-2">Australia</a></li>
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="Bangladesh" href="/team/bangladesh-25">Bangladesh</a></li>
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="England" href="/team/england-1">England</a></li>
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="India" href="/team/india-6">India</a></li>
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="New Zealand" href="/team/new-zealand-5">New Zealand</a></li>
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="Pakistan" href="/team/pakistan-7">Pakistan</a></li>
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="South Africa" href="/team/south-africa-3">South Africa</a></li>
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="Sri Lanka" href="/team/sri-lanka-8">Sri Lanka</a></li>
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="West Indies" href="/team/west-indies-4">West Indies</a></li>
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="Zimbabwe" href="/team/zimbabwe-9">Zimbabwe</a></li>
                                                        </ul>
                                                        <ul class="list-unstyled">
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="Afghanistan" href="/team/afghanistan-40">Afghanistan</a></li>
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="Ireland" href="/team/ireland-29">Ireland</a></li>
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="Namibia" href="/team/namibia-28">Namibia</a></li>
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="Nepal" href="/team/nepal-33">Nepal</a></li>
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="Netherlands" href="/team/netherlands-15">Netherlands</a></li>
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="Oman" href="/team/oman-37">Oman</a></li>
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="PNG" href="/team/papua-new-guinea-20">PNG</a></li>
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="Scotland" href="/team/scotland-30">Scotland</a></li>
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="UAE" href="/team/united-arab-emirates-27">UAE</a></li>
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="USA" href="/team/united-states-of-america-11">USA</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="nav-item dropdown"><a data-hover="" class="nav-link" target="_self" rel="" title="News"
                                                href="/latest-cricket-news">News</a>
                                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                    <div class="d-flex flex-row">
                                                        <ul class="list-unstyled">
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="News Home" href="/latest-cricket-news">News Home</a></li>
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="Covid-19" href="/subject/covid-19-324">Covid-19</a></li>
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="Ball-tampering" href="/subject/ball-tampering-25">Ball-tampering</a></li>
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="Technology in cricket" href="/subject/technology-in-cricket-18">Technology in
                                                                cricket</a></li>
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="Racism" href="/subject/racism-99">Racism</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="nav-item dropdown"><a data-hover="" class="nav-link" target="_self" rel="" title="Features"
                                                href="/cricket-features">Features</a>
                                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                    <div class="d-flex flex-row">
                                                        <ul class="list-unstyled">
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="Features Home" href="/cricket-features">Features Home</a></li>
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="Writers" href="/espncricinfo-writers-index">Writers</a></li>
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="Photo galleries" href="/gallery">Photo galleries</a></li>
                                                            <li class="nav-item"><a href="https://www.thecricketmonthly.com/" data-hover=""
                                                                class="nav-link dropdown-item" target="_parent" rel="" title="The Cricket Monthly">The
                                                                Cricket Monthly</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="nav-item dropdown"><a data-hover="" class="nav-link" target="_self" rel="" title="Videos"
                                                href="/video">Videos</a>
                                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                    <div class="d-flex flex-row">
                                                        <ul class="list-unstyled">
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="Videos Home" href="/video">Videos Home</a></li>
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="Dream Big Champs" href="/video/genre/champion-of-the-day-241">Dream Big Champs</a>
                                                            </li>
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="Sahi Hai Strategy" href="/video/genre/sahi-hai-strategy-229">Sahi Hai Strategy</a>
                                                            </li>
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="Super Fan" href="/video/genre/superfan-246">Super Fan</a></li>
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="Fantasy Pick" href="/video/genre/fantasy-pick-85">Fantasy Pick</a></li>
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="Newsroom" href="/video/genre/newsroom-218">Newsroom</a></li>
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="News and Analysis" href="/video/genre/news-and-analysis-34">News and Analysis</a>
                                                            </li>
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="Features" href="/video/genre/features-46">Features</a></li>
                                                        </ul>
                                                        <ul class="list-unstyled">
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="Dream Big Stories" href="/video/genre/dream-big-240">Dream Big Stories</a></li>
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="#BreakBoundaries" href="/video/genre/player-of-the-day-245">#BreakBoundaries</a>
                                                            </li>
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="Sixer Special" href="/video/genre/sixers-special-244">Sixer Special</a></li>
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="Haan Ya Naa" href="/video/genre/haan-ya-naa-247">Haan Ya Naa</a></li>
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="Polite Enquiries" href="/video/genre/politeenquiries-119">Polite Enquiries</a></li>
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="25 Questions" href="/video/genre/25-questions-191">25 Questions</a></li>
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="Match Analysis" href="/video/genre/match-analysis-1">Match Analysis</a></li>
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="Press Conference" href="/video/genre/press-conference-2">Press Conference</a></li>
                                                        </ul>
                                                        <ul class="list-unstyled">
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="T20 Time Out" href="/video/genre/t20-time-out-221">T20 Time Out</a></li>
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="T20 TimeOut Hindi" href="/video/genre/t20-time-out-hindi-236">T20 TimeOut Hindi</a>
                                                            </li>
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="Six Pack Powerplay" href="/video/genre/six-pack-powerplay-243">Six Pack
                                                                Powerplay</a></li>
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="Stunning Moments" href="/video/genre/stunning-moments-of-the-day-226">Stunning
                                                                Moments</a></li>
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="Run Order" href="/video/genre/run-order-166">Run Order</a></li>
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="Hindi Videos" href="/video/genre/hindi-200">Hindi Videos</a></li>
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="Interviews" href="/video/genre/interviews-9">Interviews</a></li>
                                                            <li class="nav-item"><a href="http://www.youtube.com/ESPNCricinfo" data-hover=""
                                                                class="nav-link dropdown-item" target="_parent" rel="" title="YouTube">YouTube</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="nav-item dropdown"><a href="https://www.espncricinfo.com/ci/engine/records/index.html"
                                                data-hover="" class="nav-link" target="_parent" rel="" title="Stats">Stats</a>
                                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                    <div class="d-flex flex-row">
                                                        <ul class="list-unstyled">
                                                            <li class="nav-item"><a href="https://www.espncricinfo.com/ci/engine/records/index.html"
                                                                data-hover="" class="nav-link dropdown-item" target="_parent" rel=""
                                                                title="Stats home">Stats home</a></li>
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="IPL 2021" href="/ci/engine/series/1249214.html?view=records">IPL 2021</a></li>
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="SuperStats" href="/ci/content/story/genre.html?genre=706">SuperStats</a></li>
                                                            <li class="nav-item"><a href="https://www.espncricinfo.com/ci/engine/records/index.html"
                                                                data-hover="" class="nav-link dropdown-item" target="_parent" rel=""
                                                                title="All records">All records</a></li>
                                                            <li class="nav-item"><a href="https://www.espncricinfo.com/ci/content/ground/index.html"
                                                                data-hover="" class="nav-link dropdown-item" target="_parent" rel=""
                                                                title="Grounds">Grounds</a></li>
                                                        </ul>
                                                        <ul class="list-unstyled">
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="AskCricinfo" href="/ask">AskCricinfo</a></li>
                                                            <li class="nav-item"><a href="https://www.espncricinfo.com/ci/engine/stats/index.html"
                                                                data-hover="" class="nav-link dropdown-item" target="_parent" rel=""
                                                                title="Statsguru">Statsguru</a></li>
                                                            <li class="nav-item"><a
                                                                href="https://www.espncricinfo.com/ci/engine/records/index.html?id=2021;type=year"
                                                                data-hover="" class="nav-link dropdown-item" target="_parent" rel=""
                                                                title="2021 records">2021 records</a></li>
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="Players" href="/player">Players</a></li>
                                                            <li class="nav-item"><a href="https://www.espncricinfo.com/rankings/content/page/211271.html"
                                                                data-hover="" class="nav-link dropdown-item" target="_parent" rel=""
                                                                title="Rankings">Rankings</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <ul class="navbar-nav text-light nav-utils align-items-center">
                                            <li class="nav-item dropdown"><a href="javascript:;" data-hover="" class="nav-link" target="_parent"
                                                rel="" title="Edition IN">Edition IN</a>
                                                <div class="dropdown-menu edition-dropdown" aria-labelledby="navbarDropdown">
                                                    <div class="d-flex flex-row">
                                                        <ul class="list-unstyled">
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="Africa"
                                                                href="/series/icc-men-s-t20-world-cup-2021-22-1267897/afghanistan-vs-india-33rd-match-group-2-1273744/full-scorecard#">Africa</a>
                                                            </li>
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="Bangladesh"
                                                                href="/series/icc-men-s-t20-world-cup-2021-22-1267897/afghanistan-vs-india-33rd-match-group-2-1273744/full-scorecard#">Bangladesh</a>
                                                            </li>
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="India-Hindi"
                                                                href="/series/icc-men-s-t20-world-cup-2021-22-1267897/afghanistan-vs-india-33rd-match-group-2-1273744/full-scorecard#">India-Hindi</a>
                                                            </li>
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="Pakistan"
                                                                href="/series/icc-men-s-t20-world-cup-2021-22-1267897/afghanistan-vs-india-33rd-match-group-2-1273744/full-scorecard#">Pakistan</a>
                                                            </li>
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="United Kingdom"
                                                                href="/series/icc-men-s-t20-world-cup-2021-22-1267897/afghanistan-vs-india-33rd-match-group-2-1273744/full-scorecard#">United
                                                                Kingdom</a></li>
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="Global"
                                                                href="/series/icc-men-s-t20-world-cup-2021-22-1267897/afghanistan-vs-india-33rd-match-group-2-1273744/full-scorecard#">Global</a>
                                                            </li>
                                                        </ul>
                                                        <ul class="list-unstyled">
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="Australia"
                                                                href="/series/icc-men-s-t20-world-cup-2021-22-1267897/afghanistan-vs-india-33rd-match-group-2-1273744/full-scorecard#">Australia</a>
                                                            </li>
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item active" target="_self"
                                                                rel="" title="India"
                                                                href="/series/icc-men-s-t20-world-cup-2021-22-1267897/afghanistan-vs-india-33rd-match-group-2-1273744/full-scorecard#">India</a>
                                                            </li>
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="New Zealand"
                                                                href="/series/icc-men-s-t20-world-cup-2021-22-1267897/afghanistan-vs-india-33rd-match-group-2-1273744/full-scorecard#">New
                                                                Zealand</a></li>
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="Sri Lanka"
                                                                href="/series/icc-men-s-t20-world-cup-2021-22-1267897/afghanistan-vs-india-33rd-match-group-2-1273744/full-scorecard#">Sri
                                                                Lanka</a></li>
                                                            <li class="nav-item"><a data-hover="" class="nav-link dropdown-item" target="_self" rel=""
                                                                title="United States"
                                                                href="/series/icc-men-s-t20-world-cup-2021-22-1267897/afghanistan-vs-india-33rd-match-group-2-1273744/full-scorecard#">United
                                                                States</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="nav-item dropdown"><a href="javascript:;" data-hover="" class="nav-link" target="_parent"
                                                rel="" title="English">
                                                <div class="nav-icon-svg"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                        d="M15.6004 5H0V6.78593H8.04745V12.7677C7.64579 13.1837 7.2011 13.5423 6.71338 13.8436C6.22566 14.1305 5.66621 14.2739 5.03503 14.2739C4.51862 14.2739 4.05241 14.1161 3.63641 13.8006C3.22041 13.4706 3.01241 12.9542 3.01241 12.2513C3.01241 11.6345 3.22759 11.1539 3.65793 10.8097C4.08828 10.4654 4.69793 10.2932 5.4869 10.2932C5.75945 10.2932 6.06069 10.3148 6.39062 10.3578C6.72055 10.4008 6.9931 10.451 7.20828 10.5084L7.38041 8.70097C7.1509 8.64359 6.83531 8.59338 6.43366 8.55035C6.032 8.50731 5.65186 8.48579 5.29324 8.48579C4.00221 8.48579 2.94786 8.83007 2.13021 9.51862C1.3269 10.1928 0.925241 11.1109 0.925241 12.2728C0.925241 13.1048 1.11172 13.8006 1.48469 14.36C1.85766 14.9194 2.34538 15.3426 2.94786 15.6295C3.56469 15.9021 4.22455 16.0383 4.92745 16.0383C5.616 16.0383 6.21131 15.9308 6.71338 15.7156C7.21545 15.4861 7.66014 15.2279 8.04745 14.941V18.7975H10.1346V12.8753C10.4932 12.445 10.8519 12.115 11.2105 11.8855C11.5834 11.656 11.9492 11.5412 12.3079 11.5412C12.571 11.5412 12.8012 11.5907 12.9983 11.6898L13.6824 9.93099C13.3533 9.82822 12.9956 9.77683 12.6091 9.77683C11.648 9.77683 10.8232 10.0852 10.1346 10.7021V6.78593H14.9057L15.6004 5ZM15.3669 14.7104H20.1593L21.7254 18.7414H24L18.7197 5.14234H16.8758L11.5862 18.7414H13.8173L14.2753 17.5492L14.2763 17.5498L15.3669 14.7104ZM17.1062 5.14232V5.14234H16.877L16.877 5.14232H17.1062ZM17.7949 8.05601C17.6879 8.43551 17.5778 8.79507 17.4646 9.13461L17.4615 9.14396L16.1198 12.7239H19.4683L18.1383 9.13154L17.7949 8.05601Z"
                                                        fill="black"></path>
                                                </svg></div>English
                                            </a>
                                                <div class="dropdown-menu language-dropdown" aria-labelledby="navbarDropdown">
                                                    <div class="d-flex flex-row">
                                                        <ul class="list-unstyled">
                                                            <li class="nav-item"><a href="https://www.espncricinfo.com" data-hover=""
                                                                class="nav-link dropdown-item active" target="_blank" rel="noopener noreferrer"
                                                                title="English">English</a></li>
                                                            <li class="nav-item"><a href="https://www.espncricinfo.com/hindi" data-hover=""
                                                                class="nav-link dropdown-item" target="_blank" rel="noopener noreferrer"
                                                                title="हिंदी">हिंदी</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="nav-item nav-more dropdown"><i
                                                class="espn-icon icon-more-after icon-lg nav-link text-light more-options"></i>
                                                <div class="dropdown-menu more-dropdown-menu">
                                                    <div class="featured-links"><a
                                                        href="https://www.espncricinfo.com/wisdenalmanack/content/story/almanack" data-hover=""
                                                        class="featured-link" target="_blank" rel="noopener noreferrer"><img
                                                            src="https://wassets.hscicdn.com/static/images/lazyimage.svg" alt="Logo"
                                                            class="img img-lazy" /><span class="link-label">Wisden Almanack</span><i
                                                                class="espn-icon icon-external-outline-after icon-xs external-icon"></i></a><a
                                                                    href="https://www.espn.in" data-hover="" class="featured-link" target="_blank"
                                                                    rel="noopener noreferrer"><img src="https://wassets.hscicdn.com/static/images/lazyimage.svg"
                                                                        alt="Logo" class="img img-lazy" /><span class="link-label">ESPN.in</span><i
                                                                            class="espn-icon icon-external-outline-after icon-xs external-icon"></i></a></div>
                                                    <div class="footer-links"><a
                                                        href="https://submit.espncricinfo.com/ci/content/submit/forms/feedback.html"
                                                        data-hover="Feedback" class="footer-link" target="_parent" rel="">Feedback</a><a
                                                            href="https://www.espncricinfo.com/ci/content/page/866033.html" data-hover="Sitemap"
                                                            class="footer-link" target="_parent" rel="">Sitemap</a><a
                                                                href="https://www.espncricinfo.com/ci/content/page/156066.html" data-hover="About us"
                                                                class="footer-link" target="_parent" rel="">About us</a><a
                                                                    href="https://www.espncricinfo.com/ci/content/page/156050.html" data-hover="Contact us"
                                                                    class="footer-link" target="_parent" rel="">Contact us</a><a
                                                                        href="https://jobs.disneycareers.com/" data-hover="Careers" class="footer-link"
                                                                        target="_parent" rel="">Careers</a><a
                                                                            href="https://www.nielsen.com/us/en/legal/privacy-statement/digital-measurement"
                                                                            data-hover="About Nielsen Measurement" class="footer-link" target="_parent" rel="">About
                                                            Nielsen Measurement</a></div>
                                                </div>
                                            </li>
                                            <div>
                                                <li class="search"><i class="espn-icon icon-search-solid-after text-light"></i></li>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                <section id="pane-main" class="">
                    <div>
                        <div class="ad-slot ad-slot-wallpaper">
                            <div class="ad-placeholder wallpaper ad-wallpaper-792349"></div>
                        </div>
                        <div class="ad-placeholder overlay ad-overlay-962138"></div>
                    </div>
                    <section id="main-container">
                        <div>
                            <style>
                                .home-score-card {
                                    box - shadow: 1px 1px 6px rgba(0, 0, 0, .16);
                                border-radius: 0px
            }

                                @media(max-width: 1023.98px) {
              .home - score - card {
                                    top: 40px !important;
                                z-index: 99 !important;
                                width: 100vw;
                                background-color: #fff
              }
            }

                                @media(max-width: 1023.98px)and (orientation: landscape) {
              .home - score - card {
                                    position: relative;
                                top: 0px
              }
            }

                                .live-stats {
                                    display: flex;
                                align-items: center;
                                justify-content: space-between;
                                padding: .5rem 1rem;
                                font-size: .75rem;
                                background-color: #f1f2f3
            }

                                .live-stats .run-rate-container {
                                    overflow - x: auto
            }

                                @media(max-width: 1023.98px) {
              .live - stats {
                                    display: inline;
                                padding: 0;
                                color: #6c6d6f;
                                background-color: #fff;
                                white-space: nowrap;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                font-size: .75rem;
                                line-height: 1.5;
                                letter-spacing: .1px
              }
            }

                                @media(min-width: 1024px) {
              .live - stats.container - padding {
                                    padding - left: calc((100vw - 960px) / 2);
                                padding-right: calc((100vw - 960px) / 2)
              }
            }

                                @media(min-width: 1280px) {
              .live - stats.container - padding {
                                    padding - left: calc((100vw - 1240px) / 2);
                                padding-right: calc((100vw - 1240px) / 2)
              }
            }

                                .match-home-tabs {
                                    border - bottom - left - radius: 10px;
                                border-bottom-right-radius: 10px;
                                margin-top: 5px;
                                overflow: hidden
            }

                                @media(min-width: 1024px) {
              .match - home - tabs.container - padding {
                                    padding - left: calc((100vw - 960px) / 2);
                                padding-right: calc((100vw - 960px) / 2)
              }
            }

                                @media(min-width: 1280px) {
              .match - home - tabs.container - padding {
                                    padding - left: calc((100vw - 1240px) / 2);
                                padding-right: calc((100vw - 1240px) / 2)
              }
            }

                                .match-home-tabs .widget-tab {
                                    padding - left: 12px;
                                padding-right: 12px
            }

                                @media(max-width: 1023.98px) {
              .match - home - tabs.widget - tab {
                                    padding - left: 8px;
                                padding-right: 8px
              }

                                .match-home-tabs .widget-tab:hover {
                                    color: #000
              }
            }

                                @media(hover: none) {
              .match - home - tabs.widget - tab:not(.widget-tab-active):hover {
                                    color: #a5a6a7
              }
            }

                                @media(min-width: 1024px) {
              .match - home - tabs {
                                    justify - content: flex-start
              }
            }

                                @media(max-width: 1279.98px) {
              .match - home - tabs {
                                    overflow - x: scroll
              }

                                .match-home-tabs {
                                    scrollbar - width: none;
                                -webkit-overflow-scrolling: touch
              }

                                .match-home-tabs::-webkit-scrollbar {
                                    display: none
              }
            }

                                @media(max-width: 1023.98px) {
              .match - home - tabs {
                                    border - radius: 0
              }
            }

                                @media(max-width: 767.98px) {
              .match - home - tabs {
                                    margin - top: 0px
              }
            }

                                @media(max-width: 1023.98px) {
              .match - home - tabs.widget - tab {
                                    padding - top: 14px
              }
            }

                                .match-body {
                                    margin - top: 15px
            }

                                @media(max-width: 1023.98px) {
              .match - body {
                                    margin - top: 0
              }

                                .match-body .content-block {
                                    padding - top: 0;
                                overflow-x: hidden
              }

                                .match-body .statistics-content-block {
                                    padding - top: 0;
                                margin-bottom: 1rem;
                                overflow-x: inherit !important
              }
            }

                                @media(max-width: 1023.98px) {
              .match - body.author {
                                    position: relative;
                                font-size: .75rem !important
              }
            }

                                .match-header {
                                    position: relative;
                                justify-content: space-between;
                                border-bottom: 1px solid #edeef0;
                                border-bottom-left-radius: 0;
                                border-bottom-right-radius: 0;
                                display: flex
            }

                                .match-header-container {
                                    position: relative
            }

                                .match-header.container-padding .event {
                                    width: calc(77% - 40px);
                                padding: 0 20px
            }

                                .match-header.container-padding .teams {
                                    margin: 0
            }

                                .match-header.container-padding .teams .team {
                                    margin: .25rem 0
            }

                                @media(min-width: 1024px) {
              .match - header.container - padding {
                                    padding - left: calc((100vw - 960px) / 2);
                                padding-right: calc((100vw - 960px) / 2)
              }
            }

                                @media(min-width: 1280px) {
              .match - header.container - padding {
                                    padding - left: calc((100vw - 1240px) / 2);
                                padding-right: calc((100vw - 1240px) / 2)
              }
            }

                                .match-header .event {
                                    width: 65%;
                                padding: 0 20px 15px 20px
            }

                                .match-header .event.collapsed {
                                    padding - bottom: 6px
            }

                                @media(max-width: 1023.98px) {
              .match - header.event {
                                    width: 100%;
                                padding: 10px
              }

                                .match-header .event.collapsed {
                                    padding: 6px 10px
              }
            }

                                .match-header .event-full-width {
                                    width: 100%
            }

                                .match-header .rhs {
                                    border - left: 1px solid #edeef0;
                                width: 35%
            }

                                @media(max-width: 767.98px) {
              .match - header.rhs {
                                    display: none
              }
            }

                                .match-header .rhs .slick-dots {
                                    bottom: 0;
                                height: 0
            }

                                .match-header .rhs .slick-dots li {
                                    bottom: 25px
            }

                                .match-header .best-player {
                                    padding: 20px
            }

                                .match-header .best-player-title {
                                    font - size: .875rem;
                                line-height: 1.5;
                                letter-spacing: 0;
                                font-weight: bold;
                                text-transform: uppercase;
                                color: #2b2c2d;
                                margin-bottom: 10px
            }

                                .match-header .best-player img {
                                    width: 60px;
                                height: 60px;
                                background: #fff;
                                border: 1px solid rgba(0, 0, 0, .1);
                                border-radius: 50%;
                                object-fit: cover;
                                margin-right: 15px
            }

                                .match-header .best-player-content {
                                    display: flex;
                                align-items: center
            }

                                .match-header .best-player-name {
                                    font - size: 16px;
                                line-height: 20px
            }

                                .match-header .best-player-team-name {
                                    font - size: .75rem;
                                line-height: 1.5;
                                letter-spacing: .1px;
                                color: #6c6d6f;
                                letter-spacing: .1px
            }

                                .match-header .stats {
                                    display: flex;
                                flex-direction: column;
                                height: 100%
            }

                                .match-header .stats-padder,
                                .match-header .stats .required-run-rate,
                                .match-header .stats .current-run-rate,
                                .match-header .stats .recent-overs {
                                    padding: 20px
            }

                                .match-header .stats-secondary {
                                    font - size: .875rem;
                                line-height: 1.5;
                                letter-spacing: 0;
                                color: #6c6d6f;
                                margin-bottom: 5px
            }

                                .match-header .stats-value {
                                    font - size: 16px;
                                line-height: 20px;
                                color: #2b2c2d;
                                letter-spacing: .2px;
                                font-weight: bold
            }

            .match-header .stats>div {
                                    height: 50%
            }

                                .match-header .stats .run-rate-container {
                                    display: flex;
                                width: 100%
            }

                                .match-header .stats .recent-overs {
                                    border - top: 1px solid #edeef0
            }

                                .match-header .stats .current-run-rate {
                                    width: 50%
            }

                                .match-header .stats .required-run-rate {
                                    border - left: 1px solid #edeef0;
                                width: 50%
            }

                                .player-details {
                                    display: flex;
                                flex-direction: row;
                                align-items: start
            }

                                .player-details .header-title {
                                    font - size: .875rem;
                                line-height: 1.5;
                                letter-spacing: 0;
                                text-transform: none !important
            }

                                .player-details .player-headshot {
                                    width: 40px;
                                height: auto;
                                border-radius: 100px;
                                border: 1px solid #edeef0
            }

                                .player-details .player-info {
                                    padding - left: .5rem;
                                width: auto;
                                display: block
            }

                                .player-details .player-info .name {
                                    font - size: .875rem;
                                line-height: 1.25;
                                letter-spacing: .2px;
                                margin-bottom: .5rem;
                                font-family: "BentonSans-Bold", Arial, "Noto Sans", sans-serif;
                                font-weight: bold;
                                color: #2b2c2d
            }

                                .player-details .player-info .player-team-info {
                                    font - family: "BentonSans", Arial, "Noto Sans", sans-serif;
                                font-weight: normal;
                                color: #6c6d6f;
                                font-size: .75rem
            }

                                .player-stats {
                                    display: inline-flex;
                                flex-direction: row;
                                align-items: center
            }

                                .player-stats .runs {
                                    font - family: "BentonSans-Bold", Arial, "Noto Sans", sans-serif;
                                font-weight: bold;
                                color: #2b2c2d;
                                color: #03a9f4;
                                font-size: .75rem;
                                line-height: 1.5;
                                letter-spacing: .1px;
                                letter-spacing: .3px
            }

                                .player-stats .runs .balls {
                                    font - family: "BentonSans", Arial, "Noto Sans", sans-serif;
                                font-weight: normal;
                                color: #6c6d6f
            }

                                .player-stats .runs+.runs-breakdown {
                                    padding - left: .5rem
            }

                                .player-stats .stat {
                                    margin - right: 1rem
            }

                                .player-stats .stat .title {
                                    font - size: .625rem;
                                line-height: 1.4;
                                letter-spacing: .8px;
                                text-transform: uppercase;
                                color: #a5a6a7;
                                font-family: "BentonSans-Bold", Arial, "Noto Sans", sans-serif;
                                font-weight: bold;
                                color: #2b2c2d;
                                letter-spacing: .8px
            }

                                .player-stats .stat .title.label-light {
                                    letter - spacing: .3px
            }

                                .player-stats .stat .title.dots {
                                    text - transform: capitalize
            }

                                .player-stats .stat .value {
                                    text - transform: uppercase;
                                font-family: "BentonSans-Bold", Arial, "Noto Sans", sans-serif;
                                font-weight: bold;
                                color: #2b2c2d;
                                font-size: .75rem;
                                line-height: 1.5;
                                letter-spacing: .6px;
                                letter-spacing: .6px;
                                font-family: "BentonSans-Bold", Arial, "Noto Sans", sans-serif;
                                font-weight: bold;
                                color: #2b2c2d
            }

                                .match-section-header {
                                    padding: 1rem;
                                border-bottom: 1px solid #edeef0
            }

                                .match-section-header .data {
                                    padding - left: .5rem;
                                margin-left: .5rem;
                                font-size: .75rem;
                                line-height: 1.5;
                                letter-spacing: .1px;
                                color: #6c6d6f;
                                text-transform: none;
                                font-family: "BentonSans", Arial, "Noto Sans", sans-serif;
                                font-weight: normal;
                                position: relative
            }

                                .match-section-header .data.hundred {
                                    cursor: pointer;
                                color: #d00;
                                font-size: 1rem;
                                line-height: 1;
                                display: inline-block
            }

                                .match-section-header .data.hundred:after {
                                    font - weight: 900
            }

                                .match-section-header .data+.data {
                                    border - left: 1px solid #6c6d6f
            }

                                @media(max-width: 1023.98px) {
              .match - section - header.data {
                                    display: none
              }
            }

                                .match-centre {
                                    text - transform: uppercase
            }

                                @media(max-width: 1023.98px) {
              .match - centre {
                                    text - transform: capitalize !important;
                                display: flex;
                                justify-content: space-between
              }
            }

                                .batsman {
                                    width: 100%
            }

                                @media(max-width: 1023.98px) {
              .batsman {
                                    font - size: 11px !important;
                                padding: 0 10px
              }
            }

                                .bowler {
                                    width: 100%
            }

                                @media(max-width: 1023.98px) {
              .bowler {
                                    font - size: 11px !important;
                                padding: 0 10px
              }
            }

                                .hundred-modal .modal-title {
                                    font - size: 1.25rem;
                                line-height: 1.5;
                                letter-spacing: .2px;
                                margin-bottom: .5rem;
                                font-family: "BentonSans-Bold", Arial, "Noto Sans", sans-serif;
                                font-weight: bold;
                                color: #2b2c2d;
                                margin-bottom: 0
            }

                                .hundred-modal .modal-body {
                                    padding: 0;
                                border-bottom-left-radius: 10px;
                                border-bottom-right-radius: 10px;
                                overflow: auto
            }

                                .hundred-modal .modal-body .table-bordered {
                                    border: none;
                                margin-bottom: 0
            }

                                .hundred-modal .modal-body .table-bordered td {
                                    vertical - align: middle;
                                padding: 16px 12px
            }

                                @media(max-width: 1023.98px) {
              .hundred - modal.modal.show {
                                    align - items: flex-end
              }

                                .hundred-modal.modal .modal-dialog {
                                    margin: 0;
                                width: 100%
              }

                                .hundred-modal.modal .modal-dialog .modal-title {
                                    font - size: 1rem
              }

                                .hundred-modal.modal .modal-dialog .modal-content {
                                    border: none;
                                border-bottom-left-radius: 0;
                                border-bottom-right-radius: 0
              }

                                .hundred-modal.modal .modal-dialog .modal-content .table {
                                    font - size: .875rem
              }

                                .hundred-modal.modal .modal-dialog .modal-content .table td {
                                    padding: 12px
              }
            }

                                .rollover-the100 {
                                    display: inline-block;
                                position: relative;
                                cursor: pointer;
                                width: 26px;
                                height: 10px
            }

            .rollover-the100>svg {
                                    position: absolute;
                                height: 25px;
                                width: 25px;
                                top: -7px
            }

                                .match-scorecard-table table td,
                                .match-scorecard-table table th {
                                    padding: .75rem 12px;
                                text-align: right;
                                font-size: .75rem
            }

                                @media(max-width: 767.98px) {

              .match - scorecard - table table td,
                                .match-scorecard-table table th {
                                    padding: .75rem 6px
              }

                                .match-scorecard-table table td:first-child,
                                .match-scorecard-table table th:first-child {
                                    padding: .75rem 16px
              }
            }

                                .match-scorecard-table table td a,
                                .match-scorecard-table table th a {
                                    font - family: "BentonSans-Bold", Arial, "Noto Sans", sans-serif;
                                font-size: .75rem;
                                color: #2b2c2d;
                                text-decoration: underline;
                                text-decoration-color: #cbccce
            }

                                .match-scorecard-table table td a:hover,
                                .match-scorecard-table table th a:hover {
                                    color: #0278bb
            }

                                .match-scorecard-table table td:first-child,
                                .match-scorecard-table table th:first-child {
                                    text - align: left
            }

                                .match-scorecard-table table td.out {
                                    border - left: 4px solid transparent !important
            }

                                @media(max-width: 767.98px) {
              .match - scorecard - table table td.out {
                                    border - left: 2px solid transparent !important
              }
            }

                                .match-scorecard-table table td.not-out {
                                    border - left: 4px solid red !important
            }

                                @media(max-width: 767.98px) {
              .match - scorecard - table table td.not-out {
                                    border - left: 2px solid red !important
              }
            }

                                .match-scorecard-table table td.batsman-cell {
                                    background - color: transparent;
                                padding-left: .75rem
            }

            .match-scorecard-table table td.batsman-cell>div>span {
                                    font - size: .625rem;
                                line-height: 1.6;
                                letter-spacing: 0
            }

                                .match-scorecard-table table.bowler td:nth-child(2) {
                                    text - align: right
            }

                                .match-scorecard-table table .ReactCollapse--collapse {
                                    transition: height 500ms
            }

            .match-scorecard-table table .ReactCollapse--collapse .ReactCollapse--content>.collapse-content {
                                    padding: .75rem 12px
            }

                                @media(max-width: 767.98px) {
              .match - scorecard - table table .ReactCollapse--collapse .ReactCollapse--content>.collapse-content {
                                    padding: .75rem 16px
              }
            }

                                .match-scorecard-table table .total td {
                                    font - family: "BentonSans-Bold", Arial, "Noto Sans", sans-serif;
                                font-size: .875rem
            }

                                .match-scorecard-table table.match-details th,
                                .match-scorecard-table table.match-details td {
                                    font - size: .875rem
            }

                                .match-scorecard-table .Collapsible__trigger .espn-icon {
                                    font - size: x-large;
                                transition: all .3s ease-in;
                                width: 24px;
                                height: 24px
            }

                                .match-scorecard-table .Collapsible__trigger.is-open .espn-icon {
                                    display: inline-block;
                                transform: rotate(180deg);
                                -webkit-transform: rotate(180deg)
            }

                                .match-scorecard-table .match-details-table td {
                                    text - align: left
            }

                                .match-notes ul li {
                                    padding: 6px;
                                font-size: .875rem;
                                color: #6c6d6f
            }

                                .wicket-details {
                                    display: block;
                                width: fit-content;
                                padding: 5px
            }

                                .report-container {
                                    padding - bottom: 7rem
            }

                                .report-container .report-image {
                                    border - radius: 10px;
                                margin-bottom: 60px
            }

                                .report-container .author-details {
                                    font - size: .875rem;
                                line-height: 1.5;
                                letter-spacing: 0;
                                color: #6c6d6f
            }

                                .match-details-table .image-container .header-img {
                                    width: 24px;
                                height: 24px
            }

                                .match-details-table .multiple-detail-table-values {
                                    padding: 0 !important
            }

            .match-details-table .multiple-detail-table-values>a,
            .match-details-table .multiple-detail-table-values>.replaced-player {
                                    padding: 12px;
                                border-bottom: 1px solid #edeef0
            }

                                @media(max-width: 1023.98px) {

              .match - details - table.multiple - detail - table - values > a,
              .match - details - table.multiple - detail - table - values >.replaced - player {
                                    padding: 6px
              }
            }

            .match-details-table .multiple-detail-table-values>a:last-of-type,
            .match-details-table .multiple-detail-table-values>.replaced-player:last-of-type {
                                    border - bottom: none
            }

                                @media(max-width: 1023.98px) {
              .match - container {
                                    padding: 0 16px;
                                margin-bottom: 30px
              }
            }

                                .innings-stat .slick-slider {
                                    width: 300px
            }

                                .innings-stat table {
                                    border - bottom: 1px solid #edeef0;
                                margin-bottom: 0
            }

                                .innings-stat table thead {
                                    background - color: #f9f9fb
            }

                                .innings-stat table thead td {
                                    font - size: .625rem;
                                line-height: 1.4;
                                letter-spacing: .8px;
                                font-family: "BentonSans-Bold", Arial, "Noto Sans", sans-serif;
                                font-weight: bold;
                                color: #2b2c2d;
                                text-transform: uppercase;
                                padding: .5rem
            }

                                .innings-stat table thead td.label-light {
                                    letter - spacing: .3px
            }

                                .innings-stat table thead td:first-child {
                                    padding - left: 1rem
            }

                                .innings-stat table thead td:last-child {
                                    padding - right: 1rem
            }

                                .innings-stat table thead td a {
                                    margin - bottom: 0
            }

                                .innings-stat table thead td.dots {
                                    text - transform: capitalize
            }

                                .innings-stat table tbody td {
                                    vertical - align: middle;
                                padding: .5rem;
                                line-height: 1.4
            }

                                .innings-stat table tbody td:first-child {
                                    padding - left: 1rem
            }

                                .innings-stat table tbody td:last-child {
                                    padding - right: 1rem;
                                white-space: nowrap
            }

                                .innings-stat table tbody td a {
                                    color: #2b2c2d !important;
                                text-decoration: underline;
                                text-decoration-color: #cbccce
            }

                                .innings-stat table tbody td a:hover {
                                    color: #0278bb
            }

                                .innings-stat .footer {
                                    text - align: center;
                                padding-bottom: .5rem;
                                padding-top: .5rem;
                                font-size: .875rem;
                                line-height: 1.5;
                                letter-spacing: 0
            }

                                .innings-stat .footer .control {
                                    cursor: pointer;
                                color: #6c6d6f
            }

                                .innings-stat .footer .control:first-child {
                                    padding - right: .5rem
            }

                                .innings-stat .footer .control:last-child {
                                    padding - left: .5rem
            }

                                .innings-stat .footer .control:hover {
                                    color: #0278bb
            }

                                .innings-stat .footer .control.disabled {
                                    cursor: auto
            }

                                .innings-stat .footer .control.disabled:hover {
                                    color: #6c6d6f
            }

                                @media(min-width: 1024px) {
              .match - comment.match - comment - run {
                                    margin - left: .4rem
              }
            }

                                .match-comment .change-of-end {
                                    display: flex;
                                background-color: #ebf8fe;
                                font-size: .75rem;
                                justify-content: center;
                                color: #2b2c2d;
                                padding: 7px 0;
                                font-family: "BentonSans-Bold", Arial, "Noto Sans", sans-serif;
                                font-weight: bold;
                                color: #2b2c2d
            }

                                .match-comment .change-of-end-icon {
                                    margin - right: 4px
            }

                                .match-comment .change-of-end-icon svg {
                                    height: 16px
            }

                                .match-comment .match-comment-long-text p {
                                    margin - bottom: .5rem
            }

                                .match-comment .match-comment-long-text p:last-child {
                                    margin - bottom: 0
            }

                                .match-comment:last-child .match-comment-long-text p {
                                    margin - bottom: 1rem
            }

                                .bet365-tighten-hr hr {
                                    margin - top: 0;
                                margin-bottom: 15px
            }

                                .match-details-team-flag {
                                    width: 16px;
                                height: 24px;
                                border-radius: 0
            }

                                @media(min-width: 1024px)and (max-width: 1279.98px) {

              .live - scorecard table th,
                                .live-scorecard table td {
                                    padding: .75rem .5rem
              }
            }

                                @media(min-width: 1024px) {

              .live - scorecard table th,
                                .live-scorecard table td {
                                    padding: .75rem 8px
              }

                                .live-scorecard .career-stats th:last-child,
                                .live-scorecard .career-stats td:last-child {
                                    padding - right: 1rem
              }
            }

                                .live-scorecard-left {
                                    position: relative
            }

                                @media(max-width: 1023.98px) {
              .match - comment div {
                                    font - size: .875rem;
                                line-height: 1.5;
                                letter-spacing: 0
              }

                                .match-comment p {
                                    margin - bottom: 0px
              }

                                .match-live .match-section-header {
                                    font - size: .625rem;
                                line-height: 1.6;
                                letter-spacing: 0;
                                padding: .75rem 1rem
              }

                                .match-live .match-section-header .hundred-icon {
                                    margin - right: 12px;
                                color: #d00
              }

                                .match-live .match-section-header .hundred-icon:after {
                                    font - weight: 900
              }

                                .match-live .match-section-header label {
                                    font - size: .75rem;
                                line-height: 1.5;
                                letter-spacing: .1px;
                                font-family: "BentonSans-Medium", Arial, "Noto Sans", sans-serif
              }
            }

                                .match-section-header {
                                    justify - content: space-between
            }

                                .match-section-header .hundred-icon {
                                    color: #d00;
                                cursor: pointer;
                                font-size: 1rem
            }

                                .match-section-header .hundred-icon:after {
                                    font - weight: 900
            }

                                .match-header-info {
                                    padding: .75rem 1rem !important;
                                display: flex;
                                justify-content: space-between;
                                border-bottom: 1px solid #edeef0;
                                align-items: center
            }

                                .match-header-info .status {
                                    text - transform: uppercase
            }

                                .match-header-info .header-actions {
                                    display: flex;
                                align-items: center
            }

                                .match-header-info .header-actions .subscribe {
                                    cursor: pointer;
                                color: #dcdddf
            }

                                .match-header-info .header-actions .subscribed {
                                    color: red
            }

                                .playerofthematch {
                                    padding: .75rem 1rem;
                                display: flex;
                                align-items: center;
                                justify-content: flex-start;
                                border-bottom: 1px solid #edeef0
            }

                                .playerofthematch-image-container {
                                    position: relative
            }

                                .playerofthematch .playerofthematch-content {
                                    margin - left: 1rem;
                                flex-grow: 1
            }

                                .playerofthematch .playerofthematch-content .playerofthematch--player-detail {
                                    display: flex;
                                align-items: space-between
            }

                                .playerofthematch.inverted {
                                    justify - content: space-between
            }

                                .playerofthematch.inverted .playerofthematch-content {
                                    margin: 0
            }

                                .playerofthematch.no-border {
                                    border: none
            }

                                .playerofthematch-image {
                                    width: 60px;
                                height: 60px;
                                border-radius: 50%;
                                border: 1px solid #edeef0
            }

                                .playerofthematch-badge {
                                    position: absolute;
                                background: #fff;
                                box-shadow: 0px 1px 4px rgba(68, 68, 68, .1);
                                border-radius: 50%;
                                width: 24px;
                                height: 24px;
                                right: -8px;
                                bottom: 0;
                                display: flex;
                                justify-content: center;
                                align-items: center
            }

                                .playerofthematch-badge img {
                                    width: 12px;
                                height: 12px
            }

                                .playerofthematch-badge.inverted {
                                    left: -8px;
                                right: inherit
            }

                                .playerofthematch-title {
                                    text - transform: uppercase;
                                font-size: .625rem;
                                padding-top: 6px;
                                color: #2b2c2d
            }

                                .playerofthematch-name {
                                    font - size: .875rem;
                                font-family: "BentonSans-Medium", Arial, "Noto Sans", sans-serif;
                                padding-top: 6px;
                                color: #2b2c2d;
                                padding-bottom: 0;
                                border-bottom: 1px dashed #cbccce;
                                width: min-content;
                                white-space: nowrap;
                                transition: all .5s ease-in-out
            }

                                .playerofthematch-name:hover {
                                    color: #03a9f4
            }

                                .playerofthematch-teamName {
                                    border - bottom: none;
                                color: #6c6d6f;
                                font-size: .75rem
            }

                                .playerofthematch-player-detail {
                                    display: flex;
                                justify-content: space-between;
                                align-items: center
            }

                                .playerofthematch-score-text {
                                    color: #6c6d6f;
                                font-size: .75rem
            }

                                .sticky-card {
                                    z - index: 999 !important
            }

                                .sticky-card .card {
                                    border - radius: 0
            }

                                @media(min-width: 768px) {
              .sticky - card {
                                    left: 0;
                                width: 100vw !important;
                                top: 44px !important
              }
            }

                                .forecaster img {
                                    width: 20px !important;
                                height: 20px !important;
                                margin-right: 12px
            }

                                @media(max-width: 1023.98px) {
              .forecaster {
                                    background: #f9f9fb;
                                box-shadow: inset 0px 1px 0px rgba(0, 0, 0, .07);
                                margin: 12px -10px -10px -10px;
                                padding: 6px 16px
              }
            }

                                .match-info-share-button {
                                    float: right;
                                bottom: 24px;
                                right: 16px;
                                cursor: pointer
            }

                                @media(max-width: 1023.98px) {
              .match - info - share - popup.show {
                                    align - items: flex-end
              }
            }

                                @media(max-width: 1023.98px) {
              .match - info - share - popup.show.modal - dialog {
                                    margin: 0;
                                width: 100% !important
              }
            }

                                .match-info-share-popup.show .modal-dialog .modal-header {
                                    display: none
            }

                                .match-info-share-popup.show .modal-dialog .modal-body {
                                    padding: 32px 24px;
                                color: #48494a
            }

                                .match-info-share-popup.show .modal-dialog .modal-body .title-desc {
                                    margin - bottom: 32px
            }

                                .match-info-share-popup.show .modal-dialog .modal-body .title-desc h3 {
                                    color: #2b2c2d;
                                font-size: 20px;
                                margin: 0
            }

                                .match-info-share-popup.show .modal-dialog .modal-body .title-desc p {
                                    font - size: .75rem;
                                margin: 0
            }

                                .match-info-share-popup.show .modal-dialog .modal-body .post-type p {
                                    font - family: "BentonSans-Medium", Arial, "Noto Sans", sans-serif;
                                font-size: .875rem;
                                margin-bottom: 16px
            }

                                .match-info-share-popup.show .modal-dialog .modal-body .post-type .post-type-grid {
                                    display: grid;
                                grid-template-columns: repeat(3, 1fr);
                                grid-gap: 16px;
                                height: 180px
            }

                                .match-info-share-popup.show .modal-dialog .modal-body .post-type .post-type-grid .selected-shadow {
                                    box - shadow: 3px 3px 10px rgba(0, 0, 0, .22)
            }

                                .match-info-share-popup.show .modal-dialog .modal-body .post-type .post-type-grid .not-selected-opacity {
                                    opacity: .4
            }

                                .match-info-share-popup.show .modal-dialog .modal-body .post-type .post-type-grid .copy-container {
                                    display: flex;
                                justify-content: center;
                                align-items: center;
                                flex-direction: column;
                                cursor: pointer
            }

                                .match-info-share-popup.show .modal-dialog .modal-body .post-type .post-type-grid .copy-container img {
                                    height: 16px;
                                width: 16px
            }

                                .match-info-share-popup.show .modal-dialog .modal-body .post-type .post-type-grid .copy-container .placeholder-ss {
                                    width: 100%;
                                height: 145px
            }

                                .match-info-share-popup.show .modal-dialog .modal-body .post-type .post-type-grid .copy-container .copy {
                                    border: 1px solid #edeef0;
                                border-radius: 10px;
                                width: 100%;
                                height: 145px;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                flex-direction: column
            }

                                .match-info-share-popup.show .modal-dialog .modal-body .post-type .post-type-grid .copy-container .copy img {
                                    height: 24px;
                                width: 24px
            }

                                .match-info-share-popup.show .modal-dialog .modal-body .post-type .post-type-grid .copy-container .copy p {
                                    font - family: "BentonSans-Medium", Arial, "Noto Sans", sans-serif;
                                font-size: .75rem;
                                margin: 0
            }

                                .match-info-share-popup.show .modal-dialog .modal-body .post-type .post-type-grid .copy-container .post-type-details {
                                    flex - direction: row;
                                color: #000
            }

                                .match-info-share-popup.show .modal-dialog .modal-body .post-type .post-type-grid .copy-container .post-type-text {
                                    font - size: .75rem
            }

                                .match-info-share-popup.show .modal-dialog .modal-body .post-method {
                                    padding - top: 32px
            }

                                .match-info-share-popup.show .modal-dialog .modal-body .post-method p {
                                    font - family: "BentonSans-Medium", Arial, "Noto Sans", sans-serif;
                                font-size: .875rem;
                                margin-bottom: 24px
            }

                                .match-info-share-popup.show .modal-dialog .modal-body .post-method .share-icons {
                                    display: grid;
                                grid-template-columns: repeat(4, 64px);
                                grid-gap: 16px;
                                align-items: flex-start
            }

                                .match-info-share-popup.show .modal-dialog .modal-body .post-method .share-icons .share-icon-container {
                                    display: flex;
                                flex-direction: column;
                                align-items: center;
                                justify-content: center
            }

                                .match-info-share-popup.show .modal-dialog .modal-body .post-method .share-icons .share-icon-container img {
                                    width: 64px;
                                height: 64px;
                                cursor: pointer
            }

                                .match-info-share-popup.show .modal-dialog .modal-body .post-method .share-icons .share-icon-container p {
                                    text - align: center;
                                font-family: "BentonSans", Arial, "Noto Sans", sans-serif;
                                font-size: .75rem
            }

                                .match-info-share-popup.show .modal-dialog .modal-body .opaque-options {
                                    opacity: .4
            }

                                .ml-10p {
                                    margin - left: 10px !important
            }

                                @media(max-width: 1023.98px) {
              .trending - matches.radio - button - container.text - capitalize {
                                    text - transform: none !important
              }
            }

                                .dark {
                                    background - color: #000 !important;
                                color: #fff !important
            }

                                .dark .card {
                                    background - color: #1d1e1f
            }

                                @media(max-width: 1023.98px) {
              .dark.card {
                                    border - radius: 0
              }
            }

            .dark .match-page-wrapper>.container {
                                    background - color: #000 !important
            }

                                .dark .global-footer {
                                    background - color: #1d1e1f;
                                color: #fff
            }

                                .dark h1,
                                .dark h2,
                                .dark h3,
                                .dark h4,
                                .dark h5,
                                .dark h6,
                                .dark .h1,
                                .dark .h2,
                                .dark .h3,
                                .dark .h4,
                                .dark .h5,
                                .dark .h6,
                                .dark .mobile-dropdown .dropdown-header .header-title {
                                    color: #fff
            }

                                .dark .dropdown-menu {
                                    background - color: #1d1e1f
            }

                                .dark .primary-navbar,
                                .dark .site-header {
                                    background - color: #1d1e1f !important
            }

                                .dark .primary-navbar .nav-item:hover,
                                .dark .primary-navbar .nav-link:hover {
                                    background - color: #2b2c2d !important
            }

            .dark .primary-navbar .nav-item:hover>.nav-link,
            .dark .primary-navbar .nav-link:hover>.nav-link {
                                    background - color: #2b2c2d
            }

                                .dark .primary-navbar .nav-link.active {
                                    background - color: #1d1e1f !important;
                                color: #e44242 !important
            }

                                .dark .primary-navbar .dropdown-menu .nav-item:hover .nav-link {
                                    background - color: #2b2c2d !important
            }

                                .dark .primary-navbar .dropdown-menu::before {
                                    border - color: transparent transparent #d00 transparent
            }

                                .dark .more-dropdown-menu .footer-links,
                                .dark .more-dropdown-menu .featured-links .featured-link {
                                    border - color: #2b2c2d
            }

                                .dark a,
                                .dark b,
                                .dark label,
                                .dark .label {
                                    color: #fff !important
            }

                                .dark a:hover {
                                    color: #cbccce !important
            }

                                .dark .red {
                                    color: #e44242 !important
            }

                                .dark .widget-tabs {
                                    background - color: inherit !important
            }

                                .dark .widget-tabs .widget-tab {
                                    color: #a5a6a7
            }

                                .dark .widget-tabs .widget-tab-active {
                                    color: #fff
            }

                                .dark .bg-light {
                                    background - color: #2b2c2d !important
            }

                                .dark table {
                                    color: #fff
            }

                                .dark table thead {
                                    background - color: #2b2c2d !important
            }

                                .dark table th {
                                    color: #fff !important;
                                border-color: #2b2c2d !important
            }

                                .dark table thead,
                                .dark table td,
                                .dark table tr {
                                    border - color: #2b2c2d !important
            }

                                .dark .sidebar-table-name,
                                .dark .table-bordered {
                                    border - color: #2b2c2d !important
            }

                                .dark .font-weight-bold {
                                    color: #fff
            }

                                .dark .sidebar-table-name,
                                .dark strong {
                                    color: #cbccce
            }

                                .dark .sidebar-widget-videos .sidebar-widget-video {
                                    background - color: #1d1e1f
            }

                                .dark .border-left,
                                .dark .border-right,
                                .dark .border-top,
                                .dark .border-bottom {
                                    border - color: #2b2c2d !important
            }

                                .dark .scroll-to-top {
                                    color: #fff
            }

                                .dark .gray-700 {
                                    color: #a5a6a7
            }

                                .dark .tag {
                                    background - color: #2b2c2d;
                                color: #fff
            }

                                .dark .tag-link:hover .tag {
                                    background - color: #3d3e3f
            }

                                .dark #nprogress .bar {
                                    background - color: #e44242
            }

                                .dark .switch .slider {
                                    background - color: #3d3e3f
            }

                                .dark .mobile-navbar {
                                    background - color: #2b2c2d
            }

                                .dark .mobile-navbar .nav-item .nav-link.is-forced-inactive .espn-icon {
                                    color: #a5a6a7
            }

                                .dark .thumbs-feed-01 .syndicatedItem .video-title,
                                .dark .thumbnails-3x2-a .syndicatedItem .video-title,
                                .dark .thumbs-feed-01-b .syndicatedItem .video-title {
                                    color: #cbccce
            }

                                .dark .thumbs-feed-01 .syndicatedItem .video-description,
                                .dark .thumbnails-3x2-a .syndicatedItem .video-description,
                                .dark .thumbs-feed-01-b .syndicatedItem .video-description {
                                    color: #a5a6a7
            }

                                .dark .thumbs-feed-01 .trc_rbox_header,
                                .dark .thumbnails-3x2-a .trc_rbox_header,
                                .dark .thumbs-feed-01-b .trc_rbox_header {
                                    color: #a5a6a7
            }

                                .dark .thumbs-feed-01 .logoDiv a span,
                                .dark .thumbnails-3x2-a .logoDiv a span,
                                .dark .thumbs-feed-01-b .logoDiv a span {
                                    color: #a5a6a7
            }

                                .dark .mobile-sticky-ad {
                                    background - color: #1d1e1f;
                                border-color: #2b2c2d
            }

                                .dark .featured-scoreboard .scorecard-container .bet365-hsb-scorecard {
                                    background - color: #2b2c2d !important
            }

                                .dark .gray-900 {
                                    color: gray
            }

                                .dark .nlp-match-strip.static-nlp-content {
                                    border - color: #2b2c2d
            }

                                .dark .nlp-match-strip .link {
                                    color: #cbccce
            }

                                .dark .nlp-strip-slider {
                                    border - color: #2b2c2d
            }

                                .dark .img-lazy svg rect {
                                    fill: #2b2c2d
            }

                                .dark .video-img {
                                    background - color: #2b2c2d
            }

                                .dark .collapse-button-desktop {
                                    background: #48494a !important
            }

                                .dark .collapse-button-mobile {
                                    background: #1d1e1f !important
            }

                                .dark .btn-primary:disabled {
                                    background - color: #3d3e3f;
                                border-color: #3d3e3f;
                                color: #6c6d6f
            }

                                .dark .form-control {
                                    color: #cbccce
            }

                                .dark .match-comment-separator,
                                .dark .live-stats {
                                    background - color: #2b2c2d
            }

                                @media(max-width: 1023.98px) {
              .dark.live - stats {
                                    color: #cbccce
              }
            }

                                .dark .video-slider {
                                    background - color: #1d1e1f
            }

                                .dark .video-slider-title {
                                    color: #fff
            }

                                @media(max-width: 1023.98px) {
              .dark.forecaster {
                                    background - color: #2b2c2d
              }
            }

                                .dark .rhs,
                                .dark .match-header,
                                .dark .match-header-info,
                                .dark .match-section-header {
                                    border - color: #2b2c2d
            }

                                .dark .rhs .slick-dots li button::before {
                                    color: #cbccce
            }

                                .dark .match-section-header .data {
                                    color: #cbccce
            }

                                .dark .status-text,
                                .dark .description,
                                .dark .hsb-description {
                                    color: #a5a6a7 !important
            }

                                .dark .title,
                                .dark .team,
                                .dark .match-comment-run {
                                    color: #fff !important
            }

                                .dark .match-info .status,
                                .dark .match-info-MATCH .status {
                                    color: #a5a6a7
            }

                                .dark .match-info-HSB .team .score-info,
                                .dark .match-info-MATCH .team .score-info {
                                    color: #a5a6a7 !important
            }

                                .dark .match-info-HSB {
                                    background - color: #2b2c2d
            }

                                .dark .match-info-HSB .bg-white {
                                    background - color: #2b2c2d !important
            }

                                .dark .match-info-HSB .hsb-series-links .hsb-link {
                                    border - color: #48494a
            }

                                .dark .match-notes ul li {
                                    color: #a5a6a7
            }

                                @media(max-width: 1023.98px) {

              .dark.match - video,
              .dark.match - coverage - story {
                                    border - color: #2b2c2d
              }
            }

                                .dark .live-scorecard table .player-style,
                                .dark .live-scorecard table tbody {
                                    color: #a5a6a7 !important
            }

                                .dark .live-scorecard .current-partnerships {
                                    background - color: #2b2c2d
            }

                                .dark .live-scorecard .recent-runs {
                                    border - color: #2b2c2d
            }

                                .dark .live-scorecard .recent-runs .left-shadow,
                                .dark .live-scorecard .recent-runs .right-shadow {
                                    box - shadow: -5px 0 10px 10px #2b2c2d
            }

                                .dark .live-scorecard .over-separator {
                                    border - color: #2b2c2d !important;
                                color: #fff !important
            }

                                .dark .live-scorecard .over-separator .over-number {
                                    background - color: #1d1e1f !important
            }

                                .dark .live-scorecard .reviews {
                                    background - color: #3d3e3f;
                                color: #fff
            }

                                .dark .scorer-commentator-mobile {
                                    background - color: #2b2c2d
            }

                                .dark .match-comment-run {
                                    background - color: #2b2c2d
            }

                                .dark .match-comment-run-four {
                                    background: #094;
                                color: #fff
            }

                                .dark .match-comment-run-six {
                                    background: #7a41d8;
                                color: #fff
            }

                                .dark .match-comment-run-wicket {
                                    background: #e44242;
                                color: #fff
            }

                                .dark .match-comment-over-end {
                                    background - color: #1b2931
            }

                                .dark .match-comment-over-end .comment-over-end-head .comment-over-end-secondary,
                                .dark .match-comment-over-end .comment-over-end-caps,
                                .dark .match-comment-over-end .comment-over-end-player {
                                    color: #cbccce
            }

                                .dark .match-comment-long-text {
                                    color: #cbccce
            }

                                .dark .match-comment-long-text a {
                                    color: #03a9f4 !important
            }

                                .dark .match-comment .match-comment-wicket {
                                    background - color: #2b2c2d;
                                color: #cbccce
            }

                                .dark .match-comment .match-comment-over,
                                .dark .match-comment .match-comment-short-text {
                                    color: #a5a6a7
            }

                                .dark .match-comment .match-comment-over .comment-short-run,
                                .dark .match-comment .match-comment-short-text .comment-short-run {
                                    color: #cbccce
            }

                                .dark .match-comment .match-comment-padder .match-comment-short-text .comment-short-run {
                                    color: #cbccce
            }

                                .dark .innings-stat table {
                                    border - color: #2b2c2d
            }

                                .dark .innings-stat table thead td {
                                    color: #fff
            }

                                .dark .innings-stat table a {
                                    color: #fff !important
            }

                                .dark .commentary-feedback-form--title {
                                    background - color: #2b2c2d;
                                color: #fff
            }

                                .dark .match-live .live-sidebar {
                                    border - color: #2b2c2d
            }

                                .dark .match-live .live-widget-heading {
                                    color: #cbccce;
                                background-color: #2b2c2d
            }

                                .dark .match-live .scorecard-summary .innings-title {
                                    color: #cbccce;
                                border-color: #2b2c2d
            }

                                .dark .match-live .scorecard-summary .innings-row,
                                .dark .match-live .scorecard-summary .batsmen {
                                    border - color: #2b2c2d
            }

                                .dark .match-live .scorecard-summary .innings-row .player .stats,
                                .dark .match-live .scorecard-summary .batsmen .player .stats {
                                    color: #cbccce
            }

                                .dark .match-live .scorecard-summary .innings-row .player .name,
                                .dark .match-live .scorecard-summary .batsmen .player .name {
                                    color: #fff !important;
                                text-decoration: underline;
                                text-decoration-color: #6c6d6f
            }

                                .dark .match-live .match-details tr td {
                                    color: #a5a6a7
            }

                                .dark .match-live .match-details tr td:first-child {
                                    color: #cbccce
            }

                                .dark .match-live .match-details .match-details-table {
                                    border - color: #2b2c2d
            }

                                .dark .match-live .link-container.border-bottom:last-child {
                                    border - color: #2b2c2d !important
            }

                                .dark .match-live .players-to-watch {
                                    border - color: #2b2c2d
            }

                                .dark .match-live .players-to-watch .player {
                                    border - color: #2b2c2d
            }

                                .dark .match-live .players-to-watch .player .player-details .country {
                                    color: #cbccce
            }

                                .dark .match-live .players-to-watch .player .player-stats .stat .value {
                                    color: #cbccce
            }

                                .dark .match-live .head-to-head .title {
                                    border - color: #2b2c2d
            }

                                .dark .match-live .head-to-head ul li+li {
                                    border - color: #2b2c2d
            }

                                .dark .match-live .head-to-head ul li a .match-date {
                                    color: #cbccce
            }

                                .dark .match-live .match-squad .players-list .player {
                                    border - color: #2b2c2d
            }

                                .dark .match-stats-partnerships .partnerships {
                                    border - color: #2b2c2d
            }

            .dark .partnerships>div .partnership-inning {
                                    border - color: #2b2c2d
            }

                                .dark .partnerships .stat-graph.compareLineGraph.compareCenter .bar-col .name {
                                    color: #fff
            }

                                .dark .partnerships .stat-graph.compareLineGraph.compareCenter .bar-col .value {
                                    color: #cbccce
            }

                                .dark .partnerships .stat-graph.compareLineGraph.compareCenter .bar-total {
                                    color: #fff
            }

                                .dark .partnerships .stat-graph.compareLineGraph.compareCenter .bar-percentage {
                                    background - color: #03a9f4 !important
            }

                                .dark .player-details .player-info .name {
                                    color: #fff
            }

                                .dark .shot-details .shot-name,
                                .dark .batsman-control-chart .chart-value {
                                    color: #cbccce
            }

                                .dark .chart-table-container table caption .title {
                                    background - color: #2b2c2d;
                                color: #fff
            }

                                .dark .player-stats .stat .value {
                                    color: #a5a6a7
            }

            .dark .match-details-table .multiple-detail-table-values>a {
                                    border - color: #2b2c2d
            }

                                .dark .match-stats-batsmen .current-player-details {
                                    border - color: #2b2c2d
            }

                                .dark .match-stats-batsmen .current-player-details .player-info .name {
                                    color: #fff
            }

                                .dark .match-stats-batsmen .current-player-details .shot-details .shot-name,
                                .dark .match-stats-batsmen .current-player-details .shot-details .shot-runs,
                                .dark .match-stats-batsmen .current-player-details .shot-details .batsman-control-chart .chart-value {
                                    color: #cbccce
            }

                                .dark .match-stats-batsmen .current-player-details .batsman-control-chart .chart-value {
                                    color: #cbccce
            }

                                .dark .match-stats-bowlers .current-player-details {
                                    border - color: #2b2c2d
            }

                                .dark .match-stats-bowlers .current-player-details .player-info .name {
                                    color: #fff
            }

                                .dark .current-player-details::after {
                                    background - color: #2b2c2d
            }

                                .dark .partnerships-header {
                                    background - color: #3d3e3f;
                                color: #fff
            }

                                .dark .comment-container-head .comment-sort-button {
                                    background - color: #3d3e3f;
                                color: #fff;
                                border-color: #2b2c2d
            }

                                .dark .comment-container-head .dropdown-container button {
                                    color: #fff;
                                border-color: #2b2c2d
            }

                                .dark .comment-container-head .dropdown-container.comment-type-dropdown button,
                                .dark .comment-container-head .dropdown-container.comment-inning-dropdown button {
                                    background - color: #3d3e3f
            }

                                .dark .comment-container-head .dropdown-container .ci-dd__menu {
                                    background - color: #3d3e3f
            }

                                .dark .comment-container-head .dropdown-container .ci-dd__menu .ci-dd__selected-option {
                                    background - color: #2b2c2d
            }

                                .dark .comment-container-head .dropdown-container .ci-dd__menu ul li:hover,
                                .dark .comment-container-head .dropdown-container .ci-dd__menu ul li:active {
                                    background - color: #2b2c2d
            }

                                .dark .comments-container-body .scroll-to-top-button {
                                    background - color: #3d3e3f
            }

                                .dark .comments-container-body .scroll-to-top-button .espn-icon::after {
                                    color: #fff
            }

                                @media(max-width: 1023.98px) {
              .dark.stats - type - filter {
                                    background - color: #2b2c2d;
                                box-shadow: 1px -1px 6px rgba(249, 249, 251, .12)
              }
            }

                                .dark .stats-type-filter-button {
                                    background - color: #2b2c2d;
                                color: #cbccce
            }

                                @media(max-width: 1023.98px) {
              .dark.stats - type - filter - button {
                                    background - color: #3d3e3f
              }
            }

                                .dark .stats-type-filter-button-active {
                                    background - color: #03a9f4;
                                color: #fff
            }

                                .dark .overs-page-wrapper .overs-table tbody tr:nth-of-type(odd) {
                                    background - color: #3d3e3f
            }

                                .dark .overs-page-wrapper .overs-table tbody .over-no {
                                    background - color: #2b2c2d;
                                border-color: #1d1e1f
            }

                                .dark .overs-page-wrapper .overs-table tbody tr:nth-of-type(even) {
                                    background - color: #1d1e1f
            }

                                .dark .overs-page-wrapper .overs-table tbody tr:nth-of-type(even) .match-comment-run {
                                    background - color: #2b2c2d
            }

                                .dark .overs-page-wrapper .overs-table tbody tr:nth-of-type(even) .match-comment-run-four {
                                    background: #094;
                                color: #fff
            }

                                .dark .overs-page-wrapper .overs-table tbody tr:nth-of-type(even) .match-comment-run-six {
                                    background: #7a41d8;
                                color: #fff
            }

                                .dark .overs-page-wrapper .overs-table tbody tr:nth-of-type(even) .match-comment-run-wicket {
                                    background: #e44242;
                                color: #fff
            }

            .dark .overs-page-wrapper .over-runs>span {
                                    color: #cbccce
            }

                                .dark .overs-page-wrapper .over-detail .bowler-info {
                                    color: #cbccce
            }

                                .dark .overs-page-wrapper .match-overs-comparison .over-comparison-action {
                                    background - color: #2b2c2d;
                                color: #fff
            }

                                .dark .overs-page-wrapper .match-overs-comparison .over-comparison-action .sort-over-info svg path,
                                .dark .overs-page-wrapper .match-overs-comparison .over-comparison-action .expand-all-over-info svg path {
                                    fill: #fff
            }

                                .dark .match-video .match-video-title {
                                    color: #fff
            }

                                .dark .match-squad-grid {
                                    background - color: #1d1e1f;
                                border-color: #2b2c2d
            }

                                .dark .match-squad-grid thead tr {
                                    background - color: #2b2c2d
            }

                                .dark .match-squad-grid thead tr .sr-column {
                                    border - color: #3d3e3f !important
            }

                                .dark .match-squad-grid thead tr td {
                                    color: #cbccce
            }

                                .dark .match-squad-grid tbody .playing-role {
                                    color: #a5a6a7
            }

                                @media(max-width: 1023.98px) {
              .dark.match - squad - grid {
                                    border - radius: 0
              }
            }

                                .dark .squad-page-wrapper .squad-dates {
                                    background - color: #3d3e3f;
                                color: #cbccce
            }

                                .dark .match-story-content .story-container figure {
                                    border - color: #2b2c2d
            }

                                .dark .match-story-content .story-container .article-body h2 {
                                    color: #fff
            }

                                .dark .match-story-content .story-container .article-body p,
                                .dark .match-story-content .story-container .article-body .content-html {
                                    color: #cbccce !important
            }

                                .dark .match-story-content .story-container .article-body a {
                                    color: #03a9f4 !important
            }

                                .dark .match-story-content .story-container .article-body figure img {
                                    border - color: #2b2c2d
            }

                                .dark .match-story-content .story-container .article-body figure .photoCaption {
                                    color: #a5a6a7
            }

                                .dark .match-story-content .story-container .article-body .article-endcredit p {
                                    border - color: #2b2c2d
            }

                                .dark .match-story-content .story-container .inline {
                                    border - color: #2b2c2d
            }

                                .dark .match-story-content .story-container .inline h1 {
                                    color: #fff;
                                border-color: #2b2c2d
            }

                                .dark .match-story-content .story-container img,
                                .dark .match-story-content .story-container .article-meta .authors .author-img:before {
                                    background - color: #1d1e1f
            }

                                .dark .article-social li .btn-social:before {
                                    border - color: #2b2c2d
            }

                                @media(max-width: 1023.98px) {
              .dark.article - social.horizontal {
                                    background - color: #1d1e1f
              }
            }

                                .dark .icon-email-solid-before:before,
                                .dark .icon-print-solid-before:before {
                                    color: #cbccce
            }

                                .dark .sidebar-head {
                                    border - color: #2b2c2d !important
            }

            .dark .sidebar-head>.head-title {
                                    color: #fff
            }

                                .dark .sidebar-widget-customizations .option-title {
                                    color: #fff
            }

                                .dark .sidebar-widget-customizations .option-switch {
                                    background - color: #2b2c2d;
                                border-color: #3d3e3f
            }

                                .dark .sidebar-widget-customizations .option-switch .active {
                                    background - color: #3d3e3f
            }

                                .dark .sidebar-widget-coverage-item {
                                    border - color: #2b2c2d
            }

                                .dark .sidebar-widget-table.table thead th {
                                    background - color: #2b2c2d
            }

                                .dark .sidebar-widget-table.table td {
                                    color: #cbccce
            }

                                .dark .sidebar-widget-table.table td a {
                                    color: #fff !important
            }

                                .dark .sidebar-widget-view-all {
                                    border - color: #2b2c2d
            }

                                .dark .nlp-sidebar-widget .divider {
                                    background - color: #2b2c2d
            }

                                .dark .nlp-sidebar-widget .questions-cta a {
                                    border - color: #fff
            }

                                .dark .playerofthematch-title,
                                .dark .playerofthematch-name,
                                .dark .playerofthematch-teamName {
                                    color: #fff
            }

                                .dark .playerofthematch-score-text {
                                    color: #cbccce
            }

                                .dark .playerofthematch,
                                .dark .playerofthematch-image {
                                    border - color: #3d3e3f
            }

                                .dark .playerofthematch-badge {
                                    background - color: #3d3e3f
            }

                                .dark .language-card,
                                .dark .notification-card,
                                .dark .pinning-card {
                                    background - color: #1d1e1f
            }

                                .dark .language-card .cancel,
                                .dark .notification-card .cancel,
                                .dark .pinning-card .cancel {
                                    color: #fff
            }

                                .dark .language-card .notification-entity,
                                .dark .language-card .pinning-entity,
                                .dark .notification-card .notification-entity,
                                .dark .notification-card .pinning-entity,
                                .dark .pinning-card .notification-entity,
                                .dark .pinning-card .pinning-entity {
                                    border - color: #2b2c2d
            }

                                .dark .language-card .notification-entity .header .sub-title,
                                .dark .language-card .pinning-entity .header .sub-title,
                                .dark .notification-card .notification-entity .header .sub-title,
                                .dark .notification-card .pinning-entity .header .sub-title,
                                .dark .pinning-card .notification-entity .header .sub-title,
                                .dark .pinning-card .pinning-entity .header .sub-title {
                                    color: #cbccce
            }

                                .dark .notification-entity {
                                    border - color: #2b2c2d
            }

                                .dark .notification-entity .preference {
                                    background - color: #2b2c2d
            }

                                .dark .notification-entity .preference-single {
                                    background - color: transparent
            }

                                .dark .notification-entity .header .sub-title {
                                    color: #cbccce
            }

                                .dark .language-card .language-body {
                                    border - color: #2b2c2d
            }

                                .dark .language-card .language-body .extra-info {
                                    color: #cbccce
            }

                                .dark .language-card .language-footer {
                                    color: #cbccce
            }

                                .dark .language-card .modal-body-header svg path {
                                    fill: #fff
            }

                                .dark .radio-button-container {
                                    background - color: #1d1e1f
            }

                                .dark .radio-button-container .item:hover {
                                    background - color: #2b2c2d;
                                border-radius: 0
            }

                                .dark .mobile-dropdown {
                                    background - color: #1d1e1f
            }

                                .dark .mobile-dropdown .dropdown-header {
                                    background - color: #1d1e1f
            }

                                .dark .mobile-dropdown .tabs {
                                    background - color: #2b2c2d
            }

                                .dark .mobile-dropdown .tabs .nav-link svg path {
                                    fill: #fff
            }

                                .dark .mobile-dropdown .tabs .nav-item:last-child .nav-link .label {
                                    color: transparent !important
            }

                                .dark .dropdown-item:focus,
                                .dark .nav-tabs .nav-link.active:after {
                                    background - color: #2b2c2d
            }

                                .dark .commentary-filter-mobile-tabs .commentary-filter-button {
                                    background - color: #1d1e1f;
                                border-color: #2b2c2d
            }

                                .dark .smart-scorecard thead tr {
                                    background - color: #2b2c2d
            }

                                .dark .smart-scorecard tbody tr td {
                                    color: #cbccce
            }

                                .dark .photos-modal .photo-modal-container .photo-slider-container .photo-modal-title {
                                    background - color: #1d1e1f
            }

                                .dark .photos-modal .modal-body .photo-modal-icons .share .native-share .share-icon {
                                    color: #48494a !important
            }

                                .dark .hint-content,
                                .dark .chart-legends .legend .team-name {
                                    color: #cbccce
            }

                                .dark .custom-toast div {
                                    color: #000;
                                box-shadow: 1px 1px 6px rgba(255, 255, 255, .16);
                                background: rgba(255, 255, 255, .8)
            }

                                .dark .feature-promotion .option-switch {
                                    border - color: #2b2c2d;
                                background-color: #2b2c2d;
                                border-color: #3d3e3f
            }

                                .dark .feature-promotion .option-switch .active {
                                    background - color: #3d3e3f
            }

                                .dark .total-impact-modal .modal-dialog .modal-content,
                                .dark .player-filter-modal .modal-dialog .modal-content {
                                    background - color: #1d1e1f
            }

                                .dark .total-impact-modal .modal-dialog .modal-content .modal-header .modal-title,
                                .dark .total-impact-modal .modal-dialog .modal-content .modal-header button,
                                .dark .player-filter-modal .modal-dialog .modal-content .modal-header .modal-title,
                                .dark .player-filter-modal .modal-dialog .modal-content .modal-header button {
                                    color: #fff
            }

                                .dark .match-blog-overview {
                                    color: #cbccce
            }

                                .dark .match-blog-overview .author {
                                    color: #cbccce
            }

                                .dark .match-story-content .timeline {
                                    border - color: #2b2c2d
            }

                                .dark .live-blog-content .blogs .blog-item {
                                    border - color: #3d3e3f
            }

                                .dark .live-blog-content .blogs .blog-item a {
                                    color: #03a9f4 !important
            }

                                .dark .live-blog-content .blogs .blog-item .videoCaption {
                                    color: #cbccce
            }

                                .dark .live-blog-content .blogs .blog-item .blog-item-time {
                                    color: #cbccce
            }

            .dark .live-blog-content .blogs .blog-item>h1 {
                                    color: #fff
            }

                                .dark .live-blog-content .update-post-btn {
                                    text - align: center
            }

                                @media(max-width: 1023.98px) {
              .dark.live - blog - content.update - post - btn.update - post {
                                    background - color: #3d3e3f;
                                border-color: #3d3e3f
              }
            }

                                .dark .timeline-data .timeline-title {
                                    border - left - color: rgba(255, 255, 255, .6)
            }

                                .dark .timeline-data .timeline-date time {
                                    color: #cbccce
            }

                                .dark .match-blog-share .live-blog-share .icon i {
                                    color: #cbccce
            }

                                .dark .match-blog-share .live-blog-share .icon i::before {
                                    color: #cbccce
            }

                                .dark .timeline-section .blog-order {
                                    border - color: #2b2c2d
            }

                                .dark .timeline-section .timeline-dropdown .ci-dd__menu {
                                    background - color: #000
            }

                                .dark .timeline-section .timeline-dropdown .ci-dd__menu ul li:hover,
                                .dark .timeline-section .timeline-dropdown .ci-dd__menu ul li:active {
                                    background - color: #2b2c2d
            }

                                .dark .timeline-section .timeline-dropdown button {
                                    background - color: #2b2c2d;
                                color: #fff;
                                border-color: #3d3e3f
            }

                                .dark .blog-emojis .emoji-stat,
                                .dark .blog-emojis .share {
                                    background - color: #2b2c2d
            }

                                .dark .blog-emojis .emoji-stat.selected-emoji,
                                .dark .blog-emojis .share.selected-emoji {
                                    background: rgba(3, 169, 244, .3)
            }

                                .dark .blog-emojis .share .share-icon {
                                    color: #fff
            }

                                .dark .scroll-to-top-button {
                                    background: #000
            }

                                .dark .scroll-to-top-button i::after {
                                    color: #fff !important
            }
                            </style>
                            <div class="match-page-wrapper scorecard-page-wrapper">
                                <div class="mb-2">
                                    <div class="ad-placeholder bannerTop ad-bannertop-936396" style="min-width:10%;min-height:250px"></div>
                                    <div></div>
                                </div>
                                <div class="container">
                                    <div class="ad-double-longstrip-wrapper">
                                        <div class="ad-placeholder longstripGamepackageLeft ad-longstripgamepackageleft-418047"
                                            style="min-width:10%;min-height:40px"></div>
                                        <div class="ad-placeholder longstripGamepackageRight ad-longstripgamepackageright-548542"
                                            style="min-width:10%;min-height:40px"></div>
                                    </div>
                                    <div class="row">
                                        <div class="col-16 col-md-16 col-lg-12 main-content-x">
                                            <div style="min-height:0px">
                                                <div class="" style="transform:translateZ(0);-webkit-transform:translateZ(0)">
                                                    <div class="card">
                                                        <div class="match-header-container">
                                                            <div class="match-header-info match-info-MATCH">
                                                                <div class="header-info">
                                                                    <div>
                                                                        <div class="status status-hindi"><span>result</span></div>
                                                                        <div class="description">33rd Match, Group 2 (N), Abu Dhabi, Nov 3 2021
                                                                            <!-- -->, <a data-hover="ICC Men&#x27;s T20 World Cup"
                                                                                class="a-gray-800 dashed-underline" target="_blank" rel="noopener noreferrer"
                                                                                href="/series/icc-men-s-t20-world-cup-2021-22-1267897">ICC Men&#x27;s T20 World
                                                                                Cup</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="header-actions"><i
                                                                    class="espn-icon icon-share-solid-after match-info-share-button"></i></div>
                                                            </div>
                                                            <div class="match-header">
                                                                <div class="event">
                                                                    <style>
                                                                        .match-info {
                                                                            padding: .5rem 1rem;
                                                                        display: block;
                                                                        position: relative
                                }

                                                                        @media(max-width: 1023.98px) {
                                  .match - info {
                                                                            padding: 1rem
                                  }
                                }

                                                                        .match-info .classic-label {
                                                                            text - transform: uppercase;
                                                                        background: #2b2c2d;
                                                                        color: #fff;
                                                                        position: absolute;
                                                                        right: 8px;
                                                                        top: 8px;
                                                                        font-size: 10px;
                                                                        padding: 1px 4px;
                                                                        border-radius: 2px
                                }

                                                                        .match-info .language-icon {
                                                                            position: absolute;
                                                                        right: 0;
                                                                        top: -14px;
                                                                        color: #6c6d6f;
                                                                        cursor: pointer;
                                                                        border-radius: 50%;
                                                                        padding: .4rem
                                }

                                                                        .match-info .language-icon.right-24 {
                                                                            right: 28px
                                }

                                                                        .match-info .language-icon:hover {
                                                                            background - color: #f5f5f5
                                }

                                                                        .match-info .language-icon.collapsed {
                                                                            top: -28px
                                }

                                                                        .match-info .subscribe {
                                                                            position: absolute;
                                                                        right: 10px;
                                                                        top: 6px;
                                                                        color: #dcdddf;
                                                                        cursor: pointer
                                }

                                                                        .match-info .subscribe.pad-top {
                                                                            padding - top: .4rem
                                }

                                                                        .match-info .subscribe.subscribed {
                                                                            color: red
                                }

                                                                        .match-info .status {
                                                                            color: #2b2c2d;
                                                                        text-transform: uppercase;
                                                                        font-family: "BentonSans-Bold", Arial, "Noto Sans", sans-serif;
                                                                        font-weight: bold;
                                                                        color: #2b2c2d;
                                                                        font-size: .75rem;
                                                                        line-height: 1.5;
                                                                        letter-spacing: .6px;
                                                                        text-transform: uppercase
                                }

                                                                        .match-info .description,
                                                                        .match-info .status-text {
                                                                            color: #6c6d6f;
                                                                        white-space: nowrap;
                                                                        overflow: hidden;
                                                                        text-overflow: ellipsis;
                                                                        font-size: .75rem;
                                                                        line-height: 1.5;
                                                                        letter-spacing: .1px
                                }

                                .match-info .description>a {
                                                                            display: inline
                                }

                                                                        .match-info .teams {
                                                                            margin - top: 7px
                                }

                                                                        .match-info .team {
                                                                            display: flex;
                                                                        justify-content: space-between;
                                                                        margin-bottom: .5rem;
                                                                        margin-top: .25rem;
                                                                        align-items: center;
                                                                        color: #2b2c2d;
                                                                        font-family: "BentonSans-Bold", Arial, "Noto Sans", sans-serif
                                }

                                                                        .match-info .team .name-detail,
                                                                        .match-info .team .score-detail {
                                                                            display: inline-flex;
                                                                        line-height: 1.5;
                                                                        letter-spacing: .1px;
                                                                        align-items: center;
                                                                        font-size: 1rem;
                                                                        white-space: nowrap;
                                                                        opacity: 1
                                }

                                                                        @media(max-width: 1023.98px) {

                                  .match - info.team.name - detail,
                                  .match - info.team.score - detail {
                                                                            font - size: .875rem
                                  }
                                }

                                                                        .match-info .team .fadeIn-appear,
                                                                        .match-info .team .fadeIn-enter,
                                                                        .match-info .team .fadeIn-exit {
                                                                            opacity: 0
                                }

                                                                        .match-info .team .fadeIn-appear-active,
                                                                        .match-info .team .fadeIn-enter-active,
                                                                        .match-info .team .fadeIn-exit-active {
                                                                            opacity: 1;
                                                                        transition: opacity 2s
                                }

                                                                        .match-info .team .fadeIn-appear-done,
                                                                        .match-info .team .fadeIn-enter-done,
                                                                        .match-info .team .fadeIn-exit-done {
                                                                            opacity: 1
                                }

                                                                        .match-info .team .name-detail .flag {
                                                                            width: 20px;
                                                                        height: 20px;
                                                                        margin-right: .5rem;
                                                                        border-radius: .25rem;
                                                                        border: none;
                                                                        position: relative;
                                                                        top: -1.5px
                                }

                                                                        .match-info .team .name-detail .name {
                                                                            margin: 0
                                }

                                                                        .match-info .team .name-detail .name-link {
                                                                            color: #2b2c2d
                                }

                                                                        .match-info .team .name-detail .winner-icon {
                                                                            color: #21cc53
                                }

                                                                        .match-info .team .name-detail .batting-indicator {
                                                                            margin - left: 5px;
                                                                        width: 5px;
                                                                        height: 5px;
                                                                        border-radius: 50%;
                                                                        background-color: #d00
                                }

                                                                        @media(max-width: 1023.98px) {
                                  .match - info.team.name - detail.batting - indicator {
                                                                            width: 5px;
                                                                        height: 5px
                                  }
                                }

                                                                        .match-info .team .score-detail .score-info {
                                                                            position: relative;
                                                                        margin-right: 5px;
                                                                        font-size: .75rem
                                }

                                                                        .match-info .team-gray .name,
                                                                        .match-info .team-gray .score-info,
                                                                        .match-info .team-gray .score {
                                                                            color: #6c6d6f;
                                                                        font-weight: 400;
                                                                        font-family: "BentonSans", Arial, "Noto Sans", sans-serif
                                }

                                                                        .match-info .team-gray .flag {
                                                                            opacity: .5
                                }

                                                                        .match-info-with-icon .status {
                                                                            width: 92%
                                }

                                                                        .match-info-with-icon .classic-label {
                                                                            right: 28px
                                }

                                                                        .match-info-FEED {
                                                                            padding: .5rem 1.5rem;
                                                                        border-bottom: 1px solid #edeef0
                                }

                                                                        .match-info-FEED .subscribe {
                                                                            right: 1.4rem
                                }

                                                                        @media(max-width: 1023.98px) {
                                  .match - info - FEED {
                                                                            padding: .5rem 1rem
                                  }

                                                                        .match-info-FEED .subscribe {
                                                                            right: .9rem
                                  }
                                }

                                                                        .match-info-HSB {
                                                                            padding: .5rem;
                                                                        height: 100%;
                                                                        min-height: 124px;
                                                                        width: 288px;
                                                                        box-shadow: 1px 1px 4px rgba(0, 0, 0, .25);
                                                                        border-radius: .25rem;
                                                                        overflow: hidden;
                                                                        display: flex;
                                                                        flex-direction: column;
                                                                        justify-content: space-between
                                }

                                                                        .match-info-HSB .subscribe {
                                                                            top: 6px;
                                                                        right: 6px
                                }

                                                                        .match-info-HSB .status {
                                                                            letter - spacing: 0;
                                                                        font-size: 10px;
                                                                        white-space: nowrap;
                                                                        text-overflow: ellipsis;
                                                                        overflow: hidden
                                }

                                                                        .match-info-HSB .status .hsb-description {
                                                                            text - transform: capitalize;
                                                                        color: #48494a;
                                                                        font-family: "BentonSans", Arial, "Noto Sans", sans-serif
                                }

                                                                        .match-info-HSB .description {
                                                                            margin - bottom: .25rem;
                                                                        margin-top: 1px;
                                                                        width: 95%;
                                                                        font-size: .625rem;
                                                                        line-height: 1.6;
                                                                        letter-spacing: 0
                                }

                                                                        .match-info-HSB .teams {
                                                                            margin - top: 0
                                }

                                                                        .match-info-HSB .team {
                                                                            margin - bottom: 8px
                                }

                                                                        .match-info-HSB .team .name {
                                                                            text - transform: uppercase;
                                                                        font-size: 10px;
                                                                        letter-spacing: 0
                                }

                                                                        .match-info-HSB .team .score,
                                                                        .match-info-HSB .team .score-info {
                                                                            font - size: 12px;
                                                                        letter-spacing: 0
                                }

                                                                        .match-info-HSB .team .score-detail .score-info {
                                                                            font - size: 10px;
                                                                        color: #48494a;
                                                                        font-family: "BentonSans", Arial, "Noto Sans", sans-serif
                                }

                                                                        .match-info-HSB .countdown {
                                                                            padding: .25rem .75rem;
                                                                        float: right;
                                                                        background-color: #f1f2f3;
                                                                        margin: 0 -0.75rem -0.5rem -0.75rem;
                                                                        font-size: .625rem;
                                                                        line-height: 1.6;
                                                                        float: right;
                                                                        padding-top: 0;
                                                                        margin-right: .05rem
                                }

                                                                        .match-info-HSB .status-text {
                                                                            font - size: .625rem;
                                                                        line-height: 1.6;
                                                                        letter-spacing: 0;
                                                                        font-family: "BentonSans-Medium", Arial, "Noto Sans", sans-serif;
                                                                        font-weight: normal;
                                                                        color: #48494a;
                                                                        padding: 0 .75rem;
                                                                        margin: 0 -0.75rem 0 -0.75rem
                                }

                                                                        .match-info-HSB .status-text .red {
                                                                            color: #d00 !important
                                }

                                                                        .match-info-HSB .hsb-series-links {
                                                                            display: flex;
                                                                        flex-direction: row;
                                                                        align-items: center;
                                                                        font-size: 10px;
                                                                        margin-top: 8px
                                }

                                                                        .match-info-HSB .hsb-series-links .hsb-link {
                                                                            display: inline-flex;
                                                                        border: 1px solid #dcdddf;
                                                                        border-radius: 4px;
                                                                        color: #000;
                                                                        flex-basis: 0;
                                                                        flex-grow: 1;
                                                                        justify-content: center;
                                                                        padding: 6px 0
                                }

                                                                        .match-info-HSB .hsb-series-links .hsb-link+.hsb-link {
                                                                            margin - left: 4px;
                                                                        text-align: center
                                }

                                                                        .match-info-link-SIDEBAR {
                                                                            width: 100%;
                                                                        border-bottom: 1px solid #edeef0
                                }

                                                                        .match-info-SIDEBAR,
                                                                        .match-info-SLIDING_CARD {
                                                                            padding: 5px 0;
                                                                        margin-bottom: 0
                                }

                                                                        .match-info-SIDEBAR .subscribe,
                                                                        .match-info-SLIDING_CARD .subscribe {
                                                                            right: 4px;
                                                                        top: 4px
                                }

                                                                        .match-info-SIDEBAR .status,
                                                                        .match-info-SLIDING_CARD .status {
                                                                            font - size: 10px;
                                                                        text-transform: uppercase;
                                                                        font-family: "BentonSans-Medium", Arial, "Noto Sans", sans-serif;
                                                                        font-weight: normal;
                                                                        letter-spacing: normal
                                }

                                                                        .match-info-SIDEBAR .countdown,
                                                                        .match-info-SLIDING_CARD .countdown {
                                                                            padding: .25rem .75rem;
                                                                        margin: 0 -0.75rem -0.5rem -0.75rem;
                                                                        font-size: .6rem;
                                                                        letter-spacing: 0;
                                                                        float: right;
                                                                        padding-top: 0;
                                                                        margin-right: .05rem
                                }

                                                                        .match-info-SIDEBAR .description,
                                                                        .match-info-SLIDING_CARD .description,
                                                                        .match-info-SIDEBAR .status-text,
                                                                        .match-info-SLIDING_CARD .status-text {
                                                                            font - size: 10px;
                                                                        color: #a5a6a7;
                                                                        letter-spacing: .3px;
                                                                        font-size: .625rem;
                                                                        line-height: 1.4;
                                                                        letter-spacing: .8px;
                                                                        padding-top: 2px
                                }

                                                                        .match-info-SIDEBAR .status-text,
                                                                        .match-info-SLIDING_CARD .status-text {
                                                                            padding - top: 5px;
                                                                        margin-bottom: .5rem
                                }

                                                                        .match-info-SIDEBAR .team,
                                                                        .match-info-SLIDING_CARD .team {
                                                                            padding: 2px 0;
                                                                        margin: 0
                                }

                                                                        .match-info-SIDEBAR .team .flag,
                                                                        .match-info-SLIDING_CARD .team .flag {
                                                                            margin - right: 6px;
                                                                        top: -2px
                                }

                                                                        .match-info-SIDEBAR .team .name,
                                                                        .match-info-SLIDING_CARD .team .name,
                                                                        .match-info-SIDEBAR .team .score,
                                                                        .match-info-SLIDING_CARD .team .score,
                                                                        .match-info-SIDEBAR .team .score-info,
                                                                        .match-info-SLIDING_CARD .team .score-info {
                                                                            font - size: 12px
                                }

                                                                        .match-info-SIDEBAR .team .score-detail,
                                                                        .match-info-SLIDING_CARD .team .score-detail {
                                                                            white - space: nowrap;
                                                                        overflow: hidden;
                                                                        text-overflow: ellipsis;
                                                                        display: inline-block;
                                                                        width: 60%;
                                                                        text-align: right
                                }

                                                                        .match-info-SLIDING_CARD {
                                                                            min - width: 280px;
                                                                        max-width: 300px;
                                                                        border-right: 1px solid #edeef0;
                                                                        overflow: hidden;
                                                                        padding: .5rem 1rem;
                                                                        padding-top: 10px;
                                                                        border-bottom: none
                                }

                                                                        .match-info-MATCH {
                                                                            padding: 0
                                }

                                                                        @media(min-width: 1024px) {
                                  .match - info - MATCH.container - padding {
                                                                            padding - left: calc((100vw - 960px !important) / 2) !important;
                                                                        padding-right: calc((100vw - 960px !important) / 2) !important
                                  }
                                }

                                                                        @media(min-width: 1280px) {
                                  .match - info - MATCH.container - padding {
                                                                            padding - left: calc((100vw - 1240px !important) / 2) !important;
                                                                        padding-right: calc((100vw - 1240px !important) / 2) !important
                                  }
                                }

                                                                        .match-info-MATCH .subscribe {
                                                                            right: calc(-5px + 0.4rem);
                                                                        top: -14px
                                }

                                                                        @media(max-width: 1023.98px) {
                                  .match - info - MATCH.subscribe {
                                                                            right: .4rem;
                                                                        top: -8px
                                  }

                                                                        .match-info-MATCH .subscribe.collapsed {
                                                                            top: -18px
                                  }
                                }

                                                                        .match-info-MATCH .status {
                                                                            color: #2b2c2d;
                                                                        font-weight: 700;
                                                                        font-family: "BentonSans", Arial, "Noto Sans", sans-serif;
                                                                        font-size: .875rem
                                }

                                                                        .match-info-MATCH .description {
                                                                            font - size: .875rem;
                                                                        color: #48494a
                                }

                                                                        .match-info-MATCH .teams {
                                                                            margin: 15px 0
                                }

                                                                        .match-info-MATCH .has-rhs {
                                                                            display: flex;
                                                                        align-items: center;
                                                                        justify-content: space-between
                                }

                                                                        .match-info-MATCH .prematch-status {
                                                                            text - align: right
                                }

                                                                        .match-info-MATCH .prematch-status .status {
                                                                            font - size: 1.25rem;
                                                                        text-transform: lowercase;
                                                                        width: auto
                                }

                                                                        @media(max-width: 1023.98px) {
                                  .match - info - MATCH.prematch - status.status {
                                                                            font - size: 1rem
                                  }
                                }

                                                                        .match-info-MATCH .prematch-status .description {
                                                                            font - size: .875rem
                                }

                                                                        @media(max-width: 1023.98px) {
                                  .match - info - MATCH.prematch - status.description {
                                                                            font - size: .75rem
                                  }
                                }

                                                                        .match-info-MATCH .countdown {
                                                                            padding: .25rem .75rem;
                                                                        float: right;
                                                                        margin: 0 -0.75rem -0.5rem -0.75rem;
                                                                        font-size: .625rem;
                                                                        line-height: 1.6;
                                                                        float: right;
                                                                        padding-top: 0;
                                                                        margin-right: .05rem
                                }

                                                                        .match-info-MATCH .team {
                                                                            margin - bottom: 8px
                                }

                                                                        .match-info-MATCH .team .name-detail,
                                                                        .match-info-MATCH .team .score-detail {
                                                                            font - size: 18px !important
                                }

                                                                        .match-info-MATCH .team .name,
                                                                        .match-info-MATCH .team .score {
                                                                            font - family: "BentonSans-Bold", Arial, "Noto Sans", sans-serif !important
                                }

                                                                        .match-info-MATCH .team .name-detail .name:hover {
                                                                            color: #0278bb !important
                                }

                                                                        .match-info-MATCH .team .name-detail .flag {
                                                                            width: 32px;
                                                                        height: auto;
                                                                        top: 0
                                }

                                                                        .match-info-MATCH .team .name-detail .winner-icon {
                                                                            font - size: 18px
                                }

                                                                        .match-info-MATCH .team .name-detail .batting-indicator {
                                                                            width: 8px;
                                                                        height: 8px;
                                                                        margin-left: 10px
                                }

                                                                        .match-info-MATCH .team .score-detail .score-info {
                                                                            font - size: .875rem;
                                                                        color: #48494a;
                                                                        font-family: "BentonSans", Arial, "Noto Sans", sans-serif;
                                                                        margin-right: 8px
                                }

                                                                        .match-info-MATCH .team-gray .name,
                                                                        .match-info-MATCH .team-gray .score {
                                                                            color: #a5a6a7
                                }

                                                                        .match-info-MATCH .team-gray .score-detail .score-info {
                                                                            color: #a5a6a7
                                }

                                                                        .match-info-MATCH .status-text {
                                                                            color: #2b2c2d;
                                                                        font-size: .875rem
                                }

                                                                        @media(max-width: 1023.98px) {

                                  .match - info - MATCH.status,
                                  .match - info - MATCH.description {
                                                                            font - size: 10px
                                  }

                                                                        .match-info-MATCH .status.has-icon,
                                                                        .match-info-MATCH .description.has-icon {
                                                                            max - width: 85%
                                  }

                                                                        .match-info-MATCH .teams {
                                                                            margin: 12px 0
                                  }

                                                                        .match-info-MATCH .teams.collapsed {
                                                                            margin: 0
                                  }

                                                                        .match-info-MATCH .team .name-detail .flag {
                                                                            width: 24px;
                                                                        height: 24px
                                  }

                                                                        .match-info-MATCH .team .score-detail .score-info {
                                                                            font - size: 10px
                                  }

                                                                        .match-info-MATCH .status-text {
                                                                            font - size: 12px
                                  }
                                }

                                                                        .match-info-link-FIXTURES {
                                                                            width: 100%
                                }

                                                                        .match-info-FIXTURES {
                                                                            padding: .5rem 1.5rem
                                }

                                                                        @media(max-width: 1023.98px) {
                                  .match - info - FIXTURES {
                                                                            padding: .5rem 1rem
                                  }
                                }

                                                                        .match-info-FIXTURES .status,
                                                                        .match-info-FIXTURES .status-text,
                                                                        .match-info-FIXTURES .description {
                                                                            font - size: .625rem
                                }

                                                                        .match-info-FIXTURES .status .red,
                                                                        .match-info-FIXTURES .status-text .red,
                                                                        .match-info-FIXTURES .description .red {
                                                                            color: #d00 !important
                                }

                                                                        .match-info-FIXTURES .name,
                                                                        .match-info-FIXTURES .score {
                                                                            font - size: .875rem !important
                                }

                                                                        .match-info-FIXTURES .countdown {
                                                                            padding: .25rem .75rem;
                                                                        float: right;
                                                                        margin: 0 -0.75rem -0.5rem -0.75rem;
                                                                        font-size: .625rem;
                                                                        line-height: 1.6;
                                                                        float: right;
                                                                        padding-top: 0;
                                                                        margin-right: .05rem
                                }

                                                                        .bet365-scorecard {
                                                                            padding: .5rem 1.5rem
                                }

                                                                        .custom-toast {
                                                                            width: 100%;
                                                                        padding: 0;
                                                                        position: fixed;
                                                                        z-index: 1000;
                                                                        display: flex;
                                                                        justify-content: center;
                                                                        align-items: center;
                                                                        top: 50px;
                                                                        left: 0;
                                                                        right: 0;
                                                                        z-index: 100;
                                                                        transform: translateY(-100px);
                                                                        animation: slideDown 3s
                                }

                                                                        .custom-toast div {
                                                                            padding: 6px 12px;
                                                                        width: 200px;
                                                                        box-shadow: 1px 1px 6px rgba(0, 0, 0, .16);
                                                                        border-radius: 4px;
                                                                        color: #fff;
                                                                        font-family: "BentonSans-Medium", Arial, "Noto Sans", sans-serif;
                                                                        font-size: 1rem;
                                                                        text-align: center;
                                                                        background: rgba(0, 0, 0, .8)
                                }

                                                                        @keyframes slideDown {

                                                                            0 %,
                                                                            100 % {
                                    - webkit - transform: translateY(-100px)
                                  }

                                                                        10%,
                                                                        90% {
                                                                            -webkit - transform: translateY(0px)
                                  }
                                }

                                                                        .custom-toast-pin {
                                                                            animation: slideDown 5s !important
                                }

                                                                        .custom-toast-pin div {
                                                                            width: 90% !important
                                }
                                                                    </style>
                                                                    <div>
                                                                        <div class="match-info match-info-MATCH match-info-MATCH-half-width">
                                                                            <div class="teams">
                                                                                <div>
                                                                                    <div class="team">
                                                                                        <div class="name-detail"><img
                                                                                            src="https://wassets.hscicdn.com/static/images/lazyimage.svg"
                                                                                            alt="India Flag" class="img img-lazy flag" /><a data-hover=""
                                                                                                class="name-link" target="_self" rel="" href="/team/india-6">
                                                                                                <p class="name">India</p>
                                                                                            </a><i class="espn-icon icon-games-solid-after icon-sm winner-icon"></i></div>
                                                                                        <div class="score-detail"><span class="score-info"></span><span
                                                                                            class="score">210/2</span></div>
                                                                                    </div>
                                                                                    <div class="team team-gray">
                                                                                        <div class="name-detail"><img
                                                                                            src="https://wassets.hscicdn.com/static/images/lazyimage.svg"
                                                                                            alt="Afghanistan Flag" class="img img-lazy flag" /><a data-hover=""
                                                                                                class="name-link" target="_self" rel="" href="/team/afghanistan-40">
                                                                                                <p class="name">Afghanistan</p>
                                                                                            </a></div>
                                                                                        <div class="score-detail"><span class="score-info">(20 ov, target
                                                                                            211)</span><span class="score">144/7</span></div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="status-text"><span>India won by 66 runs</span></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="rhs">
                                                                    <div>
                                                                        <div class="slick-slider slick-initialized">
                                                                            <div class="slick-list">
                                                                                <div class="slick-track" style="width:100%;left:0%">
                                                                                    <div data-index="0" class="slick-slide slick-active slick-current" tabindex="-1"
                                                                                        aria-hidden="false" style="outline:none;width:100%">
                                                                                        <div>
                                                                                            <div tabindex="-1" style="width:100%;display:inline-block">
                                                                                                <div class="playerofthematch inverted">
                                                                                                    <div class="playerofthematch-content">
                                                                                                        <div class="playerofthematch-title">Player Of The Match</div>
                                                                                                        <div class="playerofthematch-player-detail"><a data-hover=""
                                                                                                            target="_self" rel="" href="/player/rohit-sharma-34102"><span
                                                                                                                class="playerofthematch-name">Rohit Sharma</span><span
                                                                                                                    class="playerofthematch-teamName">,
                                                                                                                <!-- -->INDIA
                                                                                                            </span></a></div>
                                                                                                        <div class="playerofthematch-score-text">74 (47)</div>
                                                                                                    </div><a data-hover="" target="_self" rel=""
                                                                                                        href="/player/rohit-sharma-34102">
                                                                                                        <div class="playerofthematch-image-container"><img
                                                                                                            src="https://wassets.hscicdn.com/static/images/lazyimage.svg"
                                                                                                            alt="rohit-sharma" class="img img-lazy playerofthematch-image" />
                                                                                                            <div class="playerofthematch-badge inverted"><img
                                                                                                                src="https://wassets.hscicdn.com/static/images/lazyimage.svg"
                                                                                                                alt="" class="img img-lazy" /></div>
                                                                                                        </div>
                                                                                                    </a>
                                                                                                </div>
                                                                                                <div class="playerofthematch inverted no-border">
                                                                                                    <div class="playerofthematch-content">
                                                                                                        <div class="playerofthematch-title">Cricinfo&#x27;s MVP</div>
                                                                                                        <div class="playerofthematch-player-detail"><a data-hover=""
                                                                                                            target="_self" rel="" href="/player/rohit-sharma-34102"><span
                                                                                                                class="playerofthematch-name">Rohit Sharma</span><span
                                                                                                                    class="playerofthematch-teamName">,
                                                                                                                <!-- -->INDIA
                                                                                                            </span></a></div>
                                                                                                        <div class="playerofthematch-score-text"><a data-hover="" target="_self"
                                                                                                            rel=""
                                                                                                            href="/series/icc-men-s-t20-world-cup-2021-22-1267897/afghanistan-vs-india-33rd-match-group-2-1273744/match-impact-player">Impact
                                                                                                            <!-- --> <i class="espn-icon icon-arrow-right-outline-after"></i>
                                                                                                        </a></div>
                                                                                                    </div><a data-hover="" target="_self" rel=""
                                                                                                        href="/player/rohit-sharma-34102">
                                                                                                        <div class="playerofthematch-image-container"><img
                                                                                                            src="https://wassets.hscicdn.com/static/images/lazyimage.svg"
                                                                                                            alt="rohit-sharma" class="img img-lazy playerofthematch-image" />
                                                                                                            <div class="playerofthematch-badge inverted"><img
                                                                                                                src="https://wassets.hscicdn.com/static/images/lazyimage.svg"
                                                                                                                alt="" class="img img-lazy" /></div>
                                                                                                        </div>
                                                                                                    </a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="widget-tabs match-home-tabs"><a data-hover="" class="widget-tab-link "
                                                            target="_self" rel=""
                                                            href="/series/icc-men-s-t20-world-cup-2021-22-1267897/afghanistan-vs-india-33rd-match-group-2-1273744/live-cricket-score">
                                                            <div class="widget-tab ">Summary</div>
                                                        </a><a data-hover="" class="widget-tab-link undefined" target="_self" rel=""
                                                            href="/series/icc-men-s-t20-world-cup-2021-22-1267897/afghanistan-vs-india-33rd-match-group-2-1273744/full-scorecard">
                                                                <div class="widget-tab widget-tab-active">Scorecard</div>
                                                            </a><a data-hover="" class="widget-tab-link " target="_self" rel=""
                                                                href="/series/icc-men-s-t20-world-cup-2021-22-1267897/afghanistan-vs-india-33rd-match-group-2-1273744/match-impact-player">
                                                                <div class="widget-tab ">MVP</div>
                                                            </a><a data-hover="" class="widget-tab-link " target="_self" rel=""
                                                                href="/series/icc-men-s-t20-world-cup-2021-22-1267897/afghanistan-vs-india-33rd-match-group-2-1273744/match-report">
                                                                <div class="widget-tab ">Report</div>
                                                            </a><a data-hover="" class="widget-tab-link " target="_self" rel=""
                                                                href="/series/icc-men-s-t20-world-cup-2021-22-1267897/afghanistan-vs-india-33rd-match-group-2-1273744/ball-by-ball-commentary">
                                                                <div class="widget-tab ">Commentary</div>
                                                            </a><a data-hover="" class="widget-tab-link " target="_self" rel=""
                                                                href="/series/icc-men-s-t20-world-cup-2021-22-1267897/afghanistan-vs-india-33rd-match-group-2-1273744/match-statistics">
                                                                <div class="widget-tab ">Statistics</div>
                                                            </a><a data-hover="" class="widget-tab-link " target="_self" rel=""
                                                                href="/series/icc-men-s-t20-world-cup-2021-22-1267897/afghanistan-vs-india-33rd-match-group-2-1273744/match-overs-comparison">
                                                                <div class="widget-tab ">Overs</div>
                                                            </a><a data-hover="" class="widget-tab-link " target="_self" rel=""
                                                                href="/series/icc-men-s-t20-world-cup-2021-22-1267897/points-table-standings">
                                                                <div class="widget-tab ">Table</div>
                                                            </a><a data-hover="" class="widget-tab-link " target="_self" rel=""
                                                                href="/series/icc-men-s-t20-world-cup-2021-22-1267897/afghanistan-vs-india-33rd-match-group-2-1273744/match-news">
                                                                <div class="widget-tab ">News</div>
                                                            </a><a data-hover="" class="widget-tab-link " target="_self" rel=""
                                                                href="/series/icc-men-s-t20-world-cup-2021-22-1267897/afghanistan-vs-india-33rd-match-group-2-1273744/match-videos">
                                                                <div class="widget-tab ">Videos</div>
                                                            </a><a data-hover="" class="widget-tab-link " target="_self" rel=""
                                                                href="/series/icc-men-s-t20-world-cup-2021-22-1267897/afghanistan-vs-india-33rd-match-group-2-1273744/match-photo">
                                                                <div class="widget-tab ">Photos</div>
                                                            </a><a data-hover="" class="widget-tab-link " target="_self" rel=""
                                                                href="/series/icc-men-s-t20-world-cup-2021-22-1267897/afghanistan-vs-india-33rd-match-group-2-1273744/live-match-blog">
                                                                <div class="widget-tab ">Blog</div>
                                                            </a></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="match-body">
                                                <style>
                                                    .match-scorecard-page .match-scorecard-table .hundred-icon {
                                                        color: #d00;
                                                    font-size: 1rem;
                                                    display: inline-block;
                                                    margin-left: 6px;
                                                    cursor: pointer
                      }

                                                    .match-scorecard-page .match-scorecard-table .hundred-icon:after {
                                                        font - weight: 900
                      }

                                                    .match-scorecard-page .match-scorecard-table tr td .bowler-wicket {
                                                        position: relative;
                                                    left: 14px
                      }

                                                    @media(max-width: 1023.98px) {
                        .match - scorecard - page.match - scorecard - table tr td .bowler-wicket {
                                                        left: 13px
                        }
                      }

                                                    .match-scorecard-page .match-scorecard-table tr td .collapse-content {
                                                        padding: .25rem 1.5rem
                      }

                                                    @media(max-width: 767.98px) {
                        .match - scorecard - page.match - scorecard - table tr td .collapse-content {
                                                        padding: 5px 8px
                        }
                      }

                                                    .match-scorecard-page .match-scorecard-table tr th:first-child,
                                                    .match-scorecard-page .match-scorecard-table tr td:first-child {
                                                        padding - left: 1.5rem
                      }

                                                    .match-scorecard-page .match-scorecard-table tr th:last-child,
                                                    .match-scorecard-page .match-scorecard-table tr td:last-child {
                                                        padding - right: 1.5rem
                      }

                                                    .match-scorecard-page .match-scorecard-table .video-icon {
                                                        color: #d00;
                                                    font-size: .875rem;
                                                    line-height: 1.5;
                                                    letter-spacing: 0;
                                                    cursor: pointer
                      }

                                                    .match-scorecard-page .match-scorecard-table .section-header.player-details .header-title {
                                                        text - transform: none !important;
                                                    color: #2b2c2d;
                                                    text-decoration: underline;
                                                    text-decoration-color: #cbccce;
                                                    font-size: .875rem;
                                                    line-height: 1.5;
                                                    letter-spacing: 0;
                                                    font-family: "BentonSans-Medium", Arial, "Noto Sans", sans-serif;
                                                    font-weight: normal
                      }

                                                    .match-scorecard-page .match-scorecard-table .section-header.player-details .header-title:hover {
                                                        color: #0278bb
                      }

                                                    @media(max-width: 1023.98px) {
                        .match - scorecard - page.match - scorecard - table.section - header.player - details.header - title {
                                                        font - size: .75rem
                        }
                      }

                                                    .match-scorecard-page .match-scorecard-table .section-header:hover .header-title {
                                                        color: #0278bb
                      }

                                                    .match-scorecard-page .match-notes .notes-arrow {
                                                        color: #c00
                      }

                                                    .match-scorecard-page .match-notes .Collapsible {
                                                        margin - bottom: 1.5rem
                      }

                                                    .match-scorecard-page .match-notes .Collapsible__trigger.is-open .espn-icon {
                                                        display: inline-block;
                                                    transform: rotate(180deg);
                                                    -webkit-transform: rotate(180deg);
                                                    transition: all .5s ease-in-out
                      }

                                                    @media(max-width: 767.98px) {
                        .match - scorecard - page.match - details - table.multiple - detail - table - values > a {
                                                        padding: 5px
                        }
                      }

                                                    .match-scorecard-page .match-details-table td {
                                                        font - size: .875rem;
                                                    line-height: 1.5;
                                                    letter-spacing: 0
                      }

                                                    @media(max-width: 1023.98px) {
                        .match - scorecard - page {
                                                        font - size: .625rem;
                                                    line-height: 1.6;
                                                    letter-spacing: 0
                        }

                                                    .match-scorecard-page .table {
                                                        margin - bottom: 5px
                        }

                                                    .match-scorecard-page .section-header {
                                                        padding: .75rem 1rem
                        }

                                                    .match-scorecard-page .section-header .espn-icon {
                                                        display: flex !important
                        }

                                                    .match-scorecard-page .header-title {
                                                        font - size: .625rem;
                                                    line-height: 1.6;
                                                    letter-spacing: 0
                        }

                                                    .match-scorecard-page .match-scorecard-table tr th {
                                                        font - size: .75rem;
                                                    line-height: 1.5;
                                                    letter-spacing: .1px;
                                                    padding: 5px;
                                                    border-bottom-width: 0px;
                                                    white-space: nowrap
                        }

                                                    .match-scorecard-page .match-scorecard-table tr th:first-child {
                                                        padding: 5px 5px 5px 10px;
                                                    word-wrap: break-word
                        }

                                                    .match-scorecard-page .match-scorecard-table tr th:last-child {
                                                        padding - right: 5px
                        }

                                                    .match-scorecard-page .match-scorecard-table tr td {
                                                        padding: 5px;
                                                    font-size: .75rem;
                                                    line-height: 1.5;
                                                    letter-spacing: .1px
                        }

                                                    .match-scorecard-page .match-scorecard-table tr td:first-child {
                                                        padding: 5px
                        }

                                                    .match-scorecard-page .match-scorecard-table tr td:last-child {
                                                        padding - right: 5px
                        }

                                                    .match-scorecard-page .match-scorecard-table tr td.batsman-cell {
                                                        word - wrap: break-word;
                                                    overflow: visible
                        }

                                                    .match-scorecard-page .match-scorecard-table tr td a {
                                                        font - size: .75rem;
                                                    line-height: 1.5;
                                                    letter-spacing: .1px;
                                                    font-family: "BentonSans-Medium", Arial, "Noto Sans", sans-serif
                        }

                                                    .match-scorecard-page .match-scorecard-table tr.extras td,
                                                    .match-scorecard-page .match-scorecard-table tr.total td {
                                                        font - family: "BentonSans-Medium", Arial, "Noto Sans", sans-serif;
                                                    font-size: .75rem;
                                                    line-height: 1.5;
                                                    letter-spacing: .1px;
                                                    padding-top: 10px;
                                                    padding-bottom: 10px
                        }
                      }
                                                </style>
                                                <div class="card content-block rounded-0"></div>
                                                <div class="match-scorecard-page">
                                                    <div class="card content-block match-scorecard-table">
                                                        <div class="Collapsible"><span class="Collapsible__trigger is-open">
                                                            <div class="section-header border-bottom text-danger cursor-pointer">
                                                                <div class="row no-gutters align-items-center">
                                                                    <div class="col-auto">
                                                                        <div class="image-container"><i
                                                                            class="espn-icon icon-caret-down-solid-after icon-xl header-icon"></i></div>
                                                                    </div>
                                                                    <div class="col">
                                                                        <h5 class="header-title label">India INNINGS (20 overs maximum)</h5>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </span>
                                                            <div class="Collapsible__contentOuter"
                                                                style="height:auto;-webkit-transition:none;-ms-transition:none;transition:none;overflow:hidden">
                                                                <div class="Collapsible__contentInner">
                                                                    <div>
                                                                        <table class="table batsman">
                                                                            <thead class="thead-light bg-light">
                                                                                <tr>
                                                                                    <th style="width:25%">BATTING</th>
                                                                                    <th style="width:25%"> </th>
                                                                                    <th style="width:8%">R</th>
                                                                                    <th style="width:8%" class="text-uppercase">B</th>
                                                                                    <th style="width:8%">M</th>
                                                                                    <th style="width:8%">4s</th>
                                                                                    <th style="width:8%">6s</th>
                                                                                    <th style="width:10%">SR</th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td class="batsman-cell text-truncate out"><a data-hover="" class="small"
                                                                                        target="_self" rel="" title="View full profile of KL Rahul"
                                                                                        href="/player/kl-rahul-422108">KL Rahul
                                                                                        <!-- -->
                                                                                    </a></td>
                                                                                    <td class="text-left"><span class="cursor-pointer"><i id="caret-60530"
                                                                                        class="espn-icon icon-caret-sm2-down-after icon-sm text-danger font-weight-bold small pr-1"></i>
                                                                                        b Gulbadin Naib</span></td>
                                                                                    <td class="font-weight-bold">69</td>
                                                                                    <td>48</td>
                                                                                    <td>88</td>
                                                                                    <td>6</td>
                                                                                    <td>2</td>
                                                                                    <td>143.75</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="p-0 border-0 d-none out" colSpan="9"></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="batsman-cell text-truncate out"><a data-hover="" class="small"
                                                                                        target="_self" rel="" title="View full profile of Rohit Sharma"
                                                                                        href="/player/rohit-sharma-34102">Rohit Sharma
                                                                                        <!-- -->
                                                                                    </a></td>
                                                                                    <td class="text-left"><span class="cursor-pointer"><i id="caret-48405"
                                                                                        class="espn-icon icon-caret-sm2-down-after icon-sm text-danger font-weight-bold small pr-1"></i>c
                                                                                        Mohammad Nabi b Karim Janat</span></td>
                                                                                    <td class="font-weight-bold">74</td>
                                                                                    <td>47</td>
                                                                                    <td>78</td>
                                                                                    <td>8</td>
                                                                                    <td>3</td>
                                                                                    <td>157.44</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="p-0 border-0 d-none out" colSpan="9"></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="batsman-cell text-truncate not-out"><a data-hover="" class="small"
                                                                                        target="_self" rel="" title="View full profile of Rishabh Pant"
                                                                                        href="/player/rishabh-pant-931581">Rishabh Pant
                                                                                        <!-- --> <span>†</span>
                                                                                    </a></td>
                                                                                    <td class="text-left">not out </td>
                                                                                    <td class="font-weight-bold">27</td>
                                                                                    <td>13</td>
                                                                                    <td>29</td>
                                                                                    <td>1</td>
                                                                                    <td>3</td>
                                                                                    <td>207.69</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="p-0 border-0 d-none not-out" colSpan="9"></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="batsman-cell text-truncate not-out"><a data-hover="" class="small"
                                                                                        target="_self" rel="" title="View full profile of Hardik Pandya"
                                                                                        href="/player/hardik-pandya-625371">Hardik Pandya
                                                                                        <!-- -->
                                                                                    </a></td>
                                                                                    <td class="text-left">not out </td>
                                                                                    <td class="font-weight-bold">35</td>
                                                                                    <td>13</td>
                                                                                    <td>19</td>
                                                                                    <td>4</td>
                                                                                    <td>2</td>
                                                                                    <td>269.23</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="p-0 border-0 d-none not-out" colSpan="9"></td>
                                                                                </tr>
                                                                                <tr class="extras">
                                                                                    <td colSpan="1">Extras</td>
                                                                                    <td class="text-left">(b 2, lb 1, nb 1, w 1)</td>
                                                                                    <td colSpan="1" class="text-right font-weight-bold">5</td>
                                                                                    <td colSpan="7" class="text-right"></td>
                                                                                </tr>
                                                                            </tbody>
                                                                            <tfoot>
                                                                                <tr class="thead-light bg-light total">
                                                                                    <td colSpan="1">TOTAL</td>
                                                                                    <td class="text-left">(20 Ov, RR: 10.50)</td>
                                                                                    <td colSpan="1" class="text-right font-weight-bold">210
                                                                                        <!-- -->/2
                                                                                    </td>
                                                                                    <td colSpan="7" class="text-right"></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td colSpan="9">
                                                                                        <div><strong>Did not bat: </strong><a data-hover="" class="small" target="_self"
                                                                                            rel="" href="/player/virat-kohli-253802"><span>Virat Kohli<span> (c)</span>,
                                                                                                <!-- -->
                                                                                            </span></a><a data-hover="" class="small" target="_self" rel=""
                                                                                                href="/player/suryakumar-yadav-446507"><span>Suryakumar Yadav
                                                                                                    <!-- -->,
                                                                                                    <!-- -->
                                                                                                </span></a><a data-hover="" class="small" target="_self" rel=""
                                                                                                    href="/player/ravindra-jadeja-234675"><span>Ravindra Jadeja
                                                                                                    <!-- -->,
                                                                                                    <!-- -->
                                                                                                </span></a><a data-hover="" class="small" target="_self" rel=""
                                                                                                    href="/player/shardul-thakur-475281"><span>Shardul Thakur
                                                                                                    <!-- -->,
                                                                                                    <!-- -->
                                                                                                </span></a><a data-hover="" class="small" target="_self" rel=""
                                                                                                    href="/player/ravichandran-ashwin-26421"><span>Ravichandran Ashwin
                                                                                                    <!-- -->,
                                                                                                    <!-- -->
                                                                                                </span></a><a data-hover="" class="small" target="_self" rel=""
                                                                                                    href="/player/mohammed-shami-481896"><span>Mohammed Shami
                                                                                                    <!-- -->,
                                                                                                    <!-- -->
                                                                                                </span></a><a data-hover="" class="small" target="_self" rel=""
                                                                                                    href="/player/jasprit-bumrah-625383"><span>Jasprit Bumrah
                                                                                                    <!-- -->
                                                                                                </span></a></div>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td colSpan="9">
                                                                                        <div><strong>Fall of wickets
                                                                                            <!-- -->:
                                                                                        </strong><span>1
                                                                                                <!-- -->-
                                                                                                <!-- -->140
                                                                                                <!-- --> (
                                                                                                <!-- -->Rohit Sharma
                                                                                                <!-- -->, 14.4 ov
                                                                                                <!-- -->)
                                                                                            </span><span>,
                                                                                                <!-- -->2
                                                                                                <!-- -->-
                                                                                                <!-- -->147
                                                                                                <!-- --> (
                                                                                                <!-- -->KL Rahul
                                                                                                <!-- -->, 16.3 ov
                                                                                                <!-- -->)
                                                                                            </span></div>
                                                                                    </td>
                                                                                </tr>
                                                                            </tfoot>
                                                                        </table>
                                                                        <table class="table bowler">
                                                                            <thead class="thead-light bg-light">
                                                                                <tr>
                                                                                    <th style="width:20%">BOWLING</th>
                                                                                    <th style="width:8%">O</th>
                                                                                    <th style="width:8%">M</th>
                                                                                    <th style="width:8%">R</th>
                                                                                    <th style="width:8%">W</th>
                                                                                    <th style="width:8%">ECON</th>
                                                                                    <th style="width:8%">0s</th>
                                                                                    <th style="width:8%">4s</th>
                                                                                    <th style="width:8%">6s</th>
                                                                                    <th class="text-uppercase" style="width:8%">WD</th>
                                                                                    <th style="width:8%">NB</th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td class="text-nowrap" style="width:20%"><a data-hover="Mohammad Nabi"
                                                                                        class="small" target="_self" rel="" title="View full profile of Mohammad Nabi"
                                                                                        href="/player/mohammad-nabi-25913">Mohammad Nabi</a></td>
                                                                                    <td>1</td>
                                                                                    <td>0</td>
                                                                                    <td>7</td>
                                                                                    <td>0</td>
                                                                                    <td>7.00</td>
                                                                                    <td>2</td>
                                                                                    <td>1</td>
                                                                                    <td>0</td>
                                                                                    <td>0</td>
                                                                                    <td>0</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="text-nowrap" style="width:20%"><a data-hover="Sharafuddin Ashraf"
                                                                                        class="small" target="_self" rel=""
                                                                                        title="View full profile of Sharafuddin Ashraf"
                                                                                        href="/player/sharafuddin-ashraf-633362">Sharafuddin Ashraf</a></td>
                                                                                    <td>2</td>
                                                                                    <td>0</td>
                                                                                    <td>25</td>
                                                                                    <td>0</td>
                                                                                    <td>12.50</td>
                                                                                    <td>1</td>
                                                                                    <td>3</td>
                                                                                    <td>1</td>
                                                                                    <td>0</td>
                                                                                    <td>0</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="text-nowrap" style="width:20%"><a data-hover="Naveen-ul-Haq"
                                                                                        class="small" target="_self" rel="" title="View full profile of Naveen-ul-Haq"
                                                                                        href="/player/naveen-ul-haq-793447">Naveen-ul-Haq</a></td>
                                                                                    <td>4</td>
                                                                                    <td>0</td>
                                                                                    <td>59</td>
                                                                                    <td>0</td>
                                                                                    <td>14.75</td>
                                                                                    <td>4</td>
                                                                                    <td>5</td>
                                                                                    <td>4</td>
                                                                                    <td>1</td>
                                                                                    <td>1</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="text-nowrap" style="width:20%"><a data-hover="Hamid Hassan"
                                                                                        class="small" target="_self" rel="" title="View full profile of Hamid Hassan"
                                                                                        href="/player/hamid-hassan-311427">Hamid Hassan</a></td>
                                                                                    <td>4</td>
                                                                                    <td>0</td>
                                                                                    <td>34</td>
                                                                                    <td>0</td>
                                                                                    <td>8.50</td>
                                                                                    <td>10</td>
                                                                                    <td>5</td>
                                                                                    <td>1</td>
                                                                                    <td>0</td>
                                                                                    <td>0</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="text-nowrap" style="width:20%"><a data-hover="Gulbadin Naib"
                                                                                        class="small" target="_self" rel="" title="View full profile of Gulbadin Naib"
                                                                                        href="/player/gulbadin-naib-352048">Gulbadin Naib</a></td>
                                                                                    <td>4</td>
                                                                                    <td>0</td>
                                                                                    <td>39</td>
                                                                                    <td><span class="cursor-pointer bowler-wicket">1<i id="caret-57022"
                                                                                        class="espn-icon icon-caret-sm2-down-after icon-sm text-danger font-weight-bold small"></i></span>
                                                                                    </td>
                                                                                    <td>9.75</td>
                                                                                    <td>5</td>
                                                                                    <td>3</td>
                                                                                    <td>2</td>
                                                                                    <td>0</td>
                                                                                    <td>0</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="p-0 border-0 d-none" colSpan="9"></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="text-nowrap" style="width:20%"><a data-hover="Rashid Khan"
                                                                                        class="small" target="_self" rel="" title="View full profile of Rashid Khan"
                                                                                        href="/player/rashid-khan-793463">Rashid Khan</a></td>
                                                                                    <td>4</td>
                                                                                    <td>0</td>
                                                                                    <td>36</td>
                                                                                    <td>0</td>
                                                                                    <td>9.00</td>
                                                                                    <td>4</td>
                                                                                    <td>1</td>
                                                                                    <td>2</td>
                                                                                    <td>0</td>
                                                                                    <td>0</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="text-nowrap" style="width:20%"><a data-hover="Karim Janat"
                                                                                        class="small" target="_self" rel="" title="View full profile of Karim Janat"
                                                                                        href="/player/karim-janat-793467">Karim Janat</a></td>
                                                                                    <td>1</td>
                                                                                    <td>0</td>
                                                                                    <td>7</td>
                                                                                    <td><span class="cursor-pointer bowler-wicket">1<i id="caret-79163"
                                                                                        class="espn-icon icon-caret-sm2-down-after icon-sm text-danger font-weight-bold small"></i></span>
                                                                                    </td>
                                                                                    <td>7.00</td>
                                                                                    <td>2</td>
                                                                                    <td>1</td>
                                                                                    <td>0</td>
                                                                                    <td>0</td>
                                                                                    <td>0</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="p-0 border-0 d-none" colSpan="9"></td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                    <div></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="card content-block match-scorecard-table">
                                                        <div class="Collapsible"><span class="Collapsible__trigger is-open">
                                                            <div class="section-header border-bottom text-danger cursor-pointer">
                                                                <div class="row no-gutters align-items-center">
                                                                    <div class="col-auto">
                                                                        <div class="image-container"><i
                                                                            class="espn-icon icon-caret-down-solid-after icon-xl header-icon"></i></div>
                                                                    </div>
                                                                    <div class="col">
                                                                        <h5 class="header-title label">Afghanistan INNINGS (target: 211 runs from 20 overs)
                                                                        </h5>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </span>
                                                            <div class="Collapsible__contentOuter"
                                                                style="height:auto;-webkit-transition:none;-ms-transition:none;transition:none;overflow:hidden">
                                                                <div class="Collapsible__contentInner">
                                                                    <div>
                                                                        <table class="table batsman">
                                                                            <thead class="thead-light bg-light">
                                                                                <tr>
                                                                                    <th style="width:25%">BATTING</th>
                                                                                    <th style="width:25%"> </th>
                                                                                    <th style="width:8%">R</th>
                                                                                    <th style="width:8%" class="text-uppercase">B</th>
                                                                                    <th style="width:8%">M</th>
                                                                                    <th style="width:8%">4s</th>
                                                                                    <th style="width:8%">6s</th>
                                                                                    <th style="width:10%">SR</th>
                                                                                    <th style="width:5%"> </th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td class="batsman-cell text-truncate out"><a data-hover="" class="small"
                                                                                        target="_self" rel="" title="View full profile of Hazratullah Zazai"
                                                                                        href="/player/hazratullah-zazai-793457">Hazratullah Zazai
                                                                                        <!-- -->
                                                                                    </a></td>
                                                                                    <td class="text-left"><span class="cursor-pointer"><i id="caret-79157"
                                                                                        class="espn-icon icon-caret-sm2-down-after icon-sm text-danger font-weight-bold small pr-1"></i>c
                                                                                        Thakur b Bumrah</span></td>
                                                                                    <td class="font-weight-bold">13</td>
                                                                                    <td>15</td>
                                                                                    <td>17</td>
                                                                                    <td>1</td>
                                                                                    <td>1</td>
                                                                                    <td>86.66</td>
                                                                                    <td></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="p-0 border-0 d-none out" colSpan="9"></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="batsman-cell text-truncate out"><a data-hover="" class="small"
                                                                                        target="_self" rel="" title="View full profile of Mohammad Shahzad"
                                                                                        href="/player/mohammad-shahzad-419873">Mohammad Shahzad
                                                                                        <!-- --> <span>†</span>
                                                                                    </a></td>
                                                                                    <td class="text-left"><span class="cursor-pointer"><i id="caret-60436"
                                                                                        class="espn-icon icon-caret-sm2-down-after icon-sm text-danger font-weight-bold small pr-1"></i>c
                                                                                        Ashwin b Mohammed Shami</span></td>
                                                                                    <td class="font-weight-bold">0</td>
                                                                                    <td>4</td>
                                                                                    <td>15</td>
                                                                                    <td>0</td>
                                                                                    <td>0</td>
                                                                                    <td>0.00</td>
                                                                                    <td></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="p-0 border-0 d-none out" colSpan="9"></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="batsman-cell text-truncate out"><a data-hover="" class="small"
                                                                                        target="_self" rel="" title="View full profile of Rahmanullah Gurbaz"
                                                                                        href="/player/rahmanullah-gurbaz-974087">Rahmanullah Gurbaz
                                                                                        <!-- -->
                                                                                    </a></td>
                                                                                    <td class="text-left"><span class="cursor-pointer"><i id="caret-90143"
                                                                                        class="espn-icon icon-caret-sm2-down-after icon-sm text-danger font-weight-bold small pr-1"></i>c
                                                                                        Pandya b Jadeja</span></td>
                                                                                    <td class="font-weight-bold">19</td>
                                                                                    <td>10</td>
                                                                                    <td>21</td>
                                                                                    <td>1</td>
                                                                                    <td>2</td>
                                                                                    <td>190.00</td>
                                                                                    <td></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="p-0 border-0 d-none out" colSpan="9"></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="batsman-cell text-truncate out"><a data-hover="" class="small"
                                                                                        target="_self" rel="" title="View full profile of Gulbadin Naib"
                                                                                        href="/player/gulbadin-naib-352048">Gulbadin Naib
                                                                                        <!-- -->
                                                                                    </a></td>
                                                                                    <td class="text-left"><span class="cursor-pointer"><i id="caret-57022"
                                                                                        class="espn-icon icon-caret-sm2-down-after icon-sm text-danger font-weight-bold small pr-1"></i>lbw
                                                                                        b Ashwin</span></td>
                                                                                    <td class="font-weight-bold">18</td>
                                                                                    <td>20</td>
                                                                                    <td>28</td>
                                                                                    <td>3</td>
                                                                                    <td>0</td>
                                                                                    <td>90.00</td>
                                                                                    <td></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="p-0 border-0 d-none out" colSpan="9"></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="batsman-cell text-truncate out"><a data-hover="" class="small"
                                                                                        target="_self" rel="" title="View full profile of Najibullah Zadran"
                                                                                        href="/player/najibullah-zadran-524049">Najibullah Zadran
                                                                                        <!-- -->
                                                                                    </a></td>
                                                                                    <td class="text-left"><span class="cursor-pointer"><i id="caret-65861"
                                                                                        class="espn-icon icon-caret-sm2-down-after icon-sm text-danger font-weight-bold small pr-1"></i>
                                                                                        b Ashwin</span></td>
                                                                                    <td class="font-weight-bold">11</td>
                                                                                    <td>13</td>
                                                                                    <td>24</td>
                                                                                    <td>0</td>
                                                                                    <td>1</td>
                                                                                    <td>84.61</td>
                                                                                    <td></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="p-0 border-0 d-none out" colSpan="9"></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="batsman-cell text-truncate out"><a data-hover="" class="small"
                                                                                        target="_self" rel="" title="View full profile of Mohammad Nabi"
                                                                                        href="/player/mohammad-nabi-25913">Mohammad Nabi
                                                                                        <!-- --> <span>(c)</span>
                                                                                    </a></td>
                                                                                    <td class="text-left"><span class="cursor-pointer"><i id="caret-46888"
                                                                                        class="espn-icon icon-caret-sm2-down-after icon-sm text-danger font-weight-bold small pr-1"></i>c
                                                                                        Jadeja b Mohammed Shami</span></td>
                                                                                    <td class="font-weight-bold">35</td>
                                                                                    <td>32</td>
                                                                                    <td>42</td>
                                                                                    <td>2</td>
                                                                                    <td>1</td>
                                                                                    <td>109.37</td>
                                                                                    <td></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="p-0 border-0 d-none out" colSpan="9"></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="batsman-cell text-truncate not-out"><a data-hover="" class="small"
                                                                                        target="_self" rel="" title="View full profile of Karim Janat"
                                                                                        href="/player/karim-janat-793467">Karim Janat
                                                                                        <!-- -->
                                                                                    </a></td>
                                                                                    <td class="text-left">not out </td>
                                                                                    <td class="font-weight-bold">42</td>
                                                                                    <td>22</td>
                                                                                    <td>41</td>
                                                                                    <td>3</td>
                                                                                    <td>2</td>
                                                                                    <td>190.90</td>
                                                                                    <td></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="p-0 border-0 d-none not-out" colSpan="9"></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="batsman-cell text-truncate out"><a data-hover="" class="small"
                                                                                        target="_self" rel="" title="View full profile of Rashid Khan"
                                                                                        href="/player/rashid-khan-793463">Rashid Khan
                                                                                        <!-- -->
                                                                                    </a></td>
                                                                                    <td class="text-left"><span class="cursor-pointer"><i id="caret-79159"
                                                                                        class="espn-icon icon-caret-sm2-down-after icon-sm text-danger font-weight-bold small pr-1"></i>c
                                                                                        Pandya b Mohammed Shami</span></td>
                                                                                    <td class="font-weight-bold">0</td>
                                                                                    <td>1</td>
                                                                                    <td>5</td>
                                                                                    <td>0</td>
                                                                                    <td>0</td>
                                                                                    <td>0.00</td>
                                                                                    <td><i id="play" class="espn-icon icon-play-outline-after icon-sm video-icon"></i>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="p-0 border-0 d-none out" colSpan="9"></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="batsman-cell text-truncate not-out"><a data-hover="" class="small"
                                                                                        target="_self" rel="" title="View full profile of Sharafuddin Ashraf"
                                                                                        href="/player/sharafuddin-ashraf-633362">Sharafuddin Ashraf
                                                                                        <!-- -->
                                                                                    </a></td>
                                                                                    <td class="text-left">not out </td>
                                                                                    <td class="font-weight-bold">2</td>
                                                                                    <td>3</td>
                                                                                    <td>7</td>
                                                                                    <td>0</td>
                                                                                    <td>0</td>
                                                                                    <td>66.66</td>
                                                                                    <td></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="p-0 border-0 d-none not-out" colSpan="9"></td>
                                                                                </tr>
                                                                                <tr class="extras">
                                                                                    <td colSpan="1">Extras</td>
                                                                                    <td class="text-left">(w 4)</td>
                                                                                    <td colSpan="1" class="text-right font-weight-bold">4</td>
                                                                                    <td colSpan="7" class="text-right"></td>
                                                                                </tr>
                                                                            </tbody>
                                                                            <tfoot>
                                                                                <tr class="thead-light bg-light total">
                                                                                    <td colSpan="1">TOTAL</td>
                                                                                    <td class="text-left">(20 Ov, RR: 7.19)</td>
                                                                                    <td colSpan="1" class="text-right font-weight-bold">144
                                                                                        <!-- -->/7
                                                                                    </td>
                                                                                    <td colSpan="7" class="text-right"></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td colSpan="9">
                                                                                        <div><strong>Did not bat: </strong><a data-hover="" class="small" target="_self"
                                                                                            rel="" href="/player/naveen-ul-haq-793447"><span>Naveen-ul-Haq
                                                                                                <!-- -->,
                                                                                                <!-- -->
                                                                                            </span></a><a data-hover="" class="small" target="_self" rel=""
                                                                                                href="/player/hamid-hassan-311427"><span>Hamid Hassan
                                                                                                    <!-- -->
                                                                                                </span></a></div>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td colSpan="9">
                                                                                        <div><strong>Fall of wickets
                                                                                            <!-- -->:
                                                                                        </strong><span>1
                                                                                                <!-- -->-
                                                                                                <!-- -->13
                                                                                                <!-- --> (
                                                                                                <!-- -->Mohammad Shahzad
                                                                                                <!-- -->, 2.6 ov
                                                                                                <!-- -->)
                                                                                            </span><span>,
                                                                                                <!-- -->2
                                                                                                <!-- -->-
                                                                                                <!-- -->13
                                                                                                <!-- --> (
                                                                                                <!-- -->Hazratullah Zazai
                                                                                                <!-- -->, 3.1 ov
                                                                                                <!-- -->)
                                                                                            </span><span>,
                                                                                                <!-- -->3
                                                                                                <!-- -->-
                                                                                                <!-- -->48
                                                                                                <!-- --> (
                                                                                                <!-- -->Rahmanullah Gurbaz
                                                                                                <!-- -->, 6.5 ov
                                                                                                <!-- -->)
                                                                                            </span><span>,
                                                                                                <!-- -->4
                                                                                                <!-- -->-
                                                                                                <!-- -->59
                                                                                                <!-- --> (
                                                                                                <!-- -->Gulbadin Naib
                                                                                                <!-- -->, 9.3 ov
                                                                                                <!-- -->)
                                                                                            </span><span>,
                                                                                                <!-- -->5
                                                                                                <!-- -->-
                                                                                                <!-- -->69
                                                                                                <!-- --> (
                                                                                                <!-- -->Najibullah Zadran
                                                                                                <!-- -->, 11.5 ov
                                                                                                <!-- -->)
                                                                                            </span><span>,
                                                                                                <!-- -->6
                                                                                                <!-- -->-
                                                                                                <!-- -->126
                                                                                                <!-- --> (
                                                                                                <!-- -->Mohammad Nabi
                                                                                                <!-- -->, 18.1 ov
                                                                                                <!-- -->)
                                                                                            </span><span>,
                                                                                                <!-- -->7
                                                                                                <!-- -->-
                                                                                                <!-- -->127
                                                                                                <!-- --> (
                                                                                                <!-- -->Rashid Khan
                                                                                                <!-- -->, 18.3 ov
                                                                                                <!-- -->)
                                                                                            </span></div>
                                                                                    </td>
                                                                                </tr>
                                                                            </tfoot>
                                                                        </table>
                                                                        <table class="table bowler">
                                                                            <thead class="thead-light bg-light">
                                                                                <tr>
                                                                                    <th style="width:20%">BOWLING</th>
                                                                                    <th style="width:8%">O</th>
                                                                                    <th style="width:8%">M</th>
                                                                                    <th style="width:8%">R</th>
                                                                                    <th style="width:8%">W</th>
                                                                                    <th style="width:8%">ECON</th>
                                                                                    <th style="width:8%">0s</th>
                                                                                    <th style="width:8%">4s</th>
                                                                                    <th style="width:8%">6s</th>
                                                                                    <th class="text-uppercase" style="width:8%">WD</th>
                                                                                    <th style="width:8%">NB</th>
                                                                                    <th style="width:5%"> </th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td class="text-nowrap" style="width:20%"><a data-hover="Mohammed Shami"
                                                                                        class="small" target="_self" rel=""
                                                                                        title="View full profile of Mohammed Shami"
                                                                                        href="/player/mohammed-shami-481896">Mohammed Shami</a></td>
                                                                                    <td>4</td>
                                                                                    <td>0</td>
                                                                                    <td>32</td>
                                                                                    <td><span class="cursor-pointer bowler-wicket">3<i id="caret-63646"
                                                                                        class="espn-icon icon-caret-sm2-down-after icon-sm text-danger font-weight-bold small"></i></span>
                                                                                    </td>
                                                                                    <td>8.00</td>
                                                                                    <td>13</td>
                                                                                    <td>3</td>
                                                                                    <td>2</td>
                                                                                    <td>1</td>
                                                                                    <td>0</td>
                                                                                    <td><i id="play" class="espn-icon icon-play-outline-after icon-sm video-icon"></i>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="p-0 border-0 d-none" colSpan="9"></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="text-nowrap" style="width:20%"><a data-hover="Jasprit Bumrah"
                                                                                        class="small" target="_self" rel=""
                                                                                        title="View full profile of Jasprit Bumrah"
                                                                                        href="/player/jasprit-bumrah-625383">Jasprit Bumrah</a></td>
                                                                                    <td>4</td>
                                                                                    <td>0</td>
                                                                                    <td>25</td>
                                                                                    <td><span class="cursor-pointer bowler-wicket">1<i id="caret-70640"
                                                                                        class="espn-icon icon-caret-sm2-down-after icon-sm text-danger font-weight-bold small"></i></span>
                                                                                    </td>
                                                                                    <td>6.25</td>
                                                                                    <td>13</td>
                                                                                    <td>2</td>
                                                                                    <td>1</td>
                                                                                    <td>2</td>
                                                                                    <td>0</td>
                                                                                    <td></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="p-0 border-0 d-none" colSpan="9"></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="text-nowrap" style="width:20%"><a data-hover="Hardik Pandya"
                                                                                        class="small" target="_self" rel="" title="View full profile of Hardik Pandya"
                                                                                        href="/player/hardik-pandya-625371">Hardik Pandya</a></td>
                                                                                    <td>2</td>
                                                                                    <td>0</td>
                                                                                    <td>23</td>
                                                                                    <td>0</td>
                                                                                    <td>11.50</td>
                                                                                    <td>3</td>
                                                                                    <td>3</td>
                                                                                    <td>1</td>
                                                                                    <td>0</td>
                                                                                    <td>0</td>
                                                                                    <td></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="text-nowrap" style="width:20%"><a data-hover="Ravindra Jadeja"
                                                                                        class="small" target="_self" rel=""
                                                                                        title="View full profile of Ravindra Jadeja"
                                                                                        href="/player/ravindra-jadeja-234675">Ravindra Jadeja</a></td>
                                                                                    <td>3</td>
                                                                                    <td>0</td>
                                                                                    <td>19</td>
                                                                                    <td><span class="cursor-pointer bowler-wicket">1<i id="caret-49247"
                                                                                        class="espn-icon icon-caret-sm2-down-after icon-sm text-danger font-weight-bold small"></i></span>
                                                                                    </td>
                                                                                    <td>6.33</td>
                                                                                    <td>8</td>
                                                                                    <td>1</td>
                                                                                    <td>1</td>
                                                                                    <td>0</td>
                                                                                    <td>0</td>
                                                                                    <td></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="p-0 border-0 d-none" colSpan="9"></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="text-nowrap" style="width:20%"><a data-hover="Ravichandran Ashwin"
                                                                                        class="small" target="_self" rel=""
                                                                                        title="View full profile of Ravichandran Ashwin"
                                                                                        href="/player/ravichandran-ashwin-26421">Ravichandran Ashwin</a></td>
                                                                                    <td>4</td>
                                                                                    <td>0</td>
                                                                                    <td>14</td>
                                                                                    <td><span class="cursor-pointer bowler-wicket">2<i id="caret-12894"
                                                                                        class="espn-icon icon-caret-sm2-down-after icon-sm text-danger font-weight-bold small"></i></span>
                                                                                    </td>
                                                                                    <td>3.50</td>
                                                                                    <td>12</td>
                                                                                    <td>0</td>
                                                                                    <td>0</td>
                                                                                    <td>1</td>
                                                                                    <td>0</td>
                                                                                    <td></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="p-0 border-0 d-none" colSpan="9"></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="text-nowrap" style="width:20%"><a data-hover="Shardul Thakur"
                                                                                        class="small" target="_self" rel=""
                                                                                        title="View full profile of Shardul Thakur"
                                                                                        href="/player/shardul-thakur-475281">Shardul Thakur</a></td>
                                                                                    <td>3</td>
                                                                                    <td>0</td>
                                                                                    <td>31</td>
                                                                                    <td>0</td>
                                                                                    <td>10.33</td>
                                                                                    <td>2</td>
                                                                                    <td>1</td>
                                                                                    <td>2</td>
                                                                                    <td>0</td>
                                                                                    <td>0</td>
                                                                                    <td></td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                    <div></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="card content-block nlp-banner"><a href="https://www.espncricinfo.com/ask"
                                                        data-hover="" target="_parent" rel="">
                                                        <div class="row">
                                                            <div class="col-10 col-md-12">
                                                                <div class="content">
                                                                    <div class="title">Unlocking the magic of Statsguru</div>
                                                                </div>
                                                            </div>
                                                            <div class="col-6 col-md-4">
                                                                <div class="logo"><img src="https://wassets.hscicdn.com/static/images/lazyimage.svg"
                                                                    alt="AskESPNcricinfo Logo" class="img img-lazy" /></div>
                                                            </div>
                                                        </div>
                                                    </a></div>
                                                    <div></div>
                                                    <div class="card content-block match-scorecard-table">
                                                        <div class="section-header border-bottom">
                                                            <div class="row no-gutters align-items-center">
                                                                <div class="col">
                                                                    <h5 class="header-title label">MATCH DETAILS</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="table-responsive">
                                                            <table cellPadding="8" class="w-100 table match-details-table">
                                                                <tbody>
                                                                    <tr>
                                                                        <td class="font-weight-bold match-venue" colSpan="2"><a
                                                                            href="https://www.espncricinfo.com/ci/content/ground/59396.html"
                                                                            data-hover="Zayed Cricket Stadium, Abu Dhabi" target="_parent" rel="">Zayed Cricket
                                                                            Stadium, Abu Dhabi</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td class="font-weight-bold border-right">Toss</td>
                                                                        <td>Afghanistan, elected to field first</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td class="font-weight-bold border-right">Series</td>
                                                                        <td class=""><a data-hover="ICC Men&#x27;s T20 World Cup" class="d-block" target="_self"
                                                                            rel="" href="/series/icc-men-s-t20-world-cup-2021-22-1267897">ICC Men&#x27;s T20
                                                                            World Cup</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td class="font-weight-bold border-right">Season</td>
                                                                        <td><a href="https://www.espncricinfo.com/ci/engine/series/index.html?season2021/22"
                                                                            data-hover="2021/22" class="small" target="_parent" rel="">2021/22</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td class="font-weight-bold border-right">Player Of The Match</td>
                                                                        <td class=""><a data-hover="" class="small d-block" target="_self" rel=""
                                                                            href="/player/rohit-sharma-34102">
                                                                            <div class="section-header border-bottom small p-0 player-details">
                                                                                <div class="row no-gutters align-items-center">
                                                                                    <div class="col-auto">
                                                                                        <div class="image-container"><img
                                                                                            src="https://wassets.hscicdn.com/static/images/lazyimage.svg"
                                                                                            alt="Rohit Sharma"
                                                                                            class="img img-lazy img-thumbnail header-img border-0" /></div>
                                                                                    </div>
                                                                                    <div class="col">
                                                                                        <h5 class="header-title label">Rohit Sharma</h5>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td class="font-weight-bold border-right">Match number</td>
                                                                        <td><a href="https://www.espncricinfo.com/ci/engine/records/index.html?class=3"
                                                                            data-hover="" target="_parent" rel="">T20I no.
                                                                            <!-- -->
                                                                            <!-- -->1390
                                                                        </a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td class="font-weight-bold border-right">Match days</td>
                                                                        <td>3 November 2021
                                                                            <!-- --> - night
                                                                            <!-- -->
                                                                            <!-- -->(20-over match)
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td class="font-weight-bold border-right">Umpires</td>
                                                                        <td class="multiple-detail-table-values"><a data-hover="" class="small d-block"
                                                                            target="_self" rel="" href="/player/paul-reiffel-7326">
                                                                            <div class="section-header border-bottom small p-0 player-details">
                                                                                <div class="row no-gutters align-items-center">
                                                                                    <div class="col-auto">
                                                                                        <div class="image-container"><img
                                                                                            src="https://wassets.hscicdn.com/static/images/lazyimage.svg"
                                                                                            alt="Australia Image"
                                                                                            class="img img-lazy img-thumbnail header-img border-0" /></div>
                                                                                    </div>
                                                                                    <div class="col">
                                                                                        <h5 class="header-title label">Paul Reiffel</h5>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </a><a data-hover="" class="small d-block" target="_self" rel=""
                                                                            href="/player/richard-kettleborough-15872">
                                                                                <div class="section-header border-bottom small p-0 player-details">
                                                                                    <div class="row no-gutters align-items-center">
                                                                                        <div class="col-auto">
                                                                                            <div class="image-container"><img
                                                                                                src="https://wassets.hscicdn.com/static/images/lazyimage.svg"
                                                                                                alt="England Image"
                                                                                                class="img img-lazy img-thumbnail header-img border-0" /></div>
                                                                                        </div>
                                                                                        <div class="col">
                                                                                            <h5 class="header-title label">Richard Kettleborough</h5>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td class="font-weight-bold border-right">TV Umpire</td>
                                                                        <td class=""><a data-hover="" class="small d-block" target="_self" rel=""
                                                                            href="/player/aleem-dar-39157">
                                                                            <div class="section-header border-bottom small p-0 player-details">
                                                                                <div class="row no-gutters align-items-center">
                                                                                    <div class="col-auto">
                                                                                        <div class="image-container"><img
                                                                                            src="https://wassets.hscicdn.com/static/images/lazyimage.svg"
                                                                                            alt="Pakistan Image"
                                                                                            class="img img-lazy img-thumbnail header-img border-0" /></div>
                                                                                    </div>
                                                                                    <div class="col">
                                                                                        <h5 class="header-title label">Aleem Dar</h5>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td class="font-weight-bold border-right">Reserve Umpire</td>
                                                                        <td class=""><a data-hover="" class="small d-block" target="_self" rel=""
                                                                            href="/player/langton-rusere-393453">
                                                                            <div class="section-header border-bottom small p-0 player-details">
                                                                                <div class="row no-gutters align-items-center">
                                                                                    <div class="col-auto">
                                                                                        <div class="image-container"><img
                                                                                            src="https://wassets.hscicdn.com/static/images/lazyimage.svg"
                                                                                            alt="Zimbabwe Image"
                                                                                            class="img img-lazy img-thumbnail header-img border-0" /></div>
                                                                                    </div>
                                                                                    <div class="col">
                                                                                        <h5 class="header-title label">Langton Rusere</h5>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td class="font-weight-bold border-right">Match Referee</td>
                                                                        <td class=""><a data-hover="" class="small d-block" target="_self" rel=""
                                                                            href="/player/david-boon-4169">
                                                                            <div class="section-header border-bottom small p-0 player-details">
                                                                                <div class="row no-gutters align-items-center">
                                                                                    <div class="col-auto">
                                                                                        <div class="image-container"><img
                                                                                            src="https://wassets.hscicdn.com/static/images/lazyimage.svg"
                                                                                            alt="Australia Image"
                                                                                            class="img img-lazy img-thumbnail header-img border-0" /></div>
                                                                                    </div>
                                                                                    <div class="col">
                                                                                        <h5 class="header-title label">David Boon</h5>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td class="font-weight-bold border-right">Points</td>
                                                                        <td>India 2, Afghanistan 0</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                    <div class="card content-block match-notes">
                                                        <div class="section-header border-bottom">
                                                            <div class="row no-gutters align-items-center">
                                                                <div class="col">
                                                                    <h5 class="header-title label">MATCH NOTES</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="p-3">
                                                            <div>
                                                                <ul>
                                                                    <li><strong>India innings</strong></li>
                                                                    <li>Powerplay: Overs 0.1 - 6.0 (Mandatory - 53 runs, 0 wicket)</li>
                                                                    <li>India: 50 runs in 4.6 overs (31 balls), Extras 1</li>
                                                                    <li>1st Wicket: 50 runs in 31 balls (KL Rahul 17, RG Sharma 34, Ex 1)</li>
                                                                    <li>Over 5.3: Review by Afghanistan (Bowling), Umpire - PR Reiffel, Batter - RG Sharma
                                                                        (Struck down)</li>
                                                                    <li>RG Sharma: 50 off 37 balls (7 x 4, 1 x 6)</li>
                                                                    <li>India: 100 runs in 11.4 overs (71 balls), Extras 1</li>
                                                                    <li>1st Wicket: 100 runs in 71 balls (KL Rahul 47, RG Sharma 54, Ex 1)</li>
                                                                    <li>KL Rahul: 50 off 35 balls (4 x 4, 2 x 6)</li>
                                                                    <li>Over 15.3: Review by Afghanistan (Bowling), Umpire - PR Reiffel, Batter - RR Pant
                                                                        (Struck down)</li>
                                                                    <li>Over 15.4: Review by India (Batting), Umpire - PR Reiffel, Batter - RR Pant (Upheld)
                                                                    </li>
                                                                    <li>India: 150 runs in 16.5 overs (102 balls), Extras 1</li>
                                                                    <li>3rd Wicket: 50 runs in 16 balls (RR Pant 18, HH Pandya 31, Ex 2)</li>
                                                                    <li>India: 200 runs in 19.2 overs (117 balls), Extras 3</li>
                                                                    <li>Innings Break: India - 210/2 in 20.0 overs (RR Pant 27, HH Pandya 35)</li>
                                                                </ul>
                                                            </div>
                                                            <div>
                                                                <ul>
                                                                    <li><strong>Afghanistan innings</strong></li>
                                                                    <li>Powerplay: Overs 0.1 - 6.0 (Mandatory - 47 runs, 2 wickets)</li>
                                                                    <li>Afghanistan: 50 runs in 7.2 overs (44 balls), Extras 0</li>
                                                                    <li>Drinks: Afghanistan - 59/4 in 9.3 overs (Najibullah Zadran 9)</li>
                                                                    <li>Afghanistan: 100 runs in 16.1 overs (97 balls), Extras 1</li>
                                                                    <li>6th Wicket: 50 runs in 34 balls (Mohammad Nabi 25, Karim Janat 24, Ex 2)</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="ciTaboola" id="taboola-below-section-front-thumbnails"></div>
                                            </div>
                                        </div>
                                        <div class="col-16 col-md-16 col-lg-4 main-rhs">
                                            <div class="widget-container d-flex" style="padding-top:0">
                                                <div>
                                                    <div>
                                                        <div class="card content-block w-100 sidebar-widget">
                                                            <div class="sidebar-widget-coverage">
                                                                <div class="sidebar-head">
                                                                    <div class="head-title"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M18.0343 9.44734H16.312C16.1873 8.90239 15.8813 8.4159 15.4441 8.06747C15.0069 7.71904 14.4645 7.5293 13.9054 7.5293C13.3464 7.5293 12.8039 7.71904 12.3667 8.06747C11.9296 8.4159 11.6236 8.90239 11.4989 9.44734H2.55291C2.40627 9.44734 2.26563 9.50559 2.16194 9.60928C2.05825 9.71297 2 9.8536 2 10.0002C2 10.1469 2.05825 10.2875 2.16194 10.3912C2.26563 10.4949 2.40627 10.5531 2.55291 10.5531H11.4989C11.6236 11.0981 11.9296 11.5846 12.3667 11.933C12.8039 12.2815 13.3464 12.4712 13.9054 12.4712C14.4645 12.4712 15.0069 12.2815 15.4441 11.933C15.8813 11.5846 16.1873 11.0981 16.312 10.5531H18.0343C18.1809 10.5531 18.3215 10.4949 18.4252 10.3912C18.5289 10.2875 18.5872 10.1469 18.5872 10.0002C18.5872 9.8536 18.5289 9.71297 18.4252 9.60928C18.3215 9.50559 18.1809 9.44734 18.0343 9.44734ZM13.904 11.3659C13.6339 11.3659 13.3699 11.2858 13.1453 11.1358C12.9207 10.9857 12.7457 10.7724 12.6423 10.5229C12.539 10.2733 12.5119 9.99873 12.5646 9.73381C12.6173 9.4689 12.7474 9.22556 12.9384 9.03456C13.1294 8.84357 13.3727 8.7135 13.6376 8.66081C13.9025 8.60811 14.1771 8.63516 14.4267 8.73852C14.6762 8.84189 14.8895 9.01693 15.0396 9.24151C15.1896 9.4661 15.2697 9.73014 15.2697 10.0002C15.2697 10.3624 15.1258 10.7098 14.8697 10.9659C14.6136 11.222 14.2662 11.3659 13.904 11.3659Z"
                                                                            fill="#DD0000"></path>
                                                                        <path
                                                                            d="M2.55291 5.02385H4.05128C4.17598 5.5688 4.48194 6.05529 4.91911 6.40372C5.35628 6.75215 5.89876 6.94189 6.4578 6.94189C7.01683 6.94189 7.55932 6.75215 7.99648 6.40372C8.43365 6.05529 8.73962 5.5688 8.86432 5.02385H18.0343C18.1809 5.02385 18.3215 4.9656 18.4252 4.86191C18.5289 4.75822 18.5872 4.61759 18.5872 4.47095C18.5872 4.32431 18.5289 4.18367 18.4252 4.07998C18.3215 3.97629 18.1809 3.91804 18.0343 3.91804H8.86432C8.73962 3.37309 8.43365 2.8866 7.99648 2.53817C7.55932 2.18974 7.01683 2 6.4578 2C5.89876 2 5.35628 2.18974 4.91911 2.53817C4.48194 2.8866 4.17598 3.37309 4.05128 3.91804H2.55291C2.40627 3.91804 2.26563 3.97629 2.16194 4.07998C2.05825 4.18367 2 4.32431 2 4.47095C2 4.61759 2.05825 4.75822 2.16194 4.86191C2.26563 4.9656 2.40627 5.02385 2.55291 5.02385ZM6.45918 3.10527C6.8209 3.106 7.16756 3.25021 7.42307 3.50624C7.67859 3.76228 7.82209 4.10923 7.82209 4.47095C7.80628 4.82216 7.65563 5.15374 7.40151 5.39668C7.14739 5.63961 6.80936 5.77519 6.4578 5.77519C6.10623 5.77519 5.76821 5.63961 5.51409 5.39668C5.25996 5.15374 5.10932 4.82216 5.0935 4.47095C5.0935 4.10875 5.23739 3.76138 5.4935 3.50527C5.74962 3.24915 6.09698 3.10527 6.45918 3.10527Z"
                                                                            fill="#DD0000"></path>
                                                                        <path
                                                                            d="M18.0343 14.9761H11.3192C11.1945 14.4312 10.8886 13.9447 10.4514 13.5963C10.0142 13.2478 9.47173 13.0581 8.9127 13.0581C8.35366 13.0581 7.81118 13.2478 7.37401 13.5963C6.93684 13.9447 6.63088 14.4312 6.50618 14.9761H2.55291C2.40627 14.9761 2.26563 15.0344 2.16194 15.1381C2.05825 15.2418 2 15.3824 2 15.5291C2 15.6757 2.05825 15.8163 2.16194 15.92C2.26563 16.0237 2.40627 16.082 2.55291 16.082H6.50618C6.63088 16.6269 6.93684 17.1134 7.37401 17.4618C7.81118 17.8103 8.35366 18 8.9127 18C9.47173 18 10.0142 17.8103 10.4514 17.4618C10.8886 17.1134 11.1945 16.6269 11.3192 16.082H18.0343C18.1809 16.082 18.3215 16.0237 18.4252 15.92C18.5289 15.8163 18.5872 15.6757 18.5872 15.5291C18.5872 15.3824 18.5289 15.2418 18.4252 15.1381C18.3215 15.0344 18.1809 14.9761 18.0343 14.9761ZM8.91131 16.8947C8.64121 16.8947 8.37717 16.8146 8.15259 16.6646C7.928 16.5145 7.75296 16.3012 7.6496 16.0517C7.54623 15.8021 7.51919 15.5275 7.57188 15.2626C7.62458 14.9977 7.75464 14.7544 7.94564 14.5634C8.13663 14.3724 8.37997 14.2423 8.64488 14.1896C8.9098 14.1369 9.18439 14.164 9.43394 14.2673C9.68348 14.3707 9.89677 14.5457 10.0468 14.7703C10.1969 14.9949 10.277 15.2589 10.277 15.5291C10.277 15.8913 10.1331 16.2386 9.87699 16.4947C9.62088 16.7508 9.27351 16.8947 8.91131 16.8947Z"
                                                                            fill="#DD0000"></path>
                                                                    </svg><span class="pad-left">Customize Your Page</span></div>
                                                                </div>
                                                                <div class="sidebar-widget-customizations">
                                                                    <div class="option">
                                                                        <div class="option-title">Theme
                                                                            <!-- -->
                                                                        </div>
                                                                        <div class="option-switch row"><span class="switch col">Light</span><span
                                                                            class="switch col">Dark</span></div>
                                                                    </div>
                                                                    <div class="option"><span class="option-title"><svg width="24" height="24"
                                                                        viewBox="0 0 24 24" fill="none" class="" xmlns="http://www.w3.org/2000/svg">
                                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                                            d="M15.6004 5H0V6.78593H8.04745V12.7677C7.64579 13.1837 7.2011 13.5423 6.71338 13.8436C6.22566 14.1305 5.66621 14.2739 5.03503 14.2739C4.51862 14.2739 4.05241 14.1161 3.63641 13.8006C3.22041 13.4706 3.01241 12.9542 3.01241 12.2513C3.01241 11.6345 3.22759 11.1539 3.65793 10.8097C4.08828 10.4654 4.69793 10.2932 5.4869 10.2932C5.75945 10.2932 6.06069 10.3148 6.39062 10.3578C6.72055 10.4008 6.9931 10.451 7.20828 10.5084L7.38041 8.70097C7.1509 8.64359 6.83531 8.59338 6.43366 8.55035C6.032 8.50731 5.65186 8.48579 5.29324 8.48579C4.00221 8.48579 2.94786 8.83007 2.13021 9.51862C1.3269 10.1928 0.925241 11.1109 0.925241 12.2728C0.925241 13.1048 1.11172 13.8006 1.48469 14.36C1.85766 14.9194 2.34538 15.3426 2.94786 15.6295C3.56469 15.9021 4.22455 16.0383 4.92745 16.0383C5.616 16.0383 6.21131 15.9308 6.71338 15.7156C7.21545 15.4861 7.66014 15.2279 8.04745 14.941V18.7975H10.1346V12.8753C10.4932 12.445 10.8519 12.115 11.2105 11.8855C11.5834 11.656 11.9492 11.5412 12.3079 11.5412C12.571 11.5412 12.8012 11.5907 12.9983 11.6898L13.6824 9.93099C13.3533 9.82822 12.9956 9.77683 12.6091 9.77683C11.648 9.77683 10.8232 10.0852 10.1346 10.7021V6.78593H14.9057L15.6004 5ZM15.3669 14.7104H20.1593L21.7254 18.7414H24L18.7197 5.14234H16.8758L11.5862 18.7414H13.8173L14.2753 17.5492L14.2763 17.5498L15.3669 14.7104ZM17.1062 5.14232V5.14234H16.877L16.877 5.14232H17.1062ZM17.7949 8.05601C17.6879 8.43551 17.5778 8.79507 17.4646 9.13461L17.4615 9.14396L16.1198 12.7239H19.4683L18.1383 9.13154L17.7949 8.05601Z"
                                                                            fill="black"></path>
                                                                    </svg>Language
                                                                        <!-- -->
                                                                    </span>
                                                                        <div class="option-switch row"><span class="switch col active">English</span><span
                                                                            class="switch col">Hindi</span></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div class="ad-placeholder incontentstrip ad-incontentstrip-688541"
                                                            style="min-width:10%;min-height:50px"></div>
                                                    </div>
                                                    <div>
                                                        <div class="ad-placeholder incontent ad-incontent-77005" style="min-width:10%;min-height:250px">
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div></div>
                                                    </div>
                                                    <div>
                                                        <div class="card content-block w-100 sidebar-widget">
                                                            <div class="sidebar-widget-coverage">
                                                                <div class="sidebar-head">
                                                                    <div class="head-title">Match Coverage</div><a data-hover="" class="head-link"
                                                                        target="_self" rel=""
                                                                        href="/series/icc-men-s-t20-world-cup-2021-22-1267897/afghanistan-vs-india-33rd-match-group-2-1273744/match-news"><span
                                                                            class="head-link-text">All Match News</span><i
                                                                                class="espn-icon icon-caret-sm-right-after head-link-icon"></i></a>
                                                                </div>
                                                                <div>
                                                                    <div class="sidebar-widget-coverage-item"><a data-hover="" target="_self" rel=""
                                                                        href="/story/t20-world-cup-r-ashwin-it-is-easy-to-lose-hope-and-motivation-but-that-is-something-i-will-not-do-1287501">
                                                                        <div class="content">
                                                                            <div class="title">आशा और प्रेरणा खोना आसान है, लेकिन मैं ऐसा नहीं करूंगा&#x27; :
                                                                                अश्विन</div>
                                                                            <div class="description">
                                                                                <div>2017 के बाद से यह एक टी20 गेंदबाज़ के रूप में उभरे ऑफ़ स्पिनर ने कहा, फिंगर
                                                                                    स्पिन की धारणा को बदलने की ज़रूरत
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="image-container"><img
                                                                            src="https://wassets.hscicdn.com/static/images/lazyimage.svg"
                                                                            alt="आशा और प्रेरणा खोना आसान है, लेकिन मैं ऐसा नहीं करूंगा&#x27; : अश्विन"
                                                                            class="img img-lazy" /></div>
                                                                    </a></div>
                                                                    <div class="sidebar-widget-coverage-item"><a data-hover="" target="_self" rel=""
                                                                        href="/story/t20-world-cup-ind-vs-afg-early-flurry-of-wickets-put-afghanistan-under-pressure-rashid-khan-1287343">
                                                                        <div class="content">
                                                                            <div class="title">Early flurry of wickets put Afghanistan under pressure - Rashid
                                                                                Khan</div>
                                                                            <div class="description">
                                                                                <div>Need to protect net run-rate became key ahead of clash with New Zealand</div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="image-container"><img
                                                                            src="https://wassets.hscicdn.com/static/images/lazyimage.svg"
                                                                            alt="Early flurry of wickets put Afghanistan under pressure - Rashid Khan"
                                                                            class="img img-lazy" /></div>
                                                                    </a></div>
                                                                    <div class="sidebar-widget-coverage-item"><a data-hover="" target="_self" rel=""
                                                                        href="/story/t20-world-cup-ind-vs-afg-rohit-sharma-and-kl-rahul-the-club-clark-kents-turn-supermen-for-their-country-1287337">
                                                                        <div class="content">
                                                                            <div class="title">Rohit Sharma and KL Rahul, the club Clark Kents turn Supermen for
                                                                                their country</div>
                                                                            <div class="description">
                                                                                <div>IPL anchors become power players, trading cagey dabs and dinks for unfettered
                                                                                    swishes and hoicks</div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="image-container"><img
                                                                            src="https://wassets.hscicdn.com/static/images/lazyimage.svg"
                                                                            alt="Rohit Sharma and KL Rahul, the club Clark Kents turn Supermen for their country"
                                                                            class="img img-lazy" /></div>
                                                                    </a></div>
                                                                    <div class="sidebar-widget-coverage-item"><a data-hover="" target="_self" rel=""
                                                                        href="/story/stats-rohit-sharma-kl-rahul-reassurance-at-top-and-rishabh-pant-hardik-pandya-record-finish-1287326">
                                                                        <div class="content">
                                                                            <div class="title">Stats - Rohit Sharma-KL Rahul&#x27;s reassurance at top and
                                                                                Rishabh Pant-Hardik Pandya&#x27;s record finish</div>
                                                                            <div class="description">
                                                                                <div>All the stats and records from India's first win at the men's T20 World Cup
                                                                                    2021.</div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="image-container"><img
                                                                            src="https://wassets.hscicdn.com/static/images/lazyimage.svg"
                                                                            alt="Stats - Rohit Sharma-KL Rahul&#x27;s reassurance at top and Rishabh Pant-Hardik Pandya&#x27;s record finish"
                                                                            class="img img-lazy" /></div>
                                                                    </a></div>
                                                                    <div class="sidebar-widget-coverage-item"><a data-hover="" target="_self" rel=""
                                                                        href="/series/icc-men-s-t20-world-cup-2021-22-1267897/afghanistan-vs-india-33rd-match-group-2-1273744/match-report">
                                                                        <div class="content">
                                                                            <div class="title">Batters fire India to massive victory, and NRR boost, in must-win
                                                                                game</div>
                                                                            <div class="description">
                                                                                <div>Rohit and Rahul's 140-run opening stand sets tone as India's NRR goes into
                                                                                    the positive</div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="image-container"><img
                                                                            src="https://wassets.hscicdn.com/static/images/lazyimage.svg"
                                                                            alt="Batters fire India to massive victory, and NRR boost, in must-win game"
                                                                            class="img img-lazy" /></div>
                                                                    </a></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="ad-placeholder incontent3Bottom2 ad-incontent3bottom2-216603"
                                                            style="min-width:10%;min-height:250px"></div>
                                                        <div
                                                            class="card content-block card content-block w-100 nlp-sidebar-widget nlp-sidebar-widget-DETAIL">
                                                            <div class="logo-wrapper"><a href="https://www.espncricinfo.com/ask" data-hover=""
                                                                target="_parent" rel=""><img src="https://wassets.hscicdn.com/static/images/lazyimage.svg"
                                                                    alt="AskESPNcricinfo Logo" class="img img-lazy" /></a></div>
                                                            <div class="divider"></div>
                                                            <div class="content">
                                                                <div class="title">Instant answers to T20 questions</div>
                                                                <div class="questions"></div>
                                                                <div class="questions-cta"><a href="https://www.espncricinfo.com/ask" data-hover=""
                                                                    target="_parent" rel=""><span>Ask a question</span></a></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div class="ad-placeholder promoboxTop ad-promoboxtop-30439"
                                                            style="min-width:10%;min-height:100px"></div>
                                                    </div>
                                                    <div>
                                                        <div class="ad-placeholder incontent2 ad-incontent2-208370"
                                                            style="min-width:10%;min-height:250px"></div>
                                                    </div>
                                                    <div>
                                                        <div></div>
                                                    </div>
                                                    <div>
                                                        <div class="card content-block w-100 sidebar-widget">
                                                            <div>
                                                                <div class="sidebar-head">
                                                                    <div class="head-title">Videos</div><a data-hover="" class="head-link" target="_self"
                                                                        rel=""
                                                                        href="/series/icc-men-s-t20-world-cup-2021-22-1267897/afghanistan-vs-india-33rd-match-group-2-1273744/match-videos"><span
                                                                            class="head-link-text">All Match Videos</span><i
                                                                                class="espn-icon icon-caret-sm-right-after head-link-icon"></i></a>
                                                                </div>
                                                                <div class="sidebar-widget-videos">
                                                                    <div class="sidebar-widget-video">
                                                                        <div class="inline-video-player">
                                                                            <div class="video-img video-img-unplayed video-replacer">
                                                                                <div class="video-img-icon"><i
                                                                                    class="espn-icon icon-play-arrow-solid-after icon-xs video-img-play-icon"></i><span
                                                                                        class="video-img-duration">3:07</span></div><img
                                                                                    src="https://wassets.hscicdn.com/static/images/lazyimage.svg"
                                                                                    alt="Dell Stunning Moments of the Day - Pant&#x27;s trademark sixes, Jadeja&#x27;s outrageous effort"
                                                                                    class="img img-lazy" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="cursor-pointer">
                                                                        <div class="sidebar-widget-videos-item no-image">
                                                                            <div><i
                                                                                class="espn-icon icon-play-outline-after icon-sm text-secondary play-icon"></i>
                                                                            </div>
                                                                            <div>
                                                                                <div class="title">Dell Stunning Moments of the Day - Pant&#x27;s trademark sixes,
                                                                                    Jadeja&#x27;s outrageous effort</div>
                                                                                <div class="description">3:07</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="cursor-pointer">
                                                                        <div class="sidebar-widget-videos-item no-image">
                                                                            <div><i
                                                                                class="espn-icon icon-play-outline-after icon-sm text-secondary play-icon"></i>
                                                                            </div>
                                                                            <div>
                                                                                <div class="title">Dream Big Champion of the Day - Rohit Sharma</div>
                                                                                <div class="description">2:41</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="cursor-pointer">
                                                                        <div class="sidebar-widget-videos-item no-image">
                                                                            <div><i
                                                                                class="espn-icon icon-play-outline-after icon-sm text-secondary play-icon"></i>
                                                                            </div>
                                                                            <div>
                                                                                <div class="title">Bira 91 Six-pack powerplay of the day: India openers find form
                                                                                </div>
                                                                                <div class="description">2:29</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div class="card content-block w-100 sidebar-widget">
                                                            <div class="innings-stat">
                                                                <div class="section-header border-bottom widget-title">
                                                                    <div class="row no-gutters align-items-center">
                                                                        <div class="col">
                                                                            <h5 class="header-title label ">Afghanistan Innings</h5>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="slick-slider slick-initialized" dir="ltr">
                                                                    <div class="slick-list">
                                                                        <div class="slick-track" style="width:300%;left:0%">
                                                                            <div data-index="0" class="slick-slide slick-active slick-current" tabindex="-1"
                                                                                aria-hidden="false" style="outline:none;width:33.333333333333336%">
                                                                                <div>
                                                                                    <div class="stats-container" tabindex="-1"
                                                                                        style="width:100%;display:inline-block">
                                                                                        <div class="table-responsive">
                                                                                            <table class="table">
                                                                                                <thead>
                                                                                                    <tr>
                                                                                                        <td colSpan="2">Player Name</td>
                                                                                                        <td>R</td>
                                                                                                        <td>B</td>
                                                                                                    </tr>
                                                                                                </thead>
                                                                                                <tbody>
                                                                                                    <tr>
                                                                                                        <td><a data-hover="Hazratullah Zazai"
                                                                                                            class="h6 font-weight-bold text-primary mb-0" target="_self" rel=""
                                                                                                            href="/player/hazratullah-zazai-793457">Hazratullah Zazai</a></td>
                                                                                                        <td class="tiny"><span>caught</span></td>
                                                                                                        <td class="extra-small">13</td>
                                                                                                        <td class="extra-small">15</td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td><a data-hover="Mohammad Shahzad"
                                                                                                            class="h6 font-weight-bold text-primary mb-0" target="_self" rel=""
                                                                                                            href="/player/mohammad-shahzad-419873">Mohammad Shahzad</a></td>
                                                                                                        <td class="tiny"><span>caught</span></td>
                                                                                                        <td class="extra-small">0</td>
                                                                                                        <td class="extra-small">4</td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td><a data-hover="Rahmanullah Gurbaz"
                                                                                                            class="h6 font-weight-bold text-primary mb-0" target="_self" rel=""
                                                                                                            href="/player/rahmanullah-gurbaz-974087">Rahmanullah Gurbaz</a></td>
                                                                                                        <td class="tiny"><span>caught</span></td>
                                                                                                        <td class="extra-small">19</td>
                                                                                                        <td class="extra-small">10</td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td><a data-hover="Gulbadin Naib"
                                                                                                            class="h6 font-weight-bold text-primary mb-0" target="_self" rel=""
                                                                                                            href="/player/gulbadin-naib-352048">Gulbadin Naib</a></td>
                                                                                                        <td class="tiny"><span>lbw</span></td>
                                                                                                        <td class="extra-small">18</td>
                                                                                                        <td class="extra-small">20</td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td><a data-hover="Najibullah Zadran"
                                                                                                            class="h6 font-weight-bold text-primary mb-0" target="_self" rel=""
                                                                                                            href="/player/najibullah-zadran-524049">Najibullah Zadran</a></td>
                                                                                                        <td class="tiny"><span>bowled</span></td>
                                                                                                        <td class="extra-small">11</td>
                                                                                                        <td class="extra-small">13</td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td><a data-hover="Mohammad Nabi"
                                                                                                            class="h6 font-weight-bold text-primary mb-0" target="_self" rel=""
                                                                                                            href="/player/mohammad-nabi-25913">Mohammad Nabi</a></td>
                                                                                                        <td class="tiny"><span>caught</span></td>
                                                                                                        <td class="extra-small">35</td>
                                                                                                        <td class="extra-small">32</td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td><a data-hover="Karim Janat"
                                                                                                            class="h6 font-weight-bold text-primary mb-0" target="_self" rel=""
                                                                                                            href="/player/karim-janat-793467">Karim Janat</a></td>
                                                                                                        <td class="tiny"><span>not out</span></td>
                                                                                                        <td class="extra-small">42</td>
                                                                                                        <td class="extra-small">22</td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td><a data-hover="Rashid Khan"
                                                                                                            class="h6 font-weight-bold text-primary mb-0" target="_self" rel=""
                                                                                                            href="/player/rashid-khan-793463">Rashid Khan</a></td>
                                                                                                        <td class="tiny"><span>caught</span></td>
                                                                                                        <td class="extra-small">0</td>
                                                                                                        <td class="extra-small">1</td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td><a data-hover="Sharafuddin Ashraf"
                                                                                                            class="h6 font-weight-bold text-primary mb-0" target="_self" rel=""
                                                                                                            href="/player/sharafuddin-ashraf-633362">Sharafuddin Ashraf</a></td>
                                                                                                        <td class="tiny"><span>not out</span></td>
                                                                                                        <td class="extra-small">2</td>
                                                                                                        <td class="extra-small">3</td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td class="extra-small font-weight-bold" colSpan="1">Extras</td>
                                                                                                        <td class="extra-small" colSpan="3">(
                                                                                                            <!-- -->w 4
                                                                                                            <!-- -->)
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td class="text-uppercase extra-small font-weight-bold" colSpan="1">
                                                                                                            Total</td>
                                                                                                        <td class="extra-small" font-weight-bold="true" colSpan="3"><span
                                                                                                            class="small mr-2">144</span><span>(7 wkts; 20 ovs)</span></td>
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div data-index="1" class="slick-slide" tabindex="-1" aria-hidden="true"
                                                                                style="outline:none;width:33.333333333333336%">
                                                                                <div>
                                                                                    <div class="stats-container" tabindex="-1"
                                                                                        style="width:100%;display:inline-block">
                                                                                        <div class="table-responsive">
                                                                                            <table>
                                                                                                <thead>
                                                                                                    <tr>
                                                                                                        <td>Player Name</td>
                                                                                                        <td>O</td>
                                                                                                        <td class="">M</td>
                                                                                                        <td>R</td>
                                                                                                        <td>W</td>
                                                                                                        <td>Econ</td>
                                                                                                    </tr>
                                                                                                </thead>
                                                                                                <tbody>
                                                                                                    <tr>
                                                                                                        <td><a data-hover="Mohammed Shami"
                                                                                                            class="h6 font-weight-bold text-primary mb-0" target="_self" rel=""
                                                                                                            href="/player/mohammed-shami-481896">Mohammed Shami</a></td>
                                                                                                        <td class="extra-small">4</td>
                                                                                                        <td class="extra-small">0</td>
                                                                                                        <td class="extra-small">32</td>
                                                                                                        <td class="extra-small">3</td>
                                                                                                        <td class="extra-small">8 </td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td><a data-hover="JJ Bumrah"
                                                                                                            class="h6 font-weight-bold text-primary mb-0" target="_self" rel=""
                                                                                                            href="/player/jasprit-bumrah-625383">JJ Bumrah</a></td>
                                                                                                        <td class="extra-small">4</td>
                                                                                                        <td class="extra-small">0</td>
                                                                                                        <td class="extra-small">25</td>
                                                                                                        <td class="extra-small">1</td>
                                                                                                        <td class="extra-small">6.25 </td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td><a data-hover="HH Pandya"
                                                                                                            class="h6 font-weight-bold text-primary mb-0" target="_self" rel=""
                                                                                                            href="/player/hardik-pandya-625371">HH Pandya</a></td>
                                                                                                        <td class="extra-small">2</td>
                                                                                                        <td class="extra-small">0</td>
                                                                                                        <td class="extra-small">23</td>
                                                                                                        <td class="extra-small">0</td>
                                                                                                        <td class="extra-small">11.5 </td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td><a data-hover="RA Jadeja"
                                                                                                            class="h6 font-weight-bold text-primary mb-0" target="_self" rel=""
                                                                                                            href="/player/ravindra-jadeja-234675">RA Jadeja</a></td>
                                                                                                        <td class="extra-small">3</td>
                                                                                                        <td class="extra-small">0</td>
                                                                                                        <td class="extra-small">19</td>
                                                                                                        <td class="extra-small">1</td>
                                                                                                        <td class="extra-small">6.33 </td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td><a data-hover="R Ashwin"
                                                                                                            class="h6 font-weight-bold text-primary mb-0" target="_self" rel=""
                                                                                                            href="/player/ravichandran-ashwin-26421">R Ashwin</a></td>
                                                                                                        <td class="extra-small">4</td>
                                                                                                        <td class="extra-small">0</td>
                                                                                                        <td class="extra-small">14</td>
                                                                                                        <td class="extra-small">2</td>
                                                                                                        <td class="extra-small">3.5 </td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td><a data-hover="SN Thakur"
                                                                                                            class="h6 font-weight-bold text-primary mb-0" target="_self" rel=""
                                                                                                            href="/player/shardul-thakur-475281">SN Thakur</a></td>
                                                                                                        <td class="extra-small">3</td>
                                                                                                        <td class="extra-small">0</td>
                                                                                                        <td class="extra-small">31</td>
                                                                                                        <td class="extra-small">0</td>
                                                                                                        <td class="extra-small">10.33 </td>
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div data-index="2" class="slick-slide" tabindex="-1" aria-hidden="true"
                                                                                style="outline:none;width:33.333333333333336%">
                                                                                <div>
                                                                                    <div class="stats-container" tabindex="-1"
                                                                                        style="width:100%;display:inline-block">
                                                                                        <div class="table-responsive">
                                                                                            <table>
                                                                                                <thead>
                                                                                                    <tr>
                                                                                                        <td>WKT</td>
                                                                                                        <td>RUNS</td>
                                                                                                        <td colSpan="2">Players</td>
                                                                                                    </tr>
                                                                                                </thead>
                                                                                                <tbody>
                                                                                                    <tr>
                                                                                                        <td class="extra-small">1st</td>
                                                                                                        <td class="extra-small">13</td>
                                                                                                        <td class="h6">Mohammad Shahzad</td>
                                                                                                        <td class="h6">Hazratullah Zazai</td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td class="extra-small">2nd</td>
                                                                                                        <td class="extra-small">0</td>
                                                                                                        <td class="h6">Hazratullah Zazai</td>
                                                                                                        <td class="h6">Rahmanullah Gurbaz</td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td class="extra-small">3rd</td>
                                                                                                        <td class="extra-small">35</td>
                                                                                                        <td class="h6">Gulbadin Naib</td>
                                                                                                        <td class="h6">Rahmanullah Gurbaz</td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td class="extra-small">4th</td>
                                                                                                        <td class="extra-small">11</td>
                                                                                                        <td class="h6">Gulbadin Naib</td>
                                                                                                        <td class="h6">Najibullah Zadran</td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td class="extra-small">5th</td>
                                                                                                        <td class="extra-small">10</td>
                                                                                                        <td class="h6">Mohammad Nabi</td>
                                                                                                        <td class="h6">Najibullah Zadran</td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td class="extra-small">6th</td>
                                                                                                        <td class="extra-small">57</td>
                                                                                                        <td class="h6">Mohammad Nabi</td>
                                                                                                        <td class="h6">Karim Janat</td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td class="extra-small">7th</td>
                                                                                                        <td class="extra-small">1</td>
                                                                                                        <td class="h6">Rashid Khan</td>
                                                                                                        <td class="h6">Karim Janat</td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                        <td class="extra-small">8th</td>
                                                                                                        <td class="extra-small">17</td>
                                                                                                        <td class="h6">Sharafuddin Ashraf</td>
                                                                                                        <td class="h6">Karim Janat</td>
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="footer"><span class="prev control disabled">&lt;</span><span class="indicator">1
                                                                    <!-- --> /
                                                                    <!-- -->3
                                                                </span><span class="next control ">&gt;</span></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="w-100">
                                                        <div class="card content-block w-100 sidebar-widget">
                                                            <div class="section-header border-bottom widget-title">
                                                                <div class="row no-gutters align-items-center">
                                                                    <div class="col">
                                                                        <h5 class="header-title label">ICC Men&#x27;s T20 World Cup</h5>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div>
                                                                    <div class="sidebar-table-name">Group 1</div>
                                                                    <div class="table-responsive">
                                                                        <table class="table table-sm sidebar-widget-table text-center mb-0">
                                                                            <thead class="thead-light">
                                                                                <tr>
                                                                                    <th scope="col" class="text-left pl-3">TEAM</th>
                                                                                    <th scope="col" title="The number of matches played." class="text-right pr-3">M
                                                                                    </th>
                                                                                    <th scope="col" title="The number of matches won." class="text-right pr-3">W</th>
                                                                                    <th scope="col" title="The number of matches lost." class="text-right pr-3">L</th>
                                                                                    <th scope="col" title="Number of points awarded." class="text-right pr-3">PT</th>
                                                                                    <th scope="col" title="Net Run Rate" class="text-right pr-3">NRR</th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td class="text-left blue-text pl-3"><a data-hover="ENG"
                                                                                        class="label blue-text blue-on-hover" target="_self" rel="" title="England"
                                                                                        href="/team/england-1">ENG</a></td>
                                                                                    <td scope="col" class="text-right pr-3">4</td>
                                                                                    <td scope="col" class="text-right pr-3">4</td>
                                                                                    <td scope="col" class="text-right pr-3">0</td>
                                                                                    <td scope="col" class="text-right pr-3 label">8</td>
                                                                                    <td scope="col" class="text-right pr-3">3.183</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="text-left blue-text pl-3"><a data-hover="AUS"
                                                                                        class="label blue-text blue-on-hover" target="_self" rel="" title="Australia"
                                                                                        href="/team/australia-2">AUS</a></td>
                                                                                    <td scope="col" class="text-right pr-3">4</td>
                                                                                    <td scope="col" class="text-right pr-3">3</td>
                                                                                    <td scope="col" class="text-right pr-3">1</td>
                                                                                    <td scope="col" class="text-right pr-3 label">6</td>
                                                                                    <td scope="col" class="text-right pr-3">1.031</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="text-left blue-text pl-3"><a data-hover="SA"
                                                                                        class="label blue-text blue-on-hover" target="_self" rel=""
                                                                                        title="South Africa" href="/team/south-africa-3">SA</a></td>
                                                                                    <td scope="col" class="text-right pr-3">4</td>
                                                                                    <td scope="col" class="text-right pr-3">3</td>
                                                                                    <td scope="col" class="text-right pr-3">1</td>
                                                                                    <td scope="col" class="text-right pr-3 label">6</td>
                                                                                    <td scope="col" class="text-right pr-3">0.742</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="text-left blue-text pl-3"><a data-hover="SL"
                                                                                        class="label blue-text blue-on-hover" target="_self" rel="" title="Sri Lanka"
                                                                                        href="/team/sri-lanka-8">SL</a></td>
                                                                                    <td scope="col" class="text-right pr-3">5</td>
                                                                                    <td scope="col" class="text-right pr-3">2</td>
                                                                                    <td scope="col" class="text-right pr-3">3</td>
                                                                                    <td scope="col" class="text-right pr-3 label">4</td>
                                                                                    <td scope="col" class="text-right pr-3">-0.269</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="text-left blue-text pl-3"><a data-hover="WI"
                                                                                        class="label blue-text blue-on-hover" target="_self" rel=""
                                                                                        title="West Indies" href="/team/west-indies-4">WI</a></td>
                                                                                    <td scope="col" class="text-right pr-3">4</td>
                                                                                    <td scope="col" class="text-right pr-3">1</td>
                                                                                    <td scope="col" class="text-right pr-3">3</td>
                                                                                    <td scope="col" class="text-right pr-3 label">2</td>
                                                                                    <td scope="col" class="text-right pr-3">-1.558</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="text-left blue-text pl-3"><a data-hover="BAN"
                                                                                        class="label blue-text blue-on-hover" target="_self" rel="" title="Bangladesh"
                                                                                        href="/team/bangladesh-25">BAN</a></td>
                                                                                    <td scope="col" class="text-right pr-3">5</td>
                                                                                    <td scope="col" class="text-right pr-3">0</td>
                                                                                    <td scope="col" class="text-right pr-3">5</td>
                                                                                    <td scope="col" class="text-right pr-3 label">0</td>
                                                                                    <td scope="col" class="text-right pr-3">-2.383</td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <div class="sidebar-table-name">Group 2</div>
                                                                    <div class="table-responsive">
                                                                        <table class="table table-sm sidebar-widget-table text-center mb-0">
                                                                            <thead class="thead-light">
                                                                                <tr>
                                                                                    <th scope="col" class="text-left pl-3">TEAM</th>
                                                                                    <th scope="col" title="The number of matches played." class="text-right pr-3">M
                                                                                    </th>
                                                                                    <th scope="col" title="The number of matches won." class="text-right pr-3">W</th>
                                                                                    <th scope="col" title="The number of matches lost." class="text-right pr-3">L</th>
                                                                                    <th scope="col" title="Number of points awarded." class="text-right pr-3">PT</th>
                                                                                    <th scope="col" title="Net Run Rate" class="text-right pr-3">NRR</th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td class="text-left blue-text pl-3"><a data-hover="PAK"
                                                                                        class="label blue-text blue-on-hover" target="_self" rel="" title="Pakistan"
                                                                                        href="/team/pakistan-7">PAK</a></td>
                                                                                    <td scope="col" class="text-right pr-3">4</td>
                                                                                    <td scope="col" class="text-right pr-3">4</td>
                                                                                    <td scope="col" class="text-right pr-3">0</td>
                                                                                    <td scope="col" class="text-right pr-3 label">8</td>
                                                                                    <td scope="col" class="text-right pr-3">1.065</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="text-left blue-text pl-3"><a data-hover="AFG"
                                                                                        class="label blue-text blue-on-hover" target="_self" rel=""
                                                                                        title="Afghanistan" href="/team/afghanistan-40">AFG</a></td>
                                                                                    <td scope="col" class="text-right pr-3">4</td>
                                                                                    <td scope="col" class="text-right pr-3">2</td>
                                                                                    <td scope="col" class="text-right pr-3">2</td>
                                                                                    <td scope="col" class="text-right pr-3 label">4</td>
                                                                                    <td scope="col" class="text-right pr-3">1.481</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="text-left blue-text pl-3"><a data-hover="NZ"
                                                                                        class="label blue-text blue-on-hover" target="_self" rel=""
                                                                                        title="New Zealand" href="/team/new-zealand-5">NZ</a></td>
                                                                                    <td scope="col" class="text-right pr-3">3</td>
                                                                                    <td scope="col" class="text-right pr-3">2</td>
                                                                                    <td scope="col" class="text-right pr-3">1</td>
                                                                                    <td scope="col" class="text-right pr-3 label">4</td>
                                                                                    <td scope="col" class="text-right pr-3">0.816</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="text-left blue-text pl-3"><a data-hover="INDIA"
                                                                                        class="label blue-text blue-on-hover" target="_self" rel="" title="India"
                                                                                        href="/team/india-6">INDIA</a></td>
                                                                                    <td scope="col" class="text-right pr-3">3</td>
                                                                                    <td scope="col" class="text-right pr-3">1</td>
                                                                                    <td scope="col" class="text-right pr-3">2</td>
                                                                                    <td scope="col" class="text-right pr-3 label">2</td>
                                                                                    <td scope="col" class="text-right pr-3">0.073</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="text-left blue-text pl-3"><a data-hover="NAM"
                                                                                        class="label blue-text blue-on-hover" target="_self" rel="" title="Namibia"
                                                                                        href="/team/namibia-28">NAM</a></td>
                                                                                    <td scope="col" class="text-right pr-3">3</td>
                                                                                    <td scope="col" class="text-right pr-3">1</td>
                                                                                    <td scope="col" class="text-right pr-3">2</td>
                                                                                    <td scope="col" class="text-right pr-3 label">2</td>
                                                                                    <td scope="col" class="text-right pr-3">-1.600</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="text-left blue-text pl-3"><a data-hover="SCOT"
                                                                                        class="label blue-text blue-on-hover" target="_self" rel="" title="Scotland"
                                                                                        href="/team/scotland-30">SCOT</a></td>
                                                                                    <td scope="col" class="text-right pr-3">3</td>
                                                                                    <td scope="col" class="text-right pr-3">0</td>
                                                                                    <td scope="col" class="text-right pr-3">3</td>
                                                                                    <td scope="col" class="text-right pr-3 label">0</td>
                                                                                    <td scope="col" class="text-right pr-3">-2.645</td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="sidebar-widget-view-all"><a data-hover="Full Table"
                                                                class="label blue-text blue-on-hover" target="_self" rel=""
                                                                href="/series/icc-men-s-t20-world-cup-2021-22-1267897/points-table-standings">Full
                                                                Table</a></div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div class="ad-placeholder promoboxBottom ad-promoboxbottom-513776"
                                                            style="min-width:10%;min-height:100px"></div>
                                                    </div>
                                                    <div>
                                                        <div class="ad-placeholder incontent3 ad-incontent3-160110"
                                                            style="min-width:10%;min-height:250px"></div>
                                                    </div>
                                                    <div>
                                                        <div></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="global-footer">
                                <div class="container">
                                    <div class="row m-0">
                                        <div class="col-sm-16 col-lg-10 col-xl-11">
                                            <div class="footer-links-wrapper"><span class="footer-link-wrapper"><a
                                                href="https://disneytermsofuse.com/" data-hover="Terms of Use" class="small" target="_blank"
                                                rel="noopener noreferrer">Terms of Use</a><span class="footer-link-divider">|</span></span><span
                                                    class="footer-link-wrapper"><a href="https://privacy.thewaltdisneycompany.com/en/"
                                                        data-hover="Privacy Policy" class="small" target="_blank" rel="noopener noreferrer">Privacy
                                                        Policy</a><span class="footer-link-divider">|</span></span><span class="footer-link-wrapper"><a
                                                            href="https://privacy.thewaltdisneycompany.com/en/current-privacy-policy/addendum-to-the-global-privacy-policy/"
                                                            data-hover="Addendum to the Global Privacy Policy" class="small" target="_blank"
                                                            rel="noopener noreferrer">Addendum to the Global Privacy Policy</a><span
                                                                class="footer-link-divider">|</span></span><span class="footer-link-wrapper"><a
                                                                    href="https://preferences-mgr.truste.com/?type=espn&amp;affiliateId=148"
                                                                    data-hover="Interest-Based Ads" class="small" target="_blank"
                                                                    rel="noopener noreferrer">Interest-Based Ads</a><span
                                                                        class="footer-link-divider">|</span></span><span class="footer-link-wrapper"><a
                                                                            href="https://submit.espncricinfo.com/ci/content/submit/forms/feedback.html"
                                                                            data-hover="Feedback" class="small" target="_parent" rel="">Feedback</a><span
                                                                                class="footer-link-divider">|</span></span></div>
                                        </div>
                                        <div class="col-sm-0 col-lg-6 col-xl-5">
                                            <div class="copyright">©
                                                <!-- -->2021
                                                <!-- --> ESPN Sports Media Ltd. All rights reserved
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
                <div></div>
                <div></div>
                <div id="modalContainer"></div>
                <div id="imageShareContainer"></div>
            </div>
            <script id="__NEXT_DATA__"
            <script type="text/javascript">

                var omnitureCode = "wdgespcricinfo,wdgespge";
                if (hsci.isApp) {
                    omnitureCode = "wdgwespmaciapps";
    }

                window.s_account = omnitureCode;
                window.omniSite = "cricinfo";
            </script>
            <script type="text/javascript">
                (function () {
      var a = document.createElement('script'); a.type = 'text/javascript'; a.async = true;
                a.src = ('https:' == document.location.protocol ? 'https://' : 'http://cdn.') + 'chuknu.sokrati.com/22623/tracker.js';
                var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(a, s);
    })();
            </script>
            <script type="text/javascript">
                var _sf_async_config = { };
                /** CONFIGURATION START **/
                _sf_async_config.uid = 26455;
                _sf_async_config.domain = 'espncricinfo.com';
                _sf_async_config.useCanonical = true;
                _sf_async_config.sections = 'Others'; // page type
                /** CONFIGURATION END **/
                (function () {
                    function loadChartbeat() {
                        window._sf_endpt = (new Date()).getTime();
                        var e = document.createElement('script');
                        e.setAttribute('language', 'javascript');
                        e.setAttribute('type', 'text/javascript');
                        e.setAttribute('src',
                            (('https:' == document.location.protocol) ? 'https://static.chartbeat.com/' : 'http://static.chartbeat.com/') +
                            'js/chartbeat.js');
                        document.body.appendChild(e);
                    }
      var oldonload = window.onload;
                window.onload = (typeof window.onload != 'function') ?
                loadChartbeat : function () {oldonload(); loadChartbeat(); };
    })();
            </script>
        </body>

    </html>