import ButtonIcon from '../Button/ButtonIcon';
import React, { Component } from 'react';
// import { createPortal } from 'react-dom';
import '../Styles/styles.css'

// const modalRoot = document.querySelector('#modal-root');

class ModalWindow extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = e => {
        const { onClick } = this.props;
        if (e.code === 'Escape') {
            onClick();
        }
    };

    handleBackdropClick = e => {
        const { onClick } = this.props;
        if (e.target === e.currentTarget) {
            onClick();
        }
    };


    render() {
        const { onClick, children } = this.props;
        
        return (
            <div
                className="Overlay"
                onClick={e => this.handleBackdropClick(e)}
            >
                <div className="Modal">
                    <ButtonIcon
                        onClick={onClick}
                    >Close</ButtonIcon>
                    {children}
                </div>
            </div>

        );
    }

}

export default ModalWindow;
