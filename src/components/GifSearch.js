import React from 'react'

class GifSearch extends React.Component {

    state = {
        search: ""
    }

    handleChange = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onSearch(this.state.search)
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.search} onChange={this.handleChange} />
                    <input type="submit" value="Seach" />
                </form>
            </div>
        )
    }
}

export default GifSearch