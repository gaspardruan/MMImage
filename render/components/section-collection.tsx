import { useImageState } from '../state/image';
import { ImageGrid } from './image-grid';

export const SectionCollection = () => {
  const { collection } = useImageState();

  return <ImageGrid images={collection} />;
};
