import React from "react";
import ReactPlayer from "react-player";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { withRouter } from "react-router-dom";

class Video extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            isHovered: false
        }

        this._handleHover = this._handleHover.bind(this);
        this._handlePlay = this._handlePlay.bind(this);
        this._unmute = this._unmute.bind(this);

        this.videoRef = React.createRef();
        this.imgRef = React.createRef();
    }

    _handleHover(e) {
        e.preventDefault();

        const ref = this.imgRef.current;

        if (!this.state.isHovered) {
            this.setState({isHovered: true})
            ref.style.display = 'none'
        } else {
            this.setState({isHovered: false})
            ref.style.display = 'block'
        }
    }

    _handlePlay(e) {
        e.preventDefault();
        const videoId = this.props.video.id
        this.props.history.push(`/browse/${videoId}`)
    }

    _unmute() {
        const videoDiv = this.videoRef.current;
        videoDiv['muted'] = !videoDiv['muted'];
    }

    render() {
        if (!this.props.video) {
            return null
        } else {
            return (
                <div className="small-video-container" style={{left: this.state.isHovered && this.props.key * 225 - 50 + this.props.key * 2.5}} onMouseEnter={this._handleHover} onMouseLeave={this._handleHover}>
                    <img className="browse-thumbnail" onClick={this._handlePlay} ref={this.imgRef} src={this.props.video.thumbnailUrl} alt="" />
    
                    {this.state.isHovered && (
                        <>
                            {/* <ReactPlayer ref={this.videoRef} className="small-video-clip"
                                    url={this.props.video.videoUrl}
                                    width = "100%"
                                    height='140px'
                                    playing={true}
                                    muted={false}
                                    loop={true}
                                        /> */}
                            <video className="small-video-clip" onClick={this._handlePlay} ref={this.videoRef} src={this.props.video.videoUrl} autoPlay={true} muted={true} loop></video>
                            <div className="small-video-info">
                                <div className="small-video-icons">
                                    <PlayArrowIcon onClick={this._handlePlay} className="small-video-icon" />
                                    {/* add logic for mylist to this button */}
                                    <AddIcon className="small-video-icon" />
                                    <VolumeUpIcon onClick={this._unmute} className="small-video-icon" />
                                </div>
                                <div className="small-video-info-top">
                                    <p>{this.props.video.runtime}</p>
                                    <p className="small-video-rating">{this.props.video.rating}</p>
                                    <p>{this.props.video.year}</p>
                                </div>
                                <div className="small-video-info-description">
                                    <p>{this.props.video.description}</p>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            )
        }
    }
};

export default withRouter(Video)