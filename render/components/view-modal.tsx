import { useCallback, useRef } from 'react';
import { Overlay2 } from '@blueprintjs/core';
import ImageGallery from 'react-image-gallery';
import { ImageSuit } from '../../typings/interface';

import { getImages } from '../utils';
import { GalleryControl } from './gallery-control';

interface ViewModalPropas {
  isOpen: boolean;
  data: ImageSuit;
  onClose: () => void;
}

export const ViewModal = ({ isOpen, data, onClose }: ViewModalPropas) => {
  const images = getImages(data);
  const galleryRef = useRef<ImageGallery>(null);

  const customControl = () => {
    return (
      <GalleryControl
        imageSuit={data}
        getIndex={getIndex}
        count={images.length}
        onClickBack={onClose}
        onClickPlay={handlePlayClick}
        onClickStop={handleStopClick}
      />
    );
  };

  const getIndex = () => {
    if (galleryRef.current) return galleryRef.current.getCurrentIndex();
    return 0;
  };

  const handlePlayClick = useCallback(() => {
    galleryRef.current!.play();
  }, []);

  const handleStopClick = () => {
    galleryRef.current!.pause();
  };

  return (
    <Overlay2
      isOpen={isOpen}
      transitionDuration={0}
      onClose={onClose}
      backdropClassName="backdrop-custom"
    >
      <div className="view-modal">
        <ImageGallery
          ref={galleryRef}
          items={images}
          thumbnailPosition="left"
          slideDuration={250}
          infinite={false}
          lazyLoad={true}
          showPlayButton={false}
          showFullscreenButton={false}
          renderCustomControls={customControl}
        />
      </div>
    </Overlay2>
  );
};
