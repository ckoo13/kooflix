import React from "react";
import Slider from "react-slick/lib/slider";
import VideoContainer from "../browse/VideoContainer";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useRef } from "react";
import { selectVideoGenres, selectShowsOrMovies } from "../../reducers/selectors";


class ShowsVideoIndex extends React.Component  {
    constructor(props){
        super(props)

        this.state = {
            mounted: false,
            videos: this.props.videos,
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
        console.log(this.state.videos);
        const slideLength = this.state.videos.length;

        // this logic means that we have to be specific about how many videos we are passing into this component
        if (this.state.slideNumber < slideLength - 6) {
            // maybe change this to a mouse event handler
            this.setState({isMoved: true})
            this.setState({slideNumber: this.state.slideNumber + 1})
            ref.style.transform = `translateX(${-230 + distance}px)`
        }
    }

    componentDidMount() {
        // change this to movies selector
        const videoList1 = selectVideoGenres(this.props.genre, this.props.videos)
        const videoList2 = selectShowsOrMovies('show', videoList1)
        this.setState({videos: videoList2})
        this.setState({mounted: true})
    }

    render() {
            if (!this.state.mounted) {
                return (
                    <div>
                        <h1>Videos have not loaded</h1>
                    </div>
                )
            } else {
                // console.log(this.state.videos)
                return (
                    <div className="video-index-container">
                    <p className="genre-title">{this.props.genre.name}</p>
                    <div className="wrapper">
                        <ArrowBackIosIcon className="slider-arrow left" onClick={this._handleLeftClick} style={{display: !this.state.isMoved && "none"}}></ArrowBackIosIcon>
                        <div className="thumbnail-container" ref={this.listRef}>
                            {this.state.videos.map((video, idx) => {
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
    }
};

export default ShowsVideoIndex;