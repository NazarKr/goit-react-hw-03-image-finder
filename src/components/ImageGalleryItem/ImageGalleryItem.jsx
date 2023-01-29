import React from "react";
import '../Styles/styles.css'

const ImageGalleryItem = ({ id, src, bigImage }) => {
    return (
        <li className="ImageGalleryItem" id={id}>
            <img src={src} alt={bigImage} className="ImageGalleryItem-image"/>
        </li>
    )
};

export default ImageGalleryItem;