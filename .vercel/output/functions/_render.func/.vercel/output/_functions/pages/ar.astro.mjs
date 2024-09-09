/* empty css                              */
import { a as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_dMsHt0vV.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BWoWF3v1.mjs';
export { renderers } from '../renderers.mjs';

const SCENE_ATTRIBUTES = {
  light: "defaultLightsEnabled: false",
  "vr-mode-ui": "enabled: false;",
  "loading-screen": "enabled: false;",
  renderer: "antialias: true; colorManagement: true; sortObjects: true; physicallyCorrectLights: true; maxCanvasWidth: 1920; maxCanvasHeight: 1920; logarithmicDepthBuffer: true;",
  arjs: "trackingMethod: best; sourceType: webcam; debugUIEnabled: false;sourceWidth:1280; sourceHeight:960; displayWidth: 1280; displayHeight: 960; patternRatio: 0.75",
  id: "scene",
  embedded: "",
  "xrextras-gesture-detector": ""
};
const ENTITY_ATTRIBUTES = {
  position: "0 0 0",
  scale: "10 10 10",
  "animation-mixer": "clip: Celula.rest; timeScale: 1",
  class: "clickable",
  "xrextras-pinch-scale": "min:0.1; max:10",
  "xrextras-one-finger-rotate": "factor: 4.5"
};

const $$Ar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Marshmalloween" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="h-full"> <section class="h-full relative flex flex-col"> <nav class="h-24 bg-[#E20031] z-50 w-full flex justify-center shadow-xl shadow-stone-900/60 p-2 items-center"> <img src="/logo.png" alt="Partners logos" class="h-3/4"> </nav> <div class="overflow-hidden relative block w-full h-[calc(100%-5rem)] bg-light"> ${renderComponent($$result2, "a-scene", "a-scene", { ...SCENE_ATTRIBUTES }, { "default": () => renderTemplate` ${renderComponent($$result2, "a-assets", "a-assets", {}, { "default": () => renderTemplate` ${renderComponent($$result2, "a-asset-item", "a-asset-item", { "id": "mario-model", "src": `/assets/models/mario.glb` })} ${renderComponent($$result2, "a-asset-item", "a-asset-item", { "id": "boo-model", "src": `/assets/models/boo.glb` })} ${renderComponent($$result2, "a-asset-item", "a-asset-item", { "id": "piano-model", "src": `/assets/models/mad-piano.glb` })} ` })} ${renderComponent($$result2, "a-camera", "a-camera", { "scale": "1 1 1", "position": "0 0 0", "look-controls": "enabled: false" })} ${renderComponent($$result2, "a-marker", "a-marker", { "id": "marioMarker", "type": "pattern", "preset": "custom", "url": "/assets/patterns/mario.patt", "emitevents": "true", "smooth": "true", "scale": "0 0 0", "smoothCount": "10", "smoothTolerance": "5", "smoothThreshold": "5", "raycaster": "objects: .clickable", "cursor": "fuse: false; rayOrigin: mouse;" }, { "default": () => renderTemplate` ${renderComponent($$result2, "a-entity", "a-entity", { "id": "marioEntity", "rotation": "-20 0 0", "gltf-model": "#mario-model", ...ENTITY_ATTRIBUTES, "scale": ".8 .8 .8", "position": "0 0 0" })} ` })} ${renderComponent($$result2, "a-marker", "a-marker", { "id": "madPianoMarker", "type": "pattern", "preset": "custom", "url": "/assets/patterns/mad-piano.patt", "emitevents": "true", "smooth": "true", "scale": "0 0 0", "smoothCount": "10", "smoothTolerance": "5", "smoothThreshold": "5", "raycaster": "objects: .clickable", "cursor": "fuse: false; rayOrigin: mouse;" }, { "default": () => renderTemplate` ${renderComponent($$result2, "a-entity", "a-entity", { "id": "pianoEntity", "rotation": "-20 -90 0", "gltf-model": "#piano-model", ...ENTITY_ATTRIBUTES, "scale": ".3 .3 .3", "position": "0 0 0" })} ` })} ${renderComponent($$result2, "a-marker", "a-marker", { "id": "booMarker", "type": "pattern", "preset": "custom", "url": "/assets/patterns/boo.patt", "emitevents": "true", "smooth": "true", "scale": "0 0 0", "smoothCount": "10", "smoothTolerance": "5", "smoothThreshold": "5", "raycaster": "objects: .clickable", "cursor": "fuse: false; rayOrigin: mouse;" }, { "default": () => renderTemplate` ${renderComponent($$result2, "a-entity", "a-entity", { "id": "booEntity", "rotation": "-20 0 0", "gltf-model": "#boo-model", ...ENTITY_ATTRIBUTES, "scale": ".3 .3 .3", "position": "0 0 0" })} ` })} ${renderComponent($$result2, "a-entity", "a-entity", { "light": "type: ambient; color: #fff; intensity: 5" })} ` })} </div> </section> </main> ` })} `;
}, "C:/Users/Usuario/Documents/web-projects/kellogs/src/pages/ar.astro", void 0);

const $$file = "C:/Users/Usuario/Documents/web-projects/kellogs/src/pages/ar.astro";
const $$url = "/froot-loops-ar/ar";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Ar,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
