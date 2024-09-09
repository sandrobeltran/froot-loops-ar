import { c as createAstro, a as createComponent, r as renderTemplate, b as renderSlot, d as renderHead, e as addAttribute } from './astro/server_dMsHt0vV.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                      */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://sandrobeltran.github.io");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><title>", '</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"><script src="https://aframe.io/releases/1.0.4/aframe.min.js">\n      import { createLanguageService } from "typescript";\n    <\/script><script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"><\/script><!-- IMAGE BASED --><!-- <script\n      is:inline\n      src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar-nft.js"\n    ><\/script> --><script src="https://raw.githack.com/donmccurdy/aframe-extras/master/dist/aframe-extras.loaders.min.js"><\/script><script src="https://raw.githack.com/AR-js-org/studio-backend/master/src/modules/marker/tools/gesture-detector.js"><\/script><script src="https://raw.githack.com/AR-js-org/studio-backend/master/src/modules/marker/tools/gesture-handler.js"><\/script><script src="//cdn.8thwall.com/web/xrextras/xrextras.js"><\/script>', "</head> <body> <!-- <RotationTutorial /> --> ", " </body></html>"])), addAttribute(Astro2.generator, "content"), title, renderHead(), renderSlot($$result, $$slots["default"]));
}, "C:/Users/Usuario/Documents/web-projects/kellogs/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
