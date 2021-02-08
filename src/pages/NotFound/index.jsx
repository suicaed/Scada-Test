import React from 'react';
import './style.scss';

import Header from '../../components/Header';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';

class NotFound extends React.Component {

    componentDidMount() {
        document.body.style.backgroundColor = '#ffffff';
    }

    componentWillUnmount() {
        document.body.removeAttribute('style');
    }

    render() {
        return (
            <React.Fragment>

                <header className="ts-app__header">
                    <Header />
                </header>

                <div className="ts-app__404">
                    <div className="ts-404 ts-404__wrapper">
                        <div className="ts-404__img">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 480 204">
                                <path fill="#F3F1F0" d="M115.794 200.61v-45.49h27.757v-19.497h-27.757V3.391h-23.27L0 137.6v17.518h90.841v45.49h24.953zm-24.953-64.987H17.664L89.72 32.211h1.121v103.412zM241.121 204c22.617 0 40-8.806 52.15-26.418 12.15-17.612 18.224-42.806 18.224-75.582 0-32.776-6.074-57.97-18.224-75.582C281.121 8.806 263.738 0 241.121 0c-22.616 0-40 8.806-52.149 26.418-12.15 17.612-18.224 42.806-18.224 75.582 0 32.776 6.074 57.97 18.224 75.582 12.15 17.612 29.533 26.418 52.15 26.418zm0-14.693c-7.663 0-14.158-1.554-19.485-4.662-5.328-3.108-9.627-7.487-12.898-13.138-3.27-5.651-5.654-12.48-7.15-20.485-1.495-8.005-2.242-17-2.242-26.983V79.96c0-9.795.747-18.742 2.243-26.842 1.495-8.1 3.878-14.975 7.15-20.626 3.27-5.65 7.57-10.03 12.897-13.138 5.327-3.108 11.822-4.662 19.485-4.662 7.664 0 14.16 1.554 19.486 4.662 5.328 3.108 9.627 7.487 12.898 13.138 3.27 5.651 5.654 12.526 7.15 20.626 1.495 8.1 2.242 17.047 2.242 26.842v44.078c0 9.983-.747 18.978-2.243 26.983-1.495 8.006-3.878 14.834-7.15 20.485-3.27 5.65-7.57 10.03-12.897 13.138-5.327 3.108-11.822 4.662-19.486 4.662zm211.122 11.302v-45.49H480v-19.496h-27.757V3.391h-23.271L336.449 137.6v17.518h90.84v45.49h24.954zm-24.953-64.986h-73.178l72.056-103.412h1.122v103.412z" />
                            </svg>
                        </div>

                        <Link to="/">
                            <div className="ts-404__button ts-app--default-button">
                                <Button>go to home</Button>
                            </div>
                        </Link>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default NotFound;