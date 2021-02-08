import React from 'react';
import './style.scss';

const SimplePost = (props) => {
    const { id, title, list, onClick } = props;

    return (
        <div className={`ts-simplepost ts-simplepost__wrapper ${!list ? 'ts-simplepost--tiles' : ''}`} onClick={() => { onClick(id) }}>
            <div className="ts-simplepost__img" style={{display: list ? 'none' : ''}}></div>
            <h3 className="ts-simplepost__title">{title}</h3>
            <div className="ts-simplepost__arrow">
                <svg className="ts-simplepost__arrow-svg" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                    <path fill="#333" d="M20.662 9.188l-.378.38c-.252.25-.252.657 0 .908l4.496 4.47H4.643c-.355 0-.643.288-.643.643v.536c0 .355.288.643.643.643H24.78l-4.496 4.47c-.252.251-.252.658 0 .91l.378.378c.251.251.658.251.91 0l6.24-6.214c.25-.251.25-.658 0-.91l-6.24-6.214c-.252-.25-.659-.25-.91 0z" />
                </svg>
            </div>
        </div>
    );
}

export default SimplePost;