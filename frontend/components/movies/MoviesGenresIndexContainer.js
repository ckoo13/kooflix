import { connect } from "react-redux";
import { getGenres } from "../../actions/genre_actions";
import { getVideos } from "../../actions/video_actions";
import MoviesGenresIndex from './MoviesGenresIndex'

const mapStateToProps = state => {
    return {
        genres: Object.values(state.entities.genres),
        videos: state.entities.videos
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getGenres: () => dispatch(getGenres()),
        getVideos: () => dispatch(getVideos())
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesGenresIndex)