import { connect } from "react-redux";
import { getGenres } from "../../actions/genre_actions";
import GenresIndex from "./GenresIndex";

const mapStateToProps = state => {
    
};

const mapDispatchToProps = dispatch => {

}

export default connect(mapStateToProps, mapDispatchToProps)(GenresIndex)