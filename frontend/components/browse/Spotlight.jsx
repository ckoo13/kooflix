import React from "react";
import ReactPlayer from "react-player";
import { withRouter } from "react-router-dom";
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

class Spotlight extends React.Component {
    constructor(props) {
        super(props);

        this._unmute = this._unmute.bind(this);
        this._handlePlay = this._handlePlay.bind(this);
        this._handleSpotlightLogo = this._handleSpotlightLogo.bind(this);
    };

    _unmute() {
        const videoDiv = document.getElementById('spotlight-video')
        const video = videoDiv.lastElementChild;
        video['muted'] = !video['muted'];
    }

    _handlePlay(e) {
        e.preventDefault();
        const videoId = this.props.video.id
        this.props.history.push(`/browse/${videoId}`)
    }

    _handleSpotlightLogo() {
        if (this.props.video.id === 1) {
            return (
                <img src="https://kooflix-seeds.s3.us-west-1.amazonaws.com/Assets/itaewonclasslogo.png" alt="" />
            )
        } else if (this.props.video.id === 3) {
            return (
                <img src="https://kooflix-seeds.s3.us-west-1.amazonaws.com/Assets/hospitalplaylistlogo.png" alt="" />
            )
        } else if (this.props.video.id === 12) {
            return (
                // fix this webp file spiderman
                <img id="spiderman-logo" src="https://kooflix-seeds.s3.us-west-1.amazonaws.com/Assets/spidermanlogo.png" alt="" />
            )
        }
    }
    
    render() {
        if (!this.props.video) {
            return (
                <div>
                    <h1>The videos have not loaded yet</h1>
                </div>
            )
        } else {
            return (
                // instead of autoplaying use event listeners to set manually play so we don't run into mute issue
                <div onClick={this._unmute} className="spotlight-container">
                    <ReactPlayer url={this.props.video.videoUrl} 
                        // set playing back to true here
                        playing={true}
                        width='150%'
                        height='150%'
                        muted={true}
                        loop={true}
                        id='spotlight-video'/>
                    <div id="spotlight-video-info">
                        {this._handleSpotlightLogo()}
                        <p>{this.props.video.description}</p>
                        <div className="spotlight-button-container">
                            <button onClick={this._handlePlay} id="spotlight-play-button">▶ Play</button>
                            <button id="spotlight-audio-button"><VolumeUpIcon /></button>
                        </div>
                    </div>
                </div>
            )
        }
    };
};

export default withRouter(Spotlight)
