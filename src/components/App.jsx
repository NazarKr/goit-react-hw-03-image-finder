import React, { Component } from 'react';
import './Styles/styles.css'
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import ModalWindow from './Modal/ModalWindow';
import Button from './Button/Button';
import { fetchImages } from '../components/Servises/images-api'

export class App extends Component {
  state = {
    search: '',
    items: [],
    loading: false,
    error: null,
    page: 1,
    showModal: false,
    imageDetails: null,
  }
  
  componentDidUpdate(prevProps, prevState) {
    const { search, page } = this.state;
    if (prevState.search !== search || prevState.page !== page) {
      this.fetchImages();
    }
  }

  async fetchImages() {
    try {
      this.setState({ loading: true });
      const { search, page } = this.state;
      const { hits } = await fetchImages(search, page);
      this.setState(({ items }) => ({
        items: [...items, ...hits]
      }))
    }
    catch (error) {
      this.setState({error: error.massage})
    }
    finally {
      this.setState({loading:false})
    }
  }

  searchImages = ({ search }) => {
    this.setState({ search, items: [], page: 1 });
  }
  
  loadMore = () => {
    this.setState(({page}) => ({page: page +1}))
  }

  showModal = ({ largeImageURL }) => {
  this.setState({
    imageDetails: { largeImageURL },
    showModal: true,
  })
  }

  closeModal = () => {
    this.setState({
      showModal: false,
      imageDetails: null,
    })
  }

  render() {
    const { items, loading, error, showModal, imageDetails } = this.state;
    const { searchImages, loadMore, closeModal } = this;

    return (
      <div className='App'>
        <Searchbar onSubmit={searchImages}/>
        <ImageGallery items={items} />
        {loading && <p>...Loading...but you must CHANGE this component</p>}
        {error && <p>{error}</p>}
        {Boolean(items.length) && <Button onClick={loadMore}>Load more</Button>}
        {/* <ModalWindow /> */}
        {showModal && <ModalWindow close={closeModal}>
          <ImageGalleryItem {...imageDetails} />
        </ModalWindow>}
      </div>
    )
  }
};
