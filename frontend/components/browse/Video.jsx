import React from "react";
import ReactPlayer from "react-player";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';

class Video extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            isHovered: false
        }

        this._handleHover = this._handleHover.bind(this);

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

    render() {
        return (
            <div className="small-video-container" style={{left: this.state.isHovered && this.props.key * 225 - 50 + this.props.key * 2.5}} onMouseEnter={this._handleHover} onMouseLeave={this._handleHover}>
                <img className="browse-thumbnail" ref={this.imgRef} src={this.props.video.thumbnailUrl} alt="" />

                {this.state.isHovered && (
                    <>
                        <ReactPlayer className="small-video-clip"
                                url={this.props.video.videoUrl}
                                width = "100%"
                                height='140px'
                                playing={true}
                                muted={true}
                                    />
                        <div className="small-video-info">
                            <div className="small-video-icons">
                                <PlayArrowIcon className="small-video-icon" />
                                <AddIcon className="small-video-icon" />
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
};

export default Video