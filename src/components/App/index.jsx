import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './style.scss';
import { Scrollbars } from 'react-custom-scrollbars';
import Main from '../../pages/Main';
import NewPost from '../../pages/NewPost';
import NotFound from '../../pages/NotFound';
import Popup from '../../components/Popup';

import { observer } from 'mobx-react';
import store from '../../store/Store';

@observer
class App extends React.Component {

    state = {
        infoLoaded: false
    }

    renderThumb = ({ style, ...props }) => {
        const thumbStyle = {
            borderRadius: 10,
            backgroundColor: 'rgba(153, 153, 153, 0.5)'
        };
        return (
            <div
                style={{ ...style, ...thumbStyle }}
                {...props} />
        );
    }

    async componentDidMount() {
        const loaded = await store.fetchPosts();
        this.setState({ infoLoaded: loaded });
    }

    render() {

        const popup = (
            <div className="ts-app__popup">
                <Scrollbars renderThumbHorizontal={this.renderThumb} renderThumbVertical={this.renderThumb} autoHide autoHideTimeout={500} autoHideDuration={200} style={{ width: '100vw', height: '100vh' }}>
                    <div className="ts-app__popup-background" onClick={store.hidePostDetails}></div>
                    <div className="ts-app__popup-wrapper">
                        <Popup />
                    </div>
                </Scrollbars>
            </div>
        );

        if (!this.state.infoLoaded) return (<div>Info loading...</div>);

        return (
            <React.Fragment>
                <Scrollbars renderThumbHorizontal={this.renderThumb} renderThumbVertical={this.renderThumb} autoHide autoHideTimeout={500} autoHideDuration={200} style={{ width: '100vw', height: '100vh' }}>
                    <BrowserRouter>

                        <div className="ts-app ts-app__wrapper">

                            <Switch>
                                <Route path="/" exact component={Main} />
                                <Route path="/new-post" exact component={NewPost} />
                                <Route path="/404" component={NotFound} />
                                <Redirect to="/404" />
                            </Switch>

                        </div>

                    </BrowserRouter >
                </Scrollbars>

                {
                    store.showPost ? popup : null
                }
            </React.Fragment>
        );
    }
}

export default App;