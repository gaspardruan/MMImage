import { Section } from '../../typings/interface';
import { useNavigationStore } from '../state/navigation';

import { SectionBeauty } from './section-beauty';
import { SectionCollection } from './section-collection';
import { SectionExplore } from './section-explore';
import { SectionCredits } from './section-credits';

export const RightContent = () => {
  const { activeSection } = useNavigationStore();

  if (activeSection === Section.Explore) {
    return <SectionExplore />;
  }

  if (activeSection === Section.Beauty) {
    return <SectionBeauty />;
  }

  if (activeSection === Section.Collection) {
    return <SectionCollection />;
  }

  if (activeSection === Section.Credits) {
    return <SectionCredits />;
  }

  return null;
};
