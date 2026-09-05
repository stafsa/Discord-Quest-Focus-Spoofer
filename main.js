const ws = window.__focusCandidate;

if (!ws) {
    console.error("Couldn't find the focus store.");
} else {
    window.__originalFocusMethods ??= {
        isFocused: ws.isFocused,
        isAppFocused: ws.isAppFocused,
        isVisible: ws.isVisible,
        getFocusedWindowId: ws.getFocusedWindowId,
        getLastFocusedWindowId: ws.getLastFocusedWindowId
    };

    ws.isFocused = () => true;
    ws.isAppFocused = () => true;
    ws.isVisible = () => true;
    ws.getFocusedWindowId = () => "window-1";
    ws.getLastFocusedWindowId = () => "window-1";
    console.log("Patched the focus store.");
}
