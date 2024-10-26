import { GalleryControlFooter } from './gallery-control-footer';
import { GalleryControlHeader } from './gallery-control-header';

interface GalleryControlProps {
  count: number;
  getIndex: () => number;
  onClickBack: () => void;
  onClickCollect: () => void;
  onClickPlay: () => void;
  onClickStop: () => void;
}

export const GalleryControl = ({
  count,
  getIndex,
  onClickBack,
  onClickCollect,
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
        onClickCollect={onClickCollect}
        onClickPlay={onClickPlay}
        onClickStop={onClickStop}
      />
    </>
  );
};
