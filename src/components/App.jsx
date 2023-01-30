import React, { Component } from 'react';
import './Styles/styles.css'
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ModalWindow from './Modal/ModalWindow';
import Spinner from './Loader/Spinner';
import { fetchImages } from '../components/Servises/images-api'

export class App extends Component {
  state = {
    search: '',
    items: [],
    loading: false,
    error: null,
    page: 1,
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

  fetchData = async (search, pege, perPage) => {
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

  setModalImg = imageObj => {
    this.setState({ modalImg: imageObj });
  };
  
  loadMore = () => {
    const { page } = this.state;
    this.setState({page: page +1})
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }))
  }

  render() {
    const { items, loading, error, showModal, modalImg, page } = this.state;
    const { searchImages, loadMore, toggleModal, setModalImg } = this;

    return (
      <div className='App'>
        <Searchbar onSubmit={searchImages} />
        
        <ImageGallery
          items={items}
          onClick={toggleModal}
          setImg={setModalImg}
          loading={loading}
          loadMore={loadMore}
          pege={page}
        />

        {loading && <Spinner/>}

        {error && <p>{error}</p>}
        {showModal && (
          <ModalWindow
            onClick={toggleModal}
            children={<img src={modalImg.img} alt={modalImg.alt} />} >
        </ModalWindow>)}
      </div>
    )
  }
};