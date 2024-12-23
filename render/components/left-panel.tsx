import { IconName, MenuItem } from '@blueprintjs/core';
import { Section } from '../../typings/interface';
import { useNavigationStore } from '../state/navigation';

const menuGroupMain = [Section.Explore, Section.Beauty, Section.Collection];

export const LeftPanel = () => {
  const { activeSection, setSection } = useNavigationStore();

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
      <ul>{renderMenuItem(menuGroupMain)}</ul>
    </>
  );
};
