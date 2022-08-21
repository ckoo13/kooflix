import React from "react";
import ReactPlayer from "react-player";

class Spotlight extends React.Component {
    constructor(props) {
        super(props);

        this._unmute = this._unmute.bind(this);
    };

    componentDidMount() {
        const video = this.props.getVideo(1)
            .then(() => this.setState(video));
    }

    _unmute() {
        const videoDiv = document.getElementById('spotlight-video')
        const video = videoDiv.lastElementChild;
        // somehow need to fix this
        video['muted'] = true;
    }
    
    render() {
        // console.log(this.props.video)
        if (!this.props.video) {
            return (
                <div>
                    <h1>This is my video</h1>
                </div>
            )
        } else {
            return (
                <div className="spotlight-container">
                    <ReactPlayer url={this.props.video.videoUrl} 
                        playing={true}
                        width='150%'
                        height='150%'
                        muted={true}
                        onPlay={this._unmute}
                        loop={true}
                        id='spotlight-video'/>
                    <div id="spotlight-video-info">
                        <img src={window.itaewonClassLogoUrl} alt="" />
                        <p>{this.props.video.description}</p>
                        <button>▶ Play</button>
                    </div>
                </div>
            )
        }
    };
};

export default Spotlight
