import { useState, useEffect, useRef, ComponentType } from 'react';

import { getCoverURL, hitBottom } from '../utils';
import { LIST_STEP, ImageSuit } from '../../typings/interface';
import { ViewModal } from './view-modal';

import LazyLoad from 'react-lazyload';

interface ImageGridProps {
  images: ImageSuit[];
  Header?: ComponentType;
}

export const ImageGrid = ({ images, Header }: ImageGridProps) => {
  const [index, setIndex] = useState(2);
  const [shownImages, setShownImages] = useState(
    images.slice(0, LIST_STEP * (index - 1)),
  );
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<ImageSuit>({
    id: 0,
    name: '',
    count: 0,
    prefix: '',
    time: new Date(0),
  });

  const handleImageClick = (img: ImageSuit) => {
    setOpen(true);
    setData(img);
  };

  const onModalClose = () => {
    setOpen(false);
  };

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current!;

    const handler = () => {
      if (hitBottom(container) && images.length - (index - 1) * LIST_STEP > 0) {
        setIndex(index + 1);
        setShownImages(images.slice(0, LIST_STEP * index));
      }
    };

    container.addEventListener('scroll', handler);

    return () => {
      container.removeEventListener('scroll', handler);
    };
  }, [images, index]);

  return (
    <>
      <div className="scroll-container" ref={containerRef}>
        {Header && <Header />}
        <div className="image-grid">
          {shownImages.map((img) => (
            <LazyLoad
              key={img.id}
              offset={50}
              resize={true}
              overflow={true}
              once={true}
            >
              <img
                src={getCoverURL(img.id, img.prefix)}
                onClick={() => {
                  handleImageClick(img);
                }}
              />
            </LazyLoad>
          ))}
        </div>
      </div>

      <ViewModal isOpen={open} data={data} onClose={onModalClose} />
    </>
  );
};
