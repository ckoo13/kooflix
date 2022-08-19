import React from 'react'
import NavbarContainer from '../navbar/NavBarContainer';

class Browse extends React.Component {
    constructor(props){
      super(props);

    }

    componentDidMount() {
      this.props.getVideos();
    }

    render() {
      return (
          <div>
              <h1>Main Page</h1>
              {/* <img src={this.props.video.thumbnailUrl} alt="" /> */}
              {console.log(this.props.video)}
              <NavbarContainer />
          </div>
        )
    }
}


export default Browse;