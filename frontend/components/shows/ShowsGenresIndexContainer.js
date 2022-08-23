import { connect } from "react-redux";
import { getGenres } from "../../actions/genre_actions";
import ShowsGenresIndex from "./ShowsGenresIndex";

const mapStateToProps = state => {
    return {
        genres: Object.values(state.entities.genres),
        videos: state.entities.videos
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getGenres: () => dispatch(getGenres())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowsGenresIndex)