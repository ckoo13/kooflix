import React from "react";
import ShowsVideoIndexContainer from "./ShowsVideoIndexContainer";

class ShowsGenresIndex extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                {this.props.genres.map(genre => {
                    return (
                        <ShowsVideoIndexContainer videos={this.props.videos} genre={genre} key={genre.id}/>
                    )
                })}
            </div>
        )
    }
};

export default ShowsGenresIndex;