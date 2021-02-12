import React from 'react';
import './style.scss';

class Slider extends React.Component {

    state = {
        pressed: false,
        startX: 0,
        x: 0
    };

    checkBoundaries = () => {
        const slider = this.sliderRef.getBoundingClientRect();
        const sliderInner = this.sliderInnerRef.getBoundingClientRect();

        if (parseInt(this.sliderInnerRef.style.left) > 0) {
            this.sliderInnerRef.style.left = '0px';
        } else if (sliderInner.right < slider.right) {
            this.sliderInnerRef.style.left = `-${sliderInner.width - slider.width}px`;
        }
    }

    setSliderHeight = () => {
        this.sliderRef.style.height = `${this.sliderInnerRef.offsetHeight}px`;
    }

    handleMouseDown = (e) => {
        this.setState({
            pressed: true,
            startX: e.offsetX - this.sliderInnerRef.offsetLeft
        });
    }

    handleMouseMove = (e) => {
        if (!this.state.pressed) return;
        e.preventDefault();
        this.setState({ x: e.offsetX });
        this.sliderInnerRef.style.left = `${this.state.x - this.state.startX}px`;
        this.checkBoundaries();
    }

    handleWindowMouseUp = () => {
        this.setState({ pressed: false });
    }

    componentDidMount() {
        this.setSliderHeight();
        this.sliderRef.addEventListener('mousedown', this.handleMouseDown);
        this.sliderRef.addEventListener('mousemove', this.handleMouseMove);
        window.addEventListener('mouseup', this.handleWindowMouseUp);
        window.addEventListener('resize', this.setSliderHeight);
    }

    componentWillUnmount() {
        this.sliderRef.removeEventListener('mousedown', this.handleMouseDown);
        this.sliderRef.removeEventListener('mousemove', this.handleMouseMove);
        window.removeEventListener('mouseup', this.handleWindowMouseUp);
        window.removeEventListener('resize', this.setSliderHeight);
    }

    render() {

        const childs = React.Children.map(this.props.children, child => <div className="ts-slider__item">{child}</div>);

        return (
            <div className="ts-slider ts-slider__wrapper" ref={elem => this.sliderRef = elem}>
                <div className="ts-slider__inner" ref={elem => this.sliderInnerRef = elem}>
                    {childs}
                </div>
            </div>
        );
    }
}

export default Slider;