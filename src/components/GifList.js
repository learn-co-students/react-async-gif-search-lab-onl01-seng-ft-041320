import React from 'react';

export default class GifList extends React.Component {

  render() {
    return (
      <div>
        <ul>
          {this.props.gifs.map(gif =>
            <li>
              <img src={gif.url} key={gif.url} alt={gif.hash}/>
            </li>)}
        </ul>
      </div>
    )
  }
}
