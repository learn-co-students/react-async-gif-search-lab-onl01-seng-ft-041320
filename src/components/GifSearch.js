import React, {Component} from 'react';

export default class GifSearch extends Component{

    render(){
        return (
        <form style={{position: 'absolute', width: '30%', right: 0, verticalAlign: 'top'}} onSubmit={this.props.callback}>
            <div className="form-group">
                <label htmlFor="search-vale">Enter a Search Term:</label>
                <input className="form-control" type="text" id="search-value"></input>
            </div>
            <button className="btn btn-success">Find Gifs</button>
        </form>)
    }
}