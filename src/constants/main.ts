export const SCENE_ATTRIBUTES = {
  light: "defaultLightsEnabled: false",
  "vr-mode-ui": "enabled: false;",
  "loading-screen": "enabled: false;",
  renderer:
    "antialias: true; colorManagement: true; sortObjects: true; physicallyCorrectLights: true; maxCanvasWidth: 1920; maxCanvasHeight: 1920; logarithmicDepthBuffer: true;",
  arjs: "trackingMethod: best; sourceType: webcam; debugUIEnabled: false;sourceWidth:1280; sourceHeight:960; displayWidth: 1280; displayHeight: 960; patternRatio: 0.9",
  id: "scene",
  embedded: "",
  "xrextras-gesture-detector": "",
};

export const ENTITY_ATTRIBUTES = {
  scale: "10 10 10",
  "animation-mixer": "clip: Celula.rest; timeScale: 1",
  class: "clickable",
  "xrextras-pinch-scale": "min:0.5; max:10",
  "xrextras-one-finger-rotate": "factor: 4.5",
};
