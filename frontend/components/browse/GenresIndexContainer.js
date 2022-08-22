import { connect } from "react-redux";
import { getGenres } from "../../actions/genre_actions";
import GenresIndex from "./GenresIndex";

const mapStateToProps = state => {
    return {
        genres: state.entities.genres
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getGenres: () => dispatch(getGenres())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GenresIndex)