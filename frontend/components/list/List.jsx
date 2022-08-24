import React from "react";
import VideoContainer from "../browse/VideoContainer";
import NavBarContainer from "../navbar/NavBarContainer";

class List extends React.Component {
    constructor(props){
        super(props)

        this._renderCorrectVideos = this._renderCorrectVideos.bind(this);
    }

    // Logic Flow

    // need to pull all of the list items in this.props.allListItems with the corresponding profile id
        // once we do that we have the videos that we need to render on the page
    // we then loop through those listItems and pull the corresponding videos from all videos inside this.props.videos
        // for each of those videos we render a VideoContainer component

    // We need to consider removing listItems and page re-render

    _renderCorrectVideos() {
        const listItems = this.props.allListItems;

        const profileListItems = listItems.filter(listItem => listItem.profile_id === this.props.currentProfileId)

        const allVideos = this.props.videos;

        return (
            profileListItems.map(listItem => {
                return (
                    <VideoContainer className="list-video" video={allVideos[listItem.video_id]} />
                )
            })
        )
    }

    render(){
        // include navbar in here too
        console.log(this.props.currentProfileId)
        console.log(this.props.allListItems)
        return(
            <div className='browse-container'>
                <NavBarContainer />
                <div className="list-content">
                    <h1 className="list-header">My List</h1>
                    <div className="list-videos-container">
                        {this._renderCorrectVideos()}
                    </div>
                </div>
            </div>
        )
    }
};

export default List;