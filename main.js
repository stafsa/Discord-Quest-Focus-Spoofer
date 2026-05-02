webpackChunkdiscord_app.push([
  [Math.random()],
  {},
  req => {
    for (const id in req.c) {
      try {
        const exp = req.c[id].exports;
        if (!exp) continue;

        for (const key in exp) {
          if (key === "WindowStore") {
            window.__ws = exp[key];
            console.log("FOUND WINDOWSTORE", exp[key]);
          }
        }
      } catch {}
    }
  }
]);
__ws.isFocused = () => true;
__ws.isAppFocused = () => true;
__ws.isVisible = () => true;
__ws.getFocusedWindowId = () => 1;
__ws.getLastFocusedWindowId = () => 1;

console.log("WindowStore patched.");
