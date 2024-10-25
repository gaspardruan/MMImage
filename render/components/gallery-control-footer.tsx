import { memo } from 'react';
import { Icon } from '@blueprintjs/core';

interface GalleryControlFooterProps {
  onClickFullscreen: () => void;
  onClickCollect: () => void;
  onClickPlay: () => void;
}

const PlayIcon = memo(({ onClick }: { onClick: () => void }) => {
  console.log('render icon');
  return (
    <Icon className="control-play" onClick={onClick} icon="play" size={24} />
  );
});

const FullscreenIcon = memo(({ onClick }: { onClick: () => void }) => {
  console.log('render icon');
  return (
    <Icon
      className="control-fullscreen"
      onClick={onClick}
      icon="fullscreen"
      size={20}
    />
  );
});

const CollectIcon = memo(({ onClick }: { onClick: () => void }) => {
  console.log('render icon');
  return (
    <Icon
      className="control-collect"
      onClick={onClick}
      icon="star-empty"
      size={20}
    />
  );
});

const SettingIcon = memo(() => {
  console.log('render icon');
  return <Icon className="control-setting" icon="cog" size={20} />;
});

export const GalleryControlFooter = ({
  onClickFullscreen,
  onClickCollect,
  onClickPlay,
}: GalleryControlFooterProps) => {
  return (
    <div className="control-footer">
      <PlayIcon onClick={onClickPlay} />

      <div className="control-group">
        <FullscreenIcon onClick={onClickFullscreen} />

        <CollectIcon onClick={onClickCollect} />

        <SettingIcon />
      </div>
    </div>
  );
};
