import React from "react";
import ReactPlayer from "react-player";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { withRouter } from "react-router-dom";
import { findVideoInAllLists } from "../../reducers/selectors";
import RemoveIcon from '@mui/icons-material/Remove';

class Video extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            isHovered: false,
            addedToList: false
        }

        this._handleHover = this._handleHover.bind(this);
        this._handlePlay = this._handlePlay.bind(this);
        this._unmute = this._unmute.bind(this);
        this._addToMyList = this._addToMyList.bind(this);
        this._displayListButton = this._displayListButton.bind(this);
        this._removeFromMyList = this._removeFromMyList.bind(this);

        this.videoRef = React.createRef();
        this.imgRef = React.createRef();
    }

    _handleHover(e) {
        e.preventDefault();

        const ref = this.imgRef.current;

        if (!this.state.isHovered) {
            this.setState({isHovered: true})
            ref.style.display = 'none'
        } else {
            this.setState({isHovered: false})
            ref.style.display = 'block'
        }
    }

    _handlePlay(e) {
        e.preventDefault();
        const videoId = this.props.video.id
        this.props.history.push(`/browse/${videoId}`)
    }

    _unmute() {
        const videoDiv = this.videoRef.current;
        videoDiv['muted'] = !videoDiv['muted'];
    }

    // creating listItem
    _addToMyList(e) {
        e.preventDefault();

        const newListItem = {video_id: this.props.video.id, profile_id: this.props.currentProfileId}

        const toDeleteItem = findVideoInAllLists(this.props.lists, this.props.video.id, this.props.currentProfileId)

        this.props.makeListItem(newListItem)
    }

    // removing listItem
    _removeFromMyList(e) {
        e.preventDefault();

        const thisVideo = findVideoInAllLists(this.props.lists, this.props.video.id, this.props.currentProfileId)

        this.props.removeListItem(thisVideo.id)
    }

    // function for displaying myList button
    _displayListButton() {
        const thisVideo = findVideoInAllLists(this.props.lists, this.props.video.id, this.props.currentProfileId)

        console.log(thisVideo)
        if (thisVideo !== undefined) {
            return (
                <RemoveIcon onClick={this._removeFromMyList} className="small-video-icon" />
            )
        } else { 
            return (
                <AddIcon onClick={this._addToMyList} className="small-video-icon" />
            )
        }
    }
    

    render() {
        if (!this.props.video) {
            return null
        } else {
            return (
                <div className="small-video-container" style={{left: this.state.isHovered && this.props.key * 225 - 50 + this.props.key * 2.5}} onMouseEnter={this._handleHover} onMouseLeave={this._handleHover}>
                    <img className="browse-thumbnail" onClick={this._handlePlay} ref={this.imgRef} src={this.props.video.thumbnailUrl} alt="" />
    
                    {this.state.isHovered && (
                        <>
                            {/* <ReactPlayer ref={this.videoRef} className="small-video-clip"
                                    url={this.props.video.videoUrl}
                                    width = "100%"
                                    height='140px'
                                    playing={true}
                                    muted={false}
                                    loop={true}
                                        /> */}
                                        {/* set playing back to true here */}
                            <video className="small-video-clip" onClick={this._handlePlay} ref={this.videoRef} src={this.props.video.videoUrl} autoPlay={false} muted={true} loop></video>
                            <div className="small-video-info">
                                <div className="small-video-icons">
                                    <PlayArrowIcon onClick={this._handlePlay} className="small-video-icon" />
                                    {/* add logic for mylist to this button */}
                                    {this._displayListButton()}
                                    <VolumeUpIcon onClick={this._unmute} className="small-video-icon" />
                                </div>
                                <div className="small-video-info-top">
                                    <p>{this.props.video.runtime}</p>
                                    <p className="small-video-rating">{this.props.video.rating}</p>
                                    <p>{this.props.video.year}</p>
                                </div>
                                <div className="small-video-info-description">
                                    <p>{this.props.video.description}</p>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            )
        }
    }
};

export default withRouter(Video)