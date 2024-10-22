import { useImageState } from '../state/image';
import { ImageGrid } from './image-grid';

export const SectionExplore = () => {
  const { latest: images } = useImageState();

  return <ImageGrid images={images} />;
};
