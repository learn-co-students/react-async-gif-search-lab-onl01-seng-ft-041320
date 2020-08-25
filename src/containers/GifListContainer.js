import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
  state = {
    gifs: []
  }

  handleSearch = search => {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=weIKUnNUNUAkyZXCRORncuTuKNR4MOp3&q=${search}&rating=g&limit=3`)
    .then(resp => resp.json())
    .then(json => {
      this.setState({
        gifs: json.data.map(gifData => gifData.images.original.url)
      })
    })
  }

  render() {
    return (
      <div className="row">
        <GifList gifs={this.state.gifs} />
        <GifSearch onSubmit={this.handleSearch} />
      </div>
    )
  }
}

export default GifListContainer