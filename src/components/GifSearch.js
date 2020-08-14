import React, { Component } from 'react'

class GifSearch extends Component {

  state= {
    query: ""
  }

  searchSubmit =event => {
    event.preventDefault()
    this.props.fetchGifs(this.state.query)
  }

  render() {
    return(
      <div>
      <form onSubmit={this.searchSubmit}>
      <input type="text" value={this.state.query} onChange={event => this.setState({query: event.target.value})}/>
      </form>
      </div>
    )
  }
}

export default GifSearch
