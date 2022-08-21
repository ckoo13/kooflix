import React from "react";
import ReactPlayer from "react-player";

class Spotlight extends React.Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        const video = this.props.getVideo(1)
            .then(() => this.setState(video));
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
                <div>
                    <ReactPlayer url={this.props.video.videoUrl} 
                        playing={true}
                        width='150%'
                        height='150%'
                        className='spotlight-video'/>
                </div>
            )
        }
    };
};

export default Spotlight
