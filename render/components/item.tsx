import { memo } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

interface ItemProps {
  original: string;
}

export const Item = memo(({ original }: ItemProps) => {
  return (
    <TransformWrapper>
      <TransformComponent>
        <img className="image-gallery-image" src={original} />
      </TransformComponent>
    </TransformWrapper>
  );
});
