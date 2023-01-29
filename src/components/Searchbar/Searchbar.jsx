import { Component } from "react";
import '../Styles/styles.css'

class Searchbar extends Component {
    state = {
        search: "",
    }
    
    hendleChange = ({ target }) => {
        const { name, value } = target;
        this.setState({ [name]: value });
    }

    hendleSubmit = e => {
        e.preventDefault();
        const { onSubmit } = this.props;
        onSubmit({ ...this.state });
        this.reset()
    }

    reset() {
        this.setState({
            search: "",
        })
    }

    render() {
        const { search } = this.state;
        const { hendleChange, hendleSubmit } = this;

        return (
            <header className="Searchbar">
                <form className="SearchForm" onSubmit={hendleSubmit}>
                    <button
                        type="submit"
                        className="SearchForm-button"
                    >
                        <span className="SearchForm-button-label">Search</span>
                    </button>
                    <input
                        className="SearchForm-input"
                        name="search"
                        type="text"
                        value={search}
                        onChange={hendleChange}
                        // autocomplete="off"
                        // autofocus
                        required
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        )
    }

    
};

export default Searchbar;