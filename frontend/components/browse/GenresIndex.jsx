import React from "react";
import VideoIndexContainer from './VideoIndexContainer';

class GenresIndex extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <VideoIndexContainer genre={'Action'}/>
        )
    }
};

export default GenresIndex;