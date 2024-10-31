import { BrowserWindow, shell } from 'electron';
import path from 'path';
import { VITE_DEV_SERVER_URL, RENDERER_DIST, __dirname, IS_DEV } from './env';

function getMainWindowOptions(): Electron.BrowserWindowConstructorOptions {
  return {
    width: 1200,
    height: 900,
    minHeight: 600,
    minWidth: 600,
    backgroundColor: '#1d2427',
    icon: path.join(process.env.VITE_PUBLIC, 'icon.ico'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.mjs'),
    },
  };
}

export function createWindow() {
  let mainWindow: BrowserWindow | null;
  mainWindow = new BrowserWindow(getMainWindowOptions());

  if (VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(VITE_DEV_SERVER_URL);
  } else {
    // win.loadFile('dist/index.html')
    mainWindow.loadFile(path.join(RENDERER_DIST, 'index.html'));
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  if (!IS_DEV) mainWindow.setMenuBarVisibility(false);

  // Open urls in the user's browser
  mainWindow.webContents.setWindowOpenHandler((edata) => {
    shell.openExternal(edata.url);
    return { action: 'deny' };
  });
}
