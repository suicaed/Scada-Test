import React from 'react';
import './style.scss';

const MainPost = (props) => {
    const { id, title, onClick } = props;
    return (
        <div className="ts-mainpost ts-mainpost__wrapper" onClick={() => { onClick(id); }}>
            <h3 className="ts-mainpost__title">{title}</h3>
            <button className="ts-mainpost__button">read more</button>
        </div>
    );
}

export default MainPost;