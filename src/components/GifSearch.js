import React from 'react';


class GifSearch extends React.Component {

    state = {
        query: ""
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.submitHandler(this.state.query)
    }

    render() {
        return ( 
        <div>
            <h1>Type In Your Gif Search:</h1>
            <form onSubmit={this.handleSubmit}>
                <input
                type="text"
                name="query"
                value={this.state.query}
                onChange={e => this.setState({query: e.target.value})}
                />
                <br />
                <input type="submit" value="search" />
            </form>
            <br />
        </div>)
    }
}

export default GifSearch;