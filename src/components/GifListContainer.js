import React from 'react';
import GifList from './GifList'
import GifSearch from './GifSearch'


export default class GifListContainer extends React.Component {

  state = {
      gifs: []
    }

  getGifs = (inputText = "dolphin") => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${inputText}&api_key=QmxbK05NJNQVZMZhDwfEGhNsF2RtfWvc&rating=g`)
      .then(response => response.json())
      .then(({data}) => {
        this.setState({gifs: data.map(obj => ({url: obj.images.original.url}))})
      })
    }

  componentDidMount(){
    this.getGifs()
  }

  render() {
    return (
      <div>
        <GifList gifs={this.state.gifs}/>
        <GifSearch getGifs={this.getGifs}/>
      </div>
    )
  }
}
