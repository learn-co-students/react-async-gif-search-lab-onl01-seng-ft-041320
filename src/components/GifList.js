import React from 'react';


class GifList extends React.Component {

    render() {
        return ( 
            <div>
                <ul>
                    {this.props.gifs.map(gif => <img key={gif.url} src={gif.url} alt="gif" /> )}
                </ul>
            </div>)
    }
}

export default GifList;
