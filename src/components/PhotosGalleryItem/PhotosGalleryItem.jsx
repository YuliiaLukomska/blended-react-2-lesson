import { GridItem } from '..';
import css from './PhotosGalleryItem.module.css';
export const PhotosGalleryItem = ({ alt, avg_color, src, modalOpen }) => {
  return (
    <GridItem>
      <div
        onClick={() => modalOpen(src.large, alt)}
        className={css.thumb}
        style={{ backgroundColor: avg_color, borderColor: avg_color }}
      >
        <img src={src.large} alt={alt} />
      </div>
    </GridItem>
  );
};
