import { IconName, MenuItem, Icon } from '@blueprintjs/core';
import { Section } from '../../typings/interface';
import { useNavigationStore } from '../state/navigation';
import { useGlobalStore } from '../state/global';
import { DefaultThemes } from '../../typings/themes-defaults';

const menuGroupMain = [Section.Explore, Section.Beauty, Section.Collection];

export const LeftPanel = () => {
  const { activeSection, setSection } = useNavigationStore();
  const { theme, setTheme } = useGlobalStore();

  const getIconForSection = (name: Section): IconName => {
    switch (name) {
      case Section.Explore:
        return 'drive-time';
      case Section.Beauty:
        return 'team';
      case Section.Collection:
        return 'star';
      default:
        return 'cog';
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

  return (
    <>
      <div className="left-panel-top">
        <ul>{renderMenuItem(menuGroupMain)}</ul>
      </div>
      <div className="left-panel-bottom">
        {theme === DefaultThemes.DARK ? (
          <Icon icon="flash" onClick={() => setTheme(DefaultThemes.LIGHT)} />
        ) : (
          <Icon icon="moon" onClick={() => setTheme(DefaultThemes.DARK)} />
        )}
      </div>
    </>
  );
};
