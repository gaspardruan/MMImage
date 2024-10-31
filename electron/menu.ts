import { Menu, MenuItemConstructorOptions, shell } from 'electron';

export const setupMenu = () => {
  const menu: MenuItemConstructorOptions[] = [
    {
      label: 'View',
      submenu: [
        {
          role: 'reload',
        },
        {
          role: 'togglefullscreen',
        },
        {
          type: 'separator',
        },

        {
          role: 'toggleDevTools',
        },
      ],
    },
    {
      label: 'More',
      submenu: [
        {
          label: 'About',
          role: 'about',
        },
        {
          label: 'Learn More',
          click: async () => {
            await shell.openExternal('https://github.com/gaspardruan/MMImage');
          },
        },
      ],
    },
  ];

  Menu.setApplicationMenu(Menu.buildFromTemplate(menu));
};
