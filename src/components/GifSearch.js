import React, { Component } from 'react'

class GifSearch extends React.Component{

  state={
    query: ""
  }

  searchSubmit = e => {
    e.preventDefault()
    this.props.fetchGifs(this.state.query)
  }

  render(){
    return(
      <div>
        <form onSubmit={this.searchSubmit}>
          <input type="text" value={this.state.query}
          onChange={e => this.setState(
            {query: e.target.value}
          )}></input>
        </form>
      </div>
    )
  }
}

export default GifSearch