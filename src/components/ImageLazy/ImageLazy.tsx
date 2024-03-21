import React, {useState} from "react";
import styles from './image-lazy.module.scss';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
}

const ImageLazy: React.FC<ImageProps> = (props) => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const handleImageLoad = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
        setIsLoaded(true);
    };
    return (
        <figure className={styles.imageLazy}>
            <div className={isLoaded ? styles.imageLazyBlurLoaded : styles.imageLazyBlur}></div>
            <img className={`${styles.imageLazyImg} ${isLoaded ? styles.imageLazyImgLoaded : ''}`} onLoad={handleImageLoad} {...props} />
        </figure>
    )
}
export default ImageLazy;
