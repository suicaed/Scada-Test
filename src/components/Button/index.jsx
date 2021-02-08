import React from 'react';
import './style.scss';

const Button = (props) => {

    const { children, style } = props;

    const styleClass = style === 'dark' ? 'ts-button--dark' : 'ts-button--light';

    return (
        <button className={`ts-button ts-button__wrapper ${styleClass}`}>
            <span className="ts-button__text">{children}</span>
        </button>
    );
}

export default Button;