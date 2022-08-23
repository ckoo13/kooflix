import React from 'react'
import NavBarContainer from '../navbar/NavBarContainer';
import SpotlightContainer from '../browse/SpotlightContainer';
import MoviesGenresIndexContainer from './MoviesGenresIndexContainer';

class Movies extends React.Component {
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
              <SpotlightContainer video={this.props.video}/>
              {/* this should be the Genres Index */}
              <MoviesGenresIndexContainer />
          </div>
        )
    }
}


export default Movies;