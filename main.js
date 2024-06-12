const path = require('path');
const {app, ipcMain, BrowserWindow, Menu, Tray} = require('electron');

Menu.setApplicationMenu(false);

function start() {
    const mainWindow = new BrowserWindow({
        title: "Scheduler",
        height: 850,
        width: 1150,
        webPreferences: {
            preload: path.join(__dirname, "preload.js")
        }
    });

    mainWindow.loadFile('renderer/index.html');
};

function openEditor() {
    const mainWindow = new BrowserWindow({
        title: "Schedul Editor",
        height: 700,
        width: 1200,
        webPreferences: {
            preload: path.join(__dirname, "preload.js")
        }
    });

    mainWindow.loadFile('renderer/editor.html');
};

app.whenReady().then(() => {
    start();
    let tray;
    tray = new Tray(path.join(__dirname, "img", "trayIcon.ico"));
    tray.setToolTip('Scheduler');
    let trayTemplate = [
        {
            label: "Open calender",
            click: () => {
                start()
            }
        },
        {
            label: "Open editor",
            click: () => {
                openEditor()
            }
        },
        {
            label: "Close app",
            click: () => {
                app.quit();
            }
        }
    ]

    tray.setContextMenu(Menu.buildFromTemplate(trayTemplate));
    
    console.log('App ready');
});

app.on('window-all-closed', () => {
    app.quit();
});


ipcMain.on("openEditor", () => {
    openEditor();
})