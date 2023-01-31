import React from "react";
import '../Styles/styles.css'
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Button from '../Button/Button';


const ImageGallery = ({ onClick, setImg, items, loadMore, loading }) => {
    const shouldRenderLoadMoreButton = items.length > 0 && !loading;

    return (
        <>
        <ul className="ImageGallery">
            {items.map( item  => {
                const { id } = item;
                return (
                    <ImageGalleryItem
                        onClick={onClick}
                        setImg={setImg}
                        key={id}
                        item={item}
                    />
                );
            })}
            </ul>

        {shouldRenderLoadMoreButton && <Button onClick={loadMore}>Load more</Button>}
        </>
    )

};

export default ImageGallery;

// { loading && <p>...Loading...but you must CHANGE this component</p> }
