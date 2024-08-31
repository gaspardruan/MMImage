import { app, BrowserWindow, ipcMain, nativeTheme } from 'electron';
import { createWindow } from './window';
import { IpcEvents } from '../typings/ipc-events';

async function onReady() {
  setupNativeTheme();

  createWindow();
}

app.whenReady().then(onReady);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

function isNativeThemeSource(
  val: unknown,
): val is typeof nativeTheme.themeSource {
  return typeof val === 'string' && ['dark', 'light', 'system'].includes(val);
}

/**
 * Handle theme changes.
 */
function setupNativeTheme() {
  ipcMain.on(IpcEvents.SET_NATIVE_THEME, (_, source: string) => {
    if (isNativeThemeSource(source)) {
      nativeTheme.themeSource = source;
    }
  });
}
