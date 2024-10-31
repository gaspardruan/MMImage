import path from 'path';

import { app } from 'electron';

export const setupAboutPanel = () => {
  app.setAboutPanelOptions({
    applicationName: 'MMImage',
    applicationVersion: app.getVersion(),
    authors: ['GaspardRuan'],
    credits: 'https://github.com/gaspardruan/MMImage',
    website: 'https://github.com/gaspardruan/MMImage',
    iconPath: path.join(process.env.VITE_PUBLIC, '32x32.png'),
  });
};
