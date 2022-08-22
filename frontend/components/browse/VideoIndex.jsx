import React from "react";
import Slider from "react-slick/lib/slider";
import VideoContainer from "./VideoContainer";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useRef } from "react";


class VideoIndex extends React.Component  {
    constructor(props){
        super(props)

        this.state = {
            slideNumber: 0,
            isMoved: false
        }

        this._handleLeftClick = this._handleLeftClick.bind(this)
        this._handleRightClick = this._handleRightClick.bind(this)
        this.listRef = React.createRef();
    };
    // method for carousel left click
    _handleLeftClick(e) {
        e.preventDefault();
        let distance = this.listRef.current.getBoundingClientRect().x - 50
        const ref = this.listRef.current

        if (this.state.slideNumber > 0) {
            this.setState({isMoved: true})
            this.setState({slideNumber: this.state.slideNumber - 1})
            ref.style.transform = `translateX(${230 + distance}px)`
        }
    }

    // method for carousel right click
    _handleRightClick(e) {
        e.preventDefault();

        let distance = this.listRef.current.getBoundingClientRect().x - 50
        const ref = this.listRef.current
        const slideLength = this.props.videos.length;

        // this logic means that we have to be specific about how many videos we are passing into this component
        if (this.state.slideNumber < slideLength - 6) {
            // maybe change this to a mouse event handler
            this.setState({isMoved: true})
            this.setState({slideNumber: this.state.slideNumber + 1})
            ref.style.transform = `translateX(${-230 + distance}px)`
        }
    }

    render() {
        return (
            <div className="video-index-container">
                    <p className="genre-title">Genre Title</p>
                    <div className="wrapper">
                        <ArrowBackIosIcon className="slider-arrow left" onClick={this._handleLeftClick} style={{display: !this.state.isMoved && "none"}}></ArrowBackIosIcon>
                        <div className="thumbnail-container" ref={this.listRef}>
                            {this.props.videos.map((video, idx) => {
                                return (
                                    <VideoContainer video={video} key={idx}/>
                                )
                            })}
                        </div>
                        <ArrowForwardIosIcon className="slider-arrow right" onClick={this._handleRightClick}></ArrowForwardIosIcon>
                    </div>
            </div>
        )
    }
};

export default VideoIndex;