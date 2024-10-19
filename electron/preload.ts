import { ipcRenderer, contextBridge } from 'electron';

import { IpcEvents } from './../typings/ipc-events';
import { ImageAndBeauty } from '../typings/interface';

const electronHandler = {
  sayHello(msg: string) {
    ipcRenderer.send(IpcEvents.SAY_HELLO, msg);
  },
  setNativeTheme(theme: 'light' | 'dark' | 'system') {
    ipcRenderer.send(IpcEvents.SET_NATIVE_THEME, theme);
  },
  getImageData(): Promise<ImageAndBeauty> {
    return ipcRenderer.invoke(IpcEvents.GET_IMAGE_DATA);
  },
};

contextBridge.exposeInMainWorld('MMImage', electronHandler);

export type ElectronHandler = typeof electronHandler;
