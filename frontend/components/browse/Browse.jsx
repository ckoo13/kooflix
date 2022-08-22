import React from 'react'
import NavbarContainer from '../navbar/NavBarContainer';
import SpotlightContainer from './SpotlightContainer';
import VideoContainer from './VideoContainer';
import GenresIndexContainer from './GenresIndexContainer'

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
              {/* this should be the Genres Index */}
              <GenresIndexContainer />
          </div>
        )
    }
}


export default Browse;