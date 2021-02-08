import React from 'react';
import './style.scss';
import SimplePost from '../SimplePost';
import { observer } from 'mobx-react';

import store from '../../store/Store';

const Posts = observer(
    class Posts extends React.Component {
        state = {
            list: true,
            posts: store.getPosts(8),
            allLoaded: false
        }

        changeListType = (list) => {
            this.setState({ list: list });
        }


        loadMorePosts = () => {
            const newPosts = store.getPosts(8);
            this.setState({ posts: [...this.state.posts, ...newPosts] });
            newPosts.length < 8 ? this.setState({ allLoaded: true }) : {};
        }

        render() {

            const posts = this.state.posts.map(post =>
                <li className="ts-posts__post" key={post.id}>
                    <SimplePost id={post.id} title={post.title} list={this.state.list} key={post.id} onClick={store.showPostDetails} />
                </li>
            );

            return (
                <div className="st-posts ts-posts__wrapper">

                    <div className="ts-posts__type-buttons">
                        <button onClick={() => { this.changeListType(true) }} className={`ts-posts__type-button ${this.state.list ? 'ts-posts__type-button--active' : ''}`}>list</button>
                        <button onClick={() => { this.changeListType(false) }} className={`ts-posts__type-button ${!this.state.list ? 'ts-posts__type-button--active' : ''}`}>tiles</button>
                    </div>

                    <ul className={`ts-posts__posts ${this.state.list ? 'ts-posts__posts--list' : 'ts-posts__posts--tiles'}`} ref={elem => this.postsList = elem}>
                        {posts}
                    </ul>

                    <button
                        className="ts-posts__load-button"
                        onClick={this.loadMorePosts}
                        style={{ display: this.state.allLoaded ? 'none' : '' }}
                    >
                        load more
                    </button>
                </div>
            );
        }
    }

);
export default Posts;