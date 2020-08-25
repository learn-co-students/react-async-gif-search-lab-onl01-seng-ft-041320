import React, { Component } from 'react'

class GifList extends Component {
  render() {
    return (
      <div className="col-md-6">
        <ul>
          {this.props.gifs.map((gifUrl, index) => <li key={index} ><img alt={`meme${index}`} src={gifUrl} /></li>)}
        </ul>
      </div>
    )
  }
}

export default GifList