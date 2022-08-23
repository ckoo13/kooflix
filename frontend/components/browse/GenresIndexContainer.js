import { connect } from "react-redux";
import { getGenres } from "../../actions/genre_actions";
import GenresIndex from "./GenresIndex";

const mapStateToProps = (state, ownProps) => {
    return {
        genres: Object.values(ownProps.genres),
        videos: state.entities.videos
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getGenres: () => dispatch(getGenres())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GenresIndex)