import { app, BrowserWindow, ipcMain } from 'electron';
import { createWindow } from './window';
import { IpcEvents } from '../typings/ipc-events';

async function onReady() {
  createWindow();
  ipcMain.on(IpcEvents.SAY_HELLO, (_, msg) => {
    console.log('Got msg from render: ' + msg);
  });
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
