import React from "react";
import VideoIndexContainer from './VideoIndexContainer';

class GenresIndex extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.getVideos();
    }

    render() {
        return (
            <div>
                {this.props.genres.map(genre => {
                    return (
                        <VideoIndexContainer videos={this.props.videos} genre={genre} key={genre.id}/>
                    )
                })}
            </div>
        )
    }
};

export default GenresIndex;