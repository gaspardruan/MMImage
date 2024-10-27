import { useCallback, memo, useState } from 'react';
import { Icon } from '@blueprintjs/core';
import { useImageState } from '../state/image';
import { ImageSuit } from '../../typings/interface';
import { getId } from '../utils';

interface GalleryControlFooterProps {
  imageSuit: ImageSuit;
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

const CollectedIcon = memo(({ onClick }: { onClick: () => void }) => {
  console.log('render icon');
  return (
    <Icon
      className="control-collected"
      onClick={onClick}
      icon="star"
      size={20}
    />
  );
});

const SettingIcon = memo(() => {
  console.log('render icon');
  return <Icon className="control-setting" icon="cog" size={20} />;
});

export const GalleryControlFooter = ({
  imageSuit,
  onClickPlay,
  onClickStop,
}: GalleryControlFooterProps) => {
  const [play, setPlay] = useState<boolean>(false);

  const { collection, like, dislike } = useImageState();

  const liked = collection.has(getId(imageSuit));

  const handleStopClick = useCallback(() => {
    onClickStop();
    setPlay(false);
  }, [onClickStop]);

  const handlePlayClick = useCallback(() => {
    onClickPlay();
    setPlay(true);
  }, [onClickPlay]);

  const handleClickCollect = useCallback(() => {
    like(imageSuit);
  }, [like, imageSuit]);

  const handleClickCollected = useCallback(() => {
    dislike(imageSuit);
  }, [dislike, imageSuit]);

  return (
    <div className="control-footer">
      {play ? (
        <StopIcon onClick={handleStopClick} />
      ) : (
        <PlayIcon onClick={handlePlayClick} />
      )}

      <div className="control-group">
        {liked ? (
          <CollectedIcon onClick={handleClickCollected} />
        ) : (
          <CollectIcon onClick={handleClickCollect} />
        )}

        <SettingIcon />
      </div>
    </div>
  );
};
