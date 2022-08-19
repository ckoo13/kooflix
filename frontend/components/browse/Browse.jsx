import React from 'react'
import NavbarContainer from '../navbar/NavBarContainer';

class Browse extends React.Component {
    constructor(props){
      super(props);

    }

    componentDidMount() {
      this.props.getVideos()
        .then(() => {document.getElementById('test').src = this.props.video.thumbnailUrl})
    }

    render() {
      return (
          <div>
              <NavbarContainer />
              {/* <img id='test' src='' alt="" /> */}
          </div>
        )
    }
}


export default Browse;