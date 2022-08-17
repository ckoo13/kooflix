import React from "react";
import { Link, Redirect } from "react-router-dom";
import NavBarContainer from "../navbar/NavBarContainer";

class ProfileIndex extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.getProfiles(this.props.currentUser);
    }

    render() {
        return (
            <div>
                <h1>Profiles</h1>
                <NavBarContainer />

            </div>
        )
    }
}

export default ProfileIndex;