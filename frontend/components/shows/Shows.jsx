import React from 'react'
import NavBarContainer from '../navbar/NavBarContainer';
import SpotlightContainer from '../browse/SpotlightContainer';
import GenresIndexContainer from '../browse/GenresIndexContainer';

class Shows extends React.Component {
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
              <NavBarContainer />
              <SpotlightContainer video={this.props.video} />
              {/* this should be the Genres Index */}
              <GenresIndexContainer />
          </div>
        )
    }
}


export default Shows;