user_pref("browser.cache.disk.enable", false);
user_pref("browser.privatebrowsing.forceMediaMemoryCache", true); // [FF75+]
user_pref("media.memory_cache_max_size", 65536);
user_pref("browser.sessionstore.privacy_level", 2);
user_pref("toolkit.winRegisterApplicationRestart", false);
user_pref("browser.shell.shortcutFavicons", false);
user_pref("security.ssl.require_safe_negotiation", true);
user_pref("security.tls.enable_0rtt_data", false);
user_pref("security.OCSP.enabled", 1); // [DEFAULT: 1]
user_pref("security.OCSP.require", true);
user_pref("security.family_safety.mode", 0);
user_pref("security.cert_pinning.enforcement_level", 2);
user_pref("security.remote_settings.crlite_filters.enabled", true);
user_pref("security.pki.crlite_mode", 2);
user_pref("security.mixed_content.block_display_content", true); // Defense-in-depth (see 1244)
user_pref("dom.security.https_only_mode", true); // [FF76+]
user_pref("dom.security.https_only_mode_pbm", true); // [FF80+]
user_pref("dom.security.https_only_mode.upgrade_local", true);
user_pref("dom.security.https_only_mode_send_http_background_request", false);
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
user_pref("browser.xul.error_pages.expert_bad_cert", true);
user_pref("layout.css.font-visibility.private", 1);
// 1=only base system fonts, 2=also fonts from optional language packs, 3=also user-installed fonts
user_pref("layout.css.font-visibility.standard", 1);
user_pref("layout.css.font-visibility.trackingprotection", 1);
// 0=always (default), 1=only if base domains match, 2=only if hosts match
user_pref("network.http.referer.XOriginPolicy", 2);
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);
user_pref("privacy.userContext.enabled", true);
user_pref("privacy.userContext.ui.enabled", true);
user_pref("privacy.userContext.newTabContainerOnLeftClick.enabled", true);
user_pref("media.peerconnection.ice.proxy_only_if_behind_proxy", true);
user_pref("media.peerconnection.ice.default_address_only", true);
user_pref("media.peerconnection.ice.no_host", true);
user_pref("media.gmp-provider.enabled", false);
user_pref("media.gmp-widevinecdm.enabled", false);
user_pref("media.eme.enabled", false);
// user_pref("browser.eme.ui.enabled", false);
user_pref("dom.disable_window_move_resize", true);
user_pref("accessibility.force_disabled", 1);
user_pref("browser.helperApps.deleteTempFileOnExit", true);
user_pref("browser.uitour.enabled", false);
// user_pref("browser.uitour.url", ""); // Defense-in-depth
user_pref("devtools.debugger.remote-enabled", false); // [DEFAULT: false]
user_pref("middlemouse.contentLoadURL", false);
// disable websites overriding Firefox's keyboard shortcuts [FF58+]
// 0 (default) or 1=allow, 2=block
user_pref("permissions.default.shortcuts", 2);
user_pref("permissions.manager.defaultsUrl", "");
user_pref("webchannel.allowObject.urlWhitelist", "");
user_pref("network.IDN_show_punycode", true);
user_pref("pdfjs.disabled", false); // [DEFAULT: false]
user_pref("pdfjs.enableScripting", false); // [FF86+]
user_pref("network.protocol-handler.external.ms-windows-store", false);
user_pref("permissions.delegation.enabled", false);
user_pref("browser.download.useDownloadDir", false);
user_pref("browser.download.alwaysOpenPanel", false);
user_pref("browser.download.manager.addToRecentDocs", false);
user_pref("browser.download.always_ask_before_handling_new_types", true);
user_pref("extensions.enabledScopes", 5); // [HIDDEN PREF]
user_pref("extensions.autoDisableScopes", 15); // [DEFAULT: 15]
user_pref("extensions.postDownloadThirdPartyPrompt", false);
user_pref("extensions.webextensions.restrictedDomains", "");
user_pref("browser.contentblocking.category", "strict");
 // user_pref("privacy.antitracking.enableWebcompat", false);
