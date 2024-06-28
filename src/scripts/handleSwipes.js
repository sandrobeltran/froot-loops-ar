const swipeArea = document.getElementById("swipable-area");
let initialTouchY = null;

swipeArea.addEventListener("touchstart", function (event) {
  // Capture the initial touch position on Y axis
  initialTouchY = event.touches[0].clientY;
});

function handleSwipeUp() {
  swipeArea.parentElement.classList.add("panel-active");
  console.log("Swiped Up");
}

function handleSwipeDown() {
  swipeArea.parentElement.classList.remove("panel-active");
  console.log("Swiped Down");
}

swipeArea.addEventListener("touchend", function (event) {
  if (initialTouchY === null) return; // No swipe detected

  const finalTouchY = event.changedTouches[0].clientY;
  const swipeDistance = initialTouchY - finalTouchY;

  if (swipeDistance > 50) {
    // Adjust threshold for swipe sensitivity
    // Swipe Up detected!
    // Call your function here
    handleSwipeUp();
  } else if (swipeDistance < -50) {
    // Adjust threshold for swipe sensitivity
    // Swipe Down detected!
    // Call your function here
    handleSwipeDown();
  }

  // Reset initialTouchY for next swipe
  initialTouchY = null;
});
