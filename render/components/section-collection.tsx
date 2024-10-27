import { NonIdealState } from '@blueprintjs/core';
import { useImageState } from '../state/image';
import { ImageGrid } from './image-grid';

export const SectionCollection = () => {
  const { collection } = useImageState();

  return collection.size === 0 ? (
    <NonIdealState title="Your collection is empty" icon="inbox" />
  ) : (
    <ImageGrid images={Array.from(collection.values())} />
  );
};
