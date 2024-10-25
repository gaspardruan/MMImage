import { GalleryControlFooter } from './gallery-control-footer';
import { GalleryControlHeader } from './gallery-control-header';

interface GalleryControlProps {
  count: number;
  getIndex: () => number;
  onClickBack: () => void;
  onClickFullscreen: () => void;
  onClickCollect: () => void;
  onClickPlay: () => void;
}

export const GalleryControl = ({
  count,
  getIndex,
  onClickBack,
  onClickFullscreen,
  onClickCollect,
  onClickPlay,
}: GalleryControlProps) => {
  return (
    <>
      <GalleryControlHeader
        getIndex={getIndex}
        count={count}
        onClickBack={onClickBack}
      />
      <GalleryControlFooter
        onClickCollect={onClickCollect}
        onClickFullscreen={onClickFullscreen}
        onClickPlay={onClickPlay}
      />
    </>
  );
};
