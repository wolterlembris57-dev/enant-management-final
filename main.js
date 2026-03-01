const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
    const win = new BrowserWindow({
        width: 900,
        height: 700
    });

    // open your tenant app
    win.loadFile(path.join(__dirname, "public", "index.html"));
}
const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
    const win = new BrowserWindow({
        width: 1000,
        height: 750
    });

    win.loadFile(path.join(__dirname, "public", "index.html"));
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
});
app.whenReady().then(createWindow);