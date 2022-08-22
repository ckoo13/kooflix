import React from "react";
import Slider from "react-slick/lib/slider";
import VideoContainer from "./VideoContainer";


class VideoIndex extends React.Component  {
    constructor(props){
        super(props)
    };

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3
        }

        return (
            <div className="video-index-container">
                    {this.props.videos.map((video, idx) => {
                        return (
                            <VideoContainer video={video} key={idx}/>
                        )
                    })}
            </div>
        )
    }
};

export default VideoIndex;