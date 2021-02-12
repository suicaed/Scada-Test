import React from 'react';
import './style.scss';
import Header from '../../components/Header';
import Posts from '../../components/Posts';
import MainPost from '../../components/MainPost';
import Footer from '../../components/Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

import { observer } from 'mobx-react';
import store from '../../store/Store';

@observer
class Main extends React.Component {

    state = {
        posts: store.getPosts(3),
    }

    setSpaceBetween = () => {
        const fullWidth = 1280;
        const value = 24;
        return (value * (window.innerWidth / fullWidth)).toFixed(2);
    }

    render() {

        const posts = this.state.posts.map(post =>
            <SwiperSlide key={post.id}>
                <div className="ts-main__slider-item">
                    <MainPost id={post.id} title={post.title} onClick={store.showPostDetails}></MainPost>
                </div>
            </SwiperSlide>
        );

        return (
            <React.Fragment>
                <header className="ts-app__header">
                    <Header />
                </header>

                <div className="ts-app__page-content">
                    <div className="ts-main ts-main__wrapper">

                        <div className="ts-main__slider">
                            <Swiper slidesPerView={2.5} spaceBetween={24}>
                                {posts}
                            </Swiper>
                        </div>

                        <div className="ts-main__posts">
                            <Posts />
                        </div>
                    </div>
                </div>

                <footer className="ts-app__footer">
                    <Footer />
                </footer>
            </React.Fragment >
        );
    }
}

export default Main;