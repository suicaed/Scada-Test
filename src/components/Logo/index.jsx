import React from 'react';
import './style.scss';

const Logo = (props) => {

    const { color } = props;

    return (
        <div className="ts-logo ts-logo__wrapper">
            <svg className="ts-logo__svg" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
                <path fill={color ? color : '#D0455E'} fillRule="evenodd" d="M15.65 0l-.001 9.929 8.6-4.964 2.35 4.07L18 14l8.599 4.965-2.35 4.07-8.6-4.965V28h-4.7v-9.93L2.35 23.035 0 18.965l8.598-4.966L0 9.035l2.35-4.07 8.599 4.964V0h4.7z" />
            </svg>
        </div>
    );
}

export default Logo;