import React from "react";
import '../Styles/styles.css'

const ImageGalleryItem = ({ onClick, item, setImg }) => {
    const {
        id,
        largeImageURL,
        webformatURL,
        tags,
    } = item;
    return (
        <li
            className="ImageGalleryItem"
            onClick={() => {
                setImg({
                    img: largeImageURL,
                    alt: tags,
                });
                onClick();
            }}
            key={id}
        >
            <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" loading="lazy" />
        </li>
    )
};

export default ImageGalleryItem;