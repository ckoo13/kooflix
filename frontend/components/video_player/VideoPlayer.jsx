import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom/cjs/react-router-dom";

class VideoPlayer extends React.Component {
    constructor(props){
        super(props)

        this._showBackButton = this._showBackButton.bind(this);
        this._handleClick = this._handleClick.bind(this);
    }

    _showBackButton() {
        const backIcon = document.getElementById('video-player-back-icon-blank')
        backIcon.id = 'video-player-back-icon'
    }

    _handleClick(e) {
        e.preventDefault();

        this.props.history.push('/browse')
    }

    render() {
        if (!this.props.video) {
            return (
                <div>
                    <h1>The video has not loaded yet</h1>
                </div>
            )
        } else {
            return (
                // instead of autoplaying use event listeners to set manually play so we don't run into mute issue
                <div onMouseMove={this._showBackButton} className="video-player-container">
                    <div className="video-player-back-container">
                        <Link to={'/browse'} id='video-player-back-icon-blank'>ᐸ</Link>
                    </div>
                    <ReactPlayer url={this.props.video.videoUrl} 
                        playing={true}
                        width='100%'
                        height='100%'
                        muted={true}
                        loop={true}
                        controls={true}
                        id='playing-video'/>
                </div>
            )
        }
    }
}

export default VideoPlayer;