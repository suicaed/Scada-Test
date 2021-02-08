import React from 'react';
import './style.scss';
import Header from '../../components/Header';
import Posts from '../../components/Posts';
import MainPost from '../../components/MainPost';
import Footer from '../../components/Footer';

import { observer } from 'mobx-react';
import store from '../../store/Store';

@observer
class Main extends React.Component {

    state = {
        posts: store.getPosts(3)
    }

    render() {

        const posts = this.state.posts.map(post => <MainPost key={post.id} id={post.id} title={post.title} onClick={store.showPostDetails}></MainPost>);

        return (
            <React.Fragment>
                <header className="ts-app__header">
                    <Header />
                </header>

                <div className="ts-app__page-content">
                    <div className="ts-main ts-main__wrapper">

                        <div className="ts-main__slider">
                            {posts}
                        </div>

                        <div className="ts-main__posts">
                            <Posts />
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

export default Main;