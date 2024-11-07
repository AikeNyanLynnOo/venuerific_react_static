import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Lato } from "next/font/google";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const fontVnf = Lato({
  subsets: ["latin-ext"],
  // weight: ["100", "300", "400", "700", "900"],
  weight: ["400"],
  variable: "--font-vnf",
  display: "swap",
  fallback: ["sans-serif"],
});

import Script from "next/script";

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  initialScale: 1,
  width: "device-width",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <link
          crossOrigin="anonymous"
          href="https://dev.visualwebsiteoptimizer.com"
          rel="preconnect"
        />
        {process.env.NEXT_PUBLIC_VWO_ACCOUNT_ID && (
          <Script
            dangerouslySetInnerHTML={{
              __html: `
            window._vwo_code || (function() {
            var account_id=${process.env.NEXT_PUBLIC_VWO_ACCOUNT_ID},
            version=2.1,
            settings_tolerance=2000,
            hide_element='body',
            hide_element_style = 'opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important;transition:none !important;',
            /* DO NOT EDIT BELOW THIS LINE */
            f=false,w=window,d=document,v=d.querySelector('#vwoCode'),cK='vwo'+account_id+'settings',cc={};try{var c=JSON.parse(localStorage.getItem('vwo'+account_id+'config'));cc=c&&typeof c==='object'?c:{}}catch(e){}var stT=cc.stT==='session'?w.sessionStorage:w.localStorage;code={nonce:v&&v.nonce,use_existing_jquery:function(){return typeof use_existing_jquery!=='undefined'?use_existing_jquery:undefined},library_tolerance:function(){return typeof library_tolerance!=='undefined'?library_tolerance:undefined},settings_tolerance:function(){return cc.sT||settings_tolerance},hide_element_style:function(){return'{'+(cc.hES||hide_element_style)+'}'},hide_element:function(){if(performance.getEntriesByName('first-contentful-paint')[0]){return''}return typeof cc.hE==='string'?cc.hE:hide_element},getVersion:function(){return version},finish:function(e){if(!f){f=true;var t=d.getElementById('_vis_opt_path_hides');if(t)t.parentNode.removeChild(t);if(e)(new Image).src='https://dev.visualwebsiteoptimizer.com/ee.gif?a='+account_id+e}},finished:function(){return f},addScript:function(e){var t=d.createElement('script');t.type='text/javascript';if(e.src){t.src=e.src}else{t.text=e.text}v&&t.setAttribute('nonce',v.nonce);d.getElementsByTagName('head')[0].appendChild(t)},load:function(e,t){var n=this.getSettings(),i=d.createElement('script'),r=this;t=t||{};if(n){i.textContent=n;d.getElementsByTagName('head')[0].appendChild(i);if(!w.VWO||VWO.caE){stT.removeItem(cK);r.load(e)}}else{var o=new XMLHttpRequest;o.open('GET',e,true);o.withCredentials=!t.dSC;o.responseType=t.responseType||'text';o.onload=function(){if(t.onloadCb){return t.onloadCb(o,e)}if(o.status===200||o.status===304){w._vwo_code.addScript({text:o.responseText})}else{w._vwo_code.finish('&e=loading_failure:'+e)}};o.onerror=function(){if(t.onerrorCb){return t.onerrorCb(e)}w._vwo_code.finish('&e=loading_failure:'+e)};o.send()}},getSettings:function(){try{var e=stT.getItem(cK);if(!e){return}e=JSON.parse(e);if(Date.now()>e.e){stT.removeItem(cK);return}return e.s}catch(e){return}},init:function(){if(d.URL.indexOf('__vwo_disable')>-1)return;var e=this.settings_tolerance();w._vwo_settings_timer=setTimeout(function(){w._vwo_code.finish();stT.removeItem(cK)},e);var t;if(this.hide_element()!=='body'){t=d.createElement('style');var n=this.hide_element(),i=n?n+this.hide_element_style():'',r=d.getElementsByTagName('head')[0];t.setAttribute('id','_vis_opt_path_hides');v&&t.setAttribute('nonce',v.nonce);t.setAttribute('type','text/css');if(t.styleSheet)t.styleSheet.cssText=i;else t.appendChild(d.createTextNode(i));r.appendChild(t)}else{t=d.getElementsByTagName('head')[0];var i=d.createElement('div');i.style.cssText='z-index: 2147483647 !important;position: fixed !important;left: 0 !important;top: 0 !important;width: 100% !important;height: 100% !important;background: white !important;';i.setAttribute('id','_vis_opt_path_hides');i.classList.add('_vis_hide_layer');t.parentNode.insertBefore(i,t.nextSibling)}var o=window._vis_opt_url||d.URL,s='https://dev.visualwebsiteoptimizer.com/j.php?a='+account_id+'&u='+encodeURIComponent(o)+'&vn='+version;if(w.location.search.indexOf('_vwo_xhr')!==-1){this.addScript({src:s})}else{this.load(s+'&x=true')}}};w._vwo_code=code;code.init();})();(function(){var i=window;function t(){if(i._vwo_code){var e=t.hidingStyle=document.getElementById('_vis_opt_path_hides')||t.hidingStyle;if(!i._vwo_code.finished()&&!_vwo_code.libExecuted&&(!i.VWO||!VWO.dNR)){if(!document.getElementById('_vis_opt_path_hides')){document.getElementsByTagName('head')[0].appendChild(e)}requestAnimationFrame(t)}}}t()})();
        `,
            }}
            id="vwoCode"
            type="text/javascript"
          />
        )}
        {process.env.NEXT_PUBLIC_HOTJAR_ID && (
          <Script
            dangerouslySetInnerHTML={{
              __html: `
              (function(h,o,t,j,a,r){
                  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                  h._hjSettings={hjid:${process.env.NEXT_PUBLIC_HOTJAR_ID},hjsv:6};
                  a=o.getElementsByTagName('head')[0];
                  r=o.createElement('script');r.async=1;
                  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                  a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `,
            }}
          />
        )}
      </head>
      <body
        className={`min-h-screen bg-background font-vnf antialiased top-0 ${fontVnf.variable}`}
      >
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          />
        )}

        <div className="relative flex flex-col h-screen">
          <main className="w-full h-auto mx-auto flex-grow h-screen min-h-screen">
            {children}
          </main>
        </div>

        <Script
          src="/webapp_assets/scripts/lang-config.js"
          strategy="lazyOnload"
        />
        <Script
          src="/webapp_assets/scripts/translation.js"
          strategy="lazyOnload"
        />
        <Script
          src="/webapp_assets/scripts/google-translate.js"
          strategy="lazyOnload"
        />

        {/* commenting this and host ourself to prevent google third-party cookies */}
        {/* no need */}
        {/* <Script
          src="https://translate.google.com/translate_a/element.js?cb=TranslateInit"
          strategy="afterInteractive"
        /> */}

        {/* Google Tag Manager Script */}
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <Script
            dangerouslySetInnerHTML={{
              __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
            `,
            }}
            id="google-tag-manager"
            strategy="lazyOnload"
          />
        )}

        {process.env.NEXT_PUBLIC_AW_ID && (
          <Script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_AW_ID}');
            `,
            }}
            id="google-ads"
            strategy="lazyOnload"
          />
        )}
        {process.env.NEXT_PUBLIC_AW_ID && (
          <Script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_AW_ID}`}
            strategy="lazyOnload"
          />
        )}
      </body>
    </html>
  );
}
