import React, { Component } from 'react'

class GifSearch extends Component {
  state = {
    search: ''
  }

  handleChange = e => {
    this.setState({
      search: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.onSubmit(this.state.search)
  }

  render() {
    return (
      <div className="col-md-6">
        <form className="form-inline" onSubmit={this.handleSubmit}>
          <label>Search: </label>
          <input className="form-control mx-2" onChange={this.handleChange} type="text" name='search' value={this.state.search} />
          <input className="btn btn-primary" type="submit" value="Search" />
        </form>
      </div>
    )
  }
}

export default GifSearch