import { ipcRenderer, contextBridge } from 'electron';
import { domReady, loadingControl } from './loading';

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

const { appendLoading, removeLoading } = loadingControl();
domReady().then(appendLoading);

window.onmessage = (ev) => {
  ev.data.payload === 'removeLoading' && removeLoading();
};

export type ElectronHandler = typeof electronHandler;
