import React, { Component } from 'react';
import './Styles/styles.css'
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
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
    // perPege
    showModal: false,
    modalImg: null,
    imageDetails: null,
  }
  
  componentDidUpdate(prevProps, prevState) {
    const { fetchData } = this;
    const { search, page } = this.state;

    if (prevState.search !== search || prevState.page !== page) {
      fetchData();
    }
  }

  fetchData = async (pege,) => {
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

  setModalImg = imgObj => {
    this.setState({ modalImg: imgObj });
  };
  
  loadMore = () => {
    const {page} = this.state
    this.setState({page: page +1})
  }

  // showModal = ({ largeImageURL }) => {
  // this.setState({
  //   imageDetails: { largeImageURL },
  //   showModal: true,
  // })
  // }

  // closeModal = () => {
  //   this.setState({
  //     showModal: false,
  //     imageDetails: null,
  //   })
  // }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }))
  }

  render() {
    const { items, loading, error, showModal, modalImg, page } = this.state;
    const { searchImages, loadMore, toggleModal, setModalImg } = this;
    const shouldRenderLoadMoreButton = items.length > 0 && !loading

    return (
      <div className='App'>
        <Searchbar onSubmit={searchImages}/>
        <ImageGallery
          items={items}
          onClick={toggleModal}
          setImg={setModalImg}
          loading={loading}
          loadMore={loadMore}
          pege={page}
        />
        {error && <p>{error}</p>}
        {shouldRenderLoadMoreButton && <Button onClick={loadMore}>Load more</Button>}
        {/* <ModalWindow /> */}
        {showModal && (
          <ModalWindow
            onClick={toggleModal}
            children={<img src={modalImg.img} alt={modalImg.alt} />} >
        </ModalWindow>)}
      </div>
    )
  }
};


// {
//   showModal && (
//     <ModalWindow onClose={this.toggleModal}>
//       <FormicContact onSubmit={this.addContact} onClick={this.toggleModal} />
//     </ModalWindow>
//   )
// }