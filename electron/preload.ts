import { IpcEvents } from './../typings/ipc-events';
import { ipcRenderer, contextBridge } from 'electron';

const electronHandler = {
  sayHello(msg: string) {
    ipcRenderer.send(IpcEvents.SAY_HELLO, msg);
  },
};

contextBridge.exposeInMainWorld('MMImage', electronHandler);
