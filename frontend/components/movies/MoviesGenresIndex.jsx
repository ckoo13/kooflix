import React from "react";
import MoviesVideoIndexContainer from "./MoviesVideoIndexContainer";

class MoviesGenresIndex extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                {this.props.genres.map(genre => {
                    return (
                        <MoviesVideoIndexContainer videos={this.props.videos} genre={genre} key={genre.id}/>
                    )
                })}
            </div>
        )
    }
};

export default MoviesGenresIndex;