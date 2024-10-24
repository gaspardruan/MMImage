import { NonIdealState } from '@blueprintjs/core';
import { useImageState } from '../state/image';
import { ImageGrid } from './image-grid';

export const SectionCollection = () => {
  const { collection } = useImageState();

  return collection.length === 0 ? (
    <NonIdealState title="Your collection is empty" icon="inbox" />
  ) : (
    <ImageGrid images={collection} />
  );
};
