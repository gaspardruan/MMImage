import { useState, useEffect, useRef } from 'react';

import { useImageState } from '../state/image';
import { getCoverURL, hitBottom } from '../utils';
import { LIST_STEP, ImageSuit } from '../../typings/interface';
import { ViewModal } from './view-modal';

export const SectionExplore = () => {
  const { latest: images } = useImageState();

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
    window.history.pushState(null, '', window.location.href);
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
        <div className="image-grid">
          {shownImages.map((img) => (
            <img
              key={img.id}
              src={getCoverURL(img.id, img.prefix)}
              onClick={() => {
                handleImageClick(img);
              }}
            />
          ))}
        </div>
      </div>

      <ViewModal isOpen={open} data={data} onClose={onModalClose} />
    </>
  );
};
