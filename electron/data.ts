import { ipcMain, net } from 'electron';
import { IpcEvents } from '../typings/ipc-events';

const beautyURL =
  'https://gist.githubusercontent.com/gaspardruan/a6eca088981a25d9ea61ec50cf54b129/raw/beauty.json';
const latestURL =
  'https://gist.githubusercontent.com/gaspardruan/a6eca088981a25d9ea61ec50cf54b129/raw/latest.json';

export function setupData() {
  ipcMain.handle(IpcEvents.GET_IMAGE_DATA, async () => {
    const beautyResponse = await net.fetch(beautyURL);
    const latestResponse = await net.fetch(latestURL);

    if (beautyResponse.ok && latestResponse.ok) {
      const beautyJSON = await beautyResponse.json();
      const latestJSON = await latestResponse.json();
      return { latest: latestJSON.data, beauty: beautyJSON.data };
    }

    console.warn(
      `Could not fetch the image data from ${beautyURL} and ${latestURL}`,
    );
    return {};
  });
}
