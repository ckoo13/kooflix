import React from 'react'
import NavbarContainer from '../navbar/NavBarContainer';
import SpotlightContainer from './SpotlightContainer';
import VideoContainer from './VideoContainer';

class Browse extends React.Component {
    constructor(props){
      super(props);

    }

    componentDidMount() {
      this.props.getVideos()
        // .then(() => {document.getElementById('test').src = this.props.video.thumbnailUrl})
    }

    render() {
      return (
          <div>
              <NavbarContainer />
              <SpotlightContainer />
              <VideoContainer />
          </div>
        )
    }
}


export default Browse;