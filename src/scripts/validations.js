async function handleCheckSession() {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  let sessionId = params["session_id"];
  let cb_url = params["cb_url"];

  if (!sessionId) {
    window.location.href = cb_url || `/error`;
    return;
  }

  let endpoint = `http://localhost:3005/api/v1/auth/check_session?id=${sessionId}`;
  const req = await fetch(endpoint, {
    method: "GET",
  });

  if (!req.ok) {
    window.location.href = cb_url || `/error`;
    return;
  }

  console.log("Session is valid");
}

/* window.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname.includes("/ar/")) {
    handleCheckSession();
  }
}); */