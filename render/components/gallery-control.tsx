import { ImageSuit } from '../../typings/interface';
import { GalleryControlFooter } from './gallery-control-footer';
import { GalleryControlHeader } from './gallery-control-header';

interface GalleryControlProps {
  count: number;
  imageSuit: ImageSuit;
  getIndex: () => number;
  onClickBack: () => void;
  onClickPlay: () => void;
  onClickStop: () => void;
}

export const GalleryControl = ({
  count,
  imageSuit,
  getIndex,
  onClickBack,
  onClickPlay,
  onClickStop,
}: GalleryControlProps) => {
  return (
    <>
      <GalleryControlHeader
        getIndex={getIndex}
        count={count}
        onClickBack={onClickBack}
      />
      <GalleryControlFooter
        imageSuit={imageSuit}
        onClickPlay={onClickPlay}
        onClickStop={onClickStop}
      />
    </>
  );
};
