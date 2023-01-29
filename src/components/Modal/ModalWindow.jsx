import { Component } from 'react';
import { createPortal } from 'react-dom';
import '../Styles/styles.css'

const modalRoot = document.querySelector('#modal-root');

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
        const { children } = this.props;
        return createPortal(
            <div
                className="Overlay"
                onClick={e => this.handleBackdropClick(e)}
            >
                <div className="Modal">
                    {/* <img src="" alt="" /> */}
                    {children}
                </div>
            </div>,
            modalRoot
        );
    }

}

export default ModalWindow;
