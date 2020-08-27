import React, { Component } from 'react'

class GifSearch extends Component {

    constructor(props) {
        super(props)
        this.state = {query: ''}

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({query: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.fetchData(this.state.query)
        //when handleSubmit needs to send state to GifListContainer
    }

    render() {
        // Should render a form that receives the user input for the search
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' value={this.state.value} onChange={this.handleChange} />
                    <input type='submit' value='Submit' />
                </form>
            </div>
        )
    }
    // Text input should be a controlled component that stores the value of the input in its component state and renders the DOM accordingly. 
    // The React component is always in charge of what the DOM looks like
}

export default GifSearch