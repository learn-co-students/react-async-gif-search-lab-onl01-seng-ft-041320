import React from 'react';

class GifList extends React.Component {
    render () {
        console.log(this.props.gifs)
        return (
            <ul>
                {this.props.gifs.map(gif => <li><img src={gif.images.original.url} /></li>)}
            </ul>
        )
    }
}

export default GifList;