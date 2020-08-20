import React, {Component} from 'react';

export default class GifSearch extends Component{

    render(){
        return (
        <form style={{position: 'absolute', width: '30%', right: 0, verticalAlign: 'top'}} onSubmit={this.props.callback}>
            <div class="form-group">
                <label for="search-vale">Enter a Search Term:</label>
                <input class="form-control" type="text" id="search-value"></input>
            </div>
            <button class="btn btn-success">Find Gifs</button>
        </form>)
    }
}