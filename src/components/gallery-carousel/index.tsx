import { Button, Dialog } from '@mui/material';
import Carousel from 'react-gallery-carousel';
import style from './gallery-carousel.module.css'
import { FaAngleLeft } from 'react-icons/fa';

interface GalleryCarouselProps {
  src: string[];
  index?: number;
  open?: boolean;
  onClose?: () => void
}

export const GalleryCarousel = ({ src, open = false, onClose, index = 0 }: GalleryCarouselProps) => {
  const close = () => onClose && onClose()
  const settings = {
    canAutoPlay: false,
    // hasSizeButton: false,
    // hasIndexBoard: false
  };
  return (
    <Dialog
      fullScreen
      open={open}
    >
      <div className={style.head}>
        <Button onClick={close} size='small' variant='text' >
          <FaAngleLeft color='var(--white)' size={16} />
        </Button>
      </div>
      <Carousel
        index={index ?? 0}
        {...settings} objectFit="contain"
        images={src.map(img_url => { return { src: img_url } })}
      />
    </Dialog>
  )
}