import { useEffect } from 'react';

import { getTheme } from './theme';
import { useGlobalStore } from './state/global';
import { useImageState } from './state/image';

import './less/root.less';
import { Divider } from '@blueprintjs/core';
import { LeftPanel } from './components/left-panel';
import { RightPanel } from './components/right-content';

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

const isLaunchedInOneDay = (time1: number, time2: number): boolean => {
  const oneDay = 24 * 60 * 60 * 1000;
  const diff = Math.abs(time1 - time2);
  return diff <= oneDay;
};

const App = () => {
  const { theme, isUsingSystemTheme } = useGlobalStore();
  loadTheme(theme, isUsingSystemTheme);

  const { lastUpdateTime, setData, setLastUpdateTime } = useImageState();

  useEffect(() => {
    if (!isLaunchedInOneDay(lastUpdateTime, new Date().getTime())) {
      window.MMImage.getImageData().then((res) => {
        setData(res.latest, res.beauty);
        setLastUpdateTime(new Date().getTime());
      });
    }
  }, [lastUpdateTime, setData, setLastUpdateTime]);

  return (
    <div className="container">
      <div className="left-panel">
        <LeftPanel />
      </div>
      <Divider />
      <div className="right-content">
        <RightPanel />
      </div>
    </div>
  );
};

export default App;
