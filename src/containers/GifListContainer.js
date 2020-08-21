import React, { Component } from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {

  state = {
    gifs: []
  }

  render() {
    return (
      <div>
        <GifSearch fetchGifs={this.fetchGifs} />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }

  fetchGifs() {
    let url = 'https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g';

    fetch(url)
    .then(res => res.json())
    .then(({data}) => {
      this.setState({gifs: data.map(gif => ({ url: gif.images.original.url }))})
    })
  }

  componentDidMount() {
    this.fetchGifs();
  }

}
