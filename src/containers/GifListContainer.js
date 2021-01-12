import React from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {

    state = {
        gifs: []
    }

    fetchGifs = (query = "search") => {
        let queryPath = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=lHGtGIHiCY16NoWc1ePwdsOAKIahGHhO&rating=g&limit=3`
        fetch(queryPath)
        .then(resp => resp.json())
        .then(({data}) => {
            this.setState({ gifs: data.map(gif => ({ url: gif.images.original.url }) ) })
        })
    }

    componentDidMount(){
        this.fetchGifs()
    }

    render() {
        return(
            <div>
                <GifSearch submitHandler={this.fetchGifs} />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }
}

export default GifListContainer;