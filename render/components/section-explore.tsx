import { useState, useEffect, useRef } from 'react';

import { useImageState } from '../state/image';
import { getCoverURL, hitBottom } from '../utils';
import { LIST_STEP } from '../../typings/interface';

export const SectionExplore = () => {
  const { latest: images } = useImageState();

  const [index, setIndex] = useState(2);
  const [shownImages, setShownImages] = useState(
    images.slice(0, LIST_STEP * (index - 1)),
  );

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
    <div className="scroll-container" ref={containerRef}>
      <div className="image-grid">
        {shownImages.map((img) => (
          <img key={img.id} src={getCoverURL(img.id, img.prefix)} />
        ))}
      </div>
    </div>
  );
};
