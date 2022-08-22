import React from "react";
import ReactPlayer from "react-player";

class Video extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="small-video-container">
                <img className="browse-thumbnail" src={this.props.video.thumbnailUrl} alt="" />
            </div>
        )
    }
};

export default Video