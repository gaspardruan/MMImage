import { Menu, MenuItemConstructorOptions } from 'electron';

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
  ];

  Menu.setApplicationMenu(Menu.buildFromTemplate(menu));
};
