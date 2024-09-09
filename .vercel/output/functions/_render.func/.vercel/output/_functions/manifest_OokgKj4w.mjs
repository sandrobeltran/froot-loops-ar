import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_CLm-Z7Xp.mjs';
import { g as decodeKey } from './chunks/astro/server_dMsHt0vV.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/Usuario/Documents/web-projects/kellogs/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"function i(e){return console.log(`Waiting for ${e}`),new Promise(t=>{if(document.querySelector(e))return t(document.querySelector(e));const n=new MutationObserver(o=>{document.querySelector(e)&&(n.disconnect(),t(document.querySelector(e)))});n.observe(document.body,{childList:!0,subtree:!0})})}window.addEventListener(\"DOMContentLoaded\",async()=>{const e=await i(\"#arjs-video\"),t=document.querySelector(\"a-scene\"),n=await i(\".a-canvas\");e.style.display=\"unset !important\",e.style.width=`${t.clientWidth}px !important`,e.style.height=`${t.clientHeight}px !important`,n.style.width=`${t.clientHeight}px`,t.appendChild(e)});\n"}],"styles":[{"type":"external","src":"/froot-loops-ar/_astro/ar.kEHM2TNV.css"}],"routeData":{"route":"/ar","isIndex":false,"type":"page","pattern":"^\\/ar\\/?$","segments":[[{"content":"ar","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/ar.astro","pathname":"/ar","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/froot-loops-ar/_astro/ar.kEHM2TNV.css"}],"routeData":{"route":"/error","isIndex":false,"type":"page","pattern":"^\\/error\\/?$","segments":[[{"content":"error","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/error.astro","pathname":"/error","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/froot-loops-ar/_astro/ar.kEHM2TNV.css"}],"routeData":{"route":"/trial","isIndex":false,"type":"page","pattern":"^\\/trial\\/?$","segments":[[{"content":"trial","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/trial.astro","pathname":"/trial","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/froot-loops-ar/_astro/ar.kEHM2TNV.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://sandrobeltran.github.io","base":"/froot-loops-ar","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Usuario/Documents/web-projects/kellogs/src/pages/ar.astro",{"propagation":"none","containsHead":true}],["C:/Users/Usuario/Documents/web-projects/kellogs/src/pages/error.astro",{"propagation":"none","containsHead":true}],["C:/Users/Usuario/Documents/web-projects/kellogs/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Usuario/Documents/web-projects/kellogs/src/pages/trial.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/error@_@astro":"pages/error.astro.mjs","\u0000@astro-page:src/pages/trial@_@astro":"pages/trial.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/ar@_@astro":"pages/ar.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","C:/Users/Usuario/Documents/web-projects/kellogs/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","\u0000@astrojs-manifest":"manifest_OokgKj4w.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.C_wUBfWx.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/froot-loops-ar/_astro/ar.kEHM2TNV.css","/froot-loops-ar/ar-bg-leaves.png","/froot-loops-ar/celula-animal-marker.png","/froot-loops-ar/favicon.svg","/froot-loops-ar/logo.png","/froot-loops-ar/fonts/FrootLoops.woff2","/froot-loops-ar/assets/markers/boo.png","/froot-loops-ar/assets/markers/mad-piano.png","/froot-loops-ar/assets/markers/mario.png","/froot-loops-ar/assets/models/boo.glb","/froot-loops-ar/assets/models/mad-piano.glb","/froot-loops-ar/assets/models/mario.fbx","/froot-loops-ar/assets/models/mario.glb","/froot-loops-ar/assets/models/peach.glb","/froot-loops-ar/assets/patterns/boo.patt","/froot-loops-ar/assets/patterns/mad-piano.patt","/froot-loops-ar/assets/patterns/mario.patt","/froot-loops-ar/img/animations-panel/idle.png","/froot-loops-ar/img/animations-panel/celula-animal/aparato-de-golgi.webp","/froot-loops-ar/img/animations-panel/celula-animal/centriolo.webp","/froot-loops-ar/img/animations-panel/celula-animal/citoplasma.webp","/froot-loops-ar/img/animations-panel/celula-animal/cromosomas.webp","/froot-loops-ar/img/animations-panel/celula-animal/lisosomas.webp","/froot-loops-ar/img/animations-panel/celula-animal/membrana-celular.webp","/froot-loops-ar/img/animations-panel/celula-animal/membrana-nuclear.webp","/froot-loops-ar/img/animations-panel/celula-animal/mitocondria.webp","/froot-loops-ar/img/animations-panel/celula-animal/nucleo.webp","/froot-loops-ar/img/animations-panel/celula-animal/reticulo-endoplasmatico.webp","/froot-loops-ar/img/animations-panel/celula-animal/ribosomas.webp","/froot-loops-ar/img/animations-panel/celula-animal/vacuola.webp","/froot-loops-ar/img/animations-panel/celula-eucariota/centriolo.webp","/froot-loops-ar/img/animations-panel/celula-eucariota/golgi.webp","/froot-loops-ar/img/animations-panel/celula-eucariota/lisosomas.webp","/froot-loops-ar/img/animations-panel/celula-eucariota/mitocondria.webp","/froot-loops-ar/img/animations-panel/celula-eucariota/nucleo.webp","/froot-loops-ar/img/animations-panel/celula-eucariota/nucleolo.webp","/froot-loops-ar/img/animations-panel/celula-eucariota/reticulo-endo.webp","/froot-loops-ar/img/animations-panel/celula-eucariota/ribosomas.webp","/froot-loops-ar/img/animations-panel/celula-eucariota/vacuola.webp","/froot-loops-ar/img/animations-panel/celula-procariota/flagelo.webp","/froot-loops-ar/img/animations-panel/celula-procariota/membrana-plasmatica.webp","/froot-loops-ar/img/animations-panel/celula-procariota/nucleoide.webp","/froot-loops-ar/img/animations-panel/celula-procariota/pared-celular.webp","/froot-loops-ar/img/animations-panel/celula-procariota/plasmidos.webp","/froot-loops-ar/img/animations-panel/celula-procariota/ribosomas.webp","/froot-loops-ar/img/animations-panel/celula-vegetal/aparato-de-golgi.webp","/froot-loops-ar/img/animations-panel/celula-vegetal/citoplasma.webp","/froot-loops-ar/img/animations-panel/celula-vegetal/cloroplastos.webp","/froot-loops-ar/img/animations-panel/celula-vegetal/cromosomas.webp","/froot-loops-ar/img/animations-panel/celula-vegetal/membrana-celular.webp","/froot-loops-ar/img/animations-panel/celula-vegetal/membrana-nuclear.webp","/froot-loops-ar/img/animations-panel/celula-vegetal/mitocondria.webp","/froot-loops-ar/img/animations-panel/celula-vegetal/nucleo.webp","/froot-loops-ar/img/animations-panel/celula-vegetal/pared-celular.webp","/froot-loops-ar/img/animations-panel/celula-vegetal/reticulo-endoplasmatico.webp","/froot-loops-ar/img/animations-panel/celula-vegetal/ribosomas.webp","/froot-loops-ar/img/animations-panel/celula-vegetal/vacuola-central.webp"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"w8SfvhcibhJJDEV6mVYYFq2QzrbpCMqquw2Fkff9O4A=","experimentalEnvGetSecretEnabled":false});

export { manifest };
