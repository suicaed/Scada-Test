import React from 'react';
import './style.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';

class NewPost extends React.Component {
    state = {
        title: '',
        text: ''
    }

    onTitleChange = (e) => {
        this.setState({ title: e.target.value });
    }

    onTextChange = (e) => {
        this.setState({ text: e.target.value });
    }

    render() {
        return (
            <React.Fragment>
                <header className="ts-app__header">
                    <Header />
                </header>

                <div className="ts-app__page-content">
                    <div className="ts-app__newpost">
                        <div className="ts-newpost ts-newpost__wrapper">

                            <div className="ts-newpost__head">
                                <Link to="/" className="ts-newpost__head-arrow">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24">
                                        <path fill="#333" d="M8.503 6.891l.284.284c.189.189.189.494 0 .682L5.415 11.21h15.103c.266 0 .482.216.482.482v.402c0 .266-.216.482-.482.482H5.415l3.372 3.353c.189.188.189.493 0 .681l-.284.284c-.188.189-.493.189-.682 0l-4.68-4.66c-.188-.189-.188-.494 0-.682l4.68-4.66c.189-.19.494-.19.682 0z" />
                                    </svg>
                                </Link>
                                <h3 className="ts-newpost__head-title">new post</h3>
                            </div>

                            <form className="ts-newpost__form">

                                <input name="title" type="text" value={this.state.title} onChange={this.onTitleChange} placeholder="title" className="ts-newpost__form-input ts-app--default-input" maxLength="50" />

                                <textarea name="text" value={this.state.text} onChange={this.onTextChange} placeholder="text" className="ts-newpost__form-textarea ts-app--default-input" maxLength="400"></textarea>

                                <div className="ts-newpost__form-buttons">
                                    <div className="ts-newpost__form-button ts-app--default-button" onClick={(e) => { e.preventDefault(); }}>
                                        <Button style="dark">add a post</Button>
                                    </div>
                                    <Link to="/">
                                        <div className="ts-newpost__form-button ts-app--default-button">
                                            <Button>cancel</Button>
                                        </div>
                                    </Link>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>

                <footer className="ts-app__footer">
                    <Footer />
                </footer>
            </React.Fragment>
        );
    }
}

export default NewPost;