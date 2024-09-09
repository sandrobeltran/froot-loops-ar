/* empty css                              */
import { a as createComponent, r as renderTemplate, f as renderComponent } from '../chunks/astro/server_dMsHt0vV.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BWoWF3v1.mjs';
export { renderers } from '../renderers.mjs';

const $$Trial = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Trial" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "a-scene", "a-scene", { "vr-mode-ui": "enabled: false;", "loading-screen": "enabled: false;", "renderer": "logarithmicDepthBuffer: true;", "arjs": "trackingMethod: best; sourceType: webcam; debugUIEnabled: false;", "id": "scene", "gesture-detector": true }, { "default": () => renderTemplate` ${renderComponent($$result2, "a-assets", "a-assets", {}, { "default": () => renderTemplate` ${renderComponent($$result2, "a-asset-item", "a-asset-item", { "id": "celula-animal", "src": "/assets/celula-animal.glb" })} ` })} ${renderComponent($$result2, "a-camera", "a-camera", { "position": "0 0 0", "look-controls": "enabled: false" })} ${renderComponent($$result2, "a-marker", "a-marker", { "id": "celulaAnimalMarker", "type": "pattern", "preset": "custom", "url": "/assets/celula-animal.patt", "emitevents": "true", "smooth": "true", "smoothCount": "10", "smoothTolerance": ".01", "smoothThreshold": "5", "raycaster": "objects: .clickable", "cursor": "fuse: false; rayOrigin: mouse;" }, { "default": () => renderTemplate` ${renderComponent($$result2, "a-entity", "a-entity", { "id": "animatedModel", "position": "0 0.5 -0.1", "rotation": "0 90 0", "scale": "7 7 14", "animation-mixer": "clip: *;loop: repeat", "gltf-model": "#celula-animal", "class": "clickable", "gesture-handler": "minScale: 0.25; maxScale: 10; rotationFactor: 0" })} ` })} ` })} ` })}`;
}, "C:/Users/Usuario/Documents/web-projects/kellogs/src/pages/trial.astro", void 0);

const $$file = "C:/Users/Usuario/Documents/web-projects/kellogs/src/pages/trial.astro";
const $$url = "/froot-loops-ar/trial";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Trial,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
