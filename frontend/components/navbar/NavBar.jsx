import React from "react";

class NavBar extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <button onClick={this.props.logout}>Logout</button>
            </div>
        )
    }
}

export default NavBar;