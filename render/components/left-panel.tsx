import { MenuItem, Icon, MaybeElement, Tooltip } from '@blueprintjs/core';
import { Section } from '../../typings/interface';
import { useNavigationStore } from '../state/navigation';
import { useGlobalStore } from '../state/global';
import { DefaultThemes } from '../../typings/themes-defaults';
import { useState } from 'react';
import { HelpPanel } from './help-panel';

const menuGroupMain = [Section.Explore, Section.Beauty, Section.Collection];

export const LeftPanel = () => {
  const { activeSection, setSection } = useNavigationStore();
  const { theme, setTheme } = useGlobalStore();

  const [isOpen, setIsOpen] = useState(false);

  const getIconForSection = (name: Section): MaybeElement => {
    switch (name) {
      case Section.Explore:
        return <Icon icon="search-around" size={20} />;
      case Section.Beauty:
        return <Icon icon="team" size={20} />;
      case Section.Collection:
        return <Icon icon="star" size={20} />;
      default:
        return <Icon icon="cog" size={20} />;
    }
  };

  const renderMenuItem = (menuGroup: Section[]) => {
    return menuGroup.map((section) => {
      const isSelected = activeSection === section;
      return (
        <MenuItem
          onClick={() => setSection(section)}
          active={isSelected}
          key={section}
          // id={`menu-${section}`}
          text={section}
          icon={getIconForSection(section)}
        />
      );
    });
  };

  const openHomePage = () => {
    window.open('https://github.com/gaspardruan/MMImage', '_blank');
  };

  return (
    <>
      <div className="left-panel-top">
        <ul>{renderMenuItem(menuGroupMain)}</ul>
      </div>
      <div className="left-panel-bottom">
        <Tooltip content="主题" className="icon-item">
          {theme === DefaultThemes.DARK ? (
            <Icon
              icon="flash"
              size={20}
              onClick={() => setTheme(DefaultThemes.LIGHT)}
            />
          ) : (
            <Icon
              icon="moon"
              size={20}
              onClick={() => setTheme(DefaultThemes.DARK)}
            />
          )}
        </Tooltip>

        <Tooltip content="快捷键" className="icon-item">
          <Icon icon="help" size={20} onClick={() => setIsOpen(true)} />
        </Tooltip>
        <Tooltip content="Github主页" className="icon-item">
          <Icon icon="link" size={20} onClick={openHomePage} />
        </Tooltip>
      </div>
      <HelpPanel isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};
