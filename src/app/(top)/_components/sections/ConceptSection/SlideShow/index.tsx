import { slideImages } from './data';
import { breakpoints } from '@/styles/themes';
import styles from './SlideShow.module.css';

const SlideShow = () => {
  return (
    <div className='relative overflow-hidden'>
      <div className={styles.carouselContainer}>
        <div className={styles.primaryTrack}>
          {slideImages.map((image, index) => (
            <picture key={`primary-slide-${index}`} className={styles.carouselItem}>
              <source media={`(min-width: ${breakpoints.pc}px)`} srcSet={image.pc.src} />
              <source media={`(min-width: ${breakpoints.tb}px) and (max-width: ${breakpoints.pc - 1}px)`} srcSet={image.tb.src} />
              <source media={`(max-width: ${breakpoints.tb - 1}px)`} srcSet={image.sp.src} />
              <img
                src={image.pc.src}
                alt="carousel item"
                className="h-full w-auto object-cover"
                loading='lazy'
              />
            </picture>
          ))}
        </div>
        <div className={styles.secondaryTrack}>
          {slideImages.map((image, index) => (
            <picture key={`secondary-slide-${index}`} className={styles.carouselItem}>
              <source media={`(min-width: ${breakpoints.pc}px)`} srcSet={image.pc.src} />
              <source media={`(min-width: ${breakpoints.tb}px) and (max-width: ${breakpoints.pc - 1}px)`} srcSet={image.tb.src} />
              <source media={`(max-width: ${breakpoints.tb - 1}px)`} srcSet={image.sp.src} />
              <img
                src={image.pc.src}
                alt="carousel item"
                className="h-full w-auto object-cover"
                loading='lazy'
              />
            </picture>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlideShow;