user_pref("privacy.partition.serviceWorkers", true); // [DEFAULT: true FF105+]
user_pref("privacy.partition.always_partition_third_party_non_cookie_storage", true); // [FF104+] [DEFAULT: true FF109+]
user_pref("privacy.partition.always_partition_third_party_non_cookie_storage.exempt_sessionstorage", false); // [FF105+] [DEFAULT: false FF109+]
//
//
//
// SANITIZE ON SHUTDOWN: IGNORES "ALLOW" SITE EXCEPTIONS ***/
// 2811: set/enforce what items to clear on shutdown (if 2810 is true) [SETUP-CHROME]
// [NOTE] If "history" is true, downloads will also be cleared
// [NOTE] "sessions": Active Logins: refers to HTTP Basic Authentication [1], not logins via cookies
// [1] https://en.wikipedia.org/wiki/Basic_access_authentication ***/
user_pref("privacy.sanitize.sanitizeOnShutdown", false);
// ^-- was true.... 
user_pref("privacy.clearOnShutdown.cache", true);     // [DEFAULT: true]
user_pref("privacy.clearOnShutdown.downloads", true); // [DEFAULT: true]
user_pref("privacy.clearOnShutdown.formdata", true);  // [DEFAULT: true]
user_pref("privacy.clearOnShutdown.history", false);   // [DEFAULT: true]
user_pref("privacy.clearOnShutdown.sessions", false);  // [DEFAULT: true]
user_pref("privacy.clearOnShutdown.siteSettings", false); // [DEFAULT: false]
user_pref("privacy.clearOnShutdown.openWindows", true);
user_pref("privacy.clearOnShutdown.cookies", false); // Cookies
user_pref("privacy.clearOnShutdown.offlineApps", true); // Site Data
//
//
//
user_pref("privacy.clearsitedata.cache.enabled", true);
//
user_pref("privacy.cpd.cache", true);    // [DEFAULT: true]
user_pref("privacy.cpd.formdata", true); // [DEFAULT: true]
//
//
//
//  above is arkenfox
//
//
//     below is libre
//
//



