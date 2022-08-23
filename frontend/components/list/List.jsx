import React from "react";

class List extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        console.log(this.props.currentProfileId)
        console.log(this.props.allListItems)
        return(
            <div>List Page is Working
            </div>
        )
    }
};

export default List;