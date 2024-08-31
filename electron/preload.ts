import { IpcEvents } from './../typings/ipc-events';
import { ipcRenderer, contextBridge } from 'electron';

const electronHandler = {
  sayHello(msg: string) {
    ipcRenderer.send(IpcEvents.SAY_HELLO, msg);
  },
  setNativeTheme(theme: 'light' | 'dark' | 'system') {
    ipcRenderer.send(IpcEvents.SET_NATIVE_THEME, theme);
  },
};

contextBridge.exposeInMainWorld('MMImage', electronHandler);

export type ElectronHandler = typeof electronHandler;
