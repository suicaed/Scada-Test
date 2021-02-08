import React from 'react';
import './style.scss';

import { observer } from 'mobx-react';
import store from '../../store/Store';

@observer
class Popup extends React.Component {
    state = {
        postData: {},
        comments: [],
        allCommentsLoaded: false
    }

    getMoreComments = async () => {
        const comments = await store.getComments(4);
        this.setState({comments: [...this.state.comments, ...comments.comments]});
        if (comments.end) {
            this.setState({allCommentsLoaded: true});
        }
    }

    async componentDidMount() {
        const post = await store.getPostById();
        const comments = await store.getComments(2);
        this.setState({
            postData: post,
            comments: comments.comments
        });
        if (comments.end) {
            this.setState({allCommentsLoaded: true});
        }
    }

    componentWillUnmount() {
        store.commentsShowed = 0;
    }

    render() {

        const comments = this.state.comments.map(
            comment =>
                <li className="ts-popup__comments-list-item" key={comment.id}>
                    <p className="ts-popup__comments-list-item-title">{`${comment.name} ${comment.email}`}</p>
                    <p className="ts-popup__comments-list-item-body">{comment.body}</p>
                </li>
        );

        return (
            <div className="ts-popup ts-popup__wrapper">
                <div className="ts-popup__close" onClick={store.hidePostDetails}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 32 32">
                        <g fill="none" fillRule="evenodd" stroke="#333" strokeLinecap="square" strokeWidth="1.5">
                            <path d="M.5.5L21.5 21.5M21.5.5L.5 21.5" transform="translate(5 5)" />
                        </g>
                    </svg>
                </div>
                <div className="ts-popup__post">
                    <h3 className="ts-popup__post-title">{this.state.postData.title}</h3>
                    <p className="ts-popup__post-text">{this.state.postData.body}</p>
                </div>
                <div className="ts-popup__comments">
                    <h3 className="ts-popup__comments-title">
                        {this.state.comments ? 'comments' : 'here is no comments'}
                    </h3>
                    <ul className="ts-popup__comments-list">
                        {comments}
                    </ul>
                    <button onClick={this.getMoreComments} style={{display: this.state.allCommentsLoaded ? 'none' : ''}} className="ts-popup__comments-button">load more</button>
                </div>
            </div>
        );
    }
};

export default Popup;