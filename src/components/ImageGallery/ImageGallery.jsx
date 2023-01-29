import React from "react";
import '../Styles/styles.css'
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';


const ImageGallery = ({items}) => {
    return (
        <ul className="ImageGallery">
            {items.map(({ id, webformatURL, largeImageURL }) => (
                <ImageGalleryItem
                    key={id}
                    id={id}
                    src={webformatURL}
                    bigImage={largeImageURL}
                />
                ))}
        </ul>
    )

};

export default ImageGallery;