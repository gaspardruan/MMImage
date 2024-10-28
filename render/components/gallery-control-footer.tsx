import { useCallback, memo, useState } from 'react';
import {
  Icon,
  Popover,
  PopoverInteractionKind,
  Slider,
} from '@blueprintjs/core';
import { useImageState } from '../state/image';
import { ImageSuit } from '../../typings/interface';
import { getId } from '../utils';
import { useControlState } from '../state/control';

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

const TimeIcon = memo(() => {
  console.log('render icon');
  return <Icon className="control-time" icon="time" size={20} />;
});

export const GalleryControlFooter = ({
  imageSuit,
  onClickPlay,
  onClickStop,
}: GalleryControlFooterProps) => {
  const [play, setPlay] = useState<boolean>(false);

  const { collection, like, dislike } = useImageState();

  const { interval, setInterval } = useControlState();

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

  const handleTimeChange = (value: number) => {
    setInterval(value);
  };

  const timeSlider = () => {
    return (
      <div className="control-ts-wrapper">
        {interval.toFixed(1)}s
        <Slider
          min={0.5}
          max={5}
          stepSize={0.1}
          vertical
          value={interval}
          onChange={handleTimeChange}
          labelValues={[5]}
          labelRenderer={false}
          className="control-ts"
        />
      </div>
    );
  };

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
        <Popover
          content={timeSlider()}
          placement="top"
          minimal
          interactionKind={PopoverInteractionKind.HOVER}
        >
          <TimeIcon />
        </Popover>
      </div>
    </div>
  );
};