lockPref("librewolf.cfg.version", "7.6");
pref("browser.contentblocking.category", "strict");
defaultPref("privacy.partition.always_partition_third_party_non_cookie_storage", true);
defaultPref("privacy.partition.always_partition_third_party_non_cookie_storage.exempt_sessionstorage", false);  
defaultPref("privacy.clearOnShutdown.offlineApps", true);
defaultPref("privacy.sanitize.sanitizeOnShutdown", true);
defaultPref("privacy.sanitize.timeSpan", 0);
defaultPref("browser.cache.disk.enable", false); // disable disk cache
defaultPref("browser.privatebrowsing.forceMediaMemoryCache", true);
defaultPref("media.memory_cache_max_size", 65536);
defaultPref("browser.shell.shortcutFavicons", false); // disable favicons in profile folder
defaultPref("browser.helperApps.deleteTempFileOnExit", true); // delete temporary files opened with external apps
pref("privacy.history.custom", true);
pref("browser.privatebrowsing.autostart", false);
defaultPref("browser.formfill.enable", false); // disable form history
defaultPref("browser.sessionstore.privacy_level", 2); // prevent websites from storing session data like cookies and forms
defaultPref("privacy.query_stripping.strip_list", "__hsfp __hssc __hstc __s _hsenc _openstat dclid fbclid gbraid gclid hsCtaTracking igshid mc_eid ml_subscriber ml_subscriber_hash msclkid oft_c oft_ck oft_d oft_id oft_ids oft_k oft_lk oft_sk oly_anon_id oly_enc_id rb_clickid s_cid twclid vero_conv vero_id wbraid wickedid yclid");
defaultPref("librewolf.uBO.assetsBootstrapLocation", "https://gitlab.com/librewolf-community/browser/source/-/raw/main/assets/uBOAssets.json");
pref("browser.dom.window.dump.enabled", false);
pref("devtools.console.stdout.chrome", false);
defaultPref("dom.security.https_only_mode", true); // only allow https in all windows, including private browsing
defaultPref("network.auth.subresource-http-auth-allow", 1); // block HTTP authentication credential dialogs
defaultPref("network.http.referer.XOriginTrimmingPolicy", 2);
defaultPref("media.peerconnection.ice.default_address_only", true); // use a single interface for ICE candidates, the vpn one when a vpn is used
defaultPref("network.gio.supported-protocols", ""); // disable gio as it could bypass proxy
defaultPref("network.file.disable_unc_paths", true); // hidden, disable using uniform naming convention to prevent proxy bypass
defaultPref("network.proxy.socks_remote_dns", true); // forces dns query through the proxy when using one
defaultPref("media.peerconnection.ice.proxy_only_if_behind_proxy", true); // force webrtc inside proxy when one is used
defaultPref("network.trr.confirmationNS", "skip"); // skip undesired doh test connection
defaultPref("network.dns.disablePrefetch", true); // disable dns prefetching
pref("network.trr.mode", 2);
pref("network.trr.uri", "https://dns.nextdns.io/b2a825/dintwolf");
//pref("network.trr.uri", "https://dns.quad9.net/dns-query");
pref("network.predictor.enabled", false);
user_pref("network.predictor.enable-prefetch", false); // [FF48+] [DEFAULT: false]
user_pref("network.dns.disablePrefetchFromHTTPS", true); // [DEFAULT: true]
pref("network.prefetch-next", false);
pref("network.http.speculative-parallel-limit", 0);
defaultPref("browser.places.speculativeConnect.enabled", false);
defaultPref("browser.urlbar.speculativeConnect.enabled", false);
defaultPref("privacy.resistFingerprinting", true);
defaultPref("privacy.resistFingerprinting.block_mozAddonManager", true); // prevents rfp from breaking AMO
defaultPref("browser.display.use_system_colors", false); // default, except Win
defaultPref("privacy.window.maxInnerWidth", 1600);
defaultPref("privacy.window.maxInnerHeight", 900);
defaultPref("privacy.resistFingerprinting.letterboxing", false);
defaultPref("webgl.disabled", true);
defaultPref("security.cert_pinning.enforcement_level", 2); // enable strict public key pinning, might cause issues with AVs
defaultPref("security.ssl.require_safe_negotiation", true);
defaultPref("security.ssl.treat_unsafe_negotiation_as_broken", true);
defaultPref("security.remote_settings.crlite_filters.enabled", true);
defaultPref("security.OCSP.require", true); // set to hard-fail, might cause SEC_ERROR_OCSP_SERVER_ERROR
pref("security.tls.enable_0rtt_data", false); // disable 0 RTT to improve tls 1.3 security
pref("security.tls.version.enable-deprecated", false); // make TLS downgrades session only by enforcing it with pref(), default
defaultPref("browser.xul.error_pages.expert_bad_cert", true); // show relevant and advanced issues on warnings and error screens
pref("permissions.delegation.enabled", false); // force permission request to show real origin
pref("permissions.manager.defaultsUrl", ""); // revoke special permissions for some mozilla domains
defaultPref("browser.safebrowsing.malware.enabled", false);
defaultPref("browser.safebrowsing.phishing.enabled", false);
defaultPref("browser.safebrowsing.blockedURIs.enabled", false);
defaultPref("browser.safebrowsing.provider.google4.gethashURL", "");
defaultPref("browser.safebrowsing.provider.google4.updateURL", "");
defaultPref("browser.safebrowsing.provider.google.gethashURL", "");
defaultPref("browser.safebrowsing.provider.google.updateURL", "");
defaultPref("browser.safebrowsing.downloads.enabled", false);
pref("browser.safebrowsing.downloads.remote.enabled", false);
pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
pref("browser.safebrowsing.downloads.remote.block_uncommon", false);
pref("browser.safebrowsing.downloads.remote.url", "");
pref("browser.safebrowsing.provider.google4.dataSharingURL", "");
defaultPref("network.IDN_show_punycode", true); // use punycode in idn to prevent spoofing
defaultPref("pdfjs.enableScripting", false); // disable js scripting in the built-in pdf reader
defaultPref("geo.provider.network.url", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");
defaultPref("geo.provider.ms-windows-location", false); // [WINDOWS]
defaultPref("geo.provider.use_corelocation", false); // [MAC]
defaultPref("geo.provider.use_gpsd", false); // [LINUX]
defaultPref("geo.provider.use_geoclue", false); // [LINUX]
// user_pref("geo.provider.network.logging.enabled", true); // [HIDDEN PREF]
pref("javascript.use_us_english_locale", true);
pref("intl.accept_languages", "en-US, en");
pref("browser.region.network.url", "");
pref("browser.region.update.enabled", false);
defaultPref("media.eme.enabled", false); // master switch for drm content
defaultPref("media.gmp-manager.url", "data:text/plain,"); // prevent checks for plugin updates when drm is disabled
defaultPref("media.gmp-provider.enabled", false);
defaultPref("media.gmp-gmpopenh264.enabled", false);
defaultPref("browser.urlbar.suggest.searches", false);
defaultPref("browser.search.suggest.enabled", false);
defaultPref("browser.search.update", false);
pref("browser.urlbar.quicksuggest.enabled", false);
defaultPref("browser.download.useDownloadDir", false);
defaultPref("browser.download.autohideButton", false); // do not hide download button automatically
defaultPref("browser.download.manager.addToRecentDocs", false); // do not add downloads to recents
defaultPref("browser.download.alwaysOpenPanel", false); // do not expand toolbar menu for every download, we already have enough interaction
defaultPref("media.autoplay.default", 5);
defaultPref("dom.disable_window_move_resize", true);
defaultPref("browser.link.open_newwindow", 3);
defaultPref("browser.link.open_newwindow.restriction", 0);
defaultPref("middlemouse.contentLoadURL", false); // prevent mouse middle click from opening links
defaultPref("extensions.webextensions.restrictedDomains", "");
defaultPref("extensions.enabledScopes", 5); // hidden
defaultPref("extensions.postDownloadThirdPartyPrompt", false);
defaultPref("extensions.systemAddon.update.enabled", false);
defaultPref("extensions.systemAddon.update.url", "");
lockPref("extensions.webcompat-reporter.enabled", false);
lockPref("extensions.webcompat-reporter.newIssueEndpoint", "");
lockPref("app.update.auto", false);
defaultPref("identity.fxaccounts.enabled", false);
defaultPref("signon.rememberSignons", false);
defaultPref("signon.autofillForms", false);
defaultPref("extensions.formautofill.addresses.enabled", false);
defaultPref("extensions.formautofill.creditCards.enabled", false);
defaultPref("signon.formlessCapture.enabled", false);
defaultPref("privacy.userContext.enabled", true);
defaultPref("privacy.userContext.ui.enabled", true);
pref("devtools.debugger.remote-enabled", false); // default, but subject to branding so keep it
defaultPref("devtools.selfxss.count", 0); // required for devtools console to work
pref("browser.translation.engine", ""); // remove translation engine
pref("webchannel.allowObject.urlWhitelist", ""); // remove web channel whitelist
defaultPref("services.settings.server", "https://%.invalid") // set the remote settings URL (REMOTE_SETTINGS_SERVER_URL in the code)
defaultPref("app.support.baseURL", "https://support.librewolf.net/");
defaultPref("browser.search.searchEnginesURL", "https://librewolf.net/docs/faq/#how-do-i-add-a-search-engine");
defaultPref("browser.geolocation.warning.infoURL", "https://librewolf.net/docs/faq/#how-do-i-enable-location-aware-browsing");
defaultPref("app.feedback.baseURL", "https://librewolf.net/#questions");
defaultPref("app.releaseNotesURL", "https://gitlab.com/librewolf-community/browser");
defaultPref("app.releaseNotesURL.aboutDialog", "https://gitlab.com/librewolf-community/browser");
defaultPref("app.update.url.details", "https://gitlab.com/librewolf-community/browser");
defaultPref("app.update.url.manual", "https://gitlab.com/librewolf-community/browser");
defaultPref("app.support.baseURL", "");
defaultPref("browser.search.searchEnginesURL", "");
defaultPref("browser.geolocation.warning.infoURL", "");
defaultPref("app.feedback.baseURL", "");
defaultPref("app.releaseNotesURL", "");
defaultPref("app.releaseNotesURL.aboutDialog", "");
defaultPref("app.update.url.details", "");
defaultPref("app.update.url.manual", "");
defaultPref("browser.startup.homepage_override.mstone", "ignore");
defaultPref("startup.homepage_override_url", "about:blank");
defaultPref("startup.homepage_welcome_url", "about:blank");
defaultPref("startup.homepage_welcome_url.additional", "");
lockPref("browser.messaging-system.whatsNewPanel.enabled", false);
lockPref("browser.uitour.enabled", false);
lockPref("browser.uitour.url", "");
defaultPref("browser.shell.checkDefaultBrowser", false);
defaultPref("browser.newtabpage.activity-stream.section.highlights.includeDownloads", false);
defaultPref("browser.newtabpage.activity-stream.section.highlights.includeVisited", false);
defaultPref("browser.newtabpage.activity-stream.feeds.topsites", false);
lockPref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
lockPref("browser.newtabpage.activity-stream.showSponsored", false);
lockPref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
lockPref("browser.newtabpage.activity-stream.feeds.telemetry", false);
lockPref("browser.newtabpage.activity-stream.telemetry", false);
lockPref("browser.newtabpage.activity-stream.feeds.section.topstories.options", "{\"hidden\":true}");
lockPref("browser.newtabpage.activity-stream.default.sites", "");
defaultPref("browser.contentblocking.report.lockwise.enabled", false);
lockPref("browser.contentblocking.report.hide_vpn_banner", true);
lockPref("browser.contentblocking.report.vpn.enabled", false);
lockPref("browser.contentblocking.report.show_mobile_app", false);
lockPref("browser.vpn_promo.enabled", false);
lockPref("browser.promo.focus.enabled", false);
defaultPref("extensions.htmlaboutaddons.recommendations.enabled", false);
defaultPref("extensions.getAddons.showPane", false);
defaultPref("extensions.getAddons.cache.enabled", false); // disable fetching of extension metadata
defaultPref("lightweightThemes.getMoreURL", ""); // disable button to get more themes
defaultPref("browser.topsites.useRemoteSetting", false); // hide sponsored shortcuts button
defaultPref("browser.aboutConfig.showWarning", false);
defaultPref("browser.preferences.moreFromMozilla", false);
lockPref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
lockPref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
lockPref("toolkit.telemetry.unified", false); // master switch
lockPref("toolkit.telemetry.enabled", false);  // master switch
lockPref("toolkit.telemetry.server", "data:,");
lockPref("toolkit.telemetry.archive.enabled", false);
lockPref("toolkit.telemetry.newProfilePing.enabled", false);
lockPref("toolkit.telemetry.updatePing.enabled", false);
lockPref("toolkit.telemetry.firstShutdownPing.enabled", false);
lockPref("toolkit.telemetry.shutdownPingSender.enabled", false);
lockPref("toolkit.telemetry.bhrPing.enabled", false);
lockPref("toolkit.telemetry.cachedClientID", "");
lockPref("toolkit.telemetry.previousBuildID", "");
lockPref("toolkit.telemetry.server_owner", "");
lockPref("toolkit.coverage.opt-out", true); // hidden
lockPref("toolkit.telemetry.coverage.opt-out", true); // hidden
lockPref("toolkit.coverage.enabled", false);
lockPref("toolkit.coverage.endpoint.base", "");
lockPref("toolkit.crashreporter.infoURL", "");
lockPref("datareporting.healthreport.uploadEnabled", false);
lockPref("datareporting.policy.dataSubmissionEnabled", false);
lockPref("security.protectionspopup.recordEventTelemetry", false);
lockPref("browser.ping-centre.telemetry", false);
lockPref("app.normandy.enabled", false);
lockPref("app.normandy.api_url", "");
lockPref("app.shield.optoutstudies.enabled", false);
lockPref("browser.discovery.enabled", false);
lockPref("browser.discovery.containers.enabled", false);
lockPref("browser.discovery.sites", "");
lockPref("browser.tabs.crashReporting.sendReport", false);
lockPref("breakpad.reportURL", "");
user_pref("browser.crashReports.unsubmittedCheck.enabled", false); // [FF51+] [DEFAULT: false]
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false); // [DEFAULT: false]
user_pref("browser.safebrowsing.allowOverride", false);
user_pref("browser.send_pings", false); // [DEFAULT: false]
pref("network.connectivity-service.enabled", false);
pref("network.captive-portal-service.enabled", false);
pref("captivedetect.canonicalURL", "");
lockPref("app.update.service.enabled", false);
defaultPref("app.update.background.scheduling.enabled", false);
lockPref("default-browser-agent.enabled", false); // disable windows specific telemetry
defaultPref("network.protocol-handler.external.ms-windows-store", false); // prevent links from launching windows store
pref("toolkit.winRegisterApplicationRestart", false); // disable automatic start and session restore after reboot
lockPref("security.family_safety.mode", 0); // disable win8.1 family safety cert
user_pref("network.dns.disableIPv6", true);
user_pref("network.proxy.failover_direct", false);
user_pref("network.proxy.allow_bypass", false); // [HIDDEN PREF FF95-96]
user_pref("keyword.enabled", false);
user_pref("browser.fixup.alternate.enabled", false); // [DEFAULT: false FF104+]
user_pref("browser.urlbar.dnsResolveSingleWordsAfterSearch", 0); // [DEFAULT: 0 FF104+]
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false); // [FF95+]
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false);
user_pref("network.http.windows-sso.enabled", false); // [DEFAULT: false]
//
//  defaultPref('autoadmin.global_config_url', `file://${profile_directory}/.librewolf/librewolf.overrides.cfg`);
//




