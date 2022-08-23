import { connect } from "react-redux";
import { getAllLists } from "../../actions/list_actions";
import List from "./List";

const mapStateToProps = state => {
    return {
        currentProfileId: state.session.currentProfile,
        allListItems: Object.values(state.entities.lists),
        videos: state.entities.videos
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getAllLists: lists => dispatch(getAllLists)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(List)