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
      this.props.getGenres()
    }

    render() {
      return (
          <div className='browse-container'>
              <NavbarContainer />
              <SpotlightContainer video={this.props.videos[1]}/>
              {/* this should be the Genres Index */}
              <GenresIndexContainer genres={this.props.genres} />
          </div>
        )
    }
}


export default Browse;