//
//   above is libre
// 
//
//
//
//   needs to still config
//
//   last part of arkenfox
//
//

user_pref("privacy.cpd.history", true);  // [DEFAULT: true]
user_pref("privacy.cpd.sessions", true); // [DEFAULT: true]
user_pref("privacy.cpd.offlineApps", false); // [DEFAULT: false]
user_pref("privacy.cpd.cookies", false);
// user_pref("privacy.cpd.downloads", true); // not used, see note above
// user_pref("privacy.cpd.openWindows", false); // Session Restore
// user_pref("privacy.cpd.passwords", false);
// user_pref("privacy.cpd.siteSettings", false);
user_pref("privacy.sanitize.timeSpan", 0);
user_pref("privacy.resistFingerprinting", true);
user_pref("privacy.window.maxInnerWidth", 1600);
user_pref("privacy.window.maxInnerHeight", 900);
user_pref("privacy.resistFingerprinting.block_mozAddonManager", true); // [HIDDEN PREF]
user_pref("privacy.resistFingerprinting.letterboxing", true); // [HIDDEN PREF]
// user_pref("privacy.resistFingerprinting.letterboxing.dimensions", ""); // [HIDDEN PREF]
// user_pref("privacy.resistFingerprinting.exemptedDomains", "*.example.invalid");
// user_pref("privacy.resistFingerprinting.testGranularityMask", 0);
// user_pref("layout.css.font-visibility.resistFingerprinting", 1); // [DEFAULT: 1]
user_pref("browser.display.use_system_colors", false); // [DEFAULT: false NON-WINDOWS]
user_pref("widget.non-native-theme.enabled", true); // [DEFAULT: true]
user_pref("browser.link.open_newwindow", 3); // [DEFAULT: 3]
user_pref("browser.link.open_newwindow.restriction", 0);
user_pref("webgl.disabled", true);
//user_pref("browser.privatebrowsing.autostart", true);
//user_pref("browser.cache.memory.enable", false);
//user_pref("browser.cache.memory.capacity", 0);
//user_pref("signon.rememberSignons", false);
//user_pref("permissions.memory_only", true); // [HIDDEN PREF]
//user_pref("security.nocertdb", true);
//user_pref("browser.chrome.site_icons", false);
//user_pref("browser.sessionstore.max_tabs_undo", 0);
//user_pref("browser.sessionstore.resume_from_crash", false);
//user_pref("browser.download.forbid_open_with", true);
//user_pref("browser.urlbar.suggest.history", false);
//user_pref("browser.urlbar.suggest.bookmark", false);
//user_pref("browser.urlbar.suggest.openpage", false);
//user_pref("browser.urlbar.suggest.topsites", false); // [FF78+]
//user_pref("browser.urlbar.maxRichResults", 0);
//user_pref("browser.urlbar.autoFill", false);
//user_pref("places.history.enabled", false);
//user_pref("browser.taskbar.lists.enabled", false);
//user_pref("browser.taskbar.lists.frequent.enabled", false);
//user_pref("browser.taskbar.lists.recent.enabled", false);
//user_pref("browser.taskbar.lists.tasks.enabled", false);
//user_pref("browser.taskbar.previews.enable", false); // [DEFAULT: false]
//user_pref("browser.download.folderList", 2);
//user_pref("extensions.formautofill.addresses.enabled", false); // [FF55+]
//user_pref("extensions.formautofill.creditCards.enabled", false); // [FF56+]
//user_pref("extensions.formautofill.heuristics.enabled", false); // [FF55+]
//user_pref("dom.popup_allowed_events", "click dblclick mousedown pointerdown");
//user_pref("browser.pagethumbnails.capturing_disabled", true); // [HIDDEN PREF]
//user_pref("alerts.useSystemBackend.windows.notificationserver.enabled", false);
//user_pref("mathml.disabled", true); // 1173199
//user_pref("svg.disabled", true); // 1216893
//user_pref("gfx.font_rendering.graphite.enabled", false);
//user_pref("javascript.options.asmjs", false);
//user_pref("javascript.options.ion", false);
//user_pref("javascript.options.baselinejit", false);
//user_pref("javascript.options.jit_trustedprincipals", true); // [FF75+] [HIDDEN PREF]
//user_pref("javascript.options.wasm", false);
//user_pref("gfx.font_rendering.opentype_svg.enabled", false);
user_pref("extensions.blocklist.enabled", true); // [DEFAULT: true]
user_pref("network.http.referer.spoofSource", false); // [DEFAULT: false]
user_pref("security.dialog_enable_delay", 1000); // [DEFAULT: 1000]
user_pref("privacy.firstparty.isolate", false); // [DEFAULT: false]
user_pref("extensions.webcompat.enable_shims", true); // [DEFAULT: true]
user_pref("security.tls.version.enable-deprecated", false); // [DEFAULT: false]
user_pref("extensions.webcompat-reporter.enabled", false); // [DEFAULT: false]
//user_pref("beacon.enabled", "");
//user_pref("browser.startup.blankWindow", "");
//user_pref("browser.newtab.preload", "");
//user_pref("browser.newtabpage.activity-stream.feeds.discoverystreamfeed", "");
//user_pref("browser.newtabpage.activity-stream.feeds.snippets", "");
//user_pref("browser.region.network.url", "");
//user_pref("browser.region.update.enabled", "");
//user_pref("browser.ssl_override_behavior", "");
//user_pref("devtools.chrome.enabled", "");
//user_pref("dom.disable_beforeunload", "");
//user_pref("dom.disable_open_during_load", "");
//user_pref("extensions.formautofill.available", "");
//user_pref("extensions.formautofill.addresses.supported", "");
//user_pref("extensions.formautofill.creditCards.available", "");
//user_pref("extensions.formautofill.creditCards.supported", "");
//user_pref("geo.enabled", false);
//user_pref("full-screen-api.enabled", false);
//user_pref("browser.cache.offline.enable", false);
//user_pref("permissions.default.geo", 0);
//user_pref("permissions.default.camera", 0);
//user_pref("permissions.default.microphone", 0);
//user_pref("permissions.default.desktop-notification", 0);
//user_pref("permissions.default.xr", 0); // Virtual Reality
//user_pref("security.ssl3.ecdhe_ecdsa_aes_128_sha", false); // [DEFAULT: false FF109+]
//user_pref("security.ssl3.ecdhe_ecdsa_aes_256_sha", false); // [DEFAULT: false FF109+]
//user_pref("security.ssl3.ecdhe_rsa_aes_128_sha", false);
//user_pref("security.ssl3.ecdhe_rsa_aes_256_sha", false);
//user_pref("security.ssl3.rsa_aes_128_gcm_sha256", false); // no PFS
//user_pref("security.ssl3.rsa_aes_256_gcm_sha384", false); // no PFS
//user_pref("security.ssl3.rsa_aes_128_sha", false); // no PFS
//user_pref("security.ssl3.rsa_aes_256_sha", false); // no PFS
//user_pref("security.tls.version.min", 3); // [DEFAULT: 3]
//user_pref("security.tls.version.max", 4);
//user_pref("security.ssl.disable_session_identifiers", true);
//user_pref("dom.securecontext.allowlist_onions", true); // [FF97+] 1382359/1744006
//user_pref("network.http.referer.hideOnionSource", true); // 1305144
//user_pref("network.http.sendRefererHeader", 2);
//user_pref("network.http.referer.trimmingPolicy", 0);
//user_pref("network.http.referer.defaultPolicy", 2); // [DEFAULT: 2]
//user_pref("network.http.referer.defaultPolicy.pbmode", 2); // [DEFAULT: 2]
//user_pref("network.http.altsvc.enabled", false);
//user_pref("dom.event.contextmenu.enabled", false);
//user_pref("gfx.downloadable_fonts.enabled", false); // [FF41+]
//user_pref("gfx.downloadable_fonts.fallback_delay", -1);
//user_pref("dom.event.clipboardevents.enabled", false);
//user_pref("extensions.systemAddon.update.enabled", false); // [FF62+]
//user_pref("extensions.systemAddon.update.url", ""); // [FF44+]
//user_pref("privacy.donottrackheader.enabled", true);
//user_pref("network.cookie.cookieBehavior", 5); // [DEFAULT: 5 FF103+]
//user_pref("network.http.referer.disallowCrossSiteRelaxingDefault", true);
//user_pref("network.http.referer.disallowCrossSiteRelaxingDefault.top_navigation", true); // [FF100+]
//user_pref("privacy.partition.network_state.ocsp_cache", true);
//user_pref("privacy.query_stripping.enabled", true); // [FF101+] [ETP FF102+]
//user_pref("privacy.trackingprotection.enabled", true);
//user_pref("privacy.trackingprotection.socialtracking.enabled", true);
//user_pref("privacy.trackingprotection.cryptomining.enabled", true); // [DEFAULT: true]
//user_pref("privacy.trackingprotection.fingerprinting.enabled", true); // [DEFAULT: true]
//
// * [WHY] Already isolated with TCP (2701) behind a pref (2710) ***/
//
//user_pref("dom.serviceWorkers.enabled", false);
//user_pref("dom.webnotifications.enabled", false); // [FF22+]
//user_pref("dom.webnotifications.serviceworker.enabled", false); // [FF44+]
//user_pref("dom.push.enabled", false);
//user_pref("media.peerconnection.enabled", false);
//user_pref("browser.display.use_document_fonts", "");
//user_pref("browser.zoom.siteSpecific", "");
//user_pref("device.sensors.enabled", "");
//user_pref("dom.enable_performance", "");
//user_pref("dom.enable_resource_timing", "");
//user_pref("dom.gamepad.enabled", "");
//user_pref("dom.maxHardwareConcurrency", "");
//user_pref("dom.w3c_touch_events.enabled", "");
//user_pref("dom.webaudio.enabled", "");
//user_pref("font.system.whitelist", "");
//user_pref("general.appname.override", "");
//user_pref("general.appversion.override", "");
//user_pref("general.buildID.override", "");
//user_pref("general.oscpu.override", "");
//user_pref("general.platform.override", "");
//user_pref("general.useragent.override", "");
//user_pref("media.navigator.enabled", "");
//user_pref("media.ondevicechange.enabled", "");
//user_pref("media.video_stats.enabled", "");
//user_pref("media.webspeech.synth.enabled", "");
//user_pref("ui.use_standins_for_native_colors", "");
//user_pref("webgl.enable-debug-renderer-info", "");
user_pref("browser.startup.homepage_override.mstone", "ignore");
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
user_pref("browser.messaging-system.whatsNewPanel.enabled", false);
user_pref("browser.urlbar.showSearchTerms.enabled", false);
user_pref("network.cookie.lifetimePolicy", 2);
//user_pref("security.pki.sha1_enforcement_level", 1); // [DEFAULT: 1]


















