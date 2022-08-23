import React from "react";
import ReactPlayer from "react-player";
import { withRouter } from "react-router-dom";

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
                <img src={window.itaewonClassLogoUrl} alt="" />
            )
        } else if (this.props.video.id === 3) {
            return (
                <img src={window.hospitalplaylistlogoUrl} alt="" />
            )
        } else if (this.props.video.id === 12) {
            return (
                <img id="spiderman-logo" src={window.spidermanlogoUrl} alt="" />
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
                            <button id="spotlight-audio-button"><img id="spotlight-audio-icon" src={window.audioIconUrl} alt="" /></button>
                        </div>
                    </div>
                </div>
            )
        }
    };
};

export default withRouter(Spotlight)
