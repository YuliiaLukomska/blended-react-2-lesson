import { Grid, PhotosGalleryItem } from '..';

export const PhotosGallery = ({ images, modalOpen }) => {
  return (
    <Grid>
      {images.map(({ id, alt, avg_color, src }) => (
        <PhotosGalleryItem
          key={id}
          alt={alt}
          avg_color={avg_color}
          src={src}
          modalOpen={modalOpen}
        />
      ))}
    </Grid>
  );
};
