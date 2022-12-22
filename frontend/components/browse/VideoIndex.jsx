import React from "react";
import { useState, useEffect } from "react";
import { connect } from "react-redux";

import { Carousel } from '@trendyol-js/react-carousel';
import VideoContainer from "./VideoContainer";
import { selectVideoGenres } from "../../reducers/selectors";
import { render } from "react-dom";

const VideoIndex = (props) => {

    const { genre, getVideos, videos} = props;
    const [video, setVideos] = useState([]);
    const videoList = selectVideoGenres(genre, videos)

    useEffect(() => {
        setVideos(videoList);
    }, [])

    return (
        <div className="video-index-container">
            <p className="genre-title">{genre.name}</p>
            {/* <Carousel show={4} slide={2} transition={0.5}>
        
            </Carousel> */}
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        getVideos: () => dispatch(getVideos())
    }
};

export default connect(mapDispatchToProps)(VideoIndex);


// class VideoIndex extends React.Component  {
//     constructor(props){
//         super(props)

//         this.state = {
//             mounted: false,
//             videos: this.props.videos,
//             slideNumber: 0,
//             isMoved: false
//         }

//         // this._handleLeftClick = this._handleLeftClick.bind(this)
//         // this._handleRightClick = this._handleRightClick.bind(this)
//         this.listRef = React.createRef();
//         this.renderVideos = this.renderVideos.bind(this);
//     };
    
//     // method for carousel left click
//     // _handleLeftClick(e) {
//     //     e.preventDefault();
//     //     let distance = this.listRef.current.getBoundingClientRect().x - 50
//     //     const ref = this.listRef.current

//     //     if (this.state.slideNumber > 0) {
//     //         this.setState({isMoved: true})
//     //         this.setState({slideNumber: this.state.slideNumber - 1})
//     //         ref.style.transform = `translateX(${230 + distance}px)`
//     //     }
//     // }

//     // method for carousel right click
//     // _handleRightClick(e) {
//     //     e.preventDefault();

//     //     let distance = this.listRef.current.getBoundingClientRect().x - 50
//     //     const ref = this.listRef.current
//     //     const slideLength = this.state.videos.length;

//     //     // this logic means that we have to be specific about how many videos we are passing into this component
//     //     if (this.state.slideNumber < slideLength - 6) {
//     //         // maybe change this to a mouse event handler
//     //         this.setState({isMoved: true})
//     //         this.setState({slideNumber: this.state.slideNumber + 1})
//     //         ref.style.transform = `translateX(${-230 + distance}px)`
//     //     }
//     // }

//     componentDidMount() {
//         const videoList = selectVideoGenres(this.props.genre, this.props.videos)
//         this.setState({videos: videoList})
//         this.setState({mounted: true})
//     }

//     componentDidUpdate() {
//         this.render()
//         const videoList = selectVideoGenres(this.props.genre, this.props.videos)
//         this.setState({videos: videoList})
//         this.setState({mounted: true})
//     }

//     // renderVideos() {
//     //     const videoList = selectVideoGenres(this.props.genre, this.props.videos)

//     //     {
    //         return (
                // <ScrollingCarousel show={4} slide={2} transition={0.5}>
                //     {videoList.map((video, idx) => {
                //         return (
                //             <VideoContainer video={video} key={idx}/>
                //         )
                //     })}
                // </ScrollingCarousel>
//     //         )
//     //     }
//     // }

//     render() {
//             if (!this.state.mounted) {
//                 return (
//                     <div>
//                         <h1>Videos have not loaded</h1>
//                     </div>
//                 )
//             } else {
//                 return (
//                     <div className="video-index-container">
//                         <p className="genre-title">{this.props.genre.name}</p>
//                         {this.renderVideos()}
//                     </div>
//                 )
//             }
//     }
// };

// export default VideoIndex;