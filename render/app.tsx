import { getTheme } from './theme';
import { useGlobalStore } from './state/global';
import { DefaultThemes } from '../typings/themes-defaults';
import { Button } from '@blueprintjs/core';

import './less/root.less';

const loadTheme = (_theme: string, isUsingSystemTheme: boolean) => {
  const tag: HTMLStyleElement | null = document.querySelector(
    'style#mmimage-theme',
  );
  const theme = getTheme(_theme);

  if (tag && theme.css) {
    tag.innerHTML = theme.css;
  }

  if (theme.isDark || theme.name.includes('dark')) {
    document.body.classList.add('bp5-dark');
    if (isUsingSystemTheme) {
      window.MMImage.setNativeTheme('dark');
    }
  } else {
    document.body.classList.remove('bp5-dark');
    if (isUsingSystemTheme) {
      window.MMImage.setNativeTheme('light');
    }
  }
};

const App = () => {
  const { theme, isUsingSystemTheme, setTheme } = useGlobalStore();
  console.log(theme, isUsingSystemTheme);
  loadTheme(theme, isUsingSystemTheme);

  console.log(localStorage.getItem('global-storage'));

  const toggleTheme = () => {
    if (theme === DefaultThemes.DARK) {
      setTheme(DefaultThemes.LIGHT);
    } else {
      setTheme(DefaultThemes.DARK);
    }
  };

  return (
    <div className="container">
      <h1>Hello, World!</h1>
    </div>
  );
};

export default App;
