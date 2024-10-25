import { Icon } from '@blueprintjs/core';
import { memo } from 'react';

interface GalleryControlHeaderProps {
  count: number;
  getIndex: () => number;
  onClickBack: () => void;
}

const BackIcon = memo(({ onClick }: { onClick: () => void }) => {
  return (
    <Icon className="control-back" onClick={onClick} icon="cross" size={28} />
  );
});

export const GalleryControlHeader = ({
  count,
  getIndex,
  onClickBack,
}: GalleryControlHeaderProps) => {
  return (
    <>
      <div className="control-index">
        {getIndex() + 1} / {count}
      </div>
      <div className="control-back-wrapper">
        <BackIcon onClick={onClickBack} />
      </div>
    </>
  );
};
