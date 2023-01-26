import React, { Component } from 'react';
import './Styles/styles.css'
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
// import ModalWindow from './Modal/ModalWindow';
import Button from './Button/Button';

export class App extends Component {


  render () {
    return (
      <div className='App'>
        <Searchbar />
        <ImageGallery />
        <ImageGalleryItem />
        {/* <ModalWindow /> */}
        <Button/>
      </div>
    )
  }
};
