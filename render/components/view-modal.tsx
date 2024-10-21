import { Overlay2 } from '@blueprintjs/core';
import ImageGallery from 'react-image-gallery';
import { ImageSuit } from '../../typings/interface';
import { getImages } from '../utils';

interface ViewModalPropas {
  isOpen: boolean;
  data: ImageSuit;
  onClose: () => void;
}

export const ViewModal = ({ isOpen, data, onClose }: ViewModalPropas) => {
  const images = getImages(data);

  return (
    <Overlay2
      isOpen={isOpen}
      transitionDuration={0}
      onClose={onClose}
      backdropClassName="backdrop-custom"
    >
      <div className="view-modal">
        <ImageGallery
          items={images}
          thumbnailPosition="left"
          showIndex={true}
          slideDuration={250}
          infinite={false}
          lazyLoad={true}
        />
      </div>
    </Overlay2>
  );
};
