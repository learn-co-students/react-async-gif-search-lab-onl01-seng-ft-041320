import React from 'react';

class GifSearch extends React.Component {
    state ={
        search: ''
    }

    handleSearch = (e) => {
        e.preventDefault();
        this.props.handleSearch(this.state.search)
    }

    handleChange = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={(e) => this.handleSearch(e)}>
                <input type='text' onChange={this.handleChange} value={this.state.search} />
                <input type='submit' value='search' />
            </form>
        )
    }
}

export default GifSearch;