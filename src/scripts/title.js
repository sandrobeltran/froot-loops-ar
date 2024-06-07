function waitForElm(selector) {
  console.log(`Waiting for ${selector}`);
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver((mutations) => {
      if (document.querySelector(selector)) {
        observer.disconnect();
        resolve(document.querySelector(selector));
      }
    });

    // If you get "parameter 1 is not of type 'Node'" error, see https://stackoverflow.com/a/77855838/492336
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}

const goBackAnchor = document.getElementById("goBackAnchor");

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

goBackAnchor.href = params["cb_url"] || "#";

window.addEventListener("DOMContentLoaded", async () => {
  const video = await waitForElm("#arjs-video");
  const scene = document.querySelector("a-scene");
  const canvas = await waitForElm(".a-canvas");

  video.style.display = "unset !important";
  video.style.width = `${scene.clientWidth}px !important`;
  video.style.height = `${scene.clientHeight}px !important`;

  canvas.style.width = `${scene.clientHeight}px`;

  scene.appendChild(video);
});
