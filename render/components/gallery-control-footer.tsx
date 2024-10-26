import { useCallback, memo, useState } from 'react';
import { Icon } from '@blueprintjs/core';

interface GalleryControlFooterProps {
  onClickCollect: () => void;
  onClickPlay: () => void;
  onClickStop: () => void;
}

const PlayIcon = memo(({ onClick }: { onClick: () => void }) => {
  console.log('render icon');
  return (
    <Icon className="control-play" onClick={onClick} icon="play" size={24} />
  );
});

const StopIcon = memo(({ onClick }: { onClick: () => void }) => {
  console.log('render icon');
  return (
    <Icon className="control-stop" onClick={onClick} icon="pause" size={24} />
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
  onClickCollect,
  onClickPlay,
  onClickStop,
}: GalleryControlFooterProps) => {
  const [play, setPlay] = useState<boolean>(false);

  const handleStopClick = useCallback(() => {
    onClickStop();
    setPlay(false);
  }, [onClickStop]);

  const handlePlayClick = useCallback(() => {
    onClickPlay();
    setPlay(true);
  }, [onClickPlay]);

  return (
    <div className="control-footer">
      {play ? (
        <StopIcon onClick={handleStopClick} />
      ) : (
        <PlayIcon onClick={handlePlayClick} />
      )}

      <div className="control-group">
        <CollectIcon onClick={onClickCollect} />

        <SettingIcon />
      </div>
    </div>
  );
};